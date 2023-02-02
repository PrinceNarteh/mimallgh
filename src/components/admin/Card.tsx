import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

interface ICard {
  heading: string;
  children: React.ReactNode;
}

const Card = ({ heading, children }: ICard) => {
  return (
    <div className="bg-light-gray p-5">
      <div className="relative mb-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">{heading}</h3>
          <label htmlFor="toggleMenu">
            <BsThreeDotsVertical className="cursor-pointer text-xl " />
          </label>
        </div>
        <input
          id="toggleMenu"
          type="checkbox"
          className=" peer absolute -right-1 hidden h-8 w-8 cursor-pointer bg-transparent"
        />
        <div className="bg-dark-gray border-light-gray absolute right-0 top-7 z-30 hidden w-48 rounded border p-2 peer-checked:block">
          <ul>
            <CardItem>Settings</CardItem>
            <CardItem>Move</CardItem>
            <div className="bg-off-white my-2 h-[0.5px]"></div>
            <CardItem>Remove</CardItem>
          </ul>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

function CardItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="hover:bg-light-gray cursor-pointer rounded p-2 text-xl">
      {children}
    </li>
  );
}

export default Card;
