"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
function AssertionHooks(target, methodName, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = async function () {
        const beforeHooks = utils_1.Utils.getSelenidejsParam(`beforeAssertionHooks`) || [];
        const afterHooks = utils_1.Utils.getSelenidejsParam(`afterAssertionHooks`) || [];
        const conditionDescription = arguments[0].toString();
        console.log(`init assertion hooks... condition - ${conditionDescription}, before.length === ${beforeHooks.length}, after.length === ${afterHooks.length}`);
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
    console.log(`safe apply hooks, entity - ${entity}, description - ${conditionDescription}, err - ${err}`);
    for (let hook of hooks) {
        try {
            console.log('before execute hook');
            await hook(entity, conditionDescription, err);
            console.log('after execute hook');
        }
        catch (error) {
            console.warn(`Cannot perform hook on '${conditionDescription}' action cause of:\n\tError message: ${error.message}\n\tError stacktrace: ${error.stackTrace}`);
        }
    }
}
//# sourceMappingURL=assertionHook.js.map