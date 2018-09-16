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
import { Browser, Collection, Driver, Element, have } from '../../../lib/index';
import { Given } from '../../utils/given';
import '../base';

/* tslint:disable:space-before-function-paren */
/* tslint:disable:no-magic-numbers */

Describe('On Collection Failure Hook', () => {

    const hook = {
        brokenOnCollectionFailure: (error: Error, driver: Driver, collection: Collection) => {
            throw new Error();
        },
        onCollectionFailure: (error: Error, driver: Driver, collection: Collection) => {
        }
    };

    beforeAll(async () => {
        Browser.configuration.timeout = 1;
    });

    It('should not interrupt flow if hook is broken', async () => {
        spyOn(hook, 'brokenOnCollectionFailure');
        Browser.configuration.onCollectionFailureHooks = [hook.brokenOnCollectionFailure];
        await Given.openedEmptyPage();

        await Browser.all('#non-existing-element').should(have.size(10))
            .then(
                () => fail('Action should fail when assert fails'),
                error => expect(hook.brokenOnCollectionFailure).toHaveBeenCalled()
            );
    });

    It('should be called on failed Collection assert', async () => {
        spyOn(hook, 'onCollectionFailure');
        Browser.configuration.onCollectionFailureHooks = [hook.onCollectionFailure];
        await Given.openedEmptyPage();

        await Browser.all('#non-existing-elements').should(have.size(10)).then(
            () => fail('Action should fail when assert fails'),
            error => expect(hook.onCollectionFailure).toHaveBeenCalled()
        );
    });

    It('should be called on failed Collection assert with correct arguments', async () => {
        spyOn(hook, 'onCollectionFailure');
        Browser.configuration.onCollectionFailureHooks = [hook.onCollectionFailure];
        await Given.openedEmptyPage();
        const collection = Browser.all('#non-existing-element');

        await collection.should(have.size(10)).then(
            () => fail('Action should fail when assert fails'),
            error => expect(hook.onCollectionFailure).toHaveBeenCalledWith(
                new Error(
                    "browser.all(By(css selector, #non-existing-element)) should have size '10', but was '0'. Wait timed out after 1ms"
                ),
                Browser.selenideDriver,
                collection
            )
        );
    });
});
