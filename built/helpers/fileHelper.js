"use strict";
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