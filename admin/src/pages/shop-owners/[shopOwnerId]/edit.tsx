import { useRouter } from "next/router";
import React from "react";
import Back from "../../../components/Back";
import ShopOwnerForm from "../../../components/ShopOwnerForm";
import { api } from "../../../utils/api";

const EditShopOwner = () => {
  const {
    query: { shopOwnerId },
    push,
  } = useRouter();

  

  return (
    <div>
      <Back />
      <ShopOwnerForm />
    </div>
  );
};

export default EditShopOwner;
