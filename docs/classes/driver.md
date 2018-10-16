[selenidejs](../README.md) > [Driver](../classes/driver.md)

# Class: Driver

## Hierarchy

**Driver**

## Implements

* [SearchContext](../interfaces/searchcontext.md)

## Index

### Constructors

* [constructor](driver.md#constructor)

### Properties

* [configuration](driver.md#configuration)
* [wait](driver.md#wait)

### Methods

* [acceptAlert](driver.md#acceptalert)
* [actions](driver.md#actions)
* [all](driver.md#all)
* [clearCacheAndCookies](driver.md#clearcacheandcookies)
* [close](driver.md#close)
* [element](driver.md#element)
* [executeScript](driver.md#executescript)
* [findElement](driver.md#findelement)
* [findElements](driver.md#findelements)
* [getTabs](driver.md#gettabs)
* [is](driver.md#is)
* [isNot](driver.md#isnot)
* [nextTab](driver.md#nexttab)
* [open](driver.md#open)
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

⊕ **new Driver**(customConfiguration: *[Configuration](configuration.md)*): [Driver](driver.md)

*Defined in [driver.ts:29](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/driver.ts#L29)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| customConfiguration | [Configuration](configuration.md) |

**Returns:** [Driver](driver.md)

___

## Properties

<a id="configuration"></a>

###  configuration

**● configuration**: *[Configuration](configuration.md)*

*Defined in [driver.ts:28](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/driver.ts#L28)*

___
<a id="wait"></a>

###  wait

**● wait**: *[Wait](wait.md)<[Driver](driver.md)>*

*Defined in [driver.ts:29](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/driver.ts#L29)*

___

## Methods

<a id="acceptalert"></a>

###  acceptAlert

▸ **acceptAlert**(): `Promise`<`any`>

*Defined in [driver.ts:57](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/driver.ts#L57)*

**Returns:** `Promise`<`any`>

___
<a id="actions"></a>

###  actions

▸ **actions**(): `ActionSequence`

*Defined in [driver.ts:111](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/driver.ts#L111)*

**Returns:** `ActionSequence`

___
<a id="all"></a>

###  all

▸ **all**(cssOrXpathOrBy: * `string` &#124; `By`*): [Collection](collection.md)

*Defined in [driver.ts:119](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/driver.ts#L119)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| cssOrXpathOrBy |  `string` &#124; `By`|

**Returns:** [Collection](collection.md)

___
<a id="clearcacheandcookies"></a>

###  clearCacheAndCookies

▸ **clearCacheAndCookies**(): `Promise`<`any`>

*Defined in [driver.ts:103](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/driver.ts#L103)*

**Returns:** `Promise`<`any`>

___
<a id="close"></a>

###  close

▸ **close**(): `Promise`<`any`>

*Defined in [driver.ts:45](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/driver.ts#L45)*

**Returns:** `Promise`<`any`>

___
<a id="element"></a>

###  element

▸ **element**(cssOrXpathOrBy: * `string` &#124; `By`*): [Element](element.md)

*Defined in [driver.ts:115](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/driver.ts#L115)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| cssOrXpathOrBy |  `string` &#124; `By`|

**Returns:** [Element](element.md)

___
<a id="executescript"></a>

###  executeScript

▸ **executeScript**(script: * `string` &#124; `Function`*, ...args: *`any`[]*): `Promise`<`any`>

*Defined in [driver.ts:74](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/driver.ts#L74)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| script |  `string` &#124; `Function`|
| `Rest` args | `any`[] |

**Returns:** `Promise`<`any`>

___
<a id="findelement"></a>

###  findElement

▸ **findElement**(locator: *`By`*): `Promise`<`WebElement`>

*Implementation of [SearchContext](../interfaces/searchcontext.md).[findElement](../interfaces/searchcontext.md#findelement)*

*Defined in [driver.ts:143](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/driver.ts#L143)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| locator | `By` |

**Returns:** `Promise`<`WebElement`>

___
<a id="findelements"></a>

###  findElements

▸ **findElements**(locator: *`By`*): `Promise`<`WebElement`[]>

*Implementation of [SearchContext](../interfaces/searchcontext.md).[findElements](../interfaces/searchcontext.md#findelements)*

*Defined in [driver.ts:139](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/driver.ts#L139)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| locator | `By` |

**Returns:** `Promise`<`WebElement`[]>

___
<a id="gettabs"></a>

###  getTabs

▸ **getTabs**(): `Promise`<`any`>

*Defined in [driver.ts:79](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/driver.ts#L79)*

**Returns:** `Promise`<`any`>

___
<a id="is"></a>

###  is

▸ **is**(condition: *[Condition](condition.md)<[Driver](driver.md)>*, timeout?: *`number`*): `Promise`<`boolean`>

*Defined in [driver.ts:131](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/driver.ts#L131)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [Condition](condition.md)<[Driver](driver.md)> |
| `Optional` timeout | `number` |

**Returns:** `Promise`<`boolean`>

___
<a id="isnot"></a>

###  isNot

▸ **isNot**(condition: *[Condition](condition.md)<[Driver](driver.md)>*, timeout?: *`number`*): `Promise`<`boolean`>

*Defined in [driver.ts:135](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/driver.ts#L135)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [Condition](condition.md)<[Driver](driver.md)> |
| `Optional` timeout | `number` |

**Returns:** `Promise`<`boolean`>

___
<a id="nexttab"></a>

###  nextTab

▸ **nextTab**(): `Promise`<`any`>

*Defined in [driver.ts:83](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/driver.ts#L83)*

**Returns:** `Promise`<`any`>

___
<a id="open"></a>

###  open

▸ **open**(url: *`string`*): `Promise`<`any`>

*Defined in [driver.ts:37](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/driver.ts#L37)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| url | `string` |

**Returns:** `Promise`<`any`>

___
<a id="pagesource"></a>

###  pageSource

▸ **pageSource**(): `Promise`<`string`>

*Defined in [driver.ts:69](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/driver.ts#L69)*

**Returns:** `Promise`<`string`>

___
<a id="previoustab"></a>

###  previousTab

▸ **previousTab**(): `Promise`<`any`>

*Defined in [driver.ts:87](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/driver.ts#L87)*

**Returns:** `Promise`<`any`>

___
<a id="quit"></a>

###  quit

▸ **quit**(): `Promise`<`any`>

*Defined in [driver.ts:49](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/driver.ts#L49)*

**Returns:** `Promise`<`any`>

___
<a id="refresh"></a>

###  refresh

▸ **refresh**(): `Promise`<`any`>

*Defined in [driver.ts:53](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/driver.ts#L53)*

**Returns:** `Promise`<`any`>

___
<a id="resizewindow"></a>

###  resizeWindow

▸ **resizeWindow**(width?: *`number`*, height?: *`number`*): `Promise`<`any`>

*Defined in [driver.ts:41](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/driver.ts#L41)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` width | `number` |  this.configuration.windowWidth |
| `Default value` height | `number` |  this.configuration.windowHeight |

**Returns:** `Promise`<`any`>

___
<a id="screenshot"></a>

###  screenshot

▸ **screenshot**(): `Promise`<`Buffer`>

*Defined in [driver.ts:107](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/driver.ts#L107)*

**Returns:** `Promise`<`Buffer`>

___
<a id="should"></a>

###  should

▸ **should**(condition: *[Condition](condition.md)<[Driver](driver.md)>*, timeout?: *`number`*): `Promise`<[Driver](driver.md)>

*Defined in [driver.ts:123](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/driver.ts#L123)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [Condition](condition.md)<[Driver](driver.md)> |
| `Optional` timeout | `number` |

**Returns:** `Promise`<[Driver](driver.md)>

___
<a id="shouldnot"></a>

###  shouldNot

▸ **shouldNot**(condition: *[Condition](condition.md)<[Driver](driver.md)>*, timeout?: *`number`*): `Promise`<[Driver](driver.md)>

*Defined in [driver.ts:127](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/driver.ts#L127)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [Condition](condition.md)<[Driver](driver.md)> |
| `Optional` timeout | `number` |

**Returns:** `Promise`<[Driver](driver.md)>

___
<a id="switchtodefaultframe"></a>

###  switchToDefaultFrame

▸ **switchToDefaultFrame**(): `Promise`<`any`>

*Defined in [driver.ts:99](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/driver.ts#L99)*

**Returns:** `Promise`<`any`>

___
<a id="switchtoframe"></a>

###  switchToFrame

▸ **switchToFrame**(frameElement: *[Element](element.md)*): `Promise`<`any`>

*Defined in [driver.ts:95](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/driver.ts#L95)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| frameElement | [Element](element.md) |

**Returns:** `Promise`<`any`>

___
<a id="switchtotab"></a>

###  switchToTab

▸ **switchToTab**(tabId: *`string`*): `Promise`<`any`>

*Defined in [driver.ts:91](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/driver.ts#L91)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| tabId | `string` |

**Returns:** `Promise`<`any`>

___
<a id="title"></a>

###  title

▸ **title**(): `Promise`<`string`>

*Defined in [driver.ts:65](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/driver.ts#L65)*

**Returns:** `Promise`<`string`>

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Defined in [driver.ts:147](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/driver.ts#L147)*

**Returns:** `string`

___
<a id="url"></a>

###  url

▸ **url**(): `Promise`<`string`>

*Defined in [driver.ts:61](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/driver.ts#L61)*

**Returns:** `Promise`<`string`>

___

