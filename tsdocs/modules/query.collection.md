[selenidejs](../README.md) > [query](../modules/query.md) > [collection](../modules/query.collection.md)

# Module: collection

## Index

### Variables

* [size](query.collection.md#size)

### Functions

* [hasSize](query.collection.md#hassize)
* [texts](query.collection.md#texts)

---

## Variables

<a id="size"></a>

### `<Const>` size

**● size**: *`(Anonymous function)`* =  lambda('size', async (collection: Collection) =>
            (await collection.getWebElements()).length)

*Defined in [refactor/queries.ts:66](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/refactor/queries.ts#L66)*

___

## Functions

<a id="hassize"></a>

### `<Const>` hasSize

▸ **hasSize**(length: *`number`*): `(Anonymous function)`

*Defined in [refactor/queries.ts:69](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/refactor/queries.ts#L69)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| length | `number` |

**Returns:** `(Anonymous function)`

___
<a id="texts"></a>

###  texts

▸ **texts**(collection: *[Collection](../classes/collection.md)*): `Promise`<`string`[]>

*Defined in [refactor/queries.ts:74](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/refactor/queries.ts#L74)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| collection | [Collection](../classes/collection.md) |

**Returns:** `Promise`<`string`[]>

___

