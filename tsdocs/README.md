[selenidejs](README.md)

# selenidejs

## Index

### Namespaces

* [Extensions](README.md#extensions)
* [be](README.md#be)
* [by](README.md#by)
* [command](README.md#command)
* [condition](README.md#condition)
* [find](README.md#find)
* [get](README.md#get)
* [have](README.md#have)
* [perform](README.md#perform)
* [predicate](README.md#predicate)
* [query](README.md#query)
* [should](README.md#should)

### Classes

* [Browser](classes/browser.md)
* [BrowserWebElementByJs](classes/browserwebelementbyjs.md)
* [BrowserWebElementByLocator](classes/browserwebelementbylocator.md)
* [BrowserWebElementsByJs](classes/browserwebelementsbyjs.md)
* [BrowserWebElementsByLocator](classes/browserwebelementsbylocator.md)
* [ByIndexWebElementLocator](classes/byindexwebelementlocator.md)
* [CannotPerformActionError](classes/cannotperformactionerror.md)
* [CashedWebElementLocator](classes/cashedwebelementlocator.md)
* [CollectedByLocator](classes/collectedbylocator.md)
* [Collection](classes/collection.md)
* [Command](classes/command.md)
* [Condition](classes/condition.md)
* [ConditionNotMatchedError](classes/conditionnotmatchederror.md)
* [Configuration](classes/configuration.md)
* [Customized](classes/customized.md)
* [Element](classes/element.md)
* [ElementByConditionWebElementLocator](classes/elementbyconditionwebelementlocator.md)
* [ElementWebElementByJs](classes/elementwebelementbyjs.md)
* [ElementWebElementByLocator](classes/elementwebelementbylocator.md)
* [ElementWebElementsByJs](classes/elementwebelementsbyjs.md)
* [ElementWebElementsByLocator](classes/elementwebelementsbylocator.md)
* [Entity](classes/entity.md)
* [FailedToMatchConditionWithReasonError](classes/failedtomatchconditionwithreasonerror.md)
* [FilteredByConditionWebElementsLocator](classes/filteredbyconditionwebelementslocator.md)
* [Query](classes/query.md)
* [Shadow](classes/shadow.md)
* [SlicedWebElementsLocator](classes/slicedwebelementslocator.md)
* [TimeoutError](classes/timeouterror.md)
* [Wait](classes/wait.md)

### Interfaces

* [Assertable](interfaces/assertable.md)
* [Fn](interfaces/fn.md)
* [Locator](interfaces/locator.md)
* [Matchable](interfaces/matchable.md)

### Type aliases

* [BrowserCondition](README.md#browsercondition)
* [CollectionCondition](README.md#collectioncondition)
* [ElementCondition](README.md#elementcondition)
* [Lambda](README.md#lambda)
* [OnEntityFailureHook](README.md#onentityfailurehook)
* [OnFailureHook](README.md#onfailurehook)

### Variables

* [isAbsoluteUrl](README.md#isabsoluteurl)

### Functions

* [lambda](README.md#lambda)
* [toString](README.md#const-tostring)

## Namespaces

###  Extensions

• **Extensions**:

*Defined in [lib/utils/extensions.ts:24](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/utils/extensions.ts#L24)*

###  isAbsoluteUrl

▸ **isAbsoluteUrl**(`relativeOrAbsoluteUrl`: string): *boolean*

*Defined in [lib/utils/extensions.ts:53](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/utils/extensions.ts#L53)*

**Parameters:**

Name | Type |
------ | ------ |
`relativeOrAbsoluteUrl` | string |

**Returns:** *boolean*

###  savePageSource

▸ **savePageSource**(`driver`: WebDriver, `filePath`: string): *Promise‹string›*

*Defined in [lib/utils/extensions.ts:27](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/utils/extensions.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`driver` | WebDriver |
`filePath` | string |

**Returns:** *Promise‹string›*

###  saveScreenshot

▸ **saveScreenshot**(`driver`: WebDriver, `filePath`: string): *Promise‹string›*

*Defined in [lib/utils/extensions.ts:37](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/utils/extensions.ts#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`driver` | WebDriver |
`filePath` | string |

**Returns:** *Promise‹string›*

###  toBy

▸ **toBy**(`cssOrXpathOrBy`: string | By): *By*

*Defined in [lib/utils/extensions.ts:47](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/utils/extensions.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`cssOrXpathOrBy` | string &#124; By |

**Returns:** *By*

___

###  be

• **be**:

*Defined in [lib/support/conditions/be.ts:19](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/conditions/be.ts#L19)*

### `Const` absent

• **absent**: *[ElementCondition](README.md#elementcondition)* = condition.element.isAbsent

*Defined in [lib/support/conditions/be.ts:24](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/conditions/be.ts#L24)*

### `Const` blank

• **blank**: *[ElementCondition](README.md#elementcondition)* = condition.element.isBlank

*Defined in [lib/support/conditions/be.ts:38](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/conditions/be.ts#L38)*

### `Const` disabled

• **disabled**: *[ElementCondition](README.md#elementcondition)* = condition.element.isDisabled

*Defined in [lib/support/conditions/be.ts:36](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/conditions/be.ts#L36)*

### `Const` enabled

• **enabled**: *[ElementCondition](README.md#elementcondition)* = condition.element.isEnabled

*Defined in [lib/support/conditions/be.ts:34](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/conditions/be.ts#L34)*

### `Const` focused

• **focused**: *[ElementCondition](README.md#elementcondition)* = condition.element.isFocused

*Defined in [lib/support/conditions/be.ts:32](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/conditions/be.ts#L32)*

### `Const` hidden

• **hidden**: *[ElementCondition](README.md#elementcondition)* = condition.element.isHidden

*Defined in [lib/support/conditions/be.ts:30](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/conditions/be.ts#L30)*

### `Const` not

• **not**: *[be](README.md#be)* = new Proxy(be, { get: (be, conditionName) => Condition.not(be[conditionName]) })

*Defined in [lib/support/conditions/be.ts:20](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/conditions/be.ts#L20)*

### `Const` present

• **present**: *[ElementCondition](README.md#elementcondition)* = condition.element.isPresent

*Defined in [lib/support/conditions/be.ts:26](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/conditions/be.ts#L26)*

### `Const` selected

• **selected**: *[ElementCondition](README.md#elementcondition)* = condition.element.isSelected

*Defined in [lib/support/conditions/be.ts:22](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/conditions/be.ts#L22)*

### `Const` visible

• **visible**: *[ElementCondition](README.md#elementcondition)* = condition.element.isVisible

*Defined in [lib/support/conditions/be.ts:28](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/conditions/be.ts#L28)*

___

###  by

• **by**:

*Defined in [lib/support/selectors/by.ts:19](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/selectors/by.ts#L19)*

### `Const` NORMALIZE_SPACE_XPATH

• **NORMALIZE_SPACE_XPATH**: *"normalize-space(translate(string(.), '	
 ', '    '))"* = "normalize-space(translate(string(.), '	
 ', '    '))"

*Defined in [lib/support/selectors/by.ts:21](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/selectors/by.ts#L21)*

###  attribute

▸ **attribute**(`attributeName`: string, `attributeValue`: string): *By*

*Defined in [lib/support/selectors/by.ts:69](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/selectors/by.ts#L69)*

**Parameters:**

Name | Type |
------ | ------ |
`attributeName` | string |
`attributeValue` | string |

**Returns:** *By*

###  className

▸ **className**(`className`: string): *By*

*Defined in [lib/support/selectors/by.ts:57](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/selectors/by.ts#L57)*

**Parameters:**

Name | Type |
------ | ------ |
`className` | string |

**Returns:** *By*

###  css

▸ **css**(`css`: string): *By*

*Defined in [lib/support/selectors/by.ts:65](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/selectors/by.ts#L65)*

**Parameters:**

Name | Type |
------ | ------ |
`css` | string |

**Returns:** *By*

###  exactText

▸ **exactText**(`text`: string): *By‹›*

*Defined in [lib/support/selectors/by.ts:41](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/selectors/by.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`text` | string |

**Returns:** *By‹›*

###  id

▸ **id**(`id`: string): *By*

*Defined in [lib/support/selectors/by.ts:49](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/selectors/by.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *By*

###  linkText

▸ **linkText**(`text`: string): *By*

*Defined in [lib/support/selectors/by.ts:45](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/selectors/by.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`text` | string |

**Returns:** *By*

###  name

▸ **name**(`name`: string): *By*

*Defined in [lib/support/selectors/by.ts:53](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/selectors/by.ts#L53)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *By*

###  partialId

▸ **partialId**(...`idParts`: string[]): *By*

*Defined in [lib/support/selectors/by.ts:32](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/selectors/by.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`...idParts` | string[] |

**Returns:** *By*

###  text

▸ **text**(`text`: string): *By‹›*

*Defined in [lib/support/selectors/by.ts:37](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/selectors/by.ts#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`text` | string |

**Returns:** *By‹›*

###  type

▸ **type**(`type`: string): *By*

*Defined in [lib/support/selectors/by.ts:23](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/selectors/by.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | string |

**Returns:** *By*

###  value

▸ **value**(`value`: string): *By*

*Defined in [lib/support/selectors/by.ts:27](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/selectors/by.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *By*

###  xpath

▸ **xpath**(`xpath`: string): *By*

*Defined in [lib/support/selectors/by.ts:61](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/selectors/by.ts#L61)*

**Parameters:**

Name | Type |
------ | ------ |
`xpath` | string |

**Returns:** *By*

___

###  command

• **command**:

*Defined in [lib/commands.ts:18](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/commands.ts#L18)*

###  js

• **js**:

*Defined in [lib/commands.ts:31](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/commands.ts#L31)*

### `Const` click

• **click**: *(Anonymous function)* = lambda('click by js', clickWithOffset(0, 0))

*Defined in [lib/commands.ts:53](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/commands.ts#L53)*

### `Const` scrollIntoView

• **scrollIntoView**: *(Anonymous function)* = lambda('scroll into view', async element =>
            element.executeScript((element: HTMLInputElement) => element.scrollIntoView(true)))

*Defined in [lib/commands.ts:89](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/commands.ts#L89)*

### `Const` clickWithOffset

▸ **clickWithOffset**(`xOffset`: number, `yOffset`: number): *(Anonymous function)*

*Defined in [lib/commands.ts:35](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/commands.ts#L35)*

**Parameters:**

Name | Type |
------ | ------ |
`xOffset` | number |
`yOffset` | number |

**Returns:** *(Anonymous function)*

### `Const` setValue

▸ **setValue**(`value`: string | number): *(Anonymous function)*

*Defined in [lib/commands.ts:55](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/commands.ts#L55)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string &#124; number |

**Returns:** *(Anonymous function)*

### `Const` type

▸ **type**(`keys`: string | number): *(Anonymous function)*

*Defined in [lib/commands.ts:73](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/commands.ts#L73)*

**Parameters:**

Name | Type |
------ | ------ |
`keys` | string &#124; number |

**Returns:** *(Anonymous function)*

___

###  condition

• **condition**:

*Defined in [lib/conditions.ts:90](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/conditions.ts#L90)*

The list of predefined conditions for all type of entities:
- condition.element.*
- condition.collection.*
- condition.browser.*

Can be used in the following way:
```
    await browser.all('.google-result').should(condition.collection.have.size(10))
```

Yet there are more handy aliases in be.* and have.* namespaces:
```
    await browser.all('.google-result').should(have.size(10))
```

All conditions (Condition<T>) are just predicate-like functions on entity of corresponding type (T),
wrapped into Condition object: `new Condition(description, predicateLikeFn)`
The "predicate-like" function should:
 - pass (returning void) in case when a "normal predicate" version would return true
 - throw Error in case when a "normal predicate"  would return false

The following example shows how a condition can be implemented:
```ts
    export function hasText(expected: string): ElementCondition {
        return new Condition(`has text: ${expected}`, async (element: Element) => {
            const actual = await element.getWebElement().then(it => it.getText());
            if (!actual.includes(expected)) {
                throw new Error(`actual text: ${actual}`);
            }
        })
    }
```

Or more concise by using arrow functions:
```ts
    export const hasText = (expected: string): ElementCondition =>
        new Condition(`has text: ${expected}`, async (element: Element) => {
            const actual = await element.getWebElement().then(it => it.getText());
            if (!actual.includes(expected)) {
                throw new Error(`actual text: ${actual}`);
            }
        });
```

We can refactor the code above even more, if notice,
that the actual condition reflects a simple rule:
- throw error if actual value (returned from some query on element like "getting its text")
  does not satisfy the predicate (like includes expected text)
If we abstract this "throw error if not predicate(actual)" into some function like throwIfNotActual,
The code will become very concise and declarative:
```ts
    export const hasText = (expected: string): ElementCondition =>
        new Condition(`has text: ${expected}`,
               throwIfNotActual(query.text, predicate.includes(expected)));
```

This is how predefined in selenidejs conditions are implemented below.

Have fun;)

###  browser

• **browser**:

*Defined in [lib/conditions.ts:242](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/conditions.ts#L242)*

### `Const` hasJsReturned

▸ **hasJsReturned**(`expected`: any, `script`: string | function, ...`args`: any[]): *[BrowserCondition](README.md#browsercondition)*

*Defined in [lib/conditions.ts:279](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/conditions.ts#L279)*

**Parameters:**

Name | Type |
------ | ------ |
`expected` | any |
`script` | string &#124; function |
`...args` | any[] |

**Returns:** *[BrowserCondition](README.md#browsercondition)*

### `Const` hasTabsNumber

▸ **hasTabsNumber**(`num`: number): *[BrowserCondition](README.md#browsercondition)*

*Defined in [lib/conditions.ts:264](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/conditions.ts#L264)*

**Parameters:**

Name | Type |
------ | ------ |
`num` | number |

**Returns:** *[BrowserCondition](README.md#browsercondition)*

### `Const` hasTabsNumberLessThan

▸ **hasTabsNumberLessThan**(`num`: number): *[BrowserCondition](README.md#browsercondition)*

*Defined in [lib/conditions.ts:274](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/conditions.ts#L274)*

**Parameters:**

Name | Type |
------ | ------ |
`num` | number |

**Returns:** *[BrowserCondition](README.md#browsercondition)*

### `Const` hasTabsNumberMoreThan

▸ **hasTabsNumberMoreThan**(`num`: number): *[BrowserCondition](README.md#browsercondition)*

*Defined in [lib/conditions.ts:269](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/conditions.ts#L269)*

**Parameters:**

Name | Type |
------ | ------ |
`num` | number |

**Returns:** *[BrowserCondition](README.md#browsercondition)*

### `Const` hasTitle

▸ **hasTitle**(`title`: string): *[BrowserCondition](README.md#browsercondition)*

*Defined in [lib/conditions.ts:254](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/conditions.ts#L254)*

**Parameters:**

Name | Type |
------ | ------ |
`title` | string |

**Returns:** *[BrowserCondition](README.md#browsercondition)*

### `Const` hasTitleContaining

▸ **hasTitleContaining**(`partialTitle`: string): *[BrowserCondition](README.md#browsercondition)*

*Defined in [lib/conditions.ts:259](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/conditions.ts#L259)*

**Parameters:**

Name | Type |
------ | ------ |
`partialTitle` | string |

**Returns:** *[BrowserCondition](README.md#browsercondition)*

### `Const` hasUrl

▸ **hasUrl**(`url`: string): *[BrowserCondition](README.md#browsercondition)*

*Defined in [lib/conditions.ts:249](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/conditions.ts#L249)*

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |

**Returns:** *[BrowserCondition](README.md#browsercondition)*

### `Const` hasUrlContaining

▸ **hasUrlContaining**(`partialUrl`: string): *[BrowserCondition](README.md#browsercondition)*

*Defined in [lib/conditions.ts:244](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/conditions.ts#L244)*

**Parameters:**

Name | Type |
------ | ------ |
`partialUrl` | string |

**Returns:** *[BrowserCondition](README.md#browsercondition)*

###  collection

• **collection**:

*Defined in [lib/conditions.ts:201](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/conditions.ts#L201)*

### `Const` hasExactTexts

▸ **hasExactTexts**(`texts`: string[] | number[]): *[CollectionCondition](README.md#collectioncondition)*

*Defined in [lib/conditions.ts:236](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/conditions.ts#L236)*

**Parameters:**

Name | Type |
------ | ------ |
`texts` | string[] &#124; number[] |

**Returns:** *[CollectionCondition](README.md#collectioncondition)*

### `Const` hasSize

▸ **hasSize**(`expected`: number): *[CollectionCondition](README.md#collectioncondition)*

*Defined in [lib/conditions.ts:202](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/conditions.ts#L202)*

**Parameters:**

Name | Type |
------ | ------ |
`expected` | number |

**Returns:** *[CollectionCondition](README.md#collectioncondition)*

### `Const` hasSizeGreaterThan

▸ **hasSizeGreaterThan**(`size`: number): *[CollectionCondition](README.md#collectioncondition)*

*Defined in [lib/conditions.ts:207](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/conditions.ts#L207)*

**Parameters:**

Name | Type |
------ | ------ |
`size` | number |

**Returns:** *[CollectionCondition](README.md#collectioncondition)*

### `Const` hasSizeGreaterThanOrEqual

▸ **hasSizeGreaterThanOrEqual**(`size`: number): *[CollectionCondition](README.md#collectioncondition)*

*Defined in [lib/conditions.ts:212](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/conditions.ts#L212)*

**Parameters:**

Name | Type |
------ | ------ |
`size` | number |

**Returns:** *[CollectionCondition](README.md#collectioncondition)*

### `Const` hasSizeLessThan

▸ **hasSizeLessThan**(`size`: number): *[CollectionCondition](README.md#collectioncondition)*

*Defined in [lib/conditions.ts:217](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/conditions.ts#L217)*

**Parameters:**

Name | Type |
------ | ------ |
`size` | number |

**Returns:** *[CollectionCondition](README.md#collectioncondition)*

### `Const` hasSizeLessThanOrEqual

▸ **hasSizeLessThanOrEqual**(`size`: number): *[CollectionCondition](README.md#collectioncondition)*

*Defined in [lib/conditions.ts:222](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/conditions.ts#L222)*

**Parameters:**

Name | Type |
------ | ------ |
`size` | number |

**Returns:** *[CollectionCondition](README.md#collectioncondition)*

### `Const` hasTexts

▸ **hasTexts**(`texts`: string[] | number[]): *[CollectionCondition](README.md#collectioncondition)*

*Defined in [lib/conditions.ts:231](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/conditions.ts#L231)*

**Parameters:**

Name | Type |
------ | ------ |
`texts` | string[] &#124; number[] |

**Returns:** *[CollectionCondition](README.md#collectioncondition)*

###  element

• **element**:

*Defined in [lib/conditions.ts:122](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/conditions.ts#L122)*

### `Const` isAbsent

• **isAbsent**: *[Condition](classes/condition.md)‹unknown›* = Condition.not(isPresent, 'is absent')

*Defined in [lib/conditions.ts:150](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/conditions.ts#L150)*

### `Const` isBlank

• **isBlank**: *any* = hasExactText('').and(hasValue(''))

*Defined in [lib/conditions.ts:198](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/conditions.ts#L198)*

### `Const` isDisabled

• **isDisabled**: *[Condition](classes/condition.md)‹unknown›* = Condition.not(isEnabled, 'is disabled')

*Defined in [lib/conditions.ts:143](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/conditions.ts#L143)*

### `Const` isEnabled

• **isEnabled**: *[Condition](classes/condition.md)‹unknown›* = new Condition(
            'is enabled',
            throwIfNot(async (element: Element) => element.getWebElement().then(webelement => webelement.isEnabled()))
        )

*Defined in [lib/conditions.ts:138](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/conditions.ts#L138)*

### `Const` isFocused

• **isFocused**: *[Condition](classes/condition.md)‹unknown›* = new Condition(
            'is focused',
            throwIfNot(async (element: Element) =>
                WebElement.equals(
                    await element.executeScript('return document.activeElement') as WebElement,
                    await element.getWebElement()
                ))
        )

*Defined in [lib/conditions.ts:152](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/conditions.ts#L152)*

### `Const` isHidden

• **isHidden**: *[Condition](classes/condition.md)‹unknown›* = Condition.not(isVisible, 'is hidden')

*Defined in [lib/conditions.ts:129](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/conditions.ts#L129)*

### `Const` isPresent

• **isPresent**: *[Condition](classes/condition.md)‹unknown›* = new Condition(
            'is present',
            throwIfNot(async (element: Element) => element.getWebElement().then(_ => true, _ => false)
            ))

*Defined in [lib/conditions.ts:145](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/conditions.ts#L145)*

### `Const` isSelected

• **isSelected**: *[Condition](classes/condition.md)‹unknown›* = hasAttribute('elementIsSelected')

*Defined in [lib/conditions.ts:136](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/conditions.ts#L136)*

### `Const` isVisible

• **isVisible**: *[Condition](classes/condition.md)‹unknown›* = new Condition(
            'is visible',
            throwIfNot(async (element: Element) => element.getWebElement().then(webelement => webelement.isDisplayed()))
        )

*Defined in [lib/conditions.ts:124](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/conditions.ts#L124)*

### `Const` hasAttribute

▸ **hasAttribute**(`name`: string): *[Condition](classes/condition.md)‹unknown›*

*Defined in [lib/conditions.ts:131](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/conditions.ts#L131)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *[Condition](classes/condition.md)‹unknown›*

### `Const` hasAttributeWithValue

▸ **hasAttributeWithValue**(`name`: string, `value`: string | number): *[Condition](classes/condition.md)‹unknown›*

*Defined in [lib/conditions.ts:174](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/conditions.ts#L174)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`value` | string &#124; number |

**Returns:** *[Condition](classes/condition.md)‹unknown›*

### `Const` hasAttributeWithValueContaining

▸ **hasAttributeWithValueContaining**(`name`: string, `partialValue`: string | number): *[Condition](classes/condition.md)‹unknown›*

*Defined in [lib/conditions.ts:180](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/conditions.ts#L180)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`partialValue` | string &#124; number |

**Returns:** *[Condition](classes/condition.md)‹unknown›*

### `Const` hasCssClass

▸ **hasCssClass**(`cssClass`: string): *[Condition](classes/condition.md)‹unknown›*

*Defined in [lib/conditions.ts:185](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/conditions.ts#L185)*

**Parameters:**

Name | Type |
------ | ------ |
`cssClass` | string |

**Returns:** *[Condition](classes/condition.md)‹unknown›*

### `Const` hasExactText

▸ **hasExactText**(`expected`: string | number): *[Condition](classes/condition.md)‹unknown›*

*Defined in [lib/conditions.ts:170](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/conditions.ts#L170)*

**Parameters:**

Name | Type |
------ | ------ |
`expected` | string &#124; number |

**Returns:** *[Condition](classes/condition.md)‹unknown›*

### `Const` hasText

▸ **hasText**(`expected`: string | number | RegExp): *[Condition](classes/condition.md)‹unknown›*

*Defined in [lib/conditions.ts:161](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/conditions.ts#L161)*

**Parameters:**

Name | Type |
------ | ------ |
`expected` | string &#124; number &#124; RegExp |

**Returns:** *[Condition](classes/condition.md)‹unknown›*

### `Const` hasValue

▸ **hasValue**(`expected`: string | number): *[Condition](classes/condition.md)‹unknown›*

*Defined in [lib/conditions.ts:190](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/conditions.ts#L190)*

**Parameters:**

Name | Type |
------ | ------ |
`expected` | string &#124; number |

**Returns:** *[Condition](classes/condition.md)‹unknown›*

### `Const` hasValueContaining

▸ **hasValueContaining**(`expected`: string | number): *[Condition](classes/condition.md)‹unknown›*

*Defined in [lib/conditions.ts:193](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/conditions.ts#L193)*

**Parameters:**

Name | Type |
------ | ------ |
`expected` | string &#124; number |

**Returns:** *[Condition](classes/condition.md)‹unknown›*

###  throwIfNot

▸ **throwIfNot**<**E**>(`predicate`: function): *[Lambda](README.md#lambda)‹E, void›*

*Defined in [lib/conditions.ts:97](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/conditions.ts#L97)*

Creates condition from async query

**Type parameters:**

▪ **E**

**Parameters:**

▪ **predicate**: *function*

▸ (`entity`: E): *Promise‹boolean›*

**Parameters:**

Name | Type |
------ | ------ |
`entity` | E |

**Returns:** *[Lambda](README.md#lambda)‹E, void›*

###  throwIfNotActual

▸ **throwIfNotActual**<**E**, **A**>(`query`: function, `predicate`: function): *[Lambda](README.md#lambda)‹E, void›*

*Defined in [lib/conditions.ts:109](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/conditions.ts#L109)*

Transforms an entity query compared through predicate - to Condition
Example: throwIfNotActual(query.text, predicate.equals(text))

**Type parameters:**

▪ **E**

▪ **A**

**Parameters:**

▪ **query**: *function*

▸ (`entity`: E): *Promise‹A›*

**Parameters:**

Name | Type |
------ | ------ |
`entity` | E |

▪ **predicate**: *function*

▸ (`actual`: A): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`actual` | A |

**Returns:** *[Lambda](README.md#lambda)‹E, void›*

___

###  find

• **find**:

*Defined in [lib/support/elements/find.ts:21](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/elements/find.ts#L21)*

### `Const` alert

▸ **alert**(`browser`: [Browser](classes/browser.md)): *AlertPromise‹›*

*Defined in [lib/support/elements/find.ts:51](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/elements/find.ts#L51)*

**Parameters:**

Name | Type |
------ | ------ |
`browser` | [Browser](classes/browser.md) |

**Returns:** *AlertPromise‹›*

### `Const` collected

▸ **collected**(`searchFunction`: function): *(Anonymous function)*

*Defined in [lib/support/elements/find.ts:28](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/elements/find.ts#L28)*

**Parameters:**

▪ **searchFunction**: *function*

▸ (`element`: [Element](classes/element.md)): *[Element](classes/element.md) | [Collection](classes/collection.md)*

**Parameters:**

Name | Type |
------ | ------ |
`element` | [Element](classes/element.md) |

**Returns:** *(Anonymous function)*

### `Const` element

▸ **element**(`cssOrXpathOrBy`: string | By): *(Anonymous function)*

*Defined in [lib/support/elements/find.ts:25](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/elements/find.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`cssOrXpathOrBy` | string &#124; By |

**Returns:** *(Anonymous function)*

### `Const` elementAt

▸ **elementAt**(`index`: number): *(Anonymous function)*

*Defined in [lib/support/elements/find.ts:37](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/elements/find.ts#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *(Anonymous function)*

### `Const` elementBy

▸ **elementBy**(`condition`: [ElementCondition](README.md#elementcondition)): *(Anonymous function)*

*Defined in [lib/support/elements/find.ts:45](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/elements/find.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`condition` | [ElementCondition](README.md#elementcondition) |

**Returns:** *(Anonymous function)*

### `Const` filteredBy

▸ **filteredBy**(`condition`: [ElementCondition](README.md#elementcondition)): *(Anonymous function)*

*Defined in [lib/support/elements/find.ts:47](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/elements/find.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`condition` | [ElementCondition](README.md#elementcondition) |

**Returns:** *(Anonymous function)*

### `Const` first

▸ **first**(`collection`: [Collection](classes/collection.md)): *[Element](classes/element.md)‹›*

*Defined in [lib/support/elements/find.ts:40](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/elements/find.ts#L40)*

**Parameters:**

Name | Type |
------ | ------ |
`collection` | [Collection](classes/collection.md) |

**Returns:** *[Element](classes/element.md)‹›*

### `Const` followingSibling

▸ **followingSibling**(`element`: [Element](classes/element.md)): *[Element](classes/element.md)‹›*

*Defined in [lib/support/elements/find.ts:33](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/elements/find.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`element` | [Element](classes/element.md) |

**Returns:** *[Element](classes/element.md)‹›*

### `Const` parent

▸ **parent**(`element`: [Element](classes/element.md)): *[Element](classes/element.md)‹›*

*Defined in [lib/support/elements/find.ts:32](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/elements/find.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`element` | [Element](classes/element.md) |

**Returns:** *[Element](classes/element.md)‹›*

### `Const` sliced

▸ **sliced**(`start`: number, `end`: number): *(Anonymous function)*

*Defined in [lib/support/elements/find.ts:41](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/elements/find.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`start` | number |
`end` | number |

**Returns:** *(Anonymous function)*

___

###  get

• **get**:

*Defined in [lib/support/queries/get.ts:25](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/queries/get.ts#L25)*

to be used in the following context:
  `element.click().then(get.text)`

### `Const` currentTab

• **currentTab**: *(Anonymous function)* = waitingForBrowser(query.currentTab)

*Defined in [lib/support/queries/get.ts:56](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/queries/get.ts#L56)*

### `Const` innerHtml

• **innerHtml**: *(Anonymous function)* = waitingForEntity(query.innerHtml)

*Defined in [lib/support/queries/get.ts:35](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/queries/get.ts#L35)*

### `Const` outerHtml

• **outerHtml**: *(Anonymous function)* = waitingForEntity(query.outerHtml)

*Defined in [lib/support/queries/get.ts:36](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/queries/get.ts#L36)*

### `Const` pageSource

• **pageSource**: *(Anonymous function)* = waitingForBrowser(query.pageSource)

*Defined in [lib/support/queries/get.ts:58](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/queries/get.ts#L58)*

### `Const` size

• **size**: *(Anonymous function)* = waitingForCollection(query.size)

*Defined in [lib/support/queries/get.ts:44](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/queries/get.ts#L44)*

### `Const` someText

• **someText**: *(Anonymous function)* = waitingForEntity(query.someText)

*Defined in [lib/support/queries/get.ts:33](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/queries/get.ts#L33)*

### `Const` tabs

• **tabs**: *(Anonymous function)* = waitingForBrowser(query.tabs)

*Defined in [lib/support/queries/get.ts:54](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/queries/get.ts#L54)*

### `Const` tabsNumber

• **tabsNumber**: *(Anonymous function)* = waitingForBrowser(query.tabsNumber)

*Defined in [lib/support/queries/get.ts:57](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/queries/get.ts#L57)*

### `Const` text

• **text**: *(Anonymous function)* = waitingForEntity(query.text)

*Defined in [lib/support/queries/get.ts:32](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/queries/get.ts#L32)*

### `Const` texts

• **texts**: *(Anonymous function)* = waitingForCollection(query.texts)

*Defined in [lib/support/queries/get.ts:45](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/queries/get.ts#L45)*

### `Const` title

• **title**: *(Anonymous function)* = waitingForBrowser(query.title)

*Defined in [lib/support/queries/get.ts:53](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/queries/get.ts#L53)*

### `Const` url

• **url**: *(Anonymous function)* = waitingForBrowser(query.url)

*Defined in [lib/support/queries/get.ts:52](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/queries/get.ts#L52)*

### `Const` value

• **value**: *(Anonymous function)* = waitingForEntity(query.value)

*Defined in [lib/support/queries/get.ts:37](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/queries/get.ts#L37)*

### `Const` attribute

▸ **attribute**(`name`: string): *(Anonymous function)*

*Defined in [lib/support/queries/get.ts:34](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/queries/get.ts#L34)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *(Anonymous function)*

### `Const` tab

▸ **tab**(`index`: number): *(Anonymous function)*

*Defined in [lib/support/queries/get.ts:55](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/queries/get.ts#L55)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *(Anonymous function)*

### `Const` waitingForBrowser

▸ **waitingForBrowser**<**R**>(`query`: [Lambda](README.md#lambda)‹[Browser](classes/browser.md), R›): *(Anonymous function)*

*Defined in [lib/support/queries/get.ts:49](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/queries/get.ts#L49)*

**Type parameters:**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`query` | [Lambda](README.md#lambda)‹[Browser](classes/browser.md), R› |

**Returns:** *(Anonymous function)*

### `Const` waitingForCollection

▸ **waitingForCollection**<**R**>(`query`: [Lambda](README.md#lambda)‹[Collection](classes/collection.md), R›): *(Anonymous function)*

*Defined in [lib/support/queries/get.ts:41](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/queries/get.ts#L41)*

**Type parameters:**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`query` | [Lambda](README.md#lambda)‹[Collection](classes/collection.md), R› |

**Returns:** *(Anonymous function)*

### `Const` waitingForEntity

▸ **waitingForEntity**<**R**>(`query`: [Lambda](README.md#lambda)‹[Element](classes/element.md), R›): *(Anonymous function)*

*Defined in [lib/support/queries/get.ts:29](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/queries/get.ts#L29)*

**Type parameters:**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`query` | [Lambda](README.md#lambda)‹[Element](classes/element.md), R› |

**Returns:** *(Anonymous function)*

___

###  have

• **have**:

*Defined in [lib/support/conditions/have.ts:18](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/conditions/have.ts#L18)*

### `Const` no

• **no**: *[have](README.md#have)* = new Proxy(have, {
        get: (have, conditionName) => (...args) => Condition.not(have[conditionName](...args))
    })

*Defined in [lib/support/conditions/have.ts:20](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/conditions/have.ts#L20)*

### `Const` attribute

▸ **attribute**(`name`: string): *[ElementCondition](README.md#elementcondition)*

*Defined in [lib/support/conditions/have.ts:32](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/conditions/have.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *[ElementCondition](README.md#elementcondition)*

### `Const` attributeWithValue

▸ **attributeWithValue**(`attributeName`: string, `attributeValue`: string | number): *[ElementCondition](README.md#elementcondition)*

*Defined in [lib/support/conditions/have.ts:35](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/conditions/have.ts#L35)*

**Parameters:**

Name | Type |
------ | ------ |
`attributeName` | string |
`attributeValue` | string &#124; number |

**Returns:** *[ElementCondition](README.md#elementcondition)*

### `Const` attributeWithValueContaining

▸ **attributeWithValueContaining**(`attributeName`: string, `attributeValue`: string | number): *[ElementCondition](README.md#elementcondition)*

*Defined in [lib/support/conditions/have.ts:38](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/conditions/have.ts#L38)*

**Parameters:**

Name | Type |
------ | ------ |
`attributeName` | string |
`attributeValue` | string &#124; number |

**Returns:** *[ElementCondition](README.md#elementcondition)*

### `Const` cssClass

▸ **cssClass**(`cssClass`: string): *[ElementCondition](README.md#elementcondition)*

*Defined in [lib/support/conditions/have.ts:48](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/conditions/have.ts#L48)*

**Parameters:**

Name | Type |
------ | ------ |
`cssClass` | string |

**Returns:** *[ElementCondition](README.md#elementcondition)*

### `Const` exactText

▸ **exactText**(`value`: string | number): *[ElementCondition](README.md#elementcondition)*

*Defined in [lib/support/conditions/have.ts:26](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/conditions/have.ts#L26)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string &#124; number |

**Returns:** *[ElementCondition](README.md#elementcondition)*

### `Const` exactTexts

▸ **exactTexts**(...`texts`: string[]): *[CollectionCondition](README.md#collectioncondition)*

*Defined in [lib/support/conditions/have.ts:68](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/conditions/have.ts#L68)*

**Parameters:**

Name | Type |
------ | ------ |
`...texts` | string[] |

**Returns:** *[CollectionCondition](README.md#collectioncondition)*

### `Const` jsReturned

▸ **jsReturned**(`expected`: any, `script`: string, ...`scriptArgs`: any[]): *[BrowserCondition](README.md#browsercondition)*

*Defined in [lib/support/conditions/have.ts:96](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/conditions/have.ts#L96)*

**Parameters:**

Name | Type |
------ | ------ |
`expected` | any |
`script` | string |
`...scriptArgs` | any[] |

**Returns:** *[BrowserCondition](README.md#browsercondition)*

### `Const` size

▸ **size**(`size`: number): *[CollectionCondition](README.md#collectioncondition)*

*Defined in [lib/support/conditions/have.ts:53](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/conditions/have.ts#L53)*

**Parameters:**

Name | Type |
------ | ------ |
`size` | number |

**Returns:** *[CollectionCondition](README.md#collectioncondition)*

### `Const` sizeGreaterThan

▸ **sizeGreaterThan**(`size`: number): *[CollectionCondition](README.md#collectioncondition)*

*Defined in [lib/support/conditions/have.ts:59](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/conditions/have.ts#L59)*

**Parameters:**

Name | Type |
------ | ------ |
`size` | number |

**Returns:** *[CollectionCondition](README.md#collectioncondition)*

### `Const` sizeGreaterThanOrEqual

▸ **sizeGreaterThanOrEqual**(`size`: number): *[CollectionCondition](README.md#collectioncondition)*

*Defined in [lib/support/conditions/have.ts:61](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/conditions/have.ts#L61)*

**Parameters:**

Name | Type |
------ | ------ |
`size` | number |

**Returns:** *[CollectionCondition](README.md#collectioncondition)*

### `Const` sizeLessThan

▸ **sizeLessThan**(`size`: number): *[CollectionCondition](README.md#collectioncondition)*

*Defined in [lib/support/conditions/have.ts:55](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/conditions/have.ts#L55)*

**Parameters:**

Name | Type |
------ | ------ |
`size` | number |

**Returns:** *[CollectionCondition](README.md#collectioncondition)*

### `Const` sizeLessThanOrEqual

▸ **sizeLessThanOrEqual**(`size`: number): *[CollectionCondition](README.md#collectioncondition)*

*Defined in [lib/support/conditions/have.ts:57](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/conditions/have.ts#L57)*

**Parameters:**

Name | Type |
------ | ------ |
`size` | number |

**Returns:** *[CollectionCondition](README.md#collectioncondition)*

### `Const` tabsNumber

▸ **tabsNumber**(`num`: number): *[BrowserCondition](README.md#browsercondition)*

*Defined in [lib/support/conditions/have.ts:85](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/conditions/have.ts#L85)*

**Parameters:**

Name | Type |
------ | ------ |
`num` | number |

**Returns:** *[BrowserCondition](README.md#browsercondition)*

### `Const` tabsNumberLessThan

▸ **tabsNumberLessThan**(`num`: number): *[BrowserCondition](README.md#browsercondition)*

*Defined in [lib/support/conditions/have.ts:88](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/conditions/have.ts#L88)*

**Parameters:**

Name | Type |
------ | ------ |
`num` | number |

**Returns:** *[BrowserCondition](README.md#browsercondition)*

### `Const` tabsNumberMoreThan

▸ **tabsNumberMoreThan**(`num`: number): *[BrowserCondition](README.md#browsercondition)*

*Defined in [lib/support/conditions/have.ts:91](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/conditions/have.ts#L91)*

**Parameters:**

Name | Type |
------ | ------ |
`num` | number |

**Returns:** *[BrowserCondition](README.md#browsercondition)*

### `Const` text

▸ **text**(`value`: string | number | RegExp): *[ElementCondition](README.md#elementcondition)*

*Defined in [lib/support/conditions/have.ts:29](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/conditions/have.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string &#124; number &#124; RegExp |

**Returns:** *[ElementCondition](README.md#elementcondition)*

### `Const` texts

▸ **texts**(...`texts`: string[]): *[CollectionCondition](README.md#collectioncondition)*

*Defined in [lib/support/conditions/have.ts:65](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/conditions/have.ts#L65)*

**Parameters:**

Name | Type |
------ | ------ |
`...texts` | string[] |

**Returns:** *[CollectionCondition](README.md#collectioncondition)*

### `Const` title

▸ **title**(`expected`: string): *[BrowserCondition](README.md#browsercondition)*

*Defined in [lib/support/conditions/have.ts:79](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/conditions/have.ts#L79)*

**Parameters:**

Name | Type |
------ | ------ |
`expected` | string |

**Returns:** *[BrowserCondition](README.md#browsercondition)*

### `Const` titleContaining

▸ **titleContaining**(`titlePart`: string): *[BrowserCondition](README.md#browsercondition)*

*Defined in [lib/support/conditions/have.ts:82](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/conditions/have.ts#L82)*

**Parameters:**

Name | Type |
------ | ------ |
`titlePart` | string |

**Returns:** *[BrowserCondition](README.md#browsercondition)*

### `Const` url

▸ **url**(`url`: string): *[BrowserCondition](README.md#browsercondition)*

*Defined in [lib/support/conditions/have.ts:71](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/conditions/have.ts#L71)*

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |

**Returns:** *[BrowserCondition](README.md#browsercondition)*

### `Const` urlContaining

▸ **urlContaining**(`urlPart`: string): *[BrowserCondition](README.md#browsercondition)*

*Defined in [lib/support/conditions/have.ts:76](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/conditions/have.ts#L76)*

**Parameters:**

Name | Type |
------ | ------ |
`urlPart` | string |

**Returns:** *[BrowserCondition](README.md#browsercondition)*

### `Const` value

▸ **value**(`value`: string | number): *[ElementCondition](README.md#elementcondition)*

*Defined in [lib/support/conditions/have.ts:42](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/conditions/have.ts#L42)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string &#124; number |

**Returns:** *[ElementCondition](README.md#elementcondition)*

### `Const` valueContaining

▸ **valueContaining**(`expected`: string | number): *[ElementCondition](README.md#elementcondition)*

*Defined in [lib/support/conditions/have.ts:45](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/conditions/have.ts#L45)*

**Parameters:**

Name | Type |
------ | ------ |
`expected` | string &#124; number |

**Returns:** *[ElementCondition](README.md#elementcondition)*

___

###  perform

• **perform**:

*Defined in [lib/support/commands/perform.ts:26](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/commands/perform.ts#L26)*

###  js

• **js**:

*Defined in [lib/support/commands/perform.ts:45](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/commands/perform.ts#L45)*

### `Const` click

▸ **click**(`element`: [Element](classes/element.md)): *Promise‹[Element](classes/element.md)‹››*

*Defined in [lib/support/commands/perform.ts:47](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/commands/perform.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`element` | [Element](classes/element.md) |

**Returns:** *Promise‹[Element](classes/element.md)‹››*

### `Const` clickWithOffset

▸ **clickWithOffset**(`xOffset`: number, `yOffset`: number): *(Anonymous function)*

*Defined in [lib/support/commands/perform.ts:49](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/commands/perform.ts#L49)*

**Parameters:**

Name | Type |
------ | ------ |
`xOffset` | number |
`yOffset` | number |

**Returns:** *(Anonymous function)*

### `Const` scrollIntoView

▸ **scrollIntoView**(`element`: [Element](classes/element.md)): *Promise‹[Element](classes/element.md)‹››*

*Defined in [lib/support/commands/perform.ts:58](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/commands/perform.ts#L58)*

**Parameters:**

Name | Type |
------ | ------ |
`element` | [Element](classes/element.md) |

**Returns:** *Promise‹[Element](classes/element.md)‹››*

### `Const` setValue

▸ **setValue**(`value`: string | number): *(Anonymous function)*

*Defined in [lib/support/commands/perform.ts:52](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/commands/perform.ts#L52)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string &#124; number |

**Returns:** *(Anonymous function)*

### `Const` type

▸ **type**(`keys`: string | number): *(Anonymous function)*

*Defined in [lib/support/commands/perform.ts:55](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/commands/perform.ts#L55)*

**Parameters:**

Name | Type |
------ | ------ |
`keys` | string &#124; number |

**Returns:** *(Anonymous function)*

### `Const` back

▸ **back**(`browser`: [Browser](classes/browser.md)): *Promise‹void›*

*Defined in [lib/support/commands/perform.ts:83](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/commands/perform.ts#L83)*

**Parameters:**

Name | Type |
------ | ------ |
`browser` | [Browser](classes/browser.md) |

**Returns:** *Promise‹void›*

### `Const` clear

▸ **clear**(`element`: [Element](classes/element.md)): *Promise‹[Element](classes/element.md)‹››*

*Defined in [lib/support/commands/perform.ts:35](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/commands/perform.ts#L35)*

**Parameters:**

Name | Type |
------ | ------ |
`element` | [Element](classes/element.md) |

**Returns:** *Promise‹[Element](classes/element.md)‹››*

### `Const` clearCookies

▸ **clearCookies**(`browser`: [Browser](classes/browser.md)): *Promise‹[Browser](classes/browser.md)‹››*

*Defined in [lib/support/commands/perform.ts:95](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/commands/perform.ts#L95)*

**Parameters:**

Name | Type |
------ | ------ |
`browser` | [Browser](classes/browser.md) |

**Returns:** *Promise‹[Browser](classes/browser.md)‹››*

### `Const` clearLocalStorage

▸ **clearLocalStorage**(`browser`: [Browser](classes/browser.md)): *Promise‹[Browser](classes/browser.md)‹››*

*Defined in [lib/support/commands/perform.ts:93](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/commands/perform.ts#L93)*

**Parameters:**

Name | Type |
------ | ------ |
`browser` | [Browser](classes/browser.md) |

**Returns:** *Promise‹[Browser](classes/browser.md)‹››*

### `Const` clearSessionStorage

▸ **clearSessionStorage**(`browser`: [Browser](classes/browser.md)): *Promise‹[Browser](classes/browser.md)‹››*

*Defined in [lib/support/commands/perform.ts:94](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/commands/perform.ts#L94)*

**Parameters:**

Name | Type |
------ | ------ |
`browser` | [Browser](classes/browser.md) |

**Returns:** *Promise‹[Browser](classes/browser.md)‹››*

### `Const` click

▸ **click**(`element`: [Element](classes/element.md)): *Promise‹[Element](classes/element.md)‹››*

*Defined in [lib/support/commands/perform.ts:30](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/commands/perform.ts#L30)*

**Parameters:**

Name | Type |
------ | ------ |
`element` | [Element](classes/element.md) |

**Returns:** *Promise‹[Element](classes/element.md)‹››*

### `Const` closeCurrentTab

▸ **closeCurrentTab**(`browser`: [Browser](classes/browser.md)): *Promise‹[Browser](classes/browser.md)‹››*

*Defined in [lib/support/commands/perform.ts:81](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/commands/perform.ts#L81)*

**Parameters:**

Name | Type |
------ | ------ |
`browser` | [Browser](classes/browser.md) |

**Returns:** *Promise‹[Browser](classes/browser.md)‹››*

### `Const` contextClick

▸ **contextClick**(`element`: [Element](classes/element.md)): *Promise‹[Element](classes/element.md)‹››*

*Defined in [lib/support/commands/perform.ts:32](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/commands/perform.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`element` | [Element](classes/element.md) |

**Returns:** *Promise‹[Element](classes/element.md)‹››*

### `Const` doubleClick

▸ **doubleClick**(`element`: [Element](classes/element.md)): *Promise‹[Element](classes/element.md)‹››*

*Defined in [lib/support/commands/perform.ts:31](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/commands/perform.ts#L31)*

**Parameters:**

Name | Type |
------ | ------ |
`element` | [Element](classes/element.md) |

**Returns:** *Promise‹[Element](classes/element.md)‹››*

### `Const` executeScript

▸ **executeScript**(`script`: string | function, ...`args`: any[]): *(Anonymous function)*

*Defined in [lib/support/commands/perform.ts:98](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/commands/perform.ts#L98)*

**Parameters:**

Name | Type |
------ | ------ |
`script` | string &#124; function |
`...args` | any[] |

**Returns:** *(Anonymous function)*

### `Const` forward

▸ **forward**(`browser`: [Browser](classes/browser.md)): *Promise‹void›*

*Defined in [lib/support/commands/perform.ts:84](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/commands/perform.ts#L84)*

**Parameters:**

Name | Type |
------ | ------ |
`browser` | [Browser](classes/browser.md) |

**Returns:** *Promise‹void›*

### `Const` goToNextTab

▸ **goToNextTab**(`browser`: [Browser](classes/browser.md)): *Promise‹[Browser](classes/browser.md)‹››*

*Defined in [lib/support/commands/perform.ts:86](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/commands/perform.ts#L86)*

**Parameters:**

Name | Type |
------ | ------ |
`browser` | [Browser](classes/browser.md) |

**Returns:** *Promise‹[Browser](classes/browser.md)‹››*

### `Const` goToPreviousTab

▸ **goToPreviousTab**(`browser`: [Browser](classes/browser.md)): *Promise‹[Browser](classes/browser.md)‹››*

*Defined in [lib/support/commands/perform.ts:87](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/commands/perform.ts#L87)*

**Parameters:**

Name | Type |
------ | ------ |
`browser` | [Browser](classes/browser.md) |

**Returns:** *Promise‹[Browser](classes/browser.md)‹››*

### `Const` goToTab

▸ **goToTab**(`indexOrId`: number | string): *(Anonymous function)*

*Defined in [lib/support/commands/perform.ts:88](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/commands/perform.ts#L88)*

**Parameters:**

Name | Type |
------ | ------ |
`indexOrId` | number &#124; string |

**Returns:** *(Anonymous function)*

### `Const` hover

▸ **hover**(`element`: [Element](classes/element.md)): *Promise‹[Element](classes/element.md)‹››*

*Defined in [lib/support/commands/perform.ts:33](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/commands/perform.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`element` | [Element](classes/element.md) |

**Returns:** *Promise‹[Element](classes/element.md)‹››*

### `Const` open

▸ **open**(`url`: string): *(Anonymous function)*

*Defined in [lib/support/commands/perform.ts:77](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/commands/perform.ts#L77)*

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |

**Returns:** *(Anonymous function)*

### `Const` pressEnter

▸ **pressEnter**(`element`: [Element](classes/element.md)): *Promise‹[Element](classes/element.md)‹››*

*Defined in [lib/support/commands/perform.ts:39](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/commands/perform.ts#L39)*

**Parameters:**

Name | Type |
------ | ------ |
`element` | [Element](classes/element.md) |

**Returns:** *Promise‹[Element](classes/element.md)‹››*

### `Const` pressEscape

▸ **pressEscape**(`element`: [Element](classes/element.md)): *Promise‹[Element](classes/element.md)‹››*

*Defined in [lib/support/commands/perform.ts:41](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/commands/perform.ts#L41)*

**Parameters:**

Name | Type |
------ | ------ |
`element` | [Element](classes/element.md) |

**Returns:** *Promise‹[Element](classes/element.md)‹››*

### `Const` pressTab

▸ **pressTab**(`element`: [Element](classes/element.md)): *Promise‹[Element](classes/element.md)‹››*

*Defined in [lib/support/commands/perform.ts:40](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/commands/perform.ts#L40)*

**Parameters:**

Name | Type |
------ | ------ |
`element` | [Element](classes/element.md) |

**Returns:** *Promise‹[Element](classes/element.md)‹››*

### `Const` quit

▸ **quit**(`browser`: [Browser](classes/browser.md)): *Promise‹void›*

*Defined in [lib/support/commands/perform.ts:82](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/commands/perform.ts#L82)*

**Parameters:**

Name | Type |
------ | ------ |
`browser` | [Browser](classes/browser.md) |

**Returns:** *Promise‹void›*

### `Const` refresh

▸ **refresh**(`browser`: [Browser](classes/browser.md)): *Promise‹void›*

*Defined in [lib/support/commands/perform.ts:85](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/commands/perform.ts#L85)*

**Parameters:**

Name | Type |
------ | ------ |
`browser` | [Browser](classes/browser.md) |

**Returns:** *Promise‹void›*

### `Const` resizeWindow

▸ **resizeWindow**(`width`: any, `height`: any): *(Anonymous function)*

*Defined in [lib/support/commands/perform.ts:78](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/commands/perform.ts#L78)*

**Parameters:**

Name | Type |
------ | ------ |
`width` | any |
`height` | any |

**Returns:** *(Anonymous function)*

### `Const` screenshot

▸ **screenshot**(`browser`: [Browser](classes/browser.md)): *Promise‹Buffer›*

*Defined in [lib/support/commands/perform.ts:80](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/commands/perform.ts#L80)*

**Parameters:**

Name | Type |
------ | ------ |
`browser` | [Browser](classes/browser.md) |

**Returns:** *Promise‹Buffer›*

### `Const` setValue

▸ **setValue**(`value`: string | number): *(Anonymous function)*

*Defined in [lib/support/commands/perform.ts:37](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/commands/perform.ts#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string &#124; number |

**Returns:** *(Anonymous function)*

### `Const` switchToDefaultFrame

▸ **switchToDefaultFrame**(`browser`: [Browser](classes/browser.md)): *Promise‹[Browser](classes/browser.md)‹››*

*Defined in [lib/support/commands/perform.ts:91](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/commands/perform.ts#L91)*

**Parameters:**

Name | Type |
------ | ------ |
`browser` | [Browser](classes/browser.md) |

**Returns:** *Promise‹[Browser](classes/browser.md)‹››*

### `Const` type

▸ **type**(`keys`: string | number): *(Anonymous function)*

*Defined in [lib/support/commands/perform.ts:36](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/commands/perform.ts#L36)*

**Parameters:**

Name | Type |
------ | ------ |
`keys` | string &#124; number |

**Returns:** *(Anonymous function)*

___

###  predicate

• **predicate**:

*Defined in [lib/utils/predicates.ts:16](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/utils/predicates.ts#L16)*

### `Const` equalsByContainsToArray

• **equalsByContainsToArray**: *(Anonymous function)* = arrayCompareBy(includes)

*Defined in [lib/utils/predicates.ts:32](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/utils/predicates.ts#L32)*

### `Const` equalsToArray

• **equalsToArray**: *(Anonymous function)* = arrayCompareBy(equals)

*Defined in [lib/utils/predicates.ts:31](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/utils/predicates.ts#L31)*

### `Const` arrayCompareBy

▸ **arrayCompareBy**(`f`: any): *(Anonymous function)*

*Defined in [lib/utils/predicates.ts:27](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/utils/predicates.ts#L27)*

**Parameters:**

Name | Type |
------ | ------ |
`f` | any |

**Returns:** *(Anonymous function)*

### `Const` equals

▸ **equals**<**V**>(`expected`: V): *(Anonymous function)*

*Defined in [lib/utils/predicates.ts:18](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/utils/predicates.ts#L18)*

**Type parameters:**

▪ **V**

**Parameters:**

Name | Type |
------ | ------ |
`expected` | V |

**Returns:** *(Anonymous function)*

### `Const` includes

▸ **includes**(`expected`: any): *(Anonymous function)*

*Defined in [lib/utils/predicates.ts:23](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/utils/predicates.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`expected` | any |

**Returns:** *(Anonymous function)*

### `Const` includesWord

▸ **includesWord**(`expected`: string): *(Anonymous function)*

*Defined in [lib/utils/predicates.ts:25](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/utils/predicates.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`expected` | string |

**Returns:** *(Anonymous function)*

### `Const` isGreaterThan

▸ **isGreaterThan**<**V**>(`expected`: V): *(Anonymous function)*

*Defined in [lib/utils/predicates.ts:19](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/utils/predicates.ts#L19)*

**Type parameters:**

▪ **V**

**Parameters:**

Name | Type |
------ | ------ |
`expected` | V |

**Returns:** *(Anonymous function)*

### `Const` isGreaterThanOrEqual

▸ **isGreaterThanOrEqual**<**V**>(`expected`: V): *(Anonymous function)*

*Defined in [lib/utils/predicates.ts:20](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/utils/predicates.ts#L20)*

**Type parameters:**

▪ **V**

**Parameters:**

Name | Type |
------ | ------ |
`expected` | V |

**Returns:** *(Anonymous function)*

### `Const` isLessThan

▸ **isLessThan**<**V**>(`expected`: V): *(Anonymous function)*

*Defined in [lib/utils/predicates.ts:21](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/utils/predicates.ts#L21)*

**Type parameters:**

▪ **V**

**Parameters:**

Name | Type |
------ | ------ |
`expected` | V |

**Returns:** *(Anonymous function)*

### `Const` isLessThanOrEqual

▸ **isLessThanOrEqual**<**V**>(`expected`: V): *(Anonymous function)*

*Defined in [lib/utils/predicates.ts:22](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/utils/predicates.ts#L22)*

**Type parameters:**

▪ **V**

**Parameters:**

Name | Type |
------ | ------ |
`expected` | V |

**Returns:** *(Anonymous function)*

### `Const` isTruthy

▸ **isTruthy**<**V**>(`actual`: V): *boolean*

*Defined in [lib/utils/predicates.ts:17](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/utils/predicates.ts#L17)*

**Type parameters:**

▪ **V**

**Parameters:**

Name | Type |
------ | ------ |
`actual` | V |

**Returns:** *boolean*

### `Const` matches

▸ **matches**(`expected`: any): *(Anonymous function)*

*Defined in [lib/utils/predicates.ts:24](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/utils/predicates.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`expected` | any |

**Returns:** *(Anonymous function)*

___

###  query

• **query**:

*Defined in [lib/queries.ts:48](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/queries.ts#L48)*

Raw queries on actual element's webelement
'Raw' means - without any waiting...

All are implemented through element.getWebElement()
e.g. element.getWebElement().getText over element.text()
because element.text() already has waiting built in.
this is needed, because these queries are used not only to build corresponding element methods
with waiting built in
but also for conditions...

Hence, these functions are not supposed to be used in "perform/get" context:
  `element.click().then(query.text)`
this query may fail if element was absent after click for some milliseconds...
use the following alternative instead:
  `element.click().then(get.text)`

Here, queries do not contain has* and is* queries, like hasText, or isVisible.
User can use has* and is* conditions instead. Example:
  `if (element.matches(has.text('foo'))) { ... }
We really don't need such has* or is* queries both here and built in the entity itself
(like element.isVisible), because their use case is very rare. The user will mainly use
steps (entity commands, like click) and assertions (entity should(condition)) in tests.
And SelenideJs is a tests tool, not something else.

### `Const` currentTab

• **currentTab**: *(Anonymous function)* = lambda('current tab (window handle)', async (browser: Browser) =>
        browser.driver.getWindowHandle())

*Defined in [lib/queries.ts:92](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/queries.ts#L92)*

### `Const` innerHtml

• **innerHtml**: *(Anonymous function)* = attribute('innerHTML')

*Defined in [lib/queries.ts:67](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/queries.ts#L67)*

### `Const` nextTab

• **nextTab**: *(Anonymous function)* = lambda('next tab (window handle)', async (browser: Browser) => {
        const currentTab = await browser.driver.getWindowHandle();
        const allTabs = await browser.driver.getAllWindowHandles();
        const currentTabIndex = allTabs.indexOf(currentTab);
        return currentTabIndex >= allTabs.length ? allTabs[0] : allTabs[currentTabIndex + 1];
    })

*Defined in [lib/queries.ts:98](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/queries.ts#L98)*

### `Const` outerHtml

• **outerHtml**: *(Anonymous function)* = attribute('outerHTML')

*Defined in [lib/queries.ts:69](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/queries.ts#L69)*

### `Const` pageSource

• **pageSource**: *(Anonymous function)* = lambda('page source', async (browser: Browser) =>
       browser.driver.getPageSource())

*Defined in [lib/queries.ts:118](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/queries.ts#L118)*

### `Const` previousTab

• **previousTab**: *(Anonymous function)* = lambda('previous tab (window handle)', async (browser: Browser) => {
        const currentTab = await browser.driver.getWindowHandle();
        const allTabs = await browser.driver.getAllWindowHandles();
        const currentTabIndex = allTabs.indexOf(currentTab);
        return currentTabIndex > 0 ? allTabs[currentTabIndex - 1] : allTabs[allTabs.length - 1];
    })

*Defined in [lib/queries.ts:105](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/queries.ts#L105)*

### `Const` size

• **size**: *(Anonymous function)* = lambda('size', async (collection: Collection) =>
        (await collection.getWebElements()).length)

*Defined in [lib/queries.ts:76](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/queries.ts#L76)*

### `Const` someText

• **someText**: *(Anonymous function)* = lambda('some nonempty visible text', async (element: Element) => {
        const text = await (await element.getWebElement()).getText();
        if (!text) {
            throw new Error('there is no visible nonempty text');
        }
        return text;
    })

*Defined in [lib/queries.ts:55](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/queries.ts#L55)*

### `Const` tabs

• **tabs**: *(Anonymous function)* = lambda('tabs (all window handles)', async (browser: Browser) =>
        browser.driver.getAllWindowHandles())

*Defined in [lib/queries.ts:112](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/queries.ts#L112)*

### `Const` tabsNumber

• **tabsNumber**: *(Anonymous function)* = lambda('tabs number', async (browser: Browser) =>
        (await browser.driver.getAllWindowHandles()).length)

*Defined in [lib/queries.ts:115](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/queries.ts#L115)*

### `Const` text

• **text**: *(Anonymous function)* = lambda('text', async (element: Element) =>
        (await element.getWebElement()).getText())

*Defined in [lib/queries.ts:52](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/queries.ts#L52)*

### `Const` texts

• **texts**: *(Anonymous function)* = lambda('texts', async (collection: Collection) => {
        const webelements = await collection.getWebElements();
        return Promise.all(webelements.map(webElement => webElement.getText()));
    })

*Defined in [lib/queries.ts:79](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/queries.ts#L79)*

### `Const` title

• **title**: *(Anonymous function)* = lambda('title', async (browser: Browser) =>
        browser.driver.getTitle())

*Defined in [lib/queries.ts:89](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/queries.ts#L89)*

### `Const` url

• **url**: *(Anonymous function)* = lambda('url', async (browser: Browser) =>
        browser.driver.getCurrentUrl())

*Defined in [lib/queries.ts:86](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/queries.ts#L86)*

### `Const` value

• **value**: *(Anonymous function)* = attribute('value')

*Defined in [lib/queries.ts:71](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/queries.ts#L71)*

### `Const` attribute

▸ **attribute**(`name`: string): *(Anonymous function)*

*Defined in [lib/queries.ts:63](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/queries.ts#L63)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *(Anonymous function)*

### `Const` tab

▸ **tab**(`index`: number): *(Anonymous function)*

*Defined in [lib/queries.ts:95](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/queries.ts#L95)*

**Parameters:**

Name | Type |
------ | ------ |
`index` | number |

**Returns:** *(Anonymous function)*

___

###  should

• **should**:

*Defined in [lib/support/asserts/should.ts:18](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/asserts/should.ts#L18)*

### `Const` match

▸ **match**<**T**>(`condition`: [Condition](classes/condition.md)‹T›): *(Anonymous function)*

*Defined in [lib/support/asserts/should.ts:20](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/asserts/should.ts#L20)*

**Type parameters:**

▪ **T**: *[Assertable](interfaces/assertable.md)*

**Parameters:**

Name | Type |
------ | ------ |
`condition` | [Condition](classes/condition.md)‹T› |

**Returns:** *(Anonymous function)*

## Type aliases

###  BrowserCondition

Ƭ **BrowserCondition**: *[Condition](classes/condition.md)‹[Browser](classes/browser.md)›*

*Defined in [lib/conditions.ts:27](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/conditions.ts#L27)*

___

###  CollectionCondition

Ƭ **CollectionCondition**: *[Condition](classes/condition.md)‹[Collection](classes/collection.md)›*

*Defined in [lib/conditions.ts:26](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/conditions.ts#L26)*

___

###  ElementCondition

Ƭ **ElementCondition**: *[Condition](classes/condition.md)‹[Element](classes/element.md)›*

*Defined in [lib/conditions.ts:25](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/conditions.ts#L25)*

___

###  Lambda

Ƭ **Lambda**: *function*

*Defined in [lib/wait.ts:24](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/wait.ts#L24)*

Just a type alias to one-argument-async-function...

#### Type declaration:

▸ (`entity`: T): *Promise‹R›*

**Parameters:**

Name | Type |
------ | ------ |
`entity` | T |

___

###  OnEntityFailureHook

Ƭ **OnEntityFailureHook**: *[OnFailureHook](README.md#onfailurehook)‹[Browser](classes/browser.md) | [Element](classes/element.md) | [Collection](classes/collection.md)›*

*Defined in [lib/configuration.ts:31](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/configuration.ts#L31)*

A one place to configure everything.
There is no separate Browser, Element or Collection configurations.
All corresponding options live here, in Configuration.*
It was implemented like this to stay KISS and simplify implementation.
Enjoy;)

___

###  OnFailureHook

Ƭ **OnFailureHook**: *function*

*Defined in [lib/wait.ts:198](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/wait.ts#L198)*

#### Type declaration:

▸ (`failure`: [Error](classes/conditionnotmatchederror.md#static-error), `entity`: T): *Promise‹void | [Error](classes/conditionnotmatchederror.md#static-error)›*

**Parameters:**

Name | Type |
------ | ------ |
`failure` | [Error](classes/conditionnotmatchederror.md#static-error) |
`entity` | T |

## Variables

###  isAbsoluteUrl

• **isAbsoluteUrl**: *[isAbsoluteUrl](README.md#isabsoluteurl)*

*Defined in [lib/browser.ts:26](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/browser.ts#L26)*

## Functions

###  lambda

▸ **lambda**<**F**>(`toString`: string, `fn`: F): *F*

*Defined in [lib/utils/index.ts:17](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/utils/index.ts#L17)*

**Type parameters:**

▪ **F**

**Parameters:**

Name | Type |
------ | ------ |
`toString` | string |
`fn` | F |

**Returns:** *F*

___

### `Const` toString

▸ **toString**<**O**>(`obj`: O): *string*

*Defined in [lib/utils/index.ts:22](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/utils/index.ts#L22)*

**Type parameters:**

▪ **O**

**Parameters:**

Name | Type |
------ | ------ |
`obj` | O |

**Returns:** *string*
