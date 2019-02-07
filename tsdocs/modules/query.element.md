[selenidejs](../README.md) > [query](../modules/query.md) > [element](../modules/query.element.md)

# Module: element

## Index

### Variables

* [innerHtml](query.element.md#innerhtml)
* [outerHtml](query.element.md#outerhtml)
* [someText](query.element.md#sometext)
* [text](query.element.md#text)
* [value](query.element.md#value)

### Functions

* [attribute](query.element.md#attribute)

---

## Variables

<a id="innerhtml"></a>

### `<Const>` innerHtml

**● innerHtml**: *`(Anonymous function)`* =  attribute('innerHTML')

*Defined in [queries.ts:66](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/queries.ts#L66)*

___
<a id="outerhtml"></a>

### `<Const>` outerHtml

**● outerHtml**: *`(Anonymous function)`* =  attribute('outerHTML')

*Defined in [queries.ts:68](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/queries.ts#L68)*

___
<a id="sometext"></a>

### `<Const>` someText

**● someText**: *`(Anonymous function)`* =  lambda('some nonempty visible text', async (element: Element) => {
            const text = await (await element.getWebElement()).getText();
            if (!text) {
                throw new Error('there is no visible nonempty text');
            }
            return text;
        })

*Defined in [queries.ts:54](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/queries.ts#L54)*

___
<a id="text"></a>

### `<Const>` text

**● text**: *`(Anonymous function)`* =  lambda('text', async (element: Element) =>
            (await element.getWebElement()).getText())

*Defined in [queries.ts:51](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/queries.ts#L51)*

___
<a id="value"></a>

### `<Const>` value

**● value**: *`(Anonymous function)`* =  attribute('value')

*Defined in [queries.ts:70](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/queries.ts#L70)*

___

## Functions

<a id="attribute"></a>

### `<Const>` attribute

▸ **attribute**(name: *`string`*): `(Anonymous function)`

*Defined in [queries.ts:62](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/queries.ts#L62)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `(Anonymous function)`

___

