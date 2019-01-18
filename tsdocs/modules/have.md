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
* [size](have.md#size)
* [tabsNumber](have.md#tabsnumber)
* [tabsNumberLessThan](have.md#tabsnumberlessthan)
* [tabsNumberMoreThan](have.md#tabsnumbermorethan)
* [text](have.md#text)
* [texts](have.md#texts)
* [url](have.md#url)
* [urlContaining](have.md#urlcontaining)
* [value](have.md#value)
* [visibleElement](have.md#visibleelement)

---

## Functions

<a id="attribute"></a>

###  attribute

▸ **attribute**(name: *`string`*): [ElementCondition](../#elementcondition)

*Defined in [support/conditions/have.ts:50](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/have.ts#L50)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| name | `string` |

**Returns:** [ElementCondition](../#elementcondition)

___
<a id="attributewithvalue"></a>

###  attributeWithValue

▸ **attributeWithValue**(attributeName: *`string`*, attributeValue: *`string`*): [ElementCondition](../#elementcondition)

*Defined in [support/conditions/have.ts:54](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/have.ts#L54)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| attributeName | `string` |
| attributeValue | `string` |

**Returns:** [ElementCondition](../#elementcondition)

___
<a id="attributewithvaluecontaining"></a>

###  attributeWithValueContaining

▸ **attributeWithValueContaining**(attributeName: *`string`*, attributeValue: *`string`*): [ElementCondition](../#elementcondition)

*Defined in [support/conditions/have.ts:58](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/have.ts#L58)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| attributeName | `string` |
| attributeValue | `string` |

**Returns:** [ElementCondition](../#elementcondition)

___
<a id="cssclass"></a>

###  cssClass

▸ **cssClass**(cssClass: *`string`*): [ElementCondition](../#elementcondition)

*Defined in [support/conditions/have.ts:67](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/have.ts#L67)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| cssClass | `string` |

**Returns:** [ElementCondition](../#elementcondition)

___
<a id="exacttext"></a>

###  exactText

▸ **exactText**(value: *`string`*): [ElementCondition](../#elementcondition)

*Defined in [support/conditions/have.ts:25](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/have.ts#L25)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value | `string` |

**Returns:** [ElementCondition](../#elementcondition)

___
<a id="exacttexts"></a>

###  exactTexts

▸ **exactTexts**(...texts: *`string`[]*): [CollectionCondition](../#collectioncondition)

*Defined in [support/conditions/have.ts:96](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/have.ts#L96)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Rest` texts | `string`[] |

**Returns:** [CollectionCondition](../#collectioncondition)

___
<a id="size"></a>

###  size

▸ **size**(size: *`number`*): [CollectionCondition](../#collectioncondition)

*Defined in [support/conditions/have.ts:71](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/have.ts#L71)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| size | `number` |

**Returns:** [CollectionCondition](../#collectioncondition)

___
<a id="tabsnumber"></a>

###  tabsNumber

▸ **tabsNumber**(num: *`number`*): [BrowserCondition](../#browsercondition)

*Defined in [support/conditions/have.ts:100](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/have.ts#L100)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| num | `number` |

**Returns:** [BrowserCondition](../#browsercondition)

___
<a id="tabsnumberlessthan"></a>

###  tabsNumberLessThan

▸ **tabsNumberLessThan**(num: *`number`*): [BrowserCondition](../#browsercondition)

*Defined in [support/conditions/have.ts:104](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/have.ts#L104)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| num | `number` |

**Returns:** [BrowserCondition](../#browsercondition)

___
<a id="tabsnumbermorethan"></a>

###  tabsNumberMoreThan

▸ **tabsNumberMoreThan**(num: *`number`*): [BrowserCondition](../#browsercondition)

*Defined in [support/conditions/have.ts:108](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/have.ts#L108)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| num | `number` |

**Returns:** [BrowserCondition](../#browsercondition)

___
<a id="text"></a>

###  text

▸ **text**(value: *`string`*): [ElementCondition](../#elementcondition)

*Defined in [support/conditions/have.ts:29](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/have.ts#L29)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value | `string` |

**Returns:** [ElementCondition](../#elementcondition)

___
<a id="texts"></a>

###  texts

▸ **texts**(...texts: *`string`[]*): [CollectionCondition](../#collectioncondition)

*Defined in [support/conditions/have.ts:75](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/have.ts#L75)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Rest` texts | `string`[] |

**Returns:** [CollectionCondition](../#collectioncondition)

___
<a id="url"></a>

###  url

▸ **url**(urlPart: *`string`*): [BrowserCondition](../#browsercondition)

*Defined in [support/conditions/have.ts:79](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/have.ts#L79)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| urlPart | `string` |

**Returns:** [BrowserCondition](../#browsercondition)

___
<a id="urlcontaining"></a>

###  urlContaining

▸ **urlContaining**(urlPart: *`string`*): [BrowserCondition](../#browsercondition)

*Defined in [support/conditions/have.ts:92](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/have.ts#L92)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| urlPart | `string` |

**Returns:** [BrowserCondition](../#browsercondition)

___
<a id="value"></a>

###  value

▸ **value**(value: *`string`*): [ElementCondition](../#elementcondition)

*Defined in [support/conditions/have.ts:63](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/have.ts#L63)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| value | `string` |

**Returns:** [ElementCondition](../#elementcondition)

___
<a id="visibleelement"></a>

###  visibleElement

▸ **visibleElement**(locator: *`By`*): [ElementCondition](../#elementcondition)

*Defined in [support/conditions/have.ts:21](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/have.ts#L21)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| locator | `By` |

**Returns:** [ElementCondition](../#elementcondition)

___

