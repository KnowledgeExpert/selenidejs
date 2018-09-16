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
import { have } from '../../../lib/index';
import { Given } from '../../utils/given';
import { When } from '../../utils/when';
import '../base';

/* tslint:disable:space-before-function-paren */
/* tslint:disable:no-magic-numbers */

Describe('Element "Is Not" method', () => {

    beforeAll(async () => {
        Browser.configuration.timeout = 1;
    });

    It('should return true if successful', async () => {
        await Given.openedEmptyPageWithBody('<span id="test">Test text</span>');

        expect(await Browser.element('#test').isNot(have.exactText('Invalid Text'))).toBeTruthy();
    });

    It('should return false if failed', async () => {
        await Given.openedEmptyPageWithBody('<span id="test">Test text</span>');

        expect(await Browser.element('#test').isNot(have.exactText('Test text'))).toBeFalsy();
    });

});
