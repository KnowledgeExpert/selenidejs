[selenidejs](../README.md) > [Condition](../classes/condition.md)

# Class: Condition

## Type parameters
#### T 
## Hierarchy

**Condition**

↳  [CollectionCondition](collectioncondition.md)

↳  [DriverCondition](drivercondition.md)

↳  [ElementCondition](elementcondition.md)

## Index

### Constructors

* [constructor](condition.md#constructor)

### Properties

* [matches](condition.md#matches)
* [toString](condition.md#tostring)

### Methods

* [and](condition.md#and)
* [not](condition.md#not)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Condition**(params: *`object`*): [Condition](condition.md)

*Defined in [conditions/condition.ts:36](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions/condition.ts#L36)*

**Parameters:**

**params: `object`**

| Param | Type |
| ------ | ------ |
| matches | `function` |
| toString | `function` |

**Returns:** [Condition](condition.md)

___

## Properties

<a id="matches"></a>

###  matches

**● matches**: *`function`*

*Defined in [conditions/condition.ts:35](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions/condition.ts#L35)*

#### Type declaration
▸(entity: *`T`*): `Promise`<`T`>

**Parameters:**

| Param | Type |
| ------ | ------ |
| entity | `T` |

**Returns:** `Promise`<`T`>

___
<a id="tostring"></a>

###  toString

**● toString**: *`function`*

*Defined in [conditions/condition.ts:36](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions/condition.ts#L36)*

#### Type declaration
▸(): `string`

**Returns:** `string`

___

## Methods

<a id="and"></a>

###  and

▸ **and**<`T`>(...conditions: *`Array`<[Condition](condition.md)<`T`>>*): [Condition](condition.md)<`T`>

*Defined in [conditions/condition.ts:43](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions/condition.ts#L43)*

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

*Defined in [conditions/condition.ts:19](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions/condition.ts#L19)*

**Type parameters:**

#### T 
**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [Condition](condition.md)<`T`> |

**Returns:** [Condition](condition.md)<`T`>

___

