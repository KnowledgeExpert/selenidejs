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
const testUtils_1 = require("./testUtils");
class Gherkin {
    constructor(browser) {
        this.browser = browser;
        this.browser = browser;
    }
    async openedEmptyPage() {
        await this.browser.get(testUtils_1.TestUtils.resourcesUrl() + 'empty.html');
    }
    async withBody(html) {
        await this.browser.executeScript(`document.getElementsByTagName("body")[0].innerHTML=\`${html.replace('\n', '')}\`;`);
    }
    async withBodyTimedOut(html, timeout) {
        await this.withBody(`setTimeout(_ => {${this.withBody(html)}}, ${timeout})`);
    }
    async executeScript(script) {
        return this.browser.executeScript(script);
    }
    async executeScriptWithTimeout(script, timeout) {
        return this.browser.executeScript(`setTimeout(_ => { ${script} }, ${timeout});`);
    }
    async openedEmptyPageWithJquery() {
        await this.openedEmptyPage();
        await this.addJquery();
    }
    async openedEmptyPageWithBody(html) {
        await this.openedEmptyPage();
        await this.withBody(html);
    }
    async openedEmptyPageWithJqueryAndBody(html) {
        await this.openedEmptyPageWithJquery();
        await this.withBody(html);
    }
    async addJquery() {
        await this.browser.executeScript(`
            var script = document.createElement('script');
            script.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js";
            document.getElementsByTagName('head')[0].appendChild(script);
        `);
        // noinspection TsLint
        await testUtils_1.TestUtils.sleep(500);
    }
}
exports.Gherkin = Gherkin;
//# sourceMappingURL=gherkin.js.map