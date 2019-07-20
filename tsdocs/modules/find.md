> **[selenidejs](../README.md)**

[find](find.md) /

# Module: find

## Index

### Functions

* [alert](find.md#const-alert)
* [all](find.md#const-all)
* [element](find.md#const-element)
* [elementAt](find.md#const-elementat)
* [elementBy](find.md#const-elementby)
* [filteredBy](find.md#const-filteredby)
* [first](find.md#const-first)
* [followingSibling](find.md#const-followingsibling)
* [parent](find.md#const-parent)
* [sliced](find.md#const-sliced)

## Functions

### `Const` alert

▸ **alert**(`browser`: [Browser](../classes/browser.md)): *`AlertPromise`*

*Defined in [support/elements/find.ts:51](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/elements/find.ts#L51)*

**Parameters:**

Name | Type |
------ | ------ |
`browser` | [Browser](../classes/browser.md) |

**Returns:** *`AlertPromise`*

___

### `Const` all

▸ **all**(`cssOrXpathOrBy`: string | `By`): *`(Anonymous function)`*

*Defined in [support/elements/find.ts:28](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/elements/find.ts#L28)*

**Parameters:**

Name | Type |
------ | ------ |
`cssOrXpathOrBy` | string \| `By` |

**Returns:** *`(Anonymous function)`*

___

### `Const` element

▸ **element**(`cssOrXpathOrBy`: string | `By`): *`(Anonymous function)`*

*Defined in [support/elements/find.ts:25](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/elements/find.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`cssOrXpathOrBy` | string \| `By` |

**Returns:** *`(Anonymous function)`*

___

### `Const` elementAt

▸ **elementAt**(`index`: number): *`(Anonymous function)`*

*Defined in [support/elements/find.ts:37](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/elements/find.ts#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *`(Anonymous function)`*

___

### `Const` elementBy

▸ **elementBy**(`condition`: [ElementCondition](../README.md#elementcondition)): *`(Anonymous function)`*

*Defined in [support/elements/find.ts:45](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/elements/find.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`condition` | [ElementCondition](../README.md#elementcondition) |

**Returns:** *`(Anonymous function)`*

___

### `Const` filteredBy

▸ **filteredBy**(`condition`: [ElementCondition](../README.md#elementcondition)): *`(Anonymous function)`*

*Defined in [support/elements/find.ts:47](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/elements/find.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`condition` | [ElementCondition](../README.md#elementcondition) |

**Returns:** *`(Anonymous function)`*

___

### `Const` first

▸ **first**(`collection`: [Collection](../classes/collection.md)): *[Element](../classes/element.md)*

*Defined in [support/elements/find.ts:40](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/elements/find.ts#L40)*

**Parameters:**

Name | Type |
------ | ------ |
`collection` | [Collection](../classes/collection.md) |

**Returns:** *[Element](../classes/element.md)*

___

### `Const` followingSibling

▸ **followingSibling**(`element`: [Element](../classes/element.md)): *[Element](../classes/element.md)*

*Defined in [support/elements/find.ts:33](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/elements/find.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`element` | [Element](../classes/element.md) |

**Returns:** *[Element](../classes/element.md)*

___

### `Const` parent

▸ **parent**(`element`: [Element](../classes/element.md)): *[Element](../classes/element.md)*

*Defined in [support/elements/find.ts:32](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/elements/find.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`element` | [Element](../classes/element.md) |

**Returns:** *[Element](../classes/element.md)*

___

### `Const` sliced

▸ **sliced**(`start`: number, `end`: number): *`(Anonymous function)`*

*Defined in [support/elements/find.ts:41](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/elements/find.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`start` | number |
`end` | number |

**Returns:** *`(Anonymous function)`*