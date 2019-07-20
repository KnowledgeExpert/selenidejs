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

import { have } from '../../lib';
import { browser } from './base';

/* short reminder of test helpers, that are not part of SelenideJs API;)
 * driver = common well known Selenium WebDriver
 * webelement('selector') = driver.findElement(By.css('selector'))
 */

describe('Conditions.browser.jsReturned (via should)', () => {

    it('return correct data', async () => {
        await browser.should(have.jsReturned('test', `return 'test';`));
        await browser.should(have.jsReturned(10, `return 10;`));
        await browser.should(have.jsReturned({ foo: 'bar' }, `return arguments[0];`, { foo: 'bar' }));
    });

});
