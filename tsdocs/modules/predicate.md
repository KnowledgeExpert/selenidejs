[selenidejs](../README.md) > [predicate](../modules/predicate.md)

# Module: predicate

## Index

### Variables

* [equalsByContainsToArray](predicate.md#equalsbycontainstoarray)
* [equalsToArray](predicate.md#equalstoarray)

### Functions

* [arrayCompareBy](predicate.md#arraycompareby)
* [equals](predicate.md#equals)
* [includes](predicate.md#includes)
* [includesWord](predicate.md#includesword)
* [isLessThan](predicate.md#islessthan)
* [isMoreThan](predicate.md#ismorethan)
* [isTruthy](predicate.md#istruthy)

---

## Variables

<a id="equalsbycontainstoarray"></a>

### `<Const>` equalsByContainsToArray

**● equalsByContainsToArray**: *`(Anonymous function)`* =  arrayCompareBy(includes)

*Defined in [helpers/predicates.ts:29](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/helpers/predicates.ts#L29)*

___
<a id="equalstoarray"></a>

### `<Const>` equalsToArray

**● equalsToArray**: *`(Anonymous function)`* =  arrayCompareBy(equals)

*Defined in [helpers/predicates.ts:28](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/helpers/predicates.ts#L28)*

___

## Functions

<a id="arraycompareby"></a>

### `<Const>` arrayCompareBy

▸ **arrayCompareBy**(f: *`any`*): `(Anonymous function)`

*Defined in [helpers/predicates.ts:24](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/helpers/predicates.ts#L24)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| f | `any` |

**Returns:** `(Anonymous function)`

___
<a id="equals"></a>

### `<Const>` equals

▸ **equals**<`V`>(expected: *`V`*): `(Anonymous function)`

*Defined in [helpers/predicates.ts:18](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/helpers/predicates.ts#L18)*

**Type parameters:**

#### V 
**Parameters:**

| Param | Type |
| ------ | ------ |
| expected | `V` |

**Returns:** `(Anonymous function)`

___
<a id="includes"></a>

### `<Const>` includes

▸ **includes**(expected: *`any`*): `(Anonymous function)`

*Defined in [helpers/predicates.ts:21](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/helpers/predicates.ts#L21)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| expected | `any` |

**Returns:** `(Anonymous function)`

___
<a id="includesword"></a>

### `<Const>` includesWord

▸ **includesWord**(expected: *`string`*): `(Anonymous function)`

*Defined in [helpers/predicates.ts:22](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/helpers/predicates.ts#L22)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| expected | `string` |

**Returns:** `(Anonymous function)`

___
<a id="islessthan"></a>

### `<Const>` isLessThan

▸ **isLessThan**<`V`>(expected: *`V`*): `(Anonymous function)`

*Defined in [helpers/predicates.ts:20](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/helpers/predicates.ts#L20)*

**Type parameters:**

#### V 
**Parameters:**

| Param | Type |
| ------ | ------ |
| expected | `V` |

**Returns:** `(Anonymous function)`

___
<a id="ismorethan"></a>

### `<Const>` isMoreThan

▸ **isMoreThan**<`V`>(expected: *`V`*): `(Anonymous function)`

*Defined in [helpers/predicates.ts:19](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/helpers/predicates.ts#L19)*

**Type parameters:**

#### V 
**Parameters:**

| Param | Type |
| ------ | ------ |
| expected | `V` |

**Returns:** `(Anonymous function)`

___
<a id="istruthy"></a>

### `<Const>` isTruthy

▸ **isTruthy**<`V`>(actual: *`V`*): `boolean`

*Defined in [helpers/predicates.ts:17](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/helpers/predicates.ts#L17)*

**Type parameters:**

#### V 
**Parameters:**

| Param | Type |
| ------ | ------ |
| actual | `V` |

**Returns:** `boolean`

___

