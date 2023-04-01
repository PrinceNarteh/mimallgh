import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Back from "../../../components/Back";
import Card from "../../../components/Card";
import { api } from "../../../utils/api";
import { capitalize } from "../../../utils/utilities";
import Loader from "../../../components/Loader";

const ProductDetails = () => {
  const {
    query: { productId },
  } = useRouter();

  const { isLoading, data } = api.products.getProductById.useQuery({
    id: productId as string,
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="mx-auto w-11/12 space-y-3 pb-5">
      <Back />
      <Card heading="Product Detail">
        <h3 className="mb-2 text-2xl font-semibold">{data?.title}</h3>
        <div className="min-h-96 grid grid-cols-1 space-y-5 md:grid-cols-12">
          <div className="col-span-5 space-y-3">
            <div className="relative h-[400px] bg-slate-500">
              <Image
                src={data?.images[0]?.secure_url as string}
                sizes="400"
                fill
                style={{ objectFit: "contain" }}
                alt=""
                priority
              />
            </div>
            <div className="flex justify-between gap-3 overflow-x-auto">
              {data?.images.map((image, idx) => (
                <div
                  key={idx}
                  className="relative h-[100px] w-[100px] shrink-0"
                >
                  <Image
                    src={image.secure_url}
                    fill
                    sizes="100"
                    style={{ objectFit: "contain" }}
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-7 px-5">
            <Item label="Price" value={`¢${data?.price || ""}`} dark />
            <Item
              label="Discount Percentage"
              value={`¢${data?.discountPercentage || ""}`}
            />
            <Item label="Stock" value={`${data?.stock || ""}`} dark />
            <Item label="Brand" value={`${data?.brand || ""}`} />
            <Item
              label="Category"
              value={`${capitalize(data?.category || "")}`}
              dark
            />
            <Item label="Shop" value={`${data?.shop.name || ""}`} />
            <div className={`bg-dark-gray py-4 px-4`}>
              <div className="mb-3 font-bold">Description</div>
              <div className="line-clamp-5">{data?.description || ""}</div>
            </div>
          </div>
        </div>
      </Card>
      <div className="flex justify-end gap-5">
        <Link href={`/products/${data?.id}/edit`} className="link">
          Edit
        </Link>
        <button className="bg-red-500 py-2 px-4">Delete</button>
      </div>
    </div>
  );
};

const Item = ({
  label,
  value,
  dark = false,
}: {
  label: string;
  value: string;
  dark?: boolean;
}) => (
  <div
    className={`flex flex-col items-start justify-between py-4 px-4 ${
      dark ? "bg-dark-gray" : ""
    }`}
  >
    <div className="font-bold line-clamp-1">{label}</div>
    <div>{value}</div>
  </div>
);

export default ProductDetails;
