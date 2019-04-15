"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
const protractor_1 = require("protractor");
describe('suite', () => {
    it('test', async () => {
        await protractor_1.browser.waitForAngularEnabled(false);
        await index_1.Browser.get('http://the-internet.herokuapp.com/add_remove_elements/');
        //await Browser.element('.example button').should(be.hidden);
        await index_1.Browser.element('.example button').click();
        await index_1.Browser.element('.example button').click();
        await index_1.Browser.element('.example button').click();
        await index_1.Browser.all('button.added-manually').should(index_1.have.size(4));
    });
});
//# sourceMappingURL=test.js.map