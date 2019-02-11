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

export { Configuration } from './configuration';
export { Browser } from './browser';
export { Element } from './element';
export { Collection } from './collection';

export { With } from './support/selectors/with';

export { Wait, Condition } from './wait';
export { CollectionCondition } from './conditions';
export { BrowserCondition } from './conditions';
export { ElementCondition } from './conditions';

export { be } from './support/conditions/be';
export { have } from './support/conditions/have';

export { perform } from './support/commands/perform';

export { get } from './support/queries/get';

export { query as its } from './queries';
export { query as their } from './queries';
