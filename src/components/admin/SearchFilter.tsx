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

  return (
    <div className="relative w-full font-medium">
      <div
        onClick={() => setOpen(!open)}
        className={`flex w-full items-center justify-between rounded border border-gray-500 p-2 text-gray-400 ${
          !selected && "text-gray-500"
        }`}
      >
        {selected
          ? selected?.length > 25
            ? selected?.substring(0, 25) + "..."
            : selected
          : "Select Shop Owner"}
        <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
      </div>
      <ul
        className={`absolute mt-2 w-full overflow-y-auto bg-gray-700 ${
          open ? "max-h-60" : "max-h-0"
        } `}
      >
        <div className="sticky top-0 flex items-center bg-gray-800 px-2">
          <AiOutlineSearch size={18} className="text-gray-700" />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
            placeholder="Enter country name"
            className="w-full bg-transparent p-2 outline-none placeholder:text-gray-700"
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
        <span className="pl-1 text-sm text-red-500">
          {errors["shop_owner"]?.message as string}
        </span>
      )}
    </div>
  );
};

export default SearchFilter;
