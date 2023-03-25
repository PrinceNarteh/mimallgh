import { useRouter } from "next/router";
import AdminAddProductForm from "../../../components/AdminAddProductForm";
import Back from "../../../components/Back";
import { api } from "../../../utils/api";

const EditProduct = () => {
  const {
    query: { productId },
  } = useRouter();

  const { data } = api.products.getProductById.useQuery({
    id: productId as string,
  });

  return (
    <div>
      <Back />
      <AdminAddProductForm />
    </div>
  );
};

export default EditProduct;
