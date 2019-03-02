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
class SlicedWebElementsLocator {
    /**
     * Locates a slice in original collection webelements.
     * @param start The inclusive "start" index of webelements to be sliced.
     * @param end The exclusive "end" index of webelements to be sliced.
     * @param collection Original collection to be sliced.
     */
    constructor(start, end, collection) {
        this.start = start;
        this.end = end;
        this.collection = collection;
        this.start = start;
        this.end = end;
        this.collection = collection;
    }
    async find() {
        return (await this.collection.getWebElements()).slice(this.start, this.end);
    }
    toString() {
        return `${this.collection.toString()}[${this.start.toString()}:${this.end.toString()}]`;
    }
}
exports.SlicedWebElementsLocator = SlicedWebElementsLocator;
//# sourceMappingURL=slicedWebElementsLocator.js.map