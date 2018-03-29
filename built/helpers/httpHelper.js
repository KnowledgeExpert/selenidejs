"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const https = require("https");
const http = require("http");
var HttpHelper;
(function (HttpHelper) {
    //TODO add element.download() method
    async function download(src, auth) {
        const url = auth ? getAuthSource(src, auth) : src;
        return await new Promise((resolve, reject) => {
            (src.startsWith('https') ? https.get : http.get)(url, (response) => {
                const rawData = [];
                response.on('data', chunk => rawData.push(chunk));
                response.on('end', () => resolve(Buffer.concat(rawData)));
            });
        });
    }
    HttpHelper.download = download;
    function getAuthSource(src, auth) {
        return src.substring(0, src.indexOf("://") + 3) + `${auth ? `${auth.username}:${auth.password}` : ``}@` + src.substring(src.indexOf("://") + 3);
    }
})(HttpHelper = exports.HttpHelper || (exports.HttpHelper = {}));
//# sourceMappingURL=httpHelper.js.map