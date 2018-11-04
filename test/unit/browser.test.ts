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

import { By } from 'selenium-webdriver';
import { Browser } from '../../lib/browser';
import { Condition } from '../../lib/condition';
import { Configuration } from '../../lib/configuration';
import { Driver } from '../../lib/driver';
import { Element } from '../../lib/element';
import { have } from '../../lib/helpers/have';

/* tslint:disable:space-before-function-paren */
/* tslint:disable:no-magic-numbers */
/* tslint:disable:ban-types */

describe('Browser', () => {

    const executeScriptResultExampleObject = {};
    const driverExampleObject = {};
    const elementExampleObject = {};
    const collectionExampleObject = {};
    const actionsExampleObject = {};
    const driverMock = {
        open: async (url: string) => driverExampleObject,
        close: async () => driverExampleObject,
        quit: async () => {
        },
        refresh: async () => driverExampleObject,
        acceptAlert: async () => driverExampleObject,
        url: async () => 'test',
        title: async () => 'test',
        pageSource: async () => 'test',
        screenshot: async () => Buffer.from('test'),
        resizeWindow: async (width: number, height: number) => driverExampleObject,
        actions: () => actionsExampleObject,
        element: (cssOrXpathOrBy: string | By) => elementExampleObject,
        all: (cssOrXpathOrBy: string | By) => collectionExampleObject,
        should: async (condition: Condition<Driver>, timeout?: number) => driverExampleObject,
        shouldNot: async (condition: Condition<Driver>, timeout?: number) => driverExampleObject,
        is: async (condition: Condition<Driver>, timeout?: number) => true,
        isNot: async (condition: Condition<Driver>, timeout?: number) => true,
        executeScript: async (script: string | Function, ...args: any[]) => executeScriptResultExampleObject,
        getTabs: async () => ['test'],
        nextTab: async () => driverExampleObject,
        previousTab: async () => driverExampleObject,
        switchToTab: async (tabId: string) => driverExampleObject,
        switchToFrame: async (frameElement: Element) => driverExampleObject,
        switchToDefaultFrame: async () => driverExampleObject,
        clearCacheAndCookies: async () => driverExampleObject
    };

    let selenideDriver;
    let configuration;

    beforeEach(() => {
        selenideDriver = Browser.driver;
        configuration = Browser.configuration;
    });

    afterEach(() => {
        Browser.driver = selenideDriver;
        Browser.configuration = configuration;
    });

    it('initWith should init configuration with default one', async () => {
        Browser.initWith({});
        expect(Browser.configuration.afterElementActionHooks).toBe(Configuration.DEFAULT.afterElementActionHooks);
        expect(Browser.configuration.beforeElementActionHooks).toBe(Configuration.DEFAULT.beforeElementActionHooks);
        expect(Browser.configuration.clickByJs).toBe(Configuration.DEFAULT.clickByJs);
        expect(Browser.configuration.onCollectionFailureHooks).toBe(Configuration.DEFAULT.onCollectionFailureHooks);
        expect(Browser.configuration.screenshotPath).toBe(Configuration.DEFAULT.screenshotPath);
        expect(Browser.configuration.setValueByJs).toBe(Configuration.DEFAULT.setValueByJs);
        expect(Browser.configuration.timeout).toBe(Configuration.DEFAULT.timeout);
        expect(Browser.configuration.webdriver).toBe(Configuration.DEFAULT.webdriver);
        expect(Browser.configuration.windowWidth).toBe(Configuration.DEFAULT.windowWidth);
    });

    it('initWith should override default configuration', async () => {
        Browser.initWith({
            afterElementActionHooks: 'test' as any,
            beforeElementActionHooks: 'test' as any,
            clickByJs: 'test' as any,
            fullpageScreenshot: 'test' as any,
            htmlPath: 'test' as any,
            onCollectionFailureHooks: 'test' as any,
            onElementFailureHooks: 'test' as any,
            onFailureHooks: 'test' as any,
            screenshotPath: 'test' as any,
            setValueByJs: 'test' as any,
            timeout: 'test' as any,
            webdriver: 'test' as any,
            windowHeight: 'test' as any,
            windowWidth: 'test' as any
        });
        Object.keys(Browser.configuration)
            .forEach(key => expect(Browser.configuration[key]).toBe('test'));
    });

    it('open should call driver.open with correct arguments', async () => {
        spyOn(driverMock, 'open').and.callThrough();
        Browser.driver = driverMock as any;
        const result = await Browser.open('test');

        expect(result).toBe(driverExampleObject);
        expect(driverMock.open).toHaveBeenCalled();
        expect(driverMock.open).toHaveBeenCalledWith('test');
    });

    it('close should call driver.close', async () => {
        spyOn(driverMock, 'close').and.callThrough();
        Browser.driver = driverMock as any as any;
        const result = await Browser.close();

        expect(result).toBe(driverExampleObject as any);
        expect(driverMock.close).toHaveBeenCalled();
    });

    it('quit should call driver.quit', async () => {
        spyOn(driverMock, 'quit').and.callThrough();
        Browser.driver = driverMock as any;
        await Browser.quit();

        expect(driverMock.quit).toHaveBeenCalled();
    });

    it('refresh should call driver.refresh', async () => {
        spyOn(driverMock, 'refresh').and.callThrough();
        Browser.driver = driverMock as any;
        const result = await Browser.refresh();

        expect(result).toBe(driverExampleObject);
        expect(driverMock.refresh).toHaveBeenCalled();
    });

    it('acceptAlert should call driver.acceptAlert', async () => {
        spyOn(driverMock, 'acceptAlert').and.callThrough();
        Browser.driver = driverMock as any;
        const result = await Browser.acceptAlert();

        expect(result).toBe(driverExampleObject);
        expect(driverMock.acceptAlert).toHaveBeenCalled();
    });

    it('url should return driver.url', async () => {
        spyOn(driverMock, 'url').and.callThrough();
        Browser.driver = driverMock as any;
        const url = await Browser.url();

        expect(url).toBe('test');
        expect(driverMock.url).toHaveBeenCalled();
    });

    it('title should return driver.title', async () => {
        spyOn(driverMock, 'title').and.callThrough();
        Browser.driver = driverMock as any;
        const title = await Browser.title();

        expect(title).toBe('test');
        expect(driverMock.title).toHaveBeenCalled();
    });

    it('pageSource should return driver.pageSource', async () => {
        spyOn(driverMock, 'pageSource').and.callThrough();
        Browser.driver = driverMock as any;
        const pageSource = await Browser.pageSource();

        expect(pageSource).toBe('test');
        expect(driverMock.pageSource).toHaveBeenCalled();
    });

    it('screenshot should return driver.screenshot', async () => {
        spyOn(driverMock, 'screenshot').and.callThrough();
        Browser.driver = driverMock as any;
        const screenshot = await Browser.screenshot();

        expect(screenshot.toString()).toBe(Buffer.from('test').toString());
        expect(driverMock.screenshot).toHaveBeenCalled();
    });

    it('resizeWindow should return driver.resizeWindow', async () => {
        spyOn(driverMock, 'resizeWindow').and.callThrough();
        Browser.driver = driverMock as any;
        const result = await Browser.resizeWindow(1, 2);

        expect(result).toBe(driverExampleObject);
        expect(driverMock.resizeWindow).toHaveBeenCalledWith(1, 2);
    });

    it('actions should return driver.actions', async () => {
        spyOn(driverMock, 'actions').and.callThrough();
        Browser.driver = driverMock as any;
        const result = Browser.actions();

        expect(result).toBe(actionsExampleObject as any);
        expect(driverMock.actions).toHaveBeenCalled();
    });

    it('element should return driver.element', async () => {
        spyOn(driverMock, 'element').and.callThrough();
        Browser.driver = driverMock as any;
        const result = Browser.element('test');

        expect(result).toBe(elementExampleObject as any);
        expect(driverMock.element).toHaveBeenCalledWith('test');
    });

    it('all should return driver.all', async () => {
        spyOn(driverMock, 'all').and.callThrough();
        Browser.driver = driverMock as any;
        const result = Browser.all('test');

        expect(result).toBe(collectionExampleObject as any);
        expect(driverMock.all).toHaveBeenCalledWith('test');
    });

    it('"should" should return driver.should', async () => {
        spyOn(driverMock, 'should').and.callThrough();
        Browser.driver = driverMock as any;
        const condition = have.url('test');
        const result = await Browser.should(condition);

        expect(result).toBe(driverExampleObject as any);
        expect(driverMock.should).toHaveBeenCalledWith(condition, undefined);
    });

    it('"shouldNot" should return driver.shouldNot', async () => {
        spyOn(driverMock, 'shouldNot').and.callThrough();
        Browser.driver = driverMock as any;
        const condition = have.url('test');
        const result = await Browser.shouldNot(condition);

        expect(result).toBe(driverExampleObject as any);
        expect(driverMock.shouldNot).toHaveBeenCalledWith(condition, undefined);
    });

    it('"is" should return driver.is', async () => {
        spyOn(driverMock, 'is').and.callThrough();
        Browser.driver = driverMock as any;
        const condition = have.url('test');
        const result = await Browser.is(condition);

        expect(result).toBe(true);
        expect(driverMock.is).toHaveBeenCalledWith(condition, undefined);
    });

    it('"isNot" should return driver.isNot', async () => {
        spyOn(driverMock, 'isNot').and.callThrough();
        Browser.driver = driverMock as any;
        const condition = have.url('test');
        const result = await Browser.isNot(condition);

        expect(result).toBe(true);
        expect(driverMock.isNot).toHaveBeenCalledWith(condition, undefined);
    });

    it('executeScript should return driver.executeScript', async () => {
        spyOn(driverMock, 'executeScript').and.callThrough();
        Browser.driver = driverMock as any;
        const result = await Browser.executeScript('test');

        expect(result).toBe(executeScriptResultExampleObject);
        expect(driverMock.executeScript).toHaveBeenCalledWith('test');
    });

    it('getTabs should return driver.getTabs', async () => {
        spyOn(driverMock, 'getTabs').and.callThrough();
        Browser.driver = driverMock as any;
        const tabs = await Browser.getTabs();

        expect(tabs.length).toBe(1);
        expect(tabs[0]).toBe('test');
        expect(driverMock.getTabs).toHaveBeenCalled();
    });

    it('nextTab should return driver.nextTab', async () => {
        spyOn(driverMock, 'nextTab').and.callThrough();
        Browser.driver = driverMock as any;
        const result = await Browser.nextTab();

        expect(result).toBe(driverExampleObject);
        expect(driverMock.nextTab).toHaveBeenCalled();
    });

    it('previousTab should return driver.previousTab', async () => {
        spyOn(driverMock, 'previousTab').and.callThrough();
        Browser.driver = driverMock as any;
        const result = await Browser.previousTab();

        expect(result).toBe(driverExampleObject);
        expect(driverMock.previousTab).toHaveBeenCalled();
    });

    it('switchToTab should return driver.switchToTab', async () => {
        spyOn(driverMock, 'switchToTab').and.callThrough();
        Browser.driver = driverMock as any;
        const result = await Browser.switchToTab('test');

        expect(result).toBe(driverExampleObject);
        expect(driverMock.switchToTab).toHaveBeenCalledWith('test');
    });

    it('switchToFrame should return driver.switchToFrame', async () => {
        spyOn(driverMock, 'switchToFrame').and.callThrough();
        Browser.driver = driverMock as any;
        const result = await Browser.switchToFrame('test' as any);

        expect(result).toBe(driverExampleObject);
        expect(driverMock.switchToFrame).toHaveBeenCalledWith('test');
    });

    it('switchToDefaultFrame should return driver.switchToDefaultFrame', async () => {
        spyOn(driverMock, 'switchToDefaultFrame').and.callThrough();
        Browser.driver = driverMock as any;
        const result = await Browser.switchToDefaultFrame();

        expect(result).toBe(driverExampleObject);
        expect(driverMock.switchToDefaultFrame).toHaveBeenCalled();
    });

    it('clearCacheAndCookies should return driver.clearCacheAndCookies', async () => {
        spyOn(driverMock, 'clearCacheAndCookies').and.callThrough();
        Browser.driver = driverMock as any;
        const result = await Browser.clearCacheAndCookies();

        expect(result).toBe(driverExampleObject);
        expect(driverMock.clearCacheAndCookies).toHaveBeenCalled();
    });

});
