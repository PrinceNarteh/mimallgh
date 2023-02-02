"use client";

import dynamic from "next/dynamic";
import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { MdOutlineDashboard } from "react-icons/md";
import { TiShoppingCart } from "react-icons/ti";

const Layout = dynamic(() => import("./AdminLayout"), { ssr: false });

const menus = [
  {
    name: "Dashboard",
    link: "/shop",
    icon: MdOutlineDashboard,
  },
  {
    name: "Products",
    icon: FiShoppingBag,
    subLinks: [
      {
        name: "Product List",
        link: "/shop/products",
      },
      {
        name: "Add Product",
        link: "/shop/products/add-product",
      },
    ],
  },
  {
    name: "Orders",
    icon: TiShoppingCart,
    subLinks: [
      {
        name: "Order List",
        link: "/shop/orders",
      },
      {
        name: "Order Details",
        link: "/shop/orders/1",
      },
    ],
  },
];

const ShopAdminLayout = ({ children }: { children: React.ReactNode }) => {
  return <Layout menus={menus}>{children}</Layout>;
};

export default ShopAdminLayout;
