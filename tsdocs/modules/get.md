> **[selenidejs](../README.md)**

[get](get.md) /

# Module: get

to be used in the following context:
  `element.click().then(get.text)`

## Index

### Variables

* [currentTab](get.md#const-currenttab)
* [innerHtml](get.md#const-innerhtml)
* [outerHtml](get.md#const-outerhtml)
* [pageSource](get.md#const-pagesource)
* [size](get.md#const-size)
* [someText](get.md#const-sometext)
* [tabs](get.md#const-tabs)
* [tabsNumber](get.md#const-tabsnumber)
* [text](get.md#const-text)
* [texts](get.md#const-texts)
* [title](get.md#const-title)
* [url](get.md#const-url)
* [value](get.md#const-value)

### Functions

* [attribute](get.md#const-attribute)
* [tab](get.md#const-tab)
* [waitingForBrowser](get.md#const-waitingforbrowser)
* [waitingForCollection](get.md#const-waitingforcollection)
* [waitingForEntity](get.md#const-waitingforentity)

## Variables

### `Const` currentTab

• **currentTab**: *`(Anonymous function)`* =  waitingForBrowser(query.currentTab)

*Defined in [support/queries/get.ts:56](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/queries/get.ts#L56)*

___

### `Const` innerHtml

• **innerHtml**: *`(Anonymous function)`* =  waitingForEntity(query.innerHtml)

*Defined in [support/queries/get.ts:35](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/queries/get.ts#L35)*

___

### `Const` outerHtml

• **outerHtml**: *`(Anonymous function)`* =  waitingForEntity(query.outerHtml)

*Defined in [support/queries/get.ts:36](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/queries/get.ts#L36)*

___

### `Const` pageSource

• **pageSource**: *`(Anonymous function)`* =  waitingForBrowser(query.pageSource)

*Defined in [support/queries/get.ts:58](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/queries/get.ts#L58)*

___

### `Const` size

• **size**: *`(Anonymous function)`* =  waitingForCollection(query.size)

*Defined in [support/queries/get.ts:44](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/queries/get.ts#L44)*

___

### `Const` someText

• **someText**: *`(Anonymous function)`* =  waitingForEntity(query.someText)

*Defined in [support/queries/get.ts:33](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/queries/get.ts#L33)*

___

### `Const` tabs

• **tabs**: *`(Anonymous function)`* =  waitingForBrowser(query.tabs)

*Defined in [support/queries/get.ts:54](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/queries/get.ts#L54)*

___

### `Const` tabsNumber

• **tabsNumber**: *`(Anonymous function)`* =  waitingForBrowser(query.tabsNumber)

*Defined in [support/queries/get.ts:57](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/queries/get.ts#L57)*

___

### `Const` text

• **text**: *`(Anonymous function)`* =  waitingForEntity(query.text)

*Defined in [support/queries/get.ts:32](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/queries/get.ts#L32)*

___

### `Const` texts

• **texts**: *`(Anonymous function)`* =  waitingForCollection(query.texts)

*Defined in [support/queries/get.ts:45](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/queries/get.ts#L45)*

___

### `Const` title

• **title**: *`(Anonymous function)`* =  waitingForBrowser(query.title)

*Defined in [support/queries/get.ts:53](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/queries/get.ts#L53)*

___

### `Const` url

• **url**: *`(Anonymous function)`* =  waitingForBrowser(query.url)

*Defined in [support/queries/get.ts:52](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/queries/get.ts#L52)*

___

### `Const` value

• **value**: *`(Anonymous function)`* =  waitingForEntity(query.value)

*Defined in [support/queries/get.ts:37](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/queries/get.ts#L37)*

## Functions

### `Const` attribute

▸ **attribute**(`name`: string): *`(Anonymous function)`*

*Defined in [support/queries/get.ts:34](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/queries/get.ts#L34)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *`(Anonymous function)`*

___

### `Const` tab

▸ **tab**(`index`: number): *`(Anonymous function)`*

*Defined in [support/queries/get.ts:55](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/queries/get.ts#L55)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *`(Anonymous function)`*

___

### `Const` waitingForBrowser

▸ **waitingForBrowser**<**R**>(`query`: [Lambda](../README.md#lambda)‹*[Browser](../classes/browser.md)*, *`R`*›): *`(Anonymous function)`*

*Defined in [support/queries/get.ts:49](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/queries/get.ts#L49)*

**Type parameters:**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`query` | [Lambda](../README.md#lambda)‹*[Browser](../classes/browser.md)*, *`R`*› |

**Returns:** *`(Anonymous function)`*

___

### `Const` waitingForCollection

▸ **waitingForCollection**<**R**>(`query`: [Lambda](../README.md#lambda)‹*[Collection](../classes/collection.md)*, *`R`*›): *`(Anonymous function)`*

*Defined in [support/queries/get.ts:41](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/queries/get.ts#L41)*

**Type parameters:**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`query` | [Lambda](../README.md#lambda)‹*[Collection](../classes/collection.md)*, *`R`*› |

**Returns:** *`(Anonymous function)`*

___

### `Const` waitingForEntity

▸ **waitingForEntity**<**R**>(`query`: [Lambda](../README.md#lambda)‹*[Element](../classes/element.md)*, *`R`*›): *`(Anonymous function)`*

*Defined in [support/queries/get.ts:29](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/queries/get.ts#L29)*

**Type parameters:**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`query` | [Lambda](../README.md#lambda)‹*[Element](../classes/element.md)*, *`R`*› |

**Returns:** *`(Anonymous function)`*