import {browser} from 'protractor';
import {Condition} from "./conditions/condition";


export namespace Wait {

    //todo: refactor default waits and check below for better implementation of default timeout usage
    export let DEFAULT_WAIT_MS = 4000;
    export let DEFAULT_HARD_WAIT_MS = 2000;

    export async function hard(intervalInMilliseconds = DEFAULT_HARD_WAIT_MS) {
        await browser.driver.sleep(intervalInMilliseconds);
    }

    export async function shouldMatch<T>(entity: T, condition: Condition<T>, timeout = null): Promise<T> {
        if (timeout == null) {
            timeout = browser.params.timeout.toWaitElementsInMs;
        }
        return await until(entity, condition, true, timeout);
    }

    export async function isMatch<T>(entity: T, condition: Condition<T>, timeout = null): Promise<boolean> {
        if (timeout == null) {
            timeout = browser.params.timeout.toWaitElementsInMs;
        }
        return !!await until(entity, condition, false, timeout);
    }

    async function until<T>(entity: T, condition: Condition<T>, throwError: boolean, timeout: number): Promise<T> {
        const finishTime = new Date().getTime() + timeout;
        let lastError;
        do {
            try {
                return await condition.matches(entity);
            } catch (error) {
                lastError = error;
            }
        } while (new Date().getTime() < finishTime);

        if (throwError) {
            // await attachScreenshot(lastError.message); // TODO remove or refactor to just save screenshot?
            lastError.message = `${entity.toString()}\n\tshould ${lastError.message}\n\tWait timed out after ${timeout}ms`;
            throw lastError;
        }
        return null;
    }

}
