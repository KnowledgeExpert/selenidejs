import * as child_process from "child_process";
import {Builder, WebDriver} from "selenium-webdriver";


export namespace TestUtils {

    const serverPort = 4445;
    let server: child_process.ChildProcess;

    export function startServer() {
        server = child_process.spawn(`npm run startserver -- --p ${serverPort}`, [], {shell: true});
    }

    export function shutdownServer() {
        server.kill("SIGINT");
    }

    export function resourcesUrl(): string {
        return `http://localhost:4444/`;
    }

    export function buildWebDriver(browserName = 'chrome',
                                   // remoteUrl = process.env.SELENIDEJS_REMOTE_URL): WebDriver {
                                   remoteUrl = "http://217.73.84.220:4444/wd/hub"): WebDriver {
        return new Builder().forBrowser(browserName)
            .usingServer(remoteUrl)
            .build();
    }
}