import {Browser, be, have, Element} from '../index';
import {browser} from 'protractor';

describe('suite', () => {
    it('test', async () => {
        await browser.waitForAngularEnabled(false);
        await Browser.get('http://the-internet.herokuapp.com/javascript_alerts');
        // await Browser.all('li button').get(0).click();
        // console.log('before browser should have alert')
        await Browser.should(have.alert);
        console.log('after browser should have alert')
        await Browser.driver().switchTo().alert().accept();
        console.log('before browser should have alert')
        await Browser.all('li button').get(0).click();
        await Browser.should(have.alert);
        console.log('after browser should have alert')
        await Browser.driver().switchTo().alert().accept();
    });
});
