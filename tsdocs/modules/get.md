[selenidejs](../README.md) > [get](../modules/get.md)

# Module: get

to be used in the following context: `element.click().then(get.text)`

## Index

### Variables

* [currentTab](get.md#currenttab)
* [innerHtml](get.md#innerhtml)
* [outerHtml](get.md#outerhtml)
* [pageSource](get.md#pagesource)
* [size](get.md#size)
* [someText](get.md#sometext)
* [tabs](get.md#tabs)
* [tabsNumber](get.md#tabsnumber)
* [text](get.md#text)
* [texts](get.md#texts)
* [title](get.md#title)
* [url](get.md#url)
* [value](get.md#value)

### Functions

* [attribute](get.md#attribute)
* [tab](get.md#tab)
* [waitingForBrowser](get.md#waitingforbrowser)
* [waitingForCollection](get.md#waitingforcollection)
* [waitingForEntity](get.md#waitingforentity)

---

## Variables

<a id="currenttab"></a>

### `<Const>` currentTab

**● currentTab**: *`(Anonymous function)`* =  waitingForBrowser(query.currentTab)

*Defined in [support/queries/get.ts:56](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/queries/get.ts#L56)*

___
<a id="innerhtml"></a>

### `<Const>` innerHtml

**● innerHtml**: *`(Anonymous function)`* =  waitingForEntity(query.innerHtml)

*Defined in [support/queries/get.ts:35](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/queries/get.ts#L35)*

___
<a id="outerhtml"></a>

### `<Const>` outerHtml

**● outerHtml**: *`(Anonymous function)`* =  waitingForEntity(query.outerHtml)

*Defined in [support/queries/get.ts:36](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/queries/get.ts#L36)*

___
<a id="pagesource"></a>

### `<Const>` pageSource

**● pageSource**: *`(Anonymous function)`* =  waitingForBrowser(query.pageSource)

*Defined in [support/queries/get.ts:58](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/queries/get.ts#L58)*

___
<a id="size"></a>

### `<Const>` size

**● size**: *`(Anonymous function)`* =  waitingForCollection(query.size)

*Defined in [support/queries/get.ts:44](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/queries/get.ts#L44)*

___
<a id="sometext"></a>

### `<Const>` someText

**● someText**: *`(Anonymous function)`* =  waitingForEntity(query.someText)

*Defined in [support/queries/get.ts:33](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/queries/get.ts#L33)*

___
<a id="tabs"></a>

### `<Const>` tabs

**● tabs**: *`(Anonymous function)`* =  waitingForBrowser(query.tabs)

*Defined in [support/queries/get.ts:54](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/queries/get.ts#L54)*

___
<a id="tabsnumber"></a>

### `<Const>` tabsNumber

**● tabsNumber**: *`(Anonymous function)`* =  waitingForBrowser(query.tabsNumber)

*Defined in [support/queries/get.ts:57](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/queries/get.ts#L57)*

___
<a id="text"></a>

### `<Const>` text

**● text**: *`(Anonymous function)`* =  waitingForEntity(query.text)

*Defined in [support/queries/get.ts:32](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/queries/get.ts#L32)*

___
<a id="texts"></a>

### `<Const>` texts

**● texts**: *`(Anonymous function)`* =  waitingForCollection(query.texts)

*Defined in [support/queries/get.ts:45](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/queries/get.ts#L45)*

___
<a id="title"></a>

### `<Const>` title

**● title**: *`(Anonymous function)`* =  waitingForBrowser(query.title)

*Defined in [support/queries/get.ts:53](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/queries/get.ts#L53)*

___
<a id="url"></a>

### `<Const>` url

**● url**: *`(Anonymous function)`* =  waitingForBrowser(query.url)

*Defined in [support/queries/get.ts:52](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/queries/get.ts#L52)*

___
<a id="value"></a>

### `<Const>` value

**● value**: *`(Anonymous function)`* =  waitingForEntity(query.value)

*Defined in [support/queries/get.ts:37](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/queries/get.ts#L37)*

___

## Functions

<a id="attribute"></a>

### `<Const>` attribute

▸ **attribute**(name: *`string`*): `(Anonymous function)`

*Defined in [support/queries/get.ts:34](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/queries/get.ts#L34)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `(Anonymous function)`

___
<a id="tab"></a>

### `<Const>` tab

▸ **tab**(index: *`number`*): `(Anonymous function)`

*Defined in [support/queries/get.ts:55](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/queries/get.ts#L55)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| index | `number` |

**Returns:** `(Anonymous function)`

___
<a id="waitingforbrowser"></a>

### `<Const>` waitingForBrowser

▸ **waitingForBrowser**<`R`>(query: *[Lambda](../#lambda)<[Browser](../classes/browser.md), `R`>*): `(Anonymous function)`

*Defined in [support/queries/get.ts:49](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/queries/get.ts#L49)*

**Type parameters:**

#### R 
**Parameters:**

| Param | Type |
| ------ | ------ |
| query | [Lambda](../#lambda)<[Browser](../classes/browser.md), `R`> |

**Returns:** `(Anonymous function)`

___
<a id="waitingforcollection"></a>

### `<Const>` waitingForCollection

▸ **waitingForCollection**<`R`>(query: *[Lambda](../#lambda)<[Collection](../classes/collection.md), `R`>*): `(Anonymous function)`

*Defined in [support/queries/get.ts:41](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/queries/get.ts#L41)*

**Type parameters:**

#### R 
**Parameters:**

| Param | Type |
| ------ | ------ |
| query | [Lambda](../#lambda)<[Collection](../classes/collection.md), `R`> |

**Returns:** `(Anonymous function)`

___
<a id="waitingforentity"></a>

### `<Const>` waitingForEntity

▸ **waitingForEntity**<`R`>(query: *[Lambda](../#lambda)<[Element](../classes/element.md), `R`>*): `(Anonymous function)`

*Defined in [support/queries/get.ts:29](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/queries/get.ts#L29)*

**Type parameters:**

#### R 
**Parameters:**

| Param | Type |
| ------ | ------ |
| query | [Lambda](../#lambda)<[Element](../classes/element.md), `R`> |

**Returns:** `(Anonymous function)`

___

