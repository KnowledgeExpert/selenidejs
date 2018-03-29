"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conditions_1 = require("../conditions");
var be;
(function (be) {
    function selected() {
        return conditions_1.Conditions.element.selected();
    }
    be.selected = selected;
    function absent() {
        return conditions_1.Conditions.element.absent();
    }
    be.absent = absent;
    function present() {
        return conditions_1.Conditions.element.present();
    }
    be.present = present;
    function visible() {
        return conditions_1.Conditions.element.visible();
    }
    be.visible = visible;
    function hidden() {
        return conditions_1.Conditions.element.hidden();
    }
    be.hidden = hidden;
})(be = exports.be || (exports.be = {}));
//# sourceMappingURL=be.js.map