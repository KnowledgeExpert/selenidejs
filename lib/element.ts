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
import { Collection } from './collection';
import { command } from './commands';
import { Configuration } from './configuration';
import { Assertable, Entity, Matchable } from './entity';
import { ElementWebElementByJs } from './locators/ElementWebElementByJs';
import { ElementWebElementByLocator } from './locators/ElementWebElementByLocator';
import { ElementWebElementsByJs } from './locators/ElementWebElementsByJs';
import { ElementWebElementsByLocator } from './locators/ElementWebElementsByLocator';
import { Locator } from './locators/locator';
import { by } from './support/selectors/by';
import { lambda } from './utils';
import { Extensions } from './utils/extensions';
import { Shadow } from './shadow';


export class Element extends Entity implements Assertable, Matchable {

    readonly locator: Locator<Promise<WebElement>>;

    constructor(locator: Locator<Promise<WebElement>>, configuration: Configuration) {
        super(configuration);
        this.locator = locator;
    }

    toString(): string {
        return this.locator.toString();
    }

    async getWebElement(): Promise<WebElement> {
        return this.locator.find();
    }

    /* Relative search */

    with(customConfig: Partial<Configuration>): Element {
        return new Element(this.locator, new Configuration({ ...this.configuration, ...customConfig }));
    }

    element(
        located: (string | By | { script: string | ((element: HTMLElement) => HTMLElement | ShadowRoot), args?: any[] }),
        customized?: Partial<Configuration>
    ): Element {
        const configuration = customized === undefined ?
            this.configuration :
            new Configuration({ ...this.configuration, ...customized });
        if (located instanceof By || typeof located === 'string') {
            const by = Extensions.toBy(located);
            const locator = new ElementWebElementByLocator(by, this);
            return new Element(locator, configuration);
        } else {
            const locator = new ElementWebElementByJs(this, located.script, located.args);
            return new Element(locator, configuration);
        }
    }

    all(
        located: string | By | { script: string | ((element: HTMLElement) => HTMLCollectionOf<HTMLElement>), args?: any[] },
        customized?: Partial<Configuration>
    ): Collection {
        const configuration = customized === undefined ?
            this.configuration :
            new Configuration({ ...this.configuration, ...customized });
        if (located instanceof By || typeof located === 'string') {
            const by = Extensions.toBy(located);
            const locator = new ElementWebElementsByLocator(by, this);
            return new Collection(locator, configuration);
        } else {
            const locator = new ElementWebElementsByJs(this, located.script, located.args);
            return new Collection(locator, configuration);
        }
    }

    get parent(): Element {
        return this.element(by.xpath('./..'));
    }

    get followingSibling(): Element {
        return this.element(by.xpath('./following-sibling::*'));
    }

    get shadow(): Shadow {
        return new Shadow(this.element({ script: element => element.shadowRoot }), this.configuration);
    }

    /* Commands */
    async executeScript(script: string | ((element: HTMLElement, args?: any[], window?: Window) => any), ...args: any[]) {
        const wrappedScript = 'var [ element, ...args ] = arguments;' +
            (script instanceof Function
                ? `return (${script.toString()})(element, args, window);`
                : `return (function(element, args, window) { ${script} })(element, args, window);`);
        const webelement = await this.getWebElement();
        return this.configuration.driver.executeScript(wrappedScript, webelement, ...args);
    }

    async click() {
        await this.wait.command(lambda('click', async element =>
            element.getWebElement().then(it => it.click())
        ));
        return this;
    }

    async clear() {
        await this.wait.command(lambda('clear', async element =>
            element.getWebElement().then(it => it.clear())
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
            driver.actions().move({ x: 0, y: 0, duration: 100, origin: await element.getWebElement() }).perform();
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

    // async switchToFrame(): Promise<Element> {
    //     await this.wait.command(lambda('switch to frame', async element =>
    //         this.configuration.driver.switchTo().frame(await element.getWebElement())
    //     ));
    //     return this;
    // }

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
