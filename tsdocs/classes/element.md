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
* [isFocused](element.md#isfocused)
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

⊕ **new Element**(locator: * [Locator](../interfaces/locator.md)<`Promise`<`WebElement`>> &#124; [Locator](../interfaces/locator.md)<`WebElement`>*, driver: *[Driver](driver.md)*): [Element](element.md)

*Defined in [element.ts:33](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L33)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| locator |  [Locator](../interfaces/locator.md)<`Promise`<`WebElement`>> &#124; [Locator](../interfaces/locator.md)<`WebElement`>|
| driver | [Driver](driver.md) |

**Returns:** [Element](element.md)

___

## Properties

<a id="driver"></a>

### `<Private>` driver

**● driver**: *[Driver](driver.md)*

*Defined in [element.ts:31](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L31)*

___
<a id="locator"></a>

### `<Private>` locator

**● locator**: * [Locator](../interfaces/locator.md)<`Promise`<`WebElement`>> &#124; [Locator](../interfaces/locator.md)<`WebElement`>
*

*Defined in [element.ts:32](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L32)*

___
<a id="wait"></a>

### `<Private>` wait

**● wait**: *[Wait](wait.md)<[Element](element.md)>*

*Defined in [element.ts:33](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L33)*

___

## Methods

<a id="all"></a>

###  all

▸ **all**(cssOrXpathOrBy: * `string` &#124; `By`*): [Collection](collection.md)

*Defined in [element.ts:164](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L164)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| cssOrXpathOrBy |  `string` &#124; `By`|

**Returns:** [Collection](collection.md)

___
<a id="attribute"></a>

###  attribute

▸ **attribute**(attributeName: *`string`*): `Promise`<`string`>

*Defined in [element.ts:132](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L132)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| attributeName | `string` |

**Returns:** `Promise`<`string`>

___
<a id="click"></a>

###  click

▸ **click**(): `Promise`<[Element](element.md)>

*Defined in [element.ts:42](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L42)*

**Returns:** `Promise`<[Element](element.md)>

___
<a id="contextclick"></a>

###  contextClick

▸ **contextClick**(): `Promise`<[Element](element.md)>

*Defined in [element.ts:67](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L67)*

**Returns:** `Promise`<[Element](element.md)>

___
<a id="doubleclick"></a>

###  doubleClick

▸ **doubleClick**(): `Promise`<[Element](element.md)>

*Defined in [element.ts:57](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L57)*

**Returns:** `Promise`<[Element](element.md)>

___
<a id="element-1"></a>

###  element

▸ **element**(cssOrXpathOrBy: * `string` &#124; `By`*): [Element](element.md)

*Defined in [element.ts:160](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L160)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| cssOrXpathOrBy |  `string` &#124; `By`|

**Returns:** [Element](element.md)

___
<a id="equals"></a>

###  equals

▸ **equals**(element: * [Element](element.md) &#124; `WebElement`*): `Promise`<`boolean`>

*Defined in [element.ts:168](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L168)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| element |  [Element](element.md) &#124; `WebElement`|

**Returns:** `Promise`<`boolean`>

___
<a id="findelement"></a>

###  findElement

▸ **findElement**(locator: *`By`*): `Promise`<`WebElement`>

*Implementation of [SearchContext](../interfaces/searchcontext.md).[findElement](../interfaces/searchcontext.md#findelement)*

*Defined in [element.ts:179](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L179)*

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

*Defined in [element.ts:175](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L175)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| locator | `By` |

**Returns:** `Promise`<`WebElement`[]>

___
<a id="followingsibling"></a>

###  followingSibling

▸ **followingSibling**(predicate?: *`string`*): [Element](element.md)

*Defined in [element.ts:156](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L156)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` predicate | `string` | &quot;&quot; |

**Returns:** [Element](element.md)

___
<a id="getwebelement"></a>

###  getWebElement

▸ **getWebElement**(): `Promise`<`WebElement`>

*Defined in [element.ts:148](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L148)*

**Returns:** `Promise`<`WebElement`>

___
<a id="hasattribute"></a>

###  hasAttribute

▸ **hasAttribute**(attributeName: *`string`*): `Promise`<`boolean`>

*Defined in [element.ts:128](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L128)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| attributeName | `string` |

**Returns:** `Promise`<`boolean`>

___
<a id="hover"></a>

###  hover

▸ **hover**(): `Promise`<[Element](element.md)>

*Defined in [element.ts:62](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L62)*

**Returns:** `Promise`<[Element](element.md)>

___
<a id="innerhtml"></a>

###  innerHtml

▸ **innerHtml**(): `Promise`<`string`>

*Defined in [element.ts:136](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L136)*

**Returns:** `Promise`<`string`>

___
<a id="is"></a>

###  is

▸ **is**(condition: *[Condition](condition.md)<[Element](element.md)>*, timeout?: *`number`*): `Promise`<`boolean`>

*Defined in [element.ts:104](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L104)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [Condition](condition.md)<[Element](element.md)> |
| `Optional` timeout | `number` |

**Returns:** `Promise`<`boolean`>

___
<a id="isfocused"></a>

###  isFocused

▸ **isFocused**(): `Promise`<`boolean`>

*Defined in [element.ts:120](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L120)*

**Returns:** `Promise`<`boolean`>

___
<a id="isnot"></a>

###  isNot

▸ **isNot**(condition: *[Condition](condition.md)<[Element](element.md)>*): `Promise`<`boolean`>

*Defined in [element.ts:108](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L108)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [Condition](condition.md)<[Element](element.md)> |

**Returns:** `Promise`<`boolean`>

___
<a id="ispresent"></a>

###  isPresent

▸ **isPresent**(): `Promise`<`boolean`>

*Defined in [element.ts:116](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L116)*

**Returns:** `Promise`<`boolean`>

___
<a id="isvisible"></a>

###  isVisible

▸ **isVisible**(): `Promise`<`boolean`>

*Defined in [element.ts:112](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L112)*

**Returns:** `Promise`<`boolean`>

___
<a id="outerhtml"></a>

###  outerHtml

▸ **outerHtml**(): `Promise`<`string`>

*Defined in [element.ts:140](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L140)*

**Returns:** `Promise`<`string`>

___
<a id="parent"></a>

###  parent

▸ **parent**(): [Element](element.md)

*Defined in [element.ts:152](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L152)*

**Returns:** [Element](element.md)

___
<a id="pressenter"></a>

###  pressEnter

▸ **pressEnter**(): `Promise`<[Element](element.md)>

*Defined in [element.ts:72](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L72)*

**Returns:** `Promise`<[Element](element.md)>

___
<a id="pressescape"></a>

###  pressEscape

▸ **pressEscape**(): `Promise`<[Element](element.md)>

*Defined in [element.ts:77](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L77)*

**Returns:** `Promise`<[Element](element.md)>

___
<a id="presskey"></a>

###  pressKey

▸ **pressKey**(key: *`string`*): `Promise`<[Element](element.md)>

*Defined in [element.ts:87](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L87)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| key | `string` |

**Returns:** `Promise`<[Element](element.md)>

___
<a id="presstab"></a>

###  pressTab

▸ **pressTab**(): `Promise`<[Element](element.md)>

*Defined in [element.ts:82](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L82)*

**Returns:** `Promise`<[Element](element.md)>

___
<a id="scrollto"></a>

###  scrollTo

▸ **scrollTo**(): `Promise`<[Element](element.md)>

*Defined in [element.ts:92](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L92)*

**Returns:** `Promise`<[Element](element.md)>

___
<a id="sendkeys"></a>

###  sendKeys

▸ **sendKeys**(value: * `string` &#124; `number`*): `Promise`<[Element](element.md)>

*Defined in [element.ts:52](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L52)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value |  `string` &#124; `number`|

**Returns:** `Promise`<[Element](element.md)>

___
<a id="setvalue"></a>

###  setValue

▸ **setValue**(value: * `string` &#124; `number`*): `Promise`<[Element](element.md)>

*Defined in [element.ts:47](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L47)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value |  `string` &#124; `number`|

**Returns:** `Promise`<[Element](element.md)>

___
<a id="should"></a>

###  should

▸ **should**(condition: *[Condition](condition.md)<[Element](element.md)>*, timeout?: *`number`*): `Promise`<[Element](element.md)>

*Defined in [element.ts:96](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L96)*

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

*Defined in [element.ts:100](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L100)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [Condition](condition.md)<[Element](element.md)> |

**Returns:** `Promise`<[Element](element.md)>

___
<a id="text"></a>

###  text

▸ **text**(): `Promise`<`string`>

*Defined in [element.ts:124](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L124)*

**Returns:** `Promise`<`string`>

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Defined in [element.ts:183](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L183)*

**Returns:** `string`

___
<a id="value"></a>

###  value

▸ **value**(): `Promise`<`string`>

*Defined in [element.ts:144](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L144)*

**Returns:** `Promise`<`string`>

___

