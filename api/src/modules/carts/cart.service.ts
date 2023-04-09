import type { Cart } from "@prisma/client";
import { db } from "../../utils/db.server";

export const getAllCarts = async () => {
  return db.cart.findMany();
};

export const getCart = async (id: string) => {
  return db.cart.findUnique({
    where: { id },
  });
};

export const getByUserId = async (id: string) => {
  return db.cart.findFirst({
    where: {
      userId: id,
    },
  });
};

export const createCart = async (data: Cart) => {
  return db.cart.create({
    data,
  });
};

export const updateCart = async (id: string, data: Cart) => {
  return db.cart.update({
    where: { id },
    data,
  });
};

export const deleteCart = async (id: string) => {
  return db.cart.delete({
    where: { id },
  });
};
