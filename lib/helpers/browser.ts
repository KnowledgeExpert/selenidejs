import {browser} from "protractor";
import {Element} from "../base-entities/element";
import {be} from "../conditions/helpers/be";

export namespace Browser {

    let windowResized: boolean = false;

    export async function get(url: string) {
        await browser.get(url);
        if (!windowResized) {
            await resizeWindow();
            windowResized = true;
        }
    }

    export async function resizeWindow() {
        if (!(getValueFromPath(browser, 'params.windowSize.width')) === undefined
            && !(getValueFromPath(browser, 'params.windowSize.height')) === undefined) {
            await browser.manage().window().setSize(browser.params.windowSize.width, browser.params.windowSize.height);
            windowResized = true;
        }
    }

    function getValueFromPath(obj: any, objPath: string): any {
        if (obj === undefined) return undefined;
        const parts = objPath.split('.');
        return parts.length === 1 ? obj[parts[0]] : getValueFromPath(obj[parts[0]], parts.slice(1).reduce((f, s) => `${f} ${s}`));
    }


    export async function clearCacheAndCookies() {
        try {
            await browser.executeScript('window.localStorage.clear();');
        } catch (ignored) {
        }
        try {
            await browser.executeScript('window.sessionStorage.clear();');
        } catch (ignored) {
        }
        await browser.driver.manage().deleteAllCookies();
    }

    export async function nextTab() {
        const currentTab = await browser.getWindowHandle();
        const allTabs = await browser.getAllWindowHandles();
        const currentTabIndex = allTabs.indexOf(currentTab);
        await browser.switchTo().window(currentTabIndex >= allTabs.length ? allTabs[0] : allTabs[currentTabIndex + 1])
    }

    export async function previosTab() {
        const currentTab = await browser.getWindowHandle();
        const allTabs = await browser.getAllWindowHandles();
        const currentTabIndex = allTabs.indexOf(currentTab);
        await browser.switchTo().window(currentTabIndex > 0 ? allTabs[currentTabIndex - 1] : allTabs[allTabs.length - 1]);
    }

    export async function switchToFrame(frameElement: Element) {
        await frameElement.should(be.visible());
        await browser.switchTo().frame(await frameElement.getWebElement());
    }

    export async function switchToDefaultFrame() {
        await browser.switchTo().defaultContent();
    }
}