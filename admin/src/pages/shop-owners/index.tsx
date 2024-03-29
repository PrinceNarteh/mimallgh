import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useRouter } from "next/router";
import { api } from "../../utils/api";
import Loader from "../../components/Loader";

const ShopOwnersList = () => {
  const router = useRouter();
  const { data, isLoading } = api.users.getAllShopOwners.useQuery();

  const navigate = (shopOwnerId: string) =>
    router.push(`/shop-owners/${shopOwnerId}`);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="mx-auto max-w-5xl">
      <div className="w-full py-4 px-2">
        <table className="w-full border-separate border-spacing-y-7">
          <thead>
            <tr>
              <th className="w-10">
                <input type="checkbox" className="w-20" />
              </th>
              <th className=" w-10">No</th>
              <th className="w-40">Full Name</th>
              <th className="w-40">Email</th>
              <th className=" w-40">Phone Number</th>
              <th className="">Shop Name</th>
              <th className=" w-20">Option</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((shopOwner, idx) => (
              <tr
                className="cursor-pointer rounded bg-light-gray"
                onClick={() => {
                  navigate(shopOwner.id).catch((error) => console.log(error));
                }}
                key={idx}
              >
                <td className="text-center">
                  <input type="checkbox" />
                </td>
                <td className="py-5 text-center">{idx + 1}</td>
                <td className="py-5 text-center">{`${
                  shopOwner.firstName || ""
                } ${shopOwner.middleName || ""} ${
                  shopOwner.lastName || ""
                }`}</td>
                <td className="py-5 text-center">{shopOwner.email}</td>
                <td className="py-5 text-center">{shopOwner.phoneNumber}</td>
                <td className="py-5 text-center">{shopOwner.shop?.name}</td>
                <td className="flex justify-center py-5">
                  <BsThreeDotsVertical />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShopOwnersList;
