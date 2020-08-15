[selenidejs](../README.md) › [Condition](condition.md)

# Class: Condition <**E**>

Like Command<T>, i.e. can pass or fail with Error.
It is defined as separate type alias to differentiate the usage scenarios.
Conditions we use in context of matching condition on entity.
Condition is like a predicate but instead of (true | false) you get (passed | throws Error)

Read "void" in Query<T, void> as "matched", or "passed".

## Type parameters

▪ **E**

## Hierarchy

* **Condition**

## Implements

* [Fn](../interfaces/fn.md)‹E, void›

## Index

### Constructors

* [constructor](condition.md#constructor)

### Properties

* [description](condition.md#private-description)
* [fn](condition.md#private-fn)

### Methods

* [and](condition.md#and)
* [call](condition.md#call)
* [or](condition.md#or)
* [toString](condition.md#tostring)
* [all](condition.md#static-all)
* [allNot](condition.md#static-allnot)
* [and](condition.md#static-and)
* [asPredicate](condition.md#static-aspredicate)
* [not](condition.md#static-not)
* [or](condition.md#static-or)

## Constructors

###  constructor

\+ **new Condition**(`description`: any, `fn`: any): *[Condition](condition.md)*

*Defined in [lib/wait.ts:75](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/wait.ts#L75)*

**Parameters:**

Name | Type |
------ | ------ |
`description` | any |
`fn` | any |

**Returns:** *[Condition](condition.md)*

## Properties

### `Private` description

• **description**: *string*

*Defined in [lib/wait.ts:74](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/wait.ts#L74)*

___

### `Private` fn

• **fn**: *[Lambda](../README.md#lambda)‹E, void›*

*Defined in [lib/wait.ts:75](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/wait.ts#L75)*

## Methods

###  and

▸ **and**(`condition`: [Condition](condition.md)‹E›): *any*

*Defined in [lib/wait.ts:86](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/wait.ts#L86)*

**Parameters:**

Name | Type |
------ | ------ |
`condition` | [Condition](condition.md)‹E› |

**Returns:** *any*

___

###  call

▸ **call**(`entity`: E): *Promise‹void›*

*Implementation of [Fn](../interfaces/fn.md)*

*Defined in [lib/wait.ts:82](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/wait.ts#L82)*

**Parameters:**

Name | Type |
------ | ------ |
`entity` | E |

**Returns:** *Promise‹void›*

___

###  or

▸ **or**(`condition`: [Condition](condition.md)‹E›): *[Condition](condition.md)‹E›*

*Defined in [lib/wait.ts:90](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/wait.ts#L90)*

**Parameters:**

Name | Type |
------ | ------ |
`condition` | [Condition](condition.md)‹E› |

**Returns:** *[Condition](condition.md)‹E›*

___

###  toString

▸ **toString**(): *string*

*Defined in [lib/wait.ts:94](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/wait.ts#L94)*

**Returns:** *string*

___

### `Static` all

▸ **all**<**T**>(...`conditions`: [Condition](condition.md)‹T›[]): *[Condition](condition.md)‹T›*

*Defined in [lib/wait.ts:161](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/wait.ts#L161)*

Transforms conditions array provided as varargs to condition by applying Condition.and

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`...conditions` | [Condition](condition.md)‹T›[] |

**Returns:** *[Condition](condition.md)‹T›*

___

### `Static` allNot

▸ **allNot**<**T**>(...`conditions`: [Condition](condition.md)‹T›[]): *[Condition](condition.md)‹T›*

*Defined in [lib/wait.ts:176](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/wait.ts#L176)*

Transforms conditions array provided as varargs to condition by applying Condition.and

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`...conditions` | [Condition](condition.md)‹T›[] |

**Returns:** *[Condition](condition.md)‹T›*

___

### `Static` and

▸ **and**<**T**>(...`conditions`: [Condition](condition.md)‹T›[]): *[Condition](condition.md)‹T›*

*Defined in [lib/wait.ts:130](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/wait.ts#L130)*

Combines conditions by logical AND

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`...conditions` | [Condition](condition.md)‹T›[] |

**Returns:** *[Condition](condition.md)‹T›*

___

### `Static` asPredicate

▸ **asPredicate**<**T**>(...`conditions`: [Condition](condition.md)‹T›[]): *(Anonymous function)*

*Defined in [lib/wait.ts:193](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/wait.ts#L193)*

Transforms Conditions (returning (void | throws Error)), combined by AND if more than one,
to async Predicate   (returning (true | false))

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`...conditions` | [Condition](condition.md)‹T›[] |

**Returns:** *(Anonymous function)*

___

### `Static` not

▸ **not**<**T**>(`condition`: [Condition](condition.md)‹T›, `description?`: string): *[Condition](condition.md)‹T›*

*Defined in [lib/wait.ts:109](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/wait.ts#L109)*

Negates condition. Making the negated condition to:
- pass (return void) in case original condition would throw Error
- throw Error in case original condition would pass (return void)

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`condition` | [Condition](condition.md)‹T› | original condition to be negated |
`description?` | string | custom description if "not <original description>" version is not enough |

**Returns:** *[Condition](condition.md)‹T›*

___

### `Static` or

▸ **or**<**T**>(...`conditions`: [Condition](condition.md)‹T›[]): *[Condition](condition.md)‹T›*

*Defined in [lib/wait.ts:142](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/wait.ts#L142)*

Combines conditions by logical OR

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`...conditions` | [Condition](condition.md)‹T›[] |

**Returns:** *[Condition](condition.md)‹T›*
