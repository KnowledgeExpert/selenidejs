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

export {Browser} from "./baseEntities/browser";
export {Collection} from "./baseEntities/collection";
export {Configuration} from "./baseEntities/config/configuration";
export {Driver} from "./baseEntities/driver";
export {Element} from "./baseEntities/element";
export {Wait} from "./baseEntities/wait";

export {Condition} from "./conditions/condition";
export {CollectionCondition} from "./conditions/collectionCondition";
export {DriverCondition} from "./conditions/driverCondition";
export {ElementCondition} from "./conditions/elementCondition";
export {be} from "./conditions/helpers/be";
export {have} from "./conditions/helpers/have";

export {With} from "./locators/with";

export {By, WebElement, WebElementPromise} from 'selenium-webdriver';