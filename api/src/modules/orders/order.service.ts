import { Cart } from "@prisma/client";
import { db } from "../../utils/db.server";

export const getAllOrders = async () => {
  return db.order.findMany({
    include: {
      items: true,
    },
  });
};

export const getOrder = async (id: string) => {
  return db.order.findUnique({
    where: { id },
  });
};

export const getOrdersByUser = async (userId: string) => {
  return db.order.findMany({
    where: {
      userId,
    },
  });
};

export const getOrderByUser = async (userId: string) => {
  return db.order.findFirst({
    where: {
      userId,
    },
  });
};

export const createCart = async (data: Cart) => {
  return db.cart.create({
    data,
  });
};

export const updateCart = async (id: string, data: Cart) => {
  return db.order.update({
    where: {
      id,
    },
    data,
  });
};

export const deleteCart = async (id: string) => {
  return db.order.delete({
    where: {
      id,
    },
  });
};
