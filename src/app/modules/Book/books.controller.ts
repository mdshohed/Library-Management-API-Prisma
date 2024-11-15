import { Request, RequestHandler, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { BookService } from "./books.service";

const createBook = catchAsync(async (req: Request, res: Response) => {
    const result = await BookService.createBook();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Book Created successfully!",
        data: result
    })
});

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
    const result = await BookService.getAllFromDB()
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Book data fetched!",
        data: result
    })
});

const getByIdFromDB = catchAsync(async (req: Request, res: Response) => {

    const result = await BookService.getByIdFromDB();

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Book data fetched!",
        data: result
    })
});

const updateBook = catchAsync(async (req: Request, res: Response) => {
    const result = await BookService.updateBook();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Book updated!",
        data: result
    })
});

const deleteBook = catchAsync(async (req: Request, res: Response) => {
    const result = await BookService.deleteBook();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Book deleted!",
      data: result
    })
});

export const BookController = {
  createBook,
  getAllFromDB,
  getByIdFromDB,
  updateBook,
  deleteBook
}