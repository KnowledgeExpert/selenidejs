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
const elementsBuilder_1 = require("../elementsBuilder");
var take;
(function (take) {
    take.visibility = actions_1.Actions.visibility;
    take.presence = actions_1.Actions.presence;
    take.text = actions_1.Actions.text;
    take.attribute = actions_1.Actions.attribute;
    take.innerHtml = actions_1.Actions.attribute('innerHTML');
    take.outerHtml = actions_1.Actions.attribute('outerHTML');
    take.value = actions_1.Actions.attribute('value');
    take.screenshot = actions_1.Actions.screenshot;
    take.url = actions_1.Actions.url;
    take.title = actions_1.Actions.title;
    take.pageSource = actions_1.Actions.pageSource;
    take.tabs = actions_1.Actions.tabs;
    take.size = actions_1.Actions.size;
    take.element = elementsBuilder_1.ElementsBuilder.element;
    take.parent = elementsBuilder_1.ElementsBuilder.parent;
    take.followingSibling = elementsBuilder_1.ElementsBuilder.followingSibling;
    take.all = elementsBuilder_1.ElementsBuilder.all;
    take.filtered = elementsBuilder_1.ElementsBuilder.filtered;
    take.filteredBy = elementsBuilder_1.ElementsBuilder.filtered;
    take.find = elementsBuilder_1.ElementsBuilder.find;
    take.findBy = elementsBuilder_1.ElementsBuilder.find;
    take.nth = elementsBuilder_1.ElementsBuilder.nth;
    take.executeScript = actions_1.Actions.executeScript;
})(take = exports.take || (exports.take = {}));
//# sourceMappingURL=take.js.map