import { useRouter } from "next/router";
import React from "react";
import AdminForm from "../../../../components/admin/AdminForm";
import { api } from "../../../../utils/api";

const EditShopOwner = () => {
  const {
    query: { adminId },
    push,
  } = useRouter();

  if (!adminId) {
    push(`/admin/shops`);
  }

  const admin = api.users.getUserById.useQuery({ id: adminId as string });

  if (!admin) {
    push("/admin/administrators");
  }

  return (
    <div>
      <AdminForm admin={admin.data} />
    </div>
  );
};

export default EditShopOwner;
