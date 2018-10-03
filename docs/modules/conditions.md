[selenidejs](../README.md) > [Conditions](../modules/conditions.md)

# Module: Conditions

## Index

### Variables

* [elementIsAbsent](conditions.md#elementisabsent)
* [elementIsFocused](conditions.md#elementisfocused)
* [elementIsHidden](conditions.md#elementishidden)
* [elementIsPresent](conditions.md#elementispresent)
* [elementIsSelected](conditions.md#elementisselected)
* [elementIsVisible](conditions.md#elementisvisible)

### Functions

* [browserTabsHaveSize](conditions.md#browsertabshavesize)
* [browserTabsHaveSizeGreaterThan](conditions.md#browsertabshavesizegreaterthan)
* [browserUrlContains](conditions.md#browserurlcontains)
* [collectionHasExactTexts](conditions.md#collectionhasexacttexts)
* [collectionHasSize](conditions.md#collectionhassize)
* [collectionHasSizeMoreThan](conditions.md#collectionhassizemorethan)
* [collectionHasTexts](conditions.md#collectionhastexts)
* [elementHasAttribute](conditions.md#elementhasattribute)
* [elementHasAttributeWithExactValue](conditions.md#elementhasattributewithexactvalue)
* [elementHasAttributeWithValue](conditions.md#elementhasattributewithvalue)
* [elementHasClass](conditions.md#elementhasclass)
* [elementHasExactText](conditions.md#elementhasexacttext)
* [elementHasText](conditions.md#elementhastext)
* [visibleElement](conditions.md#visibleelement)

---

## Variables

<a id="elementisabsent"></a>

### `<Const>` elementIsAbsent

**● elementIsAbsent**: *[ElementCondition](../classes/elementcondition.md)* =  new ElementCondition({
        matches: async function (element: Element) {
            try {
                await element.getWebElement();
            } catch (error) {
                return element;
            }
            throw new ConditionDoesNotMatchError(this.toString());
        },
        toString: function () {
            return 'be absent';
        }
    })

*Defined in [conditions/conditions.ts:51](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions/conditions.ts#L51)*

___
<a id="elementisfocused"></a>

### `<Const>` elementIsFocused

**● elementIsFocused**: *[ElementCondition](../classes/elementcondition.md)* =  new ElementCondition({
        matches: async function (element: Element) {
            const driver = Utils.getDriver(element);
            const script = 'return document.activeElement';
            const currentElement = await element.getWebElement();
            const focusedElement = await driver.executeScript(script) as WebElement;
            if (focusedElement && WebElement.equals(focusedElement, currentElement)) {
                return element;
            }
            throw new ConditionDoesNotMatchError(this.toString());
        },
        toString: function () {
            return 'be focused';
        }
    })

*Defined in [conditions/conditions.ts:65](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions/conditions.ts#L65)*

___
<a id="elementishidden"></a>

### `<Const>` elementIsHidden

**● elementIsHidden**: *[ElementCondition](../classes/elementcondition.md)* =  new ElementCondition({
        matches: async function (element: Element) {
            try {
                if (!(await element.isVisible())) {
                    return element;
                }
            } catch (ignored) {
            }
            throw new ConditionDoesNotMatchError(this.toString());
        },
        toString: function () {
            return 'be hidden';
        }
    })

*Defined in [conditions/conditions.ts:110](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions/conditions.ts#L110)*

___
<a id="elementispresent"></a>

### `<Const>` elementIsPresent

**● elementIsPresent**: *[ElementCondition](../classes/elementcondition.md)* =  new ElementCondition({
        matches: async function (element: Element) {
            try {
                await element.getWebElement();
                return element;
            } catch (ignored) {
            }
            throw new ConditionDoesNotMatchError(this.toString());
        },
        toString: function () {
            return 'be present';
        }
    })

*Defined in [conditions/conditions.ts:81](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions/conditions.ts#L81)*

___
<a id="elementisselected"></a>

### `<Const>` elementIsSelected

**● elementIsSelected**: *[ElementCondition](../classes/elementcondition.md)* =  elementHasAttribute('selected')

*Defined in [conditions/conditions.ts:49](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions/conditions.ts#L49)*

___
<a id="elementisvisible"></a>

### `<Const>` elementIsVisible

**● elementIsVisible**: *[ElementCondition](../classes/elementcondition.md)* =  new ElementCondition({
        matches: async function (element: Element) {
            try {
                if (await element.isVisible()) {
                    return element;
                }
            } catch (ignored) {
            }
            throw new ConditionDoesNotMatchError(this.toString());
        },
        toString: function () {
            return 'be visible';
        }
    })

*Defined in [conditions/conditions.ts:95](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions/conditions.ts#L95)*

___

## Functions

<a id="browsertabshavesize"></a>

###  browserTabsHaveSize

▸ **browserTabsHaveSize**(size: *`number`*): [DriverCondition](../classes/drivercondition.md)

*Defined in [conditions/conditions.ts:351](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions/conditions.ts#L351)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| size | `number` |

**Returns:** [DriverCondition](../classes/drivercondition.md)

___
<a id="browsertabshavesizegreaterthan"></a>

###  browserTabsHaveSizeGreaterThan

▸ **browserTabsHaveSizeGreaterThan**(size: *`number`*): [DriverCondition](../classes/drivercondition.md)

*Defined in [conditions/conditions.ts:370](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions/conditions.ts#L370)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| size | `number` |

**Returns:** [DriverCondition](../classes/drivercondition.md)

___
<a id="browserurlcontains"></a>

###  browserUrlContains

▸ **browserUrlContains**(url: *`string`*): [DriverCondition](../classes/drivercondition.md)

*Defined in [conditions/conditions.ts:332](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions/conditions.ts#L332)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| url | `string` |

**Returns:** [DriverCondition](../classes/drivercondition.md)

___
<a id="collectionhasexacttexts"></a>

###  collectionHasExactTexts

▸ **collectionHasExactTexts**(texts: * `string`[] &#124; `number`[]*): [CollectionCondition](../classes/collectioncondition.md)

*Defined in [conditions/conditions.ts:305](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions/conditions.ts#L305)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| texts |  `string`[] &#124; `number`[]|

**Returns:** [CollectionCondition](../classes/collectioncondition.md)

___
<a id="collectionhassize"></a>

###  collectionHasSize

▸ **collectionHasSize**(size: *`number`*): [CollectionCondition](../classes/collectioncondition.md)

*Defined in [conditions/conditions.ts:239](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions/conditions.ts#L239)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| size | `number` |

**Returns:** [CollectionCondition](../classes/collectioncondition.md)

___
<a id="collectionhassizemorethan"></a>

###  collectionHasSizeMoreThan

▸ **collectionHasSizeMoreThan**(size: *`number`*): [CollectionCondition](../classes/collectioncondition.md)

*Defined in [conditions/conditions.ts:258](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions/conditions.ts#L258)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| size | `number` |

**Returns:** [CollectionCondition](../classes/collectioncondition.md)

___
<a id="collectionhastexts"></a>

###  collectionHasTexts

▸ **collectionHasTexts**(texts: * `string`[] &#124; `number`[]*): [CollectionCondition](../classes/collectioncondition.md)

*Defined in [conditions/conditions.ts:277](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions/conditions.ts#L277)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| texts |  `string`[] &#124; `number`[]|

**Returns:** [CollectionCondition](../classes/collectioncondition.md)

___
<a id="elementhasattribute"></a>

###  elementHasAttribute

▸ **elementHasAttribute**(attributeName: *`string`*): [ElementCondition](../classes/elementcondition.md)

*Defined in [conditions/conditions.ts:163](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions/conditions.ts#L163)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| attributeName | `string` |

**Returns:** [ElementCondition](../classes/elementcondition.md)

___
<a id="elementhasattributewithexactvalue"></a>

###  elementHasAttributeWithExactValue

▸ **elementHasAttributeWithExactValue**(attributeName: *`string`*, attributeValue: * `string` &#124; `number`*): [ElementCondition](../classes/elementcondition.md)

*Defined in [conditions/conditions.ts:201](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions/conditions.ts#L201)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| attributeName | `string` |
| attributeValue |  `string` &#124; `number`|

**Returns:** [ElementCondition](../classes/elementcondition.md)

___
<a id="elementhasattributewithvalue"></a>

###  elementHasAttributeWithValue

▸ **elementHasAttributeWithValue**(attributeName: *`string`*, attributeValue: * `string` &#124; `number`*): [ElementCondition](../classes/elementcondition.md)

*Defined in [conditions/conditions.ts:182](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions/conditions.ts#L182)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| attributeName | `string` |
| attributeValue |  `string` &#124; `number`|

**Returns:** [ElementCondition](../classes/elementcondition.md)

___
<a id="elementhasclass"></a>

###  elementHasClass

▸ **elementHasClass**(cssClass: * `string` &#124; `number`*): [ElementCondition](../classes/elementcondition.md)

*Defined in [conditions/conditions.ts:220](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions/conditions.ts#L220)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| cssClass |  `string` &#124; `number`|

**Returns:** [ElementCondition](../classes/elementcondition.md)

___
<a id="elementhasexacttext"></a>

###  elementHasExactText

▸ **elementHasExactText**(text: * `string` &#124; `number`*): [ElementCondition](../classes/elementcondition.md)

*Defined in [conditions/conditions.ts:144](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions/conditions.ts#L144)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| text |  `string` &#124; `number`|

**Returns:** [ElementCondition](../classes/elementcondition.md)

___
<a id="elementhastext"></a>

###  elementHasText

▸ **elementHasText**(text: * `string` &#124; `number`*): [ElementCondition](../classes/elementcondition.md)

*Defined in [conditions/conditions.ts:125](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions/conditions.ts#L125)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| text |  `string` &#124; `number`|

**Returns:** [ElementCondition](../classes/elementcondition.md)

___
<a id="visibleelement"></a>

###  visibleElement

▸ **visibleElement**(locator: *`By`*): [ElementCondition](../classes/elementcondition.md)

*Defined in [conditions/conditions.ts:34](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/conditions/conditions.ts#L34)*

**Parameters:**

| Param | Type |
| ------ | ------ |
| locator | `By` |

**Returns:** [ElementCondition](../classes/elementcondition.md)

___

