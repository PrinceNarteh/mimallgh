import { Role } from "@prisma/client";
import { TRPCError } from "@trpc/server";
import bcrypt from "bcryptjs";
import { z } from "zod";
import {
  createAdminDto,
  createUserDto,
  updateAdminDto,
} from "../../../utils/validations";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { mapRoleStringToEnum, mapStringToLevel } from "../../../utils/mapper";

export const authRouter = createTRPCRouter({
  register: publicProcedure
    .input(createUserDto)
    .mutation(async ({ input, ctx }) => {
      try {
        const hashedPassword = await bcrypt.hash(input.password, 12);
        const user = await ctx.prisma.user.create({
          data: {
            ...input,
            password: hashedPassword,
            role: Role.SHOP_OWNER,
          },
        });
        return user;
      } catch (error: any) {
        if (error.message.includes("User_email_key")) {
          throw new TRPCError({
            code: "CONFLICT",
            message: "Email already in used.",
          });
        }
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Something went wrong",
        });
      }
    }),
  getUserById: publicProcedure
    .input(
      z.object({ id: z.string({ required_error: "ID is required" }).cuid() })
    )
    .query(async ({ input, ctx }) => {
      const user = await ctx.prisma.user.findUnique({
        where: {
          id: input.id,
        },
      });
      return user;
    }),
  getUsersByRole: publicProcedure
    .input(
      z.object({
        role: z.enum(["admin", "user", "shop_owner"], {
          required_error: "Role is required.",
        }),
      })
    )
    .query(async ({ input, ctx }) => {
      try {
        const users = await ctx.prisma.user.findMany({
          where: {
            role: mapRoleStringToEnum[input.role],
          },
        });
        return users;
      } catch (error) {}
    }),
  getAllShopOwners: publicProcedure.query(async ({ ctx }) => {
    const shopOwners = await ctx.prisma.user.findMany({
      where: {
        role: Role.SHOP_OWNER,
      },
      include: {
        shop: {
          select: {
            name: true,
          },
        },
      },
    });
    return shopOwners;
  }),
  getShopOwnerBy: publicProcedure
    .input(
      z.object({ id: z.string({ required_error: "ID is required" }).cuid() })
    )
    .query(async ({ input, ctx }) => {
      const shopOwners = await ctx.prisma.user.findUnique({
        where: {
          id: input.id,
        },
        include: {
          shop: {
            select: {
              name: true,
            },
          },
        },
      });
      return shopOwners;
    }),
  createAdmin: publicProcedure
    .input(createAdminDto)
    .mutation(async ({ input, ctx }) => {
      try {
        const hashedPassword = await bcrypt.hash(input.password, 12);
        const admin = await ctx.prisma.user.create({
          data: {
            ...input,
            password: hashedPassword,
            role: Role.ADMIN,
            level: mapStringToLevel[input.level],
          },
        });
        return admin;
      } catch (error: any) {
        if (error.message.includes("User_email_key")) {
          throw new TRPCError({
            code: "CONFLICT",
            message: "Email already in used.",
          });
        }
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Something went wrong",
        });
      }
    }),
  updateAdmin: publicProcedure
    .input(updateAdminDto)
    .mutation(async ({ input, ctx }) => {
      try {
        let admin = await ctx.prisma.user.findUnique({
          where: {
            id: input.id,
          },
        });

        if (!admin) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "User not found",
          });
        }

        console.log(input);

        admin = await ctx.prisma.user.update({
          where: {
            id: input.id,
          },
          data: {
            ...input,
            role: mapRoleStringToEnum[input.role],
            level: mapStringToLevel[input.level],
          },
        });
        return admin;
      } catch (error: any) {
        if (error.message.includes("User_email_key")) {
          throw new TRPCError({
            code: "CONFLICT",
            message: "Email already in used.",
          });
        }
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Something went wrong",
        });
      }
    }),
});
