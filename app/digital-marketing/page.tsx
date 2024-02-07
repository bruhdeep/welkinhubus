/* eslint-disable react/no-unescaped-entities */
import Navbar from "@/components/Navbar";
import React from "react";

const emailhosting = () => {
  return (
    <div>
      <Navbar
        navimg={"homebg.jpg"}
        navtext={"Digital Marketing"}
        learnmorelink={"#content"}
        navdesc={
          "Connect with your audience, anywhere and anytime, through the power of digital marketing."
        }
      />
      <div id="content" className="lg:px-[20%] px-[2%] pt-16 flex gap-32">
        <div className="w-[65%] text-justify">
          <p className="text-3xl font-bold">
            Our services and strategies in Digital World.
          </p>
          <br />
          <p>
            Our expertise extends to data analytics and business intelligence,
            where we harness the power of data to drive informed decisions.
            Through adept data management, visualization, predictive analytics,
            and machine learning, we empower businesses with actionable insights
            that fuel growth and innovation.
          </p>
        </div>
        <div className="w-[35%]">
          <p className="text-2xl font-bold">Why Welkinhub?</p>
          <br />
          <ul className="list-disc space-y-4 pl-5">
            <li>
              Get to know your customers and enable them to get to know you
              properly, which can foster camaraderie and brand recognition.
            </li>
            <li>Choose your best clients.</li>
            <li>Active adaptability.</li>
            <li>Increased timestamp and business effectiveness.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default emailhosting;
