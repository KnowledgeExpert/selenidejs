[selenidejs](../README.md) > [Browser](../classes/browser.md)

# Class: Browser

## Hierarchy

 [Entity](entity.md)

**↳ Browser**

## Implements

* [Assertable](../interfaces/assertable.md)
* [Matchable](../interfaces/matchable.md)
* [SearchContext](../interfaces/searchcontext.md)
* [Assertable](../interfaces/assertable.md)
* [Matchable](../interfaces/matchable.md)

## Index

### Constructors

* [constructor](browser.md#constructor)

### Properties

* [configuration](browser.md#configuration)
* [wait](browser.md#wait)

### Accessors

* [alert](browser.md#alert)
* [driver](browser.md#driver)

### Methods

* [all](browser.md#all)
* [back](browser.md#back)
* [clearCookies](browser.md#clearcookies)
* [clearLocalStorage](browser.md#clearlocalstorage)
* [clearSessionStorage](browser.md#clearsessionstorage)
* [closeCurrentTab](browser.md#closecurrenttab)
* [customizedWith](browser.md#customizedwith)
* [element](browser.md#element)
* [executeScript](browser.md#executescript)
* [findWebElement](browser.md#findwebelement)
* [findWebElements](browser.md#findwebelements)
* [forward](browser.md#forward)
* [get](browser.md#get)
* [goToNextTab](browser.md#gotonexttab)
* [goToPreviousTab](browser.md#gotoprevioustab)
* [goToTab](browser.md#gototab)
* [matching](browser.md#matching)
* [matchingNot](browser.md#matchingnot)
* [open](browser.md#open)
* [perform](browser.md#perform)
* [quit](browser.md#quit)
* [refresh](browser.md#refresh)
* [resizeWindow](browser.md#resizewindow)
* [screenshot](browser.md#screenshot)
* [should](browser.md#should)
* [shouldNot](browser.md#shouldnot)
* [switchToDefaultFrame](browser.md#switchtodefaultframe)
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

*Overrides [Entity](entity.md).[constructor](entity.md#constructor)*

*Defined in [browser.ts:44](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L44)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` configuration | `Partial`<[Configuration](configuration.md)> |  {} |

**Returns:** [Browser](browser.md)

___

## Properties

<a id="configuration"></a>

### `<Protected>` configuration

**● configuration**: *[Configuration](configuration.md)*

*Inherited from [Entity](entity.md).[configuration](entity.md#configuration)*

*Defined in [entity.ts:57](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/entity.ts#L57)*

___
<a id="wait"></a>

### `<Protected>` wait

**● wait**: *[Wait](wait.md)<`this`>*

*Inherited from [Entity](entity.md).[wait](entity.md#wait)*

*Defined in [entity.ts:55](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/entity.ts#L55)*

___

## Accessors

<a id="alert"></a>

###  alert

getalert(): `AlertPromise`

*Defined in [browser.ts:224](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L224)*

**Returns:** `AlertPromise`

___
<a id="driver"></a>

###  driver

getdriver(): `WebDriver`

*Defined in [browser.ts:54](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L54)*

**Returns:** `WebDriver`

___

## Methods

<a id="all"></a>

###  all

▸ **all**(cssOrXpathOrBy: * `string` &#124; `By`*, customized?: *`Partial`<[Configuration](configuration.md)>*): [Collection](collection.md)

*Defined in [browser.ts:83](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L83)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| cssOrXpathOrBy |  `string` &#124; `By`|
| `Optional` customized | `Partial`<[Configuration](configuration.md)> |

**Returns:** [Collection](collection.md)

___
<a id="back"></a>

###  back

▸ **back**(): `Promise`<`void`>

*Defined in [browser.ts:142](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L142)*

**Returns:** `Promise`<`void`>

___
<a id="clearcookies"></a>

###  clearCookies

▸ **clearCookies**(): `Promise`<[Browser](browser.md)>

*Defined in [browser.ts:212](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L212)*

**Returns:** `Promise`<[Browser](browser.md)>

___
<a id="clearlocalstorage"></a>

###  clearLocalStorage

▸ **clearLocalStorage**(): `Promise`<[Browser](browser.md)>

*Defined in [browser.ts:200](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L200)*

**Returns:** `Promise`<[Browser](browser.md)>

___
<a id="clearsessionstorage"></a>

###  clearSessionStorage

▸ **clearSessionStorage**(): `Promise`<[Browser](browser.md)>

*Defined in [browser.ts:206](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L206)*

**Returns:** `Promise`<[Browser](browser.md)>

___
<a id="closecurrenttab"></a>

###  closeCurrentTab

▸ **closeCurrentTab**(): `Promise`<[Browser](browser.md)>

*Defined in [browser.ts:129](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L129)*

**Returns:** `Promise`<[Browser](browser.md)>

___
<a id="customizedwith"></a>

###  customizedWith

▸ **customizedWith**(custom: *`Partial`<[Configuration](configuration.md)>*): [Browser](browser.md)

*Defined in [browser.ts:50](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L50)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| custom | `Partial`<[Configuration](configuration.md)> |

**Returns:** [Browser](browser.md)

___
<a id="element"></a>

###  element

▸ **element**(cssOrXpathOrBy: * `string` &#124; `By`*, customized?: *`Partial`<[Configuration](configuration.md)>*): [Element](element.md)

*Defined in [browser.ts:74](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L74)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| cssOrXpathOrBy |  `string` &#124; `By`|
| `Optional` customized | `Partial`<[Configuration](configuration.md)> |

**Returns:** [Element](element.md)

___
<a id="executescript"></a>

###  executeScript

▸ **executeScript**(script: * `string` &#124; `Function`*, ...args: *`any`[]*): `Promise`<`Object`>

*Defined in [browser.ts:97](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L97)*

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

*Defined in [browser.ts:64](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L64)*

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

*Defined in [browser.ts:68](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L68)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| by | `By` |

**Returns:** `Promise`<`WebElement`[]>

___
<a id="forward"></a>

###  forward

▸ **forward**(): `Promise`<`void`>

*Defined in [browser.ts:146](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L146)*

**Returns:** `Promise`<`void`>

___
<a id="get"></a>

###  get

▸ **get**<`R`>(query: *[Query](../#query)<`this`, `R`>*): `Promise`<`R`>

*Inherited from [Entity](entity.md).[get](entity.md#get)*

*Defined in [entity.ts:118](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/entity.ts#L118)*

**Type parameters:**

#### R 
**Parameters:**

| Param | Type |
| ------ | ------ |
| query | [Query](../#query)<`this`, `R`> |

**Returns:** `Promise`<`R`>

___
<a id="gotonexttab"></a>

###  goToNextTab

▸ **goToNextTab**(): `Promise`<[Browser](browser.md)>

*Defined in [browser.ts:150](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L150)*

**Returns:** `Promise`<[Browser](browser.md)>

___
<a id="gotoprevioustab"></a>

###  goToPreviousTab

▸ **goToPreviousTab**(): `Promise`<[Browser](browser.md)>

*Defined in [browser.ts:157](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L157)*

**Returns:** `Promise`<[Browser](browser.md)>

___
<a id="gototab"></a>

###  goToTab

▸ **goToTab**(indexOrId: * `number` &#124; `string`*): `Promise`<[Browser](browser.md)>

*Defined in [browser.ts:164](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L164)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| indexOrId |  `number` &#124; `string`|

**Returns:** `Promise`<[Browser](browser.md)>

___
<a id="matching"></a>

###  matching

▸ **matching**(...conditions: *`Array`<[Condition](../modules/condition.md)<`this`>>*): `Promise`<`boolean`>

*Inherited from [Entity](entity.md).[matching](entity.md#matching)*

*Defined in [entity.ts:101](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/entity.ts#L101)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Rest` conditions | `Array`<[Condition](../modules/condition.md)<`this`>> |

**Returns:** `Promise`<`boolean`>

___
<a id="matchingnot"></a>

###  matchingNot

▸ **matchingNot**(...conditions: *`Array`<[Condition](../modules/condition.md)<`this`>>*): `Promise`<`boolean`>

*Inherited from [Entity](entity.md).[matchingNot](entity.md#matchingnot)*

*Defined in [entity.ts:105](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/entity.ts#L105)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Rest` conditions | `Array`<[Condition](../modules/condition.md)<`this`>> |

**Returns:** `Promise`<`boolean`>

___
<a id="open"></a>

###  open

▸ **open**(relativeOrAbsoluteUrl: *`string`*): `Promise`<[Browser](browser.md)>

*Defined in [browser.ts:102](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L102)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| relativeOrAbsoluteUrl | `string` |

**Returns:** `Promise`<[Browser](browser.md)>

___
<a id="perform"></a>

###  perform

▸ **perform**(command: *[Command](../#command)<`this`>*): `Promise`<`this`>

*Inherited from [Entity](entity.md).[perform](entity.md#perform)*

*Defined in [entity.ts:111](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/entity.ts#L111)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| command | [Command](../#command)<`this`> |

**Returns:** `Promise`<`this`>

___
<a id="quit"></a>

###  quit

▸ **quit**(): `Promise`<`void`>

*Defined in [browser.ts:134](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L134)*

**Returns:** `Promise`<`void`>

___
<a id="refresh"></a>

###  refresh

▸ **refresh**(): `Promise`<`void`>

*Defined in [browser.ts:138](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L138)*

**Returns:** `Promise`<`void`>

___
<a id="resizewindow"></a>

###  resizeWindow

▸ **resizeWindow**(width: *`number`*, height: *`number`*): `Promise`<[Browser](browser.md)>

*Defined in [browser.ts:118](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L118)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| width | `number` |
| height | `number` |

**Returns:** `Promise`<[Browser](browser.md)>

___
<a id="screenshot"></a>

###  screenshot

▸ **screenshot**(): `Promise`<`Buffer`>

*Defined in [browser.ts:123](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L123)*

**Returns:** `Promise`<`Buffer`>

___
<a id="should"></a>

###  should

▸ **should**(...conditions: *`Array`<[Condition](../modules/condition.md)<`this`>>*): `Promise`<`this`>

*Inherited from [Entity](entity.md).[should](entity.md#should)*

*Defined in [entity.ts:80](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/entity.ts#L80)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Rest` conditions | `Array`<[Condition](../modules/condition.md)<`this`>> |

**Returns:** `Promise`<`this`>

___
<a id="shouldnot"></a>

###  shouldNot

▸ **shouldNot**(...conditions: *`Array`<[Condition](../modules/condition.md)<`this`>>*): `Promise`<`this`>

*Inherited from [Entity](entity.md).[shouldNot](entity.md#shouldnot)*

*Defined in [entity.ts:85](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/entity.ts#L85)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Rest` conditions | `Array`<[Condition](../modules/condition.md)<`this`>> |

**Returns:** `Promise`<`this`>

___
<a id="switchtodefaultframe"></a>

###  switchToDefaultFrame

▸ **switchToDefaultFrame**(): `Promise`<[Browser](browser.md)>

*Defined in [browser.ts:184](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L184)*

**Returns:** `Promise`<[Browser](browser.md)>

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Defined in [browser.ts:58](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L58)*

**Returns:** `string`

___
<a id="waituntil"></a>

###  waitUntil

▸ **waitUntil**(...conditions: *`Array`<[Condition](../modules/condition.md)<`this`>>*): `Promise`<`boolean`>

*Implementation of [Matchable](../interfaces/matchable.md).[waitUntil](../interfaces/matchable.md#waituntil)*

*Inherited from [Entity](entity.md).[waitUntil](entity.md#waituntil)*

*Defined in [entity.ts:92](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/entity.ts#L92)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Rest` conditions | `Array`<[Condition](../modules/condition.md)<`this`>> |

**Returns:** `Promise`<`boolean`>

___
<a id="waituntilnot"></a>

###  waitUntilNot

▸ **waitUntilNot**(...conditions: *`Array`<[Condition](../modules/condition.md)<`this`>>*): `Promise`<`boolean`>

*Implementation of [Matchable](../interfaces/matchable.md).[waitUntilNot](../interfaces/matchable.md#waituntilnot)*

*Inherited from [Entity](entity.md).[waitUntilNot](entity.md#waituntilnot)*

*Defined in [entity.ts:96](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/entity.ts#L96)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Rest` conditions | `Array`<[Condition](../modules/condition.md)<`this`>> |

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

