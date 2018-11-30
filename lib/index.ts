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

/* tslint:disable */

type OmitKey<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

import { Element } from './element';
const PublicElement = Element as any as {new (): OmitKey<Element, 'driver'>;};
export { PublicElement as Element };

import { Collection } from './collection';
const PublicCollection = Collection as any as {new (): OmitKey<Collection, 'driver'>;};
export { PublicCollection as Collection };

export { Configuration } from './configuration';
export { Driver } from './driver';
export { Condition } from './condition';
export { Browser } from './browser';
export { Wait } from './wait';

export { With } from './with';
export { be } from './helpers/be';
export { have } from './helpers/have';
export { perform } from './helpers/perform';
export { take } from './helpers/take';

export { By, WebElement } from 'selenium-webdriver';
