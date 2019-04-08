import {Browser, be, have, Element} from '../index';
import {browser} from 'protractor';

describe('suite', () => {
    it('test', async () => {
        await browser.waitForAngularEnabled(false);
        await Browser.get('http://the-internet.herokuapp.com/add_remove_elements/')
        //await Browser.element('.example button').should(be.hidden);
        await Browser.element('.example button').click();
        await Browser.element('.example button').click();
        await Browser.element('.example button').click();
        await Browser.all('button.added-manually').should(have.size(4));
    });
});
