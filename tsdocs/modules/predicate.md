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
* [isGreaterThan](predicate.md#isgreaterthan)
* [isGreaterThanOrEqual](predicate.md#isgreaterthanorequal)
* [isLessThan](predicate.md#islessthan)
* [isLessThanOrEqual](predicate.md#islessthanorequal)
* [isTruthy](predicate.md#istruthy)

---

## Variables

<a id="equalsbycontainstoarray"></a>

### `<Const>` equalsByContainsToArray

**● equalsByContainsToArray**: *`(Anonymous function)`* =  arrayCompareBy(includes)

*Defined in [utils/predicates.ts:31](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/utils/predicates.ts#L31)*

___
<a id="equalstoarray"></a>

### `<Const>` equalsToArray

**● equalsToArray**: *`(Anonymous function)`* =  arrayCompareBy(equals)

*Defined in [utils/predicates.ts:30](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/utils/predicates.ts#L30)*

___

## Functions

<a id="arraycompareby"></a>

### `<Const>` arrayCompareBy

▸ **arrayCompareBy**(f: *`any`*): `(Anonymous function)`

*Defined in [utils/predicates.ts:26](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/utils/predicates.ts#L26)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| f | `any` |

**Returns:** `(Anonymous function)`

___
<a id="equals"></a>

### `<Const>` equals

▸ **equals**<`V`>(expected: *`V`*): `(Anonymous function)`

*Defined in [utils/predicates.ts:18](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/utils/predicates.ts#L18)*

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

*Defined in [utils/predicates.ts:23](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/utils/predicates.ts#L23)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| expected | `any` |

**Returns:** `(Anonymous function)`

___
<a id="includesword"></a>

### `<Const>` includesWord

▸ **includesWord**(expected: *`string`*): `(Anonymous function)`

*Defined in [utils/predicates.ts:24](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/utils/predicates.ts#L24)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| expected | `string` |

**Returns:** `(Anonymous function)`

___
<a id="isgreaterthan"></a>

### `<Const>` isGreaterThan

▸ **isGreaterThan**<`V`>(expected: *`V`*): `(Anonymous function)`

*Defined in [utils/predicates.ts:19](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/utils/predicates.ts#L19)*

**Type parameters:**

#### V 
**Parameters:**

| Param | Type |
| ------ | ------ |
| expected | `V` |

**Returns:** `(Anonymous function)`

___
<a id="isgreaterthanorequal"></a>

### `<Const>` isGreaterThanOrEqual

▸ **isGreaterThanOrEqual**<`V`>(expected: *`V`*): `(Anonymous function)`

*Defined in [utils/predicates.ts:20](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/utils/predicates.ts#L20)*

**Type parameters:**

#### V 
**Parameters:**

| Param | Type |
| ------ | ------ |
| expected | `V` |

**Returns:** `(Anonymous function)`

___
<a id="islessthan"></a>

### `<Const>` isLessThan

▸ **isLessThan**<`V`>(expected: *`V`*): `(Anonymous function)`

*Defined in [utils/predicates.ts:21](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/utils/predicates.ts#L21)*

**Type parameters:**

#### V 
**Parameters:**

| Param | Type |
| ------ | ------ |
| expected | `V` |

**Returns:** `(Anonymous function)`

___
<a id="islessthanorequal"></a>

### `<Const>` isLessThanOrEqual

▸ **isLessThanOrEqual**<`V`>(expected: *`V`*): `(Anonymous function)`

*Defined in [utils/predicates.ts:22](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/utils/predicates.ts#L22)*

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

*Defined in [utils/predicates.ts:17](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/utils/predicates.ts#L17)*

**Type parameters:**

#### V 
**Parameters:**

| Param | Type |
| ------ | ------ |
| actual | `V` |

**Returns:** `boolean`

___

