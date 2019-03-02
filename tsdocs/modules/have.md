[selenidejs](../README.md) > [have](../modules/have.md)

# Module: have

## Index

### Functions

* [attribute](have.md#attribute)
* [attributeWithValue](have.md#attributewithvalue)
* [attributeWithValueContaining](have.md#attributewithvaluecontaining)
* [cssClass](have.md#cssclass)
* [exactText](have.md#exacttext)
* [exactTexts](have.md#exacttexts)
* [jsReturnedTrue](have.md#jsreturnedtrue)
* [size](have.md#size)
* [sizeGreaterThan](have.md#sizegreaterthan)
* [sizeGreaterThanOrEqual](have.md#sizegreaterthanorequal)
* [sizeLessThan](have.md#sizelessthan)
* [sizeLessThanOrEqual](have.md#sizelessthanorequal)
* [tabsNumber](have.md#tabsnumber)
* [tabsNumberLessThan](have.md#tabsnumberlessthan)
* [tabsNumberMoreThan](have.md#tabsnumbermorethan)
* [text](have.md#text)
* [texts](have.md#texts)
* [title](have.md#title)
* [titleContaining](have.md#titlecontaining)
* [url](have.md#url)
* [urlContaining](have.md#urlcontaining)
* [value](have.md#value)
* [valueContaining](have.md#valuecontaining)
* [visibleElement](have.md#visibleelement)

---

## Functions

<a id="attribute"></a>

### `<Const>` attribute

▸ **attribute**(name: *`string`*): [ElementCondition](../#elementcondition)

*Defined in [support/conditions/have.ts:32](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/have.ts#L32)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| name | `string` |

**Returns:** [ElementCondition](../#elementcondition)

___
<a id="attributewithvalue"></a>

### `<Const>` attributeWithValue

▸ **attributeWithValue**(attributeName: *`string`*, attributeValue: *`string`*): [ElementCondition](../#elementcondition)

*Defined in [support/conditions/have.ts:35](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/have.ts#L35)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| attributeName | `string` |
| attributeValue | `string` |

**Returns:** [ElementCondition](../#elementcondition)

___
<a id="attributewithvaluecontaining"></a>

### `<Const>` attributeWithValueContaining

▸ **attributeWithValueContaining**(attributeName: *`string`*, attributeValue: *`string`*): [ElementCondition](../#elementcondition)

*Defined in [support/conditions/have.ts:38](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/have.ts#L38)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| attributeName | `string` |
| attributeValue | `string` |

**Returns:** [ElementCondition](../#elementcondition)

___
<a id="cssclass"></a>

### `<Const>` cssClass

▸ **cssClass**(cssClass: *`string`*): [ElementCondition](../#elementcondition)

*Defined in [support/conditions/have.ts:48](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/have.ts#L48)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| cssClass | `string` |

**Returns:** [ElementCondition](../#elementcondition)

___
<a id="exacttext"></a>

### `<Const>` exactText

▸ **exactText**(value: *`string`*): [ElementCondition](../#elementcondition)

*Defined in [support/conditions/have.ts:26](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/have.ts#L26)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value | `string` |

**Returns:** [ElementCondition](../#elementcondition)

___
<a id="exacttexts"></a>

### `<Const>` exactTexts

▸ **exactTexts**(...texts: *`string`[]*): [CollectionCondition](../#collectioncondition)

*Defined in [support/conditions/have.ts:68](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/have.ts#L68)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Rest` texts | `string`[] |

**Returns:** [CollectionCondition](../#collectioncondition)

___
<a id="jsreturnedtrue"></a>

### `<Const>` jsReturnedTrue

▸ **jsReturnedTrue**(script: *`string`*): [BrowserCondition](../#browsercondition)

*Defined in [support/conditions/have.ts:94](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/have.ts#L94)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| script | `string` |

**Returns:** [BrowserCondition](../#browsercondition)

___
<a id="size"></a>

### `<Const>` size

▸ **size**(size: *`number`*): [CollectionCondition](../#collectioncondition)

*Defined in [support/conditions/have.ts:53](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/have.ts#L53)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| size | `number` |

**Returns:** [CollectionCondition](../#collectioncondition)

___
<a id="sizegreaterthan"></a>

### `<Const>` sizeGreaterThan

▸ **sizeGreaterThan**(size: *`number`*): [CollectionCondition](../#collectioncondition)

*Defined in [support/conditions/have.ts:59](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/have.ts#L59)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| size | `number` |

**Returns:** [CollectionCondition](../#collectioncondition)

___
<a id="sizegreaterthanorequal"></a>

### `<Const>` sizeGreaterThanOrEqual

▸ **sizeGreaterThanOrEqual**(size: *`number`*): [CollectionCondition](../#collectioncondition)

*Defined in [support/conditions/have.ts:61](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/have.ts#L61)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| size | `number` |

**Returns:** [CollectionCondition](../#collectioncondition)

___
<a id="sizelessthan"></a>

### `<Const>` sizeLessThan

▸ **sizeLessThan**(size: *`number`*): [CollectionCondition](../#collectioncondition)

*Defined in [support/conditions/have.ts:55](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/have.ts#L55)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| size | `number` |

**Returns:** [CollectionCondition](../#collectioncondition)

___
<a id="sizelessthanorequal"></a>

### `<Const>` sizeLessThanOrEqual

▸ **sizeLessThanOrEqual**(size: *`number`*): [CollectionCondition](../#collectioncondition)

*Defined in [support/conditions/have.ts:57](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/have.ts#L57)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| size | `number` |

**Returns:** [CollectionCondition](../#collectioncondition)

___
<a id="tabsnumber"></a>

### `<Const>` tabsNumber

▸ **tabsNumber**(num: *`number`*): [BrowserCondition](../#browsercondition)

*Defined in [support/conditions/have.ts:85](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/have.ts#L85)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| num | `number` |

**Returns:** [BrowserCondition](../#browsercondition)

___
<a id="tabsnumberlessthan"></a>

### `<Const>` tabsNumberLessThan

▸ **tabsNumberLessThan**(num: *`number`*): [BrowserCondition](../#browsercondition)

*Defined in [support/conditions/have.ts:88](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/have.ts#L88)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| num | `number` |

**Returns:** [BrowserCondition](../#browsercondition)

___
<a id="tabsnumbermorethan"></a>

### `<Const>` tabsNumberMoreThan

▸ **tabsNumberMoreThan**(num: *`number`*): [BrowserCondition](../#browsercondition)

*Defined in [support/conditions/have.ts:91](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/have.ts#L91)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| num | `number` |

**Returns:** [BrowserCondition](../#browsercondition)

___
<a id="text"></a>

### `<Const>` text

▸ **text**(value: *`string`*): [ElementCondition](../#elementcondition)

*Defined in [support/conditions/have.ts:29](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/have.ts#L29)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value | `string` |

**Returns:** [ElementCondition](../#elementcondition)

___
<a id="texts"></a>

### `<Const>` texts

▸ **texts**(...texts: *`string`[]*): [CollectionCondition](../#collectioncondition)

*Defined in [support/conditions/have.ts:65](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/have.ts#L65)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Rest` texts | `string`[] |

**Returns:** [CollectionCondition](../#collectioncondition)

___
<a id="title"></a>

### `<Const>` title

▸ **title**(expected: *`string`*): [BrowserCondition](../#browsercondition)

*Defined in [support/conditions/have.ts:79](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/have.ts#L79)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| expected | `string` |

**Returns:** [BrowserCondition](../#browsercondition)

___
<a id="titlecontaining"></a>

### `<Const>` titleContaining

▸ **titleContaining**(titlePart: *`string`*): [BrowserCondition](../#browsercondition)

*Defined in [support/conditions/have.ts:82](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/have.ts#L82)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| titlePart | `string` |

**Returns:** [BrowserCondition](../#browsercondition)

___
<a id="url"></a>

### `<Const>` url

▸ **url**(url: *`string`*): [BrowserCondition](../#browsercondition)

*Defined in [support/conditions/have.ts:71](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/have.ts#L71)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| url | `string` |

**Returns:** [BrowserCondition](../#browsercondition)

___
<a id="urlcontaining"></a>

### `<Const>` urlContaining

▸ **urlContaining**(urlPart: *`string`*): [BrowserCondition](../#browsercondition)

*Defined in [support/conditions/have.ts:76](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/have.ts#L76)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| urlPart | `string` |

**Returns:** [BrowserCondition](../#browsercondition)

___
<a id="value"></a>

### `<Const>` value

▸ **value**(value: *`string`*): [ElementCondition](../#elementcondition)

*Defined in [support/conditions/have.ts:42](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/have.ts#L42)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value | `string` |

**Returns:** [ElementCondition](../#elementcondition)

___
<a id="valuecontaining"></a>

### `<Const>` valueContaining

▸ **valueContaining**(expected: *`string`*): [ElementCondition](../#elementcondition)

*Defined in [support/conditions/have.ts:45](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/have.ts#L45)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| expected | `string` |

**Returns:** [ElementCondition](../#elementcondition)

___
<a id="visibleelement"></a>

### `<Const>` visibleElement

▸ **visibleElement**(locator: *`By`*): [ElementCondition](../#elementcondition)

*Defined in [support/conditions/have.ts:23](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/have.ts#L23)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| locator | `By` |

**Returns:** [ElementCondition](../#elementcondition)

___

