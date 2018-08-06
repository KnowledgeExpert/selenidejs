import {Browser} from "../../lib/index";
import {TestUtils} from "./testUtils";
import {When} from "./when";


export namespace Given {

    export async function openedEmptyPage() {
        await Browser.get(TestUtils.resourcesUrl() + 'empty.html');
    }

    export async function openedEmptyPageWithBody(html: string) {
        await Browser.get(TestUtils.resourcesUrl() + 'empty.html');
        await When.withBody(html);
    }

}