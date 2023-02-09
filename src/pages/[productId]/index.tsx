import React from "react";
import productOne from "../../../assets/images/product-1.jpg";
import Image from "next/image";

const ProductDetails = () => {
  return (
    <div className="mx-auto my-5 max-w-5xl">
      <div className="relative flex flex-col gap-5 px-7 md:flex-row">
        <div className="top-10 h-fit md:sticky">
          <div className="relative flex h-[400px] justify-center">
            <Image
              src={productOne}
              alt="product-one"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="flex justify-center gap-3">
            <div className="relative h-20 w-20 cursor-pointer rounded border border-gray-400">
              <Image
                src={productOne}
                alt="product-one"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="relative h-20 w-20 cursor-pointer rounded border border-gray-400">
              <Image
                src={productOne}
                alt="product-one"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="relative h-20 w-20 cursor-pointer rounded border border-gray-400">
              <Image
                src={productOne}
                alt="product-one"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="relative h-20 w-20 cursor-pointer rounded border border-gray-400">
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
          <h3 className="border-b border-b-gray-400 pb-3 text-2xl font-semibold text-gray-700">
            Coca Cola Plastic bottle 1.5L No Sugar
          </h3>
          <p className="my-3 flex items-start tracking-widest">
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
      <div className="mt-10 px-7 pb-5">
        <h3 className="sh-underline text-2xl font-semibold">
          Related Products
        </h3>
        <div className="flex h-60 flex-wrap justify-center gap-5 pt-5">
          <div className="h-60 w-52 cursor-pointer">
            <div className="relative h-40 w-60">
              <Image
                src={productOne}
                alt="product-one"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="h-20">
              <h4 className="font-semibold text-blue-700 line-clamp-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis, id?
              </h4>
              <p className="my-3 mt-1 flex items-start tracking-wider">
                <span className="">¢</span>
                <span className="text-2xl">123</span>
                <span className="">50</span>
              </p>
            </div>
          </div>
          <div className="h-60 w-52 cursor-pointer">
            <div className="relative h-40 w-60">
              <Image
                src={productOne}
                alt="product-one"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="h-20">
              <h4 className="font-semibold text-blue-700 line-clamp-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis, id?
              </h4>
              <p className="my-3 mt-1 flex items-start tracking-wider">
                <span className="">¢</span>
                <span className="text-2xl">123</span>
                <span className="">50</span>
              </p>
            </div>
          </div>
          <div className="h-60 w-52 cursor-pointer">
            <div className="relative h-40 w-60">
              <Image
                src={productOne}
                alt="product-one"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="h-20">
              <h4 className="font-semibold text-blue-700 line-clamp-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis, id?
              </h4>
              <p className="my-3 mt-1 flex items-start tracking-wider">
                <span className="">¢</span>
                <span className="text-2xl">123</span>
                <span className="">50</span>
              </p>
            </div>
          </div>
          <div className="h-60 w-52 cursor-pointer">
            <div className="relative h-40 w-60">
              <Image
                src={productOne}
                alt="product-one"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="h-20">
              <h4 className="font-semibold text-blue-700 line-clamp-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis, id?
              </h4>
              <p className="my-3 mt-1 flex items-start tracking-wider">
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
