"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandler = void 0;
const globalErrorHandler = (err, req, res, next) => {
    res.status(500).send({
        handler: 'GLOBAL_ERROR_HANDLER',
        code: 0,
        name: err.name,
        message: err.message || 'Something failed!',
    });
};
exports.globalErrorHandler = globalErrorHandler;
