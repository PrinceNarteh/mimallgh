import React, { useState, useEffect, ChangeEvent } from "react";
import Card from "../components/Card";
import InputField from "./InputField";
import { useForm } from "react-hook-form";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Image from "next/image";
import { Button } from "./Button";

const AddProductForm = () => {
  const {
    register,
    formState: { errors },
  } = useForm();
  const [images, setImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);

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

  return (
    <div
      className="mx-auto max-w-4xl pb-5
    "
    >
      <Card heading={"Add Product"}>
        <div className="space-y-4">
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
              label="Quantity"
              name="quantity"
              register={register}
              errors={errors}
            />
          </div>
          <div className="flex flex-col gap-5 md:flex-row">
            <InputField
              label="Brand"
              name="brand"
              register={register}
              errors={errors}
            />
            <InputField
              label="Category"
              name="category"
              register={register}
              errors={errors}
            />
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
          <Button type="submit">Add Product</Button>
        </div>
      </Card>
    </div>
  );
};

export default AddProductForm;
