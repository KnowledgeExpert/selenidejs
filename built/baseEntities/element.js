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
const click_1 = require("../commands/click");
const clickByJs_1 = require("../commands/clickByJs");
const contextClick_1 = require("../commands/contextClick");
const doubleClick_1 = require("../commands/doubleClick");
const hover_1 = require("../commands/hover");
const performActionOnVisible_1 = require("../commands/performActionOnVisible");
const pressKey_1 = require("../commands/pressKey");
const scrollIntoView_1 = require("../commands/scrollIntoView");
const sendKeys_1 = require("../commands/sendKeys");
const setValue_1 = require("../commands/setValue");
const setValueByJs_1 = require("../commands/setValueByJs");
const condition_1 = require("../conditions/condition");
const be_1 = require("../conditions/helpers/be");
const with_1 = require("../locators/with");
const utils_1 = require("../utils");
const collection_1 = require("./collection");
const elementActionHooks_1 = require("./elementActionHooks");
const byWebElementLocator_1 = require("./locators/byWebElementLocator");
const byWebElementsLocator_1 = require("./locators/byWebElementsLocator");
const wait_1 = require("./wait");
class Element {
    constructor(locator, driver) {
        this.locator = locator;
        this.driver = driver;
        this.wait = new wait_1.Wait(this, driver.config);
    }
    async click() {
        await new performActionOnVisible_1.PerformActionOnVisible().perform(this, 'click', new click_1.Click().perform);
    }
    async clickByJS() {
        await new performActionOnVisible_1.PerformActionOnVisible().perform(this, 'clickByJs', new clickByJs_1.ClickByJs().perform);
    }
    async setValue(value) {
        await new performActionOnVisible_1.PerformActionOnVisible().perform(this, 'setValue', new setValue_1.SetValue().perform, value);
    }
    async setValueByJS(value) {
        await new performActionOnVisible_1.PerformActionOnVisible().perform(this, 'setValueByJS', new setValueByJs_1.SetValueByJs().perform, value);
    }
    async sendKeys(value) {
        await new performActionOnVisible_1.PerformActionOnVisible().perform(this, 'sendKeys', new sendKeys_1.SendKeys().perform, value);
    }
    async doubleClick() {
        await new performActionOnVisible_1.PerformActionOnVisible().perform(this, 'doubleClick', new doubleClick_1.DoubleClick().perform);
    }
    async hover() {
        await new performActionOnVisible_1.PerformActionOnVisible().perform(this, 'hover', new hover_1.Hover().perform);
    }
    async contextClick() {
        await new performActionOnVisible_1.PerformActionOnVisible().perform(this, 'contextClick', new contextClick_1.ContextClick().perform);
    }
    async pressEnter() {
        await new performActionOnVisible_1.PerformActionOnVisible().perform(this, 'pressEnter', new pressKey_1.PressKey().perform, selenium_webdriver_1.Key.ENTER);
    }
    async pressEscape() {
        await new performActionOnVisible_1.PerformActionOnVisible().perform(this, 'pressEscape', new pressKey_1.PressKey().perform, selenium_webdriver_1.Key.ESCAPE);
    }
    async pressTab() {
        await new performActionOnVisible_1.PerformActionOnVisible().perform(this, 'pressTab', new pressKey_1.PressKey().perform, selenium_webdriver_1.Key.TAB);
    }
    async scrollIntoView() {
        await new performActionOnVisible_1.PerformActionOnVisible().perform(this, 'scrollIntoView', new scrollIntoView_1.ScrollIntoView().perform);
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
        return this.getWebElement().then(result => result.isDisplayed(), err => false);
    }
    async isPresent() {
        return this.getWebElement().then(result => true, err => false);
    }
    async isAbsent() {
        return this.isPresent().then(result => !result);
    }
    async text() {
        await this.should(be_1.be.visible);
        return (await this.getWebElement()).getText();
    }
    async hasAttribute(attributeName) {
        return this.getWebElement().then(result => result.getAttribute(attributeName) !== null, err => false);
    }
    async attribute(attributeName) {
        return this.getWebElement().then(result => result.getAttribute(attributeName), err => '');
    }
    async innerHtml() {
        return this.attribute('innerHTML');
    }
    async outerHtml() {
        return this.attribute('outerHTML');
    }
    async value() {
        return this.attribute('value');
    }
    async getWebElement() {
        return this.locator.find();
    }
    parent() {
        return this.element(with_1.With.xpath('./..'));
    }
    followingSibling(predicate = '') {
        return this.element(with_1.With.xpath('./following-sibling::*' + predicate));
    }
    element(cssOrXpathOrBy) {
        const by = utils_1.Utils.toBy(cssOrXpathOrBy);
        const locator = new byWebElementLocator_1.ByWebElementLocator(by, this);
        return new Element(locator, this.driver);
    }
    visibleElement(cssSelector) {
        return this.all(cssSelector).findBy(be_1.be.visible);
    }
    all(cssOrXpathOrBy) {
        const by = utils_1.Utils.toBy(cssOrXpathOrBy);
        const locator = new byWebElementsLocator_1.ByWebElementsLocator(by, this);
        return new collection_1.Collection(locator, this.driver);
    }
    async equals(element) {
        return selenium_webdriver_1.WebElement.equals(await this.getWebElement(), await element.getWebElement());
    }
    toString() {
        return this.locator.toString();
    }
}
Element.beforeActionHooks = [];
Element.afterActionHooks = [];
__decorate([
    elementActionHooks_1.ElementActionHooks
], Element.prototype, "click", null);
__decorate([
    elementActionHooks_1.ElementActionHooks
], Element.prototype, "clickByJS", null);
__decorate([
    elementActionHooks_1.ElementActionHooks
], Element.prototype, "setValue", null);
__decorate([
    elementActionHooks_1.ElementActionHooks
], Element.prototype, "setValueByJS", null);
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
], Element.prototype, "scrollIntoView", null);
exports.Element = Element;
//# sourceMappingURL=element.js.map