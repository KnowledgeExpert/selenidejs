"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class ByWebElementLocator {
    constructor(by, searchContext) {
        this.by = by;
        this.searchContext = searchContext;
    }
    async find() {
        const elements = this.searchContext ? await (await this.searchContext.getWebElement()).findElements(this.by) : await protractor_1.browser.findElements(this.by);
        if (elements.length == 0) {
            throw new Error(`No elements found using ${this.toString()}`);
        }
        return elements[0];
        // return this.searchContext ? await (await this.searchContext.getWebElement()).findElement(this.by) : await element(this.by).getWebElement();
    }
    toString() {
        return `${this.searchContext ? this.searchContext.toString() : 'browser'}.find(${this.by})`;
    }
}
exports.ByWebElementLocator = ByWebElementLocator;
//# sourceMappingURL=byWebElementLocator.js.map