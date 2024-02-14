/* eslint-disable react/no-unescaped-entities */
import Navbar from "@/components/Navbar";
import React from "react";

const emailhosting = () => {
  return (
    <div>
      <Navbar
        navimg={"backgrounds/appdev.jpg"}
        navtext={"Cloud Computing"}
        learnmorelink={"#content"}
        navdesc={"Unleash Potential in the Cloud with Welkin Hub's Expertise."}
      />
      <div id="content" className="lg:px-[20%] px-[2%] pt-16 flex gap-32">
        <div className="w-[60%] text-justify">
          <p>
            Welkin Hub offers a comprehensive suite of cloud computing services,
            from cloud storage to Infrastructure as a Service (IaaS), Platform
            as a Service (PaaS), and Software as a Service (SaaS). Our expertise
            spans the entire cloud spectrum, enabling us to tailor solutions
            that fit your unique business needs.
          </p>
          <br />
          <p>
            Choosing Welkin Hub for your cloud computing needs means choosing a
            partner that guides you through every step of your cloud journey.
            From migration to management, security to innovation, we're
            committed to helping you harness the full potential of cloud
            technology for your business's success.
          </p>
        </div>
        <div>
          <p className="text-2xl font-bold">Specialization</p>
          <br />
          <ul className="list-disc space-y-4 pl-5">
            <li>Comprehensive Cloud Solutions</li>
            <li>Seamless Migration</li>
            <li>Enhanced Management</li>
            <li>Data Security</li>
            <li>Business Agility</li>
            <li>Customization</li>
            <li>Innovation Driver</li>
            <li>Proven Expertise</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default emailhosting;
