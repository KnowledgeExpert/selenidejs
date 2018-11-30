[selenidejs](../README.md) > [Collection](../classes/collection.md)

# Class: Collection

## Hierarchy

**Collection**

## Index

### Constructors

* [constructor](collection.md#constructor)

### Properties

* [driver](collection.md#driver)
* [locator](collection.md#locator)
* [wait](collection.md#wait)

### Methods

* [filter](collection.md#filter)
* [filterBy](collection.md#filterby)
* [findBy](collection.md#findby)
* [first](collection.md#first)
* [get](collection.md#get)
* [getWebElements](collection.md#getwebelements)
* [is](collection.md#is)
* [isNot](collection.md#isnot)
* [should](collection.md#should)
* [shouldNot](collection.md#shouldnot)
* [size](collection.md#size)
* [toString](collection.md#tostring)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Collection**(locator: * [Locator](../interfaces/locator.md)<`Promise`<`WebElement`[]>> &#124; [Locator](../interfaces/locator.md)<`WebElement`[]>*, driver: *[Driver](driver.md)*): [Collection](collection.md)

*Defined in [collection.ts:30](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L30)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| locator |  [Locator](../interfaces/locator.md)<`Promise`<`WebElement`[]>> &#124; [Locator](../interfaces/locator.md)<`WebElement`[]>|
| driver | [Driver](driver.md) |

**Returns:** [Collection](collection.md)

___

## Properties

<a id="driver"></a>

###  driver

**● driver**: *[Driver](driver.md)*

*Defined in [collection.ts:28](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L28)*

___
<a id="locator"></a>

### `<Private>` locator

**● locator**: * [Locator](../interfaces/locator.md)<`Promise`<`WebElement`[]>> &#124; [Locator](../interfaces/locator.md)<`WebElement`[]>
*

*Defined in [collection.ts:29](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L29)*

___
<a id="wait"></a>

### `<Private>` wait

**● wait**: *[Wait](wait.md)<[Collection](collection.md)>*

*Defined in [collection.ts:30](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L30)*

___

## Methods

<a id="filter"></a>

###  filter

▸ **filter**(condition: *[Condition](condition.md)<[Element](element.md)>*): [Collection](collection.md)

*Defined in [collection.ts:62](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L62)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [Condition](condition.md)<[Element](element.md)> |

**Returns:** [Collection](collection.md)

___
<a id="filterby"></a>

###  filterBy

▸ **filterBy**(condition: *[Condition](condition.md)<[Element](element.md)>*): [Collection](collection.md)

*Defined in [collection.ts:66](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L66)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [Condition](condition.md)<[Element](element.md)> |

**Returns:** [Collection](collection.md)

___
<a id="findby"></a>

###  findBy

▸ **findBy**(condition: *[Condition](condition.md)<[Element](element.md)>*): [Element](element.md)

*Defined in [collection.ts:70](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L70)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [Condition](condition.md)<[Element](element.md)> |

**Returns:** [Element](element.md)

___
<a id="first"></a>

###  first

▸ **first**(): [Element](element.md)

*Defined in [collection.ts:58](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L58)*

**Returns:** [Element](element.md)

___
<a id="get"></a>

###  get

▸ **get**(index: *`number`*): [Element](element.md)

*Defined in [collection.ts:54](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L54)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| index | `number` |

**Returns:** [Element](element.md)

___
<a id="getwebelements"></a>

###  getWebElements

▸ **getWebElements**(): `Promise`<`WebElement`[]>

*Defined in [collection.ts:78](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L78)*

**Returns:** `Promise`<`WebElement`[]>

___
<a id="is"></a>

###  is

▸ **is**(condition: *[Condition](condition.md)<[Collection](collection.md)>*, timeout?: *`number`*): `Promise`<`boolean`>

*Defined in [collection.ts:46](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L46)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [Condition](condition.md)<[Collection](collection.md)> |
| `Optional` timeout | `number` |

**Returns:** `Promise`<`boolean`>

___
<a id="isnot"></a>

###  isNot

▸ **isNot**(condition: *[Condition](condition.md)<[Collection](collection.md)>*, timeout?: *`number`*): `Promise`<`boolean`>

*Defined in [collection.ts:50](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L50)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [Condition](condition.md)<[Collection](collection.md)> |
| `Optional` timeout | `number` |

**Returns:** `Promise`<`boolean`>

___
<a id="should"></a>

###  should

▸ **should**(condition: *[Condition](condition.md)<[Collection](collection.md)>*, timeout?: *`number`*): `Promise`<[Collection](collection.md)>

*Defined in [collection.ts:38](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L38)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [Condition](condition.md)<[Collection](collection.md)> |
| `Optional` timeout | `number` |

**Returns:** `Promise`<[Collection](collection.md)>

___
<a id="shouldnot"></a>

###  shouldNot

▸ **shouldNot**(condition: *[Condition](condition.md)<[Collection](collection.md)>*, timeout?: *`number`*): `Promise`<[Collection](collection.md)>

*Defined in [collection.ts:42](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L42)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [Condition](condition.md)<[Collection](collection.md)> |
| `Optional` timeout | `number` |

**Returns:** `Promise`<[Collection](collection.md)>

___
<a id="size"></a>

###  size

▸ **size**(): `Promise`<`number`>

*Defined in [collection.ts:74](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L74)*

**Returns:** `Promise`<`number`>

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Defined in [collection.ts:82](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/collection.ts#L82)*

**Returns:** `string`

___

