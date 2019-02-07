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
import { Utils } from './helpers/utils';
import { AfterElementActionHook } from './refactor/afterElementActionHook';
import { BeforeElementActionHook } from './refactor/beforeElementActionHook';
import { Collection } from './collection';
import { Configuration } from './configuration';
import { ElementActionHooks } from './refactor/elementActionHooks';
import { ByWebElementLocator } from './locators/byWebElementLocator';
import { ByWebElementsLocator } from './locators/byWebElementsLocator';
import { Locator } from './locators/locator';
import { SearchContext } from './searchContext';
import { Command, Condition, Query, Wait } from './wait';
import { lambda } from './helpers';


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
        return this.all(cssOrXpathOrBy).elementBy(be.visible);
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
     *  - matches = apply condition (without waiting) and return its result (true or false)
     *  - waitUntil = wait for condition and on success return true else false (i.e. = waitingMatch)
     *  TODO:
     *    - do we need a version that on success returns true else fails?
     *      - should we just make "waitUntil" = "waiting match"?
     *        i.e. not fail on notMatched after timeout but return false
     *        - yet, on the level of Wait it's seems natural to have both:
     *          wait.until, wait.match
     *          - but maybe not:) maybe wait.* should fail on false... but maybe not:) depends)
     */

    async should(condition: ElementCondition, timeout: number = this.configuration.timeout): Promise<Element> {
        await this.wait.query(condition, timeout);
        return this;
    }

    /*
     * todo: consider assert or shouldMatch aliases for should
     * should is good for
     *   should(be.visible) style
     * but assert or shouldMatch is good for the "raw" condition case:
     *   assert(condition.element.isVisible)
     *   shouldMatch(condition.element.isVisible)
     * maybe someone will find this style better than be.* and have.*
     * the advantage is in having only one entry point to all conditions - condition.*
     * where it has conditions sorted by type - element, collection, browser -
     * so it might be easier to find the needed one...
     * while be.* and have.* are kind of bulk of mixed type conditions - all in one heap,
     * even two mixed heaps:)));
     */

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
        return Condition.asPredicate(condition)(this);
    }

    async matchesNot(condition: ElementCondition): Promise<boolean> {
        return this.matches(Condition.not(condition));
    }

    /* interaction with actual webelement (commands or queries) */

    // todo: do we need it? element('#submit').do(command.element.click);
    //                      element('#submit').do(query.element.isEnabled);
    do<R>(queryOrCommand: Query<Element, R>) { // todo: is not perform enough?
        return queryOrCommand(this);
    }

    /* commands */

    @ElementActionHooks  // todo: cover with tests
    async perform(command: Command<Element>, timeout: number = this.configuration.timeout): Promise<Element> {
        await this.wait.command(command, timeout);
        return this;
    }

    @ElementActionHooks
    // todo: do we need to wrap it into this.wait. ?
    async executeScript(scriptOnThisWebElement: string, ...additionalArgs: any[]) {
        return this.configuration.driver.executeScript(
            scriptOnThisWebElement, await this.getWebElement(), ...additionalArgs
        );
    }

    @ElementActionHooks
    async click() {
        await this.wait.command(lambda('click', async element =>  // todo: add describing lambdas to other commands
            element.getWebElement().then(it => it.click())
        ));
        return this;
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

    /* Queries */ // todo: do we need @ElementQueryHooks?

    // todo: should we rename it to take?
    async get<R>(query: Query<Element, R>, timeout: number = this.configuration.timeout): Promise<R> {
        return this.wait.query(query, timeout);
    }

}
