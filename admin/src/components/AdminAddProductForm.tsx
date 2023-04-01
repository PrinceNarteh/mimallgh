import { Image as ProductImage } from "@prisma/client";
import Image from "next/image";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";
import { AiOutlineCloseCircle } from "react-icons/ai";

import { api } from "./../utils/api";
import { Button } from "./Button";
import Card from "./Card";
import InputField from "./InputField";
import Modal from "./Modal";
import SearchFilter from "./SearchFilter";
import { SelectOption } from "./SelectOption";
import { deleteProductImage } from "../utils/deleteProductImage";
import Loader from "./Loader";

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

const initialValues: {
  id: string;
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  price: number;
  shopId: string;
  stock: number;
  title: string;
  images: ProductImage[];
} = {
  id: "",
  brand: "",
  category: "",
  description: "",
  discountPercentage: 0,
  price: 0,
  shopId: "",
  stock: 0,
  title: "",
  images: [],
};

const AdminAddProductForm = () => {
  const {
    query: { productId },
    push,
  } = useRouter();

  const {
    register,
    formState: { errors },
    setValue,
    getValues,
    reset,
    handleSubmit,
  } = useForm({
    defaultValues: initialValues,
  });
  const [fetchAgain, setFetchAgain] = useState(true);
  const [images, setImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [publicId, setPublicId] = useState("");
  const getAllShops = api.shops.getAllShops.useQuery();
  const createProductMutation = api.products.createProduct.useMutation();
  const updateProductMutation = api.products.updateProduct.useMutation();
  const { data, refetch, isLoading } = api.products.getProductById.useQuery(
    {
      id: productId as string,
    },
    {
      enabled: false,
    }
  );

  const selectedImages = (e: ChangeEvent<HTMLInputElement>) => {
    let files: FileList | null = e.target.files;
    let pickedImages: File[] = [];
    if (files !== null) {
      pickedImages = Array.from(files);
    }
    setImages([...images, ...pickedImages]);
  };

  function deleteSelectedImage(index: number) {
    const imageCopy = [...images];
    imageCopy.splice(index, 1);
    setImages([...imageCopy]);
  }

  useEffect(() => {
    const getImages = async () => {
      let imagesArray: any = [];
      images?.map((file) => {
        convertBase64(file)
          .then((res) => {
            imagesArray.push(res);
          })
          .finally(() => {
            setPreviewImages(imagesArray);
          });
      });
    };
    getImages();
  }, [images]);

  const shops = getAllShops?.data?.map((shop) => ({
    id: shop.id,
    label: `${shop.name} - ${shop.owner.firstName} ${shop.owner.middleName} ${shop.owner.lastName}`,
  }));

  useEffect(() => {
    if (productId && !getValues().id) {
      refetch();
      reset(data as any);
      setFetchAgain(false);
      console.log(data);
    }
  }, [data]);

  const deleteImage = (public_id: string) => {
    setPublicId(public_id);
    setOpenDialog(true);
  };

  async function confirmDelete(choose: boolean) {
    if (choose) {
      const toastId = toast.loading("Loading...");

      try {
        await deleteProductImage(publicId);

        const newImages = getValues().images.filter(
          (image) => image.public_id !== publicId
        );

        setValue("images", newImages);
        toast.dismiss(toastId);
        toast.success("Image deleted successfully");
      } catch (error) {
        toast.dismiss(toastId);
      } finally {
        setOpenDialog(false);
      }
    } else {
      setOpenDialog(false);
    }
  }

  const submitHandler = (data: any) => {
    // console.log(data);
    const toastId = toast.loading("Loading");
    const imageUrls = [];

    const formData = new FormData();
    formData.append("cloud_name", "prinart");
    formData.append("upload_preset", "mimall");

    for (let i = 0; i < images.length; i++) {
      formData.append("file", images[i] as any);
      imageUrls[i] = axios.post(
        "https://api.cloudinary.com/v1_1/prinart/image/upload",
        formData
      );
    }

    try {
      Promise.all(imageUrls)
        .then((res: any) => {
          return res.map((item: any) => ({
            public_id: item.data.public_id,
            secure_url: item.data.secure_url,
          }));
        })
        .then((res) => {
          const newData = {
            ...data,
            images: res,
          };

          if (data.id) {
            updateProductMutation.mutate(newData, {
              onSuccess: (value) => {
                toast.dismiss(toastId);
                toast.success("Product updated successfully");
                push(`/products/${value?.id}`);
              },
              onError: () => {
                toast.dismiss(toastId);
              },
            });
          } else {
            createProductMutation.mutate(newData, {
              onSuccess: () => {
                toast.dismiss(toastId);
                toast.success("Product created successfully");
                reset();
              },
              onError: () => {
                toast.dismiss(toastId);
              },
            });
          }
        });
    } catch (error: any) {
      console.log(error.message);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="mx-auto max-w-4xl pb-5">
      <Card heading={"Add Product"}>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div className="space-y-4">
            <label className="-mb-2 block pl-2 capitalize tracking-widest">
              Shop
            </label>
            <SearchFilter
              errors={errors}
              field="shopId"
              setValue={setValue}
              options={shops || []}
              value={getValues().shopId}
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
                name="discountPercentage"
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
                <div className="flex gap-5 overflow-x-auto py-3">
                  {getValues()?.images.map((image, index) => (
                    <div
                      key={index}
                      className="relative h-32 w-32 shrink-0 rounded-md bg-slate-500"
                    >
                      <AiOutlineCloseCircle
                        onClick={() => deleteImage(image.public_id)}
                        className="absolute -right-2 -top-2 z-10 cursor-pointer rounded-full bg-white text-2xl text-orange-500"
                      />
                      <div className="overflow-hidden">
                        <Image
                          src={image.secure_url}
                          style={{ objectFit: "contain" }}
                          alt=""
                          sizes="128"
                          fill
                          className="rounded"
                        />
                      </div>
                    </div>
                  ))}
                </div>
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
            <div className="flex gap-5 overflow-x-auto py-3">
              {previewImages.map((image, index) => (
                <div
                  key={index}
                  className="relative h-32 w-32 shrink-0 rounded-md bg-slate-500"
                >
                  <AiOutlineCloseCircle
                    onClick={() => deleteSelectedImage(index)}
                    className="absolute -right-2 -top-2 z-10 cursor-pointer rounded-full bg-white text-2xl text-orange-500"
                  />
                  <div className="overflow-hidden">
                    <Image
                      src={image}
                      width="128"
                      height="128"
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
          <Button type="submit">
            {getValues()?.id ? "Edit" : "Add"} Product
          </Button>
        </form>
      </Card>
      {openDialog ? (
        <Modal
          onDialog={confirmDelete}
          message={
            openDialog
              ? `Are you sure you want to delete this product image?`
              : ""
          }
        />
      ) : null}
    </div>
  );
};

export default AdminAddProductForm;
