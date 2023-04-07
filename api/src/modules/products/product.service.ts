import { Product } from "@prisma/client";
import { db } from "../../utils/db.server";
import { mapStringToCategory } from "../../utils/mapper";

export const getProducts = async (): Promise<Product[]> => {
  return db.product.findMany({
    include: {
      Image: true,
      Shop: true,
    },
  });
};

export const getProductById = async (id: string): Promise<Product | null> => {
  return db.product.findUnique({
    where: {
      id,
    },
    include: {
      Image: true,
      Shop: true,
    },
  });
};

export const getByCategory = async (category: string): Promise<Product[]> => {
  return db.product.findMany({
    where: {
      category: mapStringToCategory[category],
    },
  });
};
