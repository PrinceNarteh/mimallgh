import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";
import {
  adminCreateProductDto,
  adminUpdateProductDto,
  IdDto,
} from "../../../utils/validations";
import { TRPCError } from "@trpc/server";
import { cloudinary } from "../../../utils/cloudinary";
import { mapStringToCategory } from "../../../utils/mapper";

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
            category: mapStringToCategory[data.category]!,
            images: {
              createMany: {
                data: imagesBuffer,
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
      let imagesBuffer: {
        public_id: string;
        secure_url: string;
      }[] = [];
      if (input.selectedImages.length > 0) {
        let images = [...input.selectedImages];

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
      }

      const { selectedImages, images, ...data } = input;

      const oldImages = images.map((image) => ({
        public_id: image.public_id,
        secure_url: image.secure_url,
      }));

      const newImages = oldImages.concat(imagesBuffer);

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
                data: newImages,
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
