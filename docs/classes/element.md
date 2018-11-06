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

*Defined in [element.ts:32](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L32)*

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

*Defined in [element.ts:30](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L30)*

___
<a id="locator"></a>

### `<Private>` locator

**● locator**: *[Locator](../interfaces/locator.md)<`Promise`<`WebElement`>>*

*Defined in [element.ts:31](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L31)*

___
<a id="wait"></a>

### `<Private>` wait

**● wait**: *[Wait](wait.md)<[Element](element.md)>*

*Defined in [element.ts:32](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L32)*

___

## Methods

<a id="all"></a>

###  all

▸ **all**(cssOrXpathOrBy: * `string` &#124; `By`*): [Collection](collection.md)

*Defined in [element.ts:159](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L159)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| cssOrXpathOrBy |  `string` &#124; `By`|

**Returns:** [Collection](collection.md)

___
<a id="attribute"></a>

###  attribute

▸ **attribute**(attributeName: *`string`*): `Promise`<`string`>

*Defined in [element.ts:127](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L127)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| attributeName | `string` |

**Returns:** `Promise`<`string`>

___
<a id="click"></a>

###  click

▸ **click**(): `Promise`<[Element](element.md)>

*Defined in [element.ts:41](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L41)*

**Returns:** `Promise`<[Element](element.md)>

___
<a id="contextclick"></a>

###  contextClick

▸ **contextClick**(): `Promise`<[Element](element.md)>

*Defined in [element.ts:66](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L66)*

**Returns:** `Promise`<[Element](element.md)>

___
<a id="doubleclick"></a>

###  doubleClick

▸ **doubleClick**(): `Promise`<[Element](element.md)>

*Defined in [element.ts:56](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L56)*

**Returns:** `Promise`<[Element](element.md)>

___
<a id="element-1"></a>

###  element

▸ **element**(cssOrXpathOrBy: * `string` &#124; `By`*): [Element](element.md)

*Defined in [element.ts:155](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L155)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| cssOrXpathOrBy |  `string` &#124; `By`|

**Returns:** [Element](element.md)

___
<a id="equals"></a>

###  equals

▸ **equals**(element: *[Element](element.md)*): `Promise`<`boolean`>

*Defined in [element.ts:163](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L163)*

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

*Defined in [element.ts:171](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L171)*

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

*Defined in [element.ts:167](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L167)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| locator | `By` |

**Returns:** `Promise`<`WebElement`[]>

___
<a id="followingsibling"></a>

###  followingSibling

▸ **followingSibling**(predicate?: *`string`*): [Element](element.md)

*Defined in [element.ts:151](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L151)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` predicate | `string` | &quot;&quot; |

**Returns:** [Element](element.md)

___
<a id="getwebelement"></a>

###  getWebElement

▸ **getWebElement**(): `Promise`<`WebElement`>

*Defined in [element.ts:143](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L143)*

**Returns:** `Promise`<`WebElement`>

___
<a id="hasattribute"></a>

###  hasAttribute

▸ **hasAttribute**(attributeName: *`string`*): `Promise`<`boolean`>

*Defined in [element.ts:123](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L123)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| attributeName | `string` |

**Returns:** `Promise`<`boolean`>

___
<a id="hover"></a>

###  hover

▸ **hover**(): `Promise`<[Element](element.md)>

*Defined in [element.ts:61](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L61)*

**Returns:** `Promise`<[Element](element.md)>

___
<a id="innerhtml"></a>

###  innerHtml

▸ **innerHtml**(): `Promise`<`string`>

*Defined in [element.ts:131](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L131)*

**Returns:** `Promise`<`string`>

___
<a id="is"></a>

###  is

▸ **is**(condition: *[Condition](condition.md)<[Element](element.md)>*, timeout?: *`number`*): `Promise`<`boolean`>

*Defined in [element.ts:103](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L103)*

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

*Defined in [element.ts:107](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L107)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [Condition](condition.md)<[Element](element.md)> |

**Returns:** `Promise`<`boolean`>

___
<a id="ispresent"></a>

###  isPresent

▸ **isPresent**(): `Promise`<`boolean`>

*Defined in [element.ts:115](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L115)*

**Returns:** `Promise`<`boolean`>

___
<a id="isvisible"></a>

###  isVisible

▸ **isVisible**(): `Promise`<`boolean`>

*Defined in [element.ts:111](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L111)*

**Returns:** `Promise`<`boolean`>

___
<a id="outerhtml"></a>

###  outerHtml

▸ **outerHtml**(): `Promise`<`string`>

*Defined in [element.ts:135](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L135)*

**Returns:** `Promise`<`string`>

___
<a id="parent"></a>

###  parent

▸ **parent**(): [Element](element.md)

*Defined in [element.ts:147](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L147)*

**Returns:** [Element](element.md)

___
<a id="pressenter"></a>

###  pressEnter

▸ **pressEnter**(): `Promise`<[Element](element.md)>

*Defined in [element.ts:71](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L71)*

**Returns:** `Promise`<[Element](element.md)>

___
<a id="pressescape"></a>

###  pressEscape

▸ **pressEscape**(): `Promise`<[Element](element.md)>

*Defined in [element.ts:76](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L76)*

**Returns:** `Promise`<[Element](element.md)>

___
<a id="presskey"></a>

###  pressKey

▸ **pressKey**(key: *`string`*): `Promise`<[Element](element.md)>

*Defined in [element.ts:86](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L86)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| key | `string` |

**Returns:** `Promise`<[Element](element.md)>

___
<a id="presstab"></a>

###  pressTab

▸ **pressTab**(): `Promise`<[Element](element.md)>

*Defined in [element.ts:81](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L81)*

**Returns:** `Promise`<[Element](element.md)>

___
<a id="scrollto"></a>

###  scrollTo

▸ **scrollTo**(): `Promise`<[Element](element.md)>

*Defined in [element.ts:91](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L91)*

**Returns:** `Promise`<[Element](element.md)>

___
<a id="sendkeys"></a>

###  sendKeys

▸ **sendKeys**(value: * `string` &#124; `number`*): `Promise`<[Element](element.md)>

*Defined in [element.ts:51](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L51)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value |  `string` &#124; `number`|

**Returns:** `Promise`<[Element](element.md)>

___
<a id="setvalue"></a>

###  setValue

▸ **setValue**(value: * `string` &#124; `number`*): `Promise`<[Element](element.md)>

*Defined in [element.ts:46](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L46)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value |  `string` &#124; `number`|

**Returns:** `Promise`<[Element](element.md)>

___
<a id="should"></a>

###  should

▸ **should**(condition: *[Condition](condition.md)<[Element](element.md)>*, timeout?: *`number`*): `Promise`<[Element](element.md)>

*Defined in [element.ts:95](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L95)*

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

*Defined in [element.ts:99](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L99)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [Condition](condition.md)<[Element](element.md)> |

**Returns:** `Promise`<[Element](element.md)>

___
<a id="text"></a>

###  text

▸ **text**(): `Promise`<`string`>

*Defined in [element.ts:119](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L119)*

**Returns:** `Promise`<`string`>

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Defined in [element.ts:175](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L175)*

**Returns:** `string`

___
<a id="value"></a>

###  value

▸ **value**(): `Promise`<`string`>

*Defined in [element.ts:139](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L139)*

**Returns:** `Promise`<`string`>

___

