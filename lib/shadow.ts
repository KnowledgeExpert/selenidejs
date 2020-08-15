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

import { By } from 'selenium-webdriver';
import { Collection } from '.';
import { Configuration } from './configuration';
import { Element } from './element';
import { ElementWebElementByJs } from './locators/ElementWebElementByJs';
import { ElementWebElementByLocator } from './locators/ElementWebElementByLocator';
import { ElementWebElementsByJs } from './locators/ElementWebElementsByJs';
import { ElementWebElementsByLocator } from './locators/ElementWebElementsByLocator';
import { Extensions } from './utils/extensions';

export class Shadow {
  constructor(private readonly context: Element, readonly configuration: Configuration) {
    this.context = context;
  }

  element(
    located: (string | By | { script: string | ((element: HTMLElement) => HTMLElement | ShadowRoot), args?: any[] }),
    customized?: Partial<Configuration>
  ): Element {
    const configuration = customized === undefined ?
      this.configuration :
      new Configuration({ ...this.configuration, ...customized });
    if (located instanceof By || typeof located === 'string') {
      const by = Extensions.toBy(located);
      const locator = new ElementWebElementByLocator(by, this.context);
      return new Element(locator, configuration);
    } else {
      const locator = new ElementWebElementByJs(this.context, located.script, located.args);
      return new Element(locator, configuration);
    }
  }

  all(
    located: string | By | { script: string | ((element: HTMLElement) => HTMLCollectionOf<HTMLElement>), args?: any[] },
    customized?: Partial<Configuration>
  ): Collection {
    const configuration = customized === undefined ?
      this.configuration :
      new Configuration({ ...this.configuration, ...customized });
    if (located instanceof By || typeof located === 'string') {
      const by = Extensions.toBy(located);
      const locator = new ElementWebElementsByLocator(by, this.context);
      return new Collection(locator, configuration);
    } else {
      const locator = new ElementWebElementsByJs(this.context, located.script, located.args);
      return new Collection(locator, configuration);
    }
  }

}
