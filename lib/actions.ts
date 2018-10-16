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

import jimp = require('jimp');
import * as mergeImg from 'merge-img';
import { Button, By, Key, WebDriver, WebElement } from 'selenium-webdriver';
import { Collection } from './collection';
import { Condition } from './condition';
import { Driver } from './driver';
import { Element } from './element';
import { ActionError } from './errors/actionError';
import { be } from './helpers/be';
import { HookExecutor } from './hooks/hookExecutor';
import { ByFilteredWebElementsLocator } from './locators/byFilteredWebElementsLocator';
import { ByIndexedWebElementLocator } from './locators/byIndexedWebElementLocator';
import { ByWebElementLocator } from './locators/byWebElementLocator';
import { ByWebElementsLocator } from './locators/byWebElementsLocator';
import { Utils } from './utils';
import { With } from './with';


export namespace Actions {

    /* tslint:disable:only-arrow-functions */
    /* tslint:disable:space-before-function-paren */

    export const click = async (element: Element): Promise<Element> => {
        return Utils.getDriver(element).configuration.clickByJs
            ? clickByJs(element)
            : commonClick(element);
    };

    async function commonClick(element: Element) {
        return createElementOnVisibleAction(element, async function click(element: Element) {
            const webelement = await element.getWebElement();
            await webelement.click();
        });
    }

    async function clickByJs(element: Element) {
        return createElementOnVisibleAction(element, async function clickByJs(element: Element) {
            const getClickOnElementWithOffsetScript = (offsetX: number, offsetY: number) => {
                return `arguments[0].dispatchEvent(new MouseEvent('click', {
                    'view': window,
                    'bubbles': true,
                    'cancelable': true,
                    'clientX': arguments[0].getClientRects()[0].left + ${offsetX},
                    'clientY': arguments[0].getClientRects()[0].top + ${offsetY}
                }))`;
            };
            const driver = Utils.getDriver(element);
            const webelement = await element.getWebElement();
            await driver.executeScript(getClickOnElementWithOffsetScript(0, 0), webelement);
        });
    }

    export const contextClick = async (element: Element): Promise<Element> => {
        return createElementOnVisibleAction(element, async function contextClick(element: Element) {
            const driver = Utils.getDriver(element);
            const webelement = await element.getWebElement();
            await driver.actions().click(webelement, String(Button.RIGHT)).perform();
        });
    };

    export async function doubleClick(element: Element): Promise<Element> {
        return createElementOnVisibleAction(element, async function doubleClick(element: Element) {
            const driver = Utils.getDriver(element);
            const webelement = await element.getWebElement();
            await driver.actions().mouseMove(webelement).perform();
            await driver.actions().doubleClick().perform();
        });
    }

    export async function hover(element: Element): Promise<Element> {
        return createElementOnVisibleAction(element, async function hover(element: Element) {
            const driver = Utils.getDriver(element);
            const webelement = await element.getWebElement();
            await driver.actions().mouseMove(webelement).perform();
        });
    }

    export function pressKey(key: string) {
        return (element: Element) => {
            return createElementOnVisibleAction(element, async function pressKey(element: Element) {
                const webelement = await element.getWebElement();
                await webelement.sendKeys(key);
            });
        };
    }

    export const pressEnter = pressKey(Key.ENTER);

    export const pressEscape = pressKey(Key.ESCAPE);

    export const pressTab = pressKey(Key.TAB);

    export async function scrollTo(element: Element): Promise<Element> {
        return createElementOnVisibleAction(element, async function scrollTo(element: Element) {
            const driver = Utils.getDriver(element);
            const webelement = await element.getWebElement();
            await driver.executeScript('arguments[0].scrollIntoView(true);', webelement);
        });
    }

    export function sendKeys(value: string | number) {
        return (element: Element) => {
            return createElementOnVisibleAction(element, async function sendKeys(element: Element) {
                const webelement = await element.getWebElement();
                await webelement.sendKeys(value);
            });
        };
    }

    export function setValue(value: string | number) {
        return (element: Element) => Utils.getDriver(element).configuration.setValueByJs
            ? commonSetValue(element, value)
            : setValueByJs(element, value);
    }

    function commonSetValue(element: Element, value: string | number) {
        return createElementOnVisibleAction(element, async function setValue(element: Element) {
            const webelement = await element.getWebElement();
            await webelement.clear();
            await webelement.sendKeys(String(value));
        });
    }

    function setValueByJs(element: Element, value: string | number) {
        return createElementOnVisibleAction(element, async function setValueByJs(element: Element) {
            const webelement = await element.getWebElement();
            const driver = Utils.getDriver(element);
            const script =
                `return (function(webelement, text) {
                        var maxlength = webelement.getAttribute('maxlength') === null
                            ? -1
                            : parseInt(webelement.getAttribute('maxlength'));
                        webelement.value = maxlength === -1
                            ? text
                            : text.length <= maxlength ? text
                                : text.substring(0, maxlength);
                        return null;
                    })(arguments[0], arguments[1]);`;

            await webelement.clear();
            await driver.executeScript(script, webelement, String(value));
        });
    }

    export const visibility = (element: Element): Promise<boolean> => {
        return createElementAction(element, async function visibility(element: Element) {
            return element.getWebElement().then(webelement => webelement.isDisplayed());
        });
    };

    export const presence = (element: Element): Promise<boolean> => {
        return createElementAction(element, async function presence(element: Element) {
            return element.getWebElement().then(result => true, err => false);
        });
    };

    export const text = (element: Element) => {
        return createElementAction(element, async function text(element: Element) {
            return element.getWebElement().then(webelement => webelement.getText());
        });
    };

    export function attribute(attributeName: string) {
        return (element) => createElementAction(element, async function attribute(element: Element) {
            return element.getWebElement().then(webelement => webelement.getAttribute(attributeName));
        });
    }

    export const parent = (element: Element) => {
        return element.element(With.xpath('./..'));
    };

    export function followingSibling(predicate: string = '') {
        return (element: Element) => {
            return element.element(With.xpath('./following-sibling::*' + predicate));
        };
    }

    export function element(cssOrXpathOrBy: string | By) {
        return (searchContext: Element | Driver) => {
            const driver = searchContext instanceof Driver ? searchContext : Utils.getDriver(searchContext);
            const by = Utils.toBy(cssOrXpathOrBy);
            const locator = new ByWebElementLocator(by, searchContext);
            return new Element(locator, driver);
        };
    }

    export function all(cssOrXpathOrBy: string | By) {
        return (searchContext: Element | Driver) => {
            const driver = searchContext instanceof Driver ? searchContext : Utils.getDriver(searchContext);
            const by = Utils.toBy(cssOrXpathOrBy);
            const locator = new ByWebElementsLocator(by, searchContext);
            return new Collection(locator, driver);
        };
    }

    export function filtered(condition: Condition<Element>) {
        return (collection: Collection) => {
            return new Collection(new ByFilteredWebElementsLocator(condition, collection), Utils.getDriver(collection));
        };
    }

    export function nth(index: number) {
        return (collection: Collection) => {
            return new Element(new ByIndexedWebElementLocator(index, collection), Utils.getDriver(collection));
        };
    }

    export const size = async (collection: Collection) => {
        const webelements = await collection.getWebElements();
        return webelements.length;
    };

    export function find(condition: Condition<Element>) {
        return (collection: Collection) => {
            return new Collection(new ByFilteredWebElementsLocator(condition, collection), Utils.getDriver(collection))
                .get(0);
        };
    }

    export function open(url: string) {
        return (driver: Driver) => {
            return createDriverAction(driver, async function open(driver: Driver) {
                await driver.configuration.webdriver.get(url);
            });
        };
    }

    export function resizeWindow(width: number, height: number) {
        return (driver: Driver) => {
            return createDriverAction(driver, async function resizeWindow(driver: Driver) {
                await driver.configuration.webdriver.manage().window().setSize(width, height);
            });
        };
    }

    export const refresh = (driver: Driver) => {
        return createDriverAction(driver, async function refresh(driver: Driver) {
            await driver.configuration.webdriver.navigate().refresh();
            await driver.configuration.webdriver.navigate().refresh();
        });
    };

    export const acceptAlert = (driver: Driver) => {
        return createDriverAction(driver, async function acceptAlert(driver: Driver) {
            await driver.configuration.webdriver.switchTo().alert().accept();
        });
    };

    export const url = (driver: Driver) => {
        return createDriverAction(driver, async function url(driver: Driver) {
            return driver.configuration.webdriver.getCurrentUrl();
        });
    };

    export const title = (driver: Driver) => {
        return createDriverAction(driver, async function title(driver: Driver) {
            return driver.configuration.webdriver.getTitle();
        });
    };

    export const pageSource = (driver: Driver) => {
        return createDriverAction(driver, async function pageSource(driver: Driver) {
            return driver.configuration.webdriver.getPageSource();
        });
    };

    /* tslint:disable:ban-types */
    export function executeScript(script: string | Function, ...args: any[]) {
        return (driver: Driver) => {
            return createDriverAction(driver, async function pageSource(driver: Driver) {
                return driver.configuration.webdriver.executeScript(script, ...args);
            });
        };
    }

    /* tslint:enable:ban-types */

    export const tabs = (driver: Driver) => {
        return createDriverAction(driver, async function getTabs(driver: Driver) {
            return driver.configuration.webdriver.getAllWindowHandles();
        });
    };

    export const nextTab = (driver: Driver) => {
        return createDriverAction(driver, async function nextTab(driver: Driver) {
            const currentTab = await driver.configuration.webdriver.getWindowHandle();
            const allTabs = await driver.configuration.webdriver.getAllWindowHandles();
            const currentTabIndex = allTabs.indexOf(currentTab);
            await driver.configuration.webdriver
                .switchTo()
                .window(currentTabIndex >= allTabs.length ? allTabs[0] : allTabs[currentTabIndex + 1]);
        });
    };

    export const previousTab = (driver: Driver) => {
        return createDriverAction(driver, async function previousTab(driver: Driver) {
            const currentTab = await driver.configuration.webdriver.getWindowHandle();
            const allTabs = await driver.configuration.webdriver.getAllWindowHandles();
            const currentTabIndex = allTabs.indexOf(currentTab);
            await driver.configuration.webdriver.switchTo()
                .window(currentTabIndex > 0 ? allTabs[currentTabIndex - 1] : allTabs[allTabs.length - 1]);
        });
    };

    export function switchToTab(tabId: string) {
        return (driver: Driver) => {
            return createDriverAction(driver, async function switchToTab(driver: Driver) {
                await driver.configuration.webdriver.switchTo().window(tabId);
            });
        };
    }

    export function switchToFrame(frameElement: Element) {
        return (driver: Driver) => {
            return createDriverAction(driver, async function switchToTab(driver: Driver) {
                await frameElement.should(be.visible);
                const webelement = await frameElement.getWebElement();
                await driver.configuration.webdriver.switchTo().frame(webelement);
            });
        };
    }

    export const switchToDefaultFrame = (driver: Driver) => {
        return createDriverAction(driver, async function switchToTab(driver: Driver) {
            await driver.configuration.webdriver.switchTo().defaultContent();
        });
    };

    export const clearCacheAndCookies = (driver: Driver) => {
        return createDriverAction(driver, async function switchToTab(driver: Driver) {
            await driver.configuration.webdriver.executeScript('window.localStorage.clear();')
                .catch(ignored => {
                });
            await driver.configuration.webdriver.executeScript('window.sessionStorage.clear();')
                .catch(ignored => {
                });
            await driver.configuration.webdriver.manage().deleteAllCookies()
                .catch(ignored => {
                });
        });
    };

    export async function close(driver: Driver) {
        return createDriverAction(driver, async function switchToTab(driver: Driver) {
            await driver.configuration.webdriver.close();
        });
    }

    export async function quit(driver: Driver) {
        return createDriverAction(driver, async function switchToTab(driver: Driver) {
            await driver.configuration.webdriver.quit();
        });
    }

    export async function screenshot(driver: Driver): Promise<Buffer> {
        return driver.configuration.fullpageScreenshot
            ? fullpageScreenshot(driver)
            : viewportScreenshot(driver);
    }

    async function viewportScreenshot(driver: Driver) {
        return createDriverAction(driver, async function screenshot(driver: Driver) {
            return Buffer.from(await driver.configuration.webdriver.takeScreenshot(), 'base64');
        });
    }

    type BrowserData = {
        devicePixelRatio: number,
        width: number,
        height: number,
        innerHeight: number,
        pageWidth: number,
        pageHeight: number,
    };

    async function fullpageScreenshot(driver: Driver): Promise<any> {
        return createDriverAction(driver, async function viewportScreenshot(driver: Driver) {
            const webdriver = driver.configuration.webdriver;
            const screens = [];

            // if in frame, need to swith to DEFAULT content to make an screenshot
            const currentFrameElement = await getCurrentFrameWebElement(webdriver);
            if (currentFrameElement !== null) {
                await webdriver.switchTo().defaultContent();
            }

            await hideScrollbars(webdriver);
            const browserData = await getBrowserData(webdriver);
            const screensCount = Math.ceil(browserData.pageHeight / browserData.innerHeight);
            const delta = (browserData.innerHeight * screensCount) - browserData.pageHeight;

            for (let i = 0; i < screensCount; i++) {
                await scrollToNthScreen(webdriver, browserData, i);
                const screen = await takeScreenshotWithWait(webdriver);

                if (screensCount > 1 && (i + 1) === screensCount && delta > 0) {
                    const croppedScreen = await crop(screen, delta);
                    screens.push(croppedScreen);
                } else {
                    screens.push(screen);
                }
            }

            // if was in frame, need to switch it again to avoid breaking flow
            if (currentFrameElement !== null) {
                await webdriver.switchTo().frame(currentFrameElement);
            }

            return mergeImg(screens, {direction: true})
                .then(jimpImage => new Promise((resolve, reject) => {
                    jimpImage.getBuffer(jimp.MIME_PNG, ((err, buffer) => {
                        if (err) reject(err);
                        resolve(buffer);
                    }));
                }));
        });
    }

    async function getCurrentFrameWebElement(webdriver: WebDriver): Promise<WebElement> {
        return webdriver.executeScript('return window.frameElement')
            .then(result => result as WebElement);
    }

    async function hideScrollbars(webdriver: WebDriver) {
        await setDocumentOverflow(webdriver);
    }

    async function setDocumentOverflow(webdriver: WebDriver, overflowValue = 'hidden'): Promise<string> {
        return setOverflow(webdriver, 'document.documentElement.style.overflow', overflowValue);
    }

    async function setOverflow(webdriver: WebDriver, element: string, overflowValue: string): Promise<string> {
        return String(await webdriver.executeScript(`
            return (function () {
                var origOverflow = ${element};
                ${element} = ${overflowValue ? `'${overflowValue}'` : 'undefined'};
                return origOverflow;
                })();
        `));
    }

    async function getBrowserData(webdriver: WebDriver): Promise<BrowserData> {
        const windowData = await webdriver.executeScript(`
        return {
                devicePixelRatio: window.devicePixelRatio,
                width: window.screen.height * window.devicePixelRatio,
                height: window.screen.height * window.devicePixelRatio,
                innerHeight: window.innerHeight * window.devicePixelRatio,
                pageWidth: document.body.scrollWidth * window.devicePixelRatio,
                pageHeight: document.body.scrollHeight * window.devicePixelRatio
        };`);
        return windowData as BrowserData;
    }

    async function scrollToNthScreen(webdriver: WebDriver, browserData: any, index: number) {
        const script = `window.scrollTo(0, + ${(browserData.innerHeight / browserData.devicePixelRatio) * index});`;
        await webdriver.executeScript(script);
    }

    async function takeScreenshotWithWait(webdriver: WebDriver): Promise<Buffer> {
        const timeoutForScrollToFinish = 100;
        await webdriver.sleep(timeoutForScrollToFinish);
        return Buffer.from(await webdriver.takeScreenshot(), 'base64');
    }

    async function crop(screenBuffer: Buffer, delta: number): Promise<Buffer> {
        const jimpImage = await jimp.read(screenBuffer);
        const width = jimpImage.bitmap.width;
        const height = jimpImage.bitmap.height;
        const croppedImg = jimpImage.clone().crop(0, delta, width, height);
        return croppedImg.getBufferAsync(jimp.MIME_PNG);
    }

    type ElementAction = (element: Element) => Promise<any>;
    type DriverAction = (driver: Driver) => Promise<any>;

    async function createElementOnVisibleAction(element: Element, action: ElementAction): Promise<any> {
        const result = await performActionOnVisible(element, action)
            .catch(async (error) => {
                await executeHooksOnElementFailure(element, error);
                throw error;
            });
        return (undefined === result) ? element : result;
    }

    async function createElementAction(element: Element, action: ElementAction): Promise<any> {
        const result = await action(element).catch(async (error) => {
            await executeHooksOnElementFailure(element, error);
            throw error;
        });
        return (undefined === result) ? element : result;
    }

    async function createDriverAction(driver: Driver, action: DriverAction): Promise<any> {
        const result = await action(driver).then(
            result => result,
            async (error) => {
                await executeHooksOnDriverFailure(driver, error);
                throw error;
            });
        return (undefined === result) ? driver : result;
    }

    async function performActionOnVisible(element: Element, action: ElementAction): Promise<any> {
        try {
            await action(element);
            return;
        } catch (ignored) {
            await element.should(be.visible);
            try {
                await action(element);
                return;
            } catch (error) {
                throw new ActionError(
                    `For ${element.toString()}: cannot perform ${action.name}.\n\tReason: ${error.message}`
                );
            }
        }
    }

    async function executeHooksOnElementFailure(element: Element, error: Error) {
        const driver: Driver = Utils.getDriver(element);
        const hooksExecutor = new HookExecutor<Element>(driver, element);
        await hooksExecutor.executeOnFailureHooks(error);
        throw error;
    }

    async function executeHooksOnDriverFailure(driver: Driver, error: Error) {
        const hooksExecutor = new HookExecutor<Driver>(driver, driver);
        await hooksExecutor.executeOnFailureHooks(error);
        throw error;
    }

}
