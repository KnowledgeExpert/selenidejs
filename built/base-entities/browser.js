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
const utils_1 = require("../utils");
var Browser;
(function (Browser) {
    function params(dotSeparatedPath) {
        return dotSeparatedPath ? utils_1.Utils.getValueFromPath(protractor_1.browser.params, dotSeparatedPath) : protractor_1.browser.params;
    }
    Browser.params = params;
    async function get(url) {
        if (utils_1.Utils.getSelenidejsParam('windowSize.width') && utils_1.Utils.getSelenidejsParam('windowSize.height')) {
            await resizeWindow(utils_1.Utils.getSelenidejsParam('windowSize.width'), utils_1.Utils.getSelenidejsParam('windowSize.height'));
        }
        await protractor_1.browser.get(url);
    }
    Browser.get = get;
    async function title() {
        return await protractor_1.browser.getTitle();
    }
    Browser.title = title;
    async function pageSource() {
        return await protractor_1.browser.getPageSource();
    }
    Browser.pageSource = pageSource;
    async function screenshot() {
        return await protractor_1.browser.takeScreenshot();
    }
    Browser.screenshot = screenshot;
    async function fullpageScreenshot() {
        return await screenshot_1.Screenshot.take();
    }
    Browser.fullpageScreenshot = fullpageScreenshot;
    async function resizeWindow(width, height) {
        await protractor_1.browser.manage().window().setSize(width, height);
    }
    Browser.resizeWindow = resizeWindow;
    function element(locator) {
        return new element_1.Element(new byWebElementLocator_1.ByWebElementLocator(typeof locator === 'string'
            ? locator.includes('/') ? with_1.With.xpath(locator) : with_1.With.css(locator)
            : locator));
    }
    Browser.element = element;
    function all(locator) {
        return new collection_1.Collection(new byWebElementsLocator_1.ByWebElementsLocator(typeof locator === 'string'
            ? locator.includes('/') ? with_1.With.xpath(locator) : with_1.With.css(locator)
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
    async function executeScript(script, ...args) {
        return await protractor_1.browser.executeScript(script, args);
    }
    Browser.executeScript = executeScript;
    function actions() {
        return protractor_1.browser.actions();
    }
    Browser.actions = actions;
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
        await frameElement.should(be_1.be.visible);
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
})(Browser = exports.Browser || (exports.Browser = {}));
//# sourceMappingURL=browser.js.map