[selenidejs](../README.md) > [CollectionCondition](../classes/collectioncondition.md)

# Class: CollectionCondition

## Hierarchy

 [Condition](condition.md)<[Collection](collection.md)>

**↳ CollectionCondition**

## Index

### Constructors

* [constructor](collectioncondition.md#constructor)

### Properties

* [matches](collectioncondition.md#matches)
* [toString](collectioncondition.md#tostring)

### Methods

* [and](collectioncondition.md#and)
* [not](collectioncondition.md#not)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new CollectionCondition**(params: *`object`*): [CollectionCondition](collectioncondition.md)

*Inherited from [Condition](condition.md).[constructor](condition.md#constructor)*

*Defined in [conditions/condition.ts:36](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/conditions/condition.ts#L36)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| params | `object` |

**Returns:** [CollectionCondition](collectioncondition.md)

___

## Properties

<a id="matches"></a>

###  matches

**● matches**: *`function`*

*Overrides [Condition](condition.md).[matches](condition.md#matches)*

*Defined in [conditions/collectionCondition.ts:20](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/conditions/collectionCondition.ts#L20)*

#### Type declaration
▸(entity: *[Collection](collection.md)*): `Promise`<[Collection](collection.md)>

**Parameters:**

| Param | Type |
| ------ | ------ |
| entity | [Collection](collection.md) |

**Returns:** `Promise`<[Collection](collection.md)>

___
<a id="tostring"></a>

###  toString

**● toString**: *`function`*

*Inherited from [Condition](condition.md).[toString](condition.md#tostring)*

*Defined in [conditions/condition.ts:36](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/conditions/condition.ts#L36)*

#### Type declaration
▸(): `string`

**Returns:** `string`

___

## Methods

<a id="and"></a>

###  and

▸ **and**<`T`>(...conditions: *`Array`<[Condition](condition.md)<`T`>>*): [Condition](condition.md)<`T`>

*Inherited from [Condition](condition.md).[and](condition.md#and)*

*Defined in [conditions/condition.ts:43](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/conditions/condition.ts#L43)*

**Type parameters:**

#### T 
**Parameters:**

| Param | Type |
| ------ | ------ |
| `Rest` conditions | `Array`<[Condition](condition.md)<`T`>> |

**Returns:** [Condition](condition.md)<`T`>

___
<a id="not"></a>

### `<Static>` not

▸ **not**<`T`>(condition: *[Condition](condition.md)<`T`>*): [Condition](condition.md)<`T`>

*Inherited from [Condition](condition.md).[not](condition.md#not)*

*Defined in [conditions/condition.ts:19](https://github.com/KnowledgeExpert/selenidejs/blob/647b1e4/lib/conditions/condition.ts#L19)*

**Type parameters:**

#### T 
**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [Condition](condition.md)<`T`> |

**Returns:** [Condition](condition.md)<`T`>

___

