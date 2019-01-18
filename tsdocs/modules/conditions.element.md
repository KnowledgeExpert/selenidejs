[selenidejs](../README.md) > [Conditions](../modules/conditions.md) > [element](../modules/conditions.element.md)

# Module: element

## Index

### Variables

* [isAbsent](conditions.element.md#isabsent)
* [isDisabled](conditions.element.md#isdisabled)
* [isEnabled](conditions.element.md#isenabled)
* [isFocused](conditions.element.md#isfocused)
* [isHidden](conditions.element.md#ishidden)
* [isPresent](conditions.element.md#ispresent)
* [isSelected](conditions.element.md#isselected)
* [isVisible](conditions.element.md#isvisible)

### Functions

* [hasAttribute](conditions.element.md#hasattribute)
* [hasAttributeWithValue](conditions.element.md#hasattributewithvalue)
* [hasAttributeWithValueContaining](conditions.element.md#hasattributewithvaluecontaining)
* [hasCssClass](conditions.element.md#hascssclass)
* [hasExactText](conditions.element.md#hasexacttext)
* [hasText](conditions.element.md#hastext)
* [hasVisibleElement](conditions.element.md#hasvisibleelement)

---

## Variables

<a id="isabsent"></a>

### `<Const>` isAbsent

**● isAbsent**: *[ElementCondition](../#elementcondition)* = 
            Condition.not(isPresent, 'is absent')

*Defined in [conditions.ts:116](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L116)*

___
<a id="isdisabled"></a>

### `<Const>` isDisabled

**● isDisabled**: *[ElementCondition](../#elementcondition)* = 
            Condition.not(isEnabled, 'is disabled')

*Defined in [conditions.ts:108](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L108)*

___
<a id="isenabled"></a>

### `<Const>` isEnabled

**● isEnabled**: *[ElementCondition](../#elementcondition)* = 
            described('is enabled', query.element.isEnabled)

*Defined in [conditions.ts:105](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L105)*

___
<a id="isfocused"></a>

### `<Const>` isFocused

**● isFocused**: *[ElementCondition](../#elementcondition)* = 
            described('is focused', async (element: Element) =>
                WebElement.equals(
                    await element.executeScript('return document.activeElement') as WebElement,
                    await element.getWebElement()
                )
            )

*Defined in [conditions.ts:119](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L119)*

___
<a id="ishidden"></a>

### `<Const>` isHidden

**● isHidden**: *[ElementCondition](../#elementcondition)* = 
            Condition.not(isVisible, 'is hidden')

*Defined in [conditions.ts:93](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L93)*

___
<a id="ispresent"></a>

### `<Const>` isPresent

**● isPresent**: *[ElementCondition](../#elementcondition)* = 
            described('is present', async (element: Element) =>
                !!(await element.getWebElement())
            )

*Defined in [conditions.ts:111](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L111)*

___
<a id="isselected"></a>

### `<Const>` isSelected

**● isSelected**: *[ElementCondition](../#elementcondition)* = 
            hasAttribute('elementIsSelected')

*Defined in [conditions.ts:102](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L102)*

___
<a id="isvisible"></a>

### `<Const>` isVisible

**● isVisible**: *[ElementCondition](../#elementcondition)* = 
            described(undefined, query.element.isVisible)

*Defined in [conditions.ts:90](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L90)*

___

## Functions

<a id="hasattribute"></a>

###  hasAttribute

▸ **hasAttribute**(name: *`string`*): [ElementCondition](../#elementcondition)

*Defined in [conditions.ts:127](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L127)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| name | `string` |

**Returns:** [ElementCondition](../#elementcondition)

___
<a id="hasattributewithvalue"></a>

###  hasAttributeWithValue

▸ **hasAttributeWithValue**(name: *`string`*, value: *`string`*): [ElementCondition](../#elementcondition)

*Defined in [conditions.ts:150](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L150)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| name | `string` |
| value | `string` |

**Returns:** [ElementCondition](../#elementcondition)

___
<a id="hasattributewithvaluecontaining"></a>

###  hasAttributeWithValueContaining

▸ **hasAttributeWithValueContaining**(name: *`string`*, partialValue: *`string`*): [ElementCondition](../#elementcondition)

*Defined in [conditions.ts:158](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L158)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| name | `string` |
| partialValue | `string` |

**Returns:** [ElementCondition](../#elementcondition)

___
<a id="hascssclass"></a>

###  hasCssClass

▸ **hasCssClass**(cssClass: *`string`*): [ElementCondition](../#elementcondition)

*Defined in [conditions.ts:166](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L166)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| cssClass | `string` |

**Returns:** [ElementCondition](../#elementcondition)

___
<a id="hasexacttext"></a>

###  hasExactText

▸ **hasExactText**(text: *`string`*): [ElementCondition](../#elementcondition)

*Defined in [conditions.ts:142](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L142)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| text | `string` |

**Returns:** [ElementCondition](../#elementcondition)

___
<a id="hastext"></a>

###  hasText

▸ **hasText**(text: *`string`*): [ElementCondition](../#elementcondition)

*Defined in [conditions.ts:134](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L134)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| text | `string` |

**Returns:** [ElementCondition](../#elementcondition)

___
<a id="hasvisibleelement"></a>

###  hasVisibleElement

▸ **hasVisibleElement**(by: *`By`*): [ElementCondition](../#elementcondition)

*Defined in [conditions.ts:96](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L96)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| by | `By` |

**Returns:** [ElementCondition](../#elementcondition)

___

