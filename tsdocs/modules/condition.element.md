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
* [hasVisibleElement](condition.element.md#hasvisibleelement)

---

## Variables

<a id="isabsent"></a>

### `<Const>` isAbsent

**● isAbsent**: *[ElementCondition](../#elementcondition)* = 
            Condition.not(isPresent, 'is absent')

*Defined in [conditions.ts:175](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L175)*

___
<a id="isblank"></a>

### `<Const>` isBlank

**● isBlank**: *`function`* =  Condition.and(hasExactText(''), hasValue(''))

*Defined in [conditions.ts:212](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L212)*

#### Type declaration
▸(entity: *`T`*): `Promise`<`R`>

**Parameters:**

| Param | Type |
| ------ | ------ |
| entity | `T` |

**Returns:** `Promise`<`R`>

___
<a id="isdisabled"></a>

### `<Const>` isDisabled

**● isDisabled**: *[ElementCondition](../#elementcondition)* = 
            Condition.not(isEnabled, 'is disabled')

*Defined in [conditions.ts:168](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L168)*

___
<a id="isenabled"></a>

### `<Const>` isEnabled

**● isEnabled**: *[ElementCondition](../#elementcondition)* = 
            throwIfNot('is enabled', async (element: Element) =>
                (await element.getWebElement()).isEnabled())

*Defined in [conditions.ts:164](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L164)*

___
<a id="isfocused"></a>

### `<Const>` isFocused

**● isFocused**: *[ElementCondition](../#elementcondition)* = 
            throwIfNot('is focused', async (element: Element) =>
                WebElement.equals(
                    await element.executeScript('return document.activeElement') as WebElement,
                    await element.getWebElement()
                ))

*Defined in [conditions.ts:178](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L178)*

___
<a id="ishidden"></a>

### `<Const>` isHidden

**● isHidden**: *[ElementCondition](../#elementcondition)* = 
            Condition.not(isVisible, 'is hidden')

*Defined in [conditions.ts:150](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L150)*

___
<a id="ispresent"></a>

### `<Const>` isPresent

**● isPresent**: *[ElementCondition](../#elementcondition)* = 
            throwIfNot('is present', async (element: Element) =>
                !!(await element.getWebElement()))

*Defined in [conditions.ts:171](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L171)*

___
<a id="isselected"></a>

### `<Const>` isSelected

**● isSelected**: *[ElementCondition](../#elementcondition)* = 
            hasAttribute('elementIsSelected')

*Defined in [conditions.ts:161](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L161)*

___
<a id="isvisible"></a>

### `<Const>` isVisible

**● isVisible**: *[ElementCondition](../#elementcondition)* = 
            throwIfNot('is visible', async (element: Element) =>
                (await element.getWebElement()).isDisplayed())

*Defined in [conditions.ts:146](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L146)*

___

## Functions

<a id="hasattribute"></a>

### `<Const>` hasAttribute

▸ **hasAttribute**(name: *`string`*): [ElementCondition](../#elementcondition)

*Defined in [conditions.ts:157](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L157)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| name | `string` |

**Returns:** [ElementCondition](../#elementcondition)

___
<a id="hasattributewithvalue"></a>

### `<Const>` hasAttributeWithValue

▸ **hasAttributeWithValue**(name: *`string`*, value: *`string`*): [ElementCondition](../#elementcondition)

*Defined in [conditions.ts:193](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L193)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| name | `string` |
| value | `string` |

**Returns:** [ElementCondition](../#elementcondition)

___
<a id="hasattributewithvaluecontaining"></a>

### `<Const>` hasAttributeWithValueContaining

▸ **hasAttributeWithValueContaining**(name: *`string`*, partialValue: *`string`*): [ElementCondition](../#elementcondition)

*Defined in [conditions.ts:198](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L198)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| name | `string` |
| partialValue | `string` |

**Returns:** [ElementCondition](../#elementcondition)

___
<a id="hascssclass"></a>

### `<Const>` hasCssClass

▸ **hasCssClass**(cssClass: *`string`*): [ElementCondition](../#elementcondition)

*Defined in [conditions.ts:202](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L202)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| cssClass | `string` |

**Returns:** [ElementCondition](../#elementcondition)

___
<a id="hasexacttext"></a>

### `<Const>` hasExactText

▸ **hasExactText**(expected: *`string`*): [ElementCondition](../#elementcondition)

*Defined in [conditions.ts:189](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L189)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| expected | `string` |

**Returns:** [ElementCondition](../#elementcondition)

___
<a id="hastext"></a>

### `<Const>` hasText

▸ **hasText**(expected: *`string`*): [ElementCondition](../#elementcondition)

*Defined in [conditions.ts:185](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L185)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| expected | `string` |

**Returns:** [ElementCondition](../#elementcondition)

___
<a id="hasvalue"></a>

### `<Const>` hasValue

▸ **hasValue**(expected: *`string`*): [ElementCondition](../#elementcondition)

*Defined in [conditions.ts:206](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L206)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| expected | `string` |

**Returns:** [ElementCondition](../#elementcondition)

___
<a id="hasvaluecontaining"></a>

### `<Const>` hasValueContaining

▸ **hasValueContaining**(expected: *`string`*): [ElementCondition](../#elementcondition)

*Defined in [conditions.ts:209](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L209)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| expected | `string` |

**Returns:** [ElementCondition](../#elementcondition)

___
<a id="hasvisibleelement"></a>

### `<Const>` hasVisibleElement

▸ **hasVisibleElement**(by: *`By`*): [ElementCondition](../#elementcondition)

*Defined in [conditions.ts:153](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L153)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| by | `By` |

**Returns:** [ElementCondition](../#elementcondition)

___

