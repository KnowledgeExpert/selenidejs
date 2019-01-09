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
const child_process = require("child_process");
const selenium_webdriver_1 = require("selenium-webdriver");
var TestUtils;
(function (TestUtils) {
    const serverPort = 4445;
    let server;
    function startServer() {
        server = child_process.spawn(`npm run startserver -- --p ${serverPort}`, [], { shell: true });
    }
    TestUtils.startServer = startServer;
    function shutdownServer() {
        server.kill('SIGINT');
    }
    TestUtils.shutdownServer = shutdownServer;
    function resourcesUrl() {
        return 'http://localhost:4444/';
    }
    TestUtils.resourcesUrl = resourcesUrl;
    function buildWebDriver(browserName = 'chrome', 
        // remoteUrl = 'http://217.73.84.220:4444/wd/hub'): WebDriver {
        // remoteUrl = process.env.SELENIDEJS_REMOTE_URL): WebDriver {
        remoteUrl = 'http://ggrname:ggrpassword@li239-162.members.linode.com:4444/wd/hub') {
        return new selenium_webdriver_1.Builder()
            .withCapabilities({ enableVNC: true, browserName: 'chrome' })
            .usingServer(remoteUrl)
            .build();
    }
    TestUtils.buildWebDriver = buildWebDriver;
    async function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    TestUtils.sleep = sleep;
})(TestUtils = exports.TestUtils || (exports.TestUtils = {}));
//# sourceMappingURL=testUtils.js.map