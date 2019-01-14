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
const be_1 = require("./support/conditions/be");
const with_1 = require("./support/selectors/with");
const utils_1 = require("./utils");
const collection_1 = require("./collection");
const elementActionHooks_1 = require("./refactor/elementActionHooks");
const byWebElementLocator_1 = require("./locators/byWebElementLocator");
const byWebElementsLocator_1 = require("./locators/byWebElementsLocator");
const wait_1 = require("./wait");
var lambda = utils_1.Utils.lambda;
class Element {
    // todo: why not have private readonly driver property?
    constructor(locator, configuration) {
        this.locator = locator;
        this.configuration = configuration;
        this.locator = locator;
        this.configuration = configuration;
        this.wait = new wait_1.Wait(this, this.configuration.timeout, this.configuration.onFailureHooks);
    }
    toString() {
        return this.locator.toString();
    }
    async getWebElement() {
        return this.locator.find();
    }
    /* SearchContext */
    async findWebElement(by) {
        return (await this.getWebElement()).findElement(by);
    }
    async findWebElements(by) {
        return (await this.getWebElement()).findElements(by);
    }
    /* Relative search */
    element(cssOrXpathOrBy) {
        const by = utils_1.Utils.toBy(cssOrXpathOrBy);
        const locator = new byWebElementLocator_1.ByWebElementLocator(by, this);
        return new Element(locator, this.configuration);
    }
    get parent() {
        return this.element(with_1.With.xpath('./..'));
    }
    followingSibling(predicate = '') {
        // todo: should we move * to parameter to? like:
        // followingSibling(tag = '*', predicate = ''): Element {
        // or:
        // followingSibling(tagAndPredicate = '*'): Element {
        return this.element(with_1.With.xpath('./following-sibling::*' + predicate));
    }
    // todo: do we need it?
    // why then not have browser.visibleElement?
    // won't it confuse? and hide some "smelly" parts for locators...
    // all.findBy(be.visible) is nevertheless not a good way to locate... it's kind of a workaround
    // won't it be better to leave workarounds less shiny ans so kind of highlighted in a code?
    // or should the name be more precise, like firstVisibleElement? (this probably is too much though...)
    visibleElement(cssOrXpathOrBy) {
        return this.all(cssOrXpathOrBy).findBy(be_1.be.visible);
    }
    all(cssOrXpathOrBy) {
        const by = utils_1.Utils.toBy(cssOrXpathOrBy);
        const locator = new byWebElementsLocator_1.ByWebElementsLocator(by, this);
        return new collection_1.Collection(locator, this.configuration);
    }
    /* With Conditions
     *
     *  Where:
     *  - should = wait for condition and on success return this for "fluent" style else fail
     *    - just problem is that fluent style in async js is not relevant much :D
     *  - waitUntil = wait for condition and onn success return true else fail
     *  - matches = apply condition (without waiting) and return its result (true or false)
     *  TODO:
     *    - do we need a "waiting match" ?
     *      - should we just make "waitUntil" = "waiting match"?
     *        i.e. not fail on notMatched after timeout but return false
     *        - yet, on the level of Wait it's seems natural to have both:
     *          wait.until, wait.match
     *          - but maybe not:) maybe wait.* should fail on false... but maybe not:) depends)
     */
    async should(condition, timeout = this.configuration.timeout) {
        // await this.wait.until(condition, timeout);
        await this.wait.query(condition, timeout);
        return this;
    }
    async shouldNot(condition, timeout) {
        await this.should(wait_1.Condition.not(condition), timeout);
        return this;
    }
    async waitUntil(condition, timeout = this.configuration.timeout) {
        return this.wait.until(condition, timeout);
    }
    async waitUntilNot(condition, timeout = this.configuration.timeout) {
        return this.waitUntil(wait_1.Condition.not(condition), timeout);
    }
    /*
     * todo: problem with this is we originally have Promise<true | false>, then make it Promise<true | throws Error>,
     * and then again Promise<true | false>
     */
    async matches(condition) {
        return wait_1.Condition.toBoolean(condition)(this);
    }
    async matchesNot(condition) {
        return this.matches(wait_1.Condition.not(condition));
    }
    /* interaction with actual webelement (commands or queries) */
    // todo: do we need it? element('#submit').do(command.element.click);
    //                      element('#submit').do(query.element.isEnabled);
    do(queryOrCommand) {
        return queryOrCommand(this);
    }
    /* commands */
    async executeScript(scriptOnThisWebElement, ...additionalArgs) {
        return this.configuration.driver.executeScript(scriptOnThisWebElement, await this.getWebElement(), ...additionalArgs);
    }
    async click() {
        await this.wait.command(lambda('click', async (element) => element.getWebElement().then(it => it.click())));
        return this;
    }
    async clickByJs(xOffset = 0, yOffset = 0) {
        // todo: should we wrap it into this.wait.command ?
        await this.executeScript(`arguments[0].dispatchEvent(new MouseEvent('click', {
            'view': window,
            'bubbles': true,
            'cancelable': true,
            'clientX': arguments[0].getClientRects()[0].left + ${xOffset},
            'clientY': arguments[0].getClientRects()[0].top + ${yOffset}
        }))`);
        return this;
    }
    async setValue(value) {
        // kind of more readable and reflects user context
        await this.wait.command(async (element) => {
            const webelement = await element.getWebElement();
            await webelement.clear();
            await webelement.sendKeys(String(value));
        });
        return this;
    }
    async setValueByJs(value) {
        // todo: should we here ensure visibility or not?
        await this.executeScript(`return (function(webelement, text) {
                    var maxlength = webelement.getAttribute('maxlength') == null
                        ? -1
                        : parseInt(webelement.getAttribute('maxlength'));
                    webelement.value = maxlength == -1 ? text
                            : text.length <= maxlength ? text
                                : text.substring(0, maxlength);
                    return null;
                    })(arguments[0], ${String(value)});`);
        return this;
    }
    async sendKeys(value) {
        await this.wait.command(async (element) => element.getWebElement().then(it => it.sendKeys(String(value))));
        return this;
    }
    async doubleClick() {
        const driver = this.configuration.driver;
        await this.wait.command(async (element) => driver.actions().doubleClick(await element.getWebElement()).perform());
        return this;
    }
    async hover() {
        const driver = this.configuration.driver;
        await this.wait.command(async (element) => driver.actions().mouseMove(await element.getWebElement()).perform());
        return this;
    }
    async contextClick() {
        const driver = this.configuration.driver;
        await this.wait.command(async (element) => driver.actions().click(await element.getWebElement(), String(selenium_webdriver_1.Button.RIGHT)).perform());
        return this;
    }
    async pressEnter() {
        return this.sendKeys(selenium_webdriver_1.Key.ENTER);
    }
    async pressEscape() {
        return this.sendKeys(selenium_webdriver_1.Key.ESCAPE);
    }
    async pressTab() {
        return this.sendKeys(selenium_webdriver_1.Key.TAB);
    }
    async scrollIntoView() {
        await this.wait.query(async (element) => element.executeScript('arguments[0].scrollIntoView(true);') // todo: is ensuring visibility covered here?
        );
        return this;
    }
    /* Queries */
    async text() {
        return this.wait.query(element => element.getWebElement().then(it => it.getText()));
    }
    async attribute(name) {
        return this.wait.query(element => element.getWebElement().then(it => it.getAttribute(name)));
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
    // todo: should it be based on condition? or condition should be based on it?
    // todo: do we really need it? or better browser.element("#id").matches(be.visible)?
    async isVisible() {
        return this.matches(be_1.be.visible);
    }
    async isPresent() {
        return this.matches(be_1.be.present);
    }
    async isAbsent() {
        return this.matches(be_1.be.absent);
    }
}
Element.beforeActionHooks = []; // todo: should we move it to Configuration?
Element.afterActionHooks = []; // we should...
__decorate([
    elementActionHooks_1.ElementActionHooks
], Element.prototype, "executeScript", null);
__decorate([
    elementActionHooks_1.ElementActionHooks
], Element.prototype, "click", null);
__decorate([
    elementActionHooks_1.ElementActionHooks
], Element.prototype, "clickByJs", null);
__decorate([
    elementActionHooks_1.ElementActionHooks
], Element.prototype, "setValue", null);
__decorate([
    elementActionHooks_1.ElementActionHooks
], Element.prototype, "setValueByJs", null);
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