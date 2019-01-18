[selenidejs](../README.md) > [Browser](../classes/browser.md)

# Class: Browser

## Hierarchy

**Browser**

## Implements

* [SearchContext](../interfaces/searchcontext.md)

## Index

### Constructors

* [constructor](browser.md#constructor)

### Properties

* [configuration](browser.md#configuration)
* [wait](browser.md#wait)

### Accessors

* [driver](browser.md#driver)
* [tabs](browser.md#tabs)
* [tabsNumber](browser.md#tabsnumber)

### Methods

* [all](browser.md#all)
* [clearCacheAndCookies](browser.md#clearcacheandcookies)
* [closeCurrentTab](browser.md#closecurrenttab)
* [element](browser.md#element)
* [executeScript](browser.md#executescript)
* [findWebElement](browser.md#findwebelement)
* [findWebElements](browser.md#findwebelements)
* [get](browser.md#get)
* [getAllWindowHandles](browser.md#getallwindowhandles)
* [matches](browser.md#matches)
* [matchesNot](browser.md#matchesnot)
* [nextTab](browser.md#nexttab)
* [pageSource](browser.md#pagesource)
* [previousTab](browser.md#previoustab)
* [quit](browser.md#quit)
* [resizeWindow](browser.md#resizewindow)
* [screenshot](browser.md#screenshot)
* [should](browser.md#should)
* [shouldNot](browser.md#shouldnot)
* [switchToDefaultFrame](browser.md#switchtodefaultframe)
* [switchToFrame](browser.md#switchtoframe)
* [title](browser.md#title)
* [toString](browser.md#tostring)
* [url](browser.md#url)
* [waitUntil](browser.md#waituntil)
* [waitUntilNot](browser.md#waituntilnot)
* [chrome](browser.md#chrome)
* [chromeWith](browser.md#chromewith)
* [configuredWith](browser.md#configuredwith)
* [drivedBy](browser.md#drivedby)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Browser**(configuration?: *`Partial`<[Configuration](configuration.md)>*): [Browser](browser.md)

*Defined in [browser.ts:52](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L52)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` configuration | `Partial`<[Configuration](configuration.md)> |  {} |

**Returns:** [Browser](browser.md)

___

## Properties

<a id="configuration"></a>

###  configuration

**● configuration**: *[Configuration](configuration.md)*

*Defined in [browser.ts:50](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L50)*

___
<a id="wait"></a>

### `<Private>` wait

**● wait**: *[Wait](wait.md)<[Browser](browser.md)>*

*Defined in [browser.ts:52](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L52)*

___

## Accessors

<a id="driver"></a>

###  driver

getdriver(): `WebDriver`

*Defined in [browser.ts:59](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L59)*

**Returns:** `WebDriver`

___
<a id="tabs"></a>

###  tabs

gettabs(): `Promise`<`string`[]>

*Defined in [browser.ts:149](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L149)*

**Returns:** `Promise`<`string`[]>

___
<a id="tabsnumber"></a>

###  tabsNumber

gettabsNumber(): `Promise`<`number`>

*Defined in [browser.ts:153](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L153)*

**Returns:** `Promise`<`number`>

___

## Methods

<a id="all"></a>

###  all

▸ **all**(cssOrXpathOrBy: * `string` &#124; `By`*): [Collection](collection.md)

*Defined in [browser.ts:85](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L85)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| cssOrXpathOrBy |  `string` &#124; `By`|

**Returns:** [Collection](collection.md)

___
<a id="clearcacheandcookies"></a>

###  clearCacheAndCookies

▸ **clearCacheAndCookies**(): `Promise`<`void`>

*Defined in [browser.ts:216](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L216)*

**Returns:** `Promise`<`void`>

___
<a id="closecurrenttab"></a>

###  closeCurrentTab

▸ **closeCurrentTab**(): `Promise`<`void`>

*Defined in [browser.ts:179](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L179)*

**Returns:** `Promise`<`void`>

___
<a id="element"></a>

###  element

▸ **element**(cssOrXpathOrBy: * `string` &#124; `By`*): [Element](element.md)

*Defined in [browser.ts:79](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L79)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| cssOrXpathOrBy |  `string` &#124; `By`|

**Returns:** [Element](element.md)

___
<a id="executescript"></a>

###  executeScript

▸ **executeScript**(script: * `string` &#124; `Function`*, ...args: *`any`[]*): `Promise`<`Object`>

*Defined in [browser.ts:143](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L143)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| script |  `string` &#124; `Function`|
| `Rest` args | `any`[] |

**Returns:** `Promise`<`Object`>

___
<a id="findwebelement"></a>

###  findWebElement

▸ **findWebElement**(by: *`By`*): `Promise`<`WebElement`>

*Implementation of [SearchContext](../interfaces/searchcontext.md).[findWebElement](../interfaces/searchcontext.md#findwebelement)*

*Defined in [browser.ts:69](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L69)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| by | `By` |

**Returns:** `Promise`<`WebElement`>

___
<a id="findwebelements"></a>

###  findWebElements

▸ **findWebElements**(by: *`By`*): `Promise`<`WebElement`[]>

*Implementation of [SearchContext](../interfaces/searchcontext.md).[findWebElements](../interfaces/searchcontext.md#findwebelements)*

*Defined in [browser.ts:73](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L73)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| by | `By` |

**Returns:** `Promise`<`WebElement`[]>

___
<a id="get"></a>

###  get

▸ **get**(url: *`string`*): `Promise`<`void`>

*Defined in [browser.ts:165](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L165)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| url | `string` |

**Returns:** `Promise`<`void`>

___
<a id="getallwindowhandles"></a>

### `<Private>` getAllWindowHandles

▸ **getAllWindowHandles**(): `Promise`<`string`[]>

*Defined in [browser.ts:227](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L227)*

**Returns:** `Promise`<`string`[]>

___
<a id="matches"></a>

###  matches

▸ **matches**(condition: *[BrowserCondition](../#browsercondition)*): `Promise`<`boolean`>

*Defined in [browser.ts:111](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L111)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [BrowserCondition](../#browsercondition) |

**Returns:** `Promise`<`boolean`>

___
<a id="matchesnot"></a>

###  matchesNot

▸ **matchesNot**(condition: *[BrowserCondition](../#browsercondition)*): `Promise`<`boolean`>

*Defined in [browser.ts:115](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L115)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [BrowserCondition](../#browsercondition) |

**Returns:** `Promise`<`boolean`>

___
<a id="nexttab"></a>

###  nextTab

▸ **nextTab**(): `Promise`<`void`>

*Defined in [browser.ts:188](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L188)*

**Returns:** `Promise`<`void`>

___
<a id="pagesource"></a>

###  pageSource

▸ **pageSource**(): `Promise`<`string`>

*Defined in [browser.ts:132](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L132)*

**Returns:** `Promise`<`string`>

___
<a id="previoustab"></a>

###  previousTab

▸ **previousTab**(): `Promise`<`void`>

*Defined in [browser.ts:197](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L197)*

**Returns:** `Promise`<`void`>

___
<a id="quit"></a>

###  quit

▸ **quit**(): `Promise`<`void`>

*Defined in [browser.ts:183](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L183)*

**Returns:** `Promise`<`void`>

___
<a id="resizewindow"></a>

###  resizeWindow

▸ **resizeWindow**(width: *`number`*, height: *`number`*): `Promise`<`void`>

*Defined in [browser.ts:175](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L175)*

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

*Defined in [browser.ts:136](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L136)*

**Returns:** `Promise`<`Buffer`>

___
<a id="should"></a>

###  should

▸ **should**(condition: *[BrowserCondition](../#browsercondition)*, timeout?: *`number`*): `Promise`<[Browser](browser.md)>

*Defined in [browser.ts:93](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L93)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| condition | [BrowserCondition](../#browsercondition) | - |
| `Default value` timeout | `number` |  this.configuration.timeout |

**Returns:** `Promise`<[Browser](browser.md)>

___
<a id="shouldnot"></a>

###  shouldNot

▸ **shouldNot**(condition: *[BrowserCondition](../#browsercondition)*, timeout?: *`number`*): `Promise`<[Browser](browser.md)>

*Defined in [browser.ts:98](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L98)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [BrowserCondition](../#browsercondition) |
| `Optional` timeout | `number` |

**Returns:** `Promise`<[Browser](browser.md)>

___
<a id="switchtodefaultframe"></a>

###  switchToDefaultFrame

▸ **switchToDefaultFrame**(): `Promise`<`void`>

*Defined in [browser.ts:212](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L212)*

**Returns:** `Promise`<`void`>

___
<a id="switchtoframe"></a>

###  switchToFrame

▸ **switchToFrame**(frameElement: *[Element](element.md)*): `Promise`<`void`>

*Defined in [browser.ts:206](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L206)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| frameElement | [Element](element.md) |

**Returns:** `Promise`<`void`>

___
<a id="title"></a>

###  title

▸ **title**(): `Promise`<`string`>

*Defined in [browser.ts:128](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L128)*

**Returns:** `Promise`<`string`>

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Defined in [browser.ts:63](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L63)*

**Returns:** `string`

___
<a id="url"></a>

###  url

▸ **url**(): `Promise`<`string`>

*Defined in [browser.ts:124](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L124)*

**Returns:** `Promise`<`string`>

___
<a id="waituntil"></a>

###  waitUntil

▸ **waitUntil**(condition: *[BrowserCondition](../#browsercondition)*, timeout?: *`number`*): `Promise`<`boolean`>

*Defined in [browser.ts:103](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L103)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| condition | [BrowserCondition](../#browsercondition) | - |
| `Default value` timeout | `number` |  this.configuration.timeout |

**Returns:** `Promise`<`boolean`>

___
<a id="waituntilnot"></a>

###  waitUntilNot

▸ **waitUntilNot**(condition: *[BrowserCondition](../#browsercondition)*, timeout?: *`number`*): `Promise`<`boolean`>

*Defined in [browser.ts:107](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L107)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| condition | [BrowserCondition](../#browsercondition) | - |
| `Default value` timeout | `number` |  this.configuration.timeout |

**Returns:** `Promise`<`boolean`>

___
<a id="chrome"></a>

### `<Static>` chrome

▸ **chrome**(): [Browser](browser.md)

*Defined in [browser.ts:44](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L44)*

**Returns:** [Browser](browser.md)

___
<a id="chromewith"></a>

### `<Static>` chromeWith

▸ **chromeWith**(): [Customized](customized.md)

*Defined in [browser.ts:38](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L38)*

**Returns:** [Customized](customized.md)

___
<a id="configuredwith"></a>

### `<Static>` configuredWith

▸ **configuredWith**(): [Customized](customized.md)

*Defined in [browser.ts:30](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L30)*

**Returns:** [Customized](customized.md)

___
<a id="drivedby"></a>

### `<Static>` drivedBy

▸ **drivedBy**(driver: *`WebDriver`*): [Customized](customized.md)

*Defined in [browser.ts:34](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L34)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| driver | `WebDriver` |

**Returns:** [Customized](customized.md)

___

