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

// todo: consider delete
import { Conditions, ElementCondition } from '../../conditions'; // DO NOT DELETE THIS LINE!

export namespace be {
    export const selected: ElementCondition = Conditions.element.isSelected;

    export const absent: ElementCondition = Conditions.element.isAbsent;

    export const present: ElementCondition = Conditions.element.isPresent;

    export const visible: ElementCondition = Conditions.element.isVisible;

    export const hidden: ElementCondition = Conditions.element.isHidden;

    export const focused: ElementCondition = Conditions.element.isFocused;

    export const enabled: ElementCondition = Conditions.element.isEnabled;

    export const disabled: ElementCondition = Conditions.element.isDisabled;
}
