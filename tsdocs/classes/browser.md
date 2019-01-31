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
* [getAllWindowHandles](browser.md#getallwindowhandles)
* [matches](browser.md#matches)
* [matchesNot](browser.md#matchesnot)
* [nextTab](browser.md#nexttab)
* [open](browser.md#open)
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

*Defined in [browser.ts:51](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L51)*

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

*Defined in [browser.ts:49](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L49)*

___
<a id="wait"></a>

### `<Private>` wait

**● wait**: *[Wait](wait.md)<[Browser](browser.md)>*

*Defined in [browser.ts:51](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L51)*

___

## Accessors

<a id="driver"></a>

###  driver

getdriver(): `WebDriver`

*Defined in [browser.ts:58](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L58)*

**Returns:** `WebDriver`

___
<a id="tabs"></a>

###  tabs

gettabs(): `Promise`<`string`[]>

*Defined in [browser.ts:148](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L148)*

**Returns:** `Promise`<`string`[]>

___
<a id="tabsnumber"></a>

###  tabsNumber

gettabsNumber(): `Promise`<`number`>

*Defined in [browser.ts:152](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L152)*

**Returns:** `Promise`<`number`>

___

## Methods

<a id="all"></a>

###  all

▸ **all**(cssOrXpathOrBy: * `string` &#124; `By`*): [Collection](collection.md)

*Defined in [browser.ts:84](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L84)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| cssOrXpathOrBy |  `string` &#124; `By`|

**Returns:** [Collection](collection.md)

___
<a id="clearcacheandcookies"></a>

###  clearCacheAndCookies

▸ **clearCacheAndCookies**(): `Promise`<`void`>

*Defined in [browser.ts:215](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L215)*

**Returns:** `Promise`<`void`>

___
<a id="closecurrenttab"></a>

###  closeCurrentTab

▸ **closeCurrentTab**(): `Promise`<`void`>

*Defined in [browser.ts:178](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L178)*

**Returns:** `Promise`<`void`>

___
<a id="element"></a>

###  element

▸ **element**(cssOrXpathOrBy: * `string` &#124; `By`*): [Element](element.md)

*Defined in [browser.ts:78](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L78)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| cssOrXpathOrBy |  `string` &#124; `By`|

**Returns:** [Element](element.md)

___
<a id="executescript"></a>

###  executeScript

▸ **executeScript**(script: * `string` &#124; `Function`*, ...args: *`any`[]*): `Promise`<`Object`>

*Defined in [browser.ts:142](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L142)*

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

*Defined in [browser.ts:68](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L68)*

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

*Defined in [browser.ts:72](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L72)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| by | `By` |

**Returns:** `Promise`<`WebElement`[]>

___
<a id="getallwindowhandles"></a>

### `<Private>` getAllWindowHandles

▸ **getAllWindowHandles**(): `Promise`<`string`[]>

*Defined in [browser.ts:226](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L226)*

**Returns:** `Promise`<`string`[]>

___
<a id="matches"></a>

###  matches

▸ **matches**(condition: *[BrowserCondition](../#browsercondition)*): `Promise`<`boolean`>

*Defined in [browser.ts:110](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L110)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [BrowserCondition](../#browsercondition) |

**Returns:** `Promise`<`boolean`>

___
<a id="matchesnot"></a>

###  matchesNot

▸ **matchesNot**(condition: *[BrowserCondition](../#browsercondition)*): `Promise`<`boolean`>

*Defined in [browser.ts:114](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L114)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [BrowserCondition](../#browsercondition) |

**Returns:** `Promise`<`boolean`>

___
<a id="nexttab"></a>

###  nextTab

▸ **nextTab**(): `Promise`<`void`>

*Defined in [browser.ts:187](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L187)*

**Returns:** `Promise`<`void`>

___
<a id="open"></a>

###  open

▸ **open**(url: *`string`*): `Promise`<`void`>

*Defined in [browser.ts:164](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L164)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| url | `string` |

**Returns:** `Promise`<`void`>

___
<a id="pagesource"></a>

###  pageSource

▸ **pageSource**(): `Promise`<`string`>

*Defined in [browser.ts:131](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L131)*

**Returns:** `Promise`<`string`>

___
<a id="previoustab"></a>

###  previousTab

▸ **previousTab**(): `Promise`<`void`>

*Defined in [browser.ts:196](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L196)*

**Returns:** `Promise`<`void`>

___
<a id="quit"></a>

###  quit

▸ **quit**(): `Promise`<`void`>

*Defined in [browser.ts:182](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L182)*

**Returns:** `Promise`<`void`>

___
<a id="resizewindow"></a>

###  resizeWindow

▸ **resizeWindow**(width: *`number`*, height: *`number`*): `Promise`<`void`>

*Defined in [browser.ts:174](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L174)*

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

*Defined in [browser.ts:135](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L135)*

**Returns:** `Promise`<`Buffer`>

___
<a id="should"></a>

###  should

▸ **should**(condition: *[BrowserCondition](../#browsercondition)*, timeout?: *`number`*): `Promise`<[Browser](browser.md)>

*Defined in [browser.ts:92](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L92)*

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

*Defined in [browser.ts:97](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L97)*

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

*Defined in [browser.ts:211](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L211)*

**Returns:** `Promise`<`void`>

___
<a id="switchtoframe"></a>

###  switchToFrame

▸ **switchToFrame**(frameElement: *[Element](element.md)*): `Promise`<`void`>

*Defined in [browser.ts:205](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L205)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| frameElement | [Element](element.md) |

**Returns:** `Promise`<`void`>

___
<a id="title"></a>

###  title

▸ **title**(): `Promise`<`string`>

*Defined in [browser.ts:127](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L127)*

**Returns:** `Promise`<`string`>

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Defined in [browser.ts:62](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L62)*

**Returns:** `string`

___
<a id="url"></a>

###  url

▸ **url**(): `Promise`<`string`>

*Defined in [browser.ts:123](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L123)*

**Returns:** `Promise`<`string`>

___
<a id="waituntil"></a>

###  waitUntil

▸ **waitUntil**(condition: *[BrowserCondition](../#browsercondition)*, timeout?: *`number`*): `Promise`<`boolean`>

*Defined in [browser.ts:102](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L102)*

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

*Defined in [browser.ts:106](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L106)*

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

*Defined in [browser.ts:43](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L43)*

**Returns:** [Browser](browser.md)

___
<a id="chromewith"></a>

### `<Static>` chromeWith

▸ **chromeWith**(): [Customized](customized.md)<[Browser](browser.md)>

*Defined in [browser.ts:38](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L38)*

**Returns:** [Customized](customized.md)<[Browser](browser.md)>

___
<a id="configuredwith"></a>

### `<Static>` configuredWith

▸ **configuredWith**(): [Customized](customized.md)<[Browser](browser.md)>

*Defined in [browser.ts:30](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L30)*

**Returns:** [Customized](customized.md)<[Browser](browser.md)>

___
<a id="drivedby"></a>

### `<Static>` drivedBy

▸ **drivedBy**(driver: *`WebDriver`*): [Customized](customized.md)<[Browser](browser.md)>

*Defined in [browser.ts:34](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L34)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| driver | `WebDriver` |

**Returns:** [Customized](customized.md)<[Browser](browser.md)>

___

