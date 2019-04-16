import {Browser, be, have, Element} from '../index';
import {browser} from 'protractor';

describe('suite', () => {
    it('test', async () => {
        await browser.waitForAngularEnabled(false);
        await Browser.get('http://the-internet.herokuapp.com/challenging_dom');
        await Browser.all('thead th').should(have.exactTextsInAnyOrder('Diceret','Dolor','Lorem','Ipsum','Sit','Amet','Action'));
    });
});
