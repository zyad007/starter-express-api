"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gradeErrorHanlder = void 0;
const gradeErrorHanlder = (err, req, res, next) => {
    res.status(500).send({
        handler: 'GRADES_HANDLER',
        code: err.code,
        name: err.name,
        message: err.message || 'Something failed!',
    });
};
exports.gradeErrorHanlder = gradeErrorHanlder;
