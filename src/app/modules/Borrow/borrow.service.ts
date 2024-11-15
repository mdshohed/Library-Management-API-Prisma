
import { Request } from "express";
import { prisma } from "../../../config";

const createBorrow = async ( req: Request) => {
  const { bookId, memberId } = req.body;
  console.log(req.body);
  const bookInfo = await prisma.book.findUniqueOrThrow({
    where: {
      bookId
    }
  });
  const memberInfo = await prisma.member.findUniqueOrThrow({
    where: {
      memberId
    }
  });
  const result = await prisma.borrow.create({
    data: {
      bookId,
      memberId,
    },
    select: {
      borrowId: true,
      bookId: true,
      memberId: true,
      borrowDate: true,
    },
  });
  return result;
}

const getAllFromDB = async () => {
  const result = await prisma.borrow.findMany();
  return result;
};

const getByIdFromDB = async () => {
   
};

const updateBorrow = async () => {

}

const deleteBorrow = async () =>{

}

export const BorrowService = {
  createBorrow,
  getAllFromDB,
  getByIdFromDB,
  updateBorrow,
  deleteBorrow
}