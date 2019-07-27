> **[selenidejs](../README.md)**

[have](have.md) /

# Module: have

## Index

### Variables

* [no](have.md#const-no)

### Functions

* [attribute](have.md#const-attribute)
* [attributeWithValue](have.md#const-attributewithvalue)
* [attributeWithValueContaining](have.md#const-attributewithvaluecontaining)
* [cssClass](have.md#const-cssclass)
* [exactText](have.md#const-exacttext)
* [exactTexts](have.md#const-exacttexts)
* [jsReturned](have.md#const-jsreturned)
* [size](have.md#const-size)
* [sizeGreaterThan](have.md#const-sizegreaterthan)
* [sizeGreaterThanOrEqual](have.md#const-sizegreaterthanorequal)
* [sizeLessThan](have.md#const-sizelessthan)
* [sizeLessThanOrEqual](have.md#const-sizelessthanorequal)
* [tabsNumber](have.md#const-tabsnumber)
* [tabsNumberLessThan](have.md#const-tabsnumberlessthan)
* [tabsNumberMoreThan](have.md#const-tabsnumbermorethan)
* [text](have.md#const-text)
* [texts](have.md#const-texts)
* [title](have.md#const-title)
* [titleContaining](have.md#const-titlecontaining)
* [url](have.md#const-url)
* [urlContaining](have.md#const-urlcontaining)
* [value](have.md#const-value)
* [valueContaining](have.md#const-valuecontaining)

## Variables

### `Const` no

• **no**: *[have](have.md)* =  new Proxy(have, {
        get: (have, conditionName) => (...args) => Condition.not(have[conditionName](...args))
    })

*Defined in [support/conditions/have.ts:20](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/have.ts#L20)*

## Functions

### `Const` attribute

▸ **attribute**(`name`: string): *[ElementCondition](../README.md#elementcondition)*

*Defined in [support/conditions/have.ts:32](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/have.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *[ElementCondition](../README.md#elementcondition)*

___

### `Const` attributeWithValue

▸ **attributeWithValue**(`attributeName`: string, `attributeValue`: string): *[ElementCondition](../README.md#elementcondition)*

*Defined in [support/conditions/have.ts:35](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/have.ts#L35)*

**Parameters:**

Name | Type |
------ | ------ |
`attributeName` | string |
`attributeValue` | string |

**Returns:** *[ElementCondition](../README.md#elementcondition)*

___

### `Const` attributeWithValueContaining

▸ **attributeWithValueContaining**(`attributeName`: string, `attributeValue`: string): *[ElementCondition](../README.md#elementcondition)*

*Defined in [support/conditions/have.ts:38](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/have.ts#L38)*

**Parameters:**

Name | Type |
------ | ------ |
`attributeName` | string |
`attributeValue` | string |

**Returns:** *[ElementCondition](../README.md#elementcondition)*

___

### `Const` cssClass

▸ **cssClass**(`cssClass`: string): *[ElementCondition](../README.md#elementcondition)*

*Defined in [support/conditions/have.ts:48](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/have.ts#L48)*

**Parameters:**

Name | Type |
------ | ------ |
`cssClass` | string |

**Returns:** *[ElementCondition](../README.md#elementcondition)*

___

### `Const` exactText

▸ **exactText**(`value`: string): *[ElementCondition](../README.md#elementcondition)*

*Defined in [support/conditions/have.ts:26](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/have.ts#L26)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *[ElementCondition](../README.md#elementcondition)*

___

### `Const` exactTexts

▸ **exactTexts**(...`texts`: string[]): *[CollectionCondition](../README.md#collectioncondition)*

*Defined in [support/conditions/have.ts:68](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/have.ts#L68)*

**Parameters:**

Name | Type |
------ | ------ |
`...texts` | string[] |

**Returns:** *[CollectionCondition](../README.md#collectioncondition)*

___

### `Const` jsReturned

▸ **jsReturned**(`expected`: any, `script`: string, ...`scriptArgs`: any[]): *[BrowserCondition](../README.md#browsercondition)*

*Defined in [support/conditions/have.ts:96](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/have.ts#L96)*

**Parameters:**

Name | Type |
------ | ------ |
`expected` | any |
`script` | string |
`...scriptArgs` | any[] |

**Returns:** *[BrowserCondition](../README.md#browsercondition)*

___

### `Const` size

▸ **size**(`size`: number): *[CollectionCondition](../README.md#collectioncondition)*

*Defined in [support/conditions/have.ts:53](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/have.ts#L53)*

**Parameters:**

Name | Type |
------ | ------ |
`size` | number |

**Returns:** *[CollectionCondition](../README.md#collectioncondition)*

___

### `Const` sizeGreaterThan

▸ **sizeGreaterThan**(`size`: number): *[CollectionCondition](../README.md#collectioncondition)*

*Defined in [support/conditions/have.ts:59](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/have.ts#L59)*

**Parameters:**

Name | Type |
------ | ------ |
`size` | number |

**Returns:** *[CollectionCondition](../README.md#collectioncondition)*

___

### `Const` sizeGreaterThanOrEqual

▸ **sizeGreaterThanOrEqual**(`size`: number): *[CollectionCondition](../README.md#collectioncondition)*

*Defined in [support/conditions/have.ts:61](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/have.ts#L61)*

**Parameters:**

Name | Type |
------ | ------ |
`size` | number |

**Returns:** *[CollectionCondition](../README.md#collectioncondition)*

___

### `Const` sizeLessThan

▸ **sizeLessThan**(`size`: number): *[CollectionCondition](../README.md#collectioncondition)*

*Defined in [support/conditions/have.ts:55](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/have.ts#L55)*

**Parameters:**

Name | Type |
------ | ------ |
`size` | number |

**Returns:** *[CollectionCondition](../README.md#collectioncondition)*

___

### `Const` sizeLessThanOrEqual

▸ **sizeLessThanOrEqual**(`size`: number): *[CollectionCondition](../README.md#collectioncondition)*

*Defined in [support/conditions/have.ts:57](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/have.ts#L57)*

**Parameters:**

Name | Type |
------ | ------ |
`size` | number |

**Returns:** *[CollectionCondition](../README.md#collectioncondition)*

___

### `Const` tabsNumber

▸ **tabsNumber**(`num`: number): *[BrowserCondition](../README.md#browsercondition)*

*Defined in [support/conditions/have.ts:85](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/have.ts#L85)*

**Parameters:**

Name | Type |
------ | ------ |
`num` | number |

**Returns:** *[BrowserCondition](../README.md#browsercondition)*

___

### `Const` tabsNumberLessThan

▸ **tabsNumberLessThan**(`num`: number): *[BrowserCondition](../README.md#browsercondition)*

*Defined in [support/conditions/have.ts:88](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/have.ts#L88)*

**Parameters:**

Name | Type |
------ | ------ |
`num` | number |

**Returns:** *[BrowserCondition](../README.md#browsercondition)*

___

### `Const` tabsNumberMoreThan

▸ **tabsNumberMoreThan**(`num`: number): *[BrowserCondition](../README.md#browsercondition)*

*Defined in [support/conditions/have.ts:91](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/have.ts#L91)*

**Parameters:**

Name | Type |
------ | ------ |
`num` | number |

**Returns:** *[BrowserCondition](../README.md#browsercondition)*

___

### `Const` text

▸ **text**(`value`: string): *[ElementCondition](../README.md#elementcondition)*

*Defined in [support/conditions/have.ts:29](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/have.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *[ElementCondition](../README.md#elementcondition)*

___

### `Const` texts

▸ **texts**(...`texts`: string[]): *[CollectionCondition](../README.md#collectioncondition)*

*Defined in [support/conditions/have.ts:65](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/have.ts#L65)*

**Parameters:**

Name | Type |
------ | ------ |
`...texts` | string[] |

**Returns:** *[CollectionCondition](../README.md#collectioncondition)*

___

### `Const` title

▸ **title**(`expected`: string): *[BrowserCondition](../README.md#browsercondition)*

*Defined in [support/conditions/have.ts:79](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/have.ts#L79)*

**Parameters:**

Name | Type |
------ | ------ |
`expected` | string |

**Returns:** *[BrowserCondition](../README.md#browsercondition)*

___

### `Const` titleContaining

▸ **titleContaining**(`titlePart`: string): *[BrowserCondition](../README.md#browsercondition)*

*Defined in [support/conditions/have.ts:82](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/have.ts#L82)*

**Parameters:**

Name | Type |
------ | ------ |
`titlePart` | string |

**Returns:** *[BrowserCondition](../README.md#browsercondition)*

___

### `Const` url

▸ **url**(`url`: string): *[BrowserCondition](../README.md#browsercondition)*

*Defined in [support/conditions/have.ts:71](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/have.ts#L71)*

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |

**Returns:** *[BrowserCondition](../README.md#browsercondition)*

___

### `Const` urlContaining

▸ **urlContaining**(`urlPart`: string): *[BrowserCondition](../README.md#browsercondition)*

*Defined in [support/conditions/have.ts:76](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/have.ts#L76)*

**Parameters:**

Name | Type |
------ | ------ |
`urlPart` | string |

**Returns:** *[BrowserCondition](../README.md#browsercondition)*

___

### `Const` value

▸ **value**(`value`: string): *[ElementCondition](../README.md#elementcondition)*

*Defined in [support/conditions/have.ts:42](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/have.ts#L42)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *[ElementCondition](../README.md#elementcondition)*

___

### `Const` valueContaining

▸ **valueContaining**(`expected`: string): *[ElementCondition](../README.md#elementcondition)*

*Defined in [support/conditions/have.ts:45](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/have.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`expected` | string |

**Returns:** *[ElementCondition](../README.md#elementcondition)*