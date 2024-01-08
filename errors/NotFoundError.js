"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CustomError_1 = __importDefault(require("./CustomError"));
class NotFoundError extends CustomError_1.default {
    constructor(message, code) {
        super(message, 'NotFoundError', code);
        this.name = 'NotFoundError';
        this.message = message;
        this.code = code;
    }
}
exports.default = NotFoundError;
