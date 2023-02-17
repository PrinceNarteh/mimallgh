import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import Card from "../../../../components/admin/Card";
import { Button } from "../../../../components/admin/Button";
import { api } from "../../../../utils/api";
import { mapLevelToText } from "../../../../utils/mapper";
import { HiOutlineTrash } from "react-icons/hi";
import { useDialog } from "../../../../hooks/useDialog";

interface IDialog {
  id: string;
  isLoading: boolean;
  message: string;
}

const AdministratorDetails = () => {
  const {
    query: { adminId },
    push,
  } = useRouter();
  const { setIsOpen, response } = useDialog();
  const [dialog, setDialog] = useState<IDialog>({
    id: "",
    message: "",
    isLoading: false,
  });

  if (!adminId) {
    push(`/admin/administrators`);
  }

  const { data } = api.users.getUserById.useQuery({
    id: adminId as string,
  });

  const handleDialog = ({ message, isLoading, id }: IDialog) => {
    setDialog({ id, message, isLoading });
  };

  const handleDelete = (id: string | undefined) => {
    setIsOpen(true);
    handleDialog({ id: "123", isLoading: true, message: "Are you sure?" });
  };

  return (
    <div className="pb-5">
      <Link
        href={`/admin/administrators`}
        className="flex cursor-pointer items-center"
      >
        <MdArrowBackIosNew className="mr-2" /> Back
      </Link>
      <div className="mx-auto mt-5 max-w-3xl space-y-5">
        <Card heading="Administrator Details">
          <DetailItem
            label="Name"
            value={`${data?.firstName} ${data?.middleName} ${data?.lastName}`}
            dark
          />
          <DetailItem label="Shop Name" value={`${data?.lastName}`} />
          <DetailItem label="Email" value={`${data?.email}`} dark />
          <DetailItem label="Phone Number" value={`${data?.phoneNumber}`} />
          <DetailItem label="Address" value={`${data?.address}`} dark />
          <DetailItem
            label="Status"
            value={`${data?.active ? "Active" : "Inactive"}`}
          />
          <DetailItem
            label="Date Joined"
            value={`${data?.createdAt.toDateString()}`}
            dark
          />
          <DetailItem
            label="Level"
            value={mapLevelToText(data?.level as string)}
          />
        </Card>
        <div className="flex items-center justify-end gap-5">
          <Link
            href={`/admin/administrators/${data?.id}/edit`}
            className="link"
          >
            Edit
          </Link>
          <Button variant="danger" onClick={() => handleDelete(data?.id)}>
            <HiOutlineTrash />
            Delete
          </Button>
        </div>
      </div>
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
      dark && "bg-dark-gray"
    }`}
  >
    <div className="font-bold">{label}</div>
    <div>{value}</div>
  </div>
);

export default AdministratorDetails;
