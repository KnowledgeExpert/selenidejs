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
import { Builder, Capabilities, WebDriver } from 'selenium-webdriver';


export namespace TestUtils {

    let server: child_process.ChildProcess;

    export function startServer() {
        server = child_process.spawn('npm run startserver', [], {shell: true});
    }

    export function shutdownServer() {
        server.kill('SIGINT');
    }

    export function resourcesUrl(): string {
        return 'http://localhost:4445/';
    }

    export function buildWebDriver(): WebDriver {
        return new Builder().withCapabilities(Capabilities.chrome()).build();
    }

    export async function sleep(ms: number) {
        return new Promise<void>(resolve => setTimeout(resolve, ms));
    }

}
