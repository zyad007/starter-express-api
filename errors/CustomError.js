"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CustomError extends Error {
    constructor(message, name, code) {
        super(message);
        this.name = name;
        this.message = message;
        this.code = code;
    }
}
exports.default = CustomError;
