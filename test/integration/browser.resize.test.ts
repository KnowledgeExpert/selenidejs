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

import { browser, data, driver, GIVEN, WHEN } from './base';
import { IRectangle } from 'selenium-webdriver';
import { perform } from '../../lib';

/* tslint:disable:no-magic-numbers */

let originalDimensions: IRectangle;

const something = async element => { /*nothing;P*/ };

describe('Browser.resizeWindow', () => {

    beforeEach(async () => {
        originalDimensions = await driver.manage().window().getRect();
    });

    afterEach(async () => {
        await driver.manage().window().setRect(originalDimensions);
    });

    it('resizes window to provided width and height', async () => {
        await GIVEN.openedEmptyPage();

        await browser.resizeWindow(640, 480);
        expect((await driver.manage().window().getRect()).width).toBe(640);
        expect((await driver.manage().window().getRect()).height).toBe(480);

        await browser.perform(something).then(perform.resizeWindow(800, 600));
        expect((await driver.manage().window().getRect()).width).toBe(800);
        expect((await driver.manage().window().getRect()).height).toBe(600);
    });
});
