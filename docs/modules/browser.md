[selenidejs](../README.md) > [Browser](../modules/browser.md)

# Module: Browser

## Index

### Variables

* [config](browser.md#config)
* [selenideDriver](browser.md#selenidedriver)

### Functions

* [acceptAlert](browser.md#acceptalert)
* [actions](browser.md#actions)
* [all](browser.md#all)
* [clearCacheAndCookies](browser.md#clearcacheandcookies)
* [close](browser.md#close)
* [element](browser.md#element)
* [executeScript](browser.md#executescript)
* [get](browser.md#get)
* [getTabs](browser.md#gettabs)
* [is](browser.md#is)
* [isNot](browser.md#isnot)
* [nextTab](browser.md#nexttab)
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

<a id="config"></a>

### `<Let>` config

**● config**: *[Configuration](../classes/configuration.md)*

*Defined in [browser.ts:26](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/browser.ts#L26)*

___
<a id="selenidedriver"></a>

### `<Let>` selenideDriver

**● selenideDriver**: *[Driver](../classes/driver.md)*

*Defined in [browser.ts:25](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/browser.ts#L25)*

___

## Functions

<a id="acceptalert"></a>

###  acceptAlert

▸ **acceptAlert**(): `Promise`<`void`>

*Defined in [browser.ts:51](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/browser.ts#L51)*

**Returns:** `Promise`<`void`>

___
<a id="actions"></a>

###  actions

▸ **actions**(): `ActionSequence`

*Defined in [browser.ts:75](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/browser.ts#L75)*

**Returns:** `ActionSequence`

___
<a id="all"></a>

###  all

▸ **all**(cssOrXpathOrBy: * `string` &#124; `By`*): [Collection](../classes/collection.md)

*Defined in [browser.ts:84](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/browser.ts#L84)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| cssOrXpathOrBy |  `string` &#124; `By`|

**Returns:** [Collection](../classes/collection.md)

___
<a id="clearcacheandcookies"></a>

###  clearCacheAndCookies

▸ **clearCacheAndCookies**(): `Promise`<`void`>

*Defined in [browser.ts:136](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/browser.ts#L136)*

**Returns:** `Promise`<`void`>

___
<a id="close"></a>

###  close

▸ **close**(): `Promise`<`void`>

*Defined in [browser.ts:39](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/browser.ts#L39)*

**Returns:** `Promise`<`void`>

___
<a id="element"></a>

###  element

▸ **element**(cssOrXpathOrBy: * `string` &#124; `By`*): [Element](../classes/element.md)

*Defined in [browser.ts:79](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/browser.ts#L79)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| cssOrXpathOrBy |  `string` &#124; `By`|

**Returns:** [Element](../classes/element.md)

___
<a id="executescript"></a>

###  executeScript

▸ **executeScript**(script: * `string` &#124; `Function`*, ...args: *`any`[]*): `Promise`<`Object`>

*Defined in [browser.ts:106](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/browser.ts#L106)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| script |  `string` &#124; `Function`|
| `Rest` args | `any`[] |

**Returns:** `Promise`<`Object`>

___
<a id="get"></a>

###  get

▸ **get**(url: *`string`*): `Promise`<`void`>

*Defined in [browser.ts:35](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/browser.ts#L35)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| url | `string` |

**Returns:** `Promise`<`void`>

___
<a id="gettabs"></a>

###  getTabs

▸ **getTabs**(): `Promise`<`string`[]>

*Defined in [browser.ts:112](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/browser.ts#L112)*

**Returns:** `Promise`<`string`[]>

___
<a id="is"></a>

###  is

▸ **is**(condition: *[DriverCondition](../classes/drivercondition.md)*, timeout?: *`number`*): `Promise`<`boolean`>

*Defined in [browser.ts:97](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/browser.ts#L97)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [DriverCondition](../classes/drivercondition.md) |
| `Optional` timeout | `number` |

**Returns:** `Promise`<`boolean`>

___
<a id="isnot"></a>

###  isNot

▸ **isNot**(condition: *[DriverCondition](../classes/drivercondition.md)*, timeout?: *`number`*): `Promise`<`boolean`>

*Defined in [browser.ts:101](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/browser.ts#L101)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [DriverCondition](../classes/drivercondition.md) |
| `Optional` timeout | `number` |

**Returns:** `Promise`<`boolean`>

___
<a id="nexttab"></a>

###  nextTab

▸ **nextTab**(): `Promise`<`void`>

*Defined in [browser.ts:116](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/browser.ts#L116)*

**Returns:** `Promise`<`void`>

___
<a id="pagesource"></a>

###  pageSource

▸ **pageSource**(): `Promise`<`string`>

*Defined in [browser.ts:63](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/browser.ts#L63)*

**Returns:** `Promise`<`string`>

___
<a id="previoustab"></a>

###  previousTab

▸ **previousTab**(): `Promise`<`void`>

*Defined in [browser.ts:120](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/browser.ts#L120)*

**Returns:** `Promise`<`void`>

___
<a id="quit"></a>

###  quit

▸ **quit**(): `Promise`<`void`>

*Defined in [browser.ts:43](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/browser.ts#L43)*

**Returns:** `Promise`<`void`>

___
<a id="refresh"></a>

###  refresh

▸ **refresh**(): `Promise`<`void`>

*Defined in [browser.ts:47](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/browser.ts#L47)*

**Returns:** `Promise`<`void`>

___
<a id="resizewindow"></a>

###  resizeWindow

▸ **resizeWindow**(width: *`number`*, height: *`number`*): `Promise`<`void`>

*Defined in [browser.ts:71](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/browser.ts#L71)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| width | `number` |
| height | `number` |

**Returns:** `Promise`<`void`>

___
<a id="screenshot"></a>

###  screenshot

▸ **screenshot**(): `Promise`<`Buffer`>

*Defined in [browser.ts:67](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/browser.ts#L67)*

**Returns:** `Promise`<`Buffer`>

___
<a id="setdriver"></a>

###  setDriver

▸ **setDriver**(driverOrConfiguration: * [Driver](../classes/driver.md) &#124; [Configuration](../classes/configuration.md)*): `void`

*Defined in [browser.ts:28](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/browser.ts#L28)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| driverOrConfiguration |  [Driver](../classes/driver.md) &#124; [Configuration](../classes/configuration.md)|

**Returns:** `void`

___
<a id="should"></a>

###  should

▸ **should**(condition: *[DriverCondition](../classes/drivercondition.md)*, timeout?: *`number`*): `Promise`<[Driver](../classes/driver.md)>

*Defined in [browser.ts:89](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/browser.ts#L89)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [DriverCondition](../classes/drivercondition.md) |
| `Optional` timeout | `number` |

**Returns:** `Promise`<[Driver](../classes/driver.md)>

___
<a id="shouldnot"></a>

###  shouldNot

▸ **shouldNot**(condition: *[DriverCondition](../classes/drivercondition.md)*, timeout?: *`number`*): `Promise`<[Driver](../classes/driver.md)>

*Defined in [browser.ts:93](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/browser.ts#L93)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [DriverCondition](../classes/drivercondition.md) |
| `Optional` timeout | `number` |

**Returns:** `Promise`<[Driver](../classes/driver.md)>

___
<a id="switchtodefaultframe"></a>

###  switchToDefaultFrame

▸ **switchToDefaultFrame**(): `Promise`<`void`>

*Defined in [browser.ts:132](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/browser.ts#L132)*

**Returns:** `Promise`<`void`>

___
<a id="switchtoframe"></a>

###  switchToFrame

▸ **switchToFrame**(frameElement: *[Element](../classes/element.md)*): `Promise`<`void`>

*Defined in [browser.ts:128](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/browser.ts#L128)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| frameElement | [Element](../classes/element.md) |

**Returns:** `Promise`<`void`>

___
<a id="switchtotab"></a>

###  switchToTab

▸ **switchToTab**(tabId: *`string`*): `Promise`<`void`>

*Defined in [browser.ts:124](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/browser.ts#L124)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| tabId | `string` |

**Returns:** `Promise`<`void`>

___
<a id="title"></a>

###  title

▸ **title**(): `Promise`<`string`>

*Defined in [browser.ts:59](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/browser.ts#L59)*

**Returns:** `Promise`<`string`>

___
<a id="url"></a>

###  url

▸ **url**(): `Promise`<`string`>

*Defined in [browser.ts:55](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/browser.ts#L55)*

**Returns:** `Promise`<`string`>

___

