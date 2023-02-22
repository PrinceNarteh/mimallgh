import Image from "next/image";
import { ChangeEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { api } from "./../utils/api";
import { Button } from "./Button";
import Card from "./Card";
import InputField from "./InputField";
import SearchFilter from "./SearchFilter";
import { SelectOption } from "./SelectOption";

const categories = [
  {
    label: "Accommodations & Building",
    value: "accommodations_and_building",
  },
  { label: "Fashion & Wears", value: "fashion_and_wears" },
  { label: "Food", value: "food" },
  { label: "Furniture", value: "furniture" },
  { label: "Grocery & General", value: "grocery_and_general" },
  { label: "Health & Wellness", value: "health_and_wellness" },
  { label: "Home & Electricals", value: "home_and_electricals" },
  { label: "Money & Energy", value: "money_and_energy" },
  { label: "Personal Care & Beauty", value: "personal-care_and_beauty" },
  { label: "Recreation", value: "recreation" },
  { label: "Stationary & Printing", value: "stationery_and_printing" },
  { label: "Tech", value: "tech" },
  { label: "Transport & Machines", value: "transport_and_machines" },
];

const AdminAddProductForm = () => {
  const {
    register,
    formState: { errors },
    setValue,
  } = useForm();
  const [images, setImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const getAllShops = api.shops.getAllShops.useQuery();

  const selectedImages = (e: ChangeEvent<HTMLInputElement>) => {
    let files: FileList | null = e.target.files;
    let pickedImages: File[] = [];
    if (files !== null) {
      pickedImages = Array.from(files);
    }
    setImages([...images, ...pickedImages]);
  };

  function deleteHandler(index: number) {
    const imageCopy = [...images];
    imageCopy.splice(index, 1);
    setImages([...imageCopy]);
  }

  useEffect(() => {
    const imagesArray = images?.map((file) => {
      return URL.createObjectURL(file);
    });
    setPreviewImages(imagesArray);
  }, [images]);

  const shops = getAllShops?.data?.map((shop) => ({
    id: shop.id,
    label: `${shop.name} - ${shop.owner.firstName} ${shop.owner.middleName} ${shop.owner.lastName}`,
  }));

  return (
    <div className="mx-auto max-w-4xl pb-5">
      <Card heading={"Add Product"}>
        <div className="space-y-4">
          <label className="-mb-2 block pl-2 capitalize tracking-widest">
            Shop
          </label>
          <SearchFilter
            errors={errors}
            field="shopId"
            setValue={setValue}
            options={shops || []}
          />
          <InputField
            label="Name"
            name="name"
            register={register}
            errors={errors}
          />

          <div className="flex flex-col gap-5 md:flex-row">
            <InputField
              label="Price"
              name="price"
              register={register}
              errors={errors}
            />
            <InputField
              label="Discount"
              name="discount"
              register={register}
              errors={errors}
            />
          </div>
          <InputField
            label="Quantity"
            name="quantity"
            register={register}
            errors={errors}
          />
          <div className="flex flex-col gap-5 md:flex-row">
            <InputField
              label="Brand"
              name="brand"
              register={register}
              errors={errors}
            />
            <div className="my-2 w-full">
              <label
                htmlFor=""
                className="mb-1.5 block pl-2 capitalize tracking-widest"
              >
                Category
              </label>
              <select className="w-full rounded border border-gray-500 bg-transparent p-2 outline-none">
                <option value="" className="bg-light-gray">
                  Select Category
                </option>
                {categories.map((category, idx) => (
                  <SelectOption
                    key={idx}
                    label={category.label}
                    value={category.value}
                  />
                ))}
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="" className="mb-2 inline-block text-xl capitalize">
              Description
            </label>
            <textarea
              className="w-full rounded border border-gray-600 bg-transparent p-2 outline-none"
              rows={5}
              onChange={(e) => {}}
            />
          </div>
          <div className="">
            <label
              className="mb-2 block bg-light-gray pl-2 capitalize tracking-widest"
              htmlFor="user_avatar"
            >
              Product Image(s)
            </label>
            <input
              className="block w-full cursor-pointer rounded-lg border bg-dark-gray file:border-none file:bg-light-gray file:px-5 file:py-3 file:text-white"
              aria-describedby="user_avatar_help"
              id="user_avatar"
              type="file"
              onChange={selectedImages}
              multiple
              accept=".png, .jpg, .jpeg"
            ></input>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-7 ">
            {previewImages.map((image, index) => (
              <div
                key={index}
                className="relative h-32 w-32 rounded-md bg-slate-500"
              >
                <AiOutlineCloseCircle
                  onClick={() => deleteHandler(index)}
                  className="absolute -right-2 -top-2 z-10 cursor-pointer rounded-full bg-white text-2xl text-orange-500"
                />
                <div className="overflow-hidden">
                  <Image
                    src={image}
                    fill
                    style={{ objectFit: "cover" }}
                    alt=""
                    className="rounded"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="my-5">
          <label
            className="mb-2 block bg-light-gray pl-2 capitalize tracking-widest"
            htmlFor="user_avatar"
          >
            Product Video
          </label>
          <input
            className="block w-full cursor-pointer rounded-lg border bg-dark-gray file:border-none file:bg-light-gray file:px-5 file:py-3 file:text-white"
            aria-describedby="user_avatar_help"
            id="user_avatar"
            type="file"
            onChange={selectedImages}
            multiple
            accept=".png, .jpg, .jpeg"
          ></input>
        </div>
        <Button type="submit">Add Product</Button>
      </Card>
    </div>
  );
};

export default AdminAddProductForm;
