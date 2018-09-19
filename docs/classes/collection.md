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

* [count](collection.md#count)
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
* [texts](collection.md#texts)
* [toString](collection.md#tostring)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Collection**(locator: *[Locator](../interfaces/locator.md)<`Promise`<`WebElement`[]>>*, driver: *[Driver](driver.md)*): [Collection](collection.md)

*Defined in [collection.ts:31](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/collection.ts#L31)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| locator | [Locator](../interfaces/locator.md)<`Promise`<`WebElement`[]>> |
| driver | [Driver](driver.md) |

**Returns:** [Collection](collection.md)

___

## Properties

<a id="driver"></a>

### `<Private>` driver

**● driver**: *[Driver](driver.md)*

*Defined in [collection.ts:29](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/collection.ts#L29)*

___
<a id="locator"></a>

### `<Private>` locator

**● locator**: *[Locator](../interfaces/locator.md)<`Promise`<`WebElement`[]>>*

*Defined in [collection.ts:30](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/collection.ts#L30)*

___
<a id="wait"></a>

### `<Private>` wait

**● wait**: *[Wait](wait.md)<[Collection](collection.md)>*

*Defined in [collection.ts:31](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/collection.ts#L31)*

___

## Methods

<a id="count"></a>

###  count

▸ **count**(): `Promise`<`number`>

*Defined in [collection.ts:84](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/collection.ts#L84)*

**Returns:** `Promise`<`number`>

___
<a id="filter"></a>

###  filter

▸ **filter**(condition: *[ElementCondition](elementcondition.md)*): [Collection](collection.md)

*Defined in [collection.ts:67](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/collection.ts#L67)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [ElementCondition](elementcondition.md) |

**Returns:** [Collection](collection.md)

___
<a id="filterby"></a>

###  filterBy

▸ **filterBy**(condition: *[ElementCondition](elementcondition.md)*): [Collection](collection.md)

*Defined in [collection.ts:71](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/collection.ts#L71)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [ElementCondition](elementcondition.md) |

**Returns:** [Collection](collection.md)

___
<a id="findby"></a>

###  findBy

▸ **findBy**(condition: *[ElementCondition](elementcondition.md)*): [Element](element.md)

*Defined in [collection.ts:75](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/collection.ts#L75)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [ElementCondition](elementcondition.md) |

**Returns:** [Element](element.md)

___
<a id="first"></a>

###  first

▸ **first**(): [Element](element.md)

*Defined in [collection.ts:63](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/collection.ts#L63)*

**Returns:** [Element](element.md)

___
<a id="get"></a>

###  get

▸ **get**(index: *`number`*): [Element](element.md)

*Defined in [collection.ts:59](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/collection.ts#L59)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| index | `number` |

**Returns:** [Element](element.md)

___
<a id="getwebelements"></a>

###  getWebElements

▸ **getWebElements**(): `Promise`<`WebElement`[]>

*Defined in [collection.ts:96](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/collection.ts#L96)*

**Returns:** `Promise`<`WebElement`[]>

___
<a id="is"></a>

###  is

▸ **is**(condition: *[CollectionCondition](collectioncondition.md)*, timeout?: *`number`*): `Promise`<`boolean`>

*Defined in [collection.ts:49](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/collection.ts#L49)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [CollectionCondition](collectioncondition.md) |
| `Optional` timeout | `number` |

**Returns:** `Promise`<`boolean`>

___
<a id="isnot"></a>

###  isNot

▸ **isNot**(condition: *[CollectionCondition](collectioncondition.md)*, timeout?: *`number`*): `Promise`<`boolean`>

*Defined in [collection.ts:55](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/collection.ts#L55)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [CollectionCondition](collectioncondition.md) |
| `Optional` timeout | `number` |

**Returns:** `Promise`<`boolean`>

___
<a id="should"></a>

###  should

▸ **should**(condition: *[CollectionCondition](collectioncondition.md)*, timeout?: *`number`*): `Promise`<[Collection](collection.md)>

*Defined in [collection.ts:39](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/collection.ts#L39)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [CollectionCondition](collectioncondition.md) |
| `Optional` timeout | `number` |

**Returns:** `Promise`<[Collection](collection.md)>

___
<a id="shouldnot"></a>

###  shouldNot

▸ **shouldNot**(condition: *[CollectionCondition](collectioncondition.md)*, timeout?: *`number`*): `Promise`<[Collection](collection.md)>

*Defined in [collection.ts:45](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/collection.ts#L45)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [CollectionCondition](collectioncondition.md) |
| `Optional` timeout | `number` |

**Returns:** `Promise`<[Collection](collection.md)>

___
<a id="size"></a>

###  size

▸ **size**(): `Promise`<`number`>

*Defined in [collection.ts:80](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/collection.ts#L80)*

**Returns:** `Promise`<`number`>

___
<a id="texts"></a>

###  texts

▸ **texts**(): `Promise`<`string`[]>

*Defined in [collection.ts:88](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/collection.ts#L88)*

**Returns:** `Promise`<`string`[]>

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Defined in [collection.ts:100](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/collection.ts#L100)*

**Returns:** `string`

___

