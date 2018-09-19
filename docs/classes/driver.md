[selenidejs](../README.md) > [Driver](../classes/driver.md)

# Class: Driver

## Hierarchy

**Driver**

## Index

### Constructors

* [constructor](driver.md#constructor)

### Properties

* [config](driver.md#config)
* [wait](driver.md#wait)

### Methods

* [acceptAlert](driver.md#acceptalert)
* [actions](driver.md#actions)
* [all](driver.md#all)
* [clearCacheAndCookies](driver.md#clearcacheandcookies)
* [close](driver.md#close)
* [element](driver.md#element)
* [executeScript](driver.md#executescript)
* [get](driver.md#get)
* [getTabs](driver.md#gettabs)
* [is](driver.md#is)
* [isNot](driver.md#isnot)
* [nextTab](driver.md#nexttab)
* [pageSource](driver.md#pagesource)
* [previousTab](driver.md#previoustab)
* [quit](driver.md#quit)
* [refresh](driver.md#refresh)
* [resizeWindow](driver.md#resizewindow)
* [screenshot](driver.md#screenshot)
* [should](driver.md#should)
* [shouldNot](driver.md#shouldnot)
* [switchToDefaultFrame](driver.md#switchtodefaultframe)
* [switchToFrame](driver.md#switchtoframe)
* [switchToTab](driver.md#switchtotab)
* [title](driver.md#title)
* [toString](driver.md#tostring)
* [url](driver.md#url)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Driver**(config?: *[Configuration](configuration.md)*): [Driver](driver.md)

*Defined in [driver.ts:32](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/driver.ts#L32)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` config | [Configuration](configuration.md) |  {} as Configuration |

**Returns:** [Driver](driver.md)

___

## Properties

<a id="config"></a>

###  config

**● config**: *[Configuration](configuration.md)*

*Defined in [driver.ts:31](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/driver.ts#L31)*

___
<a id="wait"></a>

###  wait

**● wait**: *[Wait](wait.md)<[Driver](driver.md)>*

*Defined in [driver.ts:32](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/driver.ts#L32)*

___

## Methods

<a id="acceptalert"></a>

###  acceptAlert

▸ **acceptAlert**(): `Promise`<`void`>

*Defined in [driver.ts:58](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/driver.ts#L58)*

**Returns:** `Promise`<`void`>

___
<a id="actions"></a>

###  actions

▸ **actions**(): `ActionSequence`

*Defined in [driver.ts:84](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/driver.ts#L84)*

**Returns:** `ActionSequence`

___
<a id="all"></a>

###  all

▸ **all**(cssOrXpathOrBy: * `string` &#124; `By`*): [Collection](collection.md)

*Defined in [driver.ts:94](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/driver.ts#L94)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| cssOrXpathOrBy |  `string` &#124; `By`|

**Returns:** [Collection](collection.md)

___
<a id="clearcacheandcookies"></a>

###  clearCacheAndCookies

▸ **clearCacheAndCookies**(): `Promise`<`void`>

*Defined in [driver.ts:162](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/driver.ts#L162)*

**Returns:** `Promise`<`void`>

___
<a id="close"></a>

###  close

▸ **close**(): `Promise`<`void`>

*Defined in [driver.ts:46](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/driver.ts#L46)*

**Returns:** `Promise`<`void`>

___
<a id="element"></a>

###  element

▸ **element**(cssOrXpathOrBy: * `string` &#124; `By`*): [Element](element.md)

*Defined in [driver.ts:88](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/driver.ts#L88)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| cssOrXpathOrBy |  `string` &#124; `By`|

**Returns:** [Element](element.md)

___
<a id="executescript"></a>

###  executeScript

▸ **executeScript**(script: * `string` &#124; `Function`*, ...args: *`any`[]*): `Promise`<`Object`>

*Defined in [driver.ts:121](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/driver.ts#L121)*

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

*Defined in [driver.ts:39](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/driver.ts#L39)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| url | `string` |

**Returns:** `Promise`<`void`>

___
<a id="gettabs"></a>

###  getTabs

▸ **getTabs**(): `Promise`<`string`[]>

*Defined in [driver.ts:127](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/driver.ts#L127)*

**Returns:** `Promise`<`string`[]>

___
<a id="is"></a>

###  is

▸ **is**(condition: *[DriverCondition](drivercondition.md)*, timeout?: *`number`*): `Promise`<`boolean`>

*Defined in [driver.ts:110](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/driver.ts#L110)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [DriverCondition](drivercondition.md) |
| `Optional` timeout | `number` |

**Returns:** `Promise`<`boolean`>

___
<a id="isnot"></a>

###  isNot

▸ **isNot**(condition: *[DriverCondition](drivercondition.md)*, timeout?: *`number`*): `Promise`<`boolean`>

*Defined in [driver.ts:116](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/driver.ts#L116)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [DriverCondition](drivercondition.md) |
| `Optional` timeout | `number` |

**Returns:** `Promise`<`boolean`>

___
<a id="nexttab"></a>

###  nextTab

▸ **nextTab**(): `Promise`<`void`>

*Defined in [driver.ts:131](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/driver.ts#L131)*

**Returns:** `Promise`<`void`>

___
<a id="pagesource"></a>

###  pageSource

▸ **pageSource**(): `Promise`<`string`>

*Defined in [driver.ts:70](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/driver.ts#L70)*

**Returns:** `Promise`<`string`>

___
<a id="previoustab"></a>

###  previousTab

▸ **previousTab**(): `Promise`<`void`>

*Defined in [driver.ts:140](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/driver.ts#L140)*

**Returns:** `Promise`<`void`>

___
<a id="quit"></a>

###  quit

▸ **quit**(): `Promise`<`void`>

*Defined in [driver.ts:50](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/driver.ts#L50)*

**Returns:** `Promise`<`void`>

___
<a id="refresh"></a>

###  refresh

▸ **refresh**(): `Promise`<`void`>

*Defined in [driver.ts:54](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/driver.ts#L54)*

**Returns:** `Promise`<`void`>

___
<a id="resizewindow"></a>

###  resizeWindow

▸ **resizeWindow**(width: *`number`*, height: *`number`*): `Promise`<`void`>

*Defined in [driver.ts:80](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/driver.ts#L80)*

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

*Defined in [driver.ts:74](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/driver.ts#L74)*

**Returns:** `Promise`<`Buffer`>

___
<a id="should"></a>

###  should

▸ **should**(condition: *[DriverCondition](drivercondition.md)*, timeout?: *`number`*): `Promise`<[Driver](driver.md)>

*Defined in [driver.ts:100](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/driver.ts#L100)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [DriverCondition](drivercondition.md) |
| `Optional` timeout | `number` |

**Returns:** `Promise`<[Driver](driver.md)>

___
<a id="shouldnot"></a>

###  shouldNot

▸ **shouldNot**(condition: *[DriverCondition](drivercondition.md)*, timeout?: *`number`*): `Promise`<[Driver](driver.md)>

*Defined in [driver.ts:106](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/driver.ts#L106)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [DriverCondition](drivercondition.md) |
| `Optional` timeout | `number` |

**Returns:** `Promise`<[Driver](driver.md)>

___
<a id="switchtodefaultframe"></a>

###  switchToDefaultFrame

▸ **switchToDefaultFrame**(): `Promise`<`void`>

*Defined in [driver.ts:158](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/driver.ts#L158)*

**Returns:** `Promise`<`void`>

___
<a id="switchtoframe"></a>

###  switchToFrame

▸ **switchToFrame**(frameElement: *[Element](element.md)*): `Promise`<`void`>

*Defined in [driver.ts:153](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/driver.ts#L153)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| frameElement | [Element](element.md) |

**Returns:** `Promise`<`void`>

___
<a id="switchtotab"></a>

###  switchToTab

▸ **switchToTab**(tabId: *`string`*): `Promise`<`void`>

*Defined in [driver.ts:149](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/driver.ts#L149)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| tabId | `string` |

**Returns:** `Promise`<`void`>

___
<a id="title"></a>

###  title

▸ **title**(): `Promise`<`string`>

*Defined in [driver.ts:66](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/driver.ts#L66)*

**Returns:** `Promise`<`string`>

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Defined in [driver.ts:171](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/driver.ts#L171)*

**Returns:** `string`

___
<a id="url"></a>

###  url

▸ **url**(): `Promise`<`string`>

*Defined in [driver.ts:62](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/driver.ts#L62)*

**Returns:** `Promise`<`string`>

___

