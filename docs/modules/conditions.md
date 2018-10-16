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

*Defined in [conditions.ts:32](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L32)*

___
<a id="focused"></a>

### `<Const>` focused

**● focused**: *[Condition](../classes/condition.md)<[Element](../classes/element.md)>* =  Condition.create('be focused', async (element: Element) => {
        const driver = Utils.getDriver(element);
        const script = 'return document.activeElement';
        const currentElement = await element.getWebElement();
        const focusedElement = await driver.executeScript(script) as WebElement;
        if (!focusedElement) {
            throw new ConditionDoesNotMatchError();
        }
        if (!WebElement.equals(focusedElement, currentElement)) {
            throw new ConditionDoesNotMatchError();
        }
    })

*Defined in [conditions.ts:41](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L41)*

___
<a id="hidden"></a>

### `<Const>` hidden

**● hidden**: *[Condition](../classes/condition.md)<[Element](../classes/element.md)>* =  Condition.create('be hidden', async (element: Element) => {
        await element.isVisible().then(visible => {
            if (visible) throw new ConditionDoesNotMatchError();
        });
    })

*Defined in [conditions.ts:60](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L60)*

___
<a id="present"></a>

### `<Const>` present

**● present**: *[Condition](../classes/condition.md)<[Element](../classes/element.md)>* =  Condition.create('be present', async (element: Element) => {
        await element.getWebElement();
    })

*Defined in [conditions.ts:28](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L28)*

___
<a id="selected"></a>

### `<Const>` selected

**● selected**: *[Condition](../classes/condition.md)<`Object`>* =  Condition.create('be selected', async (element: Element) => {
        const attribute = await element.attribute('selected');
        if (attribute === null) {
            throw new ConditionDoesNotMatchError();
        }
    })

*Defined in [conditions.ts:93](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L93)*

___
<a id="visible"></a>

### `<Const>` visible

**● visible**: *[Condition](../classes/condition.md)<[Element](../classes/element.md)>* =  Condition.create('be visible', async (element: Element) => {
        await element.isVisible().then(visible => {
            if (!visible) throw new ConditionDoesNotMatchError();
        });
    })

*Defined in [conditions.ts:54](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L54)*

___

## Functions

<a id="atributewithvalue"></a>

###  atributeWithValue

▸ **atributeWithValue**(attributeName: *`string`*, attributeValue: * `string` &#124; `number`*): [Condition](../classes/condition.md)<`Object`>

*Defined in [conditions.ts:100](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L100)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| attributeName | `string` |
| attributeValue |  `string` &#124; `number`|

**Returns:** [Condition](../classes/condition.md)<`Object`>

___
<a id="attribute"></a>

###  attribute

▸ **attribute**(attributeName: *`string`*): [Condition](../classes/condition.md)<[Element](../classes/element.md)>

*Defined in [conditions.ts:84](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L84)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| attributeName | `string` |

**Returns:** [Condition](../classes/condition.md)<[Element](../classes/element.md)>

___
<a id="attributewithexactvalue"></a>

###  attributeWithExactValue

▸ **attributeWithExactValue**(attributeName: *`string`*, attributeValue: * `string` &#124; `number`*): [Condition](../classes/condition.md)<`Object`>

*Defined in [conditions.ts:111](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L111)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| attributeName | `string` |
| attributeValue |  `string` &#124; `number`|

**Returns:** [Condition](../classes/condition.md)<`Object`>

___
<a id="cssclass"></a>

###  cssClass

▸ **cssClass**(cssClass: *`string`*): [Condition](../classes/condition.md)<[Element](../classes/element.md)>

*Defined in [conditions.ts:122](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L122)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| cssClass | `string` |

**Returns:** [Condition](../classes/condition.md)<[Element](../classes/element.md)>

___
<a id="exacttext"></a>

###  exactText

▸ **exactText**(text: * `string` &#124; `number`*): [Condition](../classes/condition.md)<[Element](../classes/element.md)>

*Defined in [conditions.ts:75](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L75)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| text |  `string` &#124; `number`|

**Returns:** [Condition](../classes/condition.md)<[Element](../classes/element.md)>

___
<a id="exacttexts"></a>

###  exactTexts

▸ **exactTexts**(...texts: *`Array`< `string` &#124; `number`>*): [Condition](../classes/condition.md)<`Object`>

*Defined in [conditions.ts:177](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L177)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Rest` texts | `Array`< `string` &#124; `number`> |

**Returns:** [Condition](../classes/condition.md)<`Object`>

___
<a id="size"></a>

###  size

▸ **size**(size: *`number`*): [Condition](../classes/condition.md)<`Object`>

*Defined in [conditions.ts:131](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L131)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| size | `number` |

**Returns:** [Condition](../classes/condition.md)<`Object`>

___
<a id="sizegreaterthan"></a>

###  sizeGreaterThan

▸ **sizeGreaterThan**(size: *`number`*): [Condition](../classes/condition.md)<`Object`>

*Defined in [conditions.ts:140](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L140)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| size | `number` |

**Returns:** [Condition](../classes/condition.md)<`Object`>

___
<a id="tabssize"></a>

###  tabsSize

▸ **tabsSize**(size: *`number`*): [Condition](../classes/condition.md)<`Object`>

*Defined in [conditions.ts:223](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L223)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| size | `number` |

**Returns:** [Condition](../classes/condition.md)<`Object`>

___
<a id="tabssizegreaterthan"></a>

###  tabsSizeGreaterThan

▸ **tabsSizeGreaterThan**(size: *`number`*): [Condition](../classes/condition.md)<`Object`>

*Defined in [conditions.ts:232](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L232)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| size | `number` |

**Returns:** [Condition](../classes/condition.md)<`Object`>

___
<a id="text"></a>

###  text

▸ **text**(text: * `string` &#124; `number`*): [Condition](../classes/condition.md)<[Element](../classes/element.md)>

*Defined in [conditions.ts:66](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L66)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| text |  `string` &#124; `number`|

**Returns:** [Condition](../classes/condition.md)<[Element](../classes/element.md)>

___
<a id="texts"></a>

###  texts

▸ **texts**(...texts: *`Array`< `string` &#124; `number`>*): [Condition](../classes/condition.md)<`Object`>

*Defined in [conditions.ts:149](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L149)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| `Rest` texts | `Array`< `string` &#124; `number`> |

**Returns:** [Condition](../classes/condition.md)<`Object`>

___
<a id="url"></a>

###  url

▸ **url**(url: *`string`*): [Condition](../classes/condition.md)<`Object`>

*Defined in [conditions.ts:214](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L214)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| url | `string` |

**Returns:** [Condition](../classes/condition.md)<`Object`>

___
<a id="urlpart"></a>

###  urlPart

▸ **urlPart**(urlPart: *`string`*): [Condition](../classes/condition.md)<`Object`>

*Defined in [conditions.ts:205](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions.ts#L205)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| urlPart | `string` |

**Returns:** [Condition](../classes/condition.md)<`Object`>

___

