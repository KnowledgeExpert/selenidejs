import * as https from "https";
import * as http from "http";

export namespace HttpHelper {

    //TODO add element.download() method
    export async function download(src: string, auth?: { username: string, password: string }): Promise<Buffer> {
        const url = auth ? getAuthSource(src, auth) : src;
        return await new Promise<Buffer>((resolve, reject) => {
            (src.startsWith('https') ? https.get : http.get)(url, (response) => {
                const rawData = [];
                response.on('data', chunk => rawData.push(chunk));
                response.on('end', () => resolve(Buffer.concat(rawData)));
            });
        });
    }

    function getAuthSource(src: string, auth: { username: string, password: string }) {
        return src.substring(0, src.indexOf("://") + 3) + `${auth ? `${auth.username}:${auth.password}` : ``}@` + src.substring(src.indexOf("://") + 3);
    }
}