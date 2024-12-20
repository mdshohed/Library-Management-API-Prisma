import { Request, RequestHandler, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { BorrowService } from "./borrow.service";

const createBorrow = catchAsync(async (req: Request, res: Response) => {
    const result = await BorrowService.createBorrow(req);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Book borrowed successfully",
        data: result
    })
});

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
    const result = await BorrowService.getAllFromDB()
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Borrow data fetched!",
        data: result
    })
});

const getOverDueFromDB = catchAsync(async (req: Request, res: Response) => {
    const result = await BorrowService.getOverDueFromDB();
    
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: result.length ?  "Overdue borrow list fetched" : "No overdue books",
        data: result
    })
});

const updateBorrow = catchAsync(async (req: Request, res: Response) => {

    const result = await BorrowService.updateBorrow();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Borrow updated!",
        data: result
    })
});

const deleteBorrow = catchAsync(async (req: Request, res: Response) => {
    const result = await BorrowService.deleteBorrow();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Borrow deleted!",
        data: result
    })
});

export const BorrowController = {
  createBorrow,
  getAllFromDB,
  getOverDueFromDB,
  updateBorrow,
  deleteBorrow
}