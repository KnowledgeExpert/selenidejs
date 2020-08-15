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

import { Configuration } from './configuration';
import { Condition, Lambda, Wait } from './wait';

/* With Conditions
 *
 *  Where:
 *  - should = wait for condition and on success return this for "fluent" style else fail
 *    - just problem is that fluent style in async js is not relevant much :D
 *  - matches = apply condition (without waiting) and return its result (true or false)
 *  - waitUntil = wait for condition and on success return true else false (i.e. = waitingMatch)
 *  TODO:
 *    - do we need a version that on success returns true else fails?
 *      - should we just make "waitUntil" = "waiting match"?
 *        i.e. not fail on notMatched after timeout but return false
 *        - yet, on the level of Wait it's seems natural to have both:
 *          wait.until, wait.match
 *          - but maybe not:) maybe wait.* should fail on false... but maybe not:) depends)
 */

/*
 * todo: consider adding aliases: shouldMatch, shouldNotMatch
 */
export interface Assertable {
    should(condition: Condition<this>): Promise<this>;
}

export interface Matchable {
    waitUntil(...conditions: Condition<this>[]): Promise<boolean>;
    matching(condition: Condition<this>): Promise<boolean>;
}
/* todo: discuss somewhere do we need it or not... (it could be used mainly in onFailureHooks)
export interface Configured {
    readonly configuration: Configuration;
}*/

export abstract class Entity implements Assertable, Matchable/*, Configured*/ {

    readonly configuration: Configuration;
    protected readonly wait: Wait<this>;

    constructor(configuration: Configuration) {
        this.configuration = configuration;
        this.wait = new Wait(this, configuration.timeout);
    }

    /*
     * todo: consider assert or shouldMatch aliases for should
     * should is good for
     *   should(be.visible) style
     * but assert or shouldMatch is good for the "raw" condition case:
     *   assert(condition.element.isVisible)
     *   shouldMatch(condition.element.isVisible)
     * maybe someone will find this style better than be.* and have.*
     * the advantage is in having only one entry point to all conditions - condition.*
     * where it has conditions sorted by type - element, collection, browser -
     * so it might be easier to find the needed one...
     * while be.* and have.* are kind of bulk of mixed type conditions - all in one heap,
     * even two mixed heaps:)));
     */

    /* Assertable */

    async should(...conditions: Condition<this>[]): Promise<this> {
        await this.wait.for(Condition.all(...conditions));
        return this;
    }

    /* Matchable */

    async waitUntil(...conditions: Condition<this>[]): Promise<boolean> {
        return this.wait.until(Condition.all(...conditions));
    }

    async matching(...conditions: Condition<this>[]): Promise<boolean> {
        return Condition.asPredicate(...conditions)(this);
    }

    /* Commands */

    async perform(command: Lambda<this, void>): Promise<this> { // todo: should we accept real Command over Lambda here?
        // todo: should we use Lambda<this, void | any> ?
        //  (right now we can't write something like: browser.perform(perform.*)
        await this.wait.command(command);
        return this;
    }

    /* Queries */ // todo: do we need @ElementQueryHooks?

    async get<R>(query: Lambda<this, R>): Promise<R> {
        return this.wait.query(query);
    }
}
