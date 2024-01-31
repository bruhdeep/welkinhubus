/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

import { GoPersonFill } from "react-icons/go";
import { FaArrowRightLong } from "react-icons/fa6";

const Navbar = ({
  navimg,
  navtext,
  learnmorelink,
}: {
  navimg: string;
  navtext: string;
  learnmorelink: string;
}) => {
  const backgroundImageUrl = `url(${navimg})`;

  return (
    <div
      className="h-[40rem] bg-cover rounded-br-[8rem] text-white"
      style={{ backgroundImage: backgroundImageUrl }}
    >
      <div className="px-[20%] flex justify-between items-center pt-5">
        <div className="text-3xl">
          <img
            src="https://welkinhubus.com/wp-content/uploads/2023/08/cropped-welkin_hub-1-1-132x84-1-130x83.png"
            alt="LOGO"
          />
        </div>
        <div className="flex gap-10">
          <ul className="flex gap-5 text-md">
            <li className="hover:text-[#26C1FF] duration-300 cursor-pointer">
              Home
            </li>
            <li className="hover:text-[#26C1FF] duration-300 cursor-pointer">
              Services
            </li>
            <li className="hover:text-[#26C1FF] duration-300 cursor-pointer">
              About Us
            </li>
            <li className="hover:text-[#26C1FF] duration-300 cursor-pointer">
              Contact Us
            </li>
          </ul>
          <div className="text-sm flex gap-5 items-center">
            <button className="bg-[#08ACF2] px-3 py-1 rounded-2xl">
              Support
            </button>
            <GoPersonFill size={20} />
          </div>
        </div>
      </div>
      <div className="h-full flex items-center px-[20%]">
        <div className="w-[50%]">
          <p className="text-[2.5rem] font-extrabold">{navtext}</p>
          <br />
          <Link href={learnmorelink}>
            <button className="bg-[#08ACF2] rounded-2xl flex items-center gap-3 py-1 px-3 text-sm">
              Learn more
              <FaArrowRightLong />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
