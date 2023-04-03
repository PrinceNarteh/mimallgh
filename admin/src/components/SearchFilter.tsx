import { useEffect, useState } from "react";
import type {
  FieldErrorsImpl,
  UseFormReturn,
  FieldErrors,
  FieldValues,
} from "react-hook-form";
import { AiOutlineSearch } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";

interface ISearchFilter {
  options: {
    id: string;
    label: string;
  }[];
  setValue: UseFormReturn["setValue"];
  errors: Partial<FieldErrorsImpl<FieldErrors>>;
  field: string;
  value: string;
}

const SearchFilter = ({
  options,
  setValue,
  errors,
  field,
  value,
}: ISearchFilter) => {
  const [hasValue, setHasValue] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState({
    id: "",
    label: "",
  });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setValue(field, selected.id, {
      shouldDirty: true,
      shouldValidate: true,
      shouldTouch: true,
    });
  }, [selected, setValue, field]);

  useEffect(() => {
    if (value && !hasValue) {
      const option = options.find((option) => option.id === value);
      if (option) {
        setSelected(option);
      }
      setHasValue(true);
    }
  }, [value, hasValue, setValue]);

  return (
    <div className="relative w-full font-medium">
      <div
        onClick={() => setOpen(!open)}
        className={`flex w-full items-center justify-between rounded border border-gray-500 p-2 text-gray-400 ${
          !selected ? "text-gray-500" : ""
        }`}
      >
        {selected
          ? selected?.label.length > 25
            ? selected?.label.substring(0, 25) + "..."
            : selected.label
          : "Select Shop Owner"}
        <BiChevronDown size={20} className={`${open ? "rotate-180" : ""}`} />
      </div>
      <ul
        className={`absolute mt-2 w-full overflow-y-auto bg-gray-700 ${
          open ? "max-h-60" : "max-h-0"
        }`}
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
        {options?.map((option, idx) => (
          <li
            key={idx}
            className={`p-2 text-sm hover:bg-sky-600 hover:text-white
            ${
              option?.label?.toLowerCase() === selected?.label.toLowerCase()
                ? "bg-sky-600 text-white"
                : ""
            }
            ${
              option?.label?.toLowerCase().startsWith(inputValue)
                ? "block"
                : "hidden"
            }`}
            onClick={() => {
              if (
                option?.label?.toLowerCase() !== selected.label.toLowerCase()
              ) {
                setSelected(option);
                setOpen(false);
                setInputValue("");
              }
            }}
          >
            {option?.label}
          </li>
        ))}
      </ul>
      {errors && errors[field] && (
        <span className="pl-1 text-sm text-red-500">
          {errors[field]?.message as string}
        </span>
      )}
    </div>
  );
};

export default SearchFilter;
