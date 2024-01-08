"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteGrade = exports.getGrades = exports.addGrade = void 0;
const NotFoundError_1 = __importDefault(require("../errors/NotFoundError"));
const addGrade = (req, res) => {
    const name = req.body.name;
    console.log(req.body);
    console.log('Added grade with name: ' + name);
    res.status(201).send({ message: 'added grade successfully' });
};
exports.addGrade = addGrade;
const getGrades = (req, res) => {
    if (1 === 1) {
        throw new NotFoundError_1.default('Error GET grades', 1);
    }
    res.status(200).send([
        { name: "Zyad" },
        { name: "Anazz" }
    ]);
};
exports.getGrades = getGrades;
const deleteGrade = (req, res) => {
    console.log(req.params.id);
    res.status(200).send({ message: 'deleted succesfully' });
};
exports.deleteGrade = deleteGrade;
