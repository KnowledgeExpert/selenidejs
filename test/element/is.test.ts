import { Describe, It } from 'jasmine-cookies';
import { have } from '../../lib';
import { Browser } from '../../lib/baseEntities/browser';
import { Given } from '../utils/given';
import { TestUtils } from '../utils/testUtils';
import { When } from '../utils/when';

Describe('Element "Is" method', () => {

    beforeAll(async () => {
        Browser.setDriver(TestUtils.buildWebDriver());
        Browser.config.timeout = 500;
        TestUtils.startServer();
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
    });

    afterAll(async () => {
        await Browser.quit();
        TestUtils.shutdownServer();
    });

    It('should return true if successful', async () => {
        await Given.openedEmptyPage();
        await When.withBody("<span id='test'>Test text</span>");

        expect(await Browser.element('#test').is(have.exactText('Test text'))).toBeTruthy();
    });

    It('should return false if failed', async () => {
        await Given.openedEmptyPage();
        await When.withBody("<span id='test'>Test text</span>");

        expect(await Browser.element('#test').is(have.exactText('Invalid Text'))).toBeFalsy();
    });

});
