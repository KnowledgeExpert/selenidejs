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

import * as path from 'path';
import { WebDriver } from 'selenium-webdriver';
import { OnFailureHook } from './refactor/onFailureHook';


// todo: should we break it down into separate configurations - for element, browser, collection?
export class Configuration {
    static shared: Configuration = new Configuration();

    // todo: should we make them readonly?
    timeout: number                 = 4000;
    windowWidth: string             = '';
    windowHeight: string            = '';
    htmlPath: string                = path.resolve('./htmls');
    screenshotPath: string          = path.resolve('./screenshots');
    fullPageScreenshot: boolean     = true;
    onFailureHooks: OnFailureHook[] = [
        /*
        async <T extends Driver | Element | Collection>(lastError: Error, entity: T, condition?: Condition<T>) => {
            const driver = Utils.getDriver(entity);
            if (driver.config.screenshotPath) {
                const screenshotPath = await Utils.saveScreenshot(driver, Browser.config.screenshotPath);
                lastError.message = `${lastError.message}\nSaved screenshot: ${screenshotPath}`;
            }
        },
        async <T extends Driver | Element | Collection>(lastError: Error, entity: T, condition?: Condition<T>) => {
            const driver = Utils.getDriver(entity);
            if (driver.config.htmlPath) {
                const htmlPath = await Utils.savePageSource(driver, Browser.config.htmlPath);
                lastError.message = `${lastError.message}\nSaved html: ${htmlPath}`;
            }
        }
        */
    ];
    driver: WebDriver               = null;  // todo: driver is not set by default... is it ok?
    /*
     * so we can create browser = new Browser() with no driver... might there be some weird behaviors?
     */

    constructor(init?: Partial<Configuration>) {
        Object.assign(this, init);
    }
}
