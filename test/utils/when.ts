import { Browser } from '../../lib/index';


export namespace When {

    export async function withBody(html: string) {
        await Browser.executeScript(`document.getElementsByTagName("body")[0].innerHTML=\`${html.replace('\n', '')}\`;`);
    }

    export async function withBodyTimedOut(html: string, timeout: number) {
        await withBody(`setTimeout(_ => {${withBody(html)}}, ${timeout})`);
    }

}
