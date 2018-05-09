import {Locator} from './locators/locator';
import {ByWebElementsLocator} from './locators/byWebElementsLocator';
import {ByWebElementLocator} from './locators/byWebElementLocator';
import {protractor} from 'protractor';
import {all, Collection} from './collection';
import {By, WebElement} from "selenium-webdriver";
import {CannotPerformActionError} from "../errors/cannotPerformActionError";
import {be} from "../conditions/helpers/be";
import {ElementCondition} from "../conditions/elementCondition";
import {Wait} from "../wait";
import {With} from "../locators/with";
import {Condition} from "../conditions/condition";
import {ByExtendedWebElementLocator} from "./locators/byExtendedWebElementLocator";
import {Utils} from "../utils";
import {Browser} from "./browser";


export class Element {

    public static beforeActionHooks: ((element: Element, actionName: string) => void)[] = [];
    public static afterActionHooks: ((element: Element, actionName: string, actionError?: Error) => void)[] = [];

    private readonly locator: Locator<Promise<WebElement>>;

    constructor(locator: Locator<Promise<WebElement>>) {
        this.locator = locator;
    }

    @ActionHooks
    async click() {
        await this.performActionOnVisible(async (element) => {
            await (await element.getWebElement()).click();
        }, "click");
    }

    @ActionHooks
    async clickByJS() {
        await this.performActionOnVisible(async (element) => {
            await Browser.executeScript(
                `return (function(webelement) {
                    const clickEvent  = document.createEvent('MouseEvents');
                    clickEvent.initEvent('click', true, true);
                    arguments[0].dispatchEvent(clickEvent);
                })(arguments[0]);`,
                await element.getWebElement());
        }, "clickByJS");
    }

    @ActionHooks
    async setValue(value: string | number) {
        await this.performActionOnVisible(async (element) => {
            await (await element.getWebElement()).clear();
            await (await element.getWebElement()).sendKeys(String(value));
        }, "setValue");
    }

    @ActionHooks
    async setValueByJS(value: string | number) {
        await this.performActionOnVisible(async (element) => {
            await (await element.getWebElement()).clear();
            await Browser.executeScript(
                `return (function(webelement, text) {
                    var maxlength = webelement.getAttribute('maxlength') == null ? -1 : parseInt(webelement.getAttribute('maxlength'));
                    webelement.value = maxlength == -1 ? text 
                            : text.length <= maxlength ? text 
                                : text.substring(0, maxlength);
                    return null;
                    })(arguments[0], arguments[1]);`,
                await this.getWebElement(), String(value));
        }, "setValueByJS");
    }

    @ActionHooks
    async sendKeys(value: string | number) {
        await this.performActionOnVisible(async (element) => {
            await (await element.getWebElement()).sendKeys(String(value));
        }, "sendKeys");
    }

    @ActionHooks
    async doubleClick() {
        await this.performActionOnVisible(async (element) => {
            await Browser.actions().mouseMove(await element.getWebElement()).perform();
            await Browser.actions().doubleClick().perform();
        }, "doubleClick");
    }

    @ActionHooks
    async hover() {
        await this.performActionOnVisible(async (element) => {
            await Browser.actions().mouseMove(await element.getWebElement()).perform();
        }, "hover");
    }

    @ActionHooks
    async contextClick() {
        await this.performActionOnVisible(async (element) => {
            await Browser.actions().mouseMove(await element.getWebElement()).perform();
            await Browser.actions().click(protractor.Button.RIGHT).perform();
        }, "contextClick");
    }

    @ActionHooks
    async pressEnter() {
        await this.performActionOnVisible(async (element) => {
            await (await element.getWebElement()).sendKeys(protractor.Key.ENTER);
        }, "pressEnter");
    }

    @ActionHooks
    async pressEscape() {
        await this.performActionOnVisible(async (element) => {
            await (await element.getWebElement()).sendKeys(protractor.Key.ESCAPE);
        }, "pressEscape");
    }

    @ActionHooks
    async pressTab() {
        await this.performActionOnVisible(async (element) => {
            await (await element.getWebElement()).sendKeys(protractor.Key.TAB);
        }, "pressTab");
    }

    @ActionHooks
    async scrollIntoView() {
        await this.should(be.visible);
        await Browser.executeScript("arguments[0].scrollIntoView(true);", await this.getWebElement());
    }

    async should(condition: ElementCondition, timeout?: number): Promise<Element> {
        return await Wait.shouldMatch(this, condition, timeout);
    }

    async shouldNot(condition: ElementCondition): Promise<Element> {
        return await this.should(Condition.not(condition));
    }

    async is(condition: ElementCondition, timeout?: number): Promise<boolean> {
        return await Wait.isMatch(this, condition, timeout);
    }

    async isNot(condition: ElementCondition): Promise<boolean> {
        return await this.is(Condition.not(condition));
    }

    async isVisible(): Promise<boolean> {
        return await (await this.getWebElement()).isDisplayed();
    }

    async isPresent(): Promise<boolean> {
        try {
            return !!(await this.getWebElement());
        } catch (ignored) {
            return false;
        }
    }

    async isAbsent(): Promise<boolean> {
        return !(await this.isPresent());
    }

    async value(): Promise<string> {
        return await (await this.getWebElement()).getAttribute("value");
    }

    async text(): Promise<string> {
        await this.should(be.visible);
        return await (await this.getWebElement()).getText();
    }

    async attribute(attributeName: string): Promise<string> {
        return await (await this.getWebElement()).getAttribute(attributeName);
    }

    async innerHtml(): Promise<string> {
        return await this.attribute('innerHTML');
    }

    async outerHtml(): Promise<string> {
        return await this.attribute('outerHTML');
    }

    async getWebElement(): Promise<WebElement> {
        return await this.locator.find();
    }

    private async fireEvent(...events: string[]) {
        //usage - await this.fireEvent("focus", "keydown", "keypress", "input", "keyup", "change", "blur");
        const jsCodeToTriggerEvent: string =
            `(function() {
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
            await Browser.executeScript(jsCodeToTriggerEvent, await this.getWebElement(), events);
        } catch (error) {
            console.log("Failed to trigger events " + events + ": " + error.message);
        }
    }

    private async performActionOnVisible(action: (element: Element) => void, actionName: string) {
        try {
            await action(this);
        } catch (ignored) {
            await this.should(be.visible);
            if (Browser.params().scrollIntoViewBeforeAction) {
                await this.scrollIntoView();
            }
            try {
                await action(this);
            } catch (error) {
                let message = `For element ${this.toString()}: cannot perform ${actionName}\n\treason: ${error.message}`;
                if (Utils.getSelenidejsParam(`saveScreenshot`)) {
                    try {
                        const screenshotPath = await Utils.saveScreenshot();
                        message = `${message}\nSaved screenshot: ${screenshotPath}`;
                    } catch (error) {
                        console.error(`Cannot save screenshot cause of:\n${error}`);
                    }
                }
                if (Utils.getSelenidejsParam(`saveHtml`)) {
                    try {
                        const htmlPath = await Utils.savePageSource();
                        message = `${message}\nSaved html: ${htmlPath}`;
                    } catch (error) {
                        console.error(`Cannot save page source cause of:\n${error}`);
                    }
                }
                throw new CannotPerformActionError(message);
            }
        }
    }

    parent(): Element {
        return this.element(With.xpath("./.."));
    }

    followingSibling(predicate: string = ''): Element {
        return this.element(With.xpath("./following-sibling::*" + predicate));
    }

    element(cssOrLocator: string | By): Element {
        return new Element(new ByWebElementLocator((typeof cssOrLocator === "string" ? With.css(cssOrLocator) : cssOrLocator), this));
    }

    elementSmart(locator: string): Element {
        return new Element(new ByExtendedWebElementLocator(locator, this));
    }

    visibleElement(cssSelector: string): Element {
        return all(cssSelector).findBy(be.visible);
    }

    all(locator: string | By): Collection {
        return new Collection(new ByWebElementsLocator(typeof locator === "string"
            ? locator.includes("/") ? With.xpath(locator) : With.css(locator)
            : locator,
            this));
    }

    toString(): string {
        return this.locator.toString();
    }

}

export function element(locator: string | By): Element {
    return new Element(new ByWebElementLocator(typeof locator === "string"
        ? locator.includes("/") ? With.xpath(locator) : With.css(locator)
        : locator));
}

export function visibleElement(cssSelector: string): Element {
    return all(cssSelector).findBy(be.visible);
}

export function elementSmart(locator: string): Element {
    return new Element(new ByExtendedWebElementLocator(locator));
}

function ActionHooks(target, methodName, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const beforeHooks = Element.beforeActionHooks;
    const afterHooks = Element.afterActionHooks;

    async function safeApplyActionHooks(hooks: ((element: Element, actionName: string, actionError?: Error) => void | Promise<void>)[], element, actionName, actionError?: Error) {
        for (let hook of hooks) {
            try {
                await hook(element, actionName, actionError);
            } catch (error) {
                console.warn(`Cannot perform hook on '${actionName}' action cause of:\n\tError message: ${error.message}\n\tError stacktrace: ${error.stackTrace}`);
            }
        }
    }

    descriptor.value = async function () {
        let err;
        try {
            await safeApplyActionHooks(beforeHooks, this, methodName);
            return await originalMethod.apply(this, arguments);
        } catch (error) {
            err = error;
            throw error;
        } finally {
            await safeApplyActionHooks(afterHooks, this, methodName, err);
        }
    }
}

