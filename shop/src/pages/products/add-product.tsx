"use client";

import React, { useState, useEffect, ChangeEvent } from "react";
import Card from "../../../components/admin/Card";
import InputField from "../../../components/InputField";
import { useForm } from "react-hook-form";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Image from "next/image";
import AddProductForm from "../../../components/AddProduct";

const AddProduct = () => {
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
    <div className="mx-auto max-w-4xl">
      <AddProductForm />
    </div>
  );
};

export default AddProduct;
