[selenidejs](../README.md) > [condition](../modules/condition.md) > [element](../modules/condition.element.md)

# Module: element

## Index

### Variables

* [isAbsent](condition.element.md#isabsent)
* [isBlank](condition.element.md#isblank)
* [isDisabled](condition.element.md#isdisabled)
* [isEnabled](condition.element.md#isenabled)
* [isFocused](condition.element.md#isfocused)
* [isHidden](condition.element.md#ishidden)
* [isPresent](condition.element.md#ispresent)
* [isSelected](condition.element.md#isselected)
* [isVisible](condition.element.md#isvisible)

### Functions

* [hasAttribute](condition.element.md#hasattribute)
* [hasAttributeWithValue](condition.element.md#hasattributewithvalue)
* [hasAttributeWithValueContaining](condition.element.md#hasattributewithvaluecontaining)
* [hasCssClass](condition.element.md#hascssclass)
* [hasExactText](condition.element.md#hasexacttext)
* [hasText](condition.element.md#hastext)
* [hasValue](condition.element.md#hasvalue)
* [hasValueContaining](condition.element.md#hasvaluecontaining)

---

## Variables

<a id="isabsent"></a>

### `<Const>` isAbsent

**● isAbsent**: *[Condition](../classes/condition.md)<`Object`>* =  Condition.not(isPresent, 'is absent')

*Defined in [conditions.ts:150](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/conditions.ts#L150)*

___
<a id="isblank"></a>

### `<Const>` isBlank

**● isBlank**: *`any`* =  hasExactText('').and(hasValue(''))

*Defined in [conditions.ts:195](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/conditions.ts#L195)*

___
<a id="isdisabled"></a>

### `<Const>` isDisabled

**● isDisabled**: *[Condition](../classes/condition.md)<`Object`>* =  Condition.not(isEnabled, 'is disabled')

*Defined in [conditions.ts:143](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/conditions.ts#L143)*

___
<a id="isenabled"></a>

### `<Const>` isEnabled

**● isEnabled**: *[Condition](../classes/condition.md)<`Object`>* =  new Condition(
            'is enabled',
            throwIfNot(async (element: Element) => element.getWebElement().then(webelement => webelement.isEnabled()))
        )

*Defined in [conditions.ts:138](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/conditions.ts#L138)*

___
<a id="isfocused"></a>

### `<Const>` isFocused

**● isFocused**: *[Condition](../classes/condition.md)<`Object`>* =  new Condition(
            'is focused',
            throwIfNot(async (element: Element) =>
                WebElement.equals(
                    await element.executeScript('return document.activeElement') as WebElement,
                    await element.getWebElement()
                ))
        )

*Defined in [conditions.ts:152](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/conditions.ts#L152)*

___
<a id="ishidden"></a>

### `<Const>` isHidden

**● isHidden**: *[Condition](../classes/condition.md)<`Object`>* =  Condition.not(isVisible, 'is hidden')

*Defined in [conditions.ts:129](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/conditions.ts#L129)*

___
<a id="ispresent"></a>

### `<Const>` isPresent

**● isPresent**: *[Condition](../classes/condition.md)<`Object`>* =  new Condition(
            'is present',
            throwIfNot(async (element: Element) => element.getWebElement().then(_ => true, _ => false)
            ))

*Defined in [conditions.ts:145](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/conditions.ts#L145)*

___
<a id="isselected"></a>

### `<Const>` isSelected

**● isSelected**: *[Condition](../classes/condition.md)<`Object`>* =  hasAttribute('elementIsSelected')

*Defined in [conditions.ts:136](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/conditions.ts#L136)*

___
<a id="isvisible"></a>

### `<Const>` isVisible

**● isVisible**: *[Condition](../classes/condition.md)<`Object`>* =  new Condition(
            'is visible',
            throwIfNot(async (element: Element) => element.getWebElement().then(webelement => webelement.isDisplayed()))
        )

*Defined in [conditions.ts:124](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/conditions.ts#L124)*

___

## Functions

<a id="hasattribute"></a>

### `<Const>` hasAttribute

▸ **hasAttribute**(name: *`string`*): [Condition](../classes/condition.md)<`Object`>

*Defined in [conditions.ts:131](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/conditions.ts#L131)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| name | `string` |

**Returns:** [Condition](../classes/condition.md)<`Object`>

___
<a id="hasattributewithvalue"></a>

### `<Const>` hasAttributeWithValue

▸ **hasAttributeWithValue**(name: *`string`*, value: *`string`*): [Condition](../classes/condition.md)<`Object`>

*Defined in [conditions.ts:171](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/conditions.ts#L171)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| name | `string` |
| value | `string` |

**Returns:** [Condition](../classes/condition.md)<`Object`>

___
<a id="hasattributewithvaluecontaining"></a>

### `<Const>` hasAttributeWithValueContaining

▸ **hasAttributeWithValueContaining**(name: *`string`*, partialValue: *`string`*): [Condition](../classes/condition.md)<`Object`>

*Defined in [conditions.ts:177](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/conditions.ts#L177)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| name | `string` |
| partialValue | `string` |

**Returns:** [Condition](../classes/condition.md)<`Object`>

___
<a id="hascssclass"></a>

### `<Const>` hasCssClass

▸ **hasCssClass**(cssClass: *`string`*): [Condition](../classes/condition.md)<`Object`>

*Defined in [conditions.ts:182](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/conditions.ts#L182)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| cssClass | `string` |

**Returns:** [Condition](../classes/condition.md)<`Object`>

___
<a id="hasexacttext"></a>

### `<Const>` hasExactText

▸ **hasExactText**(expected: *`string`*): [Condition](../classes/condition.md)<`Object`>

*Defined in [conditions.ts:167](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/conditions.ts#L167)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| expected | `string` |

**Returns:** [Condition](../classes/condition.md)<`Object`>

___
<a id="hastext"></a>

### `<Const>` hasText

▸ **hasText**(expected: *`string`*): [Condition](../classes/condition.md)<`Object`>

*Defined in [conditions.ts:162](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/conditions.ts#L162)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| expected | `string` |

**Returns:** [Condition](../classes/condition.md)<`Object`>

___
<a id="hasvalue"></a>

### `<Const>` hasValue

▸ **hasValue**(expected: *`string`*): [Condition](../classes/condition.md)<`Object`>

*Defined in [conditions.ts:187](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/conditions.ts#L187)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| expected | `string` |

**Returns:** [Condition](../classes/condition.md)<`Object`>

___
<a id="hasvaluecontaining"></a>

### `<Const>` hasValueContaining

▸ **hasValueContaining**(expected: *`string`*): [Condition](../classes/condition.md)<`Object`>

*Defined in [conditions.ts:190](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/conditions.ts#L190)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| expected | `string` |

**Returns:** [Condition](../classes/condition.md)<`Object`>

___

