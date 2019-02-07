[selenidejs](../README.md) > [query](../modules/query.md) > [collection](../modules/query.collection.md)

# Module: collection

## Index

### Variables

* [size](query.collection.md#size)
* [texts](query.collection.md#texts)

---

## Variables

<a id="size"></a>

### `<Const>` size

**● size**: *`(Anonymous function)`* =  lambda('size', async (collection: Collection) =>
            (await collection.getWebElements()).length)

*Defined in [queries.ts:76](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/queries.ts#L76)*

___
<a id="texts"></a>

### `<Const>` texts

**● texts**: *`(Anonymous function)`* =  lambda('texts', async (collection: Collection) => {
            const webelements = await collection.getWebElements();
            return Promise.all(webelements.map(webElement => webElement.getText()));
        })

*Defined in [queries.ts:79](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/queries.ts#L79)*

___

