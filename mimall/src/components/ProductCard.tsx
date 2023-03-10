import Image from "next/image";
import Link from "next/link";

const ProductCard = () => {
  return (
    <div className="h-[260px] w-[190px]">
      <p className="mb-1 px-1 text-xs line-clamp-1">
        Lorem ipsum dolor sit amet.
      </p>
      <div className="shrink-0 cursor-pointer overflow-hidden rounded-md shadow-md">
        <div className="relative h-[190px] w-[190px]">
          <Link href={`/products/1`}>
            <Image
              src={`/images/product-1.jpg`}
              fill
              alt=""
              style={{ objectFit: "cover" }}
            />
          </Link>
        </div>
        <div className="px-2 py-1">
          <p className="text-sm line-clamp-1">Lorem ipsum dolor sit amet.</p>
          <p className="font-semibold">GH¢ 1234.00</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
