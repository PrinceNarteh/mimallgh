import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const productsRouter = createTRPCRouter({
  getAllProducts: publicProcedure.query(async ({ ctx }) => {
    const products = await ctx.prisma.product.findMany();
  }),
});
