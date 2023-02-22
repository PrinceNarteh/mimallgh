import { BsShop } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { MdOutlineDashboard } from "react-icons/md";
import { TiShoppingCart } from "react-icons/ti";

export const menus = [
  {
    name: "Dashboard",
    link: "/",
    icon: MdOutlineDashboard,
  },
  {
    name: "Administrators",
    icon: FiShoppingBag,
    subLinks: [
      {
        name: "Administrators List",
        link: "/administrators",
      },
      {
        name: "Add Administrator",
        link: "/administrators/add",
      },
    ],
  },
  {
    name: "Products",
    icon: FiShoppingBag,
    subLinks: [
      {
        name: "Product List",
        link: "/products",
      },
      {
        name: "Add Product",
        link: "/products/add",
      },
    ],
  },
  {
    name: "Shops",
    icon: BsShop,
    subLinks: [
      {
        name: "Shop List",
        link: "/shops",
      },
      {
        name: "Add Shop",
        link: "/shops/add",
      },
    ],
  },
  {
    name: "Shop Owners",
    icon: FaUsers,
    subLinks: [
      {
        name: "Shop Owners List",
        link: "/shop-owners",
      },
      {
        name: "Add Shop Owner",
        link: "/shop-owners/add",
      },
    ],
  },
  {
    name: "Orders",
    icon: TiShoppingCart,
    subLinks: [
      {
        name: "Order List",
        link: "/orders",
      },
    ],
  },
];

export const locations = [
  { label: "Select Location", value: "" },
  { label: "Amamoma", value: "amamoma" },
  { label: "Apewosika", value: "apewosika" },
  { label: "Ayensu", value: "ayensu" },
  { label: "Duakro", value: "duakro" },
  { label: "KNH", value: "knh" },
  { label: "Kokoado", value: "kokoado" },
  { label: "Kwasipra", value: "kwasipra" },
  { label: "New Site", value: "new_site" },
  { label: "Old Site", value: "old_site" },
  { label: "Science", value: "science" },
];
