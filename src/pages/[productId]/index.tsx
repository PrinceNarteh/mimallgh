import React from "react";
import productOne from "@/assets/images/product-1.jpg";
import Image from "next/image";

const ProductDetails = () => {
  return (
    <div className="max-w-7xl mx-auto my-5">
      <div className="relative px-7 flex flex-col gap-5 md:flex-row">
        <div className="md:sticky top-10 h-fit">
          <div className="relative h-[400px] flex justify-center">
            <Image
              src={productOne}
              alt="product-one"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="flex gap-3 justify-center">
            <div className="relative w-20 h-20 rounded border border-gray-400 cursor-pointer">
              <Image
                src={productOne}
                alt="product-one"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="relative w-20 h-20 rounded border border-gray-400 cursor-pointer">
              <Image
                src={productOne}
                alt="product-one"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="relative w-20 h-20 rounded border border-gray-400 cursor-pointer">
              <Image
                src={productOne}
                alt="product-one"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="relative w-20 h-20 rounded border border-gray-400 cursor-pointer">
              <Image
                src={productOne}
                alt="product-one"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
        <div className="min-h-96">
          <h3 className="text-2xl font-semibold text-gray-700 border-b border-b-gray-400 pb-3">
            Coca Cola Plastic bottle 1.5L No Sugar
          </h3>
          <p className="flex items-start my-3 tracking-widest">
            <span className="text-xl">¢</span>
            <span className="text-4xl">123</span>
            <span className="text-xl">50</span>
          </p>
          <div className="text-gray-500">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
              fugiat, labore voluptatum quidem id quia qui molestias enim magnam
              reiciendis aut eligendi corporis temporibus beatae placeat!
              Consequatur eum nemo aperiam?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
              fugiat, labore voluptatum quidem id quia qui molestias enim magnam
              reiciendis aut eligendi corporis temporibus beatae placeat!
              Consequatur eum nemo aperiam?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
              fugiat, labore voluptatum quidem id quia qui molestias enim magnam
              reiciendis aut eligendi corporis temporibus beatae placeat!
              Consequatur eum nemo aperiam?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
              fugiat, labore voluptatum quidem id quia qui molestias enim magnam
              reiciendis aut eligendi corporis temporibus beatae placeat!
              Consequatur eum nemo aperiam?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
              fugiat, labore voluptatum quidem id quia qui molestias enim magnam
              reiciendis aut eligendi corporis temporibus beatae placeat!
              Consequatur eum nemo aperiam?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
              fugiat, labore voluptatum quidem id quia qui molestias enim magnam
              reiciendis aut eligendi corporis temporibus beatae placeat!
              Consequatur eum nemo aperiam?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
              fugiat, labore voluptatum quidem id quia qui molestias enim magnam
              reiciendis aut eligendi corporis temporibus beatae placeat!
              Consequatur eum nemo aperiam?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
              fugiat, labore voluptatum quidem id quia qui molestias enim magnam
              reiciendis aut eligendi corporis temporibus beatae placeat!
              Consequatur eum nemo aperiam?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
              fugiat, labore voluptatum quidem id quia qui molestias enim magnam
              reiciendis aut eligendi corporis temporibus beatae placeat!
              Consequatur eum nemo aperiam?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
              fugiat, labore voluptatum quidem id quia qui molestias enim magnam
              reiciendis aut eligendi corporis temporibus beatae placeat!
              Consequatur eum nemo aperiam?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
              fugiat, labore voluptatum quidem id quia qui molestias enim magnam
              reiciendis aut eligendi corporis temporibus beatae placeat!
              Consequatur eum nemo aperiam?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
              fugiat, labore voluptatum quidem id quia qui molestias enim magnam
              reiciendis aut eligendi corporis temporibus beatae placeat!
              Consequatur eum nemo aperiam?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
              fugiat, labore voluptatum quidem id quia qui molestias enim magnam
              reiciendis aut eligendi corporis temporibus beatae placeat!
              Consequatur eum nemo aperiam?
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10 px-7">
        <h3 className="font-semibold text-2xl sh-underline">
          Related Products
        </h3>
        <div className="flex justify-center flex-wrap gap-5 h-60">
          <div className="h-60 w-60 cursor-pointer">
            <div className="relative h-40 w-60">
              <Image
                src={productOne}
                alt="product-one"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="h-20">
              <h4 className="text-blue-700 line-clamp-2 font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis, id?
              </h4>
              <p className="flex items-start my-3 tracking-wider mt-1">
                <span className="">¢</span>
                <span className="text-2xl">123</span>
                <span className="">50</span>
              </p>
            </div>
          </div>
          <div className="h-60 w-60 cursor-pointer">
            <div className="relative h-40 w-60">
              <Image
                src={productOne}
                alt="product-one"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="h-20">
              <h4 className="text-blue-700 line-clamp-2 font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis, id?
              </h4>
              <p className="flex items-start my-3 tracking-wider mt-1">
                <span className="">¢</span>
                <span className="text-2xl">123</span>
                <span className="">50</span>
              </p>
            </div>
          </div>
          <div className="h-60 w-60 cursor-pointer">
            <div className="relative h-40 w-60">
              <Image
                src={productOne}
                alt="product-one"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="h-20">
              <h4 className="text-blue-700 line-clamp-2 font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis, id?
              </h4>
              <p className="flex items-start my-3 tracking-wider mt-1">
                <span className="">¢</span>
                <span className="text-2xl">123</span>
                <span className="">50</span>
              </p>
            </div>
          </div>
          <div className="h-60 w-60 cursor-pointer">
            <div className="relative h-40 w-60">
              <Image
                src={productOne}
                alt="product-one"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="h-20">
              <h4 className="text-blue-700 line-clamp-2 font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis, id?
              </h4>
              <p className="flex items-start my-3 tracking-wider mt-1">
                <span className="">¢</span>
                <span className="text-2xl">123</span>
                <span className="">50</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
