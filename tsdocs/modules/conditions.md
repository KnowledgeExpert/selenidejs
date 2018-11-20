[selenidejs](../README.md) > [Conditions](../modules/conditions.md)

# Module: Conditions

## Index

### Variables

* [absent](conditions.md#absent)
* [focused](conditions.md#focused)
* [hidden](conditions.md#hidden)
* [present](conditions.md#present)
* [selected](conditions.md#selected)
* [visible](conditions.md#visible)

### Functions

* [atributeWithValue](conditions.md#atributewithvalue)
* [attribute](conditions.md#attribute)
* [attributeWithExactValue](conditions.md#attributewithexactvalue)
* [cssClass](conditions.md#cssclass)
* [exactText](conditions.md#exacttext)
* [exactTexts](conditions.md#exacttexts)
* [size](conditions.md#size)
* [sizeGreaterThan](conditions.md#sizegreaterthan)
* [tabsSize](conditions.md#tabssize)
* [tabsSizeGreaterThan](conditions.md#tabssizegreaterthan)
* [text](conditions.md#text)
* [texts](conditions.md#texts)
* [title](conditions.md#title)
* [url](conditions.md#url)
* [urlPart](conditions.md#urlpart)

---

## Variables

<a id="absent"></a>

### `<Const>` absent

**● absent**: *[Condition](../classes/condition.md)<[Element](../classes/element.md)>* =  Condition.create('be absent', async (element: Element) => {
        await element.getWebElement().then(
            result => {
                throw new ConditionDoesNotMatchError();
            },
            ignored => {}
        );
    })

*Defined in [conditions.ts:30](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L30)*

___
<a id="focused"></a>

### `<Const>` focused

**● focused**: *[Condition](../classes/condition.md)<[Element](../classes/element.md)>* =  Condition.create('be focused', async (element: Element) => {
        await element.isFocused().then(focused => {
            if (!focused) throw new ConditionDoesNotMatchError();
        });
    })

*Defined in [conditions.ts:39](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L39)*

___
<a id="hidden"></a>

### `<Const>` hidden

**● hidden**: *[Condition](../classes/condition.md)<[Element](../classes/element.md)>* =  Condition.create('be hidden', async (element: Element) => {
        await element.isVisible().then(visible => {
            if (visible) throw new ConditionDoesNotMatchError();
        });
    })

*Defined in [conditions.ts:51](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L51)*

___
<a id="present"></a>

### `<Const>` present

**● present**: *[Condition](../classes/condition.md)<[Element](../classes/element.md)>* =  Condition.create('be present', async (element: Element) => {
        await element.getWebElement();
    })

*Defined in [conditions.ts:26](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L26)*

___
<a id="selected"></a>

### `<Const>` selected

**● selected**: *[Condition](../classes/condition.md)<[Element](../classes/element.md)>* =  Condition.create('be selected', async (element: Element) => {
        const attribute = await element.attribute('selected');
        if (attribute === null) {
            throw new ConditionDoesNotMatchError();
        }
    })

*Defined in [conditions.ts:84](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L84)*

___
<a id="visible"></a>

### `<Const>` visible

**● visible**: *[Condition](../classes/condition.md)<[Element](../classes/element.md)>* =  Condition.create('be visible', async (element: Element) => {
        await element.isVisible().then(visible => {
            if (!visible) throw new ConditionDoesNotMatchError();
        });
    })

*Defined in [conditions.ts:45](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L45)*

___

## Functions

<a id="atributewithvalue"></a>

###  atributeWithValue

▸ **atributeWithValue**(attributeName: *`string`*, attributeValue: * `string` &#124; `number`*): [Condition](../classes/condition.md)<[Element](../classes/element.md)>

*Defined in [conditions.ts:91](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L91)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| attributeName | `string` |
| attributeValue |  `string` &#124; `number`|

**Returns:** [Condition](../classes/condition.md)<[Element](../classes/element.md)>

___
<a id="attribute"></a>

###  attribute

▸ **attribute**(attributeName: *`string`*): [Condition](../classes/condition.md)<[Element](../classes/element.md)>

*Defined in [conditions.ts:75](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L75)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| attributeName | `string` |

**Returns:** [Condition](../classes/condition.md)<[Element](../classes/element.md)>

___
<a id="attributewithexactvalue"></a>

###  attributeWithExactValue

▸ **attributeWithExactValue**(attributeName: *`string`*, attributeValue: * `string` &#124; `number`*): [Condition](../classes/condition.md)<[Element](../classes/element.md)>

*Defined in [conditions.ts:102](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L102)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| attributeName | `string` |
| attributeValue |  `string` &#124; `number`|

**Returns:** [Condition](../classes/condition.md)<[Element](../classes/element.md)>

___
<a id="cssclass"></a>

###  cssClass

▸ **cssClass**(cssClass: *`string`*): [Condition](../classes/condition.md)<[Element](../classes/element.md)>

*Defined in [conditions.ts:113](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L113)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| cssClass | `string` |

**Returns:** [Condition](../classes/condition.md)<[Element](../classes/element.md)>

___
<a id="exacttext"></a>

###  exactText

▸ **exactText**(text: * `string` &#124; `number`*): [Condition](../classes/condition.md)<[Element](../classes/element.md)>

*Defined in [conditions.ts:66](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L66)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| text |  `string` &#124; `number`|

**Returns:** [Condition](../classes/condition.md)<[Element](../classes/element.md)>

___
<a id="exacttexts"></a>

###  exactTexts

▸ **exactTexts**(...texts: *`Array`< `string` &#124; `number`>*): [Condition](../classes/condition.md)<[Collection](../classes/collection.md)>

*Defined in [conditions.ts:168](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L168)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Rest` texts | `Array`< `string` &#124; `number`> |

**Returns:** [Condition](../classes/condition.md)<[Collection](../classes/collection.md)>

___
<a id="size"></a>

###  size

▸ **size**(size: *`number`*): [Condition](../classes/condition.md)<[Collection](../classes/collection.md)>

*Defined in [conditions.ts:122](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L122)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| size | `number` |

**Returns:** [Condition](../classes/condition.md)<[Collection](../classes/collection.md)>

___
<a id="sizegreaterthan"></a>

###  sizeGreaterThan

▸ **sizeGreaterThan**(size: *`number`*): [Condition](../classes/condition.md)<[Collection](../classes/collection.md)>

*Defined in [conditions.ts:131](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L131)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| size | `number` |

**Returns:** [Condition](../classes/condition.md)<[Collection](../classes/collection.md)>

___
<a id="tabssize"></a>

###  tabsSize

▸ **tabsSize**(size: *`number`*): [Condition](../classes/condition.md)<[Driver](../classes/driver.md)>

*Defined in [conditions.ts:223](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L223)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| size | `number` |

**Returns:** [Condition](../classes/condition.md)<[Driver](../classes/driver.md)>

___
<a id="tabssizegreaterthan"></a>

###  tabsSizeGreaterThan

▸ **tabsSizeGreaterThan**(size: *`number`*): [Condition](../classes/condition.md)<[Driver](../classes/driver.md)>

*Defined in [conditions.ts:232](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L232)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| size | `number` |

**Returns:** [Condition](../classes/condition.md)<[Driver](../classes/driver.md)>

___
<a id="text"></a>

###  text

▸ **text**(text: * `string` &#124; `number`*): [Condition](../classes/condition.md)<[Element](../classes/element.md)>

*Defined in [conditions.ts:57](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L57)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| text |  `string` &#124; `number`|

**Returns:** [Condition](../classes/condition.md)<[Element](../classes/element.md)>

___
<a id="texts"></a>

###  texts

▸ **texts**(...texts: *`Array`< `string` &#124; `number`>*): [Condition](../classes/condition.md)<[Collection](../classes/collection.md)>

*Defined in [conditions.ts:140](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L140)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Rest` texts | `Array`< `string` &#124; `number`> |

**Returns:** [Condition](../classes/condition.md)<[Collection](../classes/collection.md)>

___
<a id="title"></a>

###  title

▸ **title**(title: *`string`*): [Condition](../classes/condition.md)<[Driver](../classes/driver.md)>

*Defined in [conditions.ts:196](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L196)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| title | `string` |

**Returns:** [Condition](../classes/condition.md)<[Driver](../classes/driver.md)>

___
<a id="url"></a>

###  url

▸ **url**(url: *`string`*): [Condition](../classes/condition.md)<[Driver](../classes/driver.md)>

*Defined in [conditions.ts:214](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L214)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| url | `string` |

**Returns:** [Condition](../classes/condition.md)<[Driver](../classes/driver.md)>

___
<a id="urlpart"></a>

###  urlPart

▸ **urlPart**(urlPart: *`string`*): [Condition](../classes/condition.md)<[Driver](../classes/driver.md)>

*Defined in [conditions.ts:205](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L205)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| urlPart | `string` |

**Returns:** [Condition](../classes/condition.md)<[Driver](../classes/driver.md)>

___

