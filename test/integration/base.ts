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

/* tslint:disable:space-before-function-paren */
/* tslint:disable:no-magic-numbers */

import { Browser, Configuration } from '../../lib';
import { TestUtils } from '../utils/testUtils';
import { Gherkin } from '../utils/gherkin';

export let browser: Browser;
// export const GIVEN = new Gherkin(browser);
// export const WHEN = GIVEN;
export let GIVEN: Gherkin;
export let WHEN: Gherkin;

export namespace data.timeouts {
    export const smallerThanDefault = 500;
    export const byDefault = 750;
    export const biggerThanDefault = 1000;
}

beforeAll(async () => {
    browser = new Browser(new Configuration({
        driver: TestUtils.buildWebDriver(),
        timeout: data.timeouts.byDefault
    }));
    GIVEN = new Gherkin(browser);
    WHEN = GIVEN;
    TestUtils.startServer();
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
});

afterAll(async () => {
    browser.quit();
    TestUtils.shutdownServer();
});
