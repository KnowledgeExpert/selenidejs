import {ElementCondition} from "../elementCondition";
import {Conditions} from "../conditions";


export namespace be {

    export function selected(): ElementCondition {
        return Conditions.element.selected();
    }

    export function absent(): ElementCondition {
        return Conditions.element.absent();
    }

    export function present(): ElementCondition {
        return Conditions.element.present()
    }

    export function visible(): ElementCondition {
        return Conditions.element.visible();
    }

    export function hidden(): ElementCondition {
        return Conditions.element.hidden();
    }

}