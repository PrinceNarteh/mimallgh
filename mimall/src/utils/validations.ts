import { z } from "zod";

export const IdDto = z.object({
  id: z.string({ required_error: "ID is required" }).cuid(),
});

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
    "health-and-wellness",
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
  address: z.string().optional(),
  phoneNumber: z
    .string({ required_error: "Phone number is required." })
    .length(10, "Phone number must be ten numbers"),
  alternateNumber: z.string().optional(),
  password: z
    .string({ required_error: "Password name is required." })
    .min(6, "Password should be six character or more"),
  nationality: z.string().default(""),
  image: z.string({ required_error: "Password name is required." }).optional(),
  role: z.enum(["ADMIN", "SHOP_OWNER", "USER"], {
    required_error: "Role is required",
    invalid_type_error:
      "Invalid role value. Expect 'ADMIN' | 'SHOP_OWNER' | 'USER'",
  }),
});

export const updateUserDto = createUserDto.extend({
  id: z.string({ required_error: "ID is required." }).cuid(),
});

// export const createShopOwnerDto = createUserDto
//   .extend({
//     confirmPassword: z
//       .string({ required_error: "Confirm password name is required." })
//       .min(6, "Password must be at least 6 characters"),
//   })
//   .optional()
//   .refine((val) => val?.password === val?.confirmPassword, {
//     message: "Passwords don't match",
//     path: ["confirmPassword"],
//   });

export const createAdminDto = createUserDto.extend({
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

const validateCardType = (cartType: string) => {
  switch (cartType) {
    case "ghana_card":
      return /GHA-[0-9]{9}-[0-9]/gi;
      break;
    case "student_id":
      return /[A-Z]{2}\/[A-Z]{3}\/[0-9]{2}\/[0-9]{4}/gi;
    case "voters_id":
      return /[0-9]{10}/g;
    default:
      break;
  }
};

const placeHolder = (cartType: string) => {
  switch (cartType) {
    case "ghana_card":
      return "GHA-123456789-0";
    case "student_id":
      return "ED/ACT/23/0123";
    case "voters_id":
      return "8393001234";
    default:
      return "";
      break;
  }
};
