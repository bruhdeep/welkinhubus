/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

import { GoPersonFill } from "react-icons/go";
import { FaArrowRightLong } from "react-icons/fa6";

const Navbar = ({
  navimg,
  navtext,
  navdesc,
  learnmorelink,
}: {
  navimg: string;
  navtext: string;
  navdesc: string;
  learnmorelink: string;
}) => {
  const backgroundImageUrl = `url(${navimg})`;

  return (
    <div
      className="h-[40rem] bg-cover rounded-br-[8rem] text-white"
      style={{ backgroundImage: backgroundImageUrl }}
    >
      <div className="flex justify-between lg:px-[20%] px-[5%] pt-5">
        <div>
          <img src="welkinlogo.png" alt="" />
        </div>
        <div>
          <div className="hidden lg:flex ">
            <ul className="menu menu-horizontal px-1 ">
              <li className="">
                <a>Home</a>
              </li>
              <li>
                <details>
                  <summary>Services</summary>
                  <ul className="text-black">
                    <li className="drowdown">
                      <a>Managed Services</a>
                    </li>
                    <li>
                      <a>IT Consulting and Services on Modern Technologies</a>
                    </li>
                    <li>
                      <a>Software Development and Consulting</a>
                    </li>
                    <li>
                      <a>Education and Placement</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a>About Us</a>
              </li>
              <li>
                <a>Contact Us</a>
              </li>
            </ul>
            <div className="flex gap-5 items-center">
              <button className="btn btn-sm bg-blue-500 border-none text-white">
                Support
              </button>
              <button>
                <GoPersonFill size={25} />
              </button>
            </div>
          </div>
          <div className="dropdown dropdown-bottom dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black"
            >
              <li>
                <a>Homne</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="h-full flex items-center px-[5%] lg:px-[20%]">
        <div className="w-[50%]">
          <p className="text-[2.5rem] font-extrabold">{navtext}</p>
          <p>{navdesc}</p>
          <br />
          <Link href={learnmorelink}>
            <button className="btn btn-neutral bg-[#08ACF2] text-white border-none rounded-2xl">
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
