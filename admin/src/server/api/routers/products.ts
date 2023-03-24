import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";
import { createProductDto, IdDto } from "../../../utils/validations";
import { TRPCError } from "@trpc/server";
import { cloudinary } from "../../../utils/cloudinary";
import { mapStringToCategory } from "../../../utils/mapper";

export const productsRouter = createTRPCRouter({
  getAllProducts: publicProcedure.query(async ({ ctx }) => {
    const products = await ctx.prisma.product.findMany();
    return products;
  }),
  createProduct: publicProcedure
    .input(createProductDto)
    .mutation(async ({ input, ctx }) => {
      let images = [...input.selectedImages];
      let imagesBuffer = [];

      for (let i = 0; i < images.length; i++) {
        const result = await cloudinary.uploader.upload(images[i] as string, {
          folder: "mimall",
          width: 1920,
          crop: "scale",
        });

        imagesBuffer.push({
          public_id: result.public_id,
          secure_url: result.secure_url,
        });
      }

      const { selectedImages, ...data } = input;

      try {
        const product = ctx.prisma.product.create({
          data: {
            ...data,
            category: mapStringToCategory[input.category]!,
            images: {
              createMany: {
                data: imagesBuffer,
              },
            },
            shopId: ctx.session?.user.id || "",
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
