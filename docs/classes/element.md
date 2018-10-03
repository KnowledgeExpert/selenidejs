[selenidejs](../README.md) > [Element](../classes/element.md)

# Class: Element

## Hierarchy

**Element**

## Index

### Constructors

* [constructor](element.md#constructor)

### Properties

* [driver](element.md#driver)
* [locator](element.md#locator)
* [wait](element.md#wait)
* [afterActionHooks](element.md#afteractionhooks)
* [beforeActionHooks](element.md#beforeactionhooks)

### Methods

* [all](element.md#all)
* [attribute](element.md#attribute)
* [click](element.md#click)
* [clickByJS](element.md#clickbyjs)
* [contextClick](element.md#contextclick)
* [doubleClick](element.md#doubleclick)
* [element](element.md#element-1)
* [equals](element.md#equals)
* [followingSibling](element.md#followingsibling)
* [getWebElement](element.md#getwebelement)
* [hasAttribute](element.md#hasattribute)
* [hover](element.md#hover)
* [innerHtml](element.md#innerhtml)
* [is](element.md#is)
* [isAbsent](element.md#isabsent)
* [isNot](element.md#isnot)
* [isPresent](element.md#ispresent)
* [isVisible](element.md#isvisible)
* [outerHtml](element.md#outerhtml)
* [parent](element.md#parent)
* [pressEnter](element.md#pressenter)
* [pressEscape](element.md#pressescape)
* [pressTab](element.md#presstab)
* [scrollIntoView](element.md#scrollintoview)
* [sendKeys](element.md#sendkeys)
* [setValue](element.md#setvalue)
* [setValueByJS](element.md#setvaluebyjs)
* [should](element.md#should)
* [shouldNot](element.md#shouldnot)
* [text](element.md#text)
* [toString](element.md#tostring)
* [value](element.md#value)
* [visibleElement](element.md#visibleelement)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Element**(locator: *[Locator](../interfaces/locator.md)<`Promise`<`WebElement`>>*, driver: *[Driver](driver.md)*): [Element](element.md)

*Defined in [element.ts:50](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L50)*

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

*Defined in [element.ts:48](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L48)*

___
<a id="locator"></a>

### `<Private>` locator

**● locator**: *[Locator](../interfaces/locator.md)<`Promise`<`WebElement`>>*

*Defined in [element.ts:49](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L49)*

___
<a id="wait"></a>

### `<Private>` wait

**● wait**: *[Wait](wait.md)<[Element](element.md)>*

*Defined in [element.ts:50](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L50)*

___
<a id="afteractionhooks"></a>

### `<Static>` afterActionHooks

**● afterActionHooks**: *[AfterElementActionHook](../#afterelementactionhook)[]* =  []

*Defined in [element.ts:46](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L46)*

___
<a id="beforeactionhooks"></a>

### `<Static>` beforeActionHooks

**● beforeActionHooks**: *[BeforeElementActionHook](../#beforeelementactionhook)[]* =  []

*Defined in [element.ts:45](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L45)*

___

## Methods

<a id="all"></a>

###  all

▸ **all**(cssOrXpathOrBy: * `string` &#124; `By`*): [Collection](collection.md)

*Defined in [element.ts:193](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L193)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| cssOrXpathOrBy |  `string` &#124; `By`|

**Returns:** [Collection](collection.md)

___
<a id="attribute"></a>

###  attribute

▸ **attribute**(attributeName: *`string`*): `Promise`<`string`>

*Defined in [element.ts:155](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L155)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| attributeName | `string` |

**Returns:** `Promise`<`string`>

___
<a id="click"></a>

###  click

▸ **click**(): `Promise`<`void`>

*Defined in [element.ts:59](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L59)*

**Returns:** `Promise`<`void`>

___
<a id="clickbyjs"></a>

###  clickByJS

▸ **clickByJS**(): `Promise`<`void`>

*Defined in [element.ts:64](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L64)*

**Returns:** `Promise`<`void`>

___
<a id="contextclick"></a>

###  contextClick

▸ **contextClick**(): `Promise`<`void`>

*Defined in [element.ts:94](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L94)*

**Returns:** `Promise`<`void`>

___
<a id="doubleclick"></a>

###  doubleClick

▸ **doubleClick**(): `Promise`<`void`>

*Defined in [element.ts:84](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L84)*

**Returns:** `Promise`<`void`>

___
<a id="element-1"></a>

###  element

▸ **element**(cssOrXpathOrBy: * `string` &#124; `By`*): [Element](element.md)

*Defined in [element.ts:183](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L183)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| cssOrXpathOrBy |  `string` &#124; `By`|

**Returns:** [Element](element.md)

___
<a id="equals"></a>

###  equals

▸ **equals**(element: *[Element](element.md)*): `Promise`<`boolean`>

*Defined in [element.ts:199](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L199)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| element | [Element](element.md) |

**Returns:** `Promise`<`boolean`>

___
<a id="followingsibling"></a>

###  followingSibling

▸ **followingSibling**(predicate?: *`string`*): [Element](element.md)

*Defined in [element.ts:179](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L179)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` predicate | `string` | &quot;&quot; |

**Returns:** [Element](element.md)

___
<a id="getwebelement"></a>

###  getWebElement

▸ **getWebElement**(): `Promise`<`WebElement`>

*Defined in [element.ts:171](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L171)*

**Returns:** `Promise`<`WebElement`>

___
<a id="hasattribute"></a>

###  hasAttribute

▸ **hasAttribute**(attributeName: *`string`*): `Promise`<`boolean`>

*Defined in [element.ts:151](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L151)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| attributeName | `string` |

**Returns:** `Promise`<`boolean`>

___
<a id="hover"></a>

###  hover

▸ **hover**(): `Promise`<`void`>

*Defined in [element.ts:89](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L89)*

**Returns:** `Promise`<`void`>

___
<a id="innerhtml"></a>

###  innerHtml

▸ **innerHtml**(): `Promise`<`string`>

*Defined in [element.ts:159](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L159)*

**Returns:** `Promise`<`string`>

___
<a id="is"></a>

###  is

▸ **is**(condition: *[ElementCondition](elementcondition.md)*, timeout?: *`number`*): `Promise`<`boolean`>

*Defined in [element.ts:126](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L126)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [ElementCondition](elementcondition.md) |
| `Optional` timeout | `number` |

**Returns:** `Promise`<`boolean`>

___
<a id="isabsent"></a>

###  isAbsent

▸ **isAbsent**(): `Promise`<`boolean`>

*Defined in [element.ts:142](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L142)*

**Returns:** `Promise`<`boolean`>

___
<a id="isnot"></a>

###  isNot

▸ **isNot**(condition: *[ElementCondition](elementcondition.md)*): `Promise`<`boolean`>

*Defined in [element.ts:130](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L130)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [ElementCondition](elementcondition.md) |

**Returns:** `Promise`<`boolean`>

___
<a id="ispresent"></a>

###  isPresent

▸ **isPresent**(): `Promise`<`boolean`>

*Defined in [element.ts:138](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L138)*

**Returns:** `Promise`<`boolean`>

___
<a id="isvisible"></a>

###  isVisible

▸ **isVisible**(): `Promise`<`boolean`>

*Defined in [element.ts:134](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L134)*

**Returns:** `Promise`<`boolean`>

___
<a id="outerhtml"></a>

###  outerHtml

▸ **outerHtml**(): `Promise`<`string`>

*Defined in [element.ts:163](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L163)*

**Returns:** `Promise`<`string`>

___
<a id="parent"></a>

###  parent

▸ **parent**(): [Element](element.md)

*Defined in [element.ts:175](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L175)*

**Returns:** [Element](element.md)

___
<a id="pressenter"></a>

###  pressEnter

▸ **pressEnter**(): `Promise`<`void`>

*Defined in [element.ts:99](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L99)*

**Returns:** `Promise`<`void`>

___
<a id="pressescape"></a>

###  pressEscape

▸ **pressEscape**(): `Promise`<`void`>

*Defined in [element.ts:104](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L104)*

**Returns:** `Promise`<`void`>

___
<a id="presstab"></a>

###  pressTab

▸ **pressTab**(): `Promise`<`void`>

*Defined in [element.ts:109](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L109)*

**Returns:** `Promise`<`void`>

___
<a id="scrollintoview"></a>

###  scrollIntoView

▸ **scrollIntoView**(): `Promise`<`void`>

*Defined in [element.ts:114](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L114)*

**Returns:** `Promise`<`void`>

___
<a id="sendkeys"></a>

###  sendKeys

▸ **sendKeys**(value: * `string` &#124; `number`*): `Promise`<`void`>

*Defined in [element.ts:79](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L79)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value |  `string` &#124; `number`|

**Returns:** `Promise`<`void`>

___
<a id="setvalue"></a>

###  setValue

▸ **setValue**(value: * `string` &#124; `number`*): `Promise`<`void`>

*Defined in [element.ts:69](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L69)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value |  `string` &#124; `number`|

**Returns:** `Promise`<`void`>

___
<a id="setvaluebyjs"></a>

###  setValueByJS

▸ **setValueByJS**(value: * `string` &#124; `number`*): `Promise`<`void`>

*Defined in [element.ts:74](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L74)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value |  `string` &#124; `number`|

**Returns:** `Promise`<`void`>

___
<a id="should"></a>

###  should

▸ **should**(condition: *[ElementCondition](elementcondition.md)*, timeout?: *`number`*): `Promise`<[Element](element.md)>

*Defined in [element.ts:118](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L118)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [ElementCondition](elementcondition.md) |
| `Optional` timeout | `number` |

**Returns:** `Promise`<[Element](element.md)>

___
<a id="shouldnot"></a>

###  shouldNot

▸ **shouldNot**(condition: *[ElementCondition](elementcondition.md)*): `Promise`<[Element](element.md)>

*Defined in [element.ts:122](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L122)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [ElementCondition](elementcondition.md) |

**Returns:** `Promise`<[Element](element.md)>

___
<a id="text"></a>

###  text

▸ **text**(): `Promise`<`string`>

*Defined in [element.ts:146](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L146)*

**Returns:** `Promise`<`string`>

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Defined in [element.ts:203](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L203)*

**Returns:** `string`

___
<a id="value"></a>

###  value

▸ **value**(): `Promise`<`string`>

*Defined in [element.ts:167](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L167)*

**Returns:** `Promise`<`string`>

___
<a id="visibleelement"></a>

###  visibleElement

▸ **visibleElement**(cssSelector: *`string`*): [Element](element.md)

*Defined in [element.ts:189](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/element.ts#L189)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| cssSelector | `string` |

**Returns:** [Element](element.md)

___

