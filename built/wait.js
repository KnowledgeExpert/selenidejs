"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const utils_1 = require("./utils");
var Wait;
(function (Wait) {
    const DEFAULT_WAIT_MS = 4000;
    const DEFAULT_HARD_WAIT_MS = 2000;
    Wait.WAIT_MS = utils_1.Utils.getSelenidejsParam(`timeouts.toWaitElementsInMs`) || DEFAULT_WAIT_MS;
    Wait.HARD_WAIT_MS = utils_1.Utils.getSelenidejsParam(`timeouts.toHardWaitInMs`) || DEFAULT_HARD_WAIT_MS;
    async function hard(intervalInMilliseconds = Wait.HARD_WAIT_MS) {
        await protractor_1.browser.driver.sleep(intervalInMilliseconds);
    }
    Wait.hard = hard;
    async function shouldMatch(entity, condition, timeout = Wait.WAIT_MS) {
        return await until(entity, condition, true, timeout);
    }
    Wait.shouldMatch = shouldMatch;
    async function isMatch(entity, condition, timeout = Wait.WAIT_MS) {
        return !!await until(entity, condition, false, timeout);
    }
    Wait.isMatch = isMatch;
    async function until(entity, condition, throwError, timeout) {
        const finishTime = new Date().getTime() + timeout;
        let lastError;
        do {
            try {
                return await condition.matches(entity);
            }
            catch (error) {
                lastError = error;
            }
        } while (new Date().getTime() < finishTime);
        if (throwError) {
            lastError.message = `${entity.toString()}\n\tshould ${lastError.message}\n\tWait timed out after ${timeout}ms`;
            if (utils_1.Utils.getSelenidejsParam(`saveScreenshot`)) {
                try {
                    const screenshotPath = await utils_1.Utils.saveScreenshot();
                    lastError.message = `${lastError.message}\nSaved screenshot: ${screenshotPath}`;
                }
                catch (error) {
                    console.error(`Cannot save screenshot cause of:\n${error}`);
                }
            }
            if (utils_1.Utils.getSelenidejsParam(`saveHtml`)) {
                try {
                    const htmlPath = await utils_1.Utils.savePageSource();
                    lastError.message = `${lastError.message}\nSaved html: ${htmlPath}`;
                }
                catch (error) {
                    console.error(`Cannot save page source cause of:\n${error}`);
                }
            }
            throw lastError;
        }
        return entity;
    }
})(Wait = exports.Wait || (exports.Wait = {}));
//# sourceMappingURL=wait.js.map