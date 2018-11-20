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
* [wrapAll](driver.md#wrapall)
* [wrapElement](driver.md#wrapelement)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Driver**(customConfiguration?: *[Configuration](configuration.md)*): [Driver](driver.md)

*Defined in [driver.ts:30](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/driver.ts#L30)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Optional` customConfiguration | [Configuration](configuration.md) |

**Returns:** [Driver](driver.md)

___

## Properties

<a id="configuration"></a>

###  configuration

**● configuration**: *[Configuration](configuration.md)*

*Defined in [driver.ts:29](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/driver.ts#L29)*

___
<a id="wait"></a>

###  wait

**● wait**: *[Wait](wait.md)<[Driver](driver.md)>*

*Defined in [driver.ts:30](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/driver.ts#L30)*

___

## Methods

<a id="acceptalert"></a>

###  acceptAlert

▸ **acceptAlert**(): `Promise`<[Driver](driver.md)>

*Defined in [driver.ts:58](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/driver.ts#L58)*

**Returns:** `Promise`<[Driver](driver.md)>

___
<a id="actions"></a>

###  actions

▸ **actions**(): `ActionSequence`

*Defined in [driver.ts:112](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/driver.ts#L112)*

**Returns:** `ActionSequence`

___
<a id="all"></a>

###  all

▸ **all**(cssOrXpathOrBy: * `string` &#124; `By`*): [Collection](collection.md)

*Defined in [driver.ts:120](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/driver.ts#L120)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| cssOrXpathOrBy |  `string` &#124; `By`|

**Returns:** [Collection](collection.md)

___
<a id="clearcacheandcookies"></a>

###  clearCacheAndCookies

▸ **clearCacheAndCookies**(): `Promise`<[Driver](driver.md)>

*Defined in [driver.ts:104](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/driver.ts#L104)*

**Returns:** `Promise`<[Driver](driver.md)>

___
<a id="close"></a>

###  close

▸ **close**(): `Promise`<[Driver](driver.md)>

*Defined in [driver.ts:46](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/driver.ts#L46)*

**Returns:** `Promise`<[Driver](driver.md)>

___
<a id="element"></a>

###  element

▸ **element**(cssOrXpathOrBy: * `string` &#124; `By`*): [Element](element.md)

*Defined in [driver.ts:116](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/driver.ts#L116)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| cssOrXpathOrBy |  `string` &#124; `By`|

**Returns:** [Element](element.md)

___
<a id="executescript"></a>

###  executeScript

▸ **executeScript**(script: * `string` &#124; `Function`*, ...args: *`any`[]*): `Promise`<`any`>

*Defined in [driver.ts:75](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/driver.ts#L75)*

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

*Defined in [driver.ts:152](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/driver.ts#L152)*

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

*Defined in [driver.ts:148](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/driver.ts#L148)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| locator | `By` |

**Returns:** `Promise`<`WebElement`[]>

___
<a id="gettabs"></a>

###  getTabs

▸ **getTabs**(): `Promise`<`any`>

*Defined in [driver.ts:80](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/driver.ts#L80)*

**Returns:** `Promise`<`any`>

___
<a id="is"></a>

###  is

▸ **is**(condition: *[Condition](condition.md)<[Driver](driver.md)>*, timeout?: *`number`*): `Promise`<`boolean`>

*Defined in [driver.ts:140](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/driver.ts#L140)*

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

*Defined in [driver.ts:144](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/driver.ts#L144)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [Condition](condition.md)<[Driver](driver.md)> |
| `Optional` timeout | `number` |

**Returns:** `Promise`<`boolean`>

___
<a id="nexttab"></a>

###  nextTab

▸ **nextTab**(): `Promise`<[Driver](driver.md)>

*Defined in [driver.ts:84](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/driver.ts#L84)*

**Returns:** `Promise`<[Driver](driver.md)>

___
<a id="open"></a>

###  open

▸ **open**(url: *`string`*): `Promise`<[Driver](driver.md)>

*Defined in [driver.ts:38](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/driver.ts#L38)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| url | `string` |

**Returns:** `Promise`<[Driver](driver.md)>

___
<a id="pagesource"></a>

###  pageSource

▸ **pageSource**(): `Promise`<`string`>

*Defined in [driver.ts:70](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/driver.ts#L70)*

**Returns:** `Promise`<`string`>

___
<a id="previoustab"></a>

###  previousTab

▸ **previousTab**(): `Promise`<[Driver](driver.md)>

*Defined in [driver.ts:88](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/driver.ts#L88)*

**Returns:** `Promise`<[Driver](driver.md)>

___
<a id="quit"></a>

###  quit

▸ **quit**(): `Promise`<[Driver](driver.md)>

*Defined in [driver.ts:50](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/driver.ts#L50)*

**Returns:** `Promise`<[Driver](driver.md)>

___
<a id="refresh"></a>

###  refresh

▸ **refresh**(): `Promise`<[Driver](driver.md)>

*Defined in [driver.ts:54](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/driver.ts#L54)*

**Returns:** `Promise`<[Driver](driver.md)>

___
<a id="resizewindow"></a>

###  resizeWindow

▸ **resizeWindow**(width?: *`number`*, height?: *`number`*): `Promise`<[Driver](driver.md)>

*Defined in [driver.ts:42](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/driver.ts#L42)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` width | `number` |  this.configuration.windowWidth |
| `Default value` height | `number` |  this.configuration.windowHeight |

**Returns:** `Promise`<[Driver](driver.md)>

___
<a id="screenshot"></a>

###  screenshot

▸ **screenshot**(): `Promise`<`Buffer`>

*Defined in [driver.ts:108](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/driver.ts#L108)*

**Returns:** `Promise`<`Buffer`>

___
<a id="should"></a>

###  should

▸ **should**(condition: *[Condition](condition.md)<[Driver](driver.md)>*, timeout?: *`number`*): `Promise`<[Driver](driver.md)>

*Defined in [driver.ts:132](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/driver.ts#L132)*

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

*Defined in [driver.ts:136](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/driver.ts#L136)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [Condition](condition.md)<[Driver](driver.md)> |
| `Optional` timeout | `number` |

**Returns:** `Promise`<[Driver](driver.md)>

___
<a id="switchtodefaultframe"></a>

###  switchToDefaultFrame

▸ **switchToDefaultFrame**(): `Promise`<[Driver](driver.md)>

*Defined in [driver.ts:100](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/driver.ts#L100)*

**Returns:** `Promise`<[Driver](driver.md)>

___
<a id="switchtoframe"></a>

###  switchToFrame

▸ **switchToFrame**(frameElement: *[Element](element.md)*): `Promise`<[Driver](driver.md)>

*Defined in [driver.ts:96](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/driver.ts#L96)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| frameElement | [Element](element.md) |

**Returns:** `Promise`<[Driver](driver.md)>

___
<a id="switchtotab"></a>

###  switchToTab

▸ **switchToTab**(tabId: *`string`*): `Promise`<[Driver](driver.md)>

*Defined in [driver.ts:92](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/driver.ts#L92)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| tabId | `string` |

**Returns:** `Promise`<[Driver](driver.md)>

___
<a id="title"></a>

###  title

▸ **title**(): `Promise`<`string`>

*Defined in [driver.ts:66](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/driver.ts#L66)*

**Returns:** `Promise`<`string`>

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Defined in [driver.ts:156](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/driver.ts#L156)*

**Returns:** `string`

___
<a id="url"></a>

###  url

▸ **url**(): `Promise`<`string`>

*Defined in [driver.ts:62](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/driver.ts#L62)*

**Returns:** `Promise`<`string`>

___
<a id="wrapall"></a>

###  wrapAll

▸ **wrapAll**(webelements: *`WebElement`[]*): [Collection](collection.md)

*Defined in [driver.ts:128](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/driver.ts#L128)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| webelements | `WebElement`[] |

**Returns:** [Collection](collection.md)

___
<a id="wrapelement"></a>

###  wrapElement

▸ **wrapElement**(webelement: *`WebElement`*): [Element](element.md)

*Defined in [driver.ts:124](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/driver.ts#L124)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| webelement | `WebElement` |

**Returns:** [Element](element.md)

___

