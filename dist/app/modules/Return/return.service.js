"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnService = void 0;
const config_1 = require("../../../config");
const returnBook = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const { borrowId } = req.body;
    const borrowInfo = yield config_1.prisma.borrow.findUniqueOrThrow({
        where: {
            borrowId
        }
    });
    const result = yield config_1.prisma.borrow.update({
        where: {
            borrowId
        },
        data: {
            returnDate: new Date()
        }
    });
    return result;
});
const getAllFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
});
const getByIdFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
});
const updateReturn = () => __awaiter(void 0, void 0, void 0, function* () {
});
const deleteReturn = () => __awaiter(void 0, void 0, void 0, function* () {
});
exports.ReturnService = {
    returnBook,
    getAllFromDB,
    getByIdFromDB,
    updateReturn,
    deleteReturn
};
