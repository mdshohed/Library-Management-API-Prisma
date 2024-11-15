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
exports.MemberService = void 0;
const config_1 = require("../../../config");
const createMember = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield config_1.prisma.member.create({
        data: req.body,
        select: {
            memberId: true,
            name: true,
            email: true,
            phone: true,
            membershipDate: true
        }
    });
    return result;
});
const getAllFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield config_1.prisma.member.findMany({
        select: {
            memberId: true,
            name: true,
            email: true,
            phone: true,
            membershipDate: true
        }
    });
    return result;
});
const getByIdFromDB = (memberId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = config_1.prisma.member.findUnique({
        where: { memberId },
        select: {
            memberId: true,
            name: true,
            email: true,
            phone: true,
            membershipDate: true
        },
    });
    return result;
});
const updateMember = (memberId, data) => __awaiter(void 0, void 0, void 0, function* () {
    return config_1.prisma.member.update({
        where: { memberId },
        data,
        select: {
            memberId: true,
            name: true,
            email: true,
            phone: true
        },
    });
});
const deleteMember = (memberId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield config_1.prisma.member.delete({
        where: { memberId },
    });
    return result;
});
exports.MemberService = {
    createMember,
    getAllFromDB,
    getByIdFromDB,
    updateMember,
    deleteMember
};
