import { User_role, Product_category, User_level } from "@prisma/client";

export const mapRoleEnumToString: Record<User_role, string> = {
  [User_role.ADMIN]: "admin",
  [User_role.USER]: "user",
  [User_role.SHOP_OWNER]: "shop_owner",
};

export const mapRoleStringToEnum: Record<string, User_role> = {
  admin: User_role.ADMIN,
  user: User_role.USER,
  shop_owner: User_role.SHOP_OWNER,
};

export const mapStringToLevel: Record<string, User_level> = {
  level_one: User_level.LEVEL_ONE,
  level_two: User_level.LEVEL_TWO,
  level_three: User_level.LEVEL_THREE,
  super_user: User_level.SUPER_USER,
};

export const mapCategoryToString: Record<Product_category, string> = {
  [Product_category.FOOD]: "food",
  [Product_category.FASHION_AND_WEARS]: "fashion_and_wears",
  [Product_category.GROCERY_AND_GENERAL]: "grocery_and_general",
  [Product_category.HEALTH_AND_WELLNESS]: "health_and_wellness",
  [Product_category.HOME_AND_ELECTRICAL_APPLIANCES]:
    "home_and_electrical_appliances",
  [Product_category.PERSONAL_SERVICES]: "personal_services",
  [Product_category.PRINTING_AND_STATIONERY]: "printing_and_stationery",
  [Product_category.TECH]: "tech",
};

export const mapStringToCategory: Record<string, Product_category> = {
  food: Product_category.FOOD,
  fashion_and_wears: Product_category.FASHION_AND_WEARS,
  grocery_and_general: Product_category.GROCERY_AND_GENERAL,
  health_and_wellness: Product_category.HEALTH_AND_WELLNESS,
  home_and_electrical_appliances:
    Product_category.HOME_AND_ELECTRICAL_APPLIANCES,
  personal_services: Product_category.PERSONAL_SERVICES,
  printing_and_stationery: Product_category.PRINTING_AND_STATIONERY,
  tech: Product_category.TECH,
};
