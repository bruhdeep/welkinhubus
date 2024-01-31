import React from "react";

import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-28 bg-[#08ACF2] mt-32 flex justify-center">
      <div>
        <div className="text-white font-normal text-md pt-5">Copyright © 2024 The Welkin Hub</div>
        <br />
        <div className="flex gap-5 justify-center">
          <FaFacebookF size={21} color="white"/>
          <FaLinkedinIn size={22} color="white"/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
