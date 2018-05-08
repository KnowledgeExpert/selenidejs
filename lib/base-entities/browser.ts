import {browser, ProtractorBrowser} from "protractor";
import {Element} from "./element";
import {be} from "../conditions/helpers/be";
import {BrowserCondition, Condition} from "..";
import {Wait} from "../wait";
import {ActionSequence, By} from "selenium-webdriver";
import {ByWebElementLocator} from "./locators/byWebElementLocator";
import {With} from "../locators/with";
import {Collection} from "./collection";
import {ByWebElementsLocator} from "./locators/byWebElementsLocator";
import {Screenshot} from "../screenshot";
import {Utils} from "../utils";


export namespace Browser {

    export function params(dotSeparatedPath?: string): any {
        return dotSeparatedPath ? Utils.getValueFromPath(browser.params, dotSeparatedPath) : browser.params;
    }

    export async function get(url: string) {
        if (Utils.getSelenidejsParam('windowSize.width') && Utils.getSelenidejsParam('windowSize.height')) {
            await resizeWindow(Utils.getSelenidejsParam('windowSize.width'), Utils.getSelenidejsParam('windowSize.height'));
        }
        await browser.get(url);
    }

    export async function title(): Promise<string> {
        return await browser.getTitle();
    }

    export async function pageSource(): Promise<string> {
        return await browser.getPageSource();
    }

    export async function screenshot(): Promise<string> {
        return await browser.takeScreenshot();
    }

    export async function fullpageScreenshot(): Promise<Buffer> {
        return await Screenshot.take();
    }

    export async function resizeWindow(width: number, height: number) {
        await browser.manage().window().setSize(width, height);
    }

    export function element(locator: string | By): Element {
        return new Element(new ByWebElementLocator(typeof locator === "string"
            ? locator.includes("/") ? With.xpath(locator) : With.css(locator)
            : locator))
    }

    export function all(locator: string | By): Collection {
        return new Collection(new ByWebElementsLocator(typeof locator === "string"
            ? locator.includes("/") ? With.xpath(locator) : With.css(locator)
            : locator));
    }

    export async function should(condition: BrowserCondition, timeout?: number): Promise<ProtractorBrowser> {
        return timeout ? await Wait.shouldMatch(browser, condition, timeout) : await Wait.shouldMatch(browser, condition);
    }

    export async function shouldNot(condition: BrowserCondition, timeout?: number): Promise<ProtractorBrowser> {
        return await should(Condition.not(condition), timeout);
    }

    export async function is(condition: BrowserCondition, timeout?: number): Promise<boolean> {
        return timeout ? await Wait.isMatch(browser, condition, timeout) : await Wait.isMatch(browser, condition);
    }

    export async function isNot(condition: BrowserCondition, timeout?: number): Promise<boolean> {
        return await is(Condition.not(condition), timeout);
    }

    export async function executeScript(script: string | Function, ...args: any[]) {
        return await browser.executeScript(script, args);
    }

    export function actions(): ActionSequence {
        return browser.actions();
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
        await frameElement.should(be.visible);
        await browser.switchTo().frame(await frameElement.getWebElement());
    }

    export async function switchToDefaultFrame() {
        await browser.switchTo().defaultContent();
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
        try {
            await browser.driver.manage().deleteAllCookies();
        } catch (ignored) {
        }
    }

}