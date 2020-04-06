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

import { Element } from '../../element';
import { Browser } from '../../browser';
import { command } from '../../commands';
import { IRectangle } from 'selenium-webdriver';


/* todo: is it Ok to just alias element.* command?
 * or should we define separate command.* namespace with raw commands implementation like we did for query.*
 * and then define entity commands through calling command.* correspondingly...
 * and then here alias them same way as we did in get.*
 */
export namespace perform {

    /* Element commands */

    export const click = (element: Element) => element.click();
    export const doubleClick = (element: Element) => element.doubleClick();
    export const contextClick = (element: Element) => element.contextClick();
    export const hover = (element: Element) => element.hover();

    export const clear = (element: Element) => element.clear();
    export const type = (keys: string | number) => (element: Element) => element.type(keys);
    export const setValue = (value: string | number) => (element: Element) => element.setValue(value);

    export const pressEnter = (element: Element) => element.pressEnter();
    export const pressTab = (element: Element) => element.pressTab();
    export const pressEscape = (element: Element) => element.pressEscape();

    // export const switchToFrame = (element: Element) => element.switchToFrame();

    export namespace js { // todo: cover with tests

        export const click = (element: Element) => element.perform(command.js.click);

        export const clickWithOffset = (xOffset: number, yOffset: number) =>
            (element: Element) => element.perform(command.js.clickWithOffset(xOffset, yOffset));

        export const setValue = (value: string | number) =>
            (element: Element) => element.perform(command.js.setValue(value));

        export const type = (keys: string | number) =>
            (element: Element) => element.perform(command.js.type(keys));

        export const scrollIntoView = (element: Element) => element.perform(command.js.scrollIntoView);
    }

/*  // had to comment it, to resolve conflict with browser.executeScript :(

    // todo: consider making it as accepting func:
    // element.executeScript(function (element) { return element.innerHTML; })
    // then it will be possible to combine with browser.executeScript in one method here...

    export const executeScript = (scriptOnThisWebElement: string, ...additionalArgs: any[]) =>
        (element: Element) => element.executeScript(scriptOnThisWebElement, additionalArgs);
*/

    /* Collection commands */

    // nothing so far:)

    /* Browser commands */

    export const open = (url: string) => (browser: Browser) => browser.open(url);
    export const resizeWindow = (width, height) =>
        (browser: Browser) => browser.resizeWindow(width, height);
    export const screenshot = (browser: Browser): Promise<Buffer> => browser.screenshot();
    export const closeCurrentTab = (browser: Browser) => browser.closeCurrentTab();
    export const quit = (browser: Browser) => browser.quit();
    export const back = (browser: Browser) => browser.back();
    export const forward = (browser: Browser) => browser.forward();
    export const refresh = (browser: Browser) => browser.refresh();
    export const goToNextTab = (browser: Browser) => browser.goToNextTab();
    export const goToPreviousTab = (browser: Browser) => browser.goToPreviousTab();
    export const goToTab = (indexOrId: number | string) => (browser: Browser) => browser.goToTab(indexOrId);
    // export const switchToFrame = (frameElement: Element) =>
    //     (browser: Browser) => browser.switchToFrame(frameElement);
    export const switchToDefaultFrame = (browser: Browser) => browser.switchToDefaultFrame();
    // export const clearCacheAndCookies = (browser: Browser) => browser.clearCacheAndCookies();
    export const clearLocalStorage = (browser: Browser) => browser.clearLocalStorage();
    export const clearSessionStorage = (browser: Browser) => browser.clearSessionStorage();
    export const clearCookies = (browser: Browser) => browser.clearCookies();
    // export const deleteCookie = (name: string) => (browser: Browser) => browser.deleteCookie(name);

    export const executeScript = (script: string | ((document: Document) => any), ...args: any[]) =>
        (browser: Browser) => browser.executeScript(script, ...args);
}
