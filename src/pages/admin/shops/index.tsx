import { useRouter } from "next/router";
import { api } from "../../../utils/api";

const Shops = () => {
  const router = useRouter();
  const { data, isSuccess } = api.shops.getAllShops.useQuery();

  console.log(data);

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
            {isSuccess &&
              data.map((shop, idx) => (
                <tr
                  className="cursor-pointer rounded bg-light-gray"
                  onClick={() => router.push(`/admin/shops/${shop.id}`)}
                  key={idx}
                >
                  <td className="text-center">
                    <input type="checkbox" />
                  </td>
                  <td className="py-5 text-center ">{idx + 1}</td>
                  <td className="py-5 text-center ">{shop.name}</td>
                  <td className="py-5 text-center ">Shop Owner</td>
                  <td className="py-5 text-center">{shop.location}</td>
                  <td className="py-5 text-center ">{shop.phoneNumber}</td>
                  <td className="py-5 text-center ">D</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Shops;
