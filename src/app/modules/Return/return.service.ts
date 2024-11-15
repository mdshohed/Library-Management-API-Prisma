
import { Request } from "express";
import { prisma } from "../../../config";

const returnBook = async (req: Request) => {
  const { borrowId } = req.body;
  const borrowInfo = await prisma.borrow.findUniqueOrThrow({
    where: {
      borrowId
    }
  });
  const result = await prisma.borrow.update({
    where: {
      borrowId
    },
    data: {
      returnDate: new Date()
    }
  });
  return result;
};

const getAllFromDB = async () => {

};

const getByIdFromDB = async () => {

};

const updateReturn = async () => {

}

const deleteReturn = async () =>{

}

export const ReturnService = {
  returnBook,
  getAllFromDB,
  getByIdFromDB,
  updateReturn,
  deleteReturn
}