import { z } from "zod";

export const IdDto = z.object({
  id: z.string({ required_error: "ID is required" }).cuid(),
});

export const baseUserDto = z.object({
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
  alternateNumber: z.string().optional(),
  password: z
    .string({ required_error: "Password name is required." })
    .min(6, "Password should be six character or more"),
  nationality: z.string({ required_error: "Nationality is required" }).min(1),
  image: z.string({ required_error: "Password name is required." }).optional(),
  role: z.enum(["ADMIN", "SHOP_OWNER", "USER"], {
    required_error: "Role is required",
    invalid_type_error:
      "Invalid role value. Expect 'ADMIN' | 'SHOP_OWNER' | 'USER'",
  }),
});

export const updateUserDto = baseUserDto
  .extend({
    id: z.string({ required_error: "ID is required" }).cuid(),
  })
  .partial();

export const createAdminDto = baseUserDto.extend({
  cardType: z.enum(["ghana_card", "student_id", "voters_id"]),
  cardNumber: z
    .string({ required_error: "Card number is required" })
    .min(1, "Card number cannot be empty"),
  level: z.enum(["level_one", "level_two", "level_three", "super_user"]),
  role: z.enum(["ADMIN", "SHOP_OWNER", "USER"], {
    required_error: "Role is required",
    invalid_type_error:
      "Invalid role value. Expect 'ADMIN' | 'SHOP_OWNER' | 'USER'",
  }),
});

export const updateAdminDto = createAdminDto.extend({
  id: z.string({ required_error: "ID is required" }).cuid(),
});

export const createShopOwnerDto = baseUserDto
  .extend({
    confirmPassword: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .optional(),
  })
  .refine((val) => val?.password === val?.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export const updateShopOwnerDto = baseUserDto.extend({
  id: z.string({ required_error: "ID is required." }).cuid(),
});

export const createShopDto = z.object({
  ownerId: z
    .string({ required_error: "Shop Owner Id is required" })
    .cuid("Enter valid ID"),
  name: z
    .string({ required_error: "Shop name is required" })
    .min(1, "Shop name cannot be empty"),
  location: z
    .string({ required_error: "Location is required" })
    .min(1, "Location cannot be empty"),
  address: z.string(),
  phoneNumber: z
    .string({ required_error: "Phone number is required" })
    .length(10, "Phone number must be 10 characters"),
  description: z.string(),
  openingTime: z.string(),
  closingTime: z.string(),
  facebookHandle: z.string().optional(),
  instagramHandle: z.string().optional(),
  whatsappNumber: z.string().optional(),
  branches: z.array(
    z.object({
      location: z.string({ required_error: "Location is required." }).min(1),
      address: z
        .string({ required_error: "Location is required." })
        .min(1)
        .optional(),
      phoneNumber: z.string({ required_error: "Location is required." }).min(1),
    })
  ),
});

export const updateShopDto = createShopDto.extend({
  id: z.string({ required_error: "" }).cuid(),
  branches: z.array(
    z.object({
      id: z.string({ required_error: "" }).cuid().optional(),
      shopId: z
        .string({ required_error: "Shop Owner Id is required" })
        .cuid("Enter valid ID")
        .optional(),
      location: z.string({ required_error: "Location is required." }).min(1),
      address: z
        .string({ required_error: "Location is required." })
        .min(1)
        .optional(),
      phoneNumber: z.string({ required_error: "Location is required." }).min(1),
    })
  ),
});

export const createProductDto = z.object({
  title: z
    .string({ required_error: "Product name is required" })
    .min(1, "Product name cannot be empty"),
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
  category: z.enum([
    "food",
    "fashion_and_wears",
    "grocery_and_general",
    "health_and_wellness",
    "home_and_electrical_appliances",
    "personal_services",
    "printing_and_stationery",
    "tech",
  ]),
  ratings: z
    .number()
    .min(1, "Minimum rating should be 1")
    .max(5, "Maximum rating should be 5")
    .optional(),
  images: z.array(
    z.object({
      public_id: z.string(),
      secure_url: z.string(),
    })
  ),
  selectedImages: z.array(z.string()).default([]),
});

export const updateProductDto = createProductDto.partial();

export const loginDto = z.object({
  email: z.string({ required_error: "Email is required" }).email(),
  password: z
    .string({ required_error: "Password is required" })
    .max(6, "Password should be six character or more"),
});
