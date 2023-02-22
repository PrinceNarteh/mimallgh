import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useRouter } from "next/router";
import { api } from "../../utils/api";
import { mapLevelToText } from "../../utils/mapper";

const AdministratorsList = () => {
  const router = useRouter();
  const { data, isSuccess } = api.users.getUsersByRole.useQuery({
    role: "admin",
  });

  const navigate = (adminId: string) =>
    router.push(`/admin/administrators/${adminId}`);

  return (
    <div className="mx-auto max-w-5xl">
      <div className="w-full py-4 px-2">
        <table className="w-full border-separate border-spacing-y-7">
          <thead>
            <tr>
              <th className="w-10">
                <input type="checkbox" className="w-20" />
              </th>
              <th className="w-10">No</th>
              <th className="">Full Name</th>
              <th className="w-40">Email</th>
              <th className=" w-40">Phone Number</th>
              <th className="">Level</th>
              <th className=" w-20">Option</th>
            </tr>
          </thead>
          <tbody>
            {isSuccess &&
              data?.map((admin, idx) => (
                <tr
                  className="cursor-pointer rounded bg-light-gray"
                  onClick={() => navigate(admin.id)}
                  key={idx}
                >
                  <td className="text-center">
                    <input type="checkbox" />
                  </td>
                  <td className="py-5 text-center">{idx + 1}</td>
                  <td className="py-5 text-center">{`${admin.firstName} ${admin.middleName} ${admin.lastName}`}</td>
                  <td className="py-5 text-center">{admin.email}</td>
                  <td className="py-5 text-center">{admin.phoneNumber}</td>
                  <td className="py-5 text-center">
                    {mapLevelToText(admin.level)}
                  </td>
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

export default AdministratorsList;
