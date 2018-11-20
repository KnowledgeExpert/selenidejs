[selenidejs](../README.md) > [ElementsBuilder](../modules/elementsbuilder.md)

# Module: ElementsBuilder

## Index

### Type aliases

* [ElementsContext](elementsbuilder.md#elementscontext)

### Functions

* [all](elementsbuilder.md#all)
* [collectionWithDriver](elementsbuilder.md#collectionwithdriver)
* [element](elementsbuilder.md#element)
* [elementWithDriver](elementsbuilder.md#elementwithdriver)
* [filtered](elementsbuilder.md#filtered)
* [find](elementsbuilder.md#find)
* [followingSibling](elementsbuilder.md#followingsibling)
* [nth](elementsbuilder.md#nth)
* [parent](elementsbuilder.md#parent)
* [wrapAll](elementsbuilder.md#wrapall)
* [wrapElement](elementsbuilder.md#wrapelement)

---

## Type aliases

<a id="elementscontext"></a>

###  ElementsContext

**Ƭ ElementsContext**: * [Element](../classes/element.md) &#124; [Driver](../classes/driver.md) &#124; [Collection](../classes/collection.md)
*

*Defined in [elementsBuilder.ts:33](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/elementsBuilder.ts#L33)*

___

## Functions

<a id="all"></a>

###  all

▸ **all**(cssOrXpathOrBy: * `string` &#124; `By`*): `(Anonymous function)`

*Defined in [elementsBuilder.ts:61](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/elementsBuilder.ts#L61)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| cssOrXpathOrBy |  `string` &#124; `By`|

**Returns:** `(Anonymous function)`

___
<a id="collectionwithdriver"></a>

###  collectionWithDriver

▸ **collectionWithDriver**(context: *[ElementsContext](elementsbuilder.md#elementscontext)*, locator: *[Locator](../interfaces/locator.md)<`WebElement`[]>*): [Collection](../classes/collection.md)

*Defined in [elementsBuilder.ts:39](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/elementsBuilder.ts#L39)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| context | [ElementsContext](elementsbuilder.md#elementscontext) |
| locator | [Locator](../interfaces/locator.md)<`WebElement`[]> |

**Returns:** [Collection](../classes/collection.md)

___
<a id="element"></a>

###  element

▸ **element**(cssOrXpathOrBy: * `string` &#124; `By`*): `(Anonymous function)`

*Defined in [elementsBuilder.ts:43](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/elementsBuilder.ts#L43)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| cssOrXpathOrBy |  `string` &#124; `By`|

**Returns:** `(Anonymous function)`

___
<a id="elementwithdriver"></a>

###  elementWithDriver

▸ **elementWithDriver**(context: *[ElementsContext](elementsbuilder.md#elementscontext)*, locator: *[Locator](../interfaces/locator.md)<`WebElement`>*): [Element](../classes/element.md)

*Defined in [elementsBuilder.ts:35](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/elementsBuilder.ts#L35)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| context | [ElementsContext](elementsbuilder.md#elementscontext) |
| locator | [Locator](../interfaces/locator.md)<`WebElement`> |

**Returns:** [Element](../classes/element.md)

___
<a id="filtered"></a>

###  filtered

▸ **filtered**(condition: *[Condition](../classes/condition.md)<[Element](../classes/element.md)>*): `(Anonymous function)`

*Defined in [elementsBuilder.ts:69](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/elementsBuilder.ts#L69)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [Condition](../classes/condition.md)<[Element](../classes/element.md)> |

**Returns:** `(Anonymous function)`

___
<a id="find"></a>

###  find

▸ **find**(condition: *[Condition](../classes/condition.md)<[Element](../classes/element.md)>*): `(Anonymous function)`

*Defined in [elementsBuilder.ts:83](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/elementsBuilder.ts#L83)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [Condition](../classes/condition.md)<[Element](../classes/element.md)> |

**Returns:** `(Anonymous function)`

___
<a id="followingsibling"></a>

###  followingSibling

▸ **followingSibling**(predicate?: *`string`*): `(Anonymous function)`

*Defined in [elementsBuilder.ts:55](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/elementsBuilder.ts#L55)*

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| `Default value` predicate | `string` | &quot;&quot; |

**Returns:** `(Anonymous function)`

___
<a id="nth"></a>

###  nth

▸ **nth**(index: *`number`*): `(Anonymous function)`

*Defined in [elementsBuilder.ts:76](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/elementsBuilder.ts#L76)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| index | `number` |

**Returns:** `(Anonymous function)`

___
<a id="parent"></a>

### `<Const>` parent

▸ **parent**(element: *[Element](../classes/element.md)*): [Element](../classes/element.md)

*Defined in [elementsBuilder.ts:51](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/elementsBuilder.ts#L51)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| element | [Element](../classes/element.md) |

**Returns:** [Element](../classes/element.md)

___
<a id="wrapall"></a>

###  wrapAll

▸ **wrapAll**(webelements: *`WebElement`[]*): `(Anonymous function)`

*Defined in [elementsBuilder.ts:96](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/elementsBuilder.ts#L96)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| webelements | `WebElement`[] |

**Returns:** `(Anonymous function)`

___
<a id="wrapelement"></a>

###  wrapElement

▸ **wrapElement**(webelement: *`WebElement`*): `(Anonymous function)`

*Defined in [elementsBuilder.ts:89](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/elementsBuilder.ts#L89)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| webelement | `WebElement` |

**Returns:** `(Anonymous function)`

___

