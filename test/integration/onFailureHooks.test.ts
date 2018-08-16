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
import { be, Browser, Collection, Condition, Driver, have } from '../../lib';
import { Element } from '../../lib/baseEntities/element';
import { Given } from '../utils/given';
import './base';

/* tslint:disable:space-before-function-paren */
/* tslint:disable:no-magic-numbers */

Describe('On Failure Hook', () => {

    const hook = {
        brokenOnFailure:
            <T extends Driver | Element | Collection>(lastError: Error, entity: T, condition?: Condition<T>) => {
                throw new Error();
            },
        onFailure:
            <T extends Driver | Element | Collection>(lastError: Error, entity: T, condition?: Condition<T>) => {
            }
    };

    beforeAll(async () => {
        Browser.config.timeout = 1;
    });

    It('should not be called on success Element command', async () => {
        spyOn(hook, 'onFailure');
        Browser.config.onFailureHooks = [hook.onFailure];
        await Given.openedEmptyPageWithBody('<h1 id="test">Test</h1>');

        await Browser.element('#test').click();
        expect(hook.onFailure).not.toHaveBeenCalled();
    });

    It('should not interrupt flow if hook is broken', async () => {
        spyOn(hook, 'brokenOnFailure');
        Browser.config.onFailureHooks = [hook.brokenOnFailure];
        await Given.openedEmptyPage();

        await Browser.element('#non-existing-element').click()
            .then(
                () => fail('Action should fail when clicking on non existing element'),
                error => expect(hook.brokenOnFailure).toHaveBeenCalled()
            );
    });

    It('should be called on failed Element command', async () => {
        spyOn(hook, 'onFailure');
        Browser.config.onFailureHooks = [hook.onFailure];
        await Given.openedEmptyPage();

        await Browser.element('#non-existing-element').click().then(
            () => fail('Action should fail when clicking on non existing element'),
            error => expect(hook.onFailure).toHaveBeenCalled()
        );
    });

    It('should be called on failed Element command with correct arguments', async () => {
        spyOn(hook, 'onFailure');
        Browser.config.onFailureHooks = [hook.onFailure];
        await Given.openedEmptyPageWithBody('<h1 id="test">Test</h1>');
        const element = Browser.element('#test');

        await element.setValue('').then(
            () => fail('Invalid action should fail'),
            error => expect(hook.onFailure).toHaveBeenCalledWith(
                jasmine.any(Error),
                element
            )
        );
    });

    It('should be called on failed Element assert', async () => {
        spyOn(hook, 'onFailure');
        Browser.config.onFailureHooks = [hook.onFailure];
        await Given.openedEmptyPage();

        await Browser.element('#non-existing-element').click().then(
            () => fail('Action should fail when clicking on non existing element'),
            error => expect(hook.onFailure).toHaveBeenCalled()
        );
    });

    It('should be called on failed Element assert with correct arguments', async () => {
        spyOn(hook, 'onFailure');
        Browser.config.onFailureHooks = [hook.onFailure];
        await Given.openedEmptyPage();
        const element = Browser.element('#non-existing-element');

        await element.click().then(
            () => fail('Action should fail when clicking on non existing element'),
            error => expect(hook.onFailure).toHaveBeenCalledWith(
                new Error(
                    'browser.find(By(css selector, #non-existing-element)) should be visible. Wait timed out after 1ms'
                ),
                element,
                be.visible
            )
        );
    });

    It('should be called on failed Collection assert', async () => {
        spyOn(hook, 'onFailure');
        Browser.config.onFailureHooks = [hook.onFailure];
        await Given.openedEmptyPageWithBody('<h1 id="test">Test</h1>');
        await Browser.all('#test').should(have.size(0)).then(
            () => fail('Assertion should fail when failed'),
            error => expect(hook.onFailure).toHaveBeenCalled()
        );
    });

    It('should be called on failed Collection assert with correct arguments', async () => {
        spyOn(hook, 'onFailure');
        Browser.config.onFailureHooks = [hook.onFailure];
        await Given.openedEmptyPageWithBody('<h1 id="test">Test</h1>');
        const elements = Browser.all('#test');
        const condition = have.size(0);
        await elements.should(condition).then(
            () => fail('Assertion should fail when failed'),
            error => expect(hook.onFailure).toHaveBeenCalledWith(
                new Error(
                    'browser.all(By(css selector, #test)) should have size \'0\', but was \'1\'. ' +
                    'Wait timed out after 1ms'
                ),
                elements,
                condition
            )
        );
    });

    It('should be called on failed Driver assert', async () => {
        spyOn(hook, 'onFailure');
        Browser.config.onFailureHooks = [hook.onFailure];
        await Given.openedEmptyPage();

        await Browser.should(have.url('failer')).then(
            () => fail('Assertion should fail when failed'),
            error => expect(hook.onFailure).toHaveBeenCalled()
        );
    });

    It('should be called on failed Driver assert with correct arguments', async () => {
        spyOn(hook, 'onFailure');
        Browser.config.onFailureHooks = [hook.onFailure];
        await Given.openedEmptyPage();
        const condition = have.url('invalid');

        await Browser.should(condition).then(
            () => fail('Assertion should fail when failed'),
            error => expect(hook.onFailure).toHaveBeenCalledWith(
                new Error(
                    'browser should have url \'invalid\', but was \'http://localhost:4444/empty.html\'. ' +
                    'Wait timed out after 1ms'
                ),
                Browser.selenideDriver,
                condition
            )
        );
    });

});
