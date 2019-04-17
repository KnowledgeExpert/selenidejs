"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
function AssertionHooks(target, methodName, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = async function () {
        const beforeHooks = utils_1.Utils.getSelenidejsParam(`beforeAssertionHooks`) || [];
        const afterHooks = utils_1.Utils.getSelenidejsParam(`afterAssertionHooks`) || [];
        const conditionDescription = arguments[0].toString();
        let err;
        try {
            await safeApplyActionHooks(beforeHooks, this, conditionDescription);
            return await originalMethod.apply(this, arguments);
        }
        catch (error) {
            err = error;
            throw error;
        }
        finally {
            await safeApplyActionHooks(afterHooks, this, conditionDescription, err);
        }
    };
}
exports.AssertionHooks = AssertionHooks;
async function safeApplyActionHooks(hooks, entity, conditionDescription, err) {
    for (let hook of hooks) {
        try {
            await hook(entity, conditionDescription, err);
        }
        catch (error) {
        }
    }
}
//# sourceMappingURL=assertionHook.js.map