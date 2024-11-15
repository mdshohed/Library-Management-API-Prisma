import { Request, RequestHandler, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { MemberService } from "./members.service";

const createMember = catchAsync(async (req: Request, res: Response) => {
    const result = await MemberService.createMember();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Member Created successfully!",
        data: result
    })
});

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
    // console.log(req.query)


    const result = await MemberService.getAllFromDB()

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Member data fetched!",
        data: result
    })
});

const getByIdFromDB = catchAsync(async (req: Request , res: Response) => {

    const result = await MemberService.getByIdFromDB();

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Member data fetched!",
        data: result
    })
});

const updateMember = catchAsync(async (req: Request, res: Response) => {

    const result = await MemberService.updateMember();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Member updated!",
        data: result
    })
});

const deleteMember = catchAsync(async (req: Request, res: Response) => {

    const result = await MemberService.deleteMember();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Member deleted!",
        data: result
    })
});

export const MemberController = {
  createMember,
  getAllFromDB,
  getByIdFromDB,
  updateMember,
  deleteMember
}