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
import { Element } from '../../../lib/baseEntities/element';
import { Given } from '../../utils/given';
import { When } from '../../utils/when';
import '../base';

/* tslint:disable:space-before-function-paren */
/* tslint:disable:no-magic-numbers */

Describe('Element Before Action Hook', () => {

    const hook = {
        before: async (element: Element, actionName: string) => {
        },
        brokenBefore: async (element: Element, actionName: string) => {
            throw new Error();
        }
    };

    beforeAll(async () => {
        Browser.configuration.timeout = 0.1;
    });

    beforeEach(async () => {
        spyOn(hook, 'before');
        spyOn(hook, 'brokenBefore');
    });

    It('should be called on success action', async () => {
        Browser.configuration.beforeElementActionHooks = [hook.before];
        await Given.openedEmptyPageWithBody('<h1>Test</h1>');

        await Browser.element('h1').click();
        expect(hook.before).toHaveBeenCalled();
    });

    It('should be called on success with correct arguments', async () => {
        Browser.configuration.beforeElementActionHooks = [hook.before];
        await Given.openedEmptyPageWithBody('<h1>Test</h1>');
        const element = Browser.element('h1');

        await element.click();
        expect(hook.before).toHaveBeenCalledWith(element, 'click');
    });

    It('should not interrupt flow if hook is broken', async () => {
        Browser.configuration.beforeElementActionHooks = [hook.brokenBefore];
        await Given.openedEmptyPage();

        await Browser.element('#non-existing-element').click().catch(ignored => {
        });
        expect(hook.brokenBefore).toHaveBeenCalled();
    });

    It('should be called on failed action', async () => {
        Browser.configuration.beforeElementActionHooks = [hook.before];
        await Given.openedEmptyPage();

        await Browser.element('#non-existing-element').click().catch(ignored => {
        });
        expect(hook.before).toHaveBeenCalled();
    });

    It('should be called on failed action with correct arguments', async () => {
        Browser.configuration.beforeElementActionHooks = [hook.before];
        await Given.openedEmptyPage();
        const element = Browser.element('#non-existing-element');

        await element.click().catch(ignored => {
        });
        expect(hook.before).toHaveBeenCalledWith(element, 'click');
    });
});

Describe('Element After Action Hook', () => {

    const hook = {
        after: async (actionError: Error, element: Element, actionName: string) => {
        },
        brokenAfter: async (actionError: Error, element: Element, actionName: string) => {
            throw new Error();
        }
    };

    beforeAll(async () => {
        Browser.configuration.timeout = 0.1;
    });

    beforeEach(async () => {
        spyOn(hook, 'after');
        spyOn(hook, 'brokenAfter');
    });

    It('should be called on success action', async () => {
        Browser.configuration.afterElementActionHooks = [hook.after];
        await Given.openedEmptyPage();
        await When.withBody('<h1 id=\'test\'>Test</h1>');

        await Browser.element('#test').click();
        expect(hook.after).toHaveBeenCalled();
    });

    It('should be called on success with correct arguments', async () => {
        Browser.configuration.afterElementActionHooks = [hook.after];
        await Given.openedEmptyPage();
        await When.withBody('<h1 id=\'test\'>Test</h1>');
        const element = Browser.element('#test');

        await element.click();
        expect(hook.after).toHaveBeenCalledWith(null, element, 'click');
    });

    It('should be called on failed action', async () => {
        Browser.configuration.afterElementActionHooks = [hook.after];
        await Given.openedEmptyPage();

        await Browser.element('#non-existing-element').click().catch(ignored => {
        });
        expect(hook.after).toHaveBeenCalled();
    });

    It('should not interrupt flow if hook is broken', async () => {
        Browser.configuration.afterElementActionHooks = [hook.brokenAfter];
        await Given.openedEmptyPage();

        await Browser.element('#non-existing-element').click().catch(ignored => {
        });
        expect(hook.brokenAfter).toHaveBeenCalled();
    });

    It('should be called on failed action with correct arguments', async () => {
        Browser.configuration.afterElementActionHooks = [hook.after];
        await Given.openedEmptyPage();
        const element = Browser.element('#non-existing-element');

        await element.click().catch(ignored => {
        });

        expect(hook.after).toHaveBeenCalledWith(
            new Error(
                'browser.find(By(css selector, #non-existing-element)) should be visible. Wait timed out after 0.1ms'
            ),
            element,
            'click'
        );
    });
});
