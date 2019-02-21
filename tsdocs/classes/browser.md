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

* [driver](browser.md#driver)

### Methods

* [all](browser.md#all)
* [clearLocalStorage](browser.md#clearlocalstorage)
* [clearSessionStorage](browser.md#clearsessionstorage)
* [closeCurrentTab](browser.md#closecurrenttab)
* [deleteCookies](browser.md#deletecookies)
* [element](browser.md#element)
* [executeScript](browser.md#executescript)
* [findWebElement](browser.md#findwebelement)
* [findWebElements](browser.md#findwebelements)
* [get](browser.md#get)
* [matching](browser.md#matching)
* [matchingNot](browser.md#matchingnot)
* [nextTab](browser.md#nexttab)
* [open](browser.md#open)
* [perform](browser.md#perform)
* [previousTab](browser.md#previoustab)
* [quit](browser.md#quit)
* [refresh](browser.md#refresh)
* [resizeWindow](browser.md#resizewindow)
* [screenshot](browser.md#screenshot)
* [should](browser.md#should)
* [shouldNot](browser.md#shouldnot)
* [switchToDefaultFrame](browser.md#switchtodefaultframe)
* [switchToFrame](browser.md#switchtoframe)
* [toString](browser.md#tostring)
* [waitUntil](browser.md#waituntil)
* [waitUntilNot](browser.md#waituntilnot)
* [with](browser.md#with)
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

*Defined in [browser.ts:43](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L43)*

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

<a id="driver"></a>

###  driver

getdriver(): `WebDriver`

*Defined in [browser.ts:57](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L57)*

**Returns:** `WebDriver`

___

## Methods

<a id="all"></a>

###  all

▸ **all**(cssOrXpathOrBy: * `string` &#124; `By`*, customized?: *`Partial`<[Configuration](configuration.md)>*): [Collection](collection.md)

*Defined in [browser.ts:87](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L87)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| cssOrXpathOrBy |  `string` &#124; `By`|
| `Optional` customized | `Partial`<[Configuration](configuration.md)> |

**Returns:** [Collection](collection.md)

___
<a id="clearlocalstorage"></a>

###  clearLocalStorage

▸ **clearLocalStorage**(): `Promise`<[Browser](browser.md)>

*Defined in [browser.ts:203](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L203)*

**Returns:** `Promise`<[Browser](browser.md)>

___
<a id="clearsessionstorage"></a>

###  clearSessionStorage

▸ **clearSessionStorage**(): `Promise`<[Browser](browser.md)>

*Defined in [browser.ts:209](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L209)*

**Returns:** `Promise`<[Browser](browser.md)>

___
<a id="closecurrenttab"></a>

###  closeCurrentTab

▸ **closeCurrentTab**(): `Promise`<[Browser](browser.md)>

*Defined in [browser.ts:133](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L133)*

**Returns:** `Promise`<[Browser](browser.md)>

___
<a id="deletecookies"></a>

###  deleteCookies

▸ **deleteCookies**(): `Promise`<[Browser](browser.md)>

*Defined in [browser.ts:215](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L215)*

**Returns:** `Promise`<[Browser](browser.md)>

___
<a id="element"></a>

###  element

▸ **element**(cssOrXpathOrBy: * `string` &#124; `By`*, customized?: *`Partial`<[Configuration](configuration.md)>*): [Element](element.md)

*Defined in [browser.ts:78](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L78)*

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

*Defined in [browser.ts:101](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L101)*

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
<a id="nexttab"></a>

###  nextTab

▸ **nextTab**(): `Promise`<[Browser](browser.md)>

*Defined in [browser.ts:159](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L159)*

**Returns:** `Promise`<[Browser](browser.md)>

___
<a id="open"></a>

###  open

▸ **open**(relativeOrAbsoluteUrl: *`string`*): `Promise`<[Browser](browser.md)>

*Defined in [browser.ts:106](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L106)*

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
<a id="previoustab"></a>

###  previousTab

▸ **previousTab**(): `Promise`<[Browser](browser.md)>

*Defined in [browser.ts:170](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L170)*

**Returns:** `Promise`<[Browser](browser.md)>

___
<a id="quit"></a>

###  quit

▸ **quit**(): `Promise`<`void`>

*Defined in [browser.ts:138](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L138)*

**Returns:** `Promise`<`void`>

___
<a id="refresh"></a>

###  refresh

▸ **refresh**(): `Promise`<`void`>

*Defined in [browser.ts:142](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L142)*

**Returns:** `Promise`<`void`>

___
<a id="resizewindow"></a>

###  resizeWindow

▸ **resizeWindow**(width: *`number`*, height: *`number`*): `Promise`<[Browser](browser.md)>

*Defined in [browser.ts:122](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L122)*

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

*Defined in [browser.ts:127](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L127)*

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

*Defined in [browser.ts:187](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L187)*

**Returns:** `Promise`<[Browser](browser.md)>

___
<a id="switchtoframe"></a>

###  switchToFrame

▸ **switchToFrame**(frameElement: *[Element](element.md)*): `Promise`<[Browser](browser.md)>

*Defined in [browser.ts:180](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L180)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| frameElement | [Element](element.md) |

**Returns:** `Promise`<[Browser](browser.md)>

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Defined in [browser.ts:61](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L61)*

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
<a id="with"></a>

###  with

▸ **with**(custom: *`Partial`<[Configuration](configuration.md)>*): [Browser](browser.md)

*Defined in [browser.ts:53](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L53)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| custom | `Partial`<[Configuration](configuration.md)> |

**Returns:** [Browser](browser.md)

___
<a id="chrome"></a>

### `<Static>` chrome

▸ **chrome**(): [Browser](browser.md)

*Defined in [browser.ts:41](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L41)*

**Returns:** [Browser](browser.md)

___
<a id="chromewith"></a>

### `<Static>` chromeWith

▸ **chromeWith**(): [Customized](customized.md)<[Browser](browser.md)>

*Defined in [browser.ts:36](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L36)*

**Returns:** [Customized](customized.md)<[Browser](browser.md)>

___
<a id="configuredwith"></a>

### `<Static>` configuredWith

▸ **configuredWith**(): [Customized](customized.md)<[Browser](browser.md)>

*Defined in [browser.ts:28](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L28)*

**Returns:** [Customized](customized.md)<[Browser](browser.md)>

___
<a id="drivedby"></a>

### `<Static>` drivedBy

▸ **drivedBy**(driver: *`WebDriver`*): [Customized](customized.md)<[Browser](browser.md)>

*Defined in [browser.ts:32](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/browser.ts#L32)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| driver | `WebDriver` |

**Returns:** [Customized](customized.md)<[Browser](browser.md)>

___

