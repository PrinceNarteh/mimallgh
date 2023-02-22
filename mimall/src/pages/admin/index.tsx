import React from "react";
import Card from "../../components/admin/Card";
import { AiOutlineRise, AiOutlineFall } from "react-icons/ai";

const Home = () => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <Card heading="Total Sells">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-extrabold">$3799.00</h3>
            <div className="flex flex-col items-end">
              <div className="flex items-center gap-2 text-2xl">
                <AiOutlineRise className="font-bold text-green-500" /> 37.5%
              </div>
              <p className="text-xs">Compared to previous month</p>
            </div>
          </div>
        </Card>
        <Card heading="Average Order Value">
          <div className="flex items-center justify-between gap-5">
            <h3 className="text-xl font-extrabold">$279.00</h3>
            <div className="flex flex-col items-end">
              <div className="flex items-center gap-2 text-2xl">
                <AiOutlineFall className="font-bold text-red-500" /> 12.5%
              </div>
              <p className="text-xs">Compared to previous month</p>
            </div>
          </div>
        </Card>
        <Card heading="Total Orders">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-extrabold">600</h3>
            <div className="flex flex-col items-end">
              <div className="flex items-center gap-2 text-2xl">
                <AiOutlineRise className="font-bold text-green-500" /> 21.5%
              </div>
              <p className="text-xs">Compared to previous month</p>
            </div>
          </div>
        </Card>
      </div>
      <div className="mt-5">
        <Card heading="Recent Orders">
          <div className="overflow-auto">
            <table className="w-full max-w-full">
              <thead>
                <tr className="text-left">
                  <th className="w-20 px-2 py-4">No.</th>
                  <th className="w-32 px-2 py-4">Status</th>
                  <th className="max-w-xl px-2 py-4">Customer Name</th>
                  <th className="w-40 px-2 py-4">Date</th>
                  <th className="w-20 px-2 py-4">Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-500">
                <tr>
                  <td className="text-md whitespace-nowrap px-2 py-4">
                    #00745
                  </td>
                  <td className="text-md whitespace-nowrap px-2 py-4">
                    Pending
                  </td>
                  <td className="text-md whitespace-nowrap px-2 py-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </td>
                  <td className="text-md whitespace-nowrap px-2 py-4">
                    05-01-2023
                  </td>
                  <td className="text-md whitespace-nowrap px-2 py-4">
                    $2,742.00
                  </td>
                </tr>
                <tr>
                  <td className="text-md whitespace-nowrap px-2 py-4">
                    #00745
                  </td>
                  <td className="text-md whitespace-nowrap px-2 py-4">
                    Pending
                  </td>
                  <td className="text-md whitespace-nowrap px-2 py-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                  </td>
                  <td className="text-md whitespace-nowrap px-2 py-4">
                    05-01-2023
                  </td>
                  <td className="text-md whitespace-nowrap px-2 py-4">
                    $2,742.00
                  </td>
                </tr>
                <tr>
                  <td className="text-md whitespace-nowrap px-2 py-4">
                    #00745
                  </td>
                  <td className="text-md whitespace-nowrap px-2 py-4">
                    <span className="rounded-sm bg-blue-300 bg-opacity-30 p-1.5 text-xs font-medium uppercase tracking-wider text-blue-800">
                      Pending
                    </span>
                  </td>
                  <td className="text-md whitespace-nowrap px-2 py-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </td>
                  <td className="text-md whitespace-nowrap px-2 py-4">
                    05-01-2023
                  </td>
                  <td className="text-md whitespace-nowrap px-2 py-4">
                    $2,742.00
                  </td>
                </tr>
                <tr>
                  <td className="text-md whitespace-nowrap px-2 py-4">
                    #00745
                  </td>
                  <td className="text-md whitespace-nowrap px-2 py-4">
                    Pending
                  </td>
                  <td className="text-md whitespace-nowrap px-2 py-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </td>
                  <td className="text-md whitespace-nowrap px-2 py-4">
                    05-01-2023
                  </td>
                  <td className="text-md whitespace-nowrap px-2 py-4">
                    $2,742.00
                  </td>
                </tr>
                <tr>
                  <td className="text-md whitespace-nowrap px-2 py-4">
                    #00745
                  </td>
                  <td className="text-md whitespace-nowrap px-2 py-4">
                    Pending
                  </td>
                  <td className="text-md whitespace-nowrap px-2 py-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </td>
                  <td className="text-md whitespace-nowrap px-2 py-4">
                    05-01-2023
                  </td>
                  <td className="text-md whitespace-nowrap px-2 py-4">
                    $2,742.00
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Home;
