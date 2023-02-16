import { useRouter } from "next/router";
import React from "react";
import ShopOwnerForm from "../../../../components/admin/ShopOwnerForm";
import { api } from "../../../../utils/api";

const EditShopOwner = () => {
  const {
    query: { shopOwnerId },
    push,
  } = useRouter();

  if (!shopOwnerId) {
    push(`/admin/shop-owners`);
  }

  const shopOwner = api.users.getUserById.useQuery({
    id: shopOwnerId as string,
  });

  return (
    <div>
      <ShopOwnerForm shopOwner={shopOwner.data} />
    </div>
  );
};

export default EditShopOwner;
