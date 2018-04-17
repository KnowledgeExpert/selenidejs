import {browser} from 'protractor';
import {Condition} from "./conditions/condition";


export namespace Wait {

    const DEFAULT_WAIT_MS = 4000;
    const DEFAULT_HARD_WAIT_MS = 2000;

    export const WAIT_MS = getValueFromPath(browser, `params.timeouts.toWaitElementsInMs`) || DEFAULT_WAIT_MS;
    export const HARD_WAIT_MS = getValueFromPath(browser, `params.timeouts.toHardWaitInMs`) || DEFAULT_HARD_WAIT_MS;

    export async function hard(intervalInMilliseconds = HARD_WAIT_MS) {
        await browser.driver.sleep(intervalInMilliseconds);
    }

    export async function shouldMatch<T>(entity: T, condition: Condition<T>, timeout = WAIT_MS): Promise<T> {
        return await until(entity, condition, true, timeout);
    }

    export async function isMatch<T>(entity: T, condition: Condition<T>, timeout = WAIT_MS): Promise<boolean> {
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

    function getValueFromPath(obj: any, dotSeparatedPath: string): any {
        if (obj === undefined) return undefined;
        const parts = dotSeparatedPath.split('.');
        return parts.length === 1 ? obj[parts[0]] : getValueFromPath(obj[parts[0]], parts.slice(1).reduce((f, s) => `${f} ${s}`));
    }

}
