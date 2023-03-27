import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";
import { createProductDto, IdDto } from "../../../utils/validations";
import { TRPCError } from "@trpc/server";

export const productsRouter = createTRPCRouter({
  getAllProducts: publicProcedure.query(async ({ ctx }) => {
    const products = await ctx.prisma.product.findMany();
    return products;
  }),
  getProductById: publicProcedure.input(IdDto).query(async ({ input, ctx }) => {
    const product = await ctx.prisma.product.findUnique({
      where: { id: input.id },
      include: {
        shop: true,
      },
    });
    return product;
  }),
  createProduct: protectedProcedure
    .input(createProductDto)
    .mutation(async ({ input, ctx }) => {
      // try {
      //   const product = ctx.prisma.product.create({
      //     data: {
      //       ...input,
      //       // shopId: ctx.session.user,
      //     },
      //   });
      // } catch (error) {}
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
