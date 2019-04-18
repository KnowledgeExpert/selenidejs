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

import {ElementCondition} from '../elementCondition'; // DO NOT DELETE THIS LINE!
import {Conditions} from '../conditions';

export namespace be {
    export const selected = Conditions.elementIsSelected;

    export const absent = Conditions.elementIsAbsent;

    export const present = Conditions.elementIsPresent;

    export const visible = Conditions.elementIsVisible;

    export const hidden = Conditions.elementIsHidden;

    export const empty = Conditions.elementHasEmptyText;
}
