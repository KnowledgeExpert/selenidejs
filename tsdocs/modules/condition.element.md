> **[selenidejs](../README.md)**

[condition](condition.md) / [element](condition.element.md) /

# Module: element

## Index

### Variables

* [isAbsent](condition.element.md#const-isabsent)
* [isBlank](condition.element.md#const-isblank)
* [isDisabled](condition.element.md#const-isdisabled)
* [isEnabled](condition.element.md#const-isenabled)
* [isFocused](condition.element.md#const-isfocused)
* [isHidden](condition.element.md#const-ishidden)
* [isPresent](condition.element.md#const-ispresent)
* [isSelected](condition.element.md#const-isselected)
* [isVisible](condition.element.md#const-isvisible)

### Functions

* [hasAttribute](condition.element.md#const-hasattribute)
* [hasAttributeWithValue](condition.element.md#const-hasattributewithvalue)
* [hasAttributeWithValueContaining](condition.element.md#const-hasattributewithvaluecontaining)
* [hasCssClass](condition.element.md#const-hascssclass)
* [hasExactText](condition.element.md#const-hasexacttext)
* [hasText](condition.element.md#const-hastext)
* [hasValue](condition.element.md#const-hasvalue)
* [hasValueContaining](condition.element.md#const-hasvaluecontaining)

## Variables

### `Const` isAbsent

• **isAbsent**: *[Condition](../classes/condition.md)‹*Object*›* =  Condition.not(isPresent, 'is absent')

*Defined in [conditions.ts:150](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/conditions.ts#L150)*

___

### `Const` isBlank

• **isBlank**: *any* =  hasExactText('').and(hasValue(''))

*Defined in [conditions.ts:195](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/conditions.ts#L195)*

___

### `Const` isDisabled

• **isDisabled**: *[Condition](../classes/condition.md)‹*Object*›* =  Condition.not(isEnabled, 'is disabled')

*Defined in [conditions.ts:143](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/conditions.ts#L143)*

___

### `Const` isEnabled

• **isEnabled**: *[Condition](../classes/condition.md)‹*Object*›* =  new Condition(
            'is enabled',
            throwIfNot(async (element: Element) => element.getWebElement().then(webelement => webelement.isEnabled()))
        )

*Defined in [conditions.ts:138](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/conditions.ts#L138)*

___

### `Const` isFocused

• **isFocused**: *[Condition](../classes/condition.md)‹*Object*›* =  new Condition(
            'is focused',
            throwIfNot(async (element: Element) =>
                WebElement.equals(
                    await element.executeScript('return document.activeElement') as WebElement,
                    await element.getWebElement()
                ))
        )

*Defined in [conditions.ts:152](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/conditions.ts#L152)*

___

### `Const` isHidden

• **isHidden**: *[Condition](../classes/condition.md)‹*Object*›* =  Condition.not(isVisible, 'is hidden')

*Defined in [conditions.ts:129](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/conditions.ts#L129)*

___

### `Const` isPresent

• **isPresent**: *[Condition](../classes/condition.md)‹*Object*›* =  new Condition(
            'is present',
            throwIfNot(async (element: Element) => element.getWebElement().then(_ => true, _ => false)
            ))

*Defined in [conditions.ts:145](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/conditions.ts#L145)*

___

### `Const` isSelected

• **isSelected**: *[Condition](../classes/condition.md)‹*Object*›* =  hasAttribute('elementIsSelected')

*Defined in [conditions.ts:136](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/conditions.ts#L136)*

___

### `Const` isVisible

• **isVisible**: *[Condition](../classes/condition.md)‹*Object*›* =  new Condition(
            'is visible',
            throwIfNot(async (element: Element) => element.getWebElement().then(webelement => webelement.isDisplayed()))
        )

*Defined in [conditions.ts:124](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/conditions.ts#L124)*

## Functions

### `Const` hasAttribute

▸ **hasAttribute**(`name`: string): *[Condition](../classes/condition.md)‹*Object*›*

*Defined in [conditions.ts:131](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/conditions.ts#L131)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *[Condition](../classes/condition.md)‹*Object*›*

___

### `Const` hasAttributeWithValue

▸ **hasAttributeWithValue**(`name`: string, `value`: string): *[Condition](../classes/condition.md)‹*Object*›*

*Defined in [conditions.ts:171](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/conditions.ts#L171)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`value` | string |

**Returns:** *[Condition](../classes/condition.md)‹*Object*›*

___

### `Const` hasAttributeWithValueContaining

▸ **hasAttributeWithValueContaining**(`name`: string, `partialValue`: string): *[Condition](../classes/condition.md)‹*Object*›*

*Defined in [conditions.ts:177](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/conditions.ts#L177)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`partialValue` | string |

**Returns:** *[Condition](../classes/condition.md)‹*Object*›*

___

### `Const` hasCssClass

▸ **hasCssClass**(`cssClass`: string): *[Condition](../classes/condition.md)‹*Object*›*

*Defined in [conditions.ts:182](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/conditions.ts#L182)*

**Parameters:**

Name | Type |
------ | ------ |
`cssClass` | string |

**Returns:** *[Condition](../classes/condition.md)‹*Object*›*

___

### `Const` hasExactText

▸ **hasExactText**(`expected`: string): *[Condition](../classes/condition.md)‹*Object*›*

*Defined in [conditions.ts:167](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/conditions.ts#L167)*

**Parameters:**

Name | Type |
------ | ------ |
`expected` | string |

**Returns:** *[Condition](../classes/condition.md)‹*Object*›*

___

### `Const` hasText

▸ **hasText**(`expected`: string): *[Condition](../classes/condition.md)‹*Object*›*

*Defined in [conditions.ts:162](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/conditions.ts#L162)*

**Parameters:**

Name | Type |
------ | ------ |
`expected` | string |

**Returns:** *[Condition](../classes/condition.md)‹*Object*›*

___

### `Const` hasValue

▸ **hasValue**(`expected`: string): *[Condition](../classes/condition.md)‹*Object*›*

*Defined in [conditions.ts:187](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/conditions.ts#L187)*

**Parameters:**

Name | Type |
------ | ------ |
`expected` | string |

**Returns:** *[Condition](../classes/condition.md)‹*Object*›*

___

### `Const` hasValueContaining

▸ **hasValueContaining**(`expected`: string): *[Condition](../classes/condition.md)‹*Object*›*

*Defined in [conditions.ts:190](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/conditions.ts#L190)*

**Parameters:**

Name | Type |
------ | ------ |
`expected` | string |

**Returns:** *[Condition](../classes/condition.md)‹*Object*›*