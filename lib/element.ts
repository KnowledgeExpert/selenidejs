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

import { By, WebElement } from 'selenium-webdriver';
import { Actions } from './actions';
import { Collection } from './collection';
import { Condition } from './condition';
import { Driver } from './driver';
import { ElementsBuilder } from './elementsBuilder';
import { ElementActionHooks } from './hooks/elementActionHooks';
import { HookExecutor } from './hooks/hookExecutor';
import { Locator } from './locators/locator';
import { SearchContext } from './locators/searchContext';
import { Wait } from './wait';


export class Element implements SearchContext {

    // @ts-ignore
    private readonly driver: Driver;
    private readonly locator: Locator<Promise<WebElement>> | Locator<WebElement>;
    private readonly wait: Wait<Element>;

    constructor(locator: Locator<Promise<WebElement>> | Locator<WebElement>, driver: Driver) {
        this.locator = locator;
        this.driver = driver;
        this.wait = new Wait<Element>(this, driver.configuration, new HookExecutor<Element>(driver, this));
    }

    @ElementActionHooks
    async click(): Promise<Element> {
        return Actions.click(this);
    }

    @ElementActionHooks
    async setValue(value: string | number): Promise<Element> {
        return Actions.setValue(value)(this);
    }

    @ElementActionHooks
    async sendKeys(value: string | number): Promise<Element> {
        return Actions.sendKeys(value)(this);
    }

    @ElementActionHooks
    async doubleClick(): Promise<Element> {
        return Actions.doubleClick(this);
    }

    @ElementActionHooks
    async hover(): Promise<Element> {
        return Actions.hover(this);
    }

    @ElementActionHooks
    async contextClick(): Promise<Element> {
        return Actions.contextClick(this);
    }

    @ElementActionHooks
    async pressEnter(): Promise<Element> {
        return Actions.pressEnter(this);
    }

    @ElementActionHooks
    async pressEscape(): Promise<Element> {
        return Actions.pressEscape(this);
    }

    @ElementActionHooks
    async pressTab(): Promise<Element> {
        return Actions.pressTab(this);
    }

    @ElementActionHooks
    async pressKey(key: string): Promise<Element> {
        return Actions.pressKey(key)(this);
    }

    @ElementActionHooks
    async scrollTo(): Promise<Element> {
        return Actions.scrollTo(this);
    }

    async should(condition: Condition<Element>, timeout?: number): Promise<Element> {
        return this.wait.shouldMatch(condition, timeout);
    }

    async shouldNot(condition: Condition<Element>): Promise<Element> {
        return this.should(Condition.not(condition));
    }

    async is(condition: Condition<Element>, timeout?: number): Promise<boolean> {
        return this.wait.isMatch(condition, timeout);
    }

    async isNot(condition: Condition<Element>): Promise<boolean> {
        return this.is(Condition.not(condition));
    }

    async isVisible(): Promise<boolean> {
        return Actions.visibility(this);
    }

    async isPresent(): Promise<boolean> {
        return Actions.presence(this);
    }

    async isFocused(): Promise<boolean> {
        return Actions.focused(this);
    }

    async text(): Promise<string> {
        return Actions.text(this);
    }

    async hasAttribute(attributeName: string): Promise<boolean> {
        return Actions.attribute(attributeName)(this).then(result => true, err => false);
    }

    async attribute(attributeName: string): Promise<string> {
        return Actions.attribute(attributeName)(this);
    }

    async innerHtml(): Promise<string> {
        return Actions.attribute('innerHtml')(this);
    }

    async outerHtml(): Promise<string> {
        return Actions.attribute('outerHtml')(this);
    }

    async value(): Promise<string> {
        return Actions.attribute('value')(this);
    }

    async getWebElement(): Promise<WebElement> {
        return this.locator.find();
    }

    parent(): Element {
        return ElementsBuilder.parent(this);
    }

    followingSibling(predicate: string = ''): Element {
        return ElementsBuilder.followingSibling(predicate)(this);
    }

    element(cssOrXpathOrBy: string | By): Element {
        return ElementsBuilder.element(cssOrXpathOrBy)(this);
    }

    all(cssOrXpathOrBy: string | By): Collection {
        return ElementsBuilder.all(cssOrXpathOrBy)(this);
    }

    async equals(element: Element | WebElement) {
        return WebElement.equals(
            await this.getWebElement(),
            element instanceof WebElement ? element : await element.getWebElement()
        );
    }

    async findElements(locator: By): Promise<WebElement[]> {
        return this.getWebElement().then(root => root.findElements(locator));
    }

    async findElement(locator: By): Promise<WebElement> {
        return this.getWebElement().then(root => root.findElement(locator));
    }

    toString(): string {
        return this.locator.toString();
    }

}
