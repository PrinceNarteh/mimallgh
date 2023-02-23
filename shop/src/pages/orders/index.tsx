import { useRouter } from "next/router";
import React from "react";
import { BiSearch } from "react-icons/bi";

const orders = [
  {
    no: 21,
    ref: "RAG12G",
    customer: "John Doe",
    date: "21 Jun 23",
    status: "Paid",
    amount: 1234.0,
  },
  {
    no: 22,
    ref: "	TAG19G",
    customer: "Rose Smith",
    date: "22 Jun 23",
    status: "Paid",
    amount: 2234.0,
  },
  {
    no: 23,
    ref: "	EAB12G",
    customer: "Jane Doe",
    date: "23 Jun 23",
    status: "Paid",
    amount: 1205.0,
  },
];

const Orders = () => {
  const router = useRouter();

  return (
    <div className="mx-auto max-w-5xl">
      <div className=" flex justify-center">
        <div className="flex items-center rounded-lg border p-2">
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
              <th className=" w-20 pr-5">Total</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, idx) => (
              <tr
                onClick={() => router.push(`/orders/${order.no}`)}
                className="cursor-pointer rounded bg-light-gray"
              >
                <td className="text-center">
                  <input type="checkbox" />
                </td>
                <td className="py-5 text-center ">{order.no}</td>
                <td className="py-5 text-center ">{order.ref}</td>
                <td className="py-5 text-center ">{order.date}</td>
                <td className="py-5 text-center">{order.customer}</td>
                <td className="py-5 text-center ">{order.status}</td>
                <td className="py-5 pr-5 text-center">{order.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
