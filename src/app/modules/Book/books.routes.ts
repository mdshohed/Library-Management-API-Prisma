import express, { NextFunction, Request, Response } from 'express';
import { BookController } from './books.controller';

const router = express.Router();

router.post('/', BookController.createBook);
router.get('/', BookController.getAllFromDB);
router.get('/:id', BookController.getByIdFromDB);
router.put('/', BookController.updateBook);
router.delete('/', BookController.deleteBook);

export const BookRoutes = router;