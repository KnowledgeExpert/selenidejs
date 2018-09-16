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
import { Browser, Driver, have } from '../../../lib/index';
import { Given } from '../../utils/given';
import '../base';

/* tslint:disable:space-before-function-paren */
/* tslint:disable:no-magic-numbers */


Describe('On Failure Hook', () => {

    const hook = {
        brokenOnFailure: (error: Error, driver: Driver) => {
            throw new Error();
        },
        onFailure: (error: Error, driver: Driver) => {
        }
    };

    beforeAll(async () => {
        Browser.configuration.timeout = 1;
    });

    It('should not be called on success', async () => {
        spyOn(hook, 'onFailure');
        Browser.configuration.onFailureHooks = [hook.onFailure];
        await Given.openedEmptyPageWithBody('<h1 id="test">Test</h1>');

        await Browser.element('#test').click();
        expect(hook.onFailure).not.toHaveBeenCalled();
    });

    It('should not interrupt flow if hook is broken', async () => {
        spyOn(hook, 'brokenOnFailure');
        Browser.configuration.onFailureHooks = [hook.brokenOnFailure];
        await Given.openedEmptyPage();

        await Browser.element('#non-existing-element').click()
            .then(
                () => fail('Action should fail when clicking on non existing element'),
                error => expect(hook.brokenOnFailure).toHaveBeenCalled()
            );
    });

    It('should be called on failed Driver assert', async () => {
        spyOn(hook, 'onFailure');
        Browser.configuration.onFailureHooks = [hook.onFailure];
        await Given.openedEmptyPage();

        await Browser.should(have.url('invalid')).then(
            () => fail('Action should fail when assert fails'),
            error => expect(hook.onFailure).toHaveBeenCalled()
        );
    });

    It('should be called on failed Driver assert with correct arguments', async () => {
        spyOn(hook, 'onFailure');
        Browser.configuration.onFailureHooks = [hook.onFailure];
        await Given.openedEmptyPage();

        await Browser.should(have.url('invalid')).then(
            () => fail('Action should fail when assert fails'),
            error => expect(hook.onFailure).toHaveBeenCalledWith(
                new Error(
                    "browser should have url 'invalid', but was 'http://localhost:4444/empty.html'. Wait timed out after 1ms"
                ),
                Browser.selenideDriver
            )
        );
    });

});
