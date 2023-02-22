import { useRouter } from "next/router";
import ShopForm from "../../../../components/admin/ShopForm";
import { api } from "../../../../utils/api";

const AddShop = () => {
  const {
    query: { shopId },
    push,
  } = useRouter();

  if (!shopId) {
    push(`/admin/shops`);
  }

  const shop = api.shops.getShopById.useQuery({ shopId: shopId as string });

  if (shop === null) {
    push(`/admin/shops`);
  } else {
    return (
      <div className="mx-auto max-w-4xl">
        <ShopForm shop={shop.data} />
      </div>
    );
  }
};

export default AddShop;
