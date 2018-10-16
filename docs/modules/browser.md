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
* [setDriver](browser.md#setdriver)
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

### `<Let>` configuration

**● configuration**: *[Configuration](../classes/configuration.md)* =  driver.configuration

*Defined in [browser.ts:26](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L26)*

___
<a id="driver"></a>

### `<Let>` driver

**● driver**: *[Driver](../classes/driver.md)* =  new Driver({})

*Defined in [browser.ts:25](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L25)*

___

## Functions

<a id="acceptalert"></a>

###  acceptAlert

▸ **acceptAlert**(): `Promise`<`any`>

*Defined in [browser.ts:49](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L49)*

**Returns:** `Promise`<`any`>

___
<a id="actions"></a>

###  actions

▸ **actions**(): `ActionSequence`

*Defined in [browser.ts:73](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L73)*

**Returns:** `ActionSequence`

___
<a id="all"></a>

###  all

▸ **all**(cssOrXpathOrBy: * `string` &#124; `By`*): [Collection](../classes/collection.md)

*Defined in [browser.ts:81](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L81)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| cssOrXpathOrBy |  `string` &#124; `By`|

**Returns:** [Collection](../classes/collection.md)

___
<a id="clearcacheandcookies"></a>

###  clearCacheAndCookies

▸ **clearCacheAndCookies**(): `Promise`<`any`>

*Defined in [browser.ts:132](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L132)*

**Returns:** `Promise`<`any`>

___
<a id="close"></a>

###  close

▸ **close**(): `Promise`<`any`>

*Defined in [browser.ts:37](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L37)*

**Returns:** `Promise`<`any`>

___
<a id="element"></a>

###  element

▸ **element**(cssOrXpathOrBy: * `string` &#124; `By`*): [Element](../classes/element.md)

*Defined in [browser.ts:77](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L77)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| cssOrXpathOrBy |  `string` &#124; `By`|

**Returns:** [Element](../classes/element.md)

___
<a id="executescript"></a>

###  executeScript

▸ **executeScript**(script: * `string` &#124; `Function`*, ...args: *`any`[]*): `Promise`<`any`>

*Defined in [browser.ts:102](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L102)*

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

*Defined in [browser.ts:108](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L108)*

**Returns:** `Promise`<`any`>

___
<a id="is"></a>

###  is

▸ **is**(condition: *[Condition](../classes/condition.md)<[Driver](../classes/driver.md)>*, timeout?: *`number`*): `Promise`<`boolean`>

*Defined in [browser.ts:93](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L93)*

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

*Defined in [browser.ts:97](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L97)*

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

*Defined in [browser.ts:112](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L112)*

**Returns:** `Promise`<`any`>

___
<a id="open"></a>

###  open

▸ **open**(url: *`string`*): `Promise`<`any`>

*Defined in [browser.ts:33](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L33)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| url | `string` |

**Returns:** `Promise`<`any`>

___
<a id="pagesource"></a>

###  pageSource

▸ **pageSource**(): `Promise`<`string`>

*Defined in [browser.ts:61](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L61)*

**Returns:** `Promise`<`string`>

___
<a id="previoustab"></a>

###  previousTab

▸ **previousTab**(): `Promise`<`any`>

*Defined in [browser.ts:116](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L116)*

**Returns:** `Promise`<`any`>

___
<a id="quit"></a>

###  quit

▸ **quit**(): `Promise`<`any`>

*Defined in [browser.ts:41](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L41)*

**Returns:** `Promise`<`any`>

___
<a id="refresh"></a>

###  refresh

▸ **refresh**(): `Promise`<`any`>

*Defined in [browser.ts:45](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L45)*

**Returns:** `Promise`<`any`>

___
<a id="resizewindow"></a>

###  resizeWindow

▸ **resizeWindow**(width: *`number`*, height: *`number`*): `Promise`<`any`>

*Defined in [browser.ts:69](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L69)*

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

*Defined in [browser.ts:65](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L65)*

**Returns:** `Promise`<`Buffer`>

___
<a id="setdriver"></a>

###  setDriver

▸ **setDriver**(customConfiguration: *[Configuration](../classes/configuration.md)*): `void`

*Defined in [browser.ts:28](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L28)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| customConfiguration | [Configuration](../classes/configuration.md) |

**Returns:** `void`

___
<a id="should"></a>

###  should

▸ **should**(condition: *[Condition](../classes/condition.md)<[Driver](../classes/driver.md)>*, timeout?: *`number`*): `Promise`<[Driver](../classes/driver.md)>

*Defined in [browser.ts:85](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L85)*

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

*Defined in [browser.ts:89](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L89)*

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

*Defined in [browser.ts:128](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L128)*

**Returns:** `Promise`<`any`>

___
<a id="switchtoframe"></a>

###  switchToFrame

▸ **switchToFrame**(frameElement: *[Element](../classes/element.md)*): `Promise`<`any`>

*Defined in [browser.ts:124](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L124)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| frameElement | [Element](../classes/element.md) |

**Returns:** `Promise`<`any`>

___
<a id="switchtotab"></a>

###  switchToTab

▸ **switchToTab**(tabId: *`string`*): `Promise`<`any`>

*Defined in [browser.ts:120](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L120)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| tabId | `string` |

**Returns:** `Promise`<`any`>

___
<a id="title"></a>

###  title

▸ **title**(): `Promise`<`string`>

*Defined in [browser.ts:57](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L57)*

**Returns:** `Promise`<`string`>

___
<a id="url"></a>

###  url

▸ **url**(): `Promise`<`string`>

*Defined in [browser.ts:53](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L53)*

**Returns:** `Promise`<`string`>

___

