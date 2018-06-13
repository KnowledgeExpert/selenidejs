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

import {browser} from 'protractor';
import {Utils} from './utils';
import {Condition} from './conditions/condition';


export namespace Wait {

    const DEFAULT_WAIT_MS = 4000;
    const DEFAULT_HARD_WAIT_MS = 2000;

    export const WAIT_MS = () => Utils.getSelenidejsParam(`timeouts.toWaitElementsInMs`) || DEFAULT_WAIT_MS;
    export const HARD_WAIT_MS = () => Utils.getSelenidejsParam(`timeouts.toHardWaitInMs`) || DEFAULT_WAIT_MS;
    // export const WAIT_MS = Utils.getSelenidejsParam(`timeouts.toWaitElementsInMs`) || DEFAULT_WAIT_MS;
    // export const HARD_WAIT_MS = Utils.getSelenidejsParam(`timeouts.toHardWaitInMs`) || DEFAULT_HARD_WAIT_MS;

    export async function hard(intervalInMilliseconds = HARD_WAIT_MS()) {
        await browser.driver.sleep(intervalInMilliseconds);
    }

    export async function shouldMatch<T>(entity: T, condition: Condition<T>, timeout = WAIT_MS()): Promise<T> {
        return await until(entity, condition, true, timeout);
    }

    export async function isMatch<T>(entity: T, condition: Condition<T>, timeout = WAIT_MS()): Promise<boolean> {
        return !!await until(entity, condition, false, timeout);
    }

    async function until<T>(entity: T, condition: Condition<T>, throwError: boolean, timeout: number): Promise<T> {
        const finishTime = new Date().getTime() + timeout;

        let lastError;
        do {
            try {
                return await condition.matches(entity);
            } catch (error) {
                lastError = error;
            }
        } while (new Date().getTime() < finishTime);

        if (throwError) {
            lastError.message = `${entity.toString()}\n\tshould ${lastError.message}\n\tWait timed out after ${timeout}ms`;
            if (Utils.getSelenidejsParam(`saveScreenshotOnFail`)) {
                try {
                    const screenshotPath = await Utils.saveScreenshot();
                    lastError.message = `${lastError.message}\nSaved screenshot: ${screenshotPath}`;
                } catch (error) {
                    console.error(`Cannot save screenshot cause of:\n${error}`);
                }
            }
            if (Utils.getSelenidejsParam(`saveHtmlOnFail`)) {
                try {
                    const htmlPath = await Utils.savePageSource();
                    lastError.message = `${lastError.message}\nSaved html: ${htmlPath}`;
                } catch (error) {
                    console.error(`Cannot save page source cause of:\n${error}`);
                }
            }
            throw lastError;
        }
        return entity;
    }
}
