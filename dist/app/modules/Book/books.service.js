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
exports.BookService = void 0;
const config_1 = require("../../../config");
const createBook = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield config_1.prisma.book.create({
        data: req.body,
        select: {
            bookId: true,
            title: true,
            genre: true,
            publishedYear: true,
            totalCopies: true,
            availableCopies: true,
        }
    });
    return result;
});
const getAllFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield config_1.prisma.book.findMany({
        select: {
            bookId: true,
            title: true,
            genre: true,
            publishedYear: true,
            totalCopies: true,
            availableCopies: true,
        }
    });
    return result;
});
const getByIdFromDB = (bookId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = config_1.prisma.book.findUnique({
        where: { bookId },
        select: {
            bookId: true,
            title: true,
            genre: true,
            publishedYear: true,
            totalCopies: true,
            availableCopies: true,
        },
    });
    return result;
});
const updateBook = (bookId, data) => __awaiter(void 0, void 0, void 0, function* () {
    return config_1.prisma.book.update({
        where: { bookId },
        data,
        select: {
            bookId: true,
            title: true,
            genre: true,
            publishedYear: true,
            totalCopies: true,
            availableCopies: true,
        },
    });
});
const deleteBook = (bookId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield config_1.prisma.book.delete({
        where: { bookId },
    });
    return result;
});
exports.BookService = {
    createBook,
    getAllFromDB,
    getByIdFromDB,
    updateBook,
    deleteBook
};
