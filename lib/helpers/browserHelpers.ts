import {browser} from "protractor";
import {Element} from "../base-entities/element";
import {be} from "../conditions/helpers/be";


export module BrowserHelpers {

    export async function openUrl(url: string) {
        await browser.get(url);
        await browser.manage().window().setSize(browser.params.windowSize.width, browser.params.windowSize.hight);
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