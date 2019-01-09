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
import { ElementCondition } from './conditions';
import { be } from './support/conditions/be';
import { With } from './support/selectors/with';
import { Utils } from './utils';
import { AfterElementActionHook } from './refactor/afterElementActionHook';
import { BeforeElementActionHook } from './refactor/beforeElementActionHook';
import { Collection } from './collection';
import { Configuration } from './configuration';
import { ElementActionHooks } from './refactor/elementActionHooks';
import { ByWebElementLocator } from './locators/byWebElementLocator';
import { ByWebElementsLocator } from './locators/byWebElementsLocator';
import { Locator } from './locators/locator';
import { SearchContext } from './searchContext';
import { Condition, Wait } from './wait';


export class Element implements SearchContext {

    static beforeActionHooks: BeforeElementActionHook[] = []; // todo: should we move it to Configuration?
    static afterActionHooks: AfterElementActionHook[] = []; // we should...

    private readonly wait: Wait<Element>;
    // todo: why not have private readonly driver property?

    constructor(private readonly locator: Locator<Promise<WebElement>>,
                private readonly configuration: Configuration) {
        this.locator = locator;
        this.configuration = configuration;
        this.wait = new Wait(
            this,
            this.configuration.timeout,
            this.configuration.onFailureHooks
        );
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

    element(cssOrXpathOrBy: string | By): Element { // todo: think on refactoring string | By to a new type
        const by = Utils.toBy(cssOrXpathOrBy);
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

    // todo: do we need it?
    // why then not have browser.visibleElement?
    // won't it confuse? and hide some "smelly" parts for locators...
    // all.findBy(be.visible) is nevertheless not a good way to locate... it's kind of a workaround
    // won't it be better to leave workarounds less shiny ans so kind of highlighted in a code?
    // or should the name be more precise, like firstVisibleElement? (this probably is too much though...)
    visibleElement(cssOrXpathOrBy: string | By): Element {
        return this.all(cssOrXpathOrBy).findBy(be.visible);
    }

    all(cssOrXpathOrBy: string | By): Collection {
        const by = Utils.toBy(cssOrXpathOrBy);
        const locator = new ByWebElementsLocator(by, this);
        return new Collection(locator, this.configuration);
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

    async should(condition: ElementCondition, timeout: number = this.configuration.timeout): Promise<Element> {
        // await this.wait.until(condition, timeout);
        await this.wait.query(condition, timeout);
        return this;
    }

    async shouldNot(condition: ElementCondition, timeout?: number): Promise<Element> {
        await this.should(Condition.not(condition), timeout);
        return this;
    }

    async waitUntil(condition: ElementCondition, timeout: number = this.configuration.timeout): Promise<boolean> {
        return this.wait.until(condition, timeout);
    }

    async waitUntilNot(condition: ElementCondition, timeout: number = this.configuration.timeout): Promise<boolean> {
        return this.waitUntil(Condition.not(condition), timeout);
    }

    /*
     * todo: problem with this is we originally have Promise<true | false>, then make it Promise<true | throws Error>,
     * and then again Promise<true | false>
     */
    async matches(condition: ElementCondition): Promise<boolean> {
        return Condition.toBoolean(condition)(this);
    }

    async matchesNot(condition: ElementCondition): Promise<boolean> {
        return this.matches(Condition.not(condition));
    }

    /* commands */

    @ElementActionHooks
    async executeScript(scriptOnThisWebElement: string, ...additionalArgs: any[]) {
        return this.configuration.driver.executeScript(
            scriptOnThisWebElement, await this.getWebElement(), ...additionalArgs
        );
    }

    @ElementActionHooks
    async click() {
        await this.wait.command(async element =>
            element.getWebElement().then(it => it.click())
        );
        return this;
        /*
            todo: see comments in wait.ts impl.
            consider changing current impl. to something like
            this.wait.command(element =>
                element.getWebElement().then(it => it.click()), 'click');
         */
    }

    @ElementActionHooks
    async clickByJs(xOffset: number = 0, yOffset: number = 0) {  // todo: what about element.js.click() instead?
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

    @ElementActionHooks
    async setValue(value: string | number) {  // todo: should we rename it just to set?
                                              // kind of more readable and reflects user context
        await this.wait.command(async element => {
            const webelement = await element.getWebElement();
            await webelement.clear();
            await webelement.sendKeys(String(value));
        });
        return this;
    }

    @ElementActionHooks
    async setValueByJs(value: string | number) {
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

    @ElementActionHooks
    async sendKeys(value: string | number) { // todo: should we rename it (or create alias) to "enter" or "type"?
        await this.wait.command(async element =>
            element.getWebElement().then(it => it.sendKeys(String(value))));
        return this;
    }

    @ElementActionHooks
    async doubleClick() {
        const driver = this.configuration.driver;
        await this.wait.command(async element =>
            driver.actions().doubleClick(await element.getWebElement()).perform());
        return this;
    }

    @ElementActionHooks
    async hover() {
        const driver = this.configuration.driver;
        await this.wait.command(async element =>
            driver.actions().mouseMove(await element.getWebElement()).perform());
        return this;
    }

    @ElementActionHooks
    async contextClick() {
        const driver = this.configuration.driver;
        await this.wait.command(async element =>
            driver.actions().click(await element.getWebElement(), String(Button.RIGHT)).perform());
        return this;
    }

    @ElementActionHooks
    async pressEnter() {
        return this.sendKeys(Key.ENTER);
    }

    @ElementActionHooks
    async pressEscape() {
        return this.sendKeys(Key.ESCAPE);
    }

    @ElementActionHooks
    async pressTab() {
        return this.sendKeys(Key.TAB);
    }

    @ElementActionHooks
    async scrollIntoView() {  // todo: do we need here byJs ?
        await this.wait.query(async element =>
            element.executeScript('arguments[0].scrollIntoView(true);')  // todo: is ensuring visibility covered here?
        );
        return this;
    }

    /* Queries */

    async text(): Promise<string> {
        return this.wait.query(element =>
            element.getWebElement().then(it => it.getText()));
    }

    async attribute(name: string): Promise<string> {
        return this.wait.query(element =>
            element.getWebElement().then(it => it.getAttribute(name)));
    }

    async innerHtml(): Promise<string> {
        return this.attribute('innerHTML');
    }

    async outerHtml(): Promise<string> {
        return this.attribute('outerHTML');
    }

    async value(): Promise<string> {
        return this.attribute('value');
    }

    // todo: should it be based on condition? or condition should be based on it?
    // todo: do we really need it? or better browser.element("#id").matches(be.visible)?
    private async isVisible(): Promise<boolean> {
        return this.matches(be.visible);
    }

    private async isPresent(): Promise<boolean> {
        return this.matches(be.present);
    }

    private async isAbsent(): Promise<boolean> {
        return this.matches(be.absent);
    }

}
