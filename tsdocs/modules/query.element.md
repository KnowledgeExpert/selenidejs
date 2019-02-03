[selenidejs](../README.md) > [query](../modules/query.md) > [element](../modules/query.element.md)

# Module: element

## Index

### Variables

* [isEnabled](query.element.md#isenabled)
* [isFocused](query.element.md#isfocused)
* [isPresent](query.element.md#ispresent)
* [isVisible](query.element.md#isvisible)
* [text](query.element.md#text)

### Functions

* [attribute](query.element.md#attribute)
* [hasAttribute](query.element.md#hasattribute)
* [hasText](query.element.md#hastext)
* [hasVisibleElement](query.element.md#hasvisibleelement)

---

## Variables

<a id="isenabled"></a>

### `<Const>` isEnabled

**● isEnabled**: *`(Anonymous function)`* =  lambda('is enabled', async (element: Element) =>
            (await element.getWebElement()).isEnabled())

*Defined in [refactor/queries.ts:40](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/refactor/queries.ts#L40)*

___
<a id="isfocused"></a>

### `<Const>` isFocused

**● isFocused**: *`(Anonymous function)`* =  lambda('is focused', async (element: Element) =>
            WebElement.equals(
                await element.executeScript('return document.activeElement') as WebElement,
                await element.getWebElement()
            ))

*Defined in [refactor/queries.ts:46](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/refactor/queries.ts#L46)*

___
<a id="ispresent"></a>

### `<Const>` isPresent

**● isPresent**: *`(Anonymous function)`* =  lambda('is present', async (element: Element) =>
            !!(await element.getWebElement()))

*Defined in [refactor/queries.ts:43](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/refactor/queries.ts#L43)*

___
<a id="isvisible"></a>

### `<Const>` isVisible

**● isVisible**: *`(Anonymous function)`* =  lambda('is visible', async (element: Element) =>
            (await element.getWebElement()).isDisplayed())

*Defined in [refactor/queries.ts:32](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/refactor/queries.ts#L32)*

___
<a id="text"></a>

### `<Const>` text

**● text**: *`(Anonymous function)`* =  lambda('text', async (element: Element) =>
            (await element.getWebElement()).getText())

*Defined in [refactor/queries.ts:57](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/refactor/queries.ts#L57)*

___

## Functions

<a id="attribute"></a>

### `<Const>` attribute

▸ **attribute**(name: *`string`*): `(Anonymous function)`

*Defined in [refactor/queries.ts:65](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/refactor/queries.ts#L65)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `(Anonymous function)`

___
<a id="hasattribute"></a>

### `<Const>` hasAttribute

▸ **hasAttribute**(name: *`string`*): `(Anonymous function)`

*Defined in [refactor/queries.ts:52](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/refactor/queries.ts#L52)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `(Anonymous function)`

___
<a id="hastext"></a>

###  hasText

▸ **hasText**(text: *`string`*): `(Anonymous function)`

*Defined in [refactor/queries.ts:60](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/refactor/queries.ts#L60)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| text | `string` |

**Returns:** `(Anonymous function)`

___
<a id="hasvisibleelement"></a>

### `<Const>` hasVisibleElement

▸ **hasVisibleElement**(by: *`By`*): `(Anonymous function)`

*Defined in [refactor/queries.ts:35](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/refactor/queries.ts#L35)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| by | `By` |

**Returns:** `(Anonymous function)`

___

