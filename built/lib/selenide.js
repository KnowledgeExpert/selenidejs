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
const configuration_1 = require("./configuration");
const browser_1 = require("./browser");
var Selenide;
(function (Selenide) {
    function setDriver(driver, configuration = configuration_1.Configuration.shared) {
        Selenide.configuration = configuration; // todo
        Selenide.configuration.driver = driver;
        Selenide.browser = new browser_1.Browser(configuration);
    }
    Selenide.setDriver = setDriver;
    async function get(url) {
        return Selenide.browser.get(url);
    }
    Selenide.get = get;
    async function close() {
        return Selenide.browser.closeCurrentTab();
    }
    Selenide.close = close;
    async function quit() {
        return Selenide.browser.quit();
    }
    Selenide.quit = quit;
    async function url() {
        return Selenide.browser.url();
    }
    Selenide.url = url;
    async function title() {
        return Selenide.browser.title();
    }
    Selenide.title = title;
    async function pageSource() {
        return Selenide.browser.pageSource();
    }
    Selenide.pageSource = pageSource;
    async function screenshot() {
        return Selenide.browser.screenshot();
    }
    Selenide.screenshot = screenshot;
    async function resizeWindow(width, height) {
        return Selenide.browser.resizeWindow(width, height);
    }
    Selenide.resizeWindow = resizeWindow;
    function actions() {
        return Selenide.browser.driver.actions();
    }
    Selenide.actions = actions;
    function element(cssOrXpathOrBy) {
        return Selenide.browser.element(cssOrXpathOrBy);
    }
    Selenide.element = element;
    function all(cssOrXpathOrBy) {
        return Selenide.browser.all(cssOrXpathOrBy);
    }
    Selenide.all = all;
    async function should(condition, timeout) {
        return Selenide.browser.should(condition, timeout);
    }
    Selenide.should = should;
    async function shouldNot(condition, timeout) {
        return Selenide.browser.shouldNot(condition, timeout);
    }
    Selenide.shouldNot = shouldNot;
    // export async function is(condition: DriverCondition, timeout?: number): Promise<boolean> {
    //     return browser.matches(condition, timeout);
    // }
    //
    // export async function isNot(condition: DriverCondition, timeout?: number): Promise<boolean> {
    //     return browser.matchesNot(condition, timeout);
    // }
    /* tslint:disable:ban-types */
    async function executeScript(script, ...args) {
        return Selenide.browser.executeScript(script, ...args);
    }
    Selenide.executeScript = executeScript;
    /* tslint:enable:ban-types */
    async function nextTab() {
        return Selenide.browser.nextTab();
    }
    Selenide.nextTab = nextTab;
    async function previousTab() {
        return Selenide.browser.previousTab();
    }
    Selenide.previousTab = previousTab;
    async function switchToFrame(frameElement) {
        return Selenide.browser.switchToFrame(frameElement);
    }
    Selenide.switchToFrame = switchToFrame;
    async function switchToDefaultFrame() {
        return Selenide.browser.switchToDefaultFrame();
    }
    Selenide.switchToDefaultFrame = switchToDefaultFrame;
    async function clearCacheAndCookies() {
        return Selenide.browser.clearCacheAndCookies();
    }
    Selenide.clearCacheAndCookies = clearCacheAndCookies;
})(Selenide = exports.Selenide || (exports.Selenide = {}));
//# sourceMappingURL=selenide.js.map