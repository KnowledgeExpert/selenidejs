export declare module xFiltered {
    function byText(text: string | number): string;
    function byCssClass(cssClass: string): string;
    function exceptCssClass(cssClass: string): string;
    function byAttribute(attrName: string): string;
    function byAttributeValue(attrName: string, attrValue: string | number): string;
    function byId(id: string): string;
    function byClass(value: string): string;
    function byTitle(title: string): string;
    function byPartialId(...idParts: string[]): string;
    function byIndex(index: number): string;
    function byVisible(): string;
    function first(): string;
    function nth(index: number): string;
    function byOneFromCssClasses(...cssClasses: string[]): string;
}
