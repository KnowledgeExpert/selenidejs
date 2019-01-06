export declare namespace When {
    function withBody(html: string): Promise<void>;
    function withBodyTimedOut(html: string, timeout: number): Promise<void>;
}
