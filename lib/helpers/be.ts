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

import { Condition } from '../condition';
import { Conditions } from '../conditions';
import { Element } from '../element';

export namespace be {
    export const selected: Condition<Element> = Conditions.selected;

    export const absent: Condition<Element> = Conditions.absent;

    export const present: Condition<Element> = Conditions.present;

    export const visible: Condition<Element> = Conditions.visible;

    export const hidden: Condition<Element> = Conditions.hidden;

    export const focused: Condition<Element> = Conditions.focused;
}
