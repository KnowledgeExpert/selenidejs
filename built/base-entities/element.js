"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const byWebElementsLocator_1 = require("./locators/byWebElementsLocator");
const byWebElementLocator_1 = require("./locators/byWebElementLocator");
const protractor_1 = require("protractor");
const collection_1 = require("./collection");
const cannotPerformActionError_1 = require("../errors/cannotPerformActionError");
const be_1 = require("../conditions/helpers/be");
const elementCondition_1 = require("../conditions/elementCondition");
const wait_1 = require("../wait");
const with_1 = require("../locators/with");
const condition_1 = require("../conditions/condition");
const byExtendedWebElementLocator_1 = require("./locators/byExtendedWebElementLocator");
const utils_1 = require("../utils");
const browser_1 = require("./browser");
const _1 = require("../");
class Element {
    constructor(locator) {
        this.locator = locator;
    }
    async click() {
        const DEFAULT_WAIT_TO_CLICK = true;
        const WAIT_TO_CLICK = () => utils_1.Utils.getSelenidejsParam(`waitToClick`) || DEFAULT_WAIT_TO_CLICK;
        const beClicked = new elementCondition_1.ElementCondition({
            matches: async function (element) {
                try {
                    await (await element.getWebElement()).click();
                }
                catch (error) {
                    throw new _1.ConditionDoesNotMatchError(`could not perform ${this.toString()} because of: ${error}`);
                }
                return element;
            },
            toString: function () {
                return 'click';
            }
        });
        if (WAIT_TO_CLICK()) {
            await this.performActionOnVisible(async (element) => {
                await element.should(beClicked);
            }, 'click');
        }
        else {
            await this.performActionOnVisible(async (element) => {
                await (await element.getWebElement()).click();
            }, 'click');
        }
    }
    async clickByJS() {
        await this.performActionOnVisible(async (element) => {
            await browser_1.Browser.executeScript(`return (function(webelement) {
                    const clickEvent  = document.createEvent('MouseEvents');
                    clickEvent.initEvent('click', true, true);
                    arguments[0].dispatchEvent(clickEvent);
                })(arguments[0]);`, await element.getWebElement());
        }, 'clickByJS');
    }
    async setValue(value) {
        await this.performActionOnVisible(async (element) => {
            await (await element.getWebElement()).clear();
            await (await element.getWebElement()).sendKeys(String(value));
        }, 'setValue');
    }
    async setValueByJS(value) {
        await this.performActionOnVisible(async (element) => {
            await element.executeScript(`return (function(element, text) {
                        var maxlength = element.getAttribute('maxlength') === null
                            ? -1
                            : parseInt(element.getAttribute('maxlength'));
                        element.value = maxlength === -1
                            ? text
                            : text.length <= maxlength
                                ? text
                                : text.substring(0, maxlength);
                        return null;
                    })(arguments[0], arguments[1]);`, String(value));
        }, 'setValueByJs');
        // await this.performActionOnVisible(async (element) => {
        //     await (await element.getWebElement()).clear();
        //     await Browser.executeScript(
        //         `return (function(webelement, text) {
        //             var maxlength = webelement.getAttribute('maxlength') == null ? -1 : parseInt(webelement.getAttribute('maxlength'));
        //             webelement.value = maxlength == -1 ? text
        //                     : text.length <= maxlength ? text
        //                         : text.substring(0, maxlength);
        //             return null;
        //             })(arguments[0], arguments[1]);`,
        //         await this.getWebElement(), String(value));
        // }, 'setValueByJS');
    }
    async executeScript(scriptOnThisWebElement, ...additionalArgs) {
        return browser_1.Browser.executeScript(scriptOnThisWebElement, await this.getWebElement(), ...additionalArgs);
    }
    async sendKeys(value) {
        await this.performActionOnVisible(async (element) => {
            await (await element.getWebElement()).sendKeys(String(value));
        }, 'sendKeys');
    }
    async doubleClick() {
        await this.performActionOnVisible(async (element) => {
            await browser_1.Browser.actions().mouseMove(await element.getWebElement()).perform();
            await browser_1.Browser.actions().doubleClick().perform();
        }, 'doubleClick');
    }
    async hover() {
        await this.performActionOnVisible(async (element) => {
            await browser_1.Browser.actions().mouseMove(await element.getWebElement()).perform();
        }, 'hover');
    }
    async contextClick() {
        await this.performActionOnVisible(async (element) => {
            await browser_1.Browser.actions().mouseMove(await element.getWebElement()).perform();
            await browser_1.Browser.actions().click(protractor_1.protractor.Button.RIGHT).perform();
        }, 'contextClick');
    }
    async pressEnter() {
        await this.performActionOnVisible(async (element) => {
            await (await element.getWebElement()).sendKeys(protractor_1.protractor.Key.ENTER);
        }, 'pressEnter');
    }
    async pressEscape() {
        await this.performActionOnVisible(async (element) => {
            await (await element.getWebElement()).sendKeys(protractor_1.protractor.Key.ESCAPE);
        }, 'pressEscape');
    }
    async pressTab() {
        await this.performActionOnVisible(async (element) => {
            await (await element.getWebElement()).sendKeys(protractor_1.protractor.Key.TAB);
        }, 'pressTab');
    }
    async scrollIntoView() {
        await this.should(be_1.be.visible);
        await browser_1.Browser.executeScript('arguments[0].scrollIntoView(true);', await this.getWebElement());
    }
    async should(condition, timeout) {
        return await wait_1.Wait.shouldMatch(this, condition, timeout);
    }
    async shouldNot(condition) {
        return await this.should(condition_1.Condition.not(condition));
    }
    async is(condition, timeout) {
        return await wait_1.Wait.isMatch(this, condition, timeout);
    }
    async isNot(condition) {
        return await this.is(condition_1.Condition.not(condition));
    }
    async matching(condition, timeout) {
        return await wait_1.Wait.isMatch(this, condition, timeout);
    }
    async matchingNot(condition) {
        return await this.is(condition_1.Condition.not(condition));
    }
    async isVisible() {
        return await (await this.getWebElement()).isDisplayed();
    }
    async isPresent() {
        try {
            return !!(await this.getWebElement());
        }
        catch (ignored) {
            return false;
        }
    }
    async isAbsent() {
        return !(await this.isPresent());
    }
    async value() {
        return await (await this.getWebElement()).getAttribute('value');
    }
    async text() {
        await this.should(be_1.be.visible);
        return await (await this.getWebElement()).getText();
    }
    async attribute(attributeName) {
        return await (await this.getWebElement()).getAttribute(attributeName);
    }
    async innerHtml() {
        return await this.attribute('innerHTML');
    }
    async outerHtml() {
        return await this.attribute('outerHTML');
    }
    async getWebElement() {
        return await this.locator.find();
    }
    async fireEvent(...events) {
        //usage - await this.fireEvent('focus', 'keydown', 'keypress', 'input', 'keyup', 'change', 'blur');
        const jsCodeToTriggerEvent = `(function() {
                var webElement = arguments[0];
                var eventNames = arguments[1];
                for (var i = 0; i < eventNames.length; i++) {
                    if (document.createEventObject) {
                        var evt = document.createEventObject();
                        webElement.fireEvent('on' + eventNames[i], evt);
                    } else {
                        var evt = document.createEvent('HTMLEvents');
                        evt.initEvent(eventNames[i], true, true );
                        webElement.dispatchEvent(evt);
                    }
                }
            })();`;
        try {
            await browser_1.Browser.executeScript(jsCodeToTriggerEvent, await this.getWebElement(), events);
        }
        catch (error) {
            console.log('Failed to trigger events ' + events + ': ' + error.message);
        }
    }
    async performActionOnVisible(action, actionName) {
        try {
            await action(this);
        }
        catch (ignored) {
            await this.should(be_1.be.visible);
            if (browser_1.Browser.params().scrollIntoViewBeforeAction) {
                await this.scrollIntoView();
            }
            try {
                await action(this);
            }
            catch (error) {
                let message = `For element ${this.toString()}: cannot perform ${actionName}\n\treason: ${error.message}`;
                if (utils_1.Utils.getSelenidejsParam(`saveScreenshot`)) {
                    try {
                        const screenshotPath = await utils_1.Utils.saveScreenshot();
                        message = `${message}\nSaved screenshot: ${screenshotPath}`;
                    }
                    catch (error) {
                        console.error(`Cannot save screenshot cause of:\n${error}`);
                    }
                }
                if (utils_1.Utils.getSelenidejsParam(`saveHtml`)) {
                    try {
                        const htmlPath = await utils_1.Utils.savePageSource();
                        message = `${message}\nSaved html: ${htmlPath}`;
                    }
                    catch (error) {
                        console.error(`Cannot save page source cause of:\n${error}`);
                    }
                }
                throw new cannotPerformActionError_1.CannotPerformActionError(message);
            }
        }
    }
    parent() {
        return this.element(with_1.With.xpath('./..'));
    }
    followingSibling(predicate = '') {
        return this.element(with_1.With.xpath('./following-sibling::*' + predicate));
    }
    element(cssOrXpathOrBy) {
        return new Element(new byWebElementLocator_1.ByWebElementLocator(utils_1.toBy(cssOrXpathOrBy), this));
    }
    elementSmart(locator) {
        return new Element(new byExtendedWebElementLocator_1.ByExtendedWebElementLocator(locator, this));
    }
    visibleElement(cssSelector) {
        return collection_1.all(cssSelector).findBy(be_1.be.visible);
    }
    all(cssOrXpathOrBy) {
        return new collection_1.Collection(new byWebElementsLocator_1.ByWebElementsLocator(utils_1.toBy(cssOrXpathOrBy), this));
    }
    toString() {
        return this.locator.toString();
    }
}
Element.beforeActionHooks = [];
Element.afterActionHooks = [];
__decorate([
    ActionHooks
], Element.prototype, "click", null);
__decorate([
    ActionHooks
], Element.prototype, "clickByJS", null);
__decorate([
    ActionHooks
], Element.prototype, "setValue", null);
__decorate([
    ActionHooks
], Element.prototype, "setValueByJS", null);
__decorate([
    ActionHooks
], Element.prototype, "executeScript", null);
__decorate([
    ActionHooks
], Element.prototype, "sendKeys", null);
__decorate([
    ActionHooks
], Element.prototype, "doubleClick", null);
__decorate([
    ActionHooks
], Element.prototype, "hover", null);
__decorate([
    ActionHooks
], Element.prototype, "contextClick", null);
__decorate([
    ActionHooks
], Element.prototype, "pressEnter", null);
__decorate([
    ActionHooks
], Element.prototype, "pressEscape", null);
__decorate([
    ActionHooks
], Element.prototype, "pressTab", null);
__decorate([
    ActionHooks
], Element.prototype, "scrollIntoView", null);
exports.Element = Element;
function element(cssOrXpathOrBy) {
    return new Element(new byWebElementLocator_1.ByWebElementLocator(utils_1.toBy(cssOrXpathOrBy)));
}
exports.element = element;
function visibleElement(cssOrXpathOrBy) {
    return collection_1.all(utils_1.toBy(cssOrXpathOrBy)).findBy(be_1.be.visible);
}
exports.visibleElement = visibleElement;
function elementSmart(locator) {
    return new Element(new byExtendedWebElementLocator_1.ByExtendedWebElementLocator(locator));
}
exports.elementSmart = elementSmart;
function ActionHooks(target, methodName, descriptor) {
    const originalMethod = descriptor.value;
    const beforeHooks = Element.beforeActionHooks;
    const afterHooks = Element.afterActionHooks;
    async function safeApplyActionHooks(hooks, element, actionName, actionError) {
        for (let hook of hooks) {
            try {
                await hook(element, actionName, actionError);
            }
            catch (error) {
                console.warn(`Cannot perform hook on '${actionName}' action cause of:\n\tError message: ${error.message}\n\tError stacktrace: ${error.stackTrace}`);
            }
        }
    }
    descriptor.value = async function () {
        let err;
        try {
            await safeApplyActionHooks(beforeHooks, this, methodName);
            return await originalMethod.apply(this, arguments);
        }
        catch (error) {
            err = error;
            throw error;
        }
        finally {
            await safeApplyActionHooks(afterHooks, this, methodName, err);
        }
    };
}
//# sourceMappingURL=element.js.map