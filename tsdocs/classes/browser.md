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

### Methods

* [all](browser.md#all)
* [clearCacheAndCookies](browser.md#clearcacheandcookies)
* [closeCurrentTab](browser.md#closecurrenttab)
* [element](browser.md#element)
* [executeScript](browser.md#executescript)
* [findWebElement](browser.md#findwebelement)
* [findWebElements](browser.md#findwebelements)
* [get](browser.md#get)
* [matches](browser.md#matches)
* [matchesNot](browser.md#matchesnot)
* [nextTab](browser.md#nexttab)
* [open](browser.md#open)
* [perform](browser.md#perform)
* [previousTab](browser.md#previoustab)
* [quit](browser.md#quit)
* [resizeWindow](browser.md#resizewindow)
* [screenshot](browser.md#screenshot)
* [should](browser.md#should)
* [shouldNot](browser.md#shouldnot)
* [switchToDefaultFrame](browser.md#switchtodefaultframe)
* [switchToFrame](browser.md#switchtoframe)
* [toString](browser.md#tostring)
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

*Defined in [browser.ts:50](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L50)*

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

*Defined in [browser.ts:48](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L48)*

___
<a id="wait"></a>

### `<Private>` wait

**● wait**: *[Wait](wait.md)<[Browser](browser.md)>*

*Defined in [browser.ts:50](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L50)*

___

## Accessors

<a id="driver"></a>

###  driver

getdriver(): `WebDriver`

*Defined in [browser.ts:57](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L57)*

**Returns:** `WebDriver`

___

## Methods

<a id="all"></a>

###  all

▸ **all**(cssOrXpathOrBy: * `string` &#124; `By`*): [Collection](collection.md)

*Defined in [browser.ts:83](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L83)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| cssOrXpathOrBy |  `string` &#124; `By`|

**Returns:** [Collection](collection.md)

___
<a id="clearcacheandcookies"></a>

###  clearCacheAndCookies

▸ **clearCacheAndCookies**(): `Promise`<`void`>

*Defined in [browser.ts:190](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L190)*

**Returns:** `Promise`<`void`>

___
<a id="closecurrenttab"></a>

###  closeCurrentTab

▸ **closeCurrentTab**(): `Promise`<`void`>

*Defined in [browser.ts:153](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L153)*

**Returns:** `Promise`<`void`>

___
<a id="element"></a>

###  element

▸ **element**(cssOrXpathOrBy: * `string` &#124; `By`*): [Element](element.md)

*Defined in [browser.ts:77](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L77)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| cssOrXpathOrBy |  `string` &#124; `By`|

**Returns:** [Element](element.md)

___
<a id="executescript"></a>

###  executeScript

▸ **executeScript**(script: * `string` &#124; `Function`*, ...args: *`any`[]*): `Promise`<`Object`>

*Defined in [browser.ts:128](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L128)*

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

*Defined in [browser.ts:67](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L67)*

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

*Defined in [browser.ts:71](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L71)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| by | `By` |

**Returns:** `Promise`<`WebElement`[]>

___
<a id="get"></a>

###  get

▸ **get**<`R`>(query: *[Query](../#query)<[Browser](browser.md), `R`>*, timeout?: *`number`*): `Promise`<`R`>

*Defined in [browser.ts:201](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L201)*

**Type parameters:**

#### R 
**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| query | [Query](../#query)<[Browser](browser.md), `R`> | - |
| `Default value` timeout | `number` |  this.configuration.timeout |

**Returns:** `Promise`<`R`>

___
<a id="matches"></a>

###  matches

▸ **matches**(condition: *[BrowserCondition](../#browsercondition)*): `Promise`<`boolean`>

*Defined in [browser.ts:109](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L109)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [BrowserCondition](../#browsercondition) |

**Returns:** `Promise`<`boolean`>

___
<a id="matchesnot"></a>

###  matchesNot

▸ **matchesNot**(condition: *[BrowserCondition](../#browsercondition)*): `Promise`<`boolean`>

*Defined in [browser.ts:113](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L113)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [BrowserCondition](../#browsercondition) |

**Returns:** `Promise`<`boolean`>

___
<a id="nexttab"></a>

###  nextTab

▸ **nextTab**(): `Promise`<`void`>

*Defined in [browser.ts:162](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L162)*

**Returns:** `Promise`<`void`>

___
<a id="open"></a>

###  open

▸ **open**(url: *`string`*): `Promise`<`void`>

*Defined in [browser.ts:133](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L133)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| url | `string` |

**Returns:** `Promise`<`void`>

___
<a id="perform"></a>

###  perform

▸ **perform**(command: *[Command](../#command)<[Browser](browser.md)>*, timeout?: *`number`*): `Promise`<[Browser](browser.md)>

*Defined in [browser.ts:120](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L120)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| command | [Command](../#command)<[Browser](browser.md)> | - |
| `Default value` timeout | `number` |  this.configuration.timeout |

**Returns:** `Promise`<[Browser](browser.md)>

___
<a id="previoustab"></a>

###  previousTab

▸ **previousTab**(): `Promise`<`void`>

*Defined in [browser.ts:171](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L171)*

**Returns:** `Promise`<`void`>

___
<a id="quit"></a>

###  quit

▸ **quit**(): `Promise`<`void`>

*Defined in [browser.ts:157](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L157)*

**Returns:** `Promise`<`void`>

___
<a id="resizewindow"></a>

###  resizeWindow

▸ **resizeWindow**(width: *`number`*, height: *`number`*): `Promise`<`void`>

*Defined in [browser.ts:143](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L143)*

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

*Defined in [browser.ts:147](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L147)*

**Returns:** `Promise`<`Buffer`>

___
<a id="should"></a>

###  should

▸ **should**(condition: *[BrowserCondition](../#browsercondition)*, timeout?: *`number`*): `Promise`<[Browser](browser.md)>

*Defined in [browser.ts:91](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L91)*

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

*Defined in [browser.ts:96](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L96)*

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

*Defined in [browser.ts:186](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L186)*

**Returns:** `Promise`<`void`>

___
<a id="switchtoframe"></a>

###  switchToFrame

▸ **switchToFrame**(frameElement: *[Element](element.md)*): `Promise`<`void`>

*Defined in [browser.ts:180](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L180)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| frameElement | [Element](element.md) |

**Returns:** `Promise`<`void`>

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Defined in [browser.ts:61](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L61)*

**Returns:** `string`

___
<a id="waituntil"></a>

###  waitUntil

▸ **waitUntil**(condition: *[BrowserCondition](../#browsercondition)*, timeout?: *`number`*): `Promise`<`boolean`>

*Defined in [browser.ts:101](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L101)*

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

*Defined in [browser.ts:105](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L105)*

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

*Defined in [browser.ts:42](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L42)*

**Returns:** [Browser](browser.md)

___
<a id="chromewith"></a>

### `<Static>` chromeWith

▸ **chromeWith**(): [Customized](customized.md)<[Browser](browser.md)>

*Defined in [browser.ts:37](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L37)*

**Returns:** [Customized](customized.md)<[Browser](browser.md)>

___
<a id="configuredwith"></a>

### `<Static>` configuredWith

▸ **configuredWith**(): [Customized](customized.md)<[Browser](browser.md)>

*Defined in [browser.ts:29](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L29)*

**Returns:** [Customized](customized.md)<[Browser](browser.md)>

___
<a id="drivedby"></a>

### `<Static>` drivedBy

▸ **drivedBy**(driver: *`WebDriver`*): [Customized](customized.md)<[Browser](browser.md)>

*Defined in [browser.ts:33](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L33)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| driver | `WebDriver` |

**Returns:** [Customized](customized.md)<[Browser](browser.md)>

___

