import { Role } from "@prisma/client";
import { TRPCError } from "@trpc/server";
import { createUserDto } from "../../../utils/validations";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const authRouter = createTRPCRouter({
  register: publicProcedure
    .input(createUserDto)
    .mutation(async ({ input, ctx }) => {
      try {
        const user = await ctx.prisma.user.create({
          data: {
            ...input,
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
});
