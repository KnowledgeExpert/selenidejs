import { Element } from '../../element';
/**
 * to be used in the following context:
 *   `element.click().then(get.text)`
 */
export declare namespace get {
    const text: (element: Element) => Promise<string>;
}
