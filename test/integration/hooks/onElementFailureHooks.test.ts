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

import { Browser } from '../../../lib/browser';
import { Driver } from '../../../lib/driver';
import { Element } from '../../../lib/element';
import { Given } from '../../utils/given';
import '../base';

/* tslint:disable:space-before-function-paren */
/* tslint:disable:no-magic-numbers */


describe('On Element Failure Hook', () => {

    const hook = {
        brokenOnElementFailure: (error: Error, driver: Driver, element: Element) => {
            throw new Error();
        },
        onElementFailure: (error: Error, driver: Driver, element: Element) => {
        }
    };

    it('should not be called on success', async () => {
        spyOn(hook, 'onElementFailure');
        Browser.configuration.onElementFailureHooks = [hook.onElementFailure];
        await Given.openedEmptyPageWithBody('<h1 id="test">Test</h1>');

        await Browser.element('#test').click();
        expect(hook.onElementFailure).not.toHaveBeenCalled();
    });

    it('should not interrupt flow if hook is broken', async () => {
        spyOn(hook, 'brokenOnElementFailure');
        Browser.configuration.onElementFailureHooks = [hook.brokenOnElementFailure];
        await Given.openedEmptyPage();

        await Browser.element('#non-existing-element').click()
            .then(
                () => fail('Action should fail when clicking on non existing element'),
                error => expect(hook.brokenOnElementFailure).toHaveBeenCalled()
            );
    });

    it('should be called on failed Element command', async () => {
        spyOn(hook, 'onElementFailure');
        Browser.configuration.onElementFailureHooks = [hook.onElementFailure];
        await Given.openedEmptyPage();

        await Browser.element('#non-existing-element').click().then(
            () => fail('Action should fail when clicking on non existing element'),
            error => expect(hook.onElementFailure).toHaveBeenCalled()
        );
    });

    it('should be called on failed Element command with correct arguments', async () => {
        spyOn(hook, 'onElementFailure');
        Browser.configuration.onElementFailureHooks = [hook.onElementFailure];
        await Given.openedEmptyPageWithBody('<h1 id="test">Test</h1>');
        const element = Browser.element('#test');

        await element.setValue('').then(
            () => fail('Invalid action should fail'),
            error => expect(hook.onElementFailure).toHaveBeenCalledWith(
                jasmine.any(Error),
                Browser.driver,
                element
            )
        );
    });

    it('should be called on failed Element assert', async () => {
        spyOn(hook, 'onElementFailure');
        Browser.configuration.onElementFailureHooks = [hook.onElementFailure];
        await Given.openedEmptyPage();

        await Browser.element('#non-existing-element').click().then(
            () => fail('Action should fail when clicking on non existing element'),
            error => expect(hook.onElementFailure).toHaveBeenCalled()
        );
    });

    it('should be called on failed Element assert with correct arguments', async () => {
        spyOn(hook, 'onElementFailure');
        Browser.configuration.onElementFailureHooks = [hook.onElementFailure];
        await Given.openedEmptyPage();
        const element = Browser.element('#non-existing-element');

        await element.click().then(
            () => fail('Action should fail when clicking on non existing element'),
            error => expect(hook.onElementFailure).toHaveBeenCalledWith(
                new Error(
                    'browser.find(By(css selector, #non-existing-element)) should be visible. Wait timed out after 1ms.'
                ),
                Browser.driver,
                element
            )
        );
    });
});
