import express from 'express';
import { BookRoutes } from '../modules/Book/books.routes';
import { MemberRoutes } from '../modules/Member/members.routes';
import { BorrowRoutes } from '../modules/Borrow/borrow.routes';
import { ReturnRoutes } from '../modules/Return/return.routes';


const router = express.Router();

const moduleRoutes = [
    {
        path: '/books',
        route: BookRoutes
    },
    {
        path: '/members',
        route: MemberRoutes
    },
    {
        path: '/borrow',
        route: BorrowRoutes
    },
    {
        path: '/return',
        route: ReturnRoutes
    },
];

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router;