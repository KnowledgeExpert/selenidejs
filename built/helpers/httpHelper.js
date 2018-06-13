"use strict";
// Copyright 2018 Knowledge Expert SA
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//     You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
//     Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
//     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//     See the License for the specific language governing permissions and
// limitations under the License.
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