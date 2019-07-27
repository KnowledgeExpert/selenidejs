> **[selenidejs](../README.md)**

[predicate](predicate.md) /

# Module: predicate

## Index

### Variables

* [equalsByContainsToArray](predicate.md#const-equalsbycontainstoarray)
* [equalsToArray](predicate.md#const-equalstoarray)

### Functions

* [arrayCompareBy](predicate.md#const-arraycompareby)
* [equals](predicate.md#const-equals)
* [includes](predicate.md#const-includes)
* [includesWord](predicate.md#const-includesword)
* [isGreaterThan](predicate.md#const-isgreaterthan)
* [isGreaterThanOrEqual](predicate.md#const-isgreaterthanorequal)
* [isLessThan](predicate.md#const-islessthan)
* [isLessThanOrEqual](predicate.md#const-islessthanorequal)
* [isTruthy](predicate.md#const-istruthy)

## Variables

### `Const` equalsByContainsToArray

• **equalsByContainsToArray**: *`(Anonymous function)`* =  arrayCompareBy(includes)

*Defined in [utils/predicates.ts:31](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/utils/predicates.ts#L31)*

___

### `Const` equalsToArray

• **equalsToArray**: *`(Anonymous function)`* =  arrayCompareBy(equals)

*Defined in [utils/predicates.ts:30](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/utils/predicates.ts#L30)*

## Functions

### `Const` arrayCompareBy

▸ **arrayCompareBy**(`f`: any): *`(Anonymous function)`*

*Defined in [utils/predicates.ts:26](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/utils/predicates.ts#L26)*

**Parameters:**

Name | Type |
------ | ------ |
`f` | any |

**Returns:** *`(Anonymous function)`*

___

### `Const` equals

▸ **equals**<**V**>(`expected`: `V`): *`(Anonymous function)`*

*Defined in [utils/predicates.ts:18](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/utils/predicates.ts#L18)*

**Type parameters:**

▪ **V**

**Parameters:**

Name | Type |
------ | ------ |
`expected` | `V` |

**Returns:** *`(Anonymous function)`*

___

### `Const` includes

▸ **includes**(`expected`: any): *`(Anonymous function)`*

*Defined in [utils/predicates.ts:23](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/utils/predicates.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`expected` | any |

**Returns:** *`(Anonymous function)`*

___

### `Const` includesWord

▸ **includesWord**(`expected`: string): *`(Anonymous function)`*

*Defined in [utils/predicates.ts:24](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/utils/predicates.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`expected` | string |

**Returns:** *`(Anonymous function)`*

___

### `Const` isGreaterThan

▸ **isGreaterThan**<**V**>(`expected`: `V`): *`(Anonymous function)`*

*Defined in [utils/predicates.ts:19](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/utils/predicates.ts#L19)*

**Type parameters:**

▪ **V**

**Parameters:**

Name | Type |
------ | ------ |
`expected` | `V` |

**Returns:** *`(Anonymous function)`*

___

### `Const` isGreaterThanOrEqual

▸ **isGreaterThanOrEqual**<**V**>(`expected`: `V`): *`(Anonymous function)`*

*Defined in [utils/predicates.ts:20](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/utils/predicates.ts#L20)*

**Type parameters:**

▪ **V**

**Parameters:**

Name | Type |
------ | ------ |
`expected` | `V` |

**Returns:** *`(Anonymous function)`*

___

### `Const` isLessThan

▸ **isLessThan**<**V**>(`expected`: `V`): *`(Anonymous function)`*

*Defined in [utils/predicates.ts:21](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/utils/predicates.ts#L21)*

**Type parameters:**

▪ **V**

**Parameters:**

Name | Type |
------ | ------ |
`expected` | `V` |

**Returns:** *`(Anonymous function)`*

___

### `Const` isLessThanOrEqual

▸ **isLessThanOrEqual**<**V**>(`expected`: `V`): *`(Anonymous function)`*

*Defined in [utils/predicates.ts:22](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/utils/predicates.ts#L22)*

**Type parameters:**

▪ **V**

**Parameters:**

Name | Type |
------ | ------ |
`expected` | `V` |

**Returns:** *`(Anonymous function)`*

___

### `Const` isTruthy

▸ **isTruthy**<**V**>(`actual`: `V`): *boolean*

*Defined in [utils/predicates.ts:17](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/utils/predicates.ts#L17)*

**Type parameters:**

▪ **V**

**Parameters:**

Name | Type |
------ | ------ |
`actual` | `V` |

**Returns:** *boolean*