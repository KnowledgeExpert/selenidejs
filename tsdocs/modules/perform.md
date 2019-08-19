> **[selenidejs](../README.md)**

[perform](perform.md) /

# Module: perform

## Index

### Modules

* [js](perform.js.md)

### Functions

* [back](perform.md#const-back)
* [clear](perform.md#const-clear)
* [clearCookies](perform.md#const-clearcookies)
* [clearLocalStorage](perform.md#const-clearlocalstorage)
* [clearSessionStorage](perform.md#const-clearsessionstorage)
* [click](perform.md#const-click)
* [closeCurrentTab](perform.md#const-closecurrenttab)
* [contextClick](perform.md#const-contextclick)
* [doubleClick](perform.md#const-doubleclick)
* [executeScript](perform.md#const-executescript)
* [forward](perform.md#const-forward)
* [goToNextTab](perform.md#const-gotonexttab)
* [goToPreviousTab](perform.md#const-gotoprevioustab)
* [goToTab](perform.md#const-gototab)
* [hover](perform.md#const-hover)
* [open](perform.md#const-open)
* [pressEnter](perform.md#const-pressenter)
* [pressEscape](perform.md#const-pressescape)
* [pressTab](perform.md#const-presstab)
* [quit](perform.md#const-quit)
* [refresh](perform.md#const-refresh)
* [resizeWindow](perform.md#const-resizewindow)
* [screenshot](perform.md#const-screenshot)
* [setValue](perform.md#const-setvalue)
* [switchToDefaultFrame](perform.md#const-switchtodefaultframe)
* [type](perform.md#const-type)

## Functions

### `Const` back

▸ **back**(`browser`: [Browser](../classes/browser.md)): *`Promise<void>`*

*Defined in [support/commands/perform.ts:83](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/commands/perform.ts#L83)*

**Parameters:**

Name | Type |
------ | ------ |
`browser` | [Browser](../classes/browser.md) |

**Returns:** *`Promise<void>`*

___

### `Const` clear

▸ **clear**(`element`: [Element](../classes/element.md)): *`Promise<Element>`*

*Defined in [support/commands/perform.ts:35](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/commands/perform.ts#L35)*

**Parameters:**

Name | Type |
------ | ------ |
`element` | [Element](../classes/element.md) |

**Returns:** *`Promise<Element>`*

___

### `Const` clearCookies

▸ **clearCookies**(`browser`: [Browser](../classes/browser.md)): *`Promise<Browser>`*

*Defined in [support/commands/perform.ts:95](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/commands/perform.ts#L95)*

**Parameters:**

Name | Type |
------ | ------ |
`browser` | [Browser](../classes/browser.md) |

**Returns:** *`Promise<Browser>`*

___

### `Const` clearLocalStorage

▸ **clearLocalStorage**(`browser`: [Browser](../classes/browser.md)): *`Promise<Browser>`*

*Defined in [support/commands/perform.ts:93](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/commands/perform.ts#L93)*

**Parameters:**

Name | Type |
------ | ------ |
`browser` | [Browser](../classes/browser.md) |

**Returns:** *`Promise<Browser>`*

___

### `Const` clearSessionStorage

▸ **clearSessionStorage**(`browser`: [Browser](../classes/browser.md)): *`Promise<Browser>`*

*Defined in [support/commands/perform.ts:94](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/commands/perform.ts#L94)*

**Parameters:**

Name | Type |
------ | ------ |
`browser` | [Browser](../classes/browser.md) |

**Returns:** *`Promise<Browser>`*

___

### `Const` click

▸ **click**(`element`: [Element](../classes/element.md)): *`Promise<Element>`*

*Defined in [support/commands/perform.ts:30](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/commands/perform.ts#L30)*

**Parameters:**

Name | Type |
------ | ------ |
`element` | [Element](../classes/element.md) |

**Returns:** *`Promise<Element>`*

___

### `Const` closeCurrentTab

▸ **closeCurrentTab**(`browser`: [Browser](../classes/browser.md)): *`Promise<Browser>`*

*Defined in [support/commands/perform.ts:81](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/commands/perform.ts#L81)*

**Parameters:**

Name | Type |
------ | ------ |
`browser` | [Browser](../classes/browser.md) |

**Returns:** *`Promise<Browser>`*

___

### `Const` contextClick

▸ **contextClick**(`element`: [Element](../classes/element.md)): *`Promise<Element>`*

*Defined in [support/commands/perform.ts:32](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/commands/perform.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`element` | [Element](../classes/element.md) |

**Returns:** *`Promise<Element>`*

___

### `Const` doubleClick

▸ **doubleClick**(`element`: [Element](../classes/element.md)): *`Promise<Element>`*

*Defined in [support/commands/perform.ts:31](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/commands/perform.ts#L31)*

**Parameters:**

Name | Type |
------ | ------ |
`element` | [Element](../classes/element.md) |

**Returns:** *`Promise<Element>`*

___

### `Const` executeScript

▸ **executeScript**(`script`: string | `Function`, ...`args`: any[]): *`(Anonymous function)`*

*Defined in [support/commands/perform.ts:99](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/commands/perform.ts#L99)*

**Parameters:**

Name | Type |
------ | ------ |
`script` | string \| `Function` |
`...args` | any[] |

**Returns:** *`(Anonymous function)`*

___

### `Const` forward

▸ **forward**(`browser`: [Browser](../classes/browser.md)): *`Promise<void>`*

*Defined in [support/commands/perform.ts:84](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/commands/perform.ts#L84)*

**Parameters:**

Name | Type |
------ | ------ |
`browser` | [Browser](../classes/browser.md) |

**Returns:** *`Promise<void>`*

___

### `Const` goToNextTab

▸ **goToNextTab**(`browser`: [Browser](../classes/browser.md)): *`Promise<Browser>`*

*Defined in [support/commands/perform.ts:86](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/commands/perform.ts#L86)*

**Parameters:**

Name | Type |
------ | ------ |
`browser` | [Browser](../classes/browser.md) |

**Returns:** *`Promise<Browser>`*

___

### `Const` goToPreviousTab

▸ **goToPreviousTab**(`browser`: [Browser](../classes/browser.md)): *`Promise<Browser>`*

*Defined in [support/commands/perform.ts:87](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/commands/perform.ts#L87)*

**Parameters:**

Name | Type |
------ | ------ |
`browser` | [Browser](../classes/browser.md) |

**Returns:** *`Promise<Browser>`*

___

### `Const` goToTab

▸ **goToTab**(`indexOrId`: number | string): *`(Anonymous function)`*

*Defined in [support/commands/perform.ts:88](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/commands/perform.ts#L88)*

**Parameters:**

Name | Type |
------ | ------ |
`indexOrId` | number \| string |

**Returns:** *`(Anonymous function)`*

___

### `Const` hover

▸ **hover**(`element`: [Element](../classes/element.md)): *`Promise<Element>`*

*Defined in [support/commands/perform.ts:33](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/commands/perform.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`element` | [Element](../classes/element.md) |

**Returns:** *`Promise<Element>`*

___

### `Const` open

▸ **open**(`url`: string): *`(Anonymous function)`*

*Defined in [support/commands/perform.ts:77](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/commands/perform.ts#L77)*

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |

**Returns:** *`(Anonymous function)`*

___

### `Const` pressEnter

▸ **pressEnter**(`element`: [Element](../classes/element.md)): *`Promise<Element>`*

*Defined in [support/commands/perform.ts:39](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/commands/perform.ts#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`element` | [Element](../classes/element.md) |

**Returns:** *`Promise<Element>`*

___

### `Const` pressEscape

▸ **pressEscape**(`element`: [Element](../classes/element.md)): *`Promise<Element>`*

*Defined in [support/commands/perform.ts:41](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/commands/perform.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`element` | [Element](../classes/element.md) |

**Returns:** *`Promise<Element>`*

___

### `Const` pressTab

▸ **pressTab**(`element`: [Element](../classes/element.md)): *`Promise<Element>`*

*Defined in [support/commands/perform.ts:40](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/commands/perform.ts#L40)*

**Parameters:**

Name | Type |
------ | ------ |
`element` | [Element](../classes/element.md) |

**Returns:** *`Promise<Element>`*

___

### `Const` quit

▸ **quit**(`browser`: [Browser](../classes/browser.md)): *`Promise<void>`*

*Defined in [support/commands/perform.ts:82](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/commands/perform.ts#L82)*

**Parameters:**

Name | Type |
------ | ------ |
`browser` | [Browser](../classes/browser.md) |

**Returns:** *`Promise<void>`*

___

### `Const` refresh

▸ **refresh**(`browser`: [Browser](../classes/browser.md)): *`Promise<void>`*

*Defined in [support/commands/perform.ts:85](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/commands/perform.ts#L85)*

**Parameters:**

Name | Type |
------ | ------ |
`browser` | [Browser](../classes/browser.md) |

**Returns:** *`Promise<void>`*

___

### `Const` resizeWindow

▸ **resizeWindow**(`width`: any, `height`: any): *`(Anonymous function)`*

*Defined in [support/commands/perform.ts:78](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/commands/perform.ts#L78)*

**Parameters:**

Name | Type |
------ | ------ |
`width` | any |
`height` | any |

**Returns:** *`(Anonymous function)`*

___

### `Const` screenshot

▸ **screenshot**(`browser`: [Browser](../classes/browser.md)): *`Promise<Buffer>`*

*Defined in [support/commands/perform.ts:80](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/commands/perform.ts#L80)*

**Parameters:**

Name | Type |
------ | ------ |
`browser` | [Browser](../classes/browser.md) |

**Returns:** *`Promise<Buffer>`*

___

### `Const` setValue

▸ **setValue**(`value`: string | number): *`(Anonymous function)`*

*Defined in [support/commands/perform.ts:37](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/commands/perform.ts#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string \| number |

**Returns:** *`(Anonymous function)`*

___

### `Const` switchToDefaultFrame

▸ **switchToDefaultFrame**(`browser`: [Browser](../classes/browser.md)): *`Promise<Browser>`*

*Defined in [support/commands/perform.ts:91](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/commands/perform.ts#L91)*

**Parameters:**

Name | Type |
------ | ------ |
`browser` | [Browser](../classes/browser.md) |

**Returns:** *`Promise<Browser>`*

___

### `Const` type

▸ **type**(`keys`: string | number): *`(Anonymous function)`*

*Defined in [support/commands/perform.ts:36](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/commands/perform.ts#L36)*

**Parameters:**

Name | Type |
------ | ------ |
`keys` | string \| number |

**Returns:** *`(Anonymous function)`*