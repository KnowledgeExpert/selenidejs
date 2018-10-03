[selenidejs](../README.md) > [ElementCondition](../classes/elementcondition.md)

# Class: ElementCondition

## Hierarchy

 [Condition](condition.md)<[Element](element.md)>

**↳ ElementCondition**

## Index

### Constructors

* [constructor](elementcondition.md#constructor)

### Properties

* [matches](elementcondition.md#matches)
* [toString](elementcondition.md#tostring)

### Methods

* [and](elementcondition.md#and)
* [not](elementcondition.md#not)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ElementCondition**(params: *`object`*): [ElementCondition](elementcondition.md)

*Inherited from [Condition](condition.md).[constructor](condition.md#constructor)*

*Defined in [conditions/condition.ts:36](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions/condition.ts#L36)*

**Parameters:**

**params: `object`**

| Param | Type |
| ------ | ------ |
| matches | `function` |
| toString | `function` |

**Returns:** [ElementCondition](elementcondition.md)

___

## Properties

<a id="matches"></a>

###  matches

**● matches**: *`function`*

*Overrides [Condition](condition.md).[matches](condition.md#matches)*

*Defined in [conditions/elementCondition.ts:20](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions/elementCondition.ts#L20)*

#### Type declaration
▸(entity: *[Element](element.md)*): `Promise`<[Element](element.md)>

**Parameters:**

| Param | Type |
| ------ | ------ |
| entity | [Element](element.md) |

**Returns:** `Promise`<[Element](element.md)>

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

