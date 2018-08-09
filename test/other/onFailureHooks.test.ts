import { Describe, It } from 'jasmine-cookies';
import { Browser } from '../../lib/baseEntities/browser';
import { Element } from '../../lib/baseEntities/element';
import { be, Collection, Condition, Driver, have } from '../../lib/index';
import { Given } from '../utils/given';
import { TestUtils } from '../utils/testUtils';
import { When } from '../utils/when';


Describe('On Failure Hook', () => {

    const hook = {
        brokenOnFailure: <T extends Driver | Element | Collection>(lastError: Error, entity: T, condition?: Condition<T>) => {
            throw new Error();
        },
        onFailure: <T extends Driver | Element | Collection>(lastError: Error, entity: T, condition?: Condition<T>) => {
        }
    };

    beforeAll(async () => {
        Browser.setDriver(TestUtils.buildWebDriver());
        TestUtils.startServer();
        Browser.config.timeout = 1;
        Browser.config.onFailureHooks = [];
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
    });

    afterAll(async () => {
        await Browser.quit();
        TestUtils.shutdownServer();
    });

    beforeEach(async () => {
        spyOn(hook, 'onFailure');
        spyOn(hook, 'brokenOnFailure');
    });

    It('should not be called on success Element command', async () => {
        Browser.config.onFailureHooks = [hook.onFailure];
        await Given.openedEmptyPage();
        await When.withBody('<h1 id=\'test\'>Test</h1>');

        await Browser.element('#test').click();
        expect(hook.onFailure).not.toHaveBeenCalled();
    });

    It('should not interrupt flow if hook is broken', async () => {
        Browser.config.onFailureHooks = [hook.brokenOnFailure];
        await Given.openedEmptyPage();

        await Browser.element('#non-existing-element').click().catch(ignored => {
        });
        expect(hook.brokenOnFailure).toHaveBeenCalled();
    });

    It('should be called on failed Element command', async () => {
        Browser.config.onFailureHooks = [hook.onFailure];
        await Given.openedEmptyPage();

        await Browser.element('#non-existing-element').click().catch(ignored => {
        });
        expect(hook.onFailure).toHaveBeenCalled();
    });

    It('should be called on failed Element command with correct arguments', async () => {
        Browser.config.onFailureHooks = [hook.onFailure];
        await Given.openedEmptyPage();
        await When.withBody('<h1 id=\'test\'>Test</h1>');
        const element = Browser.element('#test');

        await element.setValue('').catch(ignored => {
        });

        expect(hook.onFailure).toHaveBeenCalledWith(
            jasmine.any(Error),
            element
        );
    });

    It('should be called on failed Element assert', async () => {
        Browser.config.onFailureHooks = [hook.onFailure];
        await Given.openedEmptyPage();

        await Browser.element('#non-existing-element').click().catch(ignored => {
        });
        expect(hook.onFailure).toHaveBeenCalled();
    });

    It('should be called on failed Element assert with correct arguments', async () => {
        Browser.config.onFailureHooks = [hook.onFailure];
        await Given.openedEmptyPage();
        const element = Browser.element('#non-existing-element');

        await element.click().catch(ignored => {
        });
        expect(hook.onFailure).toHaveBeenCalledWith(
            new Error("browser.find(By(css selector, #non-existing-element)) should be visible. Wait timed out after 1ms"),
            element,
            be.visible
        );
    });

    It('should be called on failed Collection assert', async () => {
        Browser.config.onFailureHooks = [hook.onFailure];
        await Given.openedEmptyPage();
        await When.withBody('<h1 id=\'test\'>Test</h1>');
        await Browser.all('#test').should(have.size(0)).catch(ignored => {
        });

        expect(hook.onFailure).toHaveBeenCalled();
    });

    It('should be called on failed Collection assert with correct arguments', async () => {
        Browser.config.onFailureHooks = [hook.onFailure];
        await Given.openedEmptyPage();
        await When.withBody('<h1 id=\'test\'>Test</h1>');
        const elements = Browser.all('#test');
        const condition = have.size(0);
        await elements.should(condition).catch(ignored => {
        });

        expect(hook.onFailure).toHaveBeenCalledWith(
            new Error("browser.all(By(css selector, #test)) should have size '0', but was '1'. Wait timed out after 1ms"),
            elements,
            condition
        );
    });

    It('should be called on failed Driver assert', async () => {
        Browser.config.onFailureHooks = [hook.onFailure];
        await Given.openedEmptyPage();
        await Browser.should(have.url('failer')).catch(ignored => {
        });

        expect(hook.onFailure).toHaveBeenCalled();
    });

    It('should be called on failed Driver assert with correct arguments', async () => {
        Browser.config.onFailureHooks = [hook.onFailure];
        await Given.openedEmptyPage();
        const condition = have.url('invalid');
        await Browser.should(condition).catch(ignored => {
        });

        expect(hook.onFailure).toHaveBeenCalledWith(
            new Error("browser should have url 'invalid', but was 'http://localhost:4444/empty.html'. Wait timed out after 1ms"),
            Browser.selenideDriver,
            condition
        );
    });

});
