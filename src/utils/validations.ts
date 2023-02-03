import { z } from "zod";

export const createProductDto = z.object({
  title: z.string(),
  description: z
    .string({ required_error: "Description is required" })
    .min(2, "Description should be 2 or more characters"),
  price: z
    .number({ required_error: "Price is required" })
    .gte(0, "Price cannot be negative"),
  discountPercentage: z.number().gte(0, "Price cannot be negative").optional(),
  stock: z
    .number({ required_error: "Stock is required" })
    .gte(0, "Price cannot be negative"),
  brand: z
    .string({ required_error: "Brand is required" })
    .min(2, "Brand should be 2 or more characters"),
  category: z
    .string({ required_error: "Category is required" })
    .min(2, "Category should be 2 or more characters"),
  ratings: z
    .number()
    .min(1, "Minimum rating should be 1")
    .max(5, "Maximum rating should be 5")
    .optional(),
  images: z.string().url(),
});

export const updateProductDto = createProductDto.partial();

export const createUserDto = z.object({
  firstName: z
    .string({ required_error: "First name is required." })
    .min(1, "First name cannot be empty"),
  lastName: z
    .string({ required_error: "Last name is required." })
    .min(1, "Last name cannot be empty"),
  middleName: z.string().optional(),
  email: z.string({ required_error: "Email name is required." }).email(),
  address: z
    .string({ required_error: "Address is required." })
    .min(1, "Address cannot be empty"),
  phoneNumber: z
    .string({ required_error: "Phone number is required." })
    .length(10, "Phone number must be ten numbers"),
  password: z
    .string({ required_error: "Password name is required." })
    .min(6, "Password should be six character or more"),
  image: z.string({ required_error: "Password name is required." }).optional(),
  role: z.enum(["admin", "shop_owner", "user"], {
    required_error: "Role is required",
    invalid_type_error:
      "Invalid role value. Expect 'admin' | 'shop_owner' | 'user'",
  }),
});

export const createShopOwnerDto = createUserDto
  .extend({
    confirmPassword: z
      .string({ required_error: "Confirm password name is required." })
      .min(6, "Password must be at least 6 characters"),
    role: z
      .enum(["admin", "shop_owner", "user"], {
        required_error: "Role is required",
        invalid_type_error:
          "Invalid role value. Expect 'admin' | 'shop_owner' | 'user'",
      })
      .default("shop_owner"),
  })
  .refine((val) => val.password === val.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export const loginDto = z.object({
  email: z.string({ required_error: "Email is required" }).email(),
  password: z
    .string({ required_error: "Password is required" })
    .max(6, "Password should be six character or more"),
});
