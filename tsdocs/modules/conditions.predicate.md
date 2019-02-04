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

*Defined in [conditions.ts:80](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L80)*

___
<a id="equalstoarray"></a>

### `<Const>` equalsToArray

**● equalsToArray**: *`(Anonymous function)`* =  arrayCompareBy(equals)

*Defined in [conditions.ts:79](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L79)*

___

## Functions

<a id="arraycompareby"></a>

### `<Const>` arrayCompareBy

▸ **arrayCompareBy**(f: *`any`*): `(Anonymous function)`

*Defined in [conditions.ts:75](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L75)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| f | `any` |

**Returns:** `(Anonymous function)`

___
<a id="equals"></a>

### `<Const>` equals

▸ **equals**<`V`>(expected: *`V`*): `(Anonymous function)`

*Defined in [conditions.ts:69](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L69)*

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

*Defined in [conditions.ts:72](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L72)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| expected | `any` |

**Returns:** `(Anonymous function)`

___
<a id="includesword"></a>

### `<Const>` includesWord

▸ **includesWord**(expected: *`string`*): `(Anonymous function)`

*Defined in [conditions.ts:73](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L73)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| expected | `string` |

**Returns:** `(Anonymous function)`

___
<a id="islessthan"></a>

### `<Const>` isLessThan

▸ **isLessThan**<`V`>(expected: *`V`*): `(Anonymous function)`

*Defined in [conditions.ts:71](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L71)*

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

*Defined in [conditions.ts:70](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L70)*

**Type parameters:**

#### V 
**Parameters:**

| Param | Type |
| ------ | ------ |
| expected | `V` |

**Returns:** `(Anonymous function)`

___

