"use strict";
// Copyright 2018 Knowledge Expert SA
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const element_1 = require("./element");
const be_1 = require("../conditions/helpers/be");
const __1 = require("..");
const wait_1 = require("../wait");
const byWebElementLocator_1 = require("./locators/byWebElementLocator");
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
    async function refresh() {
        await protractor_1.browser.refresh();
    }
    Browser.refresh = refresh;
    function navigate() {
        return protractor_1.browser.navigate();
    }
    Browser.navigate = navigate;
    function driver() {
        return protractor_1.browser.driver;
    }
    Browser.driver = driver;
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
    function element(cssOrXpathOrBy) {
        return new element_1.Element(new byWebElementLocator_1.ByWebElementLocator(utils_1.toBy(cssOrXpathOrBy)));
    }
    Browser.element = element;
    function all(cssOrXpathOrBy) {
        return new collection_1.Collection(new byWebElementsLocator_1.ByWebElementsLocator(utils_1.toBy(cssOrXpathOrBy)));
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
    async function matching(condition, timeout) {
        return timeout ? await wait_1.Wait.isMatch(protractor_1.browser, condition, timeout) : await wait_1.Wait.isMatch(protractor_1.browser, condition);
    }
    Browser.matching = matching;
    async function matchingNot(condition, timeout) {
        return await is(__1.Condition.not(condition), timeout);
    }
    Browser.matchingNot = matchingNot;
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