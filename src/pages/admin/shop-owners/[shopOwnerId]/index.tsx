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
          <div className="flex items-center justify-between py-4 px-4">
            <div className="font-bold">Name</div>
            <div>{`${data?.firstName} ${data?.middleName} ${data?.lastName}`}</div>
          </div>
          <div className="flex items-center justify-between bg-dark-gray py-4 px-4">
            <div className="font-bold">Email</div>
            <div>{data?.email}</div>
          </div>
          <div className="flex items-center justify-between py-4 px-4">
            <div className="font-bold">Phone Number</div>
            <div>{data?.phoneNumber}</div>
          </div>
          <div className="flex items-center justify-between bg-dark-gray py-4 px-4">
            <div className="font-bold">Address</div>
            <div>{data?.address}</div>
          </div>
          <div className="flex items-center justify-between py-4 px-4">
            <div className="font-bold">Phone Number</div>
            <div>{data?.phoneNumber}</div>
          </div>
          <div className="flex items-center justify-between bg-dark-gray py-4 px-4">
            <div className="font-bold">Status</div>
            <div>{data?.active ? "Active" : "Inactive"}</div>
          </div>
          <div className="flex items-center justify-between py-4 px-4">
            <div className="font-bold">Date Joined</div>
            <div>{data?.createdAt.toDateString()}</div>
          </div>
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

export default ShopOwnerDetails;
