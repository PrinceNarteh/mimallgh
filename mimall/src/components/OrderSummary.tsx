const OrderSummary = () => {
  return (
    <div className="mx-auto w-full max-w-4xl overflow-x-auto rounded-md border border-gray-400 p-5">
      <div className="w-full space-y-5">
        <h4 className="sh-underline relative md:text-3xl">Order Summary</h4>
        <div className="relative overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 text-xs uppercase text-gray-700">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3">
                  Seller
                </th>
                <th scope="col" className="px-6 py-3">
                  Qty
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Unit Price (¢)
                </th>
                <th scope="col" className="px-6 py-3">
                  Amt
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b bg-white">
                <th
                  scope="row"
                  className="whitespace-nowrap px-6 py-4 font-medium text-gray-900"
                >
                  Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">2</td>
                <td className="px-6 py-4">$2999</td>
                <td className="px-6 py-4">$2999</td>
              </tr>
              <tr className="border-b bg-white">
                <th
                  scope="row"
                  className="whitespace-nowrap px-6 py-4 font-medium text-gray-900"
                >
                  Microsoft Surface Pro
                </th>
                <td className="px-6 py-4">White</td>
                <td className="px-6 py-4">10</td>
                <td className="px-6 py-4">$1999</td>
                <td className="px-6 py-4">$1999</td>
              </tr>
              <tr className="border-b bg-white">
                <th
                  scope="row"
                  className="whitespace-nowrap px-6 py-4 font-medium text-gray-900"
                >
                  Magic Mouse 2
                </th>
                <td className="px-6 py-4">Black</td>
                <td className="px-6 py-4">8</td>
                <td className="px-6 py-4">$99</td>
                <td className="px-6 py-4">$99</td>
              </tr>
              <tr className="bg-white">
                <th
                  scope="row"
                  className="whitespace-nowrap px-6 py-2 font-bold text-gray-900"
                >
                  Sub-Total
                </th>
                <td className="px-6 py-2"></td>
                <td className="px-6 py-2"></td>
                <td className="px-6 py-2"></td>
                <td className="px-6 py-2">$2299</td>
              </tr>
              <tr className="bg-white">
                <th
                  scope="row"
                  className="whitespace-nowrap px-6 py-2 font-bold text-gray-900"
                >
                  Service Charge
                </th>
                <td className="px-6 py-2"></td>
                <td className="px-6 py-2"></td>
                <td className="px-6 py-2">$</td>
                <td className="px-6 py-2">$1</td>
              </tr>
              <tr className="bg-white">
                <th
                  scope="row"
                  className="whitespace-nowrap px-6 py-2 font-bold text-gray-900"
                >
                  Delivery Charge
                </th>
                <td className="px-6 py-2"></td>
                <td className="px-6 py-2"></td>
                <td className="px-6 py-2"></td>
                <td className="px-6 py-2">$99</td>
              </tr>
              <tr className="border-y-2 bg-white">
                <th
                  scope="row"
                  className="whitespace-nowrap px-6 py-4 font-bold text-gray-900"
                >
                  Total
                </th>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4">$99</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
