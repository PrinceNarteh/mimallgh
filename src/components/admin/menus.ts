import { BsShop } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { MdOutlineDashboard } from "react-icons/md";
import { TiShoppingCart } from "react-icons/ti";

export const adminMenus = [
  {
    name: "Dashboard",
    link: "/admin",
    icon: MdOutlineDashboard,
  },
  {
    name: "Administrators",
    icon: FiShoppingBag,
    subLinks: [
      {
        name: "Administrators List",
        link: "/admin/administrators",
      },
      {
        name: "Add Administrator",
        link: "/admin/administrators/add",
      },
    ],
  },
  {
    name: "Products",
    icon: FiShoppingBag,
    subLinks: [
      {
        name: "Product List",
        link: "/admin/products",
      },
      {
        name: "Add Product",
        link: "/admin/products/add",
      },
    ],
  },
  {
    name: "Shops",
    icon: BsShop,
    subLinks: [
      {
        name: "Shop List",
        link: "/admin/shops",
      },
      {
        name: "Add Shop",
        link: "/admin/shops/add",
      },
    ],
  },
  {
    name: "Shop Owners",
    icon: FaUsers,
    subLinks: [
      {
        name: "Shop Owners List",
        link: "/admin/shop-owners",
      },
      {
        name: "Add Shop Owner",
        link: "/admin/shop-owners/add",
      },
    ],
  },
  {
    name: "Orders",
    icon: TiShoppingCart,
    subLinks: [
      {
        name: "Order List",
        link: "/admin/orders",
      },
    ],
  },
];

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
