import { Role } from "@prisma/client";

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
