import {ProtractorBrowser} from 'protractor';
import {Condition} from './condition';

export class BrowserCondition extends Condition<ProtractorBrowser> {
    readonly matches: (entity: ProtractorBrowser) => Promise<ProtractorBrowser>;
}