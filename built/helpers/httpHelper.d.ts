/// <reference types="node" />
export declare namespace HttpHelper {
    function download(src: string, auth?: {
        username: string;
        password: string;
    }): Promise<Buffer>;
}
