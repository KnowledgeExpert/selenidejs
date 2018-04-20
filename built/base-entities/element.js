"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const byWebElementsLocator_1 = require("./locators/byWebElementsLocator");
const byWebElementLocator_1 = require("./locators/byWebElementLocator");
const protractor_1 = require("protractor");
const collection_1 = require("./collection");
const cannotPerformActionError_1 = require("../errors/cannotPerformActionError");
const be_1 = require("../conditions/helpers/be");
const wait_1 = require("../wait");
const with_1 = require("../locators/with");
const condition_1 = require("../conditions/condition");
const byExtendedWebElementLocator_1 = require("./locators/byExtendedWebElementLocator");
const utils_1 = require("../utils");
class Element {
    constructor(locator) {
        this.locator = locator;
    }
    async click() {
        await this.performActionOnVisible(async (element) => {
            await (await element.getWebElement()).click();
        }, "click");
    }
    async clickByJS() {
        await this.performActionOnVisible(async (element) => {
            await protractor_1.browser.executeScript(`return (function(webelement) {
                    const clickEvent  = document.createEvent('MouseEvents');
                    clickEvent.initEvent('click', true, true);
                    arguments[0].dispatchEvent(clickEvent);
                })(arguments[0]);`, await element.getWebElement());
        }, "clickByJS");
    }
    async setValue(value) {
        await this.performActionOnVisible(async (element) => {
            await (await element.getWebElement()).clear();
            await (await element.getWebElement()).sendKeys(String(value));
        }, "setValue");
    }
    async setValueByJS(value) {
        await this.performActionOnVisible(async (element) => {
            await (await element.getWebElement()).clear();
            await protractor_1.browser.executeScript(`return (function(webelement, text) {
                    var maxlength = webelement.getAttribute('maxlength') == null ? -1 : parseInt(webelement.getAttribute('maxlength'));
                    webelement.value = maxlength == -1 ? text 
                            : text.length <= maxlength ? text 
                                : text.substring(0, maxlength);
                    return null;
                    })(arguments[0], arguments[1]);`, await this.getWebElement(), String(value));
        }, "setValueByJS");
    }
    async sendKeys(value) {
        await this.performActionOnVisible(async (element) => {
            await (await element.getWebElement()).sendKeys(String(value));
        }, "sendKeys");
    }
    async fireEvent(...events) {
        //usage - await this.fireEvent("focus", "keydown", "keypress", "input", "keyup", "change", "blur");
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
            await protractor_1.browser.executeScript(jsCodeToTriggerEvent, this.getWebElement(), events);
        }
        catch (error) {
            console.log("Failed to trigger events " + events + ": " + error.message);
        }
    }
    async doubleClick() {
        await this.performActionOnVisible(async (element) => {
            await protractor_1.browser.actions().mouseMove(await element.getWebElement()).perform();
            await protractor_1.browser.actions().doubleClick().perform();
        }, "doubleClick");
    }
    async hover() {
        await this.performActionOnVisible(async (element) => {
            await protractor_1.browser.actions().mouseMove(await element.getWebElement()).perform();
        }, "hover");
    }
    async contextClick() {
        await this.performActionOnVisible(async (element) => {
            await protractor_1.browser.actions().mouseMove(await element.getWebElement()).perform();
            await protractor_1.browser.actions().click(protractor_1.protractor.Button.RIGHT).perform();
        }, "contextClick");
    }
    async pressEnter() {
        await this.performActionOnVisible(async (element) => {
            await (await element.getWebElement()).sendKeys(protractor_1.protractor.Key.ENTER);
        }, "pressEnter");
    }
    async pressEscape() {
        await this.performActionOnVisible(async (element) => {
            await (await element.getWebElement()).sendKeys(protractor_1.protractor.Key.ESCAPE);
        }, "pressEscape");
    }
    async pressTab() {
        await this.performActionOnVisible(async (element) => {
            await (await element.getWebElement()).sendKeys(protractor_1.protractor.Key.TAB);
        }, "pressTab");
    }
    async scrollIntoView() {
        await this.should(be_1.be.visible);
        await protractor_1.browser.executeScript("arguments[0].scrollIntoView(true);", await this.getWebElement());
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
        return await (await this.getWebElement()).getAttribute("value");
    }
    async text() {
        await this.should(be_1.be.visible);
        return await (await this.getWebElement()).getText();
    }
    async attribute(attributeName) {
        return await (await this.getWebElement()).getAttribute(attributeName);
    }
    async getWebElement() {
        return await this.locator.find();
    }
    async performActionOnVisible(action, actionName) {
        try {
            await action(this);
        }
        catch (ignored) {
            await this.should(be_1.be.visible);
            if (protractor_1.browser.params.scrollIntoViewBeforeAction) {
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
        return this.element(with_1.With.xpath("./.."));
    }
    followingSibling(predicate = '') {
        return this.element(with_1.With.xpath("./following-sibling::*" + predicate));
    }
    element(cssOrLocator) {
        return new Element(new byWebElementLocator_1.ByWebElementLocator((typeof cssOrLocator === "string" ? with_1.With.css(cssOrLocator) : cssOrLocator), this));
    }
    elementSmart(locator) {
        return new Element(new byExtendedWebElementLocator_1.ByExtendedWebElementLocator(locator, this));
    }
    visibleElement(cssSelector) {
        return collection_1.all(cssSelector).findBy(be_1.be.visible);
    }
    all(locator) {
        return new collection_1.Collection(new byWebElementsLocator_1.ByWebElementsLocator(typeof locator === "string"
            ? locator.includes("/") ? with_1.With.xpath(locator) : with_1.With.css(locator)
            : locator, this));
    }
    toString() {
        return this.locator.toString();
    }
}
exports.Element = Element;
function element(locator) {
    return new Element(new byWebElementLocator_1.ByWebElementLocator(typeof locator === "string"
        ? locator.includes("/") ? with_1.With.xpath(locator) : with_1.With.css(locator)
        : locator));
}
exports.element = element;
function visibleElement(cssSelector) {
    return collection_1.all(cssSelector).findBy(be_1.be.visible);
}
exports.visibleElement = visibleElement;
function elementSmart(locator) {
    return new Element(new byExtendedWebElementLocator_1.ByExtendedWebElementLocator(locator));
}
exports.elementSmart = elementSmart;
//# sourceMappingURL=element.js.map