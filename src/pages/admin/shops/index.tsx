import React from "react";
import { useRouter } from "next/router";
import { useToaster } from "react-hot-toast";

const Shops = () => {
  const router = useRouter();

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
              <th className="">Shop Name</th>
              <th className="w-40">Shop Owner</th>
              <th className="w-40">Location</th>
              <th className=" w-40">Phone Number</th>
              <th className=" w-20">D</th>
            </tr>
          </thead>
          <tbody>
            <tr
              className="cursor-pointer rounded bg-light-gray"
              onClick={() => router.push(`/admin/shops/${123}`)}
            >
              <td className="text-center">
                <input type="checkbox" />
              </td>
              <td className="py-5 text-center ">1</td>
              <td className="py-5 text-center ">The Web</td>
              <td className="py-5 text-center ">Jane Doe</td>
              <td className="py-5 text-center">Behind ATL Hall</td>
              <td className="py-5 text-center ">020 123 4567</td>
              <td className="py-5 text-center ">D</td>
            </tr>
            <tr className="rounded bg-light-gray">
              <td className="text-center">
                <input type="checkbox" />
              </td>
              <td className="py-5 text-center ">2</td>
              <td className="py-5 text-center ">Gye Nyame Cold Store</td>
              <td className="py-5 text-center ">John Doe</td>
              <td className="py-5 text-center">Behind ATL Hall</td>
              <td className="py-5 text-center ">024 123 4567</td>
              <td className="py-5 text-center ">D</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Shops;
