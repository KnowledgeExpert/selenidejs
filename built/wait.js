"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
var Wait;
(function (Wait) {
    async function hard(intervalInMilliseconds = protractor_1.browser.params.timeout.toHardWaitInMs) {
        await protractor_1.browser.driver.sleep(intervalInMilliseconds);
    }
    Wait.hard = hard;
    async function shouldMatch(entity, condition, timeout = protractor_1.browser.params.timeout.toWaitElementsInMs) {
        return await until(entity, condition, true, timeout);
    }
    Wait.shouldMatch = shouldMatch;
    async function isMatch(entity, condition, timeout = protractor_1.browser.params.timeout.toWaitElementsInMs) {
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
            // await attachScreenshot(lastError.message); // TODO remove or refactor to just save screenshot?
            lastError.message = `${entity.toString()}\n\tshould ${lastError.message}\n\tWait timed out after ${timeout}ms`;
            throw lastError;
        }
        return null;
    }
})(Wait = exports.Wait || (exports.Wait = {}));
//# sourceMappingURL=wait.js.map