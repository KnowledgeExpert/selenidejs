"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const x_1 = require("../xpath/x");
const xFiltered_1 = require("../xpath/xFiltered");
var With;
(function (With) {
    const NORMALIZE_SPACE_XPATH = `normalize-space(translate(string(.), '\t\n\r\u00a0', '    '))`;
    function type(type) {
        return protractor_1.by.xpath(x_1.x.all() + xFiltered_1.xFiltered.byAttributeValue('type', type));
    }
    With.type = type;
    function value(value) {
        return protractor_1.by.xpath(x_1.x.all() + xFiltered_1.xFiltered.byAttributeValue('value', value));
    }
    With.value = value;
    function partialId(...idParts) {
        return protractor_1.by.xpath(x_1.x.all() + xFiltered_1.xFiltered.byPartialId(...idParts));
    }
    With.partialId = partialId;
    function text(text) {
        return protractor_1.by.xpath(`.//*/text()[contains(${NORMALIZE_SPACE_XPATH}, "${text}")]/parent::*`);
    }
    With.text = text;
    function exactText(text) {
        return protractor_1.by.xpath(`.//*/text()[${NORMALIZE_SPACE_XPATH} = "${text}"]/parent::*`);
    }
    With.exactText = exactText;
    function id(id) {
        return protractor_1.by.id(id);
    }
    With.id = id;
    function name(name) {
        return protractor_1.by.name(name);
    }
    With.name = name;
    function className(className) {
        return protractor_1.by.className(className);
    }
    With.className = className;
    function xpath(xpath) {
        return protractor_1.by.xpath(xpath);
    }
    With.xpath = xpath;
    function css(css) {
        return protractor_1.by.css(css);
    }
    With.css = css;
    function attribute(attributeName, attributeValue) {
        return protractor_1.by.xpath(`.${x_1.x.all()}${xFiltered_1.xFiltered.byAttributeValue(attributeName, attributeValue)}`);
    }
    With.attribute = attribute;
    function testId(testId) {
        return protractor_1.by.css(`[data-test-id='` + testId + `']`);
    }
    With.testId = testId;
})(With = exports.With || (exports.With = {}));
//# sourceMappingURL=with.js.map