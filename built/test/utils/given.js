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
const testUtils_1 = require("./testUtils");
const when_1 = require("./when");
var Given;
(function (Given) {
    async function openedEmptyPage() {
        await index_1.Selenide.get(testUtils_1.TestUtils.resourcesUrl() + 'empty.html');
    }
    Given.openedEmptyPage = openedEmptyPage;
    async function openedEmptyPageWithJquery() {
        await openedEmptyPage();
        await addJquery();
    }
    Given.openedEmptyPageWithJquery = openedEmptyPageWithJquery;
    async function openedEmptyPageWithBody(html) {
        await openedEmptyPage();
        await when_1.When.withBody(html);
    }
    Given.openedEmptyPageWithBody = openedEmptyPageWithBody;
    async function openedEmptyPageWithJqueryAndBody(html) {
        await openedEmptyPageWithJquery();
        await when_1.When.withBody(html);
    }
    Given.openedEmptyPageWithJqueryAndBody = openedEmptyPageWithJqueryAndBody;
    async function addJquery() {
        await index_1.Selenide.executeScript(`
            var script = document.createElement('script');
            script.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js";
            document.getElementsByTagName('head')[0].appendChild(script);
        `);
        // noinspection TsLint
        await testUtils_1.TestUtils.sleep(500);
    }
})(Given = exports.Given || (exports.Given = {}));
//# sourceMappingURL=given.js.map