"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRoutes = void 0;
const express_1 = __importDefault(require("express"));
const books_controller_1 = require("./books.controller");
const router = express_1.default.Router();
router.post('/', books_controller_1.BookController.createBook);
router.get('/', books_controller_1.BookController.getAllFromDB);
router.get('/:id', books_controller_1.BookController.getByIdFromDB);
router.put('/:id', books_controller_1.BookController.updateBook);
router.delete('/:id', books_controller_1.BookController.deleteBook);
exports.BookRoutes = router;
