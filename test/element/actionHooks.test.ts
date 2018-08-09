import { Describe, It } from 'jasmine-cookies';
import { Browser } from '../../lib/baseEntities/browser';
import { Element } from '../../lib/baseEntities/element';
import { TestUtils } from '../utils/testUtils';
import { Given } from '../utils/given';
import { When } from '../utils/when';
import { CannotPerformActionError } from '../../lib/errors/cannotPerformActionError';


Describe('Element Before Action Hook', () => {

    const hook = {
        before: async (element: Element, actionName: string) => {
        },
        brokenBefore: async (element: Element, actionName: string) => {
            throw new Error();
        }
    };

    beforeAll(async () => {
        Browser.setDriver(TestUtils.buildWebDriver());
        TestUtils.startServer();
        Browser.config.timeout = 0.1;
        Browser.config.onFailureHooks = [];
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
    });

    afterAll(async () => {
        await Browser.quit();
        TestUtils.shutdownServer();
    });

    beforeEach(async () => {
        spyOn(hook, 'before');
        spyOn(hook, 'brokenBefore');
    });

    It('should be called on success action', async () => {
        Element.beforeActionHooks = [hook.before];
        await Given.openedEmptyPage();
        await When.withBody('<h1 id=\'test\'>Test</h1>');

        await Browser.element('#test').click();
        expect(hook.before).toHaveBeenCalled();
    });

    It('should be called on success with correct arguments', async () => {
        Element.beforeActionHooks = [hook.before];
        await Given.openedEmptyPage();
        await When.withBody('<h1 id=\'test\'>Test</h1>');
        const element = Browser.element('#test');

        await element.click();
        expect(hook.before).toHaveBeenCalledWith(element, 'click');
    });

    It('should not interrupt flow if hook is broken', async () => {
        Element.beforeActionHooks = [hook.brokenBefore];
        await Given.openedEmptyPage();

        await Browser.element('#non-existing-element').click().catch(ignored => {
        });
        expect(hook.brokenBefore).toHaveBeenCalled();
    });

    It('should be called on failed action', async () => {
        Element.beforeActionHooks = [hook.before];
        await Given.openedEmptyPage();

        await Browser.element('#non-existing-element').click().catch(ignored => {
        });
        expect(hook.before).toHaveBeenCalled();
    });

    It('should be called on failed action with correct arguments', async () => {
        Element.beforeActionHooks = [hook.before];
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
        Browser.setDriver(TestUtils.buildWebDriver());
        TestUtils.startServer();
        Browser.config.timeout = 0.1;
        Browser.config.onFailureHooks = [];

        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
    });

    afterAll(async () => {
        await Browser.quit();
        TestUtils.shutdownServer();
    });

    beforeEach(async () => {
        spyOn(hook, 'after');
        spyOn(hook, 'brokenAfter');
    });

    It('should be called on success action', async () => {
        Element.afterActionHooks = [hook.after];
        await Given.openedEmptyPage();
        await When.withBody('<h1 id=\'test\'>Test</h1>');

        await Browser.element('#test').click();
        expect(hook.after).toHaveBeenCalled();
    });

    It('should be called on success with correct arguments', async () => {
        Element.afterActionHooks = [hook.after];
        await Given.openedEmptyPage();
        await When.withBody('<h1 id=\'test\'>Test</h1>');
        const element = Browser.element('#test');

        await element.click();
        expect(hook.after).toHaveBeenCalledWith(null, element, 'click');
    });

    It('should be called on failed action', async () => {
        Element.afterActionHooks = [hook.after];
        await Given.openedEmptyPage();

        await Browser.element('#non-existing-element').click().catch(ignored => {
        });
        expect(hook.after).toHaveBeenCalled();
    });

    It('should not interrupt flow if hook is broken', async () => {
        Element.afterActionHooks = [hook.brokenAfter];
        await Given.openedEmptyPage();

        await Browser.element('#non-existing-element').click().catch(ignored => {
        });
        expect(hook.brokenAfter).toHaveBeenCalled();
    });

    It('should be called on failed action with correct arguments', async () => {
        Element.afterActionHooks = [hook.after];
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
