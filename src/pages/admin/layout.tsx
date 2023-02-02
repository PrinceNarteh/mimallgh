"use client";

import dynamic from "next/dynamic";
import { ReactNode } from "react";
import { BsShop } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { MdOutlineDashboard } from "react-icons/md";
import { TiShoppingCart } from "react-icons/ti";

const menus = [
  {
    name: "Dashboard",
    link: "/admin",
    icon: MdOutlineDashboard,
  },
  {
    name: "Products",
    icon: FiShoppingBag,
    subLinks: [
      {
        name: "Product List",
        link: "admin/products",
      },
      {
        name: "Add Product",
        link: "admin/products/add",
      },
    ],
  },
  {
    name: "Shops",
    icon: BsShop,
    subLinks: [
      {
        name: "Shop List",
        link: "admin/shops",
      },
      {
        name: "Add Shop",
        link: "admin/shops/add",
      },
    ],
  },
  {
    name: "Shop Owners",
    icon: FaUsers,
    subLinks: [
      {
        name: "Shop Owners List",
        link: "admin/shop-owners",
      },
      {
        name: "Add Shop Owner",
        link: "admin/shop-owners/add",
      },
    ],
  },
  {
    name: "Orders",
    icon: TiShoppingCart,
    subLinks: [
      {
        name: "Order List",
        link: "admin/orders",
      },
      {
        name: "Order Details",
        link: "admin/orders/1",
      },
    ],
  },
];

const BaseLayout = dynamic(() => import("../BaseLayout"), { ssr: false });

export default function AdminLayout({ children }: { children: ReactNode }) {
  return <BaseLayout menus={menus}>{children}</BaseLayout>;
}
