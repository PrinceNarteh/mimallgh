import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import Card from "../../../../components/admin/Card";
import { api } from "../../../../utils/api";

const ShopDetails = () => {
  const {
    query: { shopId },
    push,
  } = useRouter();

  if (!shopId) {
    push(`/admin/shops`);
  }

  const { data } = api.shops.getShopById.useQuery(shopId as string);

  console.log(data);

  return (
    <div>
      <Link href={`/admin/shops`} className="flex cursor-pointer items-center">
        <MdArrowBackIosNew className="mr-2" /> Back
      </Link>
      <div className="mx-auto max-w-3xl space-y-5">
        <Card heading="Shop Details">
          <div className="flex items-center justify-between py-4 px-4">
            <div className="font-bold">Name</div>
            <div>{data?.name}</div>
          </div>
          <div className="flex items-center justify-between bg-dark-gray py-4 px-4">
            <div className="font-bold">Owner</div>
            <div>{`${data?.owner.firstName} ${data?.owner.middleName} ${data?.owner.lastName}`}</div>
          </div>
          <div className="flex items-center justify-between py-4 px-4">
            <div className="font-bold">Location</div>
            <div>{data?.location}</div>
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
            <div className="font-bold">Description</div>
            <div>{data?.description}</div>
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

export default ShopDetails;
