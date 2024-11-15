import { Request, RequestHandler, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { ReturnService } from "./return.service";

const returnBorrow = catchAsync(async (req: Request, res: Response) => {
    const result = await ReturnService.createReturn();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Borrow Created successfully!",
        data: result
    })
});

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
    const result = await ReturnService.getAllFromDB()
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Borrow data fetched!",
        data: result
    })
});

const getByIdFromDB = catchAsync(async (req: Request, res: Response) => {
    const result = await ReturnService.getByIdFromDB();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Borrow data fetched!",
        data: result
    })
});

const updateBorrow = catchAsync(async (req: Request, res: Response) => {

    const result = await ReturnService.updateReturn();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Borrow updated!",
        data: result
    })
});

const deleteBorrow = catchAsync(async (req: Request, res: Response) => {
    const result = await ReturnService.deleteReturn();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Borrow deleted!",
        data: result
    })
});

export const ReturnController = {
  returnBorrow,
  getAllFromDB,
  getByIdFromDB,
  updateBorrow,
  deleteBorrow
}