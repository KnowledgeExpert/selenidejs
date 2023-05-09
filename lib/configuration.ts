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

// import * as path from 'path';
import {
    Builder, By, Capabilities, ThenableWebDriver, WebDriver,
} from 'selenium-webdriver';
import * as capabilities from 'selenium-webdriver/lib/capabilities';
import { Browser } from './browser';
import { OnFailureHook } from './wait';
import { Collection } from './collection';
import { Element } from './element';
import { Extensions } from './utils/extensions';

/**
 * A one place to configure everything.
 * There is no separate Browser, Element or Collection configurations.
 * All corresponding options live here, in Configuration.*
 * It was implemented like this to stay KISS and simplify implementation.
 * Enjoy;)
 */

/**
 * Same as corresponding Capabilities.<browserName> key
 */
type BrowserName = 'chrome' | 'edge' | 'firefox' | 'ie' | 'safari';

export type OnEntityFailureHook = OnFailureHook<Browser | Element | Collection>;

export class Configuration {
    static with(): Customized<Configuration> {
        return Customized.configuration();
    }

    static withDriver(driver: ThenableWebDriver | (() => ThenableWebDriver)): Customized<Configuration> {
        return Configuration.with().driver(driver);
    }

    driver: ThenableWebDriver | undefined;

    timeout: number = 4000; // todo: seems like explicit types are not needed somewhere...

    baseUrl: string = '';

    setValueByJs: boolean = false;

    typeByJs: boolean = false;

    windowWidth: string = ''; // todo: why not as number?

    windowHeight: string = ''; // todo: why not as number?

    // readonly htmlPath: string                = path.resolve('./htmls');
    // readonly screenshotPath: string          = path.resolve('./screenshots');
    fullPageScreenshot: boolean = true;
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
    ]; */

    _locationStrategy: (selector: string | By) => By = Extensions.cssOrXPathToBy;

    _driver: ThenableWebDriver;

    __getDriver: () => ThenableWebDriver = undefined; // TODO: deprecate

    _buildDriver: (config?: Configuration) => ThenableWebDriver;

    // todo: should we name it quitDriver? or tearDownDriver?
    _resetDriver: (config?: Configuration) => Promise<void>;

    // todo: should we add something like isDriverAlive()? by default = this._driver != undefined

    // should we refactor out driver, buildDriver, resetDriver, etc into driverManager? for SRP at least

    browserName: BrowserName = 'chrome';

    capabilities: Capabilities | undefined = undefined;

    remoteUrl: string | undefined = undefined;

    // TODO: cover other builder.using* properties like proxy and agent

    constructor({
        driver, _driver, _buildDriver: buildDriver, ...options
    }: Partial<Configuration> = {}) {
        Object.assign(this, options);

        // if (driver) {
        //     this._driver = driver;
        // }
        Object.assign(this, { _driver: driver ?? _driver });

        this._buildDriver = buildDriver ?? function fromConfig(config: Configuration) {
            const builder = new Builder();
            const caps = Capabilities[config.browserName ?? 'chrome']();
            if (config.capabilities) {
                caps.merge(config.capabilities);
            }
            if (config.remoteUrl) {
                builder.usingServer(config.remoteUrl);
            }
            return builder.withCapabilities(caps).build();
        };

        Object.defineProperty(this, 'driver', {
            enumerable: false,
            get() {
                if (this.__getDriver) {
                    return this.__getDriver();
                }

                // TODO: should we also check if driver is not closed (i.e. alive)?
                this._driver = this._driver ?? this._buildDriver(this);
                return this._driver;
            },
            set(value = undefined) {
                this._driver = value;
            },
        });

        this._resetDriver = driver
            // ? async function justQuitDriverThatWasManuallyPassed()
            ? async () => this.driver.quit()
            // : async function quitAndRemoveStoredInstance() {
            : async () => {
                if (!this._driver) {
                    return;
                }
                await this.driver.getSession().then(
                    _ => this.driver.quit(),
                    error => console.warn(
                        'You seem to try to quit a browser that is already not alive:',
                        error,
                    ),
                );
                this.driver = undefined;
            };
    }
}

// todo: rename to Customizing?
/* compare:
 *   Customizing.browser().driver(driver).timeout(1000).build()
 *    Customized.browser().driver(driver).timeout(1000).build()
 */
export class Customized<T> { // todo: add generic? Customized<T> ... constructor(...T...) ... build():T
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

    driver(webdriver: WebDriver | ThenableWebDriver | (() => ThenableWebDriver) | (() => WebDriver)) {
        this.configuration = {
            ...this.configuration,
            ...(
                typeof webdriver === 'function'
                    ? { __getDriver: webdriver as () => ThenableWebDriver } // todo: refactor as ...
                    : { driver: webdriver as ThenableWebDriver } // todo: refactor as ...
            ),
        };
        return this;
    }

    baseUrl(base: string) {
        this.configuration = { ...this.configuration, baseUrl: base };
        return this;
    }

    timeout(milliseconds: number) {
        this.configuration = { ...this.configuration, timeout: milliseconds };
        return this;
    }

    windowWidth(value: string) {
        this.configuration = { ...this.configuration, windowWidth: value };
        return this;
    }

    windowHeight(value: string) {
        this.configuration = { ...this.configuration, windowHeight: value };
        return this;
    }

    setValueByJs(value: boolean) {
        this.configuration = { ...this.configuration, setValueByJs: value };
        return this;
    }

    typeByJs(value: boolean) {
        this.configuration = { ...this.configuration, typeByJs: value };
        return this;
    }

    /*    htmlPath(path: string) {
        this.configuration = {...this.configuration, htmlPath: path};
        return this;
    }

    screenshotPath(path: string) {
        this.configuration = {...this.configuration, screenshotPath: path};
        return this;
    } */

    fullPageScreenshot(turnedOn: boolean) {
        this.configuration = { ...this.configuration, fullPageScreenshot: turnedOn };
        return this;
    }

/*    onFailureHooks(hooks: OnEntityFailureHook[]) { // todo: consider switching to varargs
        this.configuration = {...this.configuration, onFailureHooks: hooks};
        return this;
    } */

    _locationStrategy(fn: (selector: string) => By) {
        this.configuration = { ...this.configuration, _locationStrategy: fn };
        return this;
    }
}
