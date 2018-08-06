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
const conditions_1 = require("../conditions"); // DO NOT DELETE THIS LINE!
var be;
(function (be) {
    be.selected = conditions_1.Conditions.elementIsSelected;
    be.absent = conditions_1.Conditions.elementIsAbsent;
    be.present = conditions_1.Conditions.elementIsPresent;
    be.visible = conditions_1.Conditions.elementIsVisible;
    be.hidden = conditions_1.Conditions.elementIsHidden;
})(be = exports.be || (exports.be = {}));
//# sourceMappingURL=be.js.map