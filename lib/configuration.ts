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
import { Builder, Capabilities, WebDriver } from 'selenium-webdriver';
import { Browser } from './browser';
import { OnFailureHook } from './wait';
import { Collection } from './collection';
import { Element } from './element';


/**
 * A one place to configure everything.
 * There is no separate Browser, Element or Collection configurations.
 * All corresponding options live here, in Configuration.*
 * It was implemented like this to stay KISS and simplify implementation.
 * Enjoy;)
 */

export type OnEntityFailureHook = OnFailureHook<Browser | Element | Collection>;

export class Configuration {

    static with(): Customized<Configuration> {
        return Customized.configuration();
    }

    static withDriver(driver: WebDriver): Customized<Configuration> {
        return Configuration.with().driver(driver);
    }

    readonly driver: WebDriver               = null;
    readonly timeout: number                 = 4000; // todo: seems like explicit types are not needed somewhere...
    readonly baseUrl: string                 = '';
    readonly setValueByJs: boolean           = false;
    readonly typeByJs: boolean               = false;
    readonly windowWidth: string             = '';  // todo: why not as number?
    readonly windowHeight: string            = '';  // todo: why not as number?
    // readonly htmlPath: string                = path.resolve('./htmls');
    // readonly screenshotPath: string          = path.resolve('./screenshots');
    readonly fullPageScreenshot: boolean     = true;
    // todo: should we bother and make it immutable?
/*    readonly onFailureHooks: OnEntityFailureHook[] = [
        async (failure: Error, entity: Browser | Element | Collection): Promise<void | Error> => {
            const configuration = (entity as Entity).configuration;
            const driver = configuration.driver;
            const screenshotPath = await saveScreenshot(driver, configuration.screenshotPath);
            const htmlPath = await savePageSource(driver, configuration.htmlPath);
            // todo: handle failure
            return failure;
        }, // todo: how to make it be passed only in entity wait when Entity is Element?
        async (failure: Error, entity: Element): Promise<void | Error> => {
            // ...
        },
        async (failure: Error, entity: Collection): Promise<void | Error> => {
            // ...
        }
    ];*/

    constructor(init?: Partial<Configuration>) {
        Object.assign(this, init);
        if (this.driver === null) {
            this.driver = new Builder().withCapabilities(Capabilities.chrome()).build();
        }
    }
}

// todo: rename to Customizing?
/* compare:
 *   Customizing.browser().driver(driver).timeout(1000).build()
 *    Customized.browser().driver(driver).timeout(1000).build()
 */
export class Customized<T> {  // todo: add generic? Customized<T> ... constructor(...T...) ... build():T
    static browser(): Customized<Browser> {
        return new Customized(Browser);
    }

    static configuration(): Customized<Configuration> {
        return new Customized(Configuration);
    }

    private configuration: Partial<Configuration>;

    // todo: limit customizedType values to Browser | Configuration
    private constructor(private readonly customizedType) {
        this.customizedType = customizedType;
        this.configuration = {};
    }

    build(): T {
        return new this.customizedType(this.configuration);
    }

    driver(webdriver: WebDriver) {
        this.configuration = {...this.configuration, driver: webdriver};
        return this;
    }

    baseUrl(base: string) {
        this.configuration = {...this.configuration, baseUrl: base};
        return this;
    }

    timeout(milliseconds: number) {
        this.configuration = {...this.configuration, timeout: milliseconds};
        return this;
    }

    windowWidth(value: string) {
        this.configuration = {...this.configuration, windowWidth: value};
        return this;
    }

    windowHeight(value: string) {
        this.configuration = {...this.configuration, windowHeight: value};
        return this;
    }

    setValueByJs(value: boolean) {
        this.configuration = {...this.configuration, setValueByJs: value};
        return this;
    }

    typeByJs(value: boolean) {
        this.configuration = {...this.configuration, typeByJs: value};
        return this;
    }

/*    htmlPath(path: string) {
        this.configuration = {...this.configuration, htmlPath: path};
        return this;
    }

    screenshotPath(path: string) {
        this.configuration = {...this.configuration, screenshotPath: path};
        return this;
    }*/

    fullPageScreenshot(turnedOn: boolean) {
        this.configuration = {...this.configuration, fullPageScreenshot: turnedOn};
        return this;
    }

/*    onFailureHooks(hooks: OnEntityFailureHook[]) { // todo: consider switching to varargs
        this.configuration = {...this.configuration, onFailureHooks: hooks};
        return this;
    }*/
}
