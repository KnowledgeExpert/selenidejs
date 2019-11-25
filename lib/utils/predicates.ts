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


export namespace predicate {
    export const isTruthy = <V>(actual: V) => !!actual;
    export const equals = <V>(expected: V) => (actual: V) => actual === expected;
    export const isGreaterThan = <V>(expected: V) => (actual: V) => actual > expected;
    export const isGreaterThanOrEqual = <V>(expected: V) => (actual: V) => actual >= expected;
    export const isLessThan = <V>(expected: V) => (actual: V) => actual < expected;
    export const isLessThanOrEqual = <V>(expected: V) => (actual: V) => actual <= expected;
    export const includes = (expected: any) => (actual: any) => actual.includes(expected);
    export const matches = (expected: any) => (actual: any) => actual.match(expected);
    export const includesWord =
        (expected: string) => (actual: string) => actual.split(' ').includes(expected);
    export const arrayCompareBy = (f) => ([x, ...xs]: any[]) => ([y, ...ys]: any[]) =>
        x === undefined && y === undefined
            ? true
            : Boolean(f(x)(y)) && arrayCompareBy(f)(xs)(ys);
    export const equalsToArray = arrayCompareBy(equals);
    export const equalsByContainsToArray = arrayCompareBy(includes);
}
