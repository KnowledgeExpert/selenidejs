[selenidejs](../README.md) > [query](../modules/query.md) > [collection](../modules/query.collection.md)

# Module: collection

## Index

### Variables

* [size](query.collection.md#size)
* [texts](query.collection.md#texts)

### Functions

* [hasSize](query.collection.md#hassize)

---

## Variables

<a id="size"></a>

### `<Const>` size

**● size**: *`(Anonymous function)`* =  lambda('size', async (collection: Collection) =>
            (await collection.getWebElements()).length)

*Defined in [refactor/queries.ts:86](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/refactor/queries.ts#L86)*

___
<a id="texts"></a>

### `<Const>` texts

**● texts**: *`(Anonymous function)`* =  lambda('texts', async (collection: Collection) => {
            const webelements = await collection.getWebElements();
            return Promise.all(webelements.map(webElement => webElement.getText()));
        })

*Defined in [refactor/queries.ts:94](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/refactor/queries.ts#L94)*

___

## Functions

<a id="hassize"></a>

### `<Const>` hasSize

▸ **hasSize**(length: *`number`*): `(Anonymous function)`

*Defined in [refactor/queries.ts:89](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/refactor/queries.ts#L89)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| length | `number` |

**Returns:** `(Anonymous function)`

___

