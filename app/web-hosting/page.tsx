/* eslint-disable react/no-unescaped-entities */
import Navbar from "@/components/Navbar";
import React from "react";

import whdata from "@/data/ProductData.json";
import ProductCard from "@/components/WebhostingCard";

const webhosting = () => {
  return (
    <div>
      <Navbar
        navimg={"backgrounds/webgbg.jpg"}
        navtext={"Web Hosting"}
        learnmorelink={"#content"}
        navdesc={
          "Unleash the Power of Your Online Presence with WelkinHub Web Hosting."
        }
      />
      <div id="content" className="lg:px-[20%] px-[2%] pt-5">
        <p className="text-[3rem] font-semibold">
          Why Choose Welkinhub Web Hosting?
        </p>
        <br />
        <ul className="px-5 list-disc text-justify">
          <li>
            <span className="font-bold">Rock-Solid Reliability:</span> Your
            website’s availability is our top priority. WelkinHub boasts an
            impressive uptime record, ensuring that your site is always
            accessible to your audience. Trust us to keep your digital presence
            up and running 24/7, 365 days a year.
          </li>
          <li>
            <span className="font-bold">Robust Security Measures:</span> Our
            robust security measures protect against threats, giving you peace
            of mind and allowing you to focus on what matters - your content and
            business.
          </li>
          <li>
            <span className="font-bold">Intuitive Control Panel:</span>{" "}
            WelkinHub provides a user-friendly control panel that puts you in
            control of every aspect of your hosting environment. Whether you’re
            a seasoned developer or a beginner, our intuitive interface makes
            website management a breeze.
          </li>
          <li>
            <span className="font-bold">Scalability for Your Growth:</span>{" "}
            WelkinHub offers scalable hosting solutions that adapt to the
            demands of your expanding online presence. Whether you’re running a
            personal blog or a thriving e-commerce site, we have the resources
            to support your growth.
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
          {whdata.webhostingTiers.map((data, index) => (
            <ProductCard
              title={data.title}
              key={index}
              tier={data.tier}
              price={data.price}
              spec1={data.diskspace}
              spec2={data.bandwidth}
              spec3={data.account}
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
            <div className="px-6 pt-[70%] pb-[12%]">
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

export default webhosting;
