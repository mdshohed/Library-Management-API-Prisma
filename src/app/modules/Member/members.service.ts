
import { Request } from "express";
import { prisma } from "../../../config";
import { Member } from "@prisma/client";

const createMember = async (req: Request) => {
  const result = await prisma.member.create({ 
    data: req.body as Member, 
    select: { 
      memberId: true,
      name: true,
      email: true,
      phone: true,
      membershipDate: true
    }
  });
  return result;
};

const getAllFromDB = async () => {
  const result = await prisma.member.findMany({
    select: { 
      memberId: true,
      name: true,
      email: true,
      phone: true,
      membershipDate: true
    }
  });
  return result;
};

const getByIdFromDB = async ( memberId: string ) => {
  const result =  prisma.member.findUnique({
    where: { memberId },
    select: { 
      memberId: true,
      name: true,
      email: true,
      phone: true,
      membershipDate: true
    },
  });
  return result; 
};

const updateMember = async ( memberId: string, data: Partial<Member>) => {
  return prisma.member.update({
    where: { memberId },
    data,
    select: {
      memberId: true, 
      name: true,
      email: true,
      phone: true
    },
  });
}

const deleteMember = async ( memberId: string ) =>{
  const result = await prisma.member.delete({
    where: { memberId },
  });
  return result; 
}

export const MemberService = {
  createMember,
  getAllFromDB,
  getByIdFromDB,
  updateMember,
  deleteMember
}