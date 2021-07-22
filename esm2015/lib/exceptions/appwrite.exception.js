export class AppwriteException extends Error {
    constructor(message, code = 0, response = '') {
        super(message);
        this.name = 'AppwriteException';
        this.message = message;
        this.code = code;
        this.response = response;
    }
}
//# sourceMappingURL=appwrite.exception.js.map