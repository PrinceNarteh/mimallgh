import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import Card from "../../../../components/admin/Card";
import { api } from "../../../../utils/api";

const ShopOwnerDetails = () => {
  const {
    query: { shopOwnerId },
    push,
  } = useRouter();

  if (!shopOwnerId) {
    push(`/admin/shop-owners`);
  }

  const { data } = api.users.getUserById.useQuery({
    id: shopOwnerId as string,
  });

  return (
    <div>
      <Link href={`/admin/shops`} className="flex cursor-pointer items-center">
        <MdArrowBackIosNew className="mr-2" /> Back
      </Link>
      <div className="mx-auto mt-5 max-w-3xl space-y-5">
        <Card heading="Shop Owner Details">
          <DetailItem
            label="Name"
            value={`${data?.firstName} ${data?.middleName} ${data?.lastName}`}
          />
          <DetailItem label="Shop Name" value={`${data?.lastName}`} dark />
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
        </Card>
        <div className="flex justify-end gap-5">
          <Link
            href={`/admin/shops/${data?.id}/edit`}
            className="rounded bg-blue-800 py-2 px-7 font-bold"
          >
            Edit
          </Link>
          <button>Delete</button>
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
  value: string;
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

export default ShopOwnerDetails;
