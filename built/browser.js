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
    Browser.driver = new driver_1.Driver();
    Browser.configuration = Browser.driver.configuration;
    async function open(url) {
        return Browser.driver.open(url);
    }
    Browser.open = open;
    async function close() {
        return Browser.driver.close();
    }
    Browser.close = close;
    async function quit() {
        return Browser.driver.quit();
    }
    Browser.quit = quit;
    async function refresh() {
        return Browser.driver.refresh();
    }
    Browser.refresh = refresh;
    async function acceptAlert() {
        return Browser.driver.acceptAlert();
    }
    Browser.acceptAlert = acceptAlert;
    async function url() {
        return Browser.driver.url();
    }
    Browser.url = url;
    async function title() {
        return Browser.driver.title();
    }
    Browser.title = title;
    async function pageSource() {
        return Browser.driver.pageSource();
    }
    Browser.pageSource = pageSource;
    async function screenshot() {
        return Browser.driver.screenshot();
    }
    Browser.screenshot = screenshot;
    async function resizeWindow(width, height) {
        return Browser.driver.resizeWindow(width, height);
    }
    Browser.resizeWindow = resizeWindow;
    function actions() {
        return Browser.driver.actions();
    }
    Browser.actions = actions;
    function element(cssOrXpathOrBy) {
        return Browser.driver.element(cssOrXpathOrBy);
    }
    Browser.element = element;
    function all(cssOrXpathOrBy) {
        return Browser.driver.all(cssOrXpathOrBy);
    }
    Browser.all = all;
    function wrapElement(webelement) {
        return Browser.driver.wrapElement(webelement);
    }
    Browser.wrapElement = wrapElement;
    function wrapAll(webelements) {
        return Browser.driver.wrapAll(webelements);
    }
    Browser.wrapAll = wrapAll;
    async function should(condition, timeout) {
        return Browser.driver.should(condition, timeout);
    }
    Browser.should = should;
    async function shouldNot(condition, timeout) {
        return Browser.driver.shouldNot(condition, timeout);
    }
    Browser.shouldNot = shouldNot;
    async function is(condition, timeout) {
        return Browser.driver.is(condition, timeout);
    }
    Browser.is = is;
    async function isNot(condition, timeout) {
        return Browser.driver.isNot(condition, timeout);
    }
    Browser.isNot = isNot;
    /* tslint:disable:ban-types */
    async function executeScript(script, ...args) {
        return Browser.driver.executeScript(script, ...args);
    }
    Browser.executeScript = executeScript;
    /* tslint:enable:ban-types */
    async function getTabs() {
        return Browser.driver.getTabs();
    }
    Browser.getTabs = getTabs;
    async function nextTab() {
        return Browser.driver.nextTab();
    }
    Browser.nextTab = nextTab;
    async function previousTab() {
        return Browser.driver.previousTab();
    }
    Browser.previousTab = previousTab;
    async function switchToTab(tabId) {
        return Browser.driver.switchToTab(tabId);
    }
    Browser.switchToTab = switchToTab;
    async function switchToFrame(frameElement) {
        return Browser.driver.switchToFrame(frameElement);
    }
    Browser.switchToFrame = switchToFrame;
    async function switchToDefaultFrame() {
        return Browser.driver.switchToDefaultFrame();
    }
    Browser.switchToDefaultFrame = switchToDefaultFrame;
    async function clearCacheAndCookies() {
        return Browser.driver.clearCacheAndCookies();
    }
    Browser.clearCacheAndCookies = clearCacheAndCookies;
})(Browser = exports.Browser || (exports.Browser = {}));
//# sourceMappingURL=browser.js.map