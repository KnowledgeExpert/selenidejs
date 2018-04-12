"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const be_1 = require("../conditions/helpers/be");
var BrowserHelpers;
(function (BrowserHelpers) {
    async function openUrl(url) {
        await protractor_1.browser.get(url);
        await protractor_1.browser.manage().window().setSize(protractor_1.browser.params.windowSize.width, protractor_1.browser.params.windowSize.hight);
    }
    BrowserHelpers.openUrl = openUrl;
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
    BrowserHelpers.clearCacheAndCookies = clearCacheAndCookies;
    async function nextTab() {
        const currentTab = await protractor_1.browser.getWindowHandle();
        const allTabs = await protractor_1.browser.getAllWindowHandles();
        const currentTabIndex = allTabs.indexOf(currentTab);
        await protractor_1.browser.switchTo().window(currentTabIndex >= allTabs.length ? allTabs[0] : allTabs[currentTabIndex + 1]);
    }
    BrowserHelpers.nextTab = nextTab;
    async function previosTab() {
        const currentTab = await protractor_1.browser.getWindowHandle();
        const allTabs = await protractor_1.browser.getAllWindowHandles();
        const currentTabIndex = allTabs.indexOf(currentTab);
        await protractor_1.browser.switchTo().window(currentTabIndex > 0 ? allTabs[currentTabIndex - 1] : allTabs[allTabs.length - 1]);
    }
    BrowserHelpers.previosTab = previosTab;
    async function switchToFrame(frameElement) {
        await frameElement.should(be_1.be.visible());
        await protractor_1.browser.switchTo().frame(await frameElement.getWebElement());
    }
    BrowserHelpers.switchToFrame = switchToFrame;
    async function switchToDefaultFrame() {
        await protractor_1.browser.switchTo().defaultContent();
    }
    BrowserHelpers.switchToDefaultFrame = switchToDefaultFrame;
})(BrowserHelpers = exports.BrowserHelpers || (exports.BrowserHelpers = {}));
//# sourceMappingURL=browserHelpers.js.map