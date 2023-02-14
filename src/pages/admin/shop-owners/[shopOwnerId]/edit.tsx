import React from "react";

const EditShopOwner = () => {
  const {
    query: { shopId },
    push,
  } = useRouter();

  if (!shopId) {
    push(`/admin/shops`);
  }

  const shop = api.shops.getShopById.useQuery({ shopId: shopId as string });
  return <div>Edit Shop Owner</div>;
};

export default EditShopOwner;
