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
const Jimp = require("jimp");
const mergeImg = require("merge-img");
class FullpageScreenshot {
    async perform(driver, ...args) {
        return this.take(driver.webdriver);
    }
    /**
     * The method allows to take full page screenshots by scrolling screen and merging taken parts of screen
     * (without scrollbars) into one whole screenshot.
     * If there are frames, the method will automatically switch to DEFAULT content to avoid breaking flow.
     * @returns {Promise<Buffer>}
     */
    async take(webdriver) {
        const screens = [];
        // if in frame, need to swith to DEFAULT content to make an screenshot
        const currentFrameElement = await this.getCurrentFrameWebElement(webdriver);
        if (currentFrameElement !== null) {
            await webdriver.switchTo().defaultContent();
        }
        await this.hideScrollbars(webdriver);
        const browserData = await this.getBrowserData(webdriver);
        const screensCount = Math.ceil(browserData.pageHeight / browserData.innerHeight);
        const delta = (browserData.innerHeight * screensCount) - browserData.pageHeight;
        for (let i = 0; i < screensCount; i++) {
            await this.scrollToNthScreen(webdriver, browserData, i);
            const screen = await this.takeScreenshotWithWait(webdriver);
            if (screensCount > 1 && (i + 1) === screensCount && delta > 0) {
                const croppedScreen = await FullpageScreenshot.crop(screen, delta);
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
            .then(mergedScreenshot => FullpageScreenshot.getBuffer(mergedScreenshot));
    }
    async getCurrentFrameWebElement(webdriver) {
        return (await webdriver.executeScript('return window.frameElement'));
    }
    async hideScrollbars(webdriver) {
        await this.setDocumentOverflow(webdriver);
    }
    // TODO can be used to avoid fixed elements appearing
    // TODO multiple times on fullpage screenshots (f.e. when footer is sticed to the top)
    // async function disableFixedElements() {
    //     const JS_GET_IS_BODY_OVERFLOW_HIDDEN = `
    //         return (function () {
    //             var styles = window.getComputedStyle(document.body, null);
    //             var overflow = styles.getPropertyValue('overflow');
    //             var overflowX = styles.getPropertyValue('overflow-x');
    //             var overflowY = styles.getPropertyValue('overflow-y');
    //             return overflow == 'hidden' || overflowX == 'hidden' || overflowY == 'hidden';
    //             })();`;
    //     const isBodyOverflowisHidden = Boolean(await browser.executeScript(JS_GET_IS_BODY_OVERFLOW_HIDDEN));
    //     if (isBodyOverflowisHidden) {
    //         await setBodyOverflow();
    //     }
    // }
    async setDocumentOverflow(webdriver, overflowValue = 'hidden') {
        return this.setOverflow(webdriver, 'document.documentElement.style.overflow', overflowValue);
    }
    // private async setBodyOverflow(webdriver: WebDriver, overflowValue = 'initial'): Promise<string> {
    //     return this.setOverflow(webdriver, 'document.body.style.overflow', overflowValue);
    // }
    async setOverflow(webdriver, element, overflowValue) {
        return String(await webdriver.executeScript(`
            return (function () {
                var origOverflow = ${element};
                ${element} = ${overflowValue ? `'${overflowValue}'` : 'undefined'};
                return origOverflow;
                })();
        `));
    }
    async getBrowserData(webdriver) {
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
    async scrollToNthScreen(webdriver, browserData, index) {
        const script = `window.scrollTo(0, + ${(browserData.innerHeight / browserData.devicePixelRatio) * index});`;
        await webdriver.executeScript(script);
    }
    async takeScreenshotWithWait(webdriver) {
        const timeoutForScrollToFinish = 100;
        await webdriver.sleep(timeoutForScrollToFinish);
        return Buffer.from(await webdriver.takeScreenshot(), 'base64');
    }
    static async crop(screenBuffer, delta) {
        return Jimp.read(screenBuffer).then(img => {
            const width = img.bitmap.width;
            const height = img.bitmap.height;
            const croppedImg = img.clone().crop(0, delta, width, height);
            return FullpageScreenshot.getBuffer(croppedImg);
        });
    }
    static async getBuffer(jimpImage) {
        return new Promise((resolve, reject) => {
            jimpImage.getBuffer(Jimp.AUTO, (err, buff) => {
                if (err)
                    reject(err);
                resolve(buff);
            });
        });
    }
}
exports.FullpageScreenshot = FullpageScreenshot;
//# sourceMappingURL=fullpageScreenshot.js.map