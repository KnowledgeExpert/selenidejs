import {Browser} from "./base-entities/browser";
import * as fs from "fs";
import * as path from "path";
import params = Browser.params;


export namespace Utils {

    const DEFAULT_SCREENSHOT_PATH = path.resolve("./screenshots");
    const DEFAULT_HTML_PATH = path.resolve("./htmls");

    export async function savePageSource(filePath = getSelenidejsParam(`htmlPath`) ? getSelenidejsParam(`htmlPath`) : DEFAULT_HTML_PATH): Promise<string> {
        const pageTitle = await Browser.title();
        const dateTime = new Date().toLocaleString().replace(/ /g, `_`);
        const fileName = `${pageTitle}_${dateTime}.html`;
        const completeFilePath = `${filePath}/${fileName}`;
        const pageSource = await Browser.pageSource();
        buildFilePath(filePath);
        fs.writeFileSync(completeFilePath, pageSource);
        return completeFilePath;
    }

    export async function saveScreenshot(filePath = getSelenidejsParam(`screenshotPath`) ? getSelenidejsParam(`screenshotPath`) : DEFAULT_SCREENSHOT_PATH): Promise<string> {
        const pageTitle = await Browser.title();
        const dateTime = new Date().toLocaleString().replace(/ /g, `_`);
        const fileName = `${pageTitle}_${dateTime}.png`;
        const completeFilePath = `${filePath}/${fileName}`;
        const screenshot = await Browser.screenshot();
        buildFilePath(filePath);
        fs.writeFileSync(completeFilePath, new Buffer(screenshot, 'base64'));
        return completeFilePath;
    }

    export function buildFilePath(path: string) {
        const parts = path.split("/").filter(item => item.length !== 0);
        const isFilePresentInPath = !!parts[parts.length - 1].match(/\.[a-zA-Z]+$/g);
        let lastFolder = `/${parts[0]}`;
        for (let i = 1; i < parts.length - (isFilePresentInPath ? 1 : 0); i++) {
            lastFolder = lastFolder + "/" + parts[i];
            if (!(fs.existsSync(lastFolder))) {
                fs.mkdirSync(lastFolder);
            }
        }
    }

    export function getSelenidejsParam(dotSeparatedPath: string) {
        return getValueFromPath(params, `selenidejs.${dotSeparatedPath}`);
    }

    function getValueFromPath(obj: any, objPath: string): any {
        if (obj === undefined) return undefined;
        if (obj === null) return null;
        const parts = objPath.split('.');
        return parts.length === 1 ? obj[parts[0]] : getValueFromPath(obj[parts[0]], parts.slice(1).join(','));
    }

}
