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

import { Command } from "./command";
import { Element } from "../baseEntities/element";
import { Key } from "selenium-webdriver";

export class PressKey implements Command<Element> {
    async perform(entity: Element, ...args: any[]): Promise<void> {
        const webelement = await entity.getWebElement();
        const key = args[0];
        await webelement.sendKeys(key);
    }
}