import Image from "next/image";
import Link from "next/link";

const MoreCard = () => {
  return (
    <div className="relative flex h-96 flex-col rounded-md bg-white shadow-md">
      <Link href={`/web-store/1`}>
        <div className="flex gap-2 p-2">
          <span className="block h-12 w-12 rounded-full bg-[#ff0000]"></span>
          <div>
            <h4 className="font-semibold">The Web Super Market</h4>
            <p className="text-sm">Old Site - Behind ATL Hall</p>
          </div>
        </div>
      </Link>
      <Link href={`/products/1`} className="block flex-1">
        <div className="flex h-full flex-col">
          <div className="relative flex-1 rounded-md bg-gray-500 bg-opacity-20 p-5">
            <Image src="/images/iphone-2.jpg" fill alt="" />
          </div>
          <div className="flex h-16 gap-3 p-4 py-2">
            <div className="">
              <h4 className="font-semibold line-clamp-1">
                Lorem, ipsum dolor sit amet elit sunt.
              </h4>
              <p className="text-gray-500">Store price: ¢120.50</p>
            </div>
            <div className="flex w-14 items-center justify-center">
              <p className="flex items-start tracking-widest text-[#ff0000] ">
                ¢123.50
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MoreCard;
