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
const jimp = require("jimp");
const mergeImg = require("merge-img");
const selenium_webdriver_1 = require("selenium-webdriver");
const collection_1 = require("./collection");
const driver_1 = require("./driver");
const element_1 = require("./element");
const actionError_1 = require("./errors/actionError");
const be_1 = require("./helpers/be");
const hookExecutor_1 = require("./hooks/hookExecutor");
const byFilteredWebElementsLocator_1 = require("./locators/byFilteredWebElementsLocator");
const byIndexedWebElementLocator_1 = require("./locators/byIndexedWebElementLocator");
const byWebElementLocator_1 = require("./locators/byWebElementLocator");
const byWebElementsLocator_1 = require("./locators/byWebElementsLocator");
const utils_1 = require("./utils");
const with_1 = require("./with");
var Actions;
(function (Actions) {
    /* tslint:disable:only-arrow-functions */
    /* tslint:disable:space-before-function-paren */
    Actions.click = async (element) => {
        return utils_1.Utils.getDriver(element).configuration.clickByJs
            ? clickByJs(element)
            : commonClick(element);
    };
    async function commonClick(element) {
        return createElementOnVisibleAction(element, async function click(element) {
            const webelement = await element.getWebElement();
            await webelement.click();
        });
    }
    async function clickByJs(element) {
        return createElementOnVisibleAction(element, async function clickByJs(element) {
            const getClickOnElementWithOffsetScript = (offsetX, offsetY) => {
                return `arguments[0].dispatchEvent(new MouseEvent('click', {
                    'view': window,
                    'bubbles': true,
                    'cancelable': true,
                    'clientX': arguments[0].getClientRects()[0].left + ${offsetX},
                    'clientY': arguments[0].getClientRects()[0].top + ${offsetY}
                }))`;
            };
            const driver = utils_1.Utils.getDriver(element);
            const webelement = await element.getWebElement();
            await driver.executeScript(getClickOnElementWithOffsetScript(0, 0), webelement);
        });
    }
    Actions.contextClick = async (element) => {
        return createElementOnVisibleAction(element, async function contextClick(element) {
            const driver = utils_1.Utils.getDriver(element);
            const webelement = await element.getWebElement();
            await driver.actions().click(webelement, String(selenium_webdriver_1.Button.RIGHT)).perform();
        });
    };
    async function doubleClick(element) {
        return createElementOnVisibleAction(element, async function doubleClick(element) {
            const driver = utils_1.Utils.getDriver(element);
            const webelement = await element.getWebElement();
            await driver.actions().mouseMove(webelement).perform();
            await driver.actions().doubleClick().perform();
        });
    }
    Actions.doubleClick = doubleClick;
    async function hover(element) {
        return createElementOnVisibleAction(element, async function hover(element) {
            const driver = utils_1.Utils.getDriver(element);
            const webelement = await element.getWebElement();
            await driver.actions().mouseMove(webelement).perform();
        });
    }
    Actions.hover = hover;
    function pressKey(key) {
        return (element) => {
            return createElementOnVisibleAction(element, async function pressKey(element) {
                const webelement = await element.getWebElement();
                await webelement.sendKeys(key);
            });
        };
    }
    Actions.pressKey = pressKey;
    Actions.pressEnter = pressKey(selenium_webdriver_1.Key.ENTER);
    Actions.pressEscape = pressKey(selenium_webdriver_1.Key.ESCAPE);
    Actions.pressTab = pressKey(selenium_webdriver_1.Key.TAB);
    async function scrollTo(element) {
        return createElementOnVisibleAction(element, async function scrollTo(element) {
            const driver = utils_1.Utils.getDriver(element);
            const webelement = await element.getWebElement();
            await driver.executeScript('arguments[0].scrollIntoView(true);', webelement);
        });
    }
    Actions.scrollTo = scrollTo;
    function sendKeys(value) {
        return (element) => {
            return createElementOnVisibleAction(element, async function sendKeys(element) {
                const webelement = await element.getWebElement();
                await webelement.sendKeys(value);
            });
        };
    }
    Actions.sendKeys = sendKeys;
    function setValue(value) {
        return (element) => utils_1.Utils.getDriver(element).configuration.setValueByJs
            ? commonSetValue(element, value)
            : setValueByJs(element, value);
    }
    Actions.setValue = setValue;
    function commonSetValue(element, value) {
        return createElementOnVisibleAction(element, async function setValue(element) {
            const webelement = await element.getWebElement();
            await webelement.clear();
            await webelement.sendKeys(String(value));
        });
    }
    function setValueByJs(element, value) {
        return createElementOnVisibleAction(element, async function setValueByJs(element) {
            const webelement = await element.getWebElement();
            const driver = utils_1.Utils.getDriver(element);
            const script = `return (function(webelement, text) {
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
    Actions.visibility = (element) => {
        return createElementAction(element, async function visibility(element) {
            return element.getWebElement().then(webelement => webelement.isDisplayed());
        });
    };
    Actions.presence = (element) => {
        return createElementAction(element, async function presence(element) {
            return element.getWebElement().then(result => true, err => false);
        });
    };
    Actions.text = (element) => {
        return createElementAction(element, async function text(element) {
            return element.getWebElement().then(webelement => webelement.getText());
        });
    };
    function attribute(attributeName) {
        return (element) => createElementAction(element, async function attribute(element) {
            return element.getWebElement().then(webelement => webelement.getAttribute(attributeName));
        });
    }
    Actions.attribute = attribute;
    Actions.parent = (element) => {
        return element.element(with_1.With.xpath('./..'));
    };
    function followingSibling(predicate = '') {
        return (element) => {
            return element.element(with_1.With.xpath('./following-sibling::*' + predicate));
        };
    }
    Actions.followingSibling = followingSibling;
    function element(cssOrXpathOrBy) {
        return (searchContext) => {
            const driver = searchContext instanceof driver_1.Driver ? searchContext : utils_1.Utils.getDriver(searchContext);
            const by = utils_1.Utils.toBy(cssOrXpathOrBy);
            const locator = new byWebElementLocator_1.ByWebElementLocator(by, searchContext);
            return new element_1.Element(locator, driver);
        };
    }
    Actions.element = element;
    function all(cssOrXpathOrBy) {
        return (searchContext) => {
            const driver = searchContext instanceof driver_1.Driver ? searchContext : utils_1.Utils.getDriver(searchContext);
            const by = utils_1.Utils.toBy(cssOrXpathOrBy);
            const locator = new byWebElementsLocator_1.ByWebElementsLocator(by, searchContext);
            return new collection_1.Collection(locator, driver);
        };
    }
    Actions.all = all;
    function filtered(condition) {
        return (collection) => {
            return new collection_1.Collection(new byFilteredWebElementsLocator_1.ByFilteredWebElementsLocator(condition, collection), utils_1.Utils.getDriver(collection));
        };
    }
    Actions.filtered = filtered;
    function nth(index) {
        return (collection) => {
            return new element_1.Element(new byIndexedWebElementLocator_1.ByIndexedWebElementLocator(index, collection), utils_1.Utils.getDriver(collection));
        };
    }
    Actions.nth = nth;
    Actions.size = async (collection) => {
        const webelements = await collection.getWebElements();
        return webelements.length;
    };
    function find(condition) {
        return (collection) => {
            return new collection_1.Collection(new byFilteredWebElementsLocator_1.ByFilteredWebElementsLocator(condition, collection), utils_1.Utils.getDriver(collection))
                .get(0);
        };
    }
    Actions.find = find;
    function open(url) {
        return (driver) => {
            return createDriverAction(driver, async function open(driver) {
                await driver.configuration.webdriver.get(url);
            });
        };
    }
    Actions.open = open;
    function resizeWindow(width, height) {
        return (driver) => {
            return createDriverAction(driver, async function resizeWindow(driver) {
                await driver.configuration.webdriver.manage().window().setSize(width, height);
            });
        };
    }
    Actions.resizeWindow = resizeWindow;
    Actions.refresh = (driver) => {
        return createDriverAction(driver, async function refresh(driver) {
            await driver.configuration.webdriver.navigate().refresh();
            await driver.configuration.webdriver.navigate().refresh();
        });
    };
    Actions.acceptAlert = (driver) => {
        return createDriverAction(driver, async function acceptAlert(driver) {
            await driver.configuration.webdriver.switchTo().alert().accept();
        });
    };
    Actions.url = (driver) => {
        return createDriverAction(driver, async function url(driver) {
            return driver.configuration.webdriver.getCurrentUrl();
        });
    };
    Actions.title = (driver) => {
        return createDriverAction(driver, async function title(driver) {
            return driver.configuration.webdriver.getTitle();
        });
    };
    Actions.pageSource = (driver) => {
        return createDriverAction(driver, async function pageSource(driver) {
            return driver.configuration.webdriver.getPageSource();
        });
    };
    /* tslint:disable:ban-types */
    function executeScript(script, ...args) {
        return (driver) => {
            return createDriverAction(driver, async function pageSource(driver) {
                return driver.configuration.webdriver.executeScript(script, ...args);
            });
        };
    }
    Actions.executeScript = executeScript;
    /* tslint:enable:ban-types */
    Actions.tabs = (driver) => {
        return createDriverAction(driver, async function getTabs(driver) {
            return driver.configuration.webdriver.getAllWindowHandles();
        });
    };
    Actions.nextTab = (driver) => {
        return createDriverAction(driver, async function nextTab(driver) {
            const currentTab = await driver.configuration.webdriver.getWindowHandle();
            const allTabs = await driver.configuration.webdriver.getAllWindowHandles();
            const currentTabIndex = allTabs.indexOf(currentTab);
            await driver.configuration.webdriver
                .switchTo()
                .window(currentTabIndex >= allTabs.length ? allTabs[0] : allTabs[currentTabIndex + 1]);
        });
    };
    Actions.previousTab = (driver) => {
        return createDriverAction(driver, async function previousTab(driver) {
            const currentTab = await driver.configuration.webdriver.getWindowHandle();
            const allTabs = await driver.configuration.webdriver.getAllWindowHandles();
            const currentTabIndex = allTabs.indexOf(currentTab);
            await driver.configuration.webdriver.switchTo()
                .window(currentTabIndex > 0 ? allTabs[currentTabIndex - 1] : allTabs[allTabs.length - 1]);
        });
    };
    function switchToTab(tabId) {
        return (driver) => {
            return createDriverAction(driver, async function switchToTab(driver) {
                await driver.configuration.webdriver.switchTo().window(tabId);
            });
        };
    }
    Actions.switchToTab = switchToTab;
    function switchToFrame(frameElement) {
        return (driver) => {
            return createDriverAction(driver, async function switchToTab(driver) {
                await frameElement.should(be_1.be.visible);
                const webelement = await frameElement.getWebElement();
                await driver.configuration.webdriver.switchTo().frame(webelement);
            });
        };
    }
    Actions.switchToFrame = switchToFrame;
    Actions.switchToDefaultFrame = (driver) => {
        return createDriverAction(driver, async function switchToTab(driver) {
            await driver.configuration.webdriver.switchTo().defaultContent();
        });
    };
    Actions.clearCacheAndCookies = (driver) => {
        return createDriverAction(driver, async function switchToTab(driver) {
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
    async function close(driver) {
        return createDriverAction(driver, async function switchToTab(driver) {
            await driver.configuration.webdriver.close();
        });
    }
    Actions.close = close;
    async function quit(driver) {
        return createDriverAction(driver, async function switchToTab(driver) {
            await driver.configuration.webdriver.quit();
        });
    }
    Actions.quit = quit;
    async function screenshot(driver) {
        return driver.configuration.fullpageScreenshot
            ? fullpageScreenshot(driver)
            : viewportScreenshot(driver);
    }
    Actions.screenshot = screenshot;
    async function viewportScreenshot(driver) {
        return createDriverAction(driver, async function screenshot(driver) {
            return Buffer.from(await driver.configuration.webdriver.takeScreenshot(), 'base64');
        });
    }
    async function fullpageScreenshot(driver) {
        return createDriverAction(driver, async function viewportScreenshot(driver) {
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
                }
                else {
                    screens.push(screen);
                }
            }
            // if was in frame, need to switch it again to avoid breaking flow
            if (currentFrameElement !== null) {
                await webdriver.switchTo().frame(currentFrameElement);
            }
            return mergeImg(screens, { direction: true })
                .then(jimpImage => new Promise((resolve, reject) => {
                jimpImage.getBuffer(jimp.MIME_PNG, ((err, buffer) => {
                    if (err)
                        reject(err);
                    resolve(buffer);
                }));
            }));
        });
    }
    async function getCurrentFrameWebElement(webdriver) {
        return webdriver.executeScript('return window.frameElement')
            .then(result => result);
    }
    async function hideScrollbars(webdriver) {
        await setDocumentOverflow(webdriver);
    }
    async function setDocumentOverflow(webdriver, overflowValue = 'hidden') {
        return setOverflow(webdriver, 'document.documentElement.style.overflow', overflowValue);
    }
    async function setOverflow(webdriver, element, overflowValue) {
        return String(await webdriver.executeScript(`
            return (function () {
                var origOverflow = ${element};
                ${element} = ${overflowValue ? `'${overflowValue}'` : 'undefined'};
                return origOverflow;
                })();
        `));
    }
    async function getBrowserData(webdriver) {
        const windowData = await webdriver.executeScript(`
        return {
                devicePixelRatio: window.devicePixelRatio,
                width: window.screen.height * window.devicePixelRatio,
                height: window.screen.height * window.devicePixelRatio,
                innerHeight: window.innerHeight * window.devicePixelRatio,
                pageWidth: document.body.scrollWidth * window.devicePixelRatio,
                pageHeight: document.body.scrollHeight * window.devicePixelRatio
        };`);
        return windowData;
    }
    async function scrollToNthScreen(webdriver, browserData, index) {
        const script = `window.scrollTo(0, + ${(browserData.innerHeight / browserData.devicePixelRatio) * index});`;
        await webdriver.executeScript(script);
    }
    async function takeScreenshotWithWait(webdriver) {
        const timeoutForScrollToFinish = 100;
        await webdriver.sleep(timeoutForScrollToFinish);
        return Buffer.from(await webdriver.takeScreenshot(), 'base64');
    }
    async function crop(screenBuffer, delta) {
        const jimpImage = await jimp.read(screenBuffer);
        const width = jimpImage.bitmap.width;
        const height = jimpImage.bitmap.height;
        const croppedImg = jimpImage.clone().crop(0, delta, width, height);
        return croppedImg.getBufferAsync(jimp.MIME_PNG);
    }
    async function createElementOnVisibleAction(element, action) {
        const result = await performActionOnVisible(element, action)
            .catch(async (error) => {
            await executeHooksOnElementFailure(element, error);
            throw error;
        });
        return (undefined === result) ? element : result;
    }
    async function createElementAction(element, action) {
        const result = await action(element).catch(async (error) => {
            await executeHooksOnElementFailure(element, error);
            throw error;
        });
        return (undefined === result) ? element : result;
    }
    async function createDriverAction(driver, action) {
        const result = await action(driver).then(result => result, async (error) => {
            await executeHooksOnDriverFailure(driver, error);
            throw error;
        });
        return (undefined === result) ? driver : result;
    }
    async function performActionOnVisible(element, action) {
        try {
            await action(element);
            return;
        }
        catch (ignored) {
            await element.should(be_1.be.visible);
            try {
                await action(element);
                return;
            }
            catch (error) {
                throw new actionError_1.ActionError(`For ${element.toString()}: cannot perform ${action.name}.\n\tReason: ${error.message}`);
            }
        }
    }
    async function executeHooksOnElementFailure(element, error) {
        const driver = utils_1.Utils.getDriver(element);
        const hooksExecutor = new hookExecutor_1.HookExecutor(driver, element);
        await hooksExecutor.executeOnFailureHooks(error);
        throw error;
    }
    async function executeHooksOnDriverFailure(driver, error) {
        const hooksExecutor = new hookExecutor_1.HookExecutor(driver, driver);
        await hooksExecutor.executeOnFailureHooks(error);
        throw error;
    }
})(Actions = exports.Actions || (exports.Actions = {}));
//# sourceMappingURL=actions.js.map