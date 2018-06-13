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
var x;
(function (x) {
    function all() {
        return '//*';
    }
    x.all = all;
    function label() {
        return '//label';
    }
    x.label = label;
    function button() {
        return '//button';
    }
    x.button = button;
    function div() {
        return '//div';
    }
    x.div = div;
    function link() {
        return '//a';
    }
    x.link = link;
    function textarea() {
        return '//textarea';
    }
    x.textarea = textarea;
    function input() {
        return '//input';
    }
    x.input = input;
    function iframe() {
        return '//iframe';
    }
    x.iframe = iframe;
    function table() {
        return '//table';
    }
    x.table = table;
    function tbody() {
        return '//tbody';
    }
    x.tbody = tbody;
    function tableRow() {
        return '//tr';
    }
    x.tableRow = tableRow;
    function tableCell() {
        return '//td';
    }
    x.tableCell = tableCell;
    function tableHeader() {
        return '//th';
    }
    x.tableHeader = tableHeader;
    function main() {
        return '//main';
    }
    x.main = main;
    function dt() {
        return '//dt';
    }
    x.dt = dt;
    function dl() {
        return '//dl';
    }
    x.dl = dl;
    function h3() {
        return '//h3';
    }
    x.h3 = h3;
    function ul() {
        return '//ul';
    }
    x.ul = ul;
    function li() {
        return '//li';
    }
    x.li = li;
    function select() {
        return '//select';
    }
    x.select = select;
    function option() {
        return '//option';
    }
    x.option = option;
    function span() {
        return '//span';
    }
    x.span = span;
    function nobr() {
        return '//nobr';
    }
    x.nobr = nobr;
    function parent() {
        return '/..';
    }
    x.parent = parent;
    function followingSiblings() {
        return '/following-sibling::*';
    }
    x.followingSiblings = followingSiblings;
    function followingSiblingsByTag(tag) {
        return `/following-sibling::${tag}`;
    }
    x.followingSiblingsByTag = followingSiblingsByTag;
    function precedingSiblings() {
        return '/preceding-sibling::*';
    }
    x.precedingSiblings = precedingSiblings;
    function ancestors() {
        return '/ancestor::*';
    }
    x.ancestors = ancestors;
})(x = exports.x || (exports.x = {}));
//# sourceMappingURL=x.js.map