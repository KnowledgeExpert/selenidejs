import { Element } from './element';
export declare namespace command {
    namespace js {
        const clickWithOffset: (xOffset: number, yOffset: number) => (element: Element) => Promise<void>;
        const click: (element: Element) => Promise<void>;
        const setValue: (value: string | number) => (element: Element) => Promise<void>;
        const type: (keys: string | number) => (element: Element) => Promise<void>;
        const scrollIntoView: (element: any) => Promise<any>;
    }
}
