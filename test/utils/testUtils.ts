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

import * as child_process from 'child_process';
import { Builder, WebDriver } from 'selenium-webdriver';


export namespace TestUtils {

    const serverPort = 4445;
    let server: child_process.ChildProcess;

    export function startServer() {
        server = child_process.spawn(`npm run startserver -- --p ${serverPort}`, [], {shell: true});
    }

    export function shutdownServer() {
        server.kill('SIGINT');
    }

    export function resourcesUrl(): string {
        return 'http://localhost:4444/';
    }

    export function buildWebDriver(
        browserName = 'chrome',
        // remoteUrl = 'http://217.73.84.220:4444/wd/hub'): WebDriver {
        // remoteUrl = process.env.SELENIDEJS_REMOTE_URL): WebDriver {
        remoteUrl = 'http://ggrname:ggrpassword@li239-162.members.linode.com:4444/wd/hub'
    ): WebDriver {
        return new Builder()
            .withCapabilities({enableVNC: true, browserName: 'chrome'})
            .usingServer(remoteUrl)
            .build();
    }

    export async function sleep(ms: number) {
        return new Promise<void>(resolve => setTimeout(resolve, ms));
    }

}
