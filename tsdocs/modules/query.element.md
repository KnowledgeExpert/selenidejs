[selenidejs](../README.md) > [query](../modules/query.md) > [element](../modules/query.element.md)

# Module: element

## Index

### Variables

* [isVisible](query.element.md#isvisible)

### Functions

* [attribute](query.element.md#attribute)
* [hasText](query.element.md#hastext)
* [isEnabled](query.element.md#isenabled)
* [text](query.element.md#text)

---

## Variables

<a id="isvisible"></a>

### `<Const>` isVisible

**● isVisible**: *`any`* =  lambda('is visible', async (element: Element) =>
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
<a id="isenabled"></a>

###  isEnabled

▸ **isEnabled**(element: *[Element](../classes/element.md)*): `Promise`<`boolean`>

*Defined in [refactor/queries.ts:34](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/refactor/queries.ts#L34)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| element | [Element](../classes/element.md) |

**Returns:** `Promise`<`boolean`>

___
<a id="text"></a>

###  text

▸ **text**(element: *[Element](../classes/element.md)*): `Promise`<`string`>

*Defined in [refactor/queries.ts:38](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/refactor/queries.ts#L38)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| element | [Element](../classes/element.md) |

**Returns:** `Promise`<`string`>

___

