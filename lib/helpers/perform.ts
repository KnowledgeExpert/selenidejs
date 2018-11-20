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

export namespace perform {
    export const click = Actions.click;

    export const contextClick = Actions.contextClick;

    export const doubleClick = Actions.doubleClick;

    export const hover = Actions.hover;

    export const pressKey = Actions.pressKey;

    export const pressEnter = Actions.pressEnter;

    export const pressEscape = Actions.pressEscape;

    export const pressTab = Actions.pressTab;

    export const scrollTo = Actions.scrollTo;

    export const sendKeys = Actions.sendKeys;

    export const setValue = Actions.setValue;

    export const open = Actions.open;

    export const close = Actions.close;

    export const quit = Actions.quit;

    export const resizeWindow = Actions.resizeWindow;

    export const refresh = Actions.refresh;

    export const acceptAlert = Actions.acceptAlert;

    export const nextTab = Actions.nextTab;

    export const previousTab = Actions.previousTab;

    export const switchToTab = Actions.switchToTab;

    export const switchToFrame = Actions.switchToFrame;

    export const switchToDefaultFrame = Actions.switchToDefaultFrame;

    export const clearCacheAndCookies = Actions.clearCacheAndCookies;
}
