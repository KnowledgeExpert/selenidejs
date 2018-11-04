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

import { Browser } from '../../lib/browser';
import { TestUtils } from '../utils/testUtils';

beforeAll(async () => {
    Browser.initWith({webdriver: TestUtils.buildWebDriver()});
    Browser.configuration.onFailureHooks = [];
    TestUtils.startServer();
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
});

afterAll(async () => {
    await Browser.quit();
    TestUtils.shutdownServer();
});

beforeEach(() => {
    Browser.configuration.timeout = 1;
});
