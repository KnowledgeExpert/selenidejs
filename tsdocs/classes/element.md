[selenidejs](../README.md) > [Element](../classes/element.md)

# Class: Element

## Hierarchy

**Element**

## Implements

* [SearchContext](../interfaces/searchcontext.md)

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
* [attribute](element.md#attribute)
* [click](element.md#click)
* [clickByJs](element.md#clickbyjs)
* [contextClick](element.md#contextclick)
* [do](element.md#do)
* [doubleClick](element.md#doubleclick)
* [element](element.md#element-1)
* [executeScript](element.md#executescript)
* [findWebElement](element.md#findwebelement)
* [findWebElements](element.md#findwebelements)
* [followingSibling](element.md#followingsibling)
* [get](element.md#get)
* [getWebElement](element.md#getwebelement)
* [hover](element.md#hover)
* [innerHtml](element.md#innerhtml)
* [matches](element.md#matches)
* [matchesNot](element.md#matchesnot)
* [outerHtml](element.md#outerhtml)
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
* [text](element.md#text)
* [toString](element.md#tostring)
* [value](element.md#value)
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
<a id="attribute"></a>

###  attribute

▸ **attribute**(name: *`string`*): `Promise`<`string`>

*Defined in [element.ts:325](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L325)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `Promise`<`string`>

___
<a id="click"></a>

###  click

▸ **click**(): `Promise`<`this`>

*Defined in [element.ts:188](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L188)*

**Returns:** `Promise`<`this`>

___
<a id="clickbyjs"></a>

###  clickByJs

▸ **clickByJs**(xOffset?: *`number`*, yOffset?: *`number`*): `Promise`<`this`>

*Defined in [element.ts:196](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L196)*

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

*Defined in [element.ts:258](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L258)*

**Returns:** `Promise`<`this`>

___
<a id="do"></a>

###  do

▸ **do**<`R`>(queryOrCommand: *[Query](../#query)<[Element](element.md), `R`>*): `Promise`<`R`>

*Defined in [element.ts:167](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L167)*

**Type parameters:**

#### R 
**Parameters:**

| Param | Type |
| ------ | ------ |
| queryOrCommand | [Query](../#query)<[Element](element.md), `R`> |

**Returns:** `Promise`<`R`>

___
<a id="doubleclick"></a>

###  doubleClick

▸ **doubleClick**(): `Promise`<`this`>

*Defined in [element.ts:242](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L242)*

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

*Defined in [element.ts:181](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L181)*

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

*Defined in [element.ts:291](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L291)*

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

*Defined in [element.ts:250](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L250)*

**Returns:** `Promise`<`this`>

___
<a id="innerhtml"></a>

###  innerHtml

▸ **innerHtml**(): `Promise`<`string`>

*Defined in [element.ts:329](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L329)*

**Returns:** `Promise`<`string`>

___
<a id="matches"></a>

###  matches

▸ **matches**(condition: *[ElementCondition](../#elementcondition)*): `Promise`<`boolean`>

*Defined in [element.ts:155](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L155)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [ElementCondition](../#elementcondition) |

**Returns:** `Promise`<`boolean`>

___
<a id="matchesnot"></a>

###  matchesNot

▸ **matchesNot**(condition: *[ElementCondition](../#elementcondition)*): `Promise`<`boolean`>

*Defined in [element.ts:159](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L159)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [ElementCondition](../#elementcondition) |

**Returns:** `Promise`<`boolean`>

___
<a id="outerhtml"></a>

###  outerHtml

▸ **outerHtml**(): `Promise`<`string`>

*Defined in [element.ts:333](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L333)*

**Returns:** `Promise`<`string`>

___
<a id="perform"></a>

###  perform

▸ **perform**(command: *[Command](../#command)<[Element](element.md)>*, timeout?: *`number`*): `Promise`<[Element](element.md)>

*Defined in [element.ts:174](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L174)*

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

*Defined in [element.ts:266](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L266)*

**Returns:** `Promise`<`this`>

___
<a id="pressescape"></a>

###  pressEscape

▸ **pressEscape**(): `Promise`<`this`>

*Defined in [element.ts:271](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L271)*

**Returns:** `Promise`<`this`>

___
<a id="presstab"></a>

###  pressTab

▸ **pressTab**(): `Promise`<`this`>

*Defined in [element.ts:276](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L276)*

**Returns:** `Promise`<`this`>

___
<a id="scrollintoview"></a>

###  scrollIntoView

▸ **scrollIntoView**(): `Promise`<`this`>

*Defined in [element.ts:281](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L281)*

**Returns:** `Promise`<`this`>

___
<a id="sendkeys"></a>

###  sendKeys

▸ **sendKeys**(value: * `string` &#124; `number`*): `Promise`<`this`>

*Defined in [element.ts:235](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L235)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value |  `string` &#124; `number`|

**Returns:** `Promise`<`this`>

___
<a id="setvalue"></a>

###  setValue

▸ **setValue**(value: * `string` &#124; `number`*): `Promise`<`this`>

*Defined in [element.ts:209](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L209)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value |  `string` &#124; `number`|

**Returns:** `Promise`<`this`>

___
<a id="setvaluebyjs"></a>

###  setValueByJs

▸ **setValueByJs**(value: * `string` &#124; `number`*): `Promise`<`this`>

*Defined in [element.ts:220](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L220)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value |  `string` &#124; `number`|

**Returns:** `Promise`<`this`>

___
<a id="should"></a>

###  should

▸ **should**(condition: *[ElementCondition](../#elementcondition)*, timeout?: *`number`*): `Promise`<[Element](element.md)>

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

*Defined in [element.ts:138](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L138)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [ElementCondition](../#elementcondition) |
| `Optional` timeout | `number` |

**Returns:** `Promise`<[Element](element.md)>

___
<a id="text"></a>

###  text

▸ **text**(): `Promise`<`string`>

*Defined in [element.ts:320](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L320)*

**Returns:** `Promise`<`string`>

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Defined in [element.ts:53](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L53)*

**Returns:** `string`

___
<a id="value"></a>

###  value

▸ **value**(): `Promise`<`string`>

*Defined in [element.ts:337](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L337)*

**Returns:** `Promise`<`string`>

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

*Defined in [element.ts:143](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L143)*

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

*Defined in [element.ts:147](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L147)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| condition | [ElementCondition](../#elementcondition) | - |
| `Default value` timeout | `number` |  this.configuration.timeout |

**Returns:** `Promise`<`boolean`>

___

