import {Element} from './element';
import {Collection} from './collection';
import {ProtractorBrowser} from 'protractor';
import {ElementCondition} from '../conditions/elementCondition';
import {CollectionCondition} from '../conditions/collectionCondition';
import {BrowserCondition} from '../conditions/browserCondition';
import {Utils} from '../utils';


export function AssertionHooks(target, methodName, descriptor: PropertyDescriptor) {
	const originalMethod = descriptor.value;

	descriptor.value = async function () {
        const beforeHooks = Utils.getSelenidejsParam(`beforeAssertionHooks`) || [];
        const afterHooks = Utils.getSelenidejsParam(`afterAssertionHooks`) || [];
        const conditionDescription = arguments[0].toString();
		let err;
		try {
			await safeApplyActionHooks(beforeHooks, this, conditionDescription);
			return await originalMethod.apply(this, arguments);
		} catch (error) {
			err = error;
			throw error;
		} finally {
			await safeApplyActionHooks(afterHooks, this, conditionDescription, err);
		}
	}
}

type AssertionHook = ((entity: Element | Collection, conditionDescription: string, err?: Error) => void | Promise<void>);

async function safeApplyActionHooks(hooks: AssertionHook[], entity: Element | Collection, conditionDescription: string, err?: Error) {
	for (let hook of hooks) {
		try {
            await hook(entity, conditionDescription, err);
		} catch (error) {
		}
	}
}
