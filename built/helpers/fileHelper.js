"use strict";
// Copyright 2018 Knowledge Expert SA
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
var FileHelper;
(function (FileHelper) {
    function buildFolders(path) {
        const folders = path.split('/');
        let lastFolder = folders[0];
        for (let i = 1; i < folders.length - 1; i++) {
            lastFolder = lastFolder + '/' + folders[i];
            if (!(fs.existsSync(lastFolder))) {
                fs.mkdirSync(lastFolder);
            }
        }
    }
    FileHelper.buildFolders = buildFolders;
})(FileHelper = exports.FileHelper || (exports.FileHelper = {}));
//# sourceMappingURL=fileHelper.js.map