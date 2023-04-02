import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { HiOutlineTrash } from "react-icons/hi";
import Back from "../../../components/Back";

import { Button } from "../../../components/Button";
import Card from "../../../components/Card";
import Modal from "../../../components/Modal";
import { api } from "../../../utils/api";
import { mapLevelToText } from "../../../utils/mapper";
import Loader from "../../../components/Loader";

const AdministratorDetails = () => {
  const {
    query: { adminId },
    push,
  } = useRouter();
  const [openDialog, setOpenDialog] = useState(false);
  const deleteUser = api.users.deleteUser.useMutation();

  if (!adminId) {
    push(`/administrators`).catch((error: any) => console.log(error));
  }

  const { data, isLoading } = api.users.getUserById.useQuery({
    id: adminId as string,
  });

  const handleDelete = () => setOpenDialog(true);

  function confirmDelete(choose: boolean) {
    if (choose) {
      deleteUser.mutate(
        { id: adminId as string },
        {
          onSuccess: () => {
            toast.success("Admin deleted successfully!");
            setOpenDialog(false);
            push(`/administrators`).catch((error: any) => console.log(error));
          },
        }
      );
    } else {
      setOpenDialog(false);
    }
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="pb-5">
      <Back />
      <div className="mx-auto mt-5 max-w-3xl space-y-5">
        <Card heading="Administrator Details">
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
          <DetailItem
            label="Level"
            value={mapLevelToText((data?.level as string) || "")}
          />
        </Card>
        <div className="flex items-center justify-end gap-5">
          <Link href={`/administrators/${data?.id}/edit`} className="link">
            Edit
          </Link>
          <Button variant="danger" onClick={() => handleDelete()}>
            <HiOutlineTrash />
            Delete
          </Button>
        </div>
      </div>
      {openDialog ? (
        <Modal
          onDialog={confirmDelete}
          message={openDialog ? `${data?.firstName} ${data?.lastName}` : ""}
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
  value?: string;
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

export default AdministratorDetails;
