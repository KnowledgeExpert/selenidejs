import { Browser } from '../../lib';
import { Gherkin } from '../utils/gherkin';
export declare let browser: Browser;
export declare let GIVEN: Gherkin;
export declare let WHEN: Gherkin;
export declare namespace data.timeouts {
    const smallerThanDefault = 500;
    const byDefault = 750;
    const biggerThanDefault = 1000;
}
