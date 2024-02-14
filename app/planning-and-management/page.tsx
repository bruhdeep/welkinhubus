/* eslint-disable react/no-unescaped-entities */
import Navbar from "@/components/Navbar";
import React from "react";

const emailhosting = () => {
  return (
    <div>
      <Navbar
        navimg={"backgrounds/sm.jpg"}
        navtext={"Planning and Management"}
        learnmorelink={"#content"}
        navdesc={
          "Navigating Success Through Strategic Insight and Effective Management."
        }
      />
      <div id="content" className="lg:px-[20%] px-[2%] pt-16 flex gap-32">
        <div className="w-[60%] text-justify">
          <p>
            Our expertise extends to data analytics and business intelligence,
            where we harness the power of data to drive informed decisions.
            Through adept data management, visualization, predictive analytics,
            and machine learning, we empower businesses with actionable insights
            that fuel growth and innovation.
          </p>
          <br />
          <p>
            With Welkin Hub, businesses find a trusted ally to navigate the
            complexities of modern technology, ensuring they stay agile, secure,
            and competitive in a rapidly evolving digital landscape.
          </p>
        </div>
        <div>
          <p className="text-2xl font-bold">Specialization</p>
          <br />
          <ul className="list-disc space-y-4 pl-5">
            <li>Strategic Planning and Management</li>
            <li>Empowering IT Consulting</li>
            <li>Optimizing Technology Resources</li>
            <li>Navigating Best Practices</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default emailhosting;
