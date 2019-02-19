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
/* todo: is it Ok to just alias element.* command?
 * or should we define separate command.* namespace with raw commands implementation like we did for query.*
 * and then define entity commands through calling command.* correspondingly...
 * and then here alias them same way as we did in get.*
 */
var perform;
(function (perform) {
    /* Element commands */
    perform.click = (element) => element.click();
    perform.clickByJs = (xOffset = 0, yOffset = 0) => (element) => element.clickByJs(xOffset, yOffset);
    perform.doubleClick = (element) => element.doubleClick();
    perform.contextClick = (element) => element.contextClick();
    perform.hover = (element) => element.hover();
    perform.scrollIntoView = (element) => element.scrollIntoView();
    perform.sendKeys = (value) => (element) => element.sendKeys(value);
    perform.setValue = (value) => (element) => element.setValue(value);
    perform.setValueByJs = (value) => (element) => element.setValueByJs(value);
    perform.pressEnter = (element) => element.pressEnter();
    perform.pressTab = (element) => element.pressTab();
    perform.pressEscape = (element) => element.pressEscape();
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
    perform.open = (url) => (browser) => browser.open(url);
    perform.resizeWindow = (width, height) => (browser) => browser.resizeWindow(width, height);
    perform.screenshot = (browser) => browser.screenshot();
    perform.closeCurrentTab = (browser) => browser.closeCurrentTab();
    perform.quit = (browser) => browser.quit();
    perform.nextTab = (browser) => browser.nextTab();
    perform.previousTab = (browser) => browser.previousTab();
    perform.switchToFrame = (frameElement) => (browser) => browser.switchToFrame(frameElement);
    perform.switchToDefaultFrame = (browser) => browser.switchToDefaultFrame();
    perform.clearCacheAndCookies = (browser) => browser.clearCacheAndCookies();
    /* tslint:disable:ban-types */
    perform.executeScript = (script, ...args) => (browser) => browser.executeScript(script, ...args);
    /* tslint:enable:ban-types */
})(perform = exports.perform || (exports.perform = {}));
//# sourceMappingURL=perform.js.map