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

*Defined in [conditions.ts:170](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L170)*

___
<a id="isdisabled"></a>

### `<Const>` isDisabled

**● isDisabled**: *[ElementCondition](../#elementcondition)* = 
            Condition.not(isEnabled, 'is disabled')

*Defined in [conditions.ts:163](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L163)*

___
<a id="isenabled"></a>

### `<Const>` isEnabled

**● isEnabled**: *[ElementCondition](../#elementcondition)* = 
            throwIfNot('is enabled', async (element: Element) =>
                (await element.getWebElement()).isEnabled())

*Defined in [conditions.ts:159](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L159)*

___
<a id="isfocused"></a>

### `<Const>` isFocused

**● isFocused**: *[ElementCondition](../#elementcondition)* = 
            throwIfNot('is focused', async (element: Element) =>
                WebElement.equals(
                    await element.executeScript('return document.activeElement') as WebElement,
                    await element.getWebElement()
                ))

*Defined in [conditions.ts:173](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L173)*

___
<a id="ishidden"></a>

### `<Const>` isHidden

**● isHidden**: *[ElementCondition](../#elementcondition)* = 
            Condition.not(isVisible, 'is hidden')

*Defined in [conditions.ts:145](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L145)*

___
<a id="ispresent"></a>

### `<Const>` isPresent

**● isPresent**: *[ElementCondition](../#elementcondition)* = 
            throwIfNot('is present', async (element: Element) =>
                !!(await element.getWebElement()))

*Defined in [conditions.ts:166](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L166)*

___
<a id="isselected"></a>

### `<Const>` isSelected

**● isSelected**: *[ElementCondition](../#elementcondition)* = 
            hasAttribute('elementIsSelected')

*Defined in [conditions.ts:156](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L156)*

___
<a id="isvisible"></a>

### `<Const>` isVisible

**● isVisible**: *[ElementCondition](../#elementcondition)* = 
            throwIfNot('is visible', async (element: Element) =>
                (await element.getWebElement()).isDisplayed())

*Defined in [conditions.ts:141](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L141)*

___

## Functions

<a id="hasattribute"></a>

### `<Const>` hasAttribute

▸ **hasAttribute**(name: *`string`*): [ElementCondition](../#elementcondition)

*Defined in [conditions.ts:152](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L152)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| name | `string` |

**Returns:** [ElementCondition](../#elementcondition)

___
<a id="hasattributewithvalue"></a>

### `<Const>` hasAttributeWithValue

▸ **hasAttributeWithValue**(name: *`string`*, value: *`string`*): [ElementCondition](../#elementcondition)

*Defined in [conditions.ts:188](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L188)*

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

*Defined in [conditions.ts:193](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L193)*

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

*Defined in [conditions.ts:197](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L197)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| cssClass | `string` |

**Returns:** [ElementCondition](../#elementcondition)

___
<a id="hasexacttext"></a>

### `<Const>` hasExactText

▸ **hasExactText**(expected: *`string`*): [ElementCondition](../#elementcondition)

*Defined in [conditions.ts:184](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L184)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| expected | `string` |

**Returns:** [ElementCondition](../#elementcondition)

___
<a id="hastext"></a>

### `<Const>` hasText

▸ **hasText**(expected: *`string`*): [ElementCondition](../#elementcondition)

*Defined in [conditions.ts:180](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L180)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| expected | `string` |

**Returns:** [ElementCondition](../#elementcondition)

___
<a id="hasvisibleelement"></a>

### `<Const>` hasVisibleElement

▸ **hasVisibleElement**(by: *`By`*): [ElementCondition](../#elementcondition)

*Defined in [conditions.ts:148](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L148)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| by | `By` |

**Returns:** [ElementCondition](../#elementcondition)

___

