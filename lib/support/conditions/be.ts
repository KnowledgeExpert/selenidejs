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
import { condition, ElementCondition } from '../../conditions';
import { Condition } from '../../wait';

export namespace be {
    export const not = new Proxy(be, { get: (be, conditionName) => Condition.not(be[conditionName]) });

    export const selected: ElementCondition = condition.element.isSelected;

    export const absent: ElementCondition = condition.element.isAbsent;

    export const present: ElementCondition = condition.element.isPresent;

    export const visible: ElementCondition = condition.element.isVisible;

    export const hidden: ElementCondition = condition.element.isHidden;

    export const focused: ElementCondition = condition.element.isFocused;

    export const enabled: ElementCondition = condition.element.isEnabled;

    export const disabled: ElementCondition = condition.element.isDisabled;

    export const blank: ElementCondition = condition.element.isBlank;
}

