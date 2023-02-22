import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { MdArrowBackIosNew } from "react-icons/md";

import { Button } from "../../../../components/admin/Button";
import Card from "../../../../components/admin/Card";
import Modal from "../../../../components/admin/Modal";
import { api } from "../../../../utils/api";
import { capitalize } from "../../../../utils/utilities";

const ShopDetails = () => {
  const {
    query: { shopId },
    push,
  } = useRouter();
  const [openDialog, setOpenDialog] = useState(false);

  if (!shopId) {
    push(`/admin/shops`);
  }
  const { data } = api.shops.getShopById.useQuery(
    { shopId: shopId as string },
    {
      cacheTime: 10000,
    }
  );
  const deleteShop = api.shops.deleteShop.useMutation();

  const handleDelete = () => setOpenDialog(true);

  function confirmDelete(choose: boolean) {
    if (choose) {
      deleteShop.mutate(
        { id: shopId as string },
        {
          onSuccess: () => {
            toast.success("Admin deleted successfully!");
            setOpenDialog(false);
            push(`/admin/shops`);
          },
        }
      );
    } else {
      setOpenDialog(false);
    }
  }

  return (
    <div className="pb-10">
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
            <div>{capitalize(data?.location || "")}</div>
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

        {data?.branches.length
          ? data.branches.map((branch, index) => (
              <Card
                heading={`${capitalize(branch.location)} Branch`}
                key={index}
              >
                <div className="flex items-center justify-between bg-dark-gray py-4 px-4">
                  <div className="font-bold">Location</div>
                  <div>{capitalize(branch.location)}</div>
                </div>
                <div className="flex items-center justify-between  py-4 px-4">
                  <div className="font-bold">Address</div>
                  <div>{branch.address}</div>
                </div>
                <div className="flex items-center justify-between bg-dark-gray py-4 px-4">
                  <div className="font-bold">Phone Number</div>
                  <div>{branch.phoneNumber}</div>
                </div>
              </Card>
            ))
          : null}

        <div className="flex items-center justify-end gap-5">
          <Link href={`/admin/shops/${data?.id}/edit`} className="link">
            Edit
          </Link>
          <Button onClick={handleDelete} variant="danger">
            Delete
          </Button>
        </div>
      </div>
      {openDialog ? (
        <Modal
          onDialog={confirmDelete}
          message={openDialog ? `${data?.name}` : ""}
        />
      ) : null}
    </div>
  );
};

export default ShopDetails;
