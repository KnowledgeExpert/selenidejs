export namespace xFiltered {

    export function byText(text: string | number): string {
        return `[contains(normalize-space(.), '${text}')]`;
    }

    export function byCssClass(cssClass: string): string {
        return `[contains(concat(' ', normalize-space(@class), ' '), ' ${cssClass} ')]`;
    }

    export function exceptCssClass(cssClass: string): string {
        return `[not(contains(concat(' ', normalize-space(@class), ' '), ' " + cssClass + " '))]`;
    }

    export function byAttribute(attrName: string): string {
        return `[@${attrName}]`;
    }

    export function byAttributeValue(attrName: string, attrValue: string | number): string {
        return `[@${attrName}="${attrValue}"]`;
    }

    export function byId(id: string): string {
        return byAttributeValue("id", id);
    }

    export function byClass(value: string): string {
        return byAttributeValue("class", value);
    }

    export function byTitle(title: string): string {
        return byAttributeValue("title", title);
    }

    export function byPartialId(...idParts: string[]): string {
        return "[" + idParts.map(idPart => `contains(@id, "${idPart}")`).join(" and ") + "]";
    }

    export function byIndex(index: number): string {
        return `[${index}]`;
    }

    export function byVisible(): string {
        return `[contains(@style, 'display: block') or contains(@style, 'visibility: visible')]`;
    }

    export function first(): string {
        return `[1]`;
    }

    export function nth(index: number): string {
        return `[${index}]`;
    }

    export function byOneFromCssClasses(...cssClasses: string[]): string {
        return "[" +
            cssClasses.map(cssClass => `contains(concat(' ', normalize-space(@class), ' '), ' ${cssClass} ')`)
                .join(" or ") +
            "]";

    }

}
