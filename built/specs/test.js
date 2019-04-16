"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
const protractor_1 = require("protractor");
describe('suite', () => {
    it('test', async () => {
        await protractor_1.browser.waitForAngularEnabled(false);
        await index_1.Browser.get('http://the-internet.herokuapp.com/challenging_dom');
        await index_1.Browser.all('thead th').should(index_1.have.exactTextsInAnyOrder('Diceret', 'Dolor', 'Lorem', 'Ipsum', 'Sit', 'Amet', 'Action'));
    });
});
//# sourceMappingURL=test.js.map