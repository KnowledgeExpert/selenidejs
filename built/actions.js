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
const actionError_1 = require("./errors/actionError");
const conditionDoesNotMatchError_1 = require("./errors/conditionDoesNotMatchError");
const be_1 = require("./helpers/be");
const hookExecutor_1 = require("./hooks/hookExecutor");
const utils_1 = require("./utils");
var Actions;
(function (Actions) {
    /* tslint:disable:only-arrow-functions */
    /* tslint:disable:space-before-function-paren */
    Actions.click = async (element) => {
        return createElementOnVisibleCommand(element, async function click(element, driver) {
            driver.configuration.clickByJs ? await clickByJs(element) : await commonClick(element);
        });
    };
    async function commonClick(element) {
        const webelement = await element.getWebElement();
        await webelement.click();
    }
    async function clickByJs(element) {
        const getClickOnElementWithOffsetScript = (offsetX, offsetY) => {
            return `element.dispatchEvent(new MouseEvent('click', {
                    'view': window,
                    'bubbles': true,
                    'cancelable': true,
                    'clientX': element.getClientRects()[0].left + ${offsetX},
                    'clientY': element.getClientRects()[0].top + ${offsetY}
                }))`;
        };
        await element.executeScript(getClickOnElementWithOffsetScript(0, 0));
    }
    Actions.contextClick = async (element) => {
        return createElementOnVisibleCommand(element, async function contextClick(element, driver) {
            const webelement = await element.getWebElement();
            await driver.actions().click(webelement, String(selenium_webdriver_1.Button.RIGHT)).perform();
        });
    };
    async function doubleClick(element) {
        return createElementOnVisibleCommand(element, async function doubleClick(element, driver) {
            const webelement = await element.getWebElement();
            await driver.actions().mouseMove(webelement).perform();
            await driver.actions().doubleClick().perform();
        });
    }
    Actions.doubleClick = doubleClick;
    async function hover(element) {
        return createElementOnVisibleCommand(element, async function hover(element, driver) {
            const webelement = await element.getWebElement();
            await driver.actions().mouseMove(webelement).perform();
        });
    }
    Actions.hover = hover;
    function pressKey(key) {
        return (element) => {
            return createElementOnVisibleCommand(element, async function pressKey(element) {
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
        return createElementOnVisibleCommand(element, async function scrollTo(element) {
            await element.executeScript('element.scrollIntoView(true);');
        });
    }
    Actions.scrollTo = scrollTo;
    function sendKeys(value) {
        return (element) => {
            return createElementOnVisibleCommand(element, async function sendKeys(element) {
                const webelement = await element.getWebElement();
                await webelement.sendKeys(value);
            });
        };
    }
    Actions.sendKeys = sendKeys;
    function setValue(value) {
        return (element) => {
            return createElementOnVisibleCommand(element, async function setValue(element, driver) {
                return driver.configuration.setValueByJs
                    ? setValueByJs(element, value)
                    : commonSetValue(element, value);
            });
        };
    }
    Actions.setValue = setValue;
    async function commonSetValue(element, value) {
        const webelement = await element.getWebElement();
        await webelement.clear();
        await webelement.sendKeys(String(value));
    }
    async function setValueByJs(element, value) {
        const script = `
            var text = arguments[1];
            var maxlength = element.getAttribute('maxlength') === null
                ? -1
                : parseInt(element.getAttribute('maxlength'));
            element.value = maxlength === -1
                ? text
                : text.length <= maxlength
                    ? text
                    : text.substring(0, maxlength);
            return null;
            `;
        const webelement = await element.getWebElement();
        await webelement.clear();
        await element.executeScript(script, String(value));
    }
    Actions.visibility = (element) => {
        return createElementQuery(element, async function visibility(element) {
            return element.getWebElement().then(webelement => webelement.isDisplayed());
        });
    };
    Actions.presence = (element) => {
        return createElementQuery(element, async function presence(element) {
            return element.getWebElement().then(result => true, err => false);
        });
    };
    Actions.focused = (element) => {
        return createElementQuery(element, async function presence(element) {
            const script = 'return document.activeElement';
            const focusedElement = await element.executeScript(script);
            if (!focusedElement) {
                throw new conditionDoesNotMatchError_1.ConditionDoesNotMatchError();
            }
            return element.equals(focusedElement);
        });
    };
    Actions.text = (element) => {
        return createElementQuery(element, async function text(element) {
            return element.getWebElement().then(webelement => webelement.getText());
        });
    };
    function attribute(attributeName) {
        return (element) => createElementQuery(element, async function attribute(element) {
            return element.getWebElement().then(webelement => webelement.getAttribute(attributeName));
        });
    }
    Actions.attribute = attribute;
    Actions.size = async (collection) => {
        const webelements = await collection.getWebElements();
        return webelements.length;
    };
    function open(url) {
        return (driver) => {
            return createDriverCommand(driver, async function open(driver) {
                await driver.configuration.webdriver.get(url);
            });
        };
    }
    Actions.open = open;
    function resizeWindow(width, height) {
        return (driver) => {
            return createDriverCommand(driver, async function resizeWindow(driver) {
                await driver.configuration.webdriver.manage().window().setSize(width, height);
            });
        };
    }
    Actions.resizeWindow = resizeWindow;
    Actions.refresh = (driver) => {
        return createDriverCommand(driver, async function refresh(driver) {
            await driver.configuration.webdriver.navigate().refresh();
            await driver.configuration.webdriver.navigate().refresh();
        });
    };
    Actions.acceptAlert = (driver) => {
        return createDriverCommand(driver, async function acceptAlert(driver) {
            await driver.configuration.webdriver.switchTo().alert().accept();
        });
    };
    Actions.url = (driver) => {
        return createDriverQuery(driver, async function url(driver) {
            return driver.configuration.webdriver.getCurrentUrl();
        });
    };
    Actions.title = (driver) => {
        return createDriverQuery(driver, async function title(driver) {
            return driver.configuration.webdriver.getTitle();
        });
    };
    Actions.pageSource = (driver) => {
        return createDriverQuery(driver, async function pageSource(driver) {
            return driver.configuration.webdriver.getPageSource();
        });
    };
    /* tslint:disable:ban-types */
    function executeScript(script, ...args) {
        return (driver) => {
            return createDriverQuery(driver, async function executeScript(driver) {
                return driver.configuration.webdriver.executeScript(script, ...args);
            });
        };
    }
    Actions.executeScript = executeScript;
    /* tslint:enable:ban-types */
    Actions.tabs = (driver) => {
        return createDriverQuery(driver, async function tabs(driver) {
            return driver.configuration.webdriver.getAllWindowHandles();
        });
    };
    Actions.nextTab = (driver) => {
        return createDriverCommand(driver, async function nextTab(driver) {
            const currentTab = await driver.configuration.webdriver.getWindowHandle();
            const allTabs = await driver.configuration.webdriver.getAllWindowHandles();
            const currentTabIndex = allTabs.indexOf(currentTab);
            await driver.configuration.webdriver
                .switchTo()
                .window(currentTabIndex >= allTabs.length ? allTabs[0] : allTabs[currentTabIndex + 1]);
        });
    };
    Actions.previousTab = (driver) => {
        return createDriverCommand(driver, async function previousTab(driver) {
            const currentTab = await driver.configuration.webdriver.getWindowHandle();
            const allTabs = await driver.configuration.webdriver.getAllWindowHandles();
            const currentTabIndex = allTabs.indexOf(currentTab);
            await driver.configuration.webdriver.switchTo()
                .window(currentTabIndex > 0 ? allTabs[currentTabIndex - 1] : allTabs[allTabs.length - 1]);
        });
    };
    function switchToTab(tabId) {
        return (driver) => {
            return createDriverCommand(driver, async function switchToTab(driver) {
                await driver.configuration.webdriver.switchTo().window(tabId);
            });
        };
    }
    Actions.switchToTab = switchToTab;
    function switchToFrame(frameElement) {
        return (driver) => {
            return createDriverCommand(driver, async function switchToTab(driver) {
                await frameElement.should(be_1.be.visible);
                const webelement = await frameElement.getWebElement();
                await driver.configuration.webdriver.switchTo().frame(webelement);
            });
        };
    }
    Actions.switchToFrame = switchToFrame;
    Actions.switchToDefaultFrame = (driver) => {
        return createDriverCommand(driver, async function switchToTab(driver) {
            await driver.configuration.webdriver.switchTo().defaultContent();
        });
    };
    Actions.clearCacheAndCookies = (driver) => {
        return createDriverCommand(driver, async function switchToTab(driver) {
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
        return createDriverCommand(driver, async function switchToTab(driver) {
            await driver.configuration.webdriver.close();
        });
    }
    Actions.close = close;
    async function quit(driver) {
        return createDriverCommand(driver, async function switchToTab(driver) {
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
        return createDriverQuery(driver, async function screenshot(driver) {
            return Buffer.from(await driver.configuration.webdriver.takeScreenshot(), 'base64');
        });
    }
    async function fullpageScreenshot(driver) {
        return createDriverQuery(driver, async function viewportScreenshot(driver) {
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
    async function createElementOnVisibleCommand(element, command) {
        const driver = utils_1.Utils.getDriver(element);
        await performCommandOnVisible(element, driver, command)
            .catch(async (error) => {
            if (error instanceof actionError_1.ActionError) {
                await executeHooksOnElementFailure(element, driver, error);
            }
            throw error;
        });
        return element;
    }
    async function createElementQuery(element, query) {
        const driver = utils_1.Utils.getDriver(element);
        return query(element, driver);
    }
    async function createDriverCommand(driver, command) {
        await command(driver).then(result => result, async (error) => {
            await executeHooksOnDriverFailure(driver, error);
            throw error;
        });
        return driver;
    }
    async function createDriverQuery(driver, query) {
        return query(driver);
    }
    async function performCommandOnVisible(element, driver, command) {
        try {
            await command(element, driver);
            return;
        }
        catch (ignored) {
            await element.should(be_1.be.visible);
            try {
                await command(element, driver);
                return;
            }
            catch (error) {
                throw new actionError_1.ActionError(`For ${element.toString()}: cannot perform ${command.name}.\n\tReason: ${error.message}`);
            }
        }
    }
    async function executeHooksOnElementFailure(element, driver, error) {
        const hooksExecutor = new hookExecutor_1.HookExecutor(driver, element);
        await hooksExecutor.executeOnFailureHooks(error);
    }
    async function executeHooksOnDriverFailure(driver, error) {
        const hooksExecutor = new hookExecutor_1.HookExecutor(driver, driver);
        await hooksExecutor.executeOnFailureHooks(error);
    }
})(Actions = exports.Actions || (exports.Actions = {}));
//# sourceMappingURL=actions.js.map