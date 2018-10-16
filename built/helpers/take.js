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
const actions_1 = require("../actions");
var take;
(function (take) {
    take.visibility = actions_1.Actions.visibility;
    take.presence = actions_1.Actions.presence;
    take.text = actions_1.Actions.text;
    take.attribute = actions_1.Actions.attribute;
    take.innerHtml = actions_1.Actions.attribute('innerHTML');
    take.outerHtml = actions_1.Actions.attribute('outerHTML');
    take.value = actions_1.Actions.attribute('value');
    take.parent = actions_1.Actions.parent;
    take.followingSibling = actions_1.Actions.followingSibling;
    take.screenshot = actions_1.Actions.screenshot;
    take.url = actions_1.Actions.url;
    take.title = actions_1.Actions.title;
    take.pageSource = actions_1.Actions.pageSource;
    take.tabs = actions_1.Actions.tabs;
    take.element = actions_1.Actions.element;
    take.all = actions_1.Actions.all;
    take.filtered = actions_1.Actions.filtered;
    take.filteredBy = actions_1.Actions.filtered;
    take.find = actions_1.Actions.find;
    take.findBy = actions_1.Actions.find;
    take.size = actions_1.Actions.size;
    take.nth = actions_1.Actions.nth;
})(take = exports.take || (exports.take = {}));
//# sourceMappingURL=take.js.map