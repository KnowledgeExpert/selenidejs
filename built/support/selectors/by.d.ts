import { By } from 'selenium-webdriver';
export declare namespace by {
    function type(type: string): By;
    function value(value: string): By;
    function partialId(...idParts: string[]): By;
    function text(text: string): By;
    function exactText(text: string): By;
    function linkText(text: string): By;
    function id(id: string): By;
    function name(name: string): By;
    function className(className: string): By;
    function xpath(xpath: string): By;
    function css(css: string): By;
    function attribute(attributeName: string, attributeValue: string): By;
}
