
import { Request } from "express";
import { prisma } from "../../../config";

const createBorrow = async ( req: Request) => {
  const { bookId, memberId } = req.body;
  await prisma.book.findUniqueOrThrow({
    where: {
      bookId
    }
  });
  await prisma.member.findUniqueOrThrow({
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

const getOverDueFromDB = async () => {
  const currentDate = new Date();
  const overDueDate = new Date();
  overDueDate.setDate(currentDate.getDate() - 14);
  const overdueBorrows = await prisma.borrow.findMany({
    where: {
      borrowDate: {
        lte: overDueDate,
      },
    },
    include: {
      book: true, 
      member: true, 
    },
  });

  const data = overdueBorrows.map(borrow => ({
    borrowId: borrow.borrowId,
    bookTitle: borrow.book.title, 
    borrowerName: borrow.member.name, 
    overdueDays: Math.floor(
      (new Date().getTime() - new Date(borrow.borrowDate).getTime()) / (1000 * 60 * 60 * 24) - 14
    ), 
  }));

  return data; 
};

const updateBorrow = async () => {

}

const deleteBorrow = async () =>{

}

export const BorrowService = {
  createBorrow,
  getAllFromDB,
  getOverDueFromDB,
  updateBorrow,
  deleteBorrow
}