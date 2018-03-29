import * as fs from 'fs';

export namespace FileHelper {
    export function buildFolders(path: string): void {
        const folders: string[] = path.split("/");
        let lastFolder = folders[0];
        for (let i = 1; i < folders.length - 1; i++) {
            lastFolder = lastFolder + "/" + folders[i];
            if (!(fs.existsSync(lastFolder))) {
                fs.mkdirSync(lastFolder);
            }
        }
    }
}