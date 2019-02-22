[selenidejs](../README.md) > [find](../modules/find.md)

# Module: find

## Index

### Functions

* [alert](find.md#alert)
* [all](find.md#all)
* [element](find.md#element)
* [elementAt](find.md#elementat)
* [elementBy](find.md#elementby)
* [filteredBy](find.md#filteredby)
* [first](find.md#first)
* [followingSibling](find.md#followingsibling)
* [parent](find.md#parent)

---

## Functions

<a id="alert"></a>

### `<Const>` alert

▸ **alert**(browser: *[Browser](../classes/browser.md)*): `AlertPromise`

*Defined in [support/elements/find.ts:49](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/elements/find.ts#L49)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| browser | [Browser](../classes/browser.md) |

**Returns:** `AlertPromise`

___
<a id="all"></a>

### `<Const>` all

▸ **all**(cssOrXpathOrBy: * `string` &#124; `By`*): `(Anonymous function)`

*Defined in [support/elements/find.ts:28](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/elements/find.ts#L28)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| cssOrXpathOrBy |  `string` &#124; `By`|

**Returns:** `(Anonymous function)`

___
<a id="element"></a>

### `<Const>` element

▸ **element**(cssOrXpathOrBy: * `string` &#124; `By`*): `(Anonymous function)`

*Defined in [support/elements/find.ts:25](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/elements/find.ts#L25)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| cssOrXpathOrBy |  `string` &#124; `By`|

**Returns:** `(Anonymous function)`

___
<a id="elementat"></a>

### `<Const>` elementAt

▸ **elementAt**(index: *`number`*): `(Anonymous function)`

*Defined in [support/elements/find.ts:40](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/elements/find.ts#L40)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| index | `number` |

**Returns:** `(Anonymous function)`

___
<a id="elementby"></a>

### `<Const>` elementBy

▸ **elementBy**(condition: *[ElementCondition](../#elementcondition)*): `(Anonymous function)`

*Defined in [support/elements/find.ts:43](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/elements/find.ts#L43)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [ElementCondition](../#elementcondition) |

**Returns:** `(Anonymous function)`

___
<a id="filteredby"></a>

### `<Const>` filteredBy

▸ **filteredBy**(condition: *[ElementCondition](../#elementcondition)*): `(Anonymous function)`

*Defined in [support/elements/find.ts:45](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/elements/find.ts#L45)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [ElementCondition](../#elementcondition) |

**Returns:** `(Anonymous function)`

___
<a id="first"></a>

### `<Const>` first

▸ **first**(collection: *[Collection](../classes/collection.md)*): [Element](../classes/element.md)

*Defined in [support/elements/find.ts:42](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/elements/find.ts#L42)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| collection | [Collection](../classes/collection.md) |

**Returns:** [Element](../classes/element.md)

___
<a id="followingsibling"></a>

### `<Const>` followingSibling

▸ **followingSibling**(predicate?: *`string`*): `(Anonymous function)`

*Defined in [support/elements/find.ts:33](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/elements/find.ts#L33)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` predicate | `string` | &quot;&quot; |

**Returns:** `(Anonymous function)`

___
<a id="parent"></a>

### `<Const>` parent

▸ **parent**(element: *[Element](../classes/element.md)*): [Element](../classes/element.md)

*Defined in [support/elements/find.ts:32](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/elements/find.ts#L32)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| element | [Element](../classes/element.md) |

**Returns:** [Element](../classes/element.md)

___

