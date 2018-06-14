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

export {element, visibleElement, elementSmart, Element} from './base-entities/element';
export {all, Collection} from './base-entities/collection';

export {Condition} from './conditions/condition';
export {ElementCondition} from './conditions/elementCondition';
export {CollectionCondition} from './conditions/collectionCondition';
export {BrowserCondition} from './conditions/browserCondition';
export {ConditionDoesNotMatchError} from './errors/conditionDoesNotMatchError';

export {be} from './conditions/helpers/be';
export {have} from './conditions/helpers/have';

export {Wait} from './wait';

export {With} from './locators/with';
export {x} from './xpath/x';
export {xFiltered} from './xpath/xFiltered';

export {Browser} from './base-entities/browser';
export {FileHelper} from './helpers/fileHelper';
export {HttpHelper} from './helpers/httpHelper';

//RE-EXPORT
export {By, WebElement, WebElementPromise} from 'selenium-webdriver';