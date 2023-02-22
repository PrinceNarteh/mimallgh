import { products } from "../../../data/data";
import Image from "next/image";
import { BiSearch } from "react-icons/bi";
import Card from "../../components/Card";
import Status from "../../components/Status";
import { useRouter } from "next/router";

const ProductList = () => {
  const router = useRouter();

  const navigate = (productId: string) => router.push(`/products/${productId}`);

  return (
    <div className="mx-auto max-w-6xl">
      <Card heading="Product List">
        <div className="flex items-center rounded border border-gray-600 bg-light-gray px-2">
          <BiSearch className="text-3xl text-gray-500" />
          <input
            type="search"
            placeholder="Search for product"
            className="w-full bg-transparent p-2  outline-none "
          />
        </div>

        <table className="mt-5 w-full border-separate">
          <thead>
            <tr className="text-left text-xl">
              <th className="w-14 pb-3 text-center">
                <input type="checkbox" />
              </th>
              <th className="px-2 pb-3">Product</th>
              <th className="w-40 px-2 pb-3 text-center">Category</th>
              <th className="w-40 px-2 pb-3 text-center">Stock</th>
              <th className="w-40 px-2 pb-3 text-center">Price</th>
            </tr>
          </thead>

          <tbody className="border-separate border-spacing-10 space-y-20">
            {products.map((product, idx) => (
              <tr
                className={`${
                  idx % 2 === 0 && "bg-gray-500 bg-opacity-20"
                } cursor-pointer`}
                key={idx}
                onClick={() => navigate(product.id)}
              >
                <td className="py-7 text-center">
                  <input type="checkbox" name="" id="" />
                </td>
                <td className="px-2">
                  <div className="flex items-center gap-5">
                    <div className="relative h-12 w-12">
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

export default ProductList;
