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

* [driver](element.md#driver)
* [locator](element.md#locator)
* [wait](element.md#wait)

### Methods

* [all](element.md#all)
* [attribute](element.md#attribute)
* [click](element.md#click)
* [contextClick](element.md#contextclick)
* [doubleClick](element.md#doubleclick)
* [element](element.md#element-1)
* [equals](element.md#equals)
* [findElement](element.md#findelement)
* [findElements](element.md#findelements)
* [followingSibling](element.md#followingsibling)
* [getWebElement](element.md#getwebelement)
* [hasAttribute](element.md#hasattribute)
* [hover](element.md#hover)
* [innerHtml](element.md#innerhtml)
* [is](element.md#is)
* [isNot](element.md#isnot)
* [isPresent](element.md#ispresent)
* [isVisible](element.md#isvisible)
* [outerHtml](element.md#outerhtml)
* [parent](element.md#parent)
* [pressEnter](element.md#pressenter)
* [pressEscape](element.md#pressescape)
* [pressKey](element.md#presskey)
* [pressTab](element.md#presstab)
* [scrollTo](element.md#scrollto)
* [sendKeys](element.md#sendkeys)
* [setValue](element.md#setvalue)
* [should](element.md#should)
* [shouldNot](element.md#shouldnot)
* [text](element.md#text)
* [toString](element.md#tostring)
* [value](element.md#value)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Element**(locator: *[Locator](../interfaces/locator.md)<`Promise`<`WebElement`>>*, driver: *[Driver](driver.md)*): [Element](element.md)

*Defined in [element.ts:31](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L31)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| locator | [Locator](../interfaces/locator.md)<`Promise`<`WebElement`>> |
| driver | [Driver](driver.md) |

**Returns:** [Element](element.md)

___

## Properties

<a id="driver"></a>

### `<Private>` driver

**● driver**: *[Driver](driver.md)*

*Defined in [element.ts:29](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L29)*

___
<a id="locator"></a>

### `<Private>` locator

**● locator**: *[Locator](../interfaces/locator.md)<`Promise`<`WebElement`>>*

*Defined in [element.ts:30](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L30)*

___
<a id="wait"></a>

### `<Private>` wait

**● wait**: *[Wait](wait.md)<[Element](element.md)>*

*Defined in [element.ts:31](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L31)*

___

## Methods

<a id="all"></a>

###  all

▸ **all**(cssOrXpathOrBy: * `string` &#124; `By`*): [Collection](collection.md)

*Defined in [element.ts:158](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L158)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| cssOrXpathOrBy |  `string` &#124; `By`|

**Returns:** [Collection](collection.md)

___
<a id="attribute"></a>

###  attribute

▸ **attribute**(attributeName: *`string`*): `Promise`<`string`>

*Defined in [element.ts:126](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L126)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| attributeName | `string` |

**Returns:** `Promise`<`string`>

___
<a id="click"></a>

###  click

▸ **click**(): `Promise`<[Element](element.md)>

*Defined in [element.ts:40](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L40)*

**Returns:** `Promise`<[Element](element.md)>

___
<a id="contextclick"></a>

###  contextClick

▸ **contextClick**(): `Promise`<[Element](element.md)>

*Defined in [element.ts:65](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L65)*

**Returns:** `Promise`<[Element](element.md)>

___
<a id="doubleclick"></a>

###  doubleClick

▸ **doubleClick**(): `Promise`<[Element](element.md)>

*Defined in [element.ts:55](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L55)*

**Returns:** `Promise`<[Element](element.md)>

___
<a id="element-1"></a>

###  element

▸ **element**(cssOrXpathOrBy: * `string` &#124; `By`*): [Element](element.md)

*Defined in [element.ts:154](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L154)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| cssOrXpathOrBy |  `string` &#124; `By`|

**Returns:** [Element](element.md)

___
<a id="equals"></a>

###  equals

▸ **equals**(element: *[Element](element.md)*): `Promise`<`boolean`>

*Defined in [element.ts:162](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L162)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| element | [Element](element.md) |

**Returns:** `Promise`<`boolean`>

___
<a id="findelement"></a>

###  findElement

▸ **findElement**(locator: *`By`*): `Promise`<`WebElement`>

*Implementation of [SearchContext](../interfaces/searchcontext.md).[findElement](../interfaces/searchcontext.md#findelement)*

*Defined in [element.ts:170](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L170)*

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

*Defined in [element.ts:166](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L166)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| locator | `By` |

**Returns:** `Promise`<`WebElement`[]>

___
<a id="followingsibling"></a>

###  followingSibling

▸ **followingSibling**(predicate?: *`string`*): [Element](element.md)

*Defined in [element.ts:150](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L150)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` predicate | `string` | &quot;&quot; |

**Returns:** [Element](element.md)

___
<a id="getwebelement"></a>

###  getWebElement

▸ **getWebElement**(): `Promise`<`WebElement`>

*Defined in [element.ts:142](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L142)*

**Returns:** `Promise`<`WebElement`>

___
<a id="hasattribute"></a>

###  hasAttribute

▸ **hasAttribute**(attributeName: *`string`*): `Promise`<`boolean`>

*Defined in [element.ts:122](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L122)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| attributeName | `string` |

**Returns:** `Promise`<`boolean`>

___
<a id="hover"></a>

###  hover

▸ **hover**(): `Promise`<[Element](element.md)>

*Defined in [element.ts:60](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L60)*

**Returns:** `Promise`<[Element](element.md)>

___
<a id="innerhtml"></a>

###  innerHtml

▸ **innerHtml**(): `Promise`<`string`>

*Defined in [element.ts:130](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L130)*

**Returns:** `Promise`<`string`>

___
<a id="is"></a>

###  is

▸ **is**(condition: *[Condition](condition.md)<[Element](element.md)>*, timeout?: *`number`*): `Promise`<`boolean`>

*Defined in [element.ts:102](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L102)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [Condition](condition.md)<[Element](element.md)> |
| `Optional` timeout | `number` |

**Returns:** `Promise`<`boolean`>

___
<a id="isnot"></a>

###  isNot

▸ **isNot**(condition: *[Condition](condition.md)<[Element](element.md)>*): `Promise`<`boolean`>

*Defined in [element.ts:106](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L106)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [Condition](condition.md)<[Element](element.md)> |

**Returns:** `Promise`<`boolean`>

___
<a id="ispresent"></a>

###  isPresent

▸ **isPresent**(): `Promise`<`boolean`>

*Defined in [element.ts:114](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L114)*

**Returns:** `Promise`<`boolean`>

___
<a id="isvisible"></a>

###  isVisible

▸ **isVisible**(): `Promise`<`boolean`>

*Defined in [element.ts:110](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L110)*

**Returns:** `Promise`<`boolean`>

___
<a id="outerhtml"></a>

###  outerHtml

▸ **outerHtml**(): `Promise`<`string`>

*Defined in [element.ts:134](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L134)*

**Returns:** `Promise`<`string`>

___
<a id="parent"></a>

###  parent

▸ **parent**(): [Element](element.md)

*Defined in [element.ts:146](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L146)*

**Returns:** [Element](element.md)

___
<a id="pressenter"></a>

###  pressEnter

▸ **pressEnter**(): `Promise`<[Element](element.md)>

*Defined in [element.ts:70](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L70)*

**Returns:** `Promise`<[Element](element.md)>

___
<a id="pressescape"></a>

###  pressEscape

▸ **pressEscape**(): `Promise`<[Element](element.md)>

*Defined in [element.ts:75](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L75)*

**Returns:** `Promise`<[Element](element.md)>

___
<a id="presskey"></a>

###  pressKey

▸ **pressKey**(key: *`string`*): `Promise`<[Element](element.md)>

*Defined in [element.ts:85](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L85)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| key | `string` |

**Returns:** `Promise`<[Element](element.md)>

___
<a id="presstab"></a>

###  pressTab

▸ **pressTab**(): `Promise`<[Element](element.md)>

*Defined in [element.ts:80](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L80)*

**Returns:** `Promise`<[Element](element.md)>

___
<a id="scrollto"></a>

###  scrollTo

▸ **scrollTo**(): `Promise`<[Element](element.md)>

*Defined in [element.ts:90](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L90)*

**Returns:** `Promise`<[Element](element.md)>

___
<a id="sendkeys"></a>

###  sendKeys

▸ **sendKeys**(value: * `string` &#124; `number`*): `Promise`<[Element](element.md)>

*Defined in [element.ts:50](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L50)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value |  `string` &#124; `number`|

**Returns:** `Promise`<[Element](element.md)>

___
<a id="setvalue"></a>

###  setValue

▸ **setValue**(value: * `string` &#124; `number`*): `Promise`<[Element](element.md)>

*Defined in [element.ts:45](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L45)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value |  `string` &#124; `number`|

**Returns:** `Promise`<[Element](element.md)>

___
<a id="should"></a>

###  should

▸ **should**(condition: *[Condition](condition.md)<[Element](element.md)>*, timeout?: *`number`*): `Promise`<[Element](element.md)>

*Defined in [element.ts:94](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L94)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [Condition](condition.md)<[Element](element.md)> |
| `Optional` timeout | `number` |

**Returns:** `Promise`<[Element](element.md)>

___
<a id="shouldnot"></a>

###  shouldNot

▸ **shouldNot**(condition: *[Condition](condition.md)<[Element](element.md)>*): `Promise`<[Element](element.md)>

*Defined in [element.ts:98](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L98)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [Condition](condition.md)<[Element](element.md)> |

**Returns:** `Promise`<[Element](element.md)>

___
<a id="text"></a>

###  text

▸ **text**(): `Promise`<`string`>

*Defined in [element.ts:118](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L118)*

**Returns:** `Promise`<`string`>

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Defined in [element.ts:174](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L174)*

**Returns:** `string`

___
<a id="value"></a>

###  value

▸ **value**(): `Promise`<`string`>

*Defined in [element.ts:138](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L138)*

**Returns:** `Promise`<`string`>

___

