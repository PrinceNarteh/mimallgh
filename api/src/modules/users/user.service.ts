import type { User } from "@prisma/client";
import { db } from "../../utils/db.server";

export const getUserById = async (id: string): Promise<User | null> => {
  return db.user.findUnique({
    where: {
      id,
    },
  });
};

export const getUserByEmail = async (email: string) => {
  return db.user.findFirst({
    where: {
      email,
    },
  });
};

export const getUserByPhoneNumber = async (phoneNumber: string) => {
  return db.user.findFirst({
    where: {
      phoneNumber,
    },
  });
};

export const getUserByEmailOrPhoneNumber = async (
  emailOrPhoneNumber: string
) => {
  return db.user.findFirst({
    where: {
      OR: [
        {
          email: emailOrPhoneNumber,
        },
        {
          phoneNumber: emailOrPhoneNumber,
        },
      ],
    },
  });
};

export const createUser = async (input: User) => {
  return db.user.create({
    data: input,
  });
};

export const editUser = async (id: string, input: User) => {
  return db.user.update({
    where: {
      id,
    },
    data: input,
  });
};

export const deleteUser = async (id: string, input: User) => {
  return db.user.delete({
    where: {
      id,
    },
  });
};
