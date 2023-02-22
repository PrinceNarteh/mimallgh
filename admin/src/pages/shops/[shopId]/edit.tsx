import { useRouter } from "next/router";
import ShopForm from "../../../components/ShopForm";
import { api } from "../../../utils/api";

const AddShop = () => {
  const {
    query: { shopId },
    push,
  } = useRouter();

  if (!shopId) {
    push(`/shops`);
  }

  const shop = api.shops.getShopById.useQuery({ shopId: shopId as string });

  if (shop === null) {
    push(`/shops`);
  } else {
    return (
      <div className="mx-auto max-w-4xl">
        <ShopForm shop={shop.data} />
      </div>
    );
  }
};

export default AddShop;
