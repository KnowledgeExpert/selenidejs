import {ElementCondition} from '../elementCondition'; // DO NOT DELETE THIS LINE!
import {Conditions} from '../conditions';

export namespace be {
    export const selected = Conditions.elementIsSelected;

    export const absent = Conditions.elementIsAbsent;

    export const present = Conditions.elementIsPresent;

    export const visible = Conditions.elementIsVisible;

    export const hidden = Conditions.elementIsHidden;
}
