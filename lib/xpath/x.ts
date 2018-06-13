// Copyright 2018 Knowledge Expert SA
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//     You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
//     Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//     See the License for the specific language governing permissions and
// limitations under the License.

export namespace x {

    export function all(): string {
        return '//*';
    }

    export function label(): string {
        return '//label';
    }

    export function button(): string {
        return '//button';
    }

    export function div(): string {
        return '//div';
    }

    export function link(): string {
        return '//a';
    }

    export function textarea(): string {
        return '//textarea';
    }

    export function input(): string {
        return '//input';
    }

    export function iframe(): string {
        return '//iframe';
    }

    export function table(): string {
        return '//table';
    }

    export function tbody(): string {
        return '//tbody';
    }

    export function tableRow(): string {
        return '//tr';
    }

    export function tableCell(): string {
        return '//td';
    }

    export function tableHeader(): string {
        return '//th';
    }

    export function main(): string {
        return '//main';
    }

    export function dt(): string {
        return '//dt';
    }

    export function dl(): string {
        return '//dl';
    }

    export function h3(): string {
        return '//h3';
    }

    export function ul(): string {
        return '//ul';
    }

    export function li(): string {
        return '//li';
    }

    export function select(): string {
        return '//select';
    }

    export function option(): string {
        return '//option';
    }

    export function span(): string {
        return '//span';
    }

    export function nobr(): string {
        return '//nobr';
    }

    export function parent(): string {
        return '/..';
    }

    export function followingSiblings(): string {
        return '/following-sibling::*';
    }

    export function followingSiblingsByTag(tag: string): string {
        return `/following-sibling::${tag}`;
    }

    export function precedingSiblings(): string {
        return '/preceding-sibling::*';
    }

    export function ancestors(): string {
        return '/ancestor::*';
    }
}
