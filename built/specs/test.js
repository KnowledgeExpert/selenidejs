"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
const protractor_1 = require("protractor");
describe('suite', () => {
    it('test', async () => {
        await protractor_1.browser.waitForAngularEnabled(false);
        await index_1.Browser.get('http://the-internet.herokuapp.com/javascript_alerts');
        // await Browser.all('li button').get(0).click();
        // console.log('before browser should have alert')
        await index_1.Browser.should(index_1.have.alert);
        console.log('after browser should have alert');
        await index_1.Browser.driver().switchTo().alert().accept();
        console.log('before browser should have alert');
        await index_1.Browser.all('li button').get(0).click();
        await index_1.Browser.should(index_1.have.alert);
        console.log('after browser should have alert');
        await index_1.Browser.driver().switchTo().alert().accept();
    });
});
//# sourceMappingURL=test.js.map