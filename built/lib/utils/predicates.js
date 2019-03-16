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
var predicate;
(function (predicate) {
    predicate.isTruthy = (actual) => !!actual;
    predicate.equals = (expected) => (actual) => actual === expected;
    predicate.isGreaterThan = (expected) => (actual) => actual > expected;
    predicate.isGreaterThanOrEqual = (expected) => (actual) => actual >= expected;
    predicate.isLessThan = (expected) => (actual) => actual < expected;
    predicate.isLessThanOrEqual = (expected) => (actual) => actual <= expected;
    predicate.includes = (expected) => (actual) => actual.includes(expected);
    predicate.includesWord = (expected) => (actual) => actual.split(' ').includes(expected);
    predicate.arrayCompareBy = (f) => ([x, ...xs]) => ([y, ...ys]) => x === undefined && y === undefined
        ? true
        : Boolean(f(x)(y)) && predicate.arrayCompareBy(f)(xs)(ys);
    predicate.equalsToArray = predicate.arrayCompareBy(predicate.equals);
    predicate.equalsByContainsToArray = predicate.arrayCompareBy(predicate.includes);
})(predicate = exports.predicate || (exports.predicate = {}));
//# sourceMappingURL=predicates.js.map