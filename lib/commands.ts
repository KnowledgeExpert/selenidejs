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

import { Element } from './element';

// todo: command.element.click() vs element.command.click() vs Element.command.click
/* examples of options:
 *
 * await browser.element('#submit').should(be.enabled).then(perform.click);
 * await browser.element('#submit').should(be.enabled).then(Element.command.click);
 * await browser.element('#submit').should(be.enabled).then(command.element.click);
 * await browser.element('#submit').should(be.enabled).then(perform.element.click);
 * await browser.element('#textfield').should(be.enabled).then(query.element.value);
 *
 * shorter is kind of more concise, but more magic like, more "too much of things in one"
 * longer is more verbose, KISS, less magic in implementation, yet bulky, but won't it be used
 *   only rarely nevertheless?
 *
 * what if in core we provide command.element|browser|collection.* & query. ...
 * and in support/ provide perform and take (or get) aliases ?
 */
export namespace command {
    // todo: should we use here some automatic element.command to command(element) transformation?
    //   something like curryfy? :)
    export namespace element {

        export const executeScript = (scriptOnThisWebElement: string, ...additionalArgs: any[]) =>
            (element: Element) => element.executeScript(scriptOnThisWebElement, additionalArgs);

        export const click = () => (element: Element) => element.click();
        export const clickByJs = (xOffset: number = 0, yOffset: number = 0) => (element: Element) =>
            element.clickByJs(xOffset, yOffset);
        export const doubleClick = () => (element: Element) => element.doubleClick();
        export const contextClick = () => (element: Element) => element.contextClick();
        export const hover = () => (element: Element) => element.hover();
        export const scrollIntoView = () => (element: Element) => element.scrollIntoView();

        export const sendKeys = (value: string | number) => (element: Element) => element.sendKeys(value);
        export const setValue = (value: string | number) => (element: Element) => element.setValue(value);
        export const setValueByJs = (value: string | number) => (element: Element) => element.setValueByJs(value);

        export const pressEnter = () => (element: Element) => element.pressEnter();
        export const pressTab = () => (element: Element) => element.pressTab();
        export const pressEscape = () => (element: Element) => element.pressEscape();
    }
}
