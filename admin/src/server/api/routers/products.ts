import { TRPCError } from "@trpc/server";
import { mapStringToCategory } from "../../../utils/mapper";
import {
  adminCreateProductDto,
  adminUpdateProductDto,
  IdDto,
} from "../../../utils/validations";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const productsRouter = createTRPCRouter({
  getAllProducts: publicProcedure.query(async ({ ctx }) => {
    const products = await ctx.prisma.product.findMany({
      include: {
        images: true,
      },
    });
    return products;
  }),
  getProductById: publicProcedure.input(IdDto).query(async ({ input, ctx }) => {
    const product = await ctx.prisma.product.findUnique({
      where: {
        id: input.id,
      },
      include: {
        shop: true,
        images: true,
      },
    });
    return product;
  }),
  createProduct: publicProcedure
    .input(adminCreateProductDto)
    .mutation(async ({ input, ctx }) => {
      try {
        const product = ctx.prisma.product.create({
          data: {
            ...input,
            category: mapStringToCategory[input.category]!,
            images: {
              createMany: {
                data: input.images,
              },
            },
          },
        });
        return product;
      } catch (error) {}
    }),
  updateProduct: publicProcedure
    .input(adminUpdateProductDto)
    .mutation(async ({ input, ctx }) => {
      const { images, ...data } = input;

      try {
        const product = ctx.prisma.product.update({
          where: {
            id: input.id,
          },
          data: {
            ...data,
            category: mapStringToCategory[data.category]!,
            images: {
              deleteMany: {
                productId: input.id,
              },
              createMany: {
                data: input.images,
              },
            },
          },
        });
        return product;
      } catch (error) {}
    }),
  deleteProduct: publicProcedure
    .input(IdDto)
    .mutation(async ({ input, ctx }) => {
      try {
        await ctx.prisma.product.delete({
          where: {
            id: input.id,
          },
        });
      } catch (error: any) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Something went wrong",
        });
      }
    }),
});
