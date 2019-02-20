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

*Defined in [support/conditions/have.ts:48](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/have.ts#L48)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| name | `string` |

**Returns:** [ElementCondition](../#elementcondition)

___
<a id="attributewithvalue"></a>

### `<Const>` attributeWithValue

▸ **attributeWithValue**(attributeName: *`string`*, attributeValue: *`string`*): [ElementCondition](../#elementcondition)

*Defined in [support/conditions/have.ts:51](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/have.ts#L51)*

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

*Defined in [support/conditions/have.ts:54](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/have.ts#L54)*

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

*Defined in [support/conditions/have.ts:64](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/have.ts#L64)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| cssClass | `string` |

**Returns:** [ElementCondition](../#elementcondition)

___
<a id="exacttext"></a>

### `<Const>` exactText

▸ **exactText**(value: *`string`*): [ElementCondition](../#elementcondition)

*Defined in [support/conditions/have.ts:25](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/have.ts#L25)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value | `string` |

**Returns:** [ElementCondition](../#elementcondition)

___
<a id="exacttexts"></a>

### `<Const>` exactTexts

▸ **exactTexts**(...texts: *`string`[]*): [CollectionCondition](../#collectioncondition)

*Defined in [support/conditions/have.ts:73](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/have.ts#L73)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Rest` texts | `string`[] |

**Returns:** [CollectionCondition](../#collectioncondition)

___
<a id="jsreturnedtrue"></a>

### `<Const>` jsReturnedTrue

▸ **jsReturnedTrue**(script: *`string`*): [BrowserCondition](../#browsercondition)

*Defined in [support/conditions/have.ts:106](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/have.ts#L106)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| script | `string` |

**Returns:** [BrowserCondition](../#browsercondition)

___
<a id="size"></a>

### `<Const>` size

▸ **size**(size: *`number`*): [CollectionCondition](../#collectioncondition)

*Defined in [support/conditions/have.ts:67](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/have.ts#L67)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| size | `number` |

**Returns:** [CollectionCondition](../#collectioncondition)

___
<a id="tabsnumber"></a>

### `<Const>` tabsNumber

▸ **tabsNumber**(num: *`number`*): [BrowserCondition](../#browsercondition)

*Defined in [support/conditions/have.ts:97](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/have.ts#L97)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| num | `number` |

**Returns:** [BrowserCondition](../#browsercondition)

___
<a id="tabsnumberlessthan"></a>

### `<Const>` tabsNumberLessThan

▸ **tabsNumberLessThan**(num: *`number`*): [BrowserCondition](../#browsercondition)

*Defined in [support/conditions/have.ts:100](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/have.ts#L100)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| num | `number` |

**Returns:** [BrowserCondition](../#browsercondition)

___
<a id="tabsnumbermorethan"></a>

### `<Const>` tabsNumberMoreThan

▸ **tabsNumberMoreThan**(num: *`number`*): [BrowserCondition](../#browsercondition)

*Defined in [support/conditions/have.ts:103](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/have.ts#L103)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| num | `number` |

**Returns:** [BrowserCondition](../#browsercondition)

___
<a id="text"></a>

### `<Const>` text

▸ **text**(value: *`string`*): [ElementCondition](../#elementcondition)

*Defined in [support/conditions/have.ts:28](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/have.ts#L28)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value | `string` |

**Returns:** [ElementCondition](../#elementcondition)

___
<a id="texts"></a>

### `<Const>` texts

▸ **texts**(...texts: *`string`[]*): [CollectionCondition](../#collectioncondition)

*Defined in [support/conditions/have.ts:70](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/have.ts#L70)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Rest` texts | `string`[] |

**Returns:** [CollectionCondition](../#collectioncondition)

___
<a id="title"></a>

### `<Const>` title

▸ **title**(expected: *`string`*): [BrowserCondition](../#browsercondition)

*Defined in [support/conditions/have.ts:91](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/have.ts#L91)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| expected | `string` |

**Returns:** [BrowserCondition](../#browsercondition)

___
<a id="titlecontaining"></a>

### `<Const>` titleContaining

▸ **titleContaining**(titlePart: *`string`*): [BrowserCondition](../#browsercondition)

*Defined in [support/conditions/have.ts:94](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/have.ts#L94)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| titlePart | `string` |

**Returns:** [BrowserCondition](../#browsercondition)

___
<a id="url"></a>

### `<Const>` url

▸ **url**(url: *`string`*): [BrowserCondition](../#browsercondition)

*Defined in [support/conditions/have.ts:76](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/have.ts#L76)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| url | `string` |

**Returns:** [BrowserCondition](../#browsercondition)

___
<a id="urlcontaining"></a>

### `<Const>` urlContaining

▸ **urlContaining**(urlPart: *`string`*): [BrowserCondition](../#browsercondition)

*Defined in [support/conditions/have.ts:88](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/have.ts#L88)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| urlPart | `string` |

**Returns:** [BrowserCondition](../#browsercondition)

___
<a id="value"></a>

### `<Const>` value

▸ **value**(value: *`string`*): [ElementCondition](../#elementcondition)

*Defined in [support/conditions/have.ts:58](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/have.ts#L58)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value | `string` |

**Returns:** [ElementCondition](../#elementcondition)

___
<a id="valuecontaining"></a>

### `<Const>` valueContaining

▸ **valueContaining**(expected: *`string`*): [ElementCondition](../#elementcondition)

*Defined in [support/conditions/have.ts:61](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/have.ts#L61)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| expected | `string` |

**Returns:** [ElementCondition](../#elementcondition)

___
<a id="visibleelement"></a>

### `<Const>` visibleElement

▸ **visibleElement**(locator: *`By`*): [ElementCondition](../#elementcondition)

*Defined in [support/conditions/have.ts:22](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/have.ts#L22)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| locator | `By` |

**Returns:** [ElementCondition](../#elementcondition)

___

