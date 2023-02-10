import { Role } from "@prisma/client";
import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { createShopDto, updateShopDto } from "../../../utils/validations";
import {
  adminProtectedProcedure,
  createTRPCRouter,
  publicProcedure,
} from "../trpc";

export const shopRouter = createTRPCRouter({
  getAllShops: publicProcedure.query(async ({ ctx }) => {
    const shops = await ctx.prisma.shop.findMany({
      include: {
        owner: {
          select: {
            id: true,
            firstName: true,
            middleName: true,
            lastName: true,
          },
        },
        branches: true,
      },
    });
    return shops;
  }),
  getShopById: publicProcedure
    .input(z.string().cuid())
    .query(async ({ input, ctx }) => {
      const shop = await ctx.prisma.shop.findUnique({
        where: { id: input },
        include: {
          owner: {
            select: {
              firstName: true,
              middleName: true,
              lastName: true,
            },
          },
          branches: true,
        },
      });
      return shop;
    }),
  createShop: publicProcedure
    .input(createShopDto)
    .mutation(async ({ input, ctx }) => {
      try {
        const res = await ctx.prisma.shop.create({
          data: {
            ...input,
            branches: {
              createMany: {
                data: input.branches,
              },
            },
          },
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
        const shop = await ctx.prisma.shop.findUnique({
          where: { id: input.id },
          include: {
            branches: true,
          },
        });

        if (!shop) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "Shop Not Found",
          });
        }

        const { branches, ...update } = shop;

        const res = await ctx.prisma.shop.update({
          where: {
            id: input.id,
          },
          data: {
            ...update,
            branches: {
              deleteMany: {
                shopId: input.id,
              },
              createMany: {
                data: branches,
              },
            },
          },
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
