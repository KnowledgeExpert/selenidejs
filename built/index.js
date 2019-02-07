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
var collection_1 = require("./collection");
exports.Collection = collection_1.Collection;
var configuration_1 = require("./configuration");
exports.Configuration = configuration_1.Configuration;
var browser_1 = require("./browser");
exports.Browser = browser_1.Browser;
var element_1 = require("./element");
exports.Element = element_1.Element;
var wait_1 = require("./wait");
exports.Wait = wait_1.Wait;
exports.Condition = wait_1.Condition;
var be_1 = require("./support/conditions/be");
exports.be = be_1.be;
var have_1 = require("./support/conditions/have");
exports.have = have_1.have;
var perform_1 = require("./support/commands/perform");
exports.perform = perform_1.perform;
var with_1 = require("./support/selectors/with");
exports.With = with_1.With;
var get_1 = require("./support/queries/get");
exports.get = get_1.get;
var get_2 = require("./support/queries/get"); // todo: do we really need it?
exports.its = get_2.get;
var queries_1 = require("./queries");
exports.query = queries_1.query;
//# sourceMappingURL=index.js.map