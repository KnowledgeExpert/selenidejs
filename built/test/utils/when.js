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
const index_1 = require("../../lib/index");
var When;
(function (When) {
    async function withBody(html) {
        await index_1.Selenide.executeScript(`document.getElementsByTagName("body")[0].innerHTML=\`${html.replace('\n', '')}\`;`);
    }
    When.withBody = withBody;
    async function withBodyTimedOut(html, timeout) {
        await withBody(`setTimeout(_ => {${withBody(html)}}, ${timeout})`);
    }
    When.withBodyTimedOut = withBodyTimedOut;
})(When = exports.When || (exports.When = {}));
//# sourceMappingURL=when.js.map