import { useRouter } from "next/router";
import { api } from "../../utils/api";
import Loader from "../../components/Loader";

const Shops = () => {
  const router = useRouter();
  const { data, isLoading } = api.shops.getAllShops.useQuery();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="mx-auto max-w-5xl">
      <div className="w-full py-4 px-2">
        <table className="w-full border-separate border-spacing-y-7">
          <thead>
            <tr>
              <th className="w-16">No</th>
              <th className="text-left">Shop Name</th>
              <th className="w-40">Shop Owner</th>
              <th className="w-40">Location</th>
              <th className=" w-40">Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((shop, idx) => (
              <tr
                className="cursor-pointer rounded bg-light-gray"
                onClick={() => {
                  router
                    .push(`/shops/${shop.id}`)
                    .catch((error) => console.log(error));
                }}
                key={idx}
              >
                <td className="py-5 text-center ">{idx + 1}</td>
                <td className="py-5 text-left">{shop.name}</td>
                <td className="py-5 text-center ">
                  <div>{`${shop?.owner.firstName || ""} ${
                    shop?.owner.middleName || ""
                  } ${shop?.owner.lastName || ""}`}</div>
                </td>
                <td className="py-5 text-center">{shop.location}</td>
                <td className="py-5 text-center ">{shop.phoneNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Shops;
