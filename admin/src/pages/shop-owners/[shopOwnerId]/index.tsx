import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-hot-toast";

import Back from "../../../components/Back";
import Card from "../../../components/Card";
import Modal from "../../../components/Modal";
import { api } from "../../../utils/api";
import Loader from "../../../components/Loader";

const ShopOwnerDetails = () => {
  const {
    query: { shopOwnerId },
    push,
  } = useRouter();
  const [openDialog, setOpenDialog] = useState(false);

  if (!shopOwnerId) {
    push(`/shop-owners`).catch((error) => console.log(error));
  }
  const deleteUser = api.users.deleteUser.useMutation();

  const { data, isLoading } = api.users.getUserById.useQuery({
    id: shopOwnerId as string,
  });

  function confirmDelete(choose: boolean) {
    if (choose) {
      deleteUser.mutate(
        { id: shopOwnerId as string },
        {
          onSuccess: () => {
            toast.success("Admin deleted successfully!");
            setOpenDialog(false);
            push(`/administrators`).catch((error) => console.log(error));
          },
        }
      );
    } else {
      setOpenDialog(false);
    }
  }

  if (shopOwnerId && isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <Back />
      <div className="mx-auto mt-5 max-w-3xl space-y-5">
        <Card heading="Shop Owner Details">
          <DetailItem
            label="Name"
            value={`${data?.firstName || ""} ${data?.middleName || ""} ${
              data?.lastName || ""
            }`}
            dark
          />
          <DetailItem label="Shop Name" value={`${data?.lastName || ""}`} />
          <DetailItem label="Email" value={`${data?.email || ""}`} dark />
          <DetailItem
            label="Phone Number"
            value={`${data?.phoneNumber || ""}`}
          />
          <DetailItem label="Address" value={`${data?.address || ""}`} dark />
          <DetailItem
            label="Status"
            value={`${data?.active ? "Active" : "Inactive"}`}
          />
          <DetailItem
            label="Date Joined"
            value={`${data?.createdAt.toDateString() || ""}`}
            dark
          />
        </Card>
        <div className="flex justify-end gap-5">
          <Link href={`/shop-owners/${data?.id}/edit`} className="link">
            Edit
          </Link>
          <button>Delete</button>
        </div>
      </div>
      {openDialog ? (
        <Modal
          onDialog={confirmDelete}
          message={
            openDialog ? `${data?.firstName || ""} ${data?.lastName || ""}` : ""
          }
        />
      ) : null}
    </div>
  );
};

const DetailItem = ({
  label,
  value,
  dark,
}: {
  label: string;
  value: string;
  dark?: boolean;
}) => (
  <div
    className={`flex items-center justify-between py-4 px-4 ${
      dark ? "bg-dark-gray" : ""
    }`}
  >
    <div className="font-bold">{label}</div>
    <div>{value}</div>
  </div>
);

export default ShopOwnerDetails;
