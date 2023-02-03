import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";
import { createProductDto } from "../../../utils/validations";

export const productsRouter = createTRPCRouter({
  getAllProducts: publicProcedure.query(async ({ ctx }) => {
    const products = await ctx.prisma.product.findMany();
    return products;
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
});
