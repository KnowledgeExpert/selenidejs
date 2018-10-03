[selenidejs](../README.md) > [DriverCondition](../classes/drivercondition.md)

# Class: DriverCondition

## Hierarchy

 [Condition](condition.md)<[Driver](driver.md)>

**↳ DriverCondition**

## Index

### Constructors

* [constructor](drivercondition.md#constructor)

### Properties

* [matches](drivercondition.md#matches)
* [toString](drivercondition.md#tostring)

### Methods

* [and](drivercondition.md#and)
* [not](drivercondition.md#not)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new DriverCondition**(params: *`object`*): [DriverCondition](drivercondition.md)

*Inherited from [Condition](condition.md).[constructor](condition.md#constructor)*

*Defined in [conditions/condition.ts:36](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions/condition.ts#L36)*

**Parameters:**

**params: `object`**

| Param | Type |
| ------ | ------ |
| matches | `function` |
| toString | `function` |

**Returns:** [DriverCondition](drivercondition.md)

___

## Properties

<a id="matches"></a>

###  matches

**● matches**: *`function`*

*Overrides [Condition](condition.md).[matches](condition.md#matches)*

*Defined in [conditions/driverCondition.ts:20](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions/driverCondition.ts#L20)*

#### Type declaration
▸(entity: *[Driver](driver.md)*): `Promise`<[Driver](driver.md)>

**Parameters:**

| Param | Type |
| ------ | ------ |
| entity | [Driver](driver.md) |

**Returns:** `Promise`<[Driver](driver.md)>

___
<a id="tostring"></a>

###  toString

**● toString**: *`function`*

*Inherited from [Condition](condition.md).[toString](condition.md#tostring)*

*Defined in [conditions/condition.ts:36](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions/condition.ts#L36)*

#### Type declaration
▸(): `string`

**Returns:** `string`

___

## Methods

<a id="and"></a>

###  and

▸ **and**<`T`>(...conditions: *`Array`<[Condition](condition.md)<`T`>>*): [Condition](condition.md)<`T`>

*Inherited from [Condition](condition.md).[and](condition.md#and)*

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

*Inherited from [Condition](condition.md).[not](condition.md#not)*

*Defined in [conditions/condition.ts:19](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions/condition.ts#L19)*

**Type parameters:**

#### T 
**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [Condition](condition.md)<`T`> |

**Returns:** [Condition](condition.md)<`T`>

___

