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
import { By } from 'selenium-webdriver';
import { Utils } from '../../lib/utils';

/* tslint:disable:space-before-function-paren */
/* tslint:disable:no-magic-numbers */

Describe('Utils', () => {

    It('to by should handle css string', async () => {
        expect(Utils.toBy('.some-class') instanceof By).toBeTruthy();
        expect(Utils.toBy('.some-class').toString()).toBe('By(css selector, .some-class)');
    });

    It('to by should handle xpath string', async () => {
        expect(Utils.toBy('.//div') instanceof By).toBeTruthy();
        expect(Utils.toBy('.//div').toString()).toBe('By(xpath, .//div)');
    });

    It('to by should handle By object', async () => {
        expect(Utils.toBy(By.id('test')) instanceof By).toBeTruthy();
        expect(Utils.toBy(By.id('test')).toString()).toBe('By(css selector, *[id="test"])');
    });

});
