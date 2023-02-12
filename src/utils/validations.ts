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
  category: z.enum([
    "accommodations_and_building",
    "fashion_and_wears",
    "food",
    "furniture",
    "grocery_and_general",
    "health_and_wellness",
    "home_and_electricals",
    "money_and_energy",
    "personal-care_and_beauty",
    "recreation",
    "stationery_and_printing",
    "tech",
    "transport_and_machines",
  ]),
  ratings: z
    .number()
    .min(1, "Minimum rating should be 1")
    .max(5, "Maximum rating should be 5")
    .optional(),
  images: z.string().url().optional(),
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

export const updateUserDto = createUserDto
  .extend({
    id: z.string({ required_error: "ID is required." }).cuid(),
  })
  .optional();

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

export type IUpdateShop = z.infer<typeof updateShopDto>;
