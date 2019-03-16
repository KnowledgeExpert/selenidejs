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
var find;
(function (find) {
    /* Context.* builders */ // todo: consider extract actual Context interface
    find.element = (cssOrXpathOrBy) => (context) => context.element(cssOrXpathOrBy);
    find.all = (cssOrXpathOrBy) => (context) => context.all(cssOrXpathOrBy);
    /* Element.* builders */
    find.parent = (element) => element.parent;
    find.followingSibling = (element) => element.followingSibling;
    /* Collection.* builders */
    find.elementAt = (index) => (collection) => collection.elementAt(index);
    find.first = (collection) => collection.first;
    find.sliced = (start, end) => (collection) => collection.sliced(start, end);
    // export const first = (count?: number) => (collection: Collection) => collection.first(count);
    find.elementBy = (condition) => (collection) => collection.elementBy(condition);
    find.filteredBy = (condition) => (collection) => collection.filteredBy(condition);
    /* Browser.* builders */
    find.alert = (browser) => browser.alert;
})(find = exports.find || (exports.find = {}));
//# sourceMappingURL=find.js.map