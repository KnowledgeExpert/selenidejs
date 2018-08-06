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

import { Element } from '../element';
import { Collection } from '../collection';
import { Driver } from '../driver';
import * as path from "path";
import { Utils } from "../../utils";
import { OnFailureHook } from "../onFailureHook";
import { Browser } from "../browser";
import { Condition } from "../..";


export class Configuration {

    static readonly DEFAULT: Configuration = {
        htmlPath: path.resolve('./htmls'),
        screenshotPath: path.resolve('./screenshots'),
        timeout: 4000,
        hardTimeout: 4000,
        windowWidth: '',
        windowHeight: '',
        fullpageScreenshot: true,
        onFailureHooks: [
            async <T extends Driver | Element | Collection>(lastError: Error, entity: T, condition?: Condition<T>) => {
                const driver = Utils.getDriver(entity);
                if (driver.config.screenshotPath) {
                    try {
                        const screenshotPath = await Utils.saveScreenshot(driver, Browser.config.screenshotPath);
                        lastError.message = `${lastError.message}\nSaved screenshot: ${screenshotPath}`;
                    } catch (error) {
                        console.error(`Cannot save screenshot cause of:\n${error}`);
                    }
                }
            },
            async <T extends Driver | Element | Collection>(lastError: Error, entity: T, condition?: Condition<T>) => {
                const driver = Utils.getDriver(entity);
                if (driver.config.htmlPath) {
                    try {
                        const htmlPath = await Utils.savePageSource(driver, Browser.config.htmlPath);
                        lastError.message = `${lastError.message}\nSaved html: ${htmlPath}`;
                    } catch (error) {
                        console.error(`Cannot save page source cause of:\n${error}`);
                    }
                }
            }
        ]
    };

    htmlPath: string;
    screenshotPath: string;
    timeout: number;
    hardTimeout: number;
    windowWidth: string;
    windowHeight: string;
    fullpageScreenshot: boolean;
    onFailureHooks: OnFailureHook[];

    constructor(customConfiguration: Configuration) {
        this.windowWidth = customConfiguration.windowWidth ? customConfiguration.windowWidth : Configuration.DEFAULT.windowWidth;
        this.windowHeight = customConfiguration.windowWidth ? customConfiguration.windowWidth : Configuration.DEFAULT.windowWidth;
        this.hardTimeout = customConfiguration.hardTimeout ? customConfiguration.hardTimeout : Configuration.DEFAULT.hardTimeout;
        this.timeout = customConfiguration.timeout ? customConfiguration.timeout : Configuration.DEFAULT.timeout;
        this.fullpageScreenshot = customConfiguration.fullpageScreenshot
            ? customConfiguration.fullpageScreenshot : Configuration.DEFAULT.fullpageScreenshot;
        this.screenshotPath = customConfiguration.screenshotPath ? customConfiguration.screenshotPath : Configuration.DEFAULT.screenshotPath;
        this.htmlPath = customConfiguration.htmlPath ? customConfiguration.htmlPath : Configuration.DEFAULT.htmlPath;
        this.onFailureHooks = customConfiguration.onFailureHooks
            ? [...Configuration.DEFAULT.onFailureHooks, ...customConfiguration.onFailureHooks] : Configuration.DEFAULT.onFailureHooks;
    }

}