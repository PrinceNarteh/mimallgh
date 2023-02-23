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

  if (!shopOwnerId) {
    push(`/shop-owners`);
  }

  const shopOwner = api.users.getUserById.useQuery({
    id: shopOwnerId as string,
  });

  return (
    <div>
      <Back />
      <ShopOwnerForm shopOwner={shopOwner.data} />
    </div>
  );
};

export default EditShopOwner;
