import { AiOutlineFall, AiOutlineRise } from "react-icons/ai";
import { FiShoppingBag } from "react-icons/fi";
import { MdOutlineDashboard } from "react-icons/md";
import { TiShoppingCart } from "react-icons/ti";

export const shopMenus = [
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

export const adminMenus = [
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
