import Image from "next/image";
import { ChangeEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { AiOutlineCloseCircle } from "react-icons/ai";

import { api } from "./../utils/api";
import { Button } from "./Button";
import Card from "./Card";
import InputField from "./InputField";
import SearchFilter from "./SearchFilter";
import { SelectOption } from "./SelectOption";

const convertBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      resolve(fileReader.result as string);
    };

    fileReader.onerror = (error: any) => {
      reject(error.message);
    };
  });
};

const categories = [
  { label: "Food", value: "food" },
  { label: "Fashion & Wears", value: "fashion_and_wears" },
  { label: "Grocery & General", value: "grocery_and_general" },
  { label: "Health & Wellness", value: "health_and_wellness" },
  {
    label: "Home & Electrical Appliances",
    value: "home_and_electrical_appliances",
  },
  { label: "Personal Services", value: "personal_services" },
  { label: "Printing & Stationary", value: "printing_and_stationery" },
  { label: "Tech", value: "tech" },
];

interface ProductProps {
  brand: string;
  category: string;
  description: string;
  discount: number;
  images: string[];
  price: number;
  shopId: string;
  stock: number;
  title: string;
}

const AdminAddProductForm = (product: ProductProps) => {
  const {
    register,
    formState: { errors },
    setValue,
    getValues,
    reset,
    handleSubmit,
  } = useForm({
    defaultValues: {
      brand: product.brand || "",
      category: product.category || "",
      description: product.description || "",
      discount: product.discount || 0,
      price: product.price || 0,
      shopId: product.shopId || "",
      stock: product.stock || 0,
      title: product.title || "",
      images: product.images || [],
      selectedImages: product.images || [],
    },
  });
  const [images, setImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const getAllShops = api.shops.getAllShops.useQuery();
  const createProductMutation = api.products.createProduct.useMutation();

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
    const getImages = async () => {
      let imagesArray: string[] = [];
      images?.map((file) => {
        convertBase64(file)
          .then((res) => {
            imagesArray.push(res);
          })
          .finally(() => {
            setPreviewImages(imagesArray);
            setValue("selectedImages", imagesArray);
          });
      });
    };
    getImages();
  }, [images]);

  const shops = getAllShops?.data?.map((shop) => ({
    id: shop.id,
    label: `${shop.name} - ${shop.owner.firstName} ${shop.owner.middleName} ${shop.owner.lastName}`,
  }));

  const submitHandler = (data: any) => {
    console.log(data);
    const toastId = toast.loading("Loading");
    createProductMutation.mutate(data, {
      onSuccess: () => {
        toast.dismiss(toastId);
        toast.success("Product created successfully");
        reset();
      },
      onError: () => {
        toast.dismiss(toastId);
      },
    });
  };

  return (
    <div className="mx-auto max-w-4xl pb-5">
      <Card heading={"Add Product"}>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div className="space-y-4">
            <label className="-mb-2 block pl-2 capitalize tracking-widest">
              Shop
            </label>
            <SearchFilter
              value={""}
              errors={errors}
              field="shopId"
              setValue={setValue}
              options={shops || []}
            />
            <InputField
              label="Title"
              name="title"
              register={register}
              errors={errors}
            />

            <div className="flex flex-col gap-5 md:flex-row">
              <InputField
                label="Price"
                name="price"
                type="number"
                register={register}
                errors={errors}
                validationSchema={{ valueAsNumber: true }}
              />
              <InputField
                label="Discount"
                name="discount"
                type="number"
                register={register}
                errors={errors}
                validationSchema={{ valueAsNumber: true }}
              />
            </div>
            <InputField
              label="Stock"
              name="stock"
              type="number"
              register={register}
              errors={errors}
              validationSchema={{ valueAsNumber: true }}
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
                <select
                  className="w-full rounded border border-gray-500 bg-transparent p-2 outline-none"
                  {...register("category")}
                >
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
              <label
                htmlFor=""
                className="mb-2 inline-block text-xl capitalize"
              >
                Description
              </label>
              <textarea
                className="w-full rounded border border-gray-600 bg-transparent p-2 outline-none"
                rows={5}
                {...register("description")}
              />
            </div>
            {getValues().images.length > 0 ? (
              <div className="">
                <label
                  className="mb-2 block bg-light-gray pl-2 capitalize tracking-widest"
                  htmlFor="user_avatar"
                >
                  Product Images
                </label>
              </div>
            ) : null}

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
        </form>
      </Card>
    </div>
  );
};

export default AdminAddProductForm;
