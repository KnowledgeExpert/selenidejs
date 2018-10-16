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

import * as fs from 'fs-extra';
import * as path from 'path';
import { By } from 'selenium-webdriver';
import { Browser } from '../../lib/browser';
import { Driver } from '../../lib/driver';
import { Utils } from '../../lib/utils';

/* tslint:disable:space-before-function-paren */
/* tslint:disable:no-magic-numbers */

describe('Utils', () => {

    it('to by should handle css string', async () => {
        expect(Utils.toBy('.some-class') instanceof By).toBeTruthy();
        expect(Utils.toBy('.some-class').toString()).toBe('By(css selector, .some-class)');
    });

    it('to by should handle xpath string', async () => {
        expect(Utils.toBy('.//div') instanceof By).toBeTruthy();
        expect(Utils.toBy('.//div').toString()).toBe('By(xpath, .//div)');
    });

    it('to by should handle By object', async () => {
        expect(Utils.toBy(By.id('test')) instanceof By).toBeTruthy();
        expect(Utils.toBy(By.id('test')).toString()).toBe('By(css selector, *[id="test"])');
    });

    it('get driver should return Driver instance', async () => {
        expect(Utils.getDriver(Browser.element('')) instanceof Driver).toBeTruthy();
    });

    it('save page source should save correct data', async () => {
        const driverMock: any = {
            pageSource: () => 'test page source',
            title: () => 'test title'
        };

        const testPath = path.resolve('./tmp');
        const filePath = await Utils.savePageSource(driverMock, testPath);

        expect(filePath).toMatch(new RegExp(`${driverMock.title()}_.*\.html`));
        expect(fs.readFileSync(filePath).toString()).toBe(driverMock.pageSource());
        fs.unlinkSync(filePath);
    });

    it('save screenshot should save correct data', async () => {
        const driverMock: any = {
            screenshot: () => 'test screenshot',
            title: () => 'test title'
        };

        const testPath = path.resolve('./tmp');
        const filePath = await Utils.saveScreenshot(driverMock, testPath);

        expect(filePath).toMatch(new RegExp(`${driverMock.title()}_.*\.png`));
        expect(fs.readFileSync(filePath).toString()).toBe(driverMock.screenshot());
        fs.unlinkSync(filePath);
    });

});
