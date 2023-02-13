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

export const mapLevelToString: Record<Level, string> = {
  [Level.LEVEL_ONE]: "level_one",
  [Level.LEVEL_TWO]: "level_two",
  [Level.LEVEL_THREE]: "level_three",
  [Level.SUPER_USER]: "super_user",
};

export const mapStringToLevel: Record<string, Level> = {
  level_one: Level.LEVEL_ONE,
  level_two: Level.LEVEL_TWO,
  level_three: Level.LEVEL_THREE,
  super_user: Level.SUPER_USER,
};

export const mapCategoryToString: Record<Category, string> = {
  [Category.ACCOMMODATIONS_AND_BUILDING]: "accommodations_and_building",
  [Category.FASHION_AND_WEARS]: "fashion_and_wears",
  [Category.FOOD]: "food",
  [Category.FURNITURE]: "furniture",
  [Category.GROCERY_AND_GENERAL]: "grocery_and_general",
  [Category.HEALTH_AND_WELLNESS]: "health_and_wellness",
  [Category.HOME_AND_ELECTRICALS]: "home_and_electricals",
  [Category.MONEY_AND_ENERGY]: "money_and_energy",
  [Category.PERSONAL_CARE_AND_BEAUTY]: "personal_care_and_beauty",
  [Category.RECREATION]: "recreation",
  [Category.STATIONERY_AND_PRINTING]: "stationery_and_printing",
  [Category.TECH]: "tech",
  [Category.TRANSPORT_AND_MACHINE]: "transport_and_machine",
};

export const mapStringToCategory: Record<string, Category> = {
  accommodations_and_building: Category.ACCOMMODATIONS_AND_BUILDING,
  fashion_and_wears: Category.FASHION_AND_WEARS,
  food: Category.FOOD,
  furniture: Category.FURNITURE,
  grocery_and_general: Category.GROCERY_AND_GENERAL,
  health_and_wellness: Category.HEALTH_AND_WELLNESS,
  home_and_electricals: Category.HOME_AND_ELECTRICALS,
  money_and_energy: Category.MONEY_AND_ENERGY,
  personal_care_and_beauty: Category.PERSONAL_CARE_AND_BEAUTY,
  recreation: Category.RECREATION,
  stationery_and_printing: Category.STATIONERY_AND_PRINTING,
  tech: Category.TECH,
  transport_and_machine: Category.TRANSPORT_AND_MACHINE,
};
