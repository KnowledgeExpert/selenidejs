"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ByIndexedWebElementLocator {
    constructor(index, searchContext) {
        this.searchContext = searchContext;
        this.index = index;
    }
    async find() {
        const elements = await this.searchContext.getWebElements();
        if (elements.length < this.index) {
            throw new Error(`Cannot get ${this.index} element from webelements collection with length ${elements.length}`);
        }
        return elements[this.index];
        // return (await this.searchContext.getWebElements())[this.index]
    }
    toString() {
        return `${this.searchContext.toString()}.get(${this.index})`;
    }
}
exports.ByIndexedWebElementLocator = ByIndexedWebElementLocator;
//# sourceMappingURL=byIndexedWebElementLocator.js.map