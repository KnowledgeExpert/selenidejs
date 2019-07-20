[selenidejs](../README.md) > [be](../modules/be.md)

# Module: be

## Index

### Variables

* [absent](be.md#absent)
* [blank](be.md#blank)
* [disabled](be.md#disabled)
* [enabled](be.md#enabled)
* [focused](be.md#focused)
* [hidden](be.md#hidden)
* [not](be.md#not)
* [present](be.md#present)
* [selected](be.md#selected)
* [visible](be.md#visible)

---

## Variables

<a id="absent"></a>

### `<Const>` absent

**● absent**: *[ElementCondition](../#elementcondition)* =  condition.element.isAbsent

*Defined in [support/conditions/be.ts:24](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/conditions/be.ts#L24)*

___
<a id="blank"></a>

### `<Const>` blank

**● blank**: *[ElementCondition](../#elementcondition)* =  condition.element.isBlank

*Defined in [support/conditions/be.ts:38](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/conditions/be.ts#L38)*

___
<a id="disabled"></a>

### `<Const>` disabled

**● disabled**: *[ElementCondition](../#elementcondition)* =  condition.element.isDisabled

*Defined in [support/conditions/be.ts:36](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/conditions/be.ts#L36)*

___
<a id="enabled"></a>

### `<Const>` enabled

**● enabled**: *[ElementCondition](../#elementcondition)* =  condition.element.isEnabled

*Defined in [support/conditions/be.ts:34](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/conditions/be.ts#L34)*

___
<a id="focused"></a>

### `<Const>` focused

**● focused**: *[ElementCondition](../#elementcondition)* =  condition.element.isFocused

*Defined in [support/conditions/be.ts:32](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/conditions/be.ts#L32)*

___
<a id="hidden"></a>

### `<Const>` hidden

**● hidden**: *[ElementCondition](../#elementcondition)* =  condition.element.isHidden

*Defined in [support/conditions/be.ts:30](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/conditions/be.ts#L30)*

___
<a id="not"></a>

### `<Const>` not

**● not**: *[be](be.md)* =  new Proxy(be, { get: (be, conditionName) => Condition.not(be[conditionName]) })

*Defined in [support/conditions/be.ts:20](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/conditions/be.ts#L20)*

___
<a id="present"></a>

### `<Const>` present

**● present**: *[ElementCondition](../#elementcondition)* =  condition.element.isPresent

*Defined in [support/conditions/be.ts:26](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/conditions/be.ts#L26)*

___
<a id="selected"></a>

### `<Const>` selected

**● selected**: *[ElementCondition](../#elementcondition)* =  condition.element.isSelected

*Defined in [support/conditions/be.ts:22](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/conditions/be.ts#L22)*

___
<a id="visible"></a>

### `<Const>` visible

**● visible**: *[ElementCondition](../#elementcondition)* =  condition.element.isVisible

*Defined in [support/conditions/be.ts:28](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/support/conditions/be.ts#L28)*

___

