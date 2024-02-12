/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const Card = ({
  title,
  description,
  imageurl,
  redirecturl,
}: {
  title: string;
  description: string;
  imageurl: string;
  redirecturl: string;
}) => {
  return (
    <div className="h-80 lg:h-96 overflow-hidden">
      <div className="w-full h-full bg-neutral-800 rounded-3xl text-neutral-200 p-4 flex flex-col items-start justify-center gap-3 hover:bg-gray-900 hover:shadow-2xl hover:shadow-sky-400 transition-shadow">
        <div className="w-full h-[60%] bg-sky-300 rounded-2xl">
          <img
            src={imageurl}
            alt=""
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div className="h-[45%] overflow-hidden">
          <p className="font-extrabold text-lg">{title}</p>
          <p className="text-sm pt-2">{description}</p>
        </div>
        <div className="h-[12%]">
          <Link href={redirecturl}>
            <button className="bg-[#08ACF2] font-extrabold p-2 px-6 rounded-xl hover:bg-sky-500 transition-colors">
              Learn more
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
