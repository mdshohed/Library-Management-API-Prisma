import express, { NextFunction, Request, Response } from 'express';
import { ReturnController } from './return.controller';

const router = express.Router();

router.post('/', ReturnController.returnBorrow);

export const ReturnRoutes = router;