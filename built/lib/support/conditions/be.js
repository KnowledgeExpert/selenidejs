"use strict";
// Copyright 2018 Knowledge Expert SA
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", { value: true });
// todo: consider delete
const conditions_1 = require("../../conditions");
var be;
(function (be) {
    be.selected = conditions_1.condition.element.isSelected;
    be.absent = conditions_1.condition.element.isAbsent;
    be.present = conditions_1.condition.element.isPresent;
    be.visible = conditions_1.condition.element.isVisible;
    be.hidden = conditions_1.condition.element.isHidden;
    be.focused = conditions_1.condition.element.isFocused;
    be.enabled = conditions_1.condition.element.isEnabled;
    be.disabled = conditions_1.condition.element.isDisabled;
    be.blank = conditions_1.condition.element.isBlank;
})(be = exports.be || (exports.be = {}));
//# sourceMappingURL=be.js.map