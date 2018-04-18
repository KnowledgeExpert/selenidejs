"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const element_1 = require("./element");
const be_1 = require("../conditions/helpers/be");
const __1 = require("..");
const wait_1 = require("../wait");
const byWebElementLocator_1 = require("./locators/byWebElementLocator");
const with_1 = require("../locators/with");
const collection_1 = require("./collection");
const byWebElementsLocator_1 = require("./locators/byWebElementsLocator");
const screenshot_1 = require("../screenshot");
var Browser;
(function (Browser) {
    Browser.params = protractor_1.browser.params;
    async function get(url) {
        if (getSelenidejsParam('width') && getSelenidejsParam('height')) {
            await resizeWindow(getSelenidejsParam('width'), getSelenidejsParam('height'));
        }
        await protractor_1.browser.get(url);
    }
    Browser.get = get;
    async function viewportScreenshot() {
        return await protractor_1.browser.takeScreenshot();
    }
    Browser.viewportScreenshot = viewportScreenshot;
    async function fullpageScreenshot() {
        return await screenshot_1.Screenshot.take();
    }
    Browser.fullpageScreenshot = fullpageScreenshot;
    async function resizeWindow(width, height) {
        await protractor_1.browser.manage().window().setSize(width, height);
    }
    Browser.resizeWindow = resizeWindow;
    function element(locator) {
        return new element_1.Element(new byWebElementLocator_1.ByWebElementLocator(typeof locator === "string"
            ? locator.includes("/") ? with_1.With.xpath(locator) : with_1.With.css(locator)
            : locator));
    }
    Browser.element = element;
    function all(locator) {
        return new collection_1.Collection(new byWebElementsLocator_1.ByWebElementsLocator(typeof locator === "string"
            ? locator.includes("/") ? with_1.With.xpath(locator) : with_1.With.css(locator)
            : locator));
    }
    Browser.all = all;
    async function should(condition, timeout) {
        return timeout ? await wait_1.Wait.shouldMatch(protractor_1.browser, condition, timeout) : await wait_1.Wait.shouldMatch(protractor_1.browser, condition);
    }
    Browser.should = should;
    async function shouldNot(condition, timeout) {
        return await should(__1.Condition.not(condition), timeout);
    }
    Browser.shouldNot = shouldNot;
    async function is(condition, timeout) {
        return timeout ? await wait_1.Wait.isMatch(protractor_1.browser, condition, timeout) : await wait_1.Wait.isMatch(protractor_1.browser, condition);
    }
    Browser.is = is;
    async function isNot(condition, timeout) {
        return await is(__1.Condition.not(condition), timeout);
    }
    Browser.isNot = isNot;
    async function nextTab() {
        const currentTab = await protractor_1.browser.getWindowHandle();
        const allTabs = await protractor_1.browser.getAllWindowHandles();
        const currentTabIndex = allTabs.indexOf(currentTab);
        await protractor_1.browser.switchTo().window(currentTabIndex >= allTabs.length ? allTabs[0] : allTabs[currentTabIndex + 1]);
    }
    Browser.nextTab = nextTab;
    async function previosTab() {
        const currentTab = await protractor_1.browser.getWindowHandle();
        const allTabs = await protractor_1.browser.getAllWindowHandles();
        const currentTabIndex = allTabs.indexOf(currentTab);
        await protractor_1.browser.switchTo().window(currentTabIndex > 0 ? allTabs[currentTabIndex - 1] : allTabs[allTabs.length - 1]);
    }
    Browser.previosTab = previosTab;
    async function switchToFrame(frameElement) {
        await frameElement.should(be_1.be.visible());
        await protractor_1.browser.switchTo().frame(await frameElement.getWebElement());
    }
    Browser.switchToFrame = switchToFrame;
    async function switchToDefaultFrame() {
        await protractor_1.browser.switchTo().defaultContent();
    }
    Browser.switchToDefaultFrame = switchToDefaultFrame;
    async function clearCacheAndCookies() {
        try {
            await protractor_1.browser.executeScript('window.localStorage.clear();');
        }
        catch (ignored) {
        }
        try {
            await protractor_1.browser.executeScript('window.sessionStorage.clear();');
        }
        catch (ignored) {
        }
        try {
            await protractor_1.browser.driver.manage().deleteAllCookies();
        }
        catch (ignored) {
        }
    }
    Browser.clearCacheAndCookies = clearCacheAndCookies;
    function getSelenidejsParam(dotSeparatedPath) {
        return getValueFromPath(Browser.params, `selenidejs.${dotSeparatedPath}`);
    }
    function getValueFromPath(obj, objPath) {
        if (obj === undefined)
            return undefined;
        if (obj === null)
            return null;
        const parts = objPath.split('.');
        return parts.length === 1 ? obj[parts[0]] : getValueFromPath(obj[parts[0]], parts.slice(1).reduce((f, s) => `${f} ${s}`));
    }
    Browser.getValueFromPath = getValueFromPath;
})(Browser = exports.Browser || (exports.Browser = {}));
//# sourceMappingURL=browser.js.map