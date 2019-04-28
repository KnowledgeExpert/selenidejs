[selenidejs](../README.md) > [Element](../classes/element.md)

# Class: Element

## Hierarchy

 [Entity](entity.md)

**↳ Element**

## Implements

* [Assertable](../interfaces/assertable.md)
* [Matchable](../interfaces/matchable.md)
* [Assertable](../interfaces/assertable.md)
* [Matchable](../interfaces/matchable.md)

## Index

### Constructors

* [constructor](element.md#constructor)

### Properties

* [configuration](element.md#configuration)
* [locator](element.md#locator)
* [wait](element.md#wait)

### Accessors

* [followingSibling](element.md#followingsibling)
* [parent](element.md#parent)

### Methods

* [all](element.md#all)
* [clear](element.md#clear)
* [click](element.md#click)
* [contextClick](element.md#contextclick)
* [doubleClick](element.md#doubleclick)
* [element](element.md#element-1)
* [executeScript](element.md#executescript)
* [get](element.md#get)
* [getWebElement](element.md#getwebelement)
* [hover](element.md#hover)
* [matching](element.md#matching)
* [perform](element.md#perform)
* [pressEnter](element.md#pressenter)
* [pressEscape](element.md#pressescape)
* [pressTab](element.md#presstab)
* [setValue](element.md#setvalue)
* [should](element.md#should)
* [toString](element.md#tostring)
* [type](element.md#type)
* [waitUntil](element.md#waituntil)
* [with](element.md#with)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Element**(locator: *[Locator](../interfaces/locator.md)<`Promise`<`WebElement`>>*, configuration: *[Configuration](configuration.md)*): [Element](element.md)

*Overrides [Entity](entity.md).[constructor](entity.md#constructor)*

*Defined in [element.ts:29](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L29)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| locator | [Locator](../interfaces/locator.md)<`Promise`<`WebElement`>> |
| configuration | [Configuration](configuration.md) |

**Returns:** [Element](element.md)

___

## Properties

<a id="configuration"></a>

### `<Protected>` configuration

**● configuration**: *[Configuration](configuration.md)*

*Overrides [Entity](entity.md).[configuration](entity.md#configuration)*

*Defined in [element.ts:34](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L34)*

___
<a id="locator"></a>

### `<Private>` locator

**● locator**: *[Locator](../interfaces/locator.md)<`Promise`<`WebElement`>>*

*Defined in [element.ts:32](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L32)*

___
<a id="wait"></a>

### `<Protected>` wait

**● wait**: *[Wait](wait.md)<`this`>*

*Inherited from [Entity](entity.md).[wait](entity.md#wait)*

*Defined in [entity.ts:52](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/entity.ts#L52)*

___

## Accessors

<a id="followingsibling"></a>

###  followingSibling

getfollowingSibling(): [Element](element.md)

*Defined in [element.ts:64](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L64)*

**Returns:** [Element](element.md)

___
<a id="parent"></a>

###  parent

getparent(): [Element](element.md)

*Defined in [element.ts:60](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L60)*

**Returns:** [Element](element.md)

___

## Methods

<a id="all"></a>

###  all

▸ **all**(cssOrXpathOrBy: * `string` &#124; `By`*): [Collection](collection.md)

*Defined in [element.ts:68](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L68)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| cssOrXpathOrBy |  `string` &#124; `By`|

**Returns:** [Collection](collection.md)

___
<a id="clear"></a>

###  clear

▸ **clear**(): `Promise`<`this`>

*Defined in [element.ts:108](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L108)*

**Returns:** `Promise`<`this`>

___
<a id="click"></a>

###  click

▸ **click**(): `Promise`<`this`>

*Defined in [element.ts:101](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L101)*

**Returns:** `Promise`<`this`>

___
<a id="contextclick"></a>

###  contextClick

▸ **contextClick**(): `Promise`<`this`>

*Defined in [element.ts:163](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L163)*

**Returns:** `Promise`<`this`>

___
<a id="doubleclick"></a>

###  doubleClick

▸ **doubleClick**(): `Promise`<`this`>

*Defined in [element.ts:139](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L139)*

**Returns:** `Promise`<`this`>

___
<a id="element-1"></a>

###  element

▸ **element**(cssOrXpathOrBy: * `string` &#124; `By`*): [Element](element.md)

*Defined in [element.ts:53](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L53)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| cssOrXpathOrBy |  `string` &#124; `By`|

**Returns:** [Element](element.md)

___
<a id="executescript"></a>

###  executeScript

▸ **executeScript**(scriptOnThisWebElement: * `string` &#124; `Function`*, ...additionalArgs: *`any`[]*): `Promise`<`Object`>

*Defined in [element.ts:94](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L94)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| scriptOnThisWebElement |  `string` &#124; `Function`|
| `Rest` additionalArgs | `any`[] |

**Returns:** `Promise`<`Object`>

___
<a id="get"></a>

###  get

▸ **get**<`R`>(query: *[Lambda](../#lambda)<`this`, `R`>*): `Promise`<`R`>

*Inherited from [Entity](entity.md).[get](entity.md#get)*

*Defined in [entity.ts:100](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/entity.ts#L100)*

**Type parameters:**

#### R 
**Parameters:**

| Param | Type |
| ------ | ------ |
| query | [Lambda](../#lambda)<`this`, `R`> |

**Returns:** `Promise`<`R`>

___
<a id="getwebelement"></a>

###  getWebElement

▸ **getWebElement**(): `Promise`<`WebElement`>

*Defined in [element.ts:43](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L43)*

**Returns:** `Promise`<`WebElement`>

___
<a id="hover"></a>

###  hover

▸ **hover**(): `Promise`<`this`>

*Defined in [element.ts:151](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L151)*

**Returns:** `Promise`<`this`>

___
<a id="matching"></a>

###  matching

▸ **matching**(...conditions: *`Array`<[Condition](condition.md)<`this`>>*): `Promise`<`boolean`>

*Inherited from [Entity](entity.md).[matching](entity.md#matching)*

*Defined in [entity.ts:87](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/entity.ts#L87)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Rest` conditions | `Array`<[Condition](condition.md)<`this`>> |

**Returns:** `Promise`<`boolean`>

___
<a id="perform"></a>

###  perform

▸ **perform**(command: *[Lambda](../#lambda)<`this`, `void`>*): `Promise`<`this`>

*Inherited from [Entity](entity.md).[perform](entity.md#perform)*

*Defined in [entity.ts:93](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/entity.ts#L93)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| command | [Lambda](../#lambda)<`this`, `void`> |

**Returns:** `Promise`<`this`>

___
<a id="pressenter"></a>

###  pressEnter

▸ **pressEnter**(): `Promise`<`this`>

*Defined in [element.ts:182](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L182)*

**Returns:** `Promise`<`this`>

___
<a id="pressescape"></a>

###  pressEscape

▸ **pressEscape**(): `Promise`<`this`>

*Defined in [element.ts:186](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L186)*

**Returns:** `Promise`<`this`>

___
<a id="presstab"></a>

###  pressTab

▸ **pressTab**(): `Promise`<`this`>

*Defined in [element.ts:190](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L190)*

**Returns:** `Promise`<`this`>

___
<a id="setvalue"></a>

###  setValue

▸ **setValue**(value: * `string` &#124; `number`*): `Promise`<`this`>

*Defined in [element.ts:115](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L115)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value |  `string` &#124; `number`|

**Returns:** `Promise`<`this`>

___
<a id="should"></a>

###  should

▸ **should**(...conditions: *`Array`<[Condition](condition.md)<`this`>>*): `Promise`<`this`>

*Inherited from [Entity](entity.md).[should](entity.md#should)*

*Defined in [entity.ts:76](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/entity.ts#L76)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Rest` conditions | `Array`<[Condition](condition.md)<`this`>> |

**Returns:** `Promise`<`this`>

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Defined in [element.ts:39](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L39)*

**Returns:** `string`

___
<a id="type"></a>

###  type

▸ **type**(keys: * `string` &#124; `number`*): `Promise`<`this`>

*Defined in [element.ts:129](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L129)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| keys |  `string` &#124; `number`|

**Returns:** `Promise`<`this`>

___
<a id="waituntil"></a>

###  waitUntil

▸ **waitUntil**(...conditions: *`Array`<[Condition](condition.md)<`this`>>*): `Promise`<`boolean`>

*Implementation of [Matchable](../interfaces/matchable.md).[waitUntil](../interfaces/matchable.md#waituntil)*

*Inherited from [Entity](entity.md).[waitUntil](entity.md#waituntil)*

*Defined in [entity.ts:83](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/entity.ts#L83)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Rest` conditions | `Array`<[Condition](condition.md)<`this`>> |

**Returns:** `Promise`<`boolean`>

___
<a id="with"></a>

###  with

▸ **with**(customConfig: *`Partial`<[Configuration](configuration.md)>*): [Element](element.md)

*Defined in [element.ts:49](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L49)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| customConfig | `Partial`<[Configuration](configuration.md)> |

**Returns:** [Element](element.md)

___

