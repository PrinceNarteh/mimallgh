"use client";

import { useState } from "react";
import { FieldErrorsImpl } from "react-hook-form";
import { AiOutlineSearch } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";

interface ISearchFilter {
  shopOwners: {
    id: string;
    fullName: string;
  }[];
  setValue: any;
  errors: Partial<
    FieldErrorsImpl<{
      [x: string]: any;
    }>
  >;
}

// outline-none bg-transparent border border-gray-500 rounded w-full p-2

const SearchFilter = ({ shopOwners, setValue, errors }: ISearchFilter) => {
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);

  console.log(selected);

  return (
    <div className="relative w-full font-medium">
      <div
        onClick={() => setOpen(!open)}
        className={`w-full p-2 flex items-center justify-between border border-gray-500 rounded ${
          !selected && "text-gray-700"
        }`}
      >
        {selected
          ? selected?.length > 25
            ? selected?.substring(0, 25) + "..."
            : selected
          : "Select Country"}
        <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
      </div>
      <ul
        className={`absolute w-full bg-gray-700 mt-2 overflow-y-auto ${
          open ? "max-h-60" : "max-h-0"
        } `}
      >
        <div className="flex items-center px-2 sticky top-0 bg-gray-800">
          <AiOutlineSearch size={18} className="text-gray-700" />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
            placeholder="Enter country name"
            className="placeholder:text-gray-700 p-2 outline-none w-full bg-transparent"
          />
        </div>
        {shopOwners?.map((shopOwner) => (
          <li
            key={shopOwner?.id}
            className={`p-2 text-sm hover:bg-sky-600 hover:text-white
            ${
              shopOwner?.fullName?.toLowerCase() === selected?.toLowerCase() &&
              "bg-sky-600 text-white"
            }
            ${
              shopOwner?.fullName?.toLowerCase().startsWith(inputValue)
                ? "block"
                : "hidden"
            }`}
            onClick={() => {
              if (
                shopOwner?.fullName?.toLowerCase() !== selected.toLowerCase()
              ) {
                setValue("shop_owner", shopOwner.id);
                setSelected(shopOwner.fullName);
                setOpen(false);
                setInputValue("");
              }
            }}
          >
            {shopOwner?.fullName}
          </li>
        ))}
      </ul>
      {errors && errors["shop_owner"] && (
        <span className="text-sm text-red-500 pl-1">
          {errors["shop_owner"]?.message as string}
        </span>
      )}
    </div>
  );
};

export default SearchFilter;
