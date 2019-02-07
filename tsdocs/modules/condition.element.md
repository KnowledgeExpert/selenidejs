[selenidejs](../README.md) > [condition](../modules/condition.md) > [element](../modules/condition.element.md)

# Module: element

## Index

### Variables

* [isAbsent](condition.element.md#isabsent)
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
* [hasVisibleElement](condition.element.md#hasvisibleelement)

---

## Variables

<a id="isabsent"></a>

### `<Const>` isAbsent

**● isAbsent**: *[ElementCondition](../#elementcondition)* = 
            Condition.not(isPresent, 'is absent')

*Defined in [conditions.ts:97](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L97)*

___
<a id="isdisabled"></a>

### `<Const>` isDisabled

**● isDisabled**: *[ElementCondition](../#elementcondition)* = 
            Condition.not(isEnabled, 'is disabled')

*Defined in [conditions.ts:90](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L90)*

___
<a id="isenabled"></a>

### `<Const>` isEnabled

**● isEnabled**: *[ElementCondition](../#elementcondition)* = 
            throwIfNot('is enabled', async (element: Element) =>
                (await element.getWebElement()).isEnabled())

*Defined in [conditions.ts:86](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L86)*

___
<a id="isfocused"></a>

### `<Const>` isFocused

**● isFocused**: *[ElementCondition](../#elementcondition)* = 
            throwIfNot('is focused', async (element: Element) =>
                WebElement.equals(
                    await element.executeScript('return document.activeElement') as WebElement,
                    await element.getWebElement()
                ))

*Defined in [conditions.ts:100](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L100)*

___
<a id="ishidden"></a>

### `<Const>` isHidden

**● isHidden**: *[ElementCondition](../#elementcondition)* = 
            Condition.not(isVisible, 'is hidden')

*Defined in [conditions.ts:72](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L72)*

___
<a id="ispresent"></a>

### `<Const>` isPresent

**● isPresent**: *[ElementCondition](../#elementcondition)* = 
            throwIfNot('is present', async (element: Element) =>
                !!(await element.getWebElement()))

*Defined in [conditions.ts:93](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L93)*

___
<a id="isselected"></a>

### `<Const>` isSelected

**● isSelected**: *[ElementCondition](../#elementcondition)* = 
            hasAttribute('elementIsSelected')

*Defined in [conditions.ts:83](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L83)*

___
<a id="isvisible"></a>

### `<Const>` isVisible

**● isVisible**: *[ElementCondition](../#elementcondition)* = 
            throwIfNot('is visible', async (element: Element) =>
                (await element.getWebElement()).isDisplayed())

*Defined in [conditions.ts:68](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L68)*

___

## Functions

<a id="hasattribute"></a>

### `<Const>` hasAttribute

▸ **hasAttribute**(name: *`string`*): [ElementCondition](../#elementcondition)

*Defined in [conditions.ts:79](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L79)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| name | `string` |

**Returns:** [ElementCondition](../#elementcondition)

___
<a id="hasattributewithvalue"></a>

### `<Const>` hasAttributeWithValue

▸ **hasAttributeWithValue**(name: *`string`*, value: *`string`*): [ElementCondition](../#elementcondition)

*Defined in [conditions.ts:115](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L115)*

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

*Defined in [conditions.ts:120](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L120)*

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

*Defined in [conditions.ts:124](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L124)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| cssClass | `string` |

**Returns:** [ElementCondition](../#elementcondition)

___
<a id="hasexacttext"></a>

### `<Const>` hasExactText

▸ **hasExactText**(expected: *`string`*): [ElementCondition](../#elementcondition)

*Defined in [conditions.ts:111](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L111)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| expected | `string` |

**Returns:** [ElementCondition](../#elementcondition)

___
<a id="hastext"></a>

### `<Const>` hasText

▸ **hasText**(expected: *`string`*): [ElementCondition](../#elementcondition)

*Defined in [conditions.ts:107](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L107)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| expected | `string` |

**Returns:** [ElementCondition](../#elementcondition)

___
<a id="hasvisibleelement"></a>

### `<Const>` hasVisibleElement

▸ **hasVisibleElement**(by: *`By`*): [ElementCondition](../#elementcondition)

*Defined in [conditions.ts:75](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L75)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| by | `By` |

**Returns:** [ElementCondition](../#elementcondition)

___

