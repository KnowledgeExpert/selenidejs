import {browser} from "protractor";
import {Element} from "../base-entities/element";
import {be} from "../conditions/helpers/be";

export module Browser {

    let windowResized: boolean = false;

    export async function get(url: string) {
        await browser.get(url);
        if (!windowResized) {
            await resizeWindow();
            windowResized = true;
        }
    }

    export async function resizeWindow() {
        // getPropValue(['params', 'windowSize', 'width'], browser);
        // getPropValue(['params', 'windowSize', 'height'], browser);
        if (browser.params.windowSize.width && browser.params.windowSize.height) {
            await browser.manage().window().setSize(browser.params.windowSize.width, browser.params.windowSize.height);
            windowResized = true;
        }
    }

    function getPropValue(pathToProp, objectToScan) {
        return pathToProp.reduce(
            (step, otherStep) => (step && step[otherStep] ? step[otherStep] : null),
            objectToScan)
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