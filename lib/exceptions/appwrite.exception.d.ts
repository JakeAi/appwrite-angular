export declare class AppwriteException extends Error {
    code: number;
    response: string;
    constructor(message: string, code?: number, response?: string);
}
