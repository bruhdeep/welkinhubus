/* eslint-disable @next/next/no-img-element */
import React from "react";

const Card = ({
  tier,
  price,
  cpu,
  ram,
  storage,
}: {
  tier: string;
  price: string;
  cpu: string;
  ram: string;
  storage: string;
}) => {
  return (
    <div className="">
      <div className="flex flex-col bg-white border-2 rounded-3xl w-60">
        <div className="px-6 py-8 sm:p-9 sm:pb-6">
          <div className="grid items-center justify-center w-full grid-cols-1 text-left">
          <h2>Virtual Private Server</h2>
            <div className="">
              <h2 className="text-2xl font-bold tracking-tighter text-black lg:text-3xl">
                {tier}
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                {cpu}CORE CPU
              </p>
              <p className="mt-2 text-sm text-gray-500">
                {ram}GB RAM
              </p>
              <p className="mt-2 text-sm text-gray-500">
                {storage}GB Storage
              </p>
              <p className="mt-2 text-sm text-gray-500">
                24/7 Customer Support
              </p>
            </div>
            <div className="mt-6">
              <p>
                <span className="text-5xl font-light tracking-tight text-black">
                  ${price}
                </span>
                <span className="text-base font-medium text-gray-500">
                  {" "}
                  /mo{" "}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex px-6 pb-8 sm:px-8">
          <a
            aria-describedby="tier-company"
            className="flex items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
            href="/"
          >
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
