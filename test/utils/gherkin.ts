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

import { Browser } from '../../lib';
import { TestUtils } from './testUtils';


export class Gherkin {

    constructor(private readonly browser: Browser) {
        this.browser = browser;
    }

    async openedEmptyPage() {
        await this.browser.open('empty.html');
    }

    async withBody(html: string) {
        await this.browser.executeScript(
            `document.getElementsByTagName("body")[0].innerHTML=\`${html.replace('\n', '')}\`;`
        );
    }

    async withBodyTimedOut(html: string, timeout: number) {
        await this.executeScriptWithTimeout(
            `document.getElementsByTagName("body")[0].innerHTML=\`${html.replace('\n', '')}\`;`,
            timeout
        );
    }

    async withBodyAfter(timeout: number, html: string) {
        return this.withBodyTimedOut(html, timeout);
    }

    async executeScript(script: (string | ((document: Document, args?: any[], window?: Window) => any)), ...args: any[]) {
        return this.browser.executeScript(script);
    }

    async executeScriptWithTimeout(script: string, timeout: number) {
        return this.browser.executeScript(
            `setTimeout(_ => { ${script} }, ${timeout});`
        );
    }

    async executeScriptAfter(timeout: number, script: string) {
        return this.executeScriptWithTimeout(script, timeout);
    }

    async openedEmptyPageWithJquery() {
        await this.openedEmptyPage();
        await this.addJquery();
    }

    async openedEmptyPageWithBody(html: string) {
        await this.openedEmptyPage();
        await this.withBody(html);
    }

    async openedEmptyPageWithBodyTimedOut(html: string, timeout: number) {
        await this.openedEmptyPage();
        await this.withBodyTimedOut(html, timeout);
    }

    async openedEmptyPageWithBodyAfter(timeout: number, html: string) {
        await this.openedEmptyPage();
        await this.withBodyTimedOut(html, timeout);
    }

    async openedEmptyPageWithJqueryAndBody(html: string) {
        await this.openedEmptyPageWithJquery();
        await this.withBody(html);
    }

    private async addJquery() {
        await this.browser.executeScript(`
            var script = document.createElement('script');
            script.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js";
            document.getElementsByTagName('head')[0].appendChild(script);
        `);
        // noinspection TsLint
        await TestUtils.sleep(500);
    }

}
