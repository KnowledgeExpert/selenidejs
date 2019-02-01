[selenidejs](../README.md) > [query](../modules/query.md) > [element](../modules/query.element.md)

# Module: element

## Index

### Variables

* [isEnabled](query.element.md#isenabled)
* [isFocused](query.element.md#isfocused)
* [isPresent](query.element.md#ispresent)
* [isVisible](query.element.md#isvisible)

### Functions

* [attribute](query.element.md#attribute)
* [hasAttribute](query.element.md#hasattribute)
* [hasText](query.element.md#hastext)
* [text](query.element.md#text)

---

## Variables

<a id="isenabled"></a>

### `<Const>` isEnabled

**● isEnabled**: *`(Anonymous function)`* =  lambda('is enabled', async (element: Element) =>
            (await element.getWebElement()).isEnabled())

*Defined in [refactor/queries.ts:35](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/refactor/queries.ts#L35)*

___
<a id="isfocused"></a>

### `<Const>` isFocused

**● isFocused**: *`(Anonymous function)`* =  lambda('is focused', async (element: Element) =>
            WebElement.equals(
                await element.executeScript('return document.activeElement') as WebElement,
                await element.getWebElement()
            ))

*Defined in [refactor/queries.ts:41](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/refactor/queries.ts#L41)*

___
<a id="ispresent"></a>

### `<Const>` isPresent

**● isPresent**: *`(Anonymous function)`* =  lambda('is present', async (element: Element) =>
            !!(await element.getWebElement()))

*Defined in [refactor/queries.ts:38](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/refactor/queries.ts#L38)*

___
<a id="isvisible"></a>

### `<Const>` isVisible

**● isVisible**: *`(Anonymous function)`* =  lambda('is visible', async (element: Element) =>
            (await element.getWebElement()).isDisplayed())

*Defined in [refactor/queries.ts:32](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/refactor/queries.ts#L32)*

___

## Functions

<a id="attribute"></a>

### `<Const>` attribute

▸ **attribute**(name: *`string`*): `(Anonymous function)`

*Defined in [refactor/queries.ts:62](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/refactor/queries.ts#L62)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `(Anonymous function)`

___
<a id="hasattribute"></a>

### `<Const>` hasAttribute

▸ **hasAttribute**(name: *`string`*): `(Anonymous function)`

*Defined in [refactor/queries.ts:47](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/refactor/queries.ts#L47)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `(Anonymous function)`

___
<a id="hastext"></a>

###  hasText

▸ **hasText**(text: *`string`*): `(Anonymous function)`

*Defined in [refactor/queries.ts:57](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/refactor/queries.ts#L57)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| text | `string` |

**Returns:** `(Anonymous function)`

___
<a id="text"></a>

###  text

▸ **text**(element: *[Element](../classes/element.md)*): `Promise`<`string`>

*Defined in [refactor/queries.ts:52](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/refactor/queries.ts#L52)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| element | [Element](../classes/element.md) |

**Returns:** `Promise`<`string`>

___

