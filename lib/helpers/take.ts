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

export namespace take {
    export const visibility = Actions.visibility;

    export const presence = Actions.presence;

    export const text = Actions.text;

    export const attribute = Actions.attribute;

    export const innerHtml = Actions.attribute('innerHTML');

    export const outerHtml = Actions.attribute('outerHTML');

    export const value = Actions.attribute('value');

    export const parent = Actions.parent;

    export const followingSibling = Actions.followingSibling;

    export const screenshot = Actions.screenshot;

    export const url = Actions.url;

    export const title = Actions.title;

    export const pageSource = Actions.pageSource;

    export const tabs = Actions.tabs;

    export const element = Actions.element;

    export const all = Actions.all;

    export const filtered = Actions.filtered;

    export const filteredBy = Actions.filtered;

    export const find = Actions.find;

    export const findBy = Actions.find;

    export const size = Actions.size;

    export const nth = Actions.nth;
}
