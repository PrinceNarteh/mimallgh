import React from "react";
import { BiSearch } from "react-icons/bi";
import Card from "../../Card";
import Image from "next/image";
import { products } from "../../../../data/data";
import Status from "../../Status";

const page = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Card heading="Product List">
        <div className="bg-light-gray flex items-center border border-gray-600 px-2 rounded">
          <BiSearch className="text-3xl text-gray-500" />
          <input
            type="search"
            placeholder="Search for product"
            className="w-full bg-transparent outline-none  p-2 "
          />
        </div>

        <table className="w-full mt-5 border-separate">
          <thead>
            <tr className="text-left text-xl">
              <th className="w-14 text-center pb-3">
                <input type="checkbox" />
              </th>
              <th className="px-2 pb-3">Product</th>
              <th className="w-40 px-2 text-center pb-3">Category</th>
              <th className="w-40 px-2 text-center pb-3">Stock</th>
              <th className="w-40 px-2 text-center pb-3">Price</th>
            </tr>
          </thead>

          <tbody className="space-y-20 border-separate border-spacing-10">
            {products.map((product, idx) => (
              <tr
                className={`${idx % 2 === 0 && "bg-gray-500 bg-opacity-20"}`}
                key={idx}
              >
                <td className="py-7 text-center">
                  <input type="checkbox" name="" id="" />
                </td>
                <td className="px-2">
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 relative">
                      <Image
                        src={product.image}
                        style={{ objectFit: "contain" }}
                        alt={product.name}
                        height="48"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{product.name}</h3>
                      <p className="text-md">
                        ID: {product.id} | SKU: {product.SKU}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-2 text-center">{product.category}</td>
                <td className="px-2 text-center">
                  <Status
                    variant={product.stock === 0 ? "danger" : "success"}
                  >{`${
                    product.stock === 0 ? "Out of" : `${product.stock} in`
                  } stock`}</Status>
                </td>
                <td className="px-2 text-center">10</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default page;
