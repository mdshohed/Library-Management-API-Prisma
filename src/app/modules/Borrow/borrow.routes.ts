import express, { NextFunction, Request, Response } from 'express';
import { BorrowController } from './borrow.controller';

const router = express.Router();

router.post('/', BorrowController.createBorrow );
router.get('/', BorrowController.getAllFromDB );
router.get('/overdue', BorrowController.getOverDueFromDB );

export const BorrowRoutes = router;