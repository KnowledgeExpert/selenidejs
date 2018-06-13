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

export namespace xFiltered {

    export function byText(text: string | number): string {
        return `[contains(normalize-space(.), '${text}')]`;
    }

    export function byCssClass(cssClass: string): string {
        return `[contains(concat(' ', normalize-space(@class), ' '), ' ${cssClass} ')]`;
    }

    export function exceptCssClass(cssClass: string): string {
        return `[not(contains(concat(' ', normalize-space(@class), ' '), ' " + cssClass + " '))]`;
    }

    export function byAttribute(attrName: string): string {
        return `[@${attrName}]`;
    }

    export function byAttributeValue(attrName: string, attrValue: string | number): string {
        return `[@${attrName}='${attrValue}']`;
    }

    export function byId(id: string): string {
        return byAttributeValue('id', id);
    }

    export function byClass(value: string): string {
        return byAttributeValue('class', value);
    }

    export function byTitle(title: string): string {
        return byAttributeValue('title', title);
    }

    export function byPartialId(...idParts: string[]): string {
        return '[' + idParts.map(idPart => `contains(@id, '${idPart}')`).join(' and ') + ']';
    }

    export function byIndex(index: number): string {
        return `[${index}]`;
    }

    export function byVisible(): string {
        return `[contains(@style, 'display: block') or contains(@style, 'visibility: visible')]`;
    }

    export function first(): string {
        return `[1]`;
    }

    export function nth(index: number): string {
        return `[${index}]`;
    }

    export function byOneFromCssClasses(...cssClasses: string[]): string {
        return '[' +
            cssClasses.map(cssClass => `contains(concat(' ', normalize-space(@class), ' '), ' ${cssClass} ')`)
                .join(' or ') +
            ']';

    }

}
