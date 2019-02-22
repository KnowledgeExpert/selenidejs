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

import { Button, By, Key, WebElement } from 'selenium-webdriver';
import { be } from './support/conditions/be';
import { With } from './support/selectors/with';
import { Extensions } from './utils/extensions';
import { Collection } from './collection';
import { Configuration } from './configuration';
import { ByWebElementLocator } from './locators/byWebElementLocator';
import { ByWebElementsLocator } from './locators/byWebElementsLocator';
import { Locator } from './locators/locator';
import { SearchContext } from './searchContext';
import { lambda } from './utils';
import { Assertable, Entity, Matchable } from './entity';
import { command } from './commands';


export class Element extends Entity implements SearchContext, Assertable, Matchable {
    // todo: why not have private readonly driver property?

    constructor(private readonly locator: Locator<Promise<WebElement>>,
                // readonly configuration: Configuration) {
                protected readonly configuration: Configuration) {
        super(configuration);
        this.locator = locator;
    }

    toString(): string {
        return this.locator.toString();
    }

    async getWebElement(): Promise<WebElement> {
        return this.locator.find();
    }

    /* SearchContext */

    async findWebElement(by: By): Promise<WebElement> {
        return (await this.getWebElement()).findElement(by);
    }

    async findWebElements(by: By): Promise<WebElement[]> {
        return (await this.getWebElement()).findElements(by);
    }

    /* Relative search */

    configuredWith(custom: Partial<Configuration>): Element {
        return new Element(this.locator, new Configuration({ ...this.configuration, ...custom }));
    }

    element(cssOrXpathOrBy: string | By): Element { // todo: think on refactoring string | By to a new type
        const by = Extensions.toBy(cssOrXpathOrBy);
        const locator = new ByWebElementLocator(by, this);
        return new Element(locator, this.configuration);
    }


    get parent(): Element {
        return this.element(With.xpath('./..'));
    }

    followingSibling(predicate: string = ''): Element {
        // todo: should we move * to parameter to? like:
        // followingSibling(tag = '*', predicate = ''): Element {
        // or:
        // followingSibling(tagAndPredicate = '*'): Element {
        return this.element(With.xpath('./following-sibling::*' + predicate));
    }

    // todo: do we need element.visibleElement?
    // why then not have browser.visibleElement?
    // won't it confuse? and hide some "smelly" parts for locators...
    // all.findBy(be.visible) is nevertheless not a good way to locate... it's kind of a workaround
    // won't it be better to leave workarounds less shiny ans so kind of highlighted in a code?
    // or should the name be more precise, like firstVisibleElement? (this probably is too much though...)
/*    visibleElement(cssOrXpathOrBy: string | By): Element {
        return this.all(cssOrXpathOrBy).elementBy(be.visible);
    }*/

    all(cssOrXpathOrBy: string | By): Collection {
        const by = Extensions.toBy(cssOrXpathOrBy);
        const locator = new ByWebElementsLocator(by, this);
        return new Collection(locator, this.configuration);
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
    async executeScript(scriptOnThisWebElement: string | Function, ...additionalArgs: any[]) {
        return this.configuration.driver.executeScript(
            scriptOnThisWebElement, await this.getWebElement(), ...additionalArgs
        );
    }
    /* tslint:enable:ban-types */

    async click() {
        await this.wait.command(lambda('click', async element =>  // todo: add describing lambdas to other commands
            element.getWebElement().then(it => it.click())
        ));
        return this;
    }

    async setValue(value: string | number) {  // todo: should we rename it just to set?
                                              // kind of more readable and reflects user context
        await this.wait.command(
            this.configuration.setValueByJs ?
                command.js.setValue(value) :
                lambda(`set value: ${value}`, async element => {
                    const webelement = await element.getWebElement();
                    await webelement.clear();
                    await webelement.sendKeys(String(value));
                })
        );
        return this;
    }

    async type(keys: string | number) {
        await this.wait.command(
            this.configuration.typeByJs ?
                command.js.type(keys) :
                lambda(`type: ${keys}`, async element =>
                    element.getWebElement().then(it => it.sendKeys(String(keys))))
        );
        return this;
    }

    async doubleClick() {
        const driver = this.configuration.driver;
        await this.wait.command(lambda('double-click', async element => {
            const webelement = await element.getWebElement();
            if (! await webelement.isDisplayed()) {
                throw new Error('element is hidden'); // todo: consider refactoring/DRYing to throwErrorIfHidden(webel)
            }
            driver.actions().doubleClick(webelement).perform();
        }));
        return this;
    }

    async hover() {
        const driver = this.configuration.driver;
        await this.wait.command(lambda('hover', async element => {
            const webelement = await element.getWebElement();
            if (! await webelement.isDisplayed()) {
                throw new Error('element is hidden');
            }
            driver.actions().mouseMove(await element.getWebElement()).perform();
        }));
        return this;
    }

    async contextClick() {
        const driver = this.configuration.driver;
        await this.wait.command(lambda('context-click', async element => {
            const webelement = await element.getWebElement();
            if (! await webelement.isDisplayed()) {
                throw new Error('element is hidden');
            }
            driver.actions().click(await element.getWebElement(), String(Button.RIGHT)).perform();
        }));
        return this;
    }

    // todo: cover with tests element.press* methods...

    async pressEnter() {
        return this.type(Key.ENTER);
    }

    async pressEscape() {
        return this.type(Key.ESCAPE);
    }

    async pressTab() {
        return this.type(Key.TAB);
    }
}
