/* eslint-disable react/no-unescaped-entities */
import Navbar from "@/components/Navbar";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const emailhosting = () => {
  return (
    <div>
      <Navbar
        navimg={"homebg.jpg"}
        navtext={"About Us"}
        learnmorelink={"#content"}
        navdesc={
          "Technology has driven the world. We, The Welkinhub, is an IT consulting company based in America providing various attractive tech solutions"
        }
      />
      <div id="content" className="lg:px-[20%] px-[2%] pt-16 flex gap-32">
        <div className="text-justify">
          <p className="text-3xl font-bold">
            Future-proof your company with Latest technology
          </p>
          <br />
          <p>
            The Welkinhub is a US based IT consulting company. We are a team of
            former IT managers, senior software engineers and business
            consultants that have worked in different industries. We advise and
            guide you to maximize operational efficiency by using the most
            innovative and up to date technology solutions. We help you to
            create a modern cloud-based system that is tailored according to
            your business to automate the business processes.
          </p>
          <br />
          <p>
            We believe that all businesses, despite their size, should have
            access to high-quality tools and tech available in the market. We
            help you to turn your wishes and dreams into reality.
          </p>
          <br />
          <div className="w-full flex mx-auto">
            <button className="btn btn-neutral bg-[#08ACF2] text-white border-none rounded-2xl mx-auto">
              Apply now
              <FaArrowRightLong />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default emailhosting;
