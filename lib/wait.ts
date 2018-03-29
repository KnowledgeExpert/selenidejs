import {browser} from 'protractor';
import {Condition} from "./conditions/condition";


export namespace Wait {

    export async function hard(intervalInMilliseconds = browser.params.timeout.toHardWaitInMs) {
        await browser.driver.sleep(intervalInMilliseconds);
    }

    export async function shouldMatch<T>(entity: T, condition: Condition<T>, timeout = browser.params.timeout.toWaitElementsInMs): Promise<T> {
        return await until(entity, condition, true, timeout);
    }

    export async function isMatch<T>(entity: T, condition: Condition<T>, timeout = browser.params.timeout.toWaitElementsInMs): Promise<boolean> {
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
