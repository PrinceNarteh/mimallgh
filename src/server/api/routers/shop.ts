import { Role } from "@prisma/client";
import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { addShopDto, updateShopDto } from "../../../utils/validations";
import {
  adminProtectedProcedure,
  createTRPCRouter,
  publicProcedure,
} from "../trpc";

export const shopRouter = createTRPCRouter({
  getAllShop: adminProtectedProcedure.query(async ({ ctx }) => {
    const shops = await ctx.prisma.shop.findMany();
    return shops;
  }),
  getAllShopOwners: publicProcedure.query(async ({ ctx }) => {
    const shopOwners = await ctx.prisma.user.findMany({
      where: {
        role: Role.SHOP_OWNER,
      },
    });
    return shopOwners;
  }),
  createShop: publicProcedure
    .input(addShopDto)
    .mutation(async ({ input, ctx }) => {
      try {
        const res = await ctx.prisma.shop.create({
          data: input,
        });
        return res;
      } catch (error) {
        return new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Something went wrong",
        });
      }
    }),
  updateShop: publicProcedure
    .input(updateShopDto)
    .mutation(async ({ input, ctx }) => {
      try {
        const res = await ctx.prisma.shop.update({
          where: {
            id: input.id,
          },
          data: input,
        });
        return res;
      } catch (error) {
        return new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Something went wrong",
        });
      }
    }),
  deleteShop: publicProcedure
    .input(z.string().cuid())
    .mutation(async ({ input, ctx }) => {
      try {
        await ctx.prisma.shop.delete({
          where: {
            id: input,
          },
        });
      } catch (error) {}
    }),
});
