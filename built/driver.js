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
const actions_1 = require("./actions");
const condition_1 = require("./condition");
const configuration_1 = require("./configuration");
const elementsBuilder_1 = require("./elementsBuilder");
const hookExecutor_1 = require("./hooks/hookExecutor");
const wait_1 = require("./wait");
class Driver {
    constructor(customConfiguration) {
        this.configuration = new configuration_1.Configuration(customConfiguration);
        const hookExecutor = new hookExecutor_1.HookExecutor(this, this);
        this.wait = new wait_1.Wait(this, this.configuration, hookExecutor);
    }
    async open(url) {
        return actions_1.Actions.open(url)(this);
    }
    async resizeWindow(width = this.configuration.windowWidth, height = this.configuration.windowHeight) {
        return actions_1.Actions.resizeWindow(width, height)(this);
    }
    async close() {
        return actions_1.Actions.close(this);
    }
    async quit() {
        return actions_1.Actions.quit(this);
    }
    async refresh() {
        return actions_1.Actions.refresh(this);
    }
    async acceptAlert() {
        return actions_1.Actions.acceptAlert(this);
    }
    async url() {
        return actions_1.Actions.url(this);
    }
    async title() {
        return actions_1.Actions.title(this);
    }
    async pageSource() {
        return actions_1.Actions.pageSource(this);
    }
    /* tslint:disable:ban-types */
    async executeScript(script, ...args) {
        return actions_1.Actions.executeScript(script, ...args)(this);
    }
    /* tslint:enable:ban-types */
    async getTabs() {
        return actions_1.Actions.tabs(this);
    }
    async nextTab() {
        return actions_1.Actions.nextTab(this);
    }
    async previousTab() {
        return actions_1.Actions.previousTab(this);
    }
    async switchToTab(tabId) {
        return actions_1.Actions.switchToTab(tabId)(this);
    }
    async switchToFrame(frameElement) {
        return actions_1.Actions.switchToFrame(frameElement)(this);
    }
    async switchToDefaultFrame() {
        return actions_1.Actions.switchToDefaultFrame(this);
    }
    async clearCacheAndCookies() {
        return actions_1.Actions.clearCacheAndCookies(this);
    }
    async screenshot() {
        return actions_1.Actions.screenshot(this);
    }
    actions() {
        return this.configuration.webdriver.actions();
    }
    element(cssOrXpathOrBy) {
        return elementsBuilder_1.ElementsBuilder.element(cssOrXpathOrBy)(this);
    }
    all(cssOrXpathOrBy) {
        return elementsBuilder_1.ElementsBuilder.all(cssOrXpathOrBy)(this);
    }
    wrapElement(webelement) {
        return elementsBuilder_1.ElementsBuilder.wrapElement(webelement)(this);
    }
    wrapAll(webelements) {
        return elementsBuilder_1.ElementsBuilder.wrapAll(webelements)(this);
    }
    async should(condition, timeout) {
        return this.wait.shouldMatch(condition, timeout);
    }
    async shouldNot(condition, timeout) {
        return this.should(condition_1.Condition.not(condition), timeout);
    }
    async is(condition, timeout) {
        return this.wait.isMatch(condition, timeout);
    }
    async isNot(condition, timeout) {
        return this.is(condition_1.Condition.not(condition), timeout);
    }
    async findElements(locator) {
        return this.configuration.webdriver.findElements(locator);
    }
    async findElement(locator) {
        return this.configuration.webdriver.findElement(locator);
    }
    toString() {
        return 'browser';
    }
}
exports.Driver = Driver;
//# sourceMappingURL=driver.js.map