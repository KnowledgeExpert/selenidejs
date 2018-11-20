export interface Locator<T> {
    find(): T | Promise<T>;
}
