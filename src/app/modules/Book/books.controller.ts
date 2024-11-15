import { Request, RequestHandler, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { BookService } from "./books.service";

const createBook = catchAsync(async (req: Request, res: Response) => {
    const result = await BookService.createBook(req);
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "Book created successfully",
        data: result
    })
});

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
    const result = await BookService.getAllFromDB()
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Books retrieved successfully",
        data: result
    })
});

const getByIdFromDB = catchAsync(async (req: Request, res: Response) => {
    const {id} = req.params; 
    const result = await BookService.getByIdFromDB( id );

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Book retrieved successfully",
        data: result
    })
});

const updateBook = catchAsync(async (req: Request, res: Response) => {
    const {id} = req.params;
    const result = await BookService.updateBook( id, req.body );
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Book updated successfully",
        data: result
    })
});

const deleteBook = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params; 
    const result = await BookService.deleteBook( id );
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Book successfully deleted",
    })
});

export const BookController = {
  createBook,
  getAllFromDB,
  getByIdFromDB,
  updateBook,
  deleteBook
}