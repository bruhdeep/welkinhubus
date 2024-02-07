/* eslint-disable react/no-unescaped-entities */
import Navbar from "@/components/Navbar";
import React from "react";

const emailhosting = () => {
  return (
    <div>
      <Navbar
        navimg={"homebg.jpg"}
        navtext={"Trading"}
        learnmorelink={"#content"}
        navdesc={
          "Empowering Global Trade: Welkin Hub - Your Gateway to Worldwide Opportunities."
        }
      />
      <div id="content" className="lg:px-[20%] px-[2%] pt-16 flex gap-32">
        <div className="text-justify">
          <p>
            Welkin Hub is your gateway to seamless international trading,
            connecting diverse products from the US to destinations worldwide
            and vice versa. With a keen understanding of global markets,
            regulations, and logistics, we facilitate trade that transcends
            borders, empowering businesses to reach new horizons.
          </p>
          <br />
          <p>
            Our comprehensive trading solutions encompass a wide range of
            products, ensuring that your business can access the global
            marketplace with confidence. From sourcing to shipping, we
            streamline the entire process, navigating complexities and
            maximizing efficiency. With Welkin Hub as your trading partner, the
            world becomes your marketplace, and opportunities know no bounds.
          </p>
        </div>
      </div>
    </div>
  );
};

export default emailhosting;
