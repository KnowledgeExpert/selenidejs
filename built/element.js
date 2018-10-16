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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const selenium_webdriver_1 = require("selenium-webdriver");
const actions_1 = require("./actions");
const condition_1 = require("./condition");
const elementActionHooks_1 = require("./hooks/elementActionHooks");
const hookExecutor_1 = require("./hooks/hookExecutor");
const wait_1 = require("./wait");
class Element {
    constructor(locator, driver) {
        this.locator = locator;
        this.driver = driver;
        this.wait = new wait_1.Wait(this, this.driver.configuration, new hookExecutor_1.HookExecutor(driver, this));
    }
    async click() {
        return actions_1.Actions.click(this);
    }
    async setValue(value) {
        return actions_1.Actions.setValue(value)(this);
    }
    async sendKeys(value) {
        return actions_1.Actions.sendKeys(value)(this);
    }
    async doubleClick() {
        return actions_1.Actions.doubleClick(this);
    }
    async hover() {
        return actions_1.Actions.hover(this);
    }
    async contextClick() {
        return actions_1.Actions.contextClick(this);
    }
    async pressEnter() {
        return actions_1.Actions.pressEnter(this);
    }
    async pressEscape() {
        return actions_1.Actions.pressEscape(this);
    }
    async pressTab() {
        return actions_1.Actions.pressTab(this);
    }
    async pressKey(key) {
        return actions_1.Actions.pressKey(key)(this);
    }
    async scrollTo() {
        return actions_1.Actions.scrollTo(this);
    }
    async should(condition, timeout) {
        return this.wait.shouldMatch(condition, timeout);
    }
    async shouldNot(condition) {
        return this.should(condition_1.Condition.not(condition));
    }
    async is(condition, timeout) {
        return this.wait.isMatch(condition, timeout);
    }
    async isNot(condition) {
        return this.is(condition_1.Condition.not(condition));
    }
    async isVisible() {
        return actions_1.Actions.visibility(this);
    }
    async isPresent() {
        return actions_1.Actions.presence(this);
    }
    async text() {
        return actions_1.Actions.text(this);
    }
    async hasAttribute(attributeName) {
        return actions_1.Actions.attribute(attributeName)(this).then(result => true, err => false);
    }
    async attribute(attributeName) {
        return actions_1.Actions.attribute(attributeName)(this);
    }
    async innerHtml() {
        return actions_1.Actions.attribute('innerHtml')(this);
    }
    async outerHtml() {
        return actions_1.Actions.attribute('outerHtml')(this);
    }
    async value() {
        return actions_1.Actions.attribute('value')(this);
    }
    async getWebElement() {
        return this.locator.find();
    }
    parent() {
        return actions_1.Actions.parent(this);
    }
    followingSibling(predicate = '') {
        return actions_1.Actions.followingSibling(predicate)(this);
    }
    element(cssOrXpathOrBy) {
        return actions_1.Actions.element(cssOrXpathOrBy)(this);
    }
    all(cssOrXpathOrBy) {
        return actions_1.Actions.all(cssOrXpathOrBy)(this);
    }
    async equals(element) {
        return selenium_webdriver_1.WebElement.equals(await this.getWebElement(), await element.getWebElement());
    }
    async findElements(locator) {
        return this.getWebElement().then(root => root.findElements(locator));
    }
    async findElement(locator) {
        return this.getWebElement().then(root => root.findElement(locator));
    }
    toString() {
        return this.locator.toString();
    }
}
__decorate([
    elementActionHooks_1.ElementActionHooks
], Element.prototype, "click", null);
__decorate([
    elementActionHooks_1.ElementActionHooks
], Element.prototype, "setValue", null);
__decorate([
    elementActionHooks_1.ElementActionHooks
], Element.prototype, "sendKeys", null);
__decorate([
    elementActionHooks_1.ElementActionHooks
], Element.prototype, "doubleClick", null);
__decorate([
    elementActionHooks_1.ElementActionHooks
], Element.prototype, "hover", null);
__decorate([
    elementActionHooks_1.ElementActionHooks
], Element.prototype, "contextClick", null);
__decorate([
    elementActionHooks_1.ElementActionHooks
], Element.prototype, "pressEnter", null);
__decorate([
    elementActionHooks_1.ElementActionHooks
], Element.prototype, "pressEscape", null);
__decorate([
    elementActionHooks_1.ElementActionHooks
], Element.prototype, "pressTab", null);
__decorate([
    elementActionHooks_1.ElementActionHooks
], Element.prototype, "pressKey", null);
__decorate([
    elementActionHooks_1.ElementActionHooks
], Element.prototype, "scrollTo", null);
exports.Element = Element;
//# sourceMappingURL=element.js.map