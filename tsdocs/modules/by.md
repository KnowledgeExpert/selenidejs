> **[selenidejs](../README.md)**

[by](by.md) /

# Module: by

## Index

### Variables

* [NORMALIZE_SPACE_XPATH](by.md#const-normalize_space_xpath)

### Functions

* [attribute](by.md#attribute)
* [className](by.md#classname)
* [css](by.md#css)
* [exactText](by.md#exacttext)
* [id](by.md#id)
* [linkText](by.md#linktext)
* [name](by.md#name)
* [partialId](by.md#partialid)
* [text](by.md#text)
* [type](by.md#type)
* [value](by.md#value)
* [xpath](by.md#xpath)

## Variables

### `Const` NORMALIZE_SPACE_XPATH

• **NORMALIZE_SPACE_XPATH**: *"normalize-space(translate(string(.), '	
 ', '    '))"* = "normalize-space(translate(string(.), '	
 ', '    '))"

*Defined in [support/selectors/by.ts:21](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/selectors/by.ts#L21)*

## Functions

###  attribute

▸ **attribute**(`attributeName`: string, `attributeValue`: string): *`By`*

*Defined in [support/selectors/by.ts:69](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/selectors/by.ts#L69)*

**Parameters:**

Name | Type |
------ | ------ |
`attributeName` | string |
`attributeValue` | string |

**Returns:** *`By`*

___

###  className

▸ **className**(`className`: string): *`By`*

*Defined in [support/selectors/by.ts:57](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/selectors/by.ts#L57)*

**Parameters:**

Name | Type |
------ | ------ |
`className` | string |

**Returns:** *`By`*

___

###  css

▸ **css**(`css`: string): *`By`*

*Defined in [support/selectors/by.ts:65](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/selectors/by.ts#L65)*

**Parameters:**

Name | Type |
------ | ------ |
`css` | string |

**Returns:** *`By`*

___

###  exactText

▸ **exactText**(`text`: string): *`By`*

*Defined in [support/selectors/by.ts:41](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/selectors/by.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`text` | string |

**Returns:** *`By`*

___

###  id

▸ **id**(`id`: string): *`By`*

*Defined in [support/selectors/by.ts:49](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/selectors/by.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *`By`*

___

###  linkText

▸ **linkText**(`text`: string): *`By`*

*Defined in [support/selectors/by.ts:45](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/selectors/by.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`text` | string |

**Returns:** *`By`*

___

###  name

▸ **name**(`name`: string): *`By`*

*Defined in [support/selectors/by.ts:53](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/selectors/by.ts#L53)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *`By`*

___

###  partialId

▸ **partialId**(...`idParts`: string[]): *`By`*

*Defined in [support/selectors/by.ts:32](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/selectors/by.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`...idParts` | string[] |

**Returns:** *`By`*

___

###  text

▸ **text**(`text`: string): *`By`*

*Defined in [support/selectors/by.ts:37](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/selectors/by.ts#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`text` | string |

**Returns:** *`By`*

___

###  type

▸ **type**(`type`: string): *`By`*

*Defined in [support/selectors/by.ts:23](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/selectors/by.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | string |

**Returns:** *`By`*

___

###  value

▸ **value**(`value`: string): *`By`*

*Defined in [support/selectors/by.ts:27](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/selectors/by.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *`By`*

___

###  xpath

▸ **xpath**(`xpath`: string): *`By`*

*Defined in [support/selectors/by.ts:61](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/selectors/by.ts#L61)*

**Parameters:**

Name | Type |
------ | ------ |
`xpath` | string |

**Returns:** *`By`*