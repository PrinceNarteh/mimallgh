import { useRouter } from "next/router";

import AdminForm from "../../../components/AdminForm";
import Back from "../../../components/Back";
import { api } from "../../../utils/api";

const EditShopOwner = () => {
  const {
    query: { adminId },
    push,
  } = useRouter();

  if (!adminId) {
    push(`/shops`);
  }

  const admin = api.users.getUserById.useQuery({ id: adminId as string });

  if (!admin) {
    push("/administrators");
  }

  return (
    <div>
      <Back />
      <AdminForm admin={admin.data} />
    </div>
  );
};

export default EditShopOwner;
