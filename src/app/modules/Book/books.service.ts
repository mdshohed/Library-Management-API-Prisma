
import { Request } from "express";
import { prisma } from "../../../config";
import { Book } from "@prisma/client";

const createBook = async (req: Request) => {
  const result = await prisma.book.create({ 
    data: req.body as Book, 
    select: { 
      bookId: true,
      title: true, 
      genre: true,
      publishedYear: true,
      totalCopies: true,
      availableCopies: true,
    }
  });
  return result;
};

const getAllFromDB = async () => {
  const result = await prisma.book.findMany({
    select: { 
      bookId: true,
      title: true, 
      genre: true,
      publishedYear: true,
      totalCopies: true,
      availableCopies: true,
    }
  });
  return result;
};

const getByIdFromDB = async ( bookId: string ) => {
  const result =  prisma.book.findUnique({
    where: { bookId },
    select: { 
      bookId: true,
      title: true, 
      genre: true,
      publishedYear: true,
      totalCopies: true,
      availableCopies: true,
    },
  });
  return result; 
};

const updateBook = async (bookId: string, data: Partial<Book>) => {
  return prisma.book.update({
    where: { bookId },
    data,
    select: { 
      bookId: true,
      title: true, 
      genre: true,
      publishedYear: true,
      totalCopies: true,
      availableCopies: true,
    },
  });
}

const deleteBook = async ( bookId: string ) =>{
  const result = await prisma.book.delete({
    where: { bookId },
  });
  return result; 
}

export const BookService = {
  createBook,
  getAllFromDB,
  getByIdFromDB,
  updateBook,
  deleteBook
}