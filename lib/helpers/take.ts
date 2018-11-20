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


import { Actions } from '../actions';
import { ElementsBuilder } from '../elementsBuilder';

export namespace take {
    export const visibility = Actions.visibility;

    export const presence = Actions.presence;

    export const text = Actions.text;

    export const attribute = Actions.attribute;

    export const innerHtml = Actions.attribute('innerHTML');

    export const outerHtml = Actions.attribute('outerHTML');

    export const value = Actions.attribute('value');

    export const screenshot = Actions.screenshot;

    export const url = Actions.url;

    export const title = Actions.title;

    export const pageSource = Actions.pageSource;

    export const tabs = Actions.tabs;

    export const size = Actions.size;

    export const element = ElementsBuilder.element;

    export const parent = ElementsBuilder.parent;

    export const followingSibling = ElementsBuilder.followingSibling;

    export const all = ElementsBuilder.all;

    export const filtered = ElementsBuilder.filtered;

    export const filteredBy = ElementsBuilder.filtered;

    export const find = ElementsBuilder.find;

    export const findBy = ElementsBuilder.find;

    export const nth = ElementsBuilder.nth;

    export const executeScript = Actions.executeScript;
}
