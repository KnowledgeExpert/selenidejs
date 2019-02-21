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
const selenium_webdriver_1 = require("selenium-webdriver");
const be_1 = require("./support/conditions/be");
const with_1 = require("./support/selectors/with");
const extensions_1 = require("./utils/extensions");
const collection_1 = require("./collection");
const configuration_1 = require("./configuration");
const byWebElementLocator_1 = require("./locators/byWebElementLocator");
const byWebElementsLocator_1 = require("./locators/byWebElementsLocator");
const utils_1 = require("./utils");
const entity_1 = require("./entity");
const commands_1 = require("./commands");
class Element extends entity_1.Entity {
    // todo: why not have private readonly driver property?
    constructor(locator, 
    // readonly configuration: Configuration) {
    configuration) {
        super(configuration);
        this.locator = locator;
        this.configuration = configuration;
        this.locator = locator;
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
    configuredWith(custom) {
        return new Element(this.locator, new configuration_1.Configuration(Object.assign({}, this.configuration, custom)));
    }
    element(cssOrXpathOrBy) {
        const by = extensions_1.Extensions.toBy(cssOrXpathOrBy);
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
        return this.all(cssOrXpathOrBy).elementBy(be_1.be.visible);
    }
    all(cssOrXpathOrBy) {
        const by = extensions_1.Extensions.toBy(cssOrXpathOrBy);
        const locator = new byWebElementsLocator_1.ByWebElementsLocator(by, this);
        return new collection_1.Collection(locator, this.configuration);
    }
    /* Commands */
    /* todo: consider the following implementation:

    async executeScript(script: string, ...args: any[]) {
        const wrappedScript =
            `
            var element = arguments[0];
            return (function(arguments) {
                ${script}
            })(arguments);
            `;
        const webelement = await this.getWebElement();
        return this.driver.executeScript(wrappedScript, webelement, ...args);
    }

     */
    // todo: do we need to wrap it into this.wait. ? which benefits will it add? at least more or less good error msg...
    async executeScript(scriptOnThisWebElement, ...additionalArgs) {
        return this.configuration.driver.executeScript(scriptOnThisWebElement, await this.getWebElement(), ...additionalArgs);
    }
    async click() {
        await this.wait.command(utils_1.lambda('click', async (element) => // todo: add describing lambdas to other commands
         element.getWebElement().then(it => it.click())));
        return this;
    }
    async setValue(value) {
        // kind of more readable and reflects user context
        await this.wait.command(this.configuration.setValueByJs ?
            commands_1.command.js.setValue(value) :
            utils_1.lambda(`set value: ${value}`, async (element) => {
                const webelement = await element.getWebElement();
                await webelement.clear();
                await webelement.sendKeys(String(value));
            }));
        return this;
    }
    async type(keys) {
        await this.wait.command(this.configuration.typeByJs ?
            commands_1.command.js.type(keys) :
            utils_1.lambda(`type: ${keys}`, async (element) => element.getWebElement().then(it => it.sendKeys(String(keys)))));
        return this;
    }
    async doubleClick() {
        const driver = this.configuration.driver;
        await this.wait.command(utils_1.lambda('double-click', async (element) => driver.actions().doubleClick(await element.getWebElement()).perform()));
        return this;
    }
    async hover() {
        const driver = this.configuration.driver;
        await this.wait.command(utils_1.lambda('hover', async (element) => driver.actions().mouseMove(await element.getWebElement()).perform()));
        return this;
    }
    async contextClick() {
        const driver = this.configuration.driver;
        await this.wait.command(utils_1.lambda('context-click', async (element) => driver.actions().click(await element.getWebElement(), String(selenium_webdriver_1.Button.RIGHT)).perform()));
        return this;
    }
    async pressEnter() {
        return this.type(selenium_webdriver_1.Key.ENTER);
    }
    async pressEscape() {
        return this.type(selenium_webdriver_1.Key.ESCAPE);
    }
    async pressTab() {
        return this.type(selenium_webdriver_1.Key.TAB);
    }
    async scrollIntoView() {
        await this.wait.query(utils_1.lambda('scroll into view', async (element) => element.executeScript('arguments[0].scrollIntoView(true);') // todo: is ensuring visibility covered here?
        ));
        return this;
    }
}
exports.Element = Element;
//# sourceMappingURL=element.js.map