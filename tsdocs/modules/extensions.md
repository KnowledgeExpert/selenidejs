> **[selenidejs](../README.md)**

[Extensions](extensions.md) /

# Module: Extensions

## Index

### Functions

* [isAbsoluteUrl](extensions.md#isabsoluteurl)
* [savePageSource](extensions.md#savepagesource)
* [saveScreenshot](extensions.md#savescreenshot)
* [toBy](extensions.md#toby)

## Functions

###  isAbsoluteUrl

▸ **isAbsoluteUrl**(`relativeOrAbsoluteUrl`: string): *boolean*

*Defined in [utils/extensions.ts:50](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/utils/extensions.ts#L50)*

**Parameters:**

Name | Type |
------ | ------ |
`relativeOrAbsoluteUrl` | string |

**Returns:** *boolean*

___

###  savePageSource

▸ **savePageSource**(`driver`: `WebDriver`, `filePath`: string): *`Promise<string>`*

*Defined in [utils/extensions.ts:24](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/utils/extensions.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`driver` | `WebDriver` |
`filePath` | string |

**Returns:** *`Promise<string>`*

___

###  saveScreenshot

▸ **saveScreenshot**(`driver`: `WebDriver`, `filePath`: string): *`Promise<string>`*

*Defined in [utils/extensions.ts:34](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/utils/extensions.ts#L34)*

**Parameters:**

Name | Type |
------ | ------ |
`driver` | `WebDriver` |
`filePath` | string |

**Returns:** *`Promise<string>`*

___

###  toBy

▸ **toBy**(`cssOrXpathOrBy`: string | `By`): *`By`*

*Defined in [utils/extensions.ts:44](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/utils/extensions.ts#L44)*

**Parameters:**

Name | Type |
------ | ------ |
`cssOrXpathOrBy` | string \| `By` |

**Returns:** *`By`*