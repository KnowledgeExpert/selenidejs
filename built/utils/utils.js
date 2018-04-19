"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utils;
(function (Utils) {
    function getValueFromPath(obj, objPath) {
        if (obj === undefined)
            return undefined;
        if (obj === null)
            return null;
        const parts = objPath.split('.');
        return parts.length === 1 ? obj[parts[0]] : getValueFromPath(obj[parts[0]], parts.slice(1).join('.'));
    }
    Utils.getValueFromPath = getValueFromPath;
})(Utils = exports.Utils || (exports.Utils = {}));
//# sourceMappingURL=utils.js.map