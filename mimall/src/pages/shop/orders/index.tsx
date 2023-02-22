import React from "react";
import { BiSearch } from "react-icons/bi";

const orders = [
  {
    no: 29,
    ref: "CH1ZXA",
    date: "21 Jun 23",
  },
];

const Orders = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className=" flex justify-center">
        <div className="border p-2 rounded-lg flex items-center">
          <input
            className="bg-transparent outline-none"
            type="search"
            name=""
            id=""
            placeholder="Search order..."
          />
          <BiSearch className="text-3xl text-gray-500" />
        </div>
      </div>
      <div className="w-full py-4 px-2">
        <table className="w-full border-separate border-spacing-y-7">
          <thead>
            <tr>
              <th className="w-10">
                <input type="checkbox" className="w-20" />
              </th>
              <th className=" w-20">No</th>
              <th className=" w-40">Ref</th>
              <th className=" w-40">Date</th>
              <th className="">Customer</th>
              <th className=" w-40">Status</th>
              <th className=" w-20">Total</th>
              <th className=" w-20">D</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-light-gray rounded">
              <td className="text-center">
                <input type="checkbox" />
              </td>
              <td className="py-5 text-center ">21</td>
              <td className="py-5 text-center ">RAG12G</td>
              <td className="py-5 text-center ">21 Jun 23</td>
              <td className="py-5 text-center">John Doe</td>
              <td className="py-5 text-center ">Paid</td>
              <td className="py-5 text-center ">$1234.00</td>
              <td className="py-5 text-center ">D</td>
            </tr>
            <tr className="bg-light-gray rounded">
              <td className="text-center">
                <input type="checkbox" />
              </td>
              <td className="py-5 text-center ">21</td>
              <td className="py-5 text-center ">TAG19G</td>
              <td className="py-5 text-center ">23 Jun 23</td>
              <td className="py-5 text-center">Rose Smith</td>
              <td className="py-5 text-center ">Paid</td>
              <td className="py-5 text-center ">$2234.00</td>
              <td className="py-5 text-center ">D</td>
            </tr>
            <tr className="bg-light-gray rounded">
              <td className="text-center">
                <input type="checkbox" />
              </td>
              <td className="py-5 text-center ">29</td>
              <td className="py-5 text-center ">EAB12G</td>
              <td className="py-5 text-center ">20 Jun 23</td>
              <td className="py-5 text-center">Jane Doe</td>
              <td className="py-5 text-center ">Paid</td>
              <td className="py-5 text-center ">$1205.00</td>
              <td className="py-5 text-center ">D</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
