"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const books_routes_1 = require("../modules/Book/books.routes");
const members_routes_1 = require("../modules/Member/members.routes");
const borrow_routes_1 = require("../modules/Borrow/borrow.routes");
const return_routes_1 = require("../modules/Return/return.routes");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/books',
        route: books_routes_1.BookRoutes
    },
    {
        path: '/members',
        route: members_routes_1.MemberRoutes
    },
    {
        path: '/borrow',
        route: borrow_routes_1.BorrowRoutes
    },
    {
        path: '/return',
        route: return_routes_1.ReturnRoutes
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
