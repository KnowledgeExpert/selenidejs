"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ByFilteredWebElementsLocator {
    constructor(condition, searchContext) {
        this.elementCondition = condition;
        this.searchContext = searchContext;
    }
    async find() {
        const webElements = await this.searchContext.getWebElements();
        const result = [];
        // todo swap to promise filter
        for (let i = 0; i < webElements.length; i++) {
            try {
                await this.elementCondition.matches(this.searchContext.get(i));
                result.push(webElements[i]);
            }
            catch (ignored) {
            }
        }
        return result;
    }
    toString() {
        return `${this.searchContext.toString()}.filteredBy(${this.elementCondition.toString()})`;
    }
}
exports.ByFilteredWebElementsLocator = ByFilteredWebElementsLocator;
//# sourceMappingURL=byFilteredWebElementsLocator.js.map