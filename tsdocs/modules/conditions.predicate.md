[selenidejs](../README.md) > [Conditions](../modules/conditions.md) > [predicate](../modules/conditions.predicate.md)

# Module: predicate

## Index

### Variables

* [equalsByContainsToArray](conditions.predicate.md#equalsbycontainstoarray)
* [equalsToArray](conditions.predicate.md#equalstoarray)

### Functions

* [arrayCompareBy](conditions.predicate.md#arraycompareby)
* [equals](conditions.predicate.md#equals)
* [includes](conditions.predicate.md#includes)
* [includesWord](conditions.predicate.md#includesword)
* [isLessThan](conditions.predicate.md#islessthan)
* [isMoreThan](conditions.predicate.md#ismorethan)

---

## Variables

<a id="equalsbycontainstoarray"></a>

### `<Const>` equalsByContainsToArray

**● equalsByContainsToArray**: *`(Anonymous function)`* =  arrayCompareBy(includes)

*Defined in [conditions.ts:56](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L56)*

___
<a id="equalstoarray"></a>

### `<Const>` equalsToArray

**● equalsToArray**: *`(Anonymous function)`* =  arrayCompareBy(equals)

*Defined in [conditions.ts:55](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L55)*

___

## Functions

<a id="arraycompareby"></a>

### `<Const>` arrayCompareBy

▸ **arrayCompareBy**(f: *`any`*): `(Anonymous function)`

*Defined in [conditions.ts:51](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L51)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| f | `any` |

**Returns:** `(Anonymous function)`

___
<a id="equals"></a>

### `<Const>` equals

▸ **equals**<`V`>(expected: *`V`*): `(Anonymous function)`

*Defined in [conditions.ts:45](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L45)*

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

*Defined in [conditions.ts:48](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L48)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| expected | `any` |

**Returns:** `(Anonymous function)`

___
<a id="includesword"></a>

### `<Const>` includesWord

▸ **includesWord**(expected: *`string`*): `(Anonymous function)`

*Defined in [conditions.ts:49](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L49)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| expected | `string` |

**Returns:** `(Anonymous function)`

___
<a id="islessthan"></a>

### `<Const>` isLessThan

▸ **isLessThan**<`V`>(expected: *`V`*): `(Anonymous function)`

*Defined in [conditions.ts:47](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L47)*

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

*Defined in [conditions.ts:46](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L46)*

**Type parameters:**

#### V 
**Parameters:**

| Param | Type |
| ------ | ------ |
| expected | `V` |

**Returns:** `(Anonymous function)`

___

