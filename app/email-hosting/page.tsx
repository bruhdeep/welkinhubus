/* eslint-disable react/no-unescaped-entities */
import Navbar from "@/components/Navbar";
import React from "react";

import ehdata from "@/data/ProductData.json";
import EmailhostingCard from "@/components/EmailhostingCard";

const emailhosting = () => {
  return (
    <div>
      <Navbar
        navimg={"homebg.jpg"}
        navtext={"Email Hosting"}
        learnmorelink={""}
        navdesc={
          "Elevate Your Communication Seamlessly with WelkinHubUS Email Hosting – Where Security Meets Collaboration!"
        }
      />
      <div className="lg:px-[20%] px-[2%] pt-5">
        <p className="text-[3rem] font-semibold">
          Why Choose Welkinhub E-mail Hosting?
        </p>
        <br />
        <ul className="px-5 list-disc text-justify">
          <li>
            <span className="font-bold">
              State-of-the-Art Encryption for Unmatched Security:
            </span>{" "}
            WelkinHubUS employs enterprise-grade encryption. Transmit and store
            your communication with confidence, knowing that your information is
            confidential and protected.
          </li>
          <li>
            <span className="font-bold">Multi-Layered Security:</span> Our Email
            Hosting solution implements a robust multi-layered security
            approach. From anti-phishing measures to comprehensive malware
            scanning, WelkinHubUS fortifies every aspect of your email
            communication against evolving cyber threats.
          </li>
          <li>
            <span className="font-bold">
              Reliability in the Cloud: Secure, Scalable, and Globally
              Accessible:
            </span>{" "}
            Harness the power of a secure cloud infrastructure with WelkinHubUS.
            Host your email services with confidence, enjoying scalability,
            reliability, and global accessibility without compromising on
            security.
          </li>
          <li>
            <span className="font-bold">Compliance-Ready Email Solutions:</span>{" "}
            Stay compliant effortlessly with WelkinHubUS Enterprise Secure
            Email. Our services are designed to meet the stringent requirements
            of various industries, ensuring that your communication aligns
            seamlessly with industry regulations and standards.
          </li>
          <li>
            <span className="font-bold">
              Intuitive Collaboration for Seamless Teamwork:
            </span>{" "}
            Experience intuitive collaboration within your organization through
            our platform. Share files, documents, and calendars seamlessly, all
            while maintaining the highest levels of security. WelkinHubUS
            fosters efficient teamwork without compromising on data integrity.
          </li>
          <li>
            <span className="font-bold">24/7 Support:</span> Our expert support
            team is available 24/7 to assist with technical queries,
            configurations, or any challenges you may face. WelkinHubUS is your
            reliable partner, ensuring you're never alone on your digital
            journey.
          </li>
        </ul>
      </div>
      <div className="px-[2%] lg:px-[20%] pt-20">
        <div className="flex flex-wrap justify-center gap-10 mt-5">
          {ehdata.emailhostingTiers.map((data, index) => (
            <EmailhostingCard
              title={data.title}
              key={index}
              tier={data.tier}
              price={data.price}
              spec1={data.diskspace}
              spec2={data.mailbox}
            />
          ))}
          <div className="grid bg-white rounded-3xl border-2 w-60">
            <div className="px-6 py-8 sm:p-9 sm:pb-6">
              <div className="grid items-center justify-center w-full grid-cols-1 text-left">
                <h1>Web Hosting</h1>
                <div>
                  <h2 className="text-2xl font-bold tracking-tighter text-black lg:text-3xl">
                    CUSTOM
                  </h2>
                </div>
              </div>
            </div>
            <div className="px-6 pt-[64%] pb-[12%]">
              <a
                aria-describedby="tier-company"
                className="flex items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
                href="#"
              >
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default emailhosting;
