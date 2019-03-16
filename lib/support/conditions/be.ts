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

class Be {
    readonly selected: ElementCondition = condition.element.isSelected;

    readonly absent: ElementCondition = condition.element.isAbsent;

    readonly present: ElementCondition = condition.element.isPresent;

    readonly visible: ElementCondition = condition.element.isVisible;

    readonly hidden: ElementCondition = condition.element.isHidden;

    readonly focused: ElementCondition = condition.element.isFocused;

    readonly enabled: ElementCondition = condition.element.isEnabled;

    readonly disabled: ElementCondition = condition.element.isDisabled;

    readonly blank: ElementCondition = condition.element.isBlank;
}

const not = new Proxy(new Be(), {
    get: (target, name) => {
        return name in target ?
            // (...args) => Condition.not(target[name](...args)) :
            Condition.not(target[name]) :
            undefined;
    }
});

export const be = { ...new Be(), not };

