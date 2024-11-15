import { Request, RequestHandler, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { MemberService } from "./members.service";

const createMember = catchAsync(async (req: Request, res: Response) => {
    const result = await MemberService.createMember(req);
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "Member created successfully",
        data: result
    })
});

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
    const result = await MemberService.getAllFromDB()
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Members retrieved successfully",
        data: result
    })
});

const getByIdFromDB = catchAsync(async (req: Request, res: Response) => {
    const {id} = req.params; 
    const result = await MemberService.getByIdFromDB( id );

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Member retrieved successfully",
        data: result
    })
});

const updateMember = catchAsync(async (req: Request, res: Response) => {
    const {id} = req.params;
    const result = await MemberService.updateMember( id, req.body );
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Member updated successfully",
        data: result
    })
});

const deleteMember = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params; 
    const result = await MemberService.deleteMember( id );
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Member successfully deleted",
    })
});

export const MemberController = {
  createMember,
  getAllFromDB,
  getByIdFromDB,
  updateMember,
  deleteMember
}