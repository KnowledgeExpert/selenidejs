[selenidejs](../README.md) > [Element](../classes/element.md)

# Class: Element

## Hierarchy

**Element**

## Implements

* [SearchContext](../interfaces/searchcontext.md)
* [Assertable](../interfaces/assertable.md)<[Element](element.md)>

## Index

### Constructors

* [constructor](element.md#constructor)

### Properties

* [configuration](element.md#configuration)
* [locator](element.md#locator)
* [wait](element.md#wait)
* [afterActionHooks](element.md#afteractionhooks)
* [beforeActionHooks](element.md#beforeactionhooks)

### Accessors

* [parent](element.md#parent)

### Methods

* [all](element.md#all)
* [click](element.md#click)
* [clickByJs](element.md#clickbyjs)
* [contextClick](element.md#contextclick)
* [doubleClick](element.md#doubleclick)
* [element](element.md#element-1)
* [executeScript](element.md#executescript)
* [findWebElement](element.md#findwebelement)
* [findWebElements](element.md#findwebelements)
* [followingSibling](element.md#followingsibling)
* [get](element.md#get)
* [getWebElement](element.md#getwebelement)
* [hover](element.md#hover)
* [matches](element.md#matches)
* [matchesNot](element.md#matchesnot)
* [perform](element.md#perform)
* [pressEnter](element.md#pressenter)
* [pressEscape](element.md#pressescape)
* [pressTab](element.md#presstab)
* [scrollIntoView](element.md#scrollintoview)
* [sendKeys](element.md#sendkeys)
* [setValue](element.md#setvalue)
* [setValueByJs](element.md#setvaluebyjs)
* [should](element.md#should)
* [shouldNot](element.md#shouldnot)
* [toString](element.md#tostring)
* [visibleElement](element.md#visibleelement)
* [waitUntil](element.md#waituntil)
* [waitUntilNot](element.md#waituntilnot)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Element**(locator: *[Locator](../interfaces/locator.md)<`Promise`<`WebElement`>>*, configuration: *[Configuration](configuration.md)*): [Element](element.md)

*Defined in [element.ts:39](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L39)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| locator | [Locator](../interfaces/locator.md)<`Promise`<`WebElement`>> |
| configuration | [Configuration](configuration.md) |

**Returns:** [Element](element.md)

___

## Properties

<a id="configuration"></a>

### `<Private>` configuration

**● configuration**: *[Configuration](configuration.md)*

*Defined in [element.ts:43](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L43)*

___
<a id="locator"></a>

### `<Private>` locator

**● locator**: *[Locator](../interfaces/locator.md)<`Promise`<`WebElement`>>*

*Defined in [element.ts:42](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L42)*

___
<a id="wait"></a>

### `<Private>` wait

**● wait**: *[Wait](wait.md)<[Element](element.md)>*

*Defined in [element.ts:39](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L39)*

___
<a id="afteractionhooks"></a>

### `<Static>` afterActionHooks

**● afterActionHooks**: *[AfterElementActionHook](../#afterelementactionhook)[]* =  []

*Defined in [element.ts:37](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L37)*

___
<a id="beforeactionhooks"></a>

### `<Static>` beforeActionHooks

**● beforeActionHooks**: *[BeforeElementActionHook](../#beforeelementactionhook)[]* =  []

*Defined in [element.ts:36](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L36)*

___

## Accessors

<a id="parent"></a>

###  parent

getparent(): [Element](element.md)

*Defined in [element.ts:80](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L80)*

**Returns:** [Element](element.md)

___

## Methods

<a id="all"></a>

###  all

▸ **all**(cssOrXpathOrBy: * `string` &#124; `By`*): [Collection](collection.md)

*Defined in [element.ts:102](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L102)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| cssOrXpathOrBy |  `string` &#124; `By`|

**Returns:** [Collection](collection.md)

___
<a id="click"></a>

###  click

▸ **click**(): `Promise`<`this`>

*Defined in [element.ts:186](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L186)*

**Returns:** `Promise`<`this`>

___
<a id="clickbyjs"></a>

###  clickByJs

▸ **clickByJs**(xOffset?: *`number`*, yOffset?: *`number`*): `Promise`<`this`>

*Defined in [element.ts:194](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L194)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` xOffset | `number` | 0 |
| `Default value` yOffset | `number` | 0 |

**Returns:** `Promise`<`this`>

___
<a id="contextclick"></a>

###  contextClick

▸ **contextClick**(): `Promise`<`this`>

*Defined in [element.ts:256](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L256)*

**Returns:** `Promise`<`this`>

___
<a id="doubleclick"></a>

###  doubleClick

▸ **doubleClick**(): `Promise`<`this`>

*Defined in [element.ts:240](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L240)*

**Returns:** `Promise`<`this`>

___
<a id="element-1"></a>

###  element

▸ **element**(cssOrXpathOrBy: * `string` &#124; `By`*): [Element](element.md)

*Defined in [element.ts:73](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L73)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| cssOrXpathOrBy |  `string` &#124; `By`|

**Returns:** [Element](element.md)

___
<a id="executescript"></a>

###  executeScript

▸ **executeScript**(scriptOnThisWebElement: *`string`*, ...additionalArgs: *`any`[]*): `Promise`<`Object`>

*Defined in [element.ts:179](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L179)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| scriptOnThisWebElement | `string` |
| `Rest` additionalArgs | `any`[] |

**Returns:** `Promise`<`Object`>

___
<a id="findwebelement"></a>

###  findWebElement

▸ **findWebElement**(by: *`By`*): `Promise`<`WebElement`>

*Implementation of [SearchContext](../interfaces/searchcontext.md).[findWebElement](../interfaces/searchcontext.md#findwebelement)*

*Defined in [element.ts:63](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L63)*

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

*Defined in [element.ts:67](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L67)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| by | `By` |

**Returns:** `Promise`<`WebElement`[]>

___
<a id="followingsibling"></a>

###  followingSibling

▸ **followingSibling**(predicate?: *`string`*): [Element](element.md)

*Defined in [element.ts:84](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L84)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` predicate | `string` | &quot;&quot; |

**Returns:** [Element](element.md)

___
<a id="get"></a>

###  get

▸ **get**<`R`>(query: *[Query](../#query)<[Element](element.md), `R`>*, timeout?: *`number`*): `Promise`<`R`>

*Defined in [element.ts:288](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L288)*

**Type parameters:**

#### R 
**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| query | [Query](../#query)<[Element](element.md), `R`> | - |
| `Default value` timeout | `number` |  this.configuration.timeout |

**Returns:** `Promise`<`R`>

___
<a id="getwebelement"></a>

###  getWebElement

▸ **getWebElement**(): `Promise`<`WebElement`>

*Defined in [element.ts:57](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L57)*

**Returns:** `Promise`<`WebElement`>

___
<a id="hover"></a>

###  hover

▸ **hover**(): `Promise`<`this`>

*Defined in [element.ts:248](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L248)*

**Returns:** `Promise`<`this`>

___
<a id="matches"></a>

###  matches

▸ **matches**(condition: *[ElementCondition](../#elementcondition)*): `Promise`<`boolean`>

*Defined in [element.ts:161](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L161)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [ElementCondition](../#elementcondition) |

**Returns:** `Promise`<`boolean`>

___
<a id="matchesnot"></a>

###  matchesNot

▸ **matchesNot**(condition: *[ElementCondition](../#elementcondition)*): `Promise`<`boolean`>

*Defined in [element.ts:165](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L165)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [ElementCondition](../#elementcondition) |

**Returns:** `Promise`<`boolean`>

___
<a id="perform"></a>

###  perform

▸ **perform**(command: *[Command](../#command)<[Element](element.md)>*, timeout?: *`number`*): `Promise`<[Element](element.md)>

*Defined in [element.ts:172](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L172)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| command | [Command](../#command)<[Element](element.md)> | - |
| `Default value` timeout | `number` |  this.configuration.timeout |

**Returns:** `Promise`<[Element](element.md)>

___
<a id="pressenter"></a>

###  pressEnter

▸ **pressEnter**(): `Promise`<`this`>

*Defined in [element.ts:264](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L264)*

**Returns:** `Promise`<`this`>

___
<a id="pressescape"></a>

###  pressEscape

▸ **pressEscape**(): `Promise`<`this`>

*Defined in [element.ts:269](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L269)*

**Returns:** `Promise`<`this`>

___
<a id="presstab"></a>

###  pressTab

▸ **pressTab**(): `Promise`<`this`>

*Defined in [element.ts:274](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L274)*

**Returns:** `Promise`<`this`>

___
<a id="scrollintoview"></a>

###  scrollIntoView

▸ **scrollIntoView**(): `Promise`<`this`>

*Defined in [element.ts:279](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L279)*

**Returns:** `Promise`<`this`>

___
<a id="sendkeys"></a>

###  sendKeys

▸ **sendKeys**(value: * `string` &#124; `number`*): `Promise`<`this`>

*Defined in [element.ts:233](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L233)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value |  `string` &#124; `number`|

**Returns:** `Promise`<`this`>

___
<a id="setvalue"></a>

###  setValue

▸ **setValue**(value: * `string` &#124; `number`*): `Promise`<`this`>

*Defined in [element.ts:207](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L207)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value |  `string` &#124; `number`|

**Returns:** `Promise`<`this`>

___
<a id="setvaluebyjs"></a>

###  setValueByJs

▸ **setValueByJs**(value: * `string` &#124; `number`*): `Promise`<`this`>

*Defined in [element.ts:218](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L218)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value |  `string` &#124; `number`|

**Returns:** `Promise`<`this`>

___
<a id="should"></a>

###  should

▸ **should**(condition: *[ElementCondition](../#elementcondition)*, timeout?: *`number`*): `Promise`<[Element](element.md)>

*Implementation of [Assertable](../interfaces/assertable.md).[should](../interfaces/assertable.md#should)*

*Defined in [element.ts:124](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L124)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| condition | [ElementCondition](../#elementcondition) | - |
| `Default value` timeout | `number` |  this.configuration.timeout |

**Returns:** `Promise`<[Element](element.md)>

___
<a id="shouldnot"></a>

###  shouldNot

▸ **shouldNot**(condition: *[ElementCondition](../#elementcondition)*, timeout?: *`number`*): `Promise`<[Element](element.md)>

*Implementation of [Assertable](../interfaces/assertable.md).[shouldNot](../interfaces/assertable.md#shouldnot)*

*Defined in [element.ts:144](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L144)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [ElementCondition](../#elementcondition) |
| `Optional` timeout | `number` |

**Returns:** `Promise`<[Element](element.md)>

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Defined in [element.ts:53](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L53)*

**Returns:** `string`

___
<a id="visibleelement"></a>

###  visibleElement

▸ **visibleElement**(cssOrXpathOrBy: * `string` &#124; `By`*): [Element](element.md)

*Defined in [element.ts:98](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L98)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| cssOrXpathOrBy |  `string` &#124; `By`|

**Returns:** [Element](element.md)

___
<a id="waituntil"></a>

###  waitUntil

▸ **waitUntil**(condition: *[ElementCondition](../#elementcondition)*, timeout?: *`number`*): `Promise`<`boolean`>

*Defined in [element.ts:149](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L149)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| condition | [ElementCondition](../#elementcondition) | - |
| `Default value` timeout | `number` |  this.configuration.timeout |

**Returns:** `Promise`<`boolean`>

___
<a id="waituntilnot"></a>

###  waitUntilNot

▸ **waitUntilNot**(condition: *[ElementCondition](../#elementcondition)*, timeout?: *`number`*): `Promise`<`boolean`>

*Defined in [element.ts:153](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L153)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| condition | [ElementCondition](../#elementcondition) | - |
| `Default value` timeout | `number` |  this.configuration.timeout |

**Returns:** `Promise`<`boolean`>

___

