import { ProtractorBrowser } from "protractor";
import { Condition } from "./condition";
export declare class BrowserCondition extends Condition<ProtractorBrowser> {
    readonly matches: (entity: ProtractorBrowser) => Promise<ProtractorBrowser>;
}
