import { useRouter } from "next/router";
import AddShopForm from "../../../../components/admin/AddShopForm";

const AddShop = () => {
  const {
    query: { shopId },
  } = useRouter();

  return (
    <div className="mx-auto max-w-4xl">
      <AddShopForm />
    </div>
  );
};

export default AddShop;
