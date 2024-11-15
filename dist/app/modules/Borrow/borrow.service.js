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
exports.BorrowService = void 0;
const config_1 = require("../../../config");
const createBorrow = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const { bookId, memberId } = req.body;
    yield config_1.prisma.book.findUniqueOrThrow({
        where: {
            bookId
        }
    });
    yield config_1.prisma.member.findUniqueOrThrow({
        where: {
            memberId
        }
    });
    const result = yield config_1.prisma.borrow.create({
        data: {
            bookId,
            memberId,
        },
        select: {
            borrowId: true,
            bookId: true,
            memberId: true,
            borrowDate: true,
        },
    });
    return result;
});
const getAllFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield config_1.prisma.borrow.findMany();
    return result;
});
const getOverDueFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const currentDate = new Date();
    const overDueDate = new Date();
    overDueDate.setDate(currentDate.getDate() - 14);
    const overdueBorrows = yield config_1.prisma.borrow.findMany({
        where: {
            borrowDate: {
                lte: overDueDate,
            },
        },
        include: {
            book: true,
            member: true,
        },
    });
    const data = overdueBorrows.map(borrow => ({
        borrowId: borrow.borrowId,
        bookTitle: borrow.book.title,
        borrowerName: borrow.member.name,
        overdueDays: Math.floor((new Date().getTime() - new Date(borrow.borrowDate).getTime()) / (1000 * 60 * 60 * 24) - 14),
    }));
    return data;
});
const updateBorrow = () => __awaiter(void 0, void 0, void 0, function* () {
});
const deleteBorrow = () => __awaiter(void 0, void 0, void 0, function* () {
});
exports.BorrowService = {
    createBorrow,
    getAllFromDB,
    getOverDueFromDB,
    updateBorrow,
    deleteBorrow
};
