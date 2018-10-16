[selenidejs](../README.md) > [Condition](../classes/condition.md)

# Class: Condition

## Type parameters
#### T 
## Hierarchy

**Condition**

## Index

### Constructors

* [constructor](condition.md#constructor)

### Properties

* [description](condition.md#description)
* [func](condition.md#func)

### Methods

* [and](condition.md#and)
* [matches](condition.md#matches)
* [toString](condition.md#tostring)
* [create](condition.md#create)
* [not](condition.md#not)

---

## Constructors

<a id="constructor"></a>

### `<Private>` constructor

⊕ **new Condition**(description: *`string`*, func: *`function`*): [Condition](condition.md)

*Defined in [condition.ts:39](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/condition.ts#L39)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| description | `string` |
| func | `function` |

**Returns:** [Condition](condition.md)

___

## Properties

<a id="description"></a>

### `<Private>` description

**● description**: *`any`*

*Defined in [condition.ts:39](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/condition.ts#L39)*

___
<a id="func"></a>

### `<Private>` func

**● func**: *`function`*

*Defined in [condition.ts:38](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/condition.ts#L38)*

#### Type declaration
▸(T: *`any`*): `Promise`<`void`>

**Parameters:**

| Param | Type |
| ------ | ------ |
| T | `any` |

**Returns:** `Promise`<`void`>

___

## Methods

<a id="and"></a>

###  and

▸ **and**(...conditions: *`Array`<[Condition](condition.md)<`T`>>*): [Condition](condition.md)<`T`>

*Defined in [condition.ts:59](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/condition.ts#L59)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Rest` conditions | `Array`<[Condition](condition.md)<`T`>> |

**Returns:** [Condition](condition.md)<`T`>

___
<a id="matches"></a>

###  matches

▸ **matches**(entity: *`T`*): `Promise`<`void`>

*Defined in [condition.ts:46](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/condition.ts#L46)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| entity | `T` |

**Returns:** `Promise`<`void`>

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `any`

*Defined in [condition.ts:74](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/condition.ts#L74)*

**Returns:** `any`

___
<a id="create"></a>

### `<Static>` create

▸ **create**<`T`>(description: *`string`*, func: *`function`*): [Condition](condition.md)<`T`>

*Defined in [condition.ts:20](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/condition.ts#L20)*

**Type parameters:**

#### T 
**Parameters:**

| Param | Type |
| ------ | ------ |
| description | `string` |
| func | `function` |

**Returns:** [Condition](condition.md)<`T`>

___
<a id="not"></a>

### `<Static>` not

▸ **not**<`T`>(condition: *[Condition](condition.md)<`T`>*): [Condition](condition.md)<`Object`>

*Defined in [condition.ts:24](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/condition.ts#L24)*

**Type parameters:**

#### T 
**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [Condition](condition.md)<`T`> |

**Returns:** [Condition](condition.md)<`Object`>

___

