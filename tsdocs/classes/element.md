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

*Defined in [element.ts:38](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L38)*

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

*Defined in [element.ts:42](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L42)*

___
<a id="locator"></a>

### `<Private>` locator

**● locator**: *[Locator](../interfaces/locator.md)<`Promise`<`WebElement`>>*

*Defined in [element.ts:41](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L41)*

___
<a id="wait"></a>

### `<Private>` wait

**● wait**: *[Wait](wait.md)<[Element](element.md)>*

*Defined in [element.ts:38](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L38)*

___
<a id="afteractionhooks"></a>

### `<Static>` afterActionHooks

**● afterActionHooks**: *[AfterElementActionHook](../#afterelementactionhook)[]* =  []

*Defined in [element.ts:36](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L36)*

___
<a id="beforeactionhooks"></a>

### `<Static>` beforeActionHooks

**● beforeActionHooks**: *[BeforeElementActionHook](../#beforeelementactionhook)[]* =  []

*Defined in [element.ts:35](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L35)*

___

## Accessors

<a id="parent"></a>

###  parent

getparent(): [Element](element.md)

*Defined in [element.ts:79](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L79)*

**Returns:** [Element](element.md)

___

## Methods

<a id="all"></a>

###  all

▸ **all**(cssOrXpathOrBy: * `string` &#124; `By`*): [Collection](collection.md)

*Defined in [element.ts:101](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L101)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| cssOrXpathOrBy |  `string` &#124; `By`|

**Returns:** [Collection](collection.md)

___
<a id="click"></a>

###  click

▸ **click**(): `Promise`<`this`>

*Defined in [element.ts:193](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L193)*

**Returns:** `Promise`<`this`>

___
<a id="clickbyjs"></a>

###  clickByJs

▸ **clickByJs**(xOffset?: *`number`*, yOffset?: *`number`*): `Promise`<`this`>

*Defined in [element.ts:201](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L201)*

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

*Defined in [element.ts:263](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L263)*

**Returns:** `Promise`<`this`>

___
<a id="do"></a>

###  do

▸ **do**<`R`>(queryOrCommand: *[Query](../#query)<[Element](element.md), `R`>*): `Promise`<`R`>

*Defined in [element.ts:172](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L172)*

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

*Defined in [element.ts:247](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L247)*

**Returns:** `Promise`<`this`>

___
<a id="element-1"></a>

###  element

▸ **element**(cssOrXpathOrBy: * `string` &#124; `By`*): [Element](element.md)

*Defined in [element.ts:72](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L72)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| cssOrXpathOrBy |  `string` &#124; `By`|

**Returns:** [Element](element.md)

___
<a id="executescript"></a>

###  executeScript

▸ **executeScript**(scriptOnThisWebElement: *`string`*, ...additionalArgs: *`any`[]*): `Promise`<`Object`>

*Defined in [element.ts:186](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L186)*

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

*Defined in [element.ts:62](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L62)*

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

*Defined in [element.ts:66](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L66)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| by | `By` |

**Returns:** `Promise`<`WebElement`[]>

___
<a id="followingsibling"></a>

###  followingSibling

▸ **followingSibling**(predicate?: *`string`*): [Element](element.md)

*Defined in [element.ts:83](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L83)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` predicate | `string` | &quot;&quot; |

**Returns:** [Element](element.md)

___
<a id="get"></a>

###  get

▸ **get**<`R`>(query: *[Query](../#query)<[Element](element.md), `R`>*, timeout?: *`number`*): `Promise`<`R`>

*Defined in [element.ts:296](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L296)*

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

*Defined in [element.ts:56](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L56)*

**Returns:** `Promise`<`WebElement`>

___
<a id="hover"></a>

###  hover

▸ **hover**(): `Promise`<`this`>

*Defined in [element.ts:255](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L255)*

**Returns:** `Promise`<`this`>

___
<a id="matches"></a>

###  matches

▸ **matches**(condition: *[ElementCondition](../#elementcondition)*): `Promise`<`boolean`>

*Defined in [element.ts:160](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L160)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [ElementCondition](../#elementcondition) |

**Returns:** `Promise`<`boolean`>

___
<a id="matchesnot"></a>

###  matchesNot

▸ **matchesNot**(condition: *[ElementCondition](../#elementcondition)*): `Promise`<`boolean`>

*Defined in [element.ts:164](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L164)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [ElementCondition](../#elementcondition) |

**Returns:** `Promise`<`boolean`>

___
<a id="perform"></a>

###  perform

▸ **perform**(command: *[Command](../#command)<[Element](element.md)>*, timeout?: *`number`*): `Promise`<[Element](element.md)>

*Defined in [element.ts:179](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L179)*

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

*Defined in [element.ts:271](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L271)*

**Returns:** `Promise`<`this`>

___
<a id="pressescape"></a>

###  pressEscape

▸ **pressEscape**(): `Promise`<`this`>

*Defined in [element.ts:276](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L276)*

**Returns:** `Promise`<`this`>

___
<a id="presstab"></a>

###  pressTab

▸ **pressTab**(): `Promise`<`this`>

*Defined in [element.ts:281](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L281)*

**Returns:** `Promise`<`this`>

___
<a id="scrollintoview"></a>

###  scrollIntoView

▸ **scrollIntoView**(): `Promise`<`this`>

*Defined in [element.ts:286](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L286)*

**Returns:** `Promise`<`this`>

___
<a id="sendkeys"></a>

###  sendKeys

▸ **sendKeys**(value: * `string` &#124; `number`*): `Promise`<`this`>

*Defined in [element.ts:240](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L240)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value |  `string` &#124; `number`|

**Returns:** `Promise`<`this`>

___
<a id="setvalue"></a>

###  setValue

▸ **setValue**(value: * `string` &#124; `number`*): `Promise`<`this`>

*Defined in [element.ts:214](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L214)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value |  `string` &#124; `number`|

**Returns:** `Promise`<`this`>

___
<a id="setvaluebyjs"></a>

###  setValueByJs

▸ **setValueByJs**(value: * `string` &#124; `number`*): `Promise`<`this`>

*Defined in [element.ts:225](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L225)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value |  `string` &#124; `number`|

**Returns:** `Promise`<`this`>

___
<a id="should"></a>

###  should

▸ **should**(condition: *[ElementCondition](../#elementcondition)*, timeout?: *`number`*): `Promise`<[Element](element.md)>

*Defined in [element.ts:123](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L123)*

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

*Defined in [element.ts:143](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L143)*

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

*Defined in [element.ts:52](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L52)*

**Returns:** `string`

___
<a id="visibleelement"></a>

###  visibleElement

▸ **visibleElement**(cssOrXpathOrBy: * `string` &#124; `By`*): [Element](element.md)

*Defined in [element.ts:97](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L97)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| cssOrXpathOrBy |  `string` &#124; `By`|

**Returns:** [Element](element.md)

___
<a id="waituntil"></a>

###  waitUntil

▸ **waitUntil**(condition: *[ElementCondition](../#elementcondition)*, timeout?: *`number`*): `Promise`<`boolean`>

*Defined in [element.ts:148](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L148)*

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

*Defined in [element.ts:152](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L152)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| condition | [ElementCondition](../#elementcondition) | - |
| `Default value` timeout | `number` |  this.configuration.timeout |

**Returns:** `Promise`<`boolean`>

___

