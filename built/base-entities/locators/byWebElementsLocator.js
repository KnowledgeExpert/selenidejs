"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class ByWebElementsLocator {
    constructor(by, searchContext) {
        this.by = by;
        this.searchContext = searchContext;
    }
    async find() {
        // return this.searchContext ? await (await this.searchContext.getWebElement()).findElements(this.by) : await (element.all(this.by)).getWebElements();
        return this.searchContext ? await (await this.searchContext.getWebElement()).findElements(this.by) : await protractor_1.browser.findElements(this.by);
    }
    toString() {
        return `${this.searchContext ? this.searchContext.toString() : 'browser'}.all(${this.by})`;
    }
}
exports.ByWebElementsLocator = ByWebElementsLocator;
//# sourceMappingURL=byWebElementsLocator.js.map