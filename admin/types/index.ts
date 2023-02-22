import { IconType } from "react-icons/lib";

export type IMenus = (
  | {
      name: string;
      link: string;
      icon: IconType;
      subLinks?: undefined;
    }
  | {
      name: string;
      icon: IconType;
      subLinks: {
        name: string;
        link: string;
      }[];
      link?: undefined;
    }
)[];
