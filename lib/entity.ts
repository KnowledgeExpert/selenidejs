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

import { Command, Condition, Query, Wait } from './wait';
import { OnFailureHook } from './refactor/onFailureHook';
import { ElementActionHooks } from './refactor/elementActionHooks';

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
    shouldNot(condition: Condition<this>): Promise<this>;
}

export interface Matchable {
    waitUntil(...conditions: Array<Condition<this>>): Promise<boolean>;
    waitUntilNot(...conditions: Array<Condition<this>>): Promise<boolean>;
    matching(condition: Condition<this>): Promise<boolean>;
    matchingNot(condition: Condition<this>): Promise<boolean>;
}

export abstract class Entity implements Assertable, Matchable {

    protected readonly wait: Wait<this>;

    constructor(private readonly timeout: number, private readonly onFailureHooks: OnFailureHook[]) {
        this.wait = new Wait(this, timeout, []);
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

    async should(...conditions: Array<Condition<this>>): Promise<this> {
        await this.wait.query(Condition.all(...conditions));
        return this;
    }

    async shouldNot(...conditions: Array<Condition<this>>): Promise<this> {
        await this.wait.query(Condition.allNot(...conditions));
        return this;
    }

    /* Matchable */

    async waitUntil(...conditions: Array<Condition<this>>): Promise<boolean> {
        return this.wait.until(...conditions);
    }

    async waitUntilNot(...conditions: Array<Condition<this>>)
    : Promise<boolean> {
        return this.wait.untilNot(...conditions);
    }

    /*
     * todo: problem with this is we originally have Promise<true | false>, then make it Promise<true | throws Error>,
     * and then again Promise<true | false>
     */
    async matching(...conditions: Array<Condition<this>>): Promise<boolean> {
        return Condition.asPredicate(...conditions)(this);
    }

    async matchingNot(...conditions: Array<Condition<this>>): Promise<boolean> {
        return this.matching(...conditions.map(c => Condition.not(c)));
    }

    /* Commands */

    @ElementActionHooks  // todo: cover with tests
    async perform(command: Command<this>): Promise<this> {
        await this.wait.command(command);
        return this;
    }

    /* Queries */ // todo: do we need @ElementQueryHooks?

    async get<R>(query: Query<this, R>): Promise<R> {
        return this.wait.query(query);
    }
}
