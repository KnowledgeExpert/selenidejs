[selenidejs](../README.md) > [Condition](../classes/condition.md)

# Class: Condition

Like Command, i.e. can pass or fail with Error. It is defined as separate type alias to differentiate the usage scenarios. Conditions we use in context of matching condition on entity. Condition is like a predicate but instead of (true | false) you get (passed | throws Error)

Read "void" in Query<T, void> as "matched", or "passed".

## Type parameters
#### E 
## Hierarchy

**Condition**

## Implements

* [Fn](../interfaces/fn.md)<`E`, `void`>

## Index

### Constructors

* [constructor](condition.md#constructor)

### Properties

* [description](condition.md#description)
* [fn](condition.md#fn)

### Methods

* [and](condition.md#and)
* [call](condition.md#call)
* [or](condition.md#or)
* [toString](condition.md#tostring)
* [all](condition.md#all)
* [allNot](condition.md#allnot)
* [and](condition.md#and-1)
* [asPredicate](condition.md#aspredicate)
* [not](condition.md#not)
* [or](condition.md#or-1)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Condition**(description: *`any`*, fn: *`any`*): [Condition](condition.md)

*Defined in [wait.ts:75](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/wait.ts#L75)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| description | `any` |
| fn | `any` |

**Returns:** [Condition](condition.md)

___

## Properties

<a id="description"></a>

### `<Private>` description

**● description**: *`string`*

*Defined in [wait.ts:74](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/wait.ts#L74)*

___
<a id="fn"></a>

### `<Private>` fn

**● fn**: *[Lambda](../#lambda)<`E`, `void`>*

*Defined in [wait.ts:75](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/wait.ts#L75)*

___

## Methods

<a id="and"></a>

###  and

▸ **and**(condition: *[Condition](condition.md)<`E`>*): `any`

*Defined in [wait.ts:86](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/wait.ts#L86)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [Condition](condition.md)<`E`> |

**Returns:** `any`

___
<a id="call"></a>

###  call

▸ **call**(entity: *`E`*): `Promise`<`void`>

*Implementation of [Fn](../interfaces/fn.md).[call](../interfaces/fn.md#call)*

*Defined in [wait.ts:82](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/wait.ts#L82)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| entity | `E` |

**Returns:** `Promise`<`void`>

___
<a id="or"></a>

###  or

▸ **or**(condition: *[Condition](condition.md)<`E`>*): `any`

*Defined in [wait.ts:90](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/wait.ts#L90)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| condition | [Condition](condition.md)<`E`> |

**Returns:** `any`

___
<a id="tostring"></a>

###  toString

▸ **toString**(): `string`

*Defined in [wait.ts:94](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/wait.ts#L94)*

**Returns:** `string`

___
<a id="all"></a>

### `<Static>` all

▸ **all**<`T`>(...conditions: *`Array`<[Condition](condition.md)<`T`>>*): [Condition](condition.md)<`T`>

*Defined in [wait.ts:161](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/wait.ts#L161)*

Transforms conditions array provided as varargs to condition by applying Condition.and

**Type parameters:**

#### T 
**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Rest` conditions | `Array`<[Condition](condition.md)<`T`>> |  - |

**Returns:** [Condition](condition.md)<`T`>

___
<a id="allnot"></a>

### `<Static>` allNot

▸ **allNot**<`T`>(...conditions: *`Array`<[Condition](condition.md)<`T`>>*): [Condition](condition.md)<`T`>

*Defined in [wait.ts:176](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/wait.ts#L176)*

Transforms conditions array provided as varargs to condition by applying Condition.and

**Type parameters:**

#### T 
**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Rest` conditions | `Array`<[Condition](condition.md)<`T`>> |  - |

**Returns:** [Condition](condition.md)<`T`>

___
<a id="and-1"></a>

### `<Static>` and

▸ **and**<`T`>(...conditions: *`Array`<[Condition](condition.md)<`T`>>*): [Condition](condition.md)<`T`>

*Defined in [wait.ts:130](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/wait.ts#L130)*

Combines conditions by logical AND

**Type parameters:**

#### T 
**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Rest` conditions | `Array`<[Condition](condition.md)<`T`>> |  - |

**Returns:** [Condition](condition.md)<`T`>

___
<a id="aspredicate"></a>

### `<Static>` asPredicate

▸ **asPredicate**<`T`>(...conditions: *`Array`<[Condition](condition.md)<`T`>>*): `(Anonymous function)`

*Defined in [wait.ts:193](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/wait.ts#L193)*

Transforms Conditions (returning (void | throws Error)), combined by AND if more than one, to async Predicate (returning (true | false))

**Type parameters:**

#### T 
**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Rest` conditions | `Array`<[Condition](condition.md)<`T`>> |  - |

**Returns:** `(Anonymous function)`

___
<a id="not"></a>

### `<Static>` not

▸ **not**<`T`>(condition: *[Condition](condition.md)<`T`>*, description?: *`string`*): [Condition](condition.md)<`T`>

*Defined in [wait.ts:109](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/wait.ts#L109)*

Negates condition. Making the negated condition to:

*   pass (return void) in case original condition would throw Error
*   throw Error in case original condition would pass (return void)

**Type parameters:**

#### T 
**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| condition | [Condition](condition.md)<`T`> |  original condition to be negated |
| `Optional` description | `string` |  custom description if "not <original description>" version is not enough |

**Returns:** [Condition](condition.md)<`T`>

___
<a id="or-1"></a>

### `<Static>` or

▸ **or**<`T`>(...conditions: *`Array`<[Condition](condition.md)<`T`>>*): [Condition](condition.md)<`T`>

*Defined in [wait.ts:142](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/wait.ts#L142)*

Combines conditions by logical OR

**Type parameters:**

#### T 
**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| `Rest` conditions | `Array`<[Condition](condition.md)<`T`>> |  - |

**Returns:** [Condition](condition.md)<`T`>

___

