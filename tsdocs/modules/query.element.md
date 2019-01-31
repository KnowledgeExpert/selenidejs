[selenidejs](../README.md) > [query](../modules/query.md) > [element](../modules/query.element.md)

# Module: element

## Index

### Variables

* [isEnabled](query.element.md#isenabled)
* [isVisible](query.element.md#isvisible)

### Functions

* [attribute](query.element.md#attribute)
* [hasText](query.element.md#hastext)
* [text](query.element.md#text)

---

## Variables

<a id="isenabled"></a>

### `<Const>` isEnabled

**● isEnabled**: *`(Anonymous function)`* =  lambda('is enabled', async (element: Element) =>
            (await element.getWebElement()).isEnabled())

*Defined in [refactor/queries.ts:34](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/refactor/queries.ts#L34)*

___
<a id="isvisible"></a>

### `<Const>` isVisible

**● isVisible**: *`(Anonymous function)`* =  lambda('is visible', async (element: Element) =>
            (await element.getWebElement()).isDisplayed())

*Defined in [refactor/queries.ts:31](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/refactor/queries.ts#L31)*

___

## Functions

<a id="attribute"></a>

### `<Const>` attribute

▸ **attribute**(name: *`string`*): `(Anonymous function)`

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

*Defined in [refactor/queries.ts:42](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/refactor/queries.ts#L42)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| text | `string` |

**Returns:** `(Anonymous function)`

___
<a id="text"></a>

###  text

▸ **text**(element: *[Element](../classes/element.md)*): `Promise`<`string`>

*Defined in [refactor/queries.ts:37](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/refactor/queries.ts#L37)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| element | [Element](../classes/element.md) |

**Returns:** `Promise`<`string`>

___

