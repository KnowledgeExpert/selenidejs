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
const by_1 = require("./support/selectors/by");
const extensions_1 = require("./utils/extensions");
const collection_1 = require("./collection");
const configuration_1 = require("./configuration");
const utils_1 = require("./utils");
const entity_1 = require("./entity");
const commands_1 = require("./commands");
const ElementWebElementByLocator_1 = require("./locators/ElementWebElementByLocator");
const ElementWebElementsByLocator_1 = require("./locators/ElementWebElementsByLocator");
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
    /* Relative search */
    with(customConfig) {
        return new Element(this.locator, new configuration_1.Configuration(Object.assign({}, this.configuration, customConfig)));
    }
    element(cssOrXpathOrBy) {
        const by = extensions_1.Extensions.toBy(cssOrXpathOrBy);
        const locator = new ElementWebElementByLocator_1.ElementWebElementByLocator(by, this);
        return new Element(locator, this.configuration);
    }
    get parent() {
        return this.element(by_1.by.xpath('./..'));
    }
    get followingSibling() {
        return this.element(by_1.by.xpath('./following-sibling::*'));
    }
    all(cssOrXpathOrBy) {
        const by = extensions_1.Extensions.toBy(cssOrXpathOrBy);
        const locator = new ElementWebElementsByLocator_1.ElementWebElementsByLocator(by, this);
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
    /* tslint:disable:ban-types */
    async executeScript(scriptOnThisWebElement, ...additionalArgs) {
        return this.configuration.driver.executeScript(scriptOnThisWebElement, await this.getWebElement(), ...additionalArgs);
    }
    /* tslint:enable:ban-types */
    async click() {
        await this.wait.command(utils_1.lambda('click', async (element) => element.getWebElement().then(it => it.click())));
        return this;
    }
    async clear() {
        await this.wait.command(utils_1.lambda('clear', async (element) => element.getWebElement().then(it => it.clear())));
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
        await this.wait.command(utils_1.lambda('double-click', async (element) => {
            const webelement = await element.getWebElement();
            if (!await webelement.isDisplayed()) {
                throw new Error('element is hidden'); // todo: consider refactoring/DRYing to throwErrorIfHidden(webel)
            }
            driver.actions().doubleClick(webelement).perform();
        }));
        return this;
    }
    async hover() {
        const driver = this.configuration.driver;
        await this.wait.command(utils_1.lambda('hover', async (element) => {
            const webelement = await element.getWebElement();
            if (!await webelement.isDisplayed()) {
                throw new Error('element is hidden');
            }
            driver.actions().mouseMove(await element.getWebElement()).perform();
        }));
        return this;
    }
    async contextClick() {
        const driver = this.configuration.driver;
        await this.wait.command(utils_1.lambda('context-click', async (element) => {
            const webelement = await element.getWebElement();
            if (!await webelement.isDisplayed()) {
                throw new Error('element is hidden');
            }
            driver.actions().click(await element.getWebElement(), String(selenium_webdriver_1.Button.RIGHT)).perform();
        }));
        return this;
    }
    // async switchToFrame(): Promise<Element> {
    //     await this.wait.command(lambda('switch to frame', async element =>
    //         this.configuration.driver.switchTo().frame(await element.getWebElement())
    //     ));
    //     return this;
    // }
    async pressEnter() {
        return this.type(selenium_webdriver_1.Key.ENTER);
    }
    async pressEscape() {
        return this.type(selenium_webdriver_1.Key.ESCAPE);
    }
    async pressTab() {
        return this.type(selenium_webdriver_1.Key.TAB);
    }
}
exports.Element = Element;
//# sourceMappingURL=element.js.map