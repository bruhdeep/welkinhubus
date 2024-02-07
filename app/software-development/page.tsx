/* eslint-disable react/no-unescaped-entities */
import Navbar from "@/components/Navbar";
import React from "react";

const emailhosting = () => {
  return (
    <div>
      <Navbar
        navimg={"homebg.jpg"}
        navtext={"Software Development"}
        learnmorelink={"#content"}
        navdesc={
          "Empowering Your Business Through Innovative Software Solutions."
        }
      />
      <div id="content" className="lg:px-[20%] px-[2%] pt-16 flex gap-32">
        <div className="w-[60%] text-justify">
          <p className="text-3xl font-bold">
            Our Expertise and Approach towards Software Development
          </p>
          <br />
          <p>
            With a wealth of experience, Welkin Hub excels in crafting custom
            software, web applications, and mobile apps that seamlessly align
            with your unique business needs. Our solutions are designed to
            automate processes, streamline operations, and ensure compliance
            with industry standards, all while delivering a user-centered
            experience.
          </p>
          <br />
          <p>
            At Welkin Hub, we begin by identifying the pain points in your
            business processes. We then collaborate closely with you to
            formulate a strategic plan for digitization and automation. Our
            focus on cost-effectiveness ensures that the solutions we develop
            not only pay for themselves but also drive growth. Whether you're a
            small business seeking to harness new technologies or a larger
            enterprise aiming for efficiency, our tailored approach guarantees
            transformative results.
          </p>
        </div>
        <div>
          <p className="text-2xl font-bold">Why Welkinhub?</p>
          <br />
          <ul className="list-disc space-y-4 pl-5">
            <li>Cost-Effective Solutions</li>
            <li>Small Business Focus</li>
            <li>Holistic Approach</li>
            <li>Industry Expertise</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default emailhosting;
