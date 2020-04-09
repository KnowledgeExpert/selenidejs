[selenidejs](../README.md) › [FailedToMatchConditionWithReasonError](failedtomatchconditionwithreasonerror.md)

# Class: FailedToMatchConditionWithReasonError

## Hierarchy

  ↳ [ConditionNotMatchedError](conditionnotmatchederror.md)

  ↳ **FailedToMatchConditionWithReasonError**

## Index

### Constructors

* [constructor](failedtomatchconditionwithreasonerror.md#constructor)

### Properties

* [message](failedtomatchconditionwithreasonerror.md#message)
* [name](failedtomatchconditionwithreasonerror.md#name)
* [stack](failedtomatchconditionwithreasonerror.md#optional-stack)

## Constructors

###  constructor

\+ **new FailedToMatchConditionWithReasonError**(`expected`: string, `reason`: [Error](conditionnotmatchederror.md#static-error)): *[FailedToMatchConditionWithReasonError](failedtomatchconditionwithreasonerror.md)*

*Overrides [ConditionNotMatchedError](conditionnotmatchederror.md).[constructor](conditionnotmatchederror.md#constructor)*

*Defined in [lib/errors/conditionDoesNotMatchError.ts:23](https://github.com/knowledgeexpert/selenidejs/blob/master/lib/errors/conditionDoesNotMatchError.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`expected` | string |
`reason` | [Error](conditionnotmatchederror.md#static-error) |

**Returns:** *[FailedToMatchConditionWithReasonError](failedtomatchconditionwithreasonerror.md)*

## Properties

###  message

• **message**: *string*

*Inherited from [ConditionNotMatchedError](conditionnotmatchederror.md).[message](conditionnotmatchederror.md#message)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:974

___

###  name

• **name**: *string*

*Inherited from [ConditionNotMatchedError](conditionnotmatchederror.md).[name](conditionnotmatchederror.md#name)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:973

___

### `Optional` stack

• **stack**? : *string*

*Inherited from [ConditionNotMatchedError](conditionnotmatchederror.md).[stack](conditionnotmatchederror.md#optional-stack)*

Defined in node_modules/typescript/lib/lib.es5.d.ts:975
