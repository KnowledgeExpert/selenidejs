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
import { Utils } from '../utils';
import { Driver } from './driver';
import { AfterElementActionHook } from './hooks/afterElementActionHook';
import { BeforeElementActionHook } from './hooks/beforeElementActionHook';
import { OnCollectionFailureHook } from './hooks/onCollectionFailureHook';
import { OnElementFailureHook } from './hooks/onElementFailureHook';
import { OnFailureHook } from './hooks/onFailureHook';


export class Configuration {

    static readonly DEFAULT_HTML_PATH = path.resolve('./htmls');
    static readonly DEFAULT_SCREENSHOT_PATH = path.resolve('./screenshots');
    static readonly DEFAULT_ON_FAILURE_HOOKS = [
        async(error: Error, driver: Driver) => {
            if (driver.configuration.screenshotPath) {
                const screenshotPath = await Utils.saveScreenshot(driver, driver.configuration.screenshotPath);
                error.message = `${error.message}\nSaved screenshot: ${screenshotPath}`;
            }
        },
        async(error: Error, driver: Driver) => {
            if (driver.configuration.htmlPath) {
                const htmlPath = await Utils.savePageSource(driver, driver.configuration.htmlPath);
                error.message = `${error.message}\nSaved html: ${htmlPath}`;
            }
        }
    ];

    static readonly DEFAULT: Configuration = {
        afterElementActionHooks: [],
        beforeElementActionHooks: [],
        fullpageScreenshot: true,
        htmlPath: Configuration.DEFAULT_HTML_PATH,
        onCollectionFailureHooks: [],
        onElementFailureHooks: [],
        onFailureHooks: Configuration.DEFAULT_ON_FAILURE_HOOKS,
        screenshotPath: Configuration.DEFAULT_SCREENSHOT_PATH,
        timeout: 4000,
        webdriver: null,
        windowHeight: null,
        windowWidth: null
    };

    htmlPath?: string;
    screenshotPath?: string;
    timeout?: number;
    windowWidth?: number;
    windowHeight?: number;
    fullpageScreenshot?: boolean;
    onFailureHooks?: OnFailureHook[];
    onElementFailureHooks?: OnElementFailureHook[];
    onCollectionFailureHooks?: OnCollectionFailureHook[];
    beforeElementActionHooks?: BeforeElementActionHook[];
    afterElementActionHooks?: AfterElementActionHook[];
    webdriver?: WebDriver;

    constructor(customConfiguration: any) {
        Object.assign(this, Configuration.DEFAULT);
        Object.assign(this, customConfiguration);
    }

}
