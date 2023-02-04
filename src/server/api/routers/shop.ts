import { Role } from "@prisma/client";
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
});
