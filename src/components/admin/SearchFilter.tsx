"use client";

import { User } from "@prisma/client";
import { useEffect, useState } from "react";
import { FieldErrorsImpl } from "react-hook-form";
import { AiOutlineSearch } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";

interface ISearchFilter {
  shopOwners: User[];
  setValue: any;
  errors: Partial<
    FieldErrorsImpl<{
      [x: string]: any;
    }>
  >;
}

const SearchFilter = ({ shopOwners, setValue, errors }: ISearchFilter) => {
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState({
    id: "",
    fullName: "",
  });
  const [open, setOpen] = useState(false);

  const owners = shopOwners.map((shopOwner) => ({
    id: shopOwner.id,
    fullName:
      `${shopOwner.firstName} ${shopOwner.lastName}` + shopOwner.middleName,
  }));

  useEffect(() => {
    setValue("ownerId", selected.id);
  }, [selected]);

  return (
    <div className="relative w-full font-medium">
      <div
        onClick={() => setOpen(!open)}
        className={`flex w-full items-center justify-between rounded border border-gray-500 p-2 text-gray-400 ${
          !selected && "text-gray-500"
        }`}
      >
        {selected
          ? selected?.fullName.length > 25
            ? selected?.fullName.substring(0, 25) + "..."
            : selected.fullName
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
        {owners?.map((shopOwner) => (
          <li
            key={shopOwner?.id}
            className={`p-2 text-sm hover:bg-sky-600 hover:text-white
            ${
              shopOwner?.fullName?.toLowerCase() ===
                selected?.fullName.toLowerCase() && "bg-sky-600 text-white"
            }
            ${
              shopOwner?.fullName?.toLowerCase().startsWith(inputValue)
                ? "block"
                : "hidden"
            }`}
            onClick={() => {
              if (
                shopOwner?.fullName?.toLowerCase() !==
                selected.fullName.toLowerCase()
              ) {
                setSelected(shopOwner);
                setOpen(false);
                setInputValue("");
              }
            }}
          >
            {shopOwner?.fullName}
          </li>
        ))}
      </ul>
      {errors && errors["ownerId"] && (
        <span className="pl-1 text-sm text-red-500">
          {errors["ownerId"]?.message as string}
        </span>
      )}
    </div>
  );
};

export default SearchFilter;
