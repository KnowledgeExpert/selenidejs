[selenidejs](../README.md) > [Browser](../modules/browser.md)

# Module: Browser

## Index

### Variables

* [configuration](browser.md#configuration)
* [driver](browser.md#driver)

### Functions

* [acceptAlert](browser.md#acceptalert)
* [actions](browser.md#actions)
* [all](browser.md#all)
* [clearCacheAndCookies](browser.md#clearcacheandcookies)
* [close](browser.md#close)
* [element](browser.md#element)
* [executeScript](browser.md#executescript)
* [getTabs](browser.md#gettabs)
* [is](browser.md#is)
* [isNot](browser.md#isnot)
* [nextTab](browser.md#nexttab)
* [open](browser.md#open)
* [pageSource](browser.md#pagesource)
* [previousTab](browser.md#previoustab)
* [quit](browser.md#quit)
* [refresh](browser.md#refresh)
* [resizeWindow](browser.md#resizewindow)
* [screenshot](browser.md#screenshot)
* [should](browser.md#should)
* [shouldNot](browser.md#shouldnot)
* [switchToDefaultFrame](browser.md#switchtodefaultframe)
* [switchToFrame](browser.md#switchtoframe)
* [switchToTab](browser.md#switchtotab)
* [title](browser.md#title)
* [url](browser.md#url)

---

## Variables

<a id="configuration"></a>

### `<Const>` configuration

**● configuration**: *[Configuration](../classes/configuration.md)* =  driver.configuration

*Defined in [browser.ts:26](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L26)*

___
<a id="driver"></a>

### `<Const>` driver

**● driver**: *[Driver](../classes/driver.md)* =  new Driver()

*Defined in [browser.ts:25](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L25)*

___

## Functions

<a id="acceptalert"></a>

###  acceptAlert

▸ **acceptAlert**(): `Promise`<`any`>

*Defined in [browser.ts:44](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L44)*

**Returns:** `Promise`<`any`>

___
<a id="actions"></a>

###  actions

▸ **actions**(): `ActionSequence`

*Defined in [browser.ts:68](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L68)*

**Returns:** `ActionSequence`

___
<a id="all"></a>

###  all

▸ **all**(cssOrXpathOrBy: * `string` &#124; `By`*): [Collection](../classes/collection.md)

*Defined in [browser.ts:76](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L76)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| cssOrXpathOrBy |  `string` &#124; `By`|

**Returns:** [Collection](../classes/collection.md)

___
<a id="clearcacheandcookies"></a>

###  clearCacheAndCookies

▸ **clearCacheAndCookies**(): `Promise`<`any`>

*Defined in [browser.ts:127](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L127)*

**Returns:** `Promise`<`any`>

___
<a id="close"></a>

###  close

▸ **close**(): `Promise`<`any`>

*Defined in [browser.ts:32](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L32)*

**Returns:** `Promise`<`any`>

___
<a id="element"></a>

###  element

▸ **element**(cssOrXpathOrBy: * `string` &#124; `By`*): [Element](../classes/element.md)

*Defined in [browser.ts:72](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L72)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| cssOrXpathOrBy |  `string` &#124; `By`|

**Returns:** [Element](../classes/element.md)

___
<a id="executescript"></a>

###  executeScript

▸ **executeScript**(script: * `string` &#124; `Function`*, ...args: *`any`[]*): `Promise`<`any`>

*Defined in [browser.ts:97](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L97)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| script |  `string` &#124; `Function`|
| `Rest` args | `any`[] |

**Returns:** `Promise`<`any`>

___
<a id="gettabs"></a>

###  getTabs

▸ **getTabs**(): `Promise`<`any`>

*Defined in [browser.ts:103](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L103)*

**Returns:** `Promise`<`any`>

___
<a id="is"></a>

###  is

▸ **is**(condition: *[Condition](../classes/condition.md)<[Driver](../classes/driver.md)>*, timeout?: *`number`*): `Promise`<`boolean`>

*Defined in [browser.ts:88](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L88)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [Condition](../classes/condition.md)<[Driver](../classes/driver.md)> |
| `Optional` timeout | `number` |

**Returns:** `Promise`<`boolean`>

___
<a id="isnot"></a>

###  isNot

▸ **isNot**(condition: *[Condition](../classes/condition.md)<[Driver](../classes/driver.md)>*, timeout?: *`number`*): `Promise`<`boolean`>

*Defined in [browser.ts:92](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L92)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [Condition](../classes/condition.md)<[Driver](../classes/driver.md)> |
| `Optional` timeout | `number` |

**Returns:** `Promise`<`boolean`>

___
<a id="nexttab"></a>

###  nextTab

▸ **nextTab**(): `Promise`<`any`>

*Defined in [browser.ts:107](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L107)*

**Returns:** `Promise`<`any`>

___
<a id="open"></a>

###  open

▸ **open**(url: *`string`*): `Promise`<`any`>

*Defined in [browser.ts:28](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L28)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| url | `string` |

**Returns:** `Promise`<`any`>

___
<a id="pagesource"></a>

###  pageSource

▸ **pageSource**(): `Promise`<`string`>

*Defined in [browser.ts:56](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L56)*

**Returns:** `Promise`<`string`>

___
<a id="previoustab"></a>

###  previousTab

▸ **previousTab**(): `Promise`<`any`>

*Defined in [browser.ts:111](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L111)*

**Returns:** `Promise`<`any`>

___
<a id="quit"></a>

###  quit

▸ **quit**(): `Promise`<`any`>

*Defined in [browser.ts:36](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L36)*

**Returns:** `Promise`<`any`>

___
<a id="refresh"></a>

###  refresh

▸ **refresh**(): `Promise`<`any`>

*Defined in [browser.ts:40](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L40)*

**Returns:** `Promise`<`any`>

___
<a id="resizewindow"></a>

###  resizeWindow

▸ **resizeWindow**(width: *`number`*, height: *`number`*): `Promise`<`any`>

*Defined in [browser.ts:64](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L64)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| width | `number` |
| height | `number` |

**Returns:** `Promise`<`any`>

___
<a id="screenshot"></a>

###  screenshot

▸ **screenshot**(): `Promise`<`Buffer`>

*Defined in [browser.ts:60](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L60)*

**Returns:** `Promise`<`Buffer`>

___
<a id="should"></a>

###  should

▸ **should**(condition: *[Condition](../classes/condition.md)<[Driver](../classes/driver.md)>*, timeout?: *`number`*): `Promise`<[Driver](../classes/driver.md)>

*Defined in [browser.ts:80](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L80)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [Condition](../classes/condition.md)<[Driver](../classes/driver.md)> |
| `Optional` timeout | `number` |

**Returns:** `Promise`<[Driver](../classes/driver.md)>

___
<a id="shouldnot"></a>

###  shouldNot

▸ **shouldNot**(condition: *[Condition](../classes/condition.md)<[Driver](../classes/driver.md)>*, timeout?: *`number`*): `Promise`<[Driver](../classes/driver.md)>

*Defined in [browser.ts:84](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L84)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [Condition](../classes/condition.md)<[Driver](../classes/driver.md)> |
| `Optional` timeout | `number` |

**Returns:** `Promise`<[Driver](../classes/driver.md)>

___
<a id="switchtodefaultframe"></a>

###  switchToDefaultFrame

▸ **switchToDefaultFrame**(): `Promise`<`any`>

*Defined in [browser.ts:123](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L123)*

**Returns:** `Promise`<`any`>

___
<a id="switchtoframe"></a>

###  switchToFrame

▸ **switchToFrame**(frameElement: *[Element](../classes/element.md)*): `Promise`<`any`>

*Defined in [browser.ts:119](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L119)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| frameElement | [Element](../classes/element.md) |

**Returns:** `Promise`<`any`>

___
<a id="switchtotab"></a>

###  switchToTab

▸ **switchToTab**(tabId: *`string`*): `Promise`<`any`>

*Defined in [browser.ts:115](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L115)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| tabId | `string` |

**Returns:** `Promise`<`any`>

___
<a id="title"></a>

###  title

▸ **title**(): `Promise`<`string`>

*Defined in [browser.ts:52](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L52)*

**Returns:** `Promise`<`string`>

___
<a id="url"></a>

###  url

▸ **url**(): `Promise`<`string`>

*Defined in [browser.ts:48](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L48)*

**Returns:** `Promise`<`string`>

___

