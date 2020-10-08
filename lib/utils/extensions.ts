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

import * as fs from 'fs-extra';
import { By, WebDriver } from 'selenium-webdriver';
import { by } from '../support/selectors/by';

export namespace Extensions {
  // todo: Why not to move it Browser
  export async function savePageSource(driver: WebDriver, filePath: string): Promise<string> {
    const pageTitle = await driver.getTitle();
    const dateTime = new Date().toLocaleString().replace(/ |:|-/g, '_');
    const fileName = `${pageTitle}_${dateTime}.html`;
    const completeFilePath = `${filePath}/${fileName}`;
    const pageSource = await driver.getPageSource();
    fs.outputFileSync(completeFilePath, pageSource);
    return completeFilePath;
  }

  export async function saveScreenshot(driver: WebDriver, filePath: string): Promise<string> {
    const pageTitle = await driver.getTitle();
    const dateTime = new Date().toLocaleString().replace(/ |:|-/g, '_');
    const fileName = `${pageTitle}_${dateTime}.png`;
    const completeFilePath = `${filePath}/${fileName}`;
    const screenshot = Buffer.from(await driver.takeScreenshot(), 'base64');
    fs.outputFileSync(completeFilePath, screenshot);
    return completeFilePath;
  }

  export function toBy(cssOrXpathOrBy: string | By): By {
    if (cssOrXpathOrBy instanceof By) {
      return cssOrXpathOrBy;
    }
    const cssOrXpath = cssOrXpathOrBy.trim();
    const isXpath = (str: string) =>
      str.startsWith('/') || str.startsWith('./') || str.startsWith('..') || str.startsWith('(');
    return isXpath(cssOrXpath) ? by.xpath(cssOrXpath) : by.css(cssOrXpath);
  }

  export function isAbsoluteUrl(relativeOrAbsoluteUrl: string): boolean {
    return (
      relativeOrAbsoluteUrl.toLowerCase().startsWith('http:') ||
      relativeOrAbsoluteUrl.toLowerCase().startsWith('https:') ||
      relativeOrAbsoluteUrl.toLowerCase().startsWith('file:') ||
      relativeOrAbsoluteUrl.toLowerCase().startsWith('about:') ||
      relativeOrAbsoluteUrl.toLowerCase().startsWith('data:')
    );
  }
}
