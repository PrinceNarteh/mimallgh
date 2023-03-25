import Image from "next/image";
import Back from "../../../components/Back";
import Card from "../../../components/Card";

const ProductDetails = () => {
  return (
    <div className="mx-auto w-11/12 space-y-3">
      <Back />
      <Card heading="Product Detail">
        <h3 className="mb-2 text-2xl font-semibold">
          Lorem ipsum dolor sit amet.
        </h3>
        <div className="min-h-96 grid grid-cols-12">
          <div className="col-span-5 space-y-3">
            <div className="relative h-[400px] bg-slate-500">
              <Image
                src={"/images/iphone-1.jpg"}
                fill
                style={{ objectFit: "cover" }}
                alt=""
              />
            </div>
            <div className="flex gap-3">
              {Array(4)
                .fill(null)
                .map((_, idx) => (
                  <div className=" relative h-28 w-40">
                    <Image
                      src={"/images/iphone-1.jpg"}
                      fill
                      style={{ objectFit: "cover" }}
                      alt=""
                    />
                  </div>
                ))}
            </div>
          </div>
          <div className="col-span-7 px-5">
            <Item label="Price" value="20" dark />
            <Item label="Discount Percentage" value="123 Old Site Road" />
            <Item label="Stock" value="123 Old Site Road" dark />
            <Item label="Brand" value="123 Old Site Road" />
            <Item label="Shop" value="123 Old Site Road" dark />
            <Item label="Category" value="123 Old Site Road" />
          </div>
        </div>
      </Card>
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
    className={`flex items-center justify-between py-4 px-4 ${
      dark ? "bg-dark-gray" : ""
    }`}
  >
    <div className="font-bold">{label}</div>
    <div>{value}</div>
  </div>
);

export default ProductDetails;
