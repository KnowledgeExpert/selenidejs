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

import { Describe, It } from 'jasmine-cookies';
import { Browser } from '../../../lib/baseEntities/browser';
import { be, have } from '../../../lib/index';
import { Given } from '../../utils/given';
import '../base';
import focused = be.focused;

/* tslint:disable:space-before-function-paren */
/* tslint:disable:no-magic-numbers */

Describe('Driver', () => {

    It('should be able to take viewport screenshot', async () => {
        Browser.config.fullpageScreenshot = false;
        await Given.openedEmptyPage();

        const viewportScreenshot = await Browser.screenshot();

        expect(viewportScreenshot).toBeDefined();
        expect(viewportScreenshot instanceof Buffer).toBeTruthy();
    });

    It('should be able to take fullpage screenshot', async () => {
        Browser.config.fullpageScreenshot = true;
        await Given.openedEmptyPage();

        const fullpageScreenshot = await Browser.screenshot();

        expect(fullpageScreenshot instanceof Buffer).toBeTruthy();
        expect(fullpageScreenshot).toBeDefined();
    });

    It('should be able to take fullpage screenshot in iframe', async () => {
        Browser.config.fullpageScreenshot = true;
        await Given.openedEmptyPageWithBody('<iframe></iframe>');
        await Browser.switchToFrame(Browser.element('iframe'));
        const fullpageScreenshot = await Browser.screenshot();

        expect(fullpageScreenshot instanceof Buffer).toBeTruthy();
        expect(fullpageScreenshot).toBeDefined();
    });

    It('should be able to take fullpage screenshot with large screen', async () => {
        Browser.config.fullpageScreenshot = true;
        await Given.openedEmptyPageWithBody('<div id="test"></div>');
        await Browser.executeScript('document.getElementById("test").style.height = "5000px"');
        const fullpageScreenshot = await Browser.screenshot();

        expect(fullpageScreenshot instanceof Buffer).toBeTruthy();
        expect(fullpageScreenshot).toBeDefined();
    });

});
