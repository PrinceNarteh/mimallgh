import { Role, Category, Level } from "@prisma/client";

export const mapRoleEnumToString: Record<Role, string> = {
  [Role.ADMIN]: "admin",
  [Role.USER]: "user",
  [Role.SHOP_OWNER]: "shop_owner",
};

export const mapRoleStringToEnum: Record<string, Role> = {
  admin: Role.ADMIN,
  user: Role.USER,
  shop_owner: Role.SHOP_OWNER,
};

export const mapStringToLevel: Record<string, Level> = {
  level_one: Level.LEVEL_ONE,
  level_two: Level.LEVEL_TWO,
  level_three: Level.LEVEL_THREE,
  super_user: Level.SUPER_USER,
};

export const mapCategoryToString: Record<Category, string> = {
  [Category.FOOD]: "food",
  [Category.FASHION_AND_WEARS]: "fashion_and_wears",
  [Category.GROCERY_AND_GENERAL]: "grocery_and_general",
  [Category.HEALTH_AND_WELLNESS]: "health_and_wellness",
  [Category.HOME_AND_ELECTRICAL_APPLIANCES]: "home_and_electrical_appliances",
  [Category.PERSONAL_SERVICES]: "personal_services",
  [Category.PRINTING_AND_STATIONERY]: "printing_and_stationery",
  [Category.TECH]: "tech",
};

export const mapStringToCategory: Record<string, Category> = {
  food: Category.FOOD,
  fashion_and_wears: Category.FASHION_AND_WEARS,
  grocery_and_general: Category.GROCERY_AND_GENERAL,
  health_and_wellness: Category.HEALTH_AND_WELLNESS,
  home_and_electrical_appliances:
    Category.HOME_AND_ELECTRICAL_APPLIANCES,
  personal_services: Category.PERSONAL_SERVICES,
  printing_and_stationery: Category.PRINTING_AND_STATIONERY,
  tech: Category.TECH,
};
