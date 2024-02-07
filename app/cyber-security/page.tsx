/* eslint-disable react/no-unescaped-entities */
import Navbar from "@/components/Navbar";
import React from "react";

const emailhosting = () => {
  return (
    <div>
      <Navbar
        navimg={"homebg.jpg"}
        navtext={"Cloud Computing"}
        learnmorelink={"#content"}
        navdesc={"Unleash Potential in the Cloud with Welkin Hub's Expertise."}
      />
      <div id="content" className="lg:px-[20%] px-[2%] pt-16 flex gap-32">
        <div className="w-[60%] text-justify">
          <p>
            Cyber threats are evolving, and Welkin Hub offers comprehensive
            cybersecurity solutions to shield your organization from data
            breaches and digital risks. Our multi-layered approach ensures your
            digital assets remain secure.
          </p>
          <br />
          <p>
            When it comes to cybersecurity, Welkin Hub stands as your unwavering
            guardian against digital threats. With us, your business can thrive
            in a secure digital landscape, equipped with cutting-edge defenses
            and proactive solutions.
          </p>
        </div>
        <div>
          <p className="text-2xl font-bold">Specialization</p>
          <br />
          <ul className="list-disc space-y-4 pl-5">
            <li>Comprehensive Protection</li>
            <li>Expert Security Services</li>
            <li>Rapid Incident Response</li>
            <li>Security Audits</li>
            <li>Advanced Software Development</li>
            <li>Peace of Mind</li>
            <li>Tailored for Your Needs</li>
            <li>Proven Track Record</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default emailhosting;
