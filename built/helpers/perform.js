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
const actions_1 = require("../actions");
var perform;
(function (perform) {
    perform.click = actions_1.Actions.click;
    perform.contextClick = actions_1.Actions.contextClick;
    perform.doubleClick = actions_1.Actions.doubleClick;
    perform.hover = actions_1.Actions.hover;
    perform.pressKey = actions_1.Actions.pressKey;
    perform.pressEnter = actions_1.Actions.pressEnter;
    perform.pressEscape = actions_1.Actions.pressEscape;
    perform.pressTab = actions_1.Actions.pressTab;
    perform.scrollTo = actions_1.Actions.scrollTo;
    perform.sendKeys = actions_1.Actions.sendKeys;
    perform.setValue = actions_1.Actions.setValue;
    perform.open = actions_1.Actions.open;
    perform.close = actions_1.Actions.close;
    perform.quit = actions_1.Actions.quit;
    perform.resizeWindow = actions_1.Actions.resizeWindow;
    perform.refresh = actions_1.Actions.refresh;
    perform.acceptAlert = actions_1.Actions.acceptAlert;
    perform.executeScript = actions_1.Actions.executeScript;
    perform.nextTab = actions_1.Actions.nextTab;
    perform.previousTab = actions_1.Actions.previousTab;
    perform.switchToTab = actions_1.Actions.switchToTab;
    perform.switchToFrame = actions_1.Actions.switchToFrame;
    perform.switchToDefaultFrame = actions_1.Actions.switchToDefaultFrame;
    perform.clearCacheAndCookies = actions_1.Actions.clearCacheAndCookies;
})(perform = exports.perform || (exports.perform = {}));
//# sourceMappingURL=perform.js.map