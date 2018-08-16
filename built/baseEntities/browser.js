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
const driver_1 = require("./driver");
var Browser;
(function (Browser) {
    function setDriver(driver, configuration) {
        /* tslint:disable:no-string-literal */
        Browser.selenideDriver = driver['should']
            ? driver
            : new driver_1.Driver(driver, configuration);
        Browser.config = Browser.selenideDriver.config;
        /* tslint:enable:no-string-literal */
    }
    Browser.setDriver = setDriver;
    async function get(url) {
        return Browser.selenideDriver.get(url);
    }
    Browser.get = get;
    async function close() {
        return Browser.selenideDriver.close();
    }
    Browser.close = close;
    async function quit() {
        return Browser.selenideDriver.quit();
    }
    Browser.quit = quit;
    async function url() {
        return Browser.selenideDriver.url();
    }
    Browser.url = url;
    async function title() {
        return Browser.selenideDriver.title();
    }
    Browser.title = title;
    async function pageSource() {
        return Browser.selenideDriver.pageSource();
    }
    Browser.pageSource = pageSource;
    async function screenshot() {
        return Browser.selenideDriver.screenshot();
    }
    Browser.screenshot = screenshot;
    async function resizeWindow(width, height) {
        return Browser.selenideDriver.resizeWindow(width, height);
    }
    Browser.resizeWindow = resizeWindow;
    function actions() {
        return Browser.selenideDriver.actions();
    }
    Browser.actions = actions;
    function element(cssOrXpathOrBy) {
        return Browser.selenideDriver.element(cssOrXpathOrBy);
    }
    Browser.element = element;
    function all(cssOrXpathOrBy) {
        return Browser.selenideDriver.all(cssOrXpathOrBy);
    }
    Browser.all = all;
    async function should(condition, timeout) {
        return Browser.selenideDriver.should(condition, timeout);
    }
    Browser.should = should;
    async function shouldNot(condition, timeout) {
        return Browser.selenideDriver.shouldNot(condition, timeout);
    }
    Browser.shouldNot = shouldNot;
    async function is(condition, timeout) {
        return Browser.selenideDriver.is(condition, timeout);
    }
    Browser.is = is;
    async function isNot(condition, timeout) {
        return Browser.selenideDriver.isNot(condition, timeout);
    }
    Browser.isNot = isNot;
    /* tslint:disable:ban-types */
    async function executeScript(script, ...args) {
        return Browser.selenideDriver.executeScript(script, ...args);
    }
    Browser.executeScript = executeScript;
    /* tslint:enable:ban-types */
    async function nextTab() {
        return Browser.selenideDriver.nextTab();
    }
    Browser.nextTab = nextTab;
    async function previousTab() {
        return Browser.selenideDriver.previousTab();
    }
    Browser.previousTab = previousTab;
    async function switchToFrame(frameElement) {
        return Browser.selenideDriver.switchToFrame(frameElement);
    }
    Browser.switchToFrame = switchToFrame;
    async function switchToDefaultFrame() {
        return Browser.selenideDriver.switchToDefaultFrame();
    }
    Browser.switchToDefaultFrame = switchToDefaultFrame;
    async function clearCacheAndCookies() {
        return Browser.selenideDriver.clearCacheAndCookies();
    }
    Browser.clearCacheAndCookies = clearCacheAndCookies;
})(Browser = exports.Browser || (exports.Browser = {}));
//# sourceMappingURL=browser.js.map