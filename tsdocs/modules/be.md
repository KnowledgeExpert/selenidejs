> **[selenidejs](../README.md)**

[be](be.md) /

# Module: be

## Index

### Variables

* [absent](be.md#const-absent)
* [blank](be.md#const-blank)
* [disabled](be.md#const-disabled)
* [enabled](be.md#const-enabled)
* [focused](be.md#const-focused)
* [hidden](be.md#const-hidden)
* [not](be.md#const-not)
* [present](be.md#const-present)
* [selected](be.md#const-selected)
* [visible](be.md#const-visible)

## Variables

### `Const` absent

• **absent**: *[ElementCondition](../README.md#elementcondition)* =  condition.element.isAbsent

*Defined in [support/conditions/be.ts:24](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/be.ts#L24)*

___

### `Const` blank

• **blank**: *[ElementCondition](../README.md#elementcondition)* =  condition.element.isBlank

*Defined in [support/conditions/be.ts:38](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/be.ts#L38)*

___

### `Const` disabled

• **disabled**: *[ElementCondition](../README.md#elementcondition)* =  condition.element.isDisabled

*Defined in [support/conditions/be.ts:36](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/be.ts#L36)*

___

### `Const` enabled

• **enabled**: *[ElementCondition](../README.md#elementcondition)* =  condition.element.isEnabled

*Defined in [support/conditions/be.ts:34](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/be.ts#L34)*

___

### `Const` focused

• **focused**: *[ElementCondition](../README.md#elementcondition)* =  condition.element.isFocused

*Defined in [support/conditions/be.ts:32](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/be.ts#L32)*

___

### `Const` hidden

• **hidden**: *[ElementCondition](../README.md#elementcondition)* =  condition.element.isHidden

*Defined in [support/conditions/be.ts:30](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/be.ts#L30)*

___

### `Const` not

• **not**: *[be](be.md)* =  new Proxy(be, { get: (be, conditionName) => Condition.not(be[conditionName]) })

*Defined in [support/conditions/be.ts:20](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/be.ts#L20)*

___

### `Const` present

• **present**: *[ElementCondition](../README.md#elementcondition)* =  condition.element.isPresent

*Defined in [support/conditions/be.ts:26](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/be.ts#L26)*

___

### `Const` selected

• **selected**: *[ElementCondition](../README.md#elementcondition)* =  condition.element.isSelected

*Defined in [support/conditions/be.ts:22](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/be.ts#L22)*

___

### `Const` visible

• **visible**: *[ElementCondition](../README.md#elementcondition)* =  condition.element.isVisible

*Defined in [support/conditions/be.ts:28](https://github.com/KnowledgeExpert/selenidejs/blob/master/lib/support/conditions/be.ts#L28)*