"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const be_1 = require("../conditions/helpers/be");
var Browser;
(function (Browser) {
    let windowResized = false;
    async function get(url) {
        await protractor_1.browser.get(url);
        if (!windowResized) {
            await resizeWindow();
            windowResized = true;
        }
    }
    Browser.get = get;
    async function resizeWindow() {
        getPropValue(['params', 'windowSize', 'width'], protractor_1.browser);
        getPropValue(['params', 'windowSize', 'height'], protractor_1.browser);
        if (!protractor_1.browser.params.windowSize.width == null && !protractor_1.browser.params.windowSize.height == null) {
            await protractor_1.browser.manage().window().setSize(protractor_1.browser.params.windowSize.width, protractor_1.browser.params.windowSize.height);
            windowResized = true;
        }
    }
    Browser.resizeWindow = resizeWindow;
    function getPropValue(pathToProp, objectToScan) {
        return pathToProp.reduce((step, otherStep) => (step && step[otherStep] ? step[otherStep] : null), objectToScan);
    }
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
        await protractor_1.browser.driver.manage().deleteAllCookies();
    }
    Browser.clearCacheAndCookies = clearCacheAndCookies;
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
})(Browser = exports.Browser || (exports.Browser = {}));
//# sourceMappingURL=browser.js.map