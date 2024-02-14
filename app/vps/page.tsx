/* eslint-disable react/no-unescaped-entities */
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/VpsCard";
import React from "react";

import vpsdata from "@/data/ProductData.json";

const vps = () => {
  return (
    <div>
      <Navbar
        navimg={"backgrounds/vpsbg.jpg"}
        navtext={"Virtual Private Server"}
        learnmorelink={"#content"}
        navdesc={
          "Unleash Your Online Potential with WelkinHubUS VPS - Where Performance Meets Precision!”"
        }
      />
      <div id="content" className="lg:px-[20%] px-[2%] pt-5">
        <p className="text-[3rem] font-semibold">Why Choose Welkinhub VPS?</p>
        <br />
        <ul className="px-5 list-disc text-justify">
          <li>
            <span className="font-bold">Our Server, Your Rules:</span> With
            WelkinHubUS VPS, take full command of your hosting environment.
            Choose your preferred Operating System and fine-tune resources to
            align seamlessly with your website's demands.
          </li>
          <li>
            <span className="font-bold">
              Unmatched Performance, Uninterrupted Success:
            </span>{" "}
            Experience uncompromised performance with our VPS infrastructure.
            Powered by robust hardware and high-speed network connectivity,
            WelkinHubUS ensures your applications run smoothly, offering users a
            seamless and responsive online experience.
          </li>
          <li>
            <span className="font-bold">
              Scale with Ease, Grow with Confidence:
            </span>{" "}
            Easily adjust resources to meet dynamic demands - whether it,s
            handling traffic spikes, expanding your online footprint, or
            launching new services.
          </li>
          <li>
            <span className="font-bold">Security Beyond Boundaries:</span> Our
            VPS provides isolated server environments, minimizing the risk of
            security breaches. Benefit from redundant backup systems, ensuring
            your data is protected and recoverable. Your data's safety is our
            top priority.
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
          {vpsdata.vpsTiers.map((data, index) => (
            <ProductCard
              key={index}
              title={data.title}
              tier={data.tier}
              price={data.price}
              spec1={data.cpu}
              spec2={data.ram}
              spec3={data.storage}
            />
          ))}
          <div className="grid bg-white rounded-3xl border-2 w-60">
            <div className="px-6 py-8 sm:p-9 sm:pb-6">
              <div className="grid items-center justify-center w-full grid-cols-1 text-left">
                <h1>Virtual Private Server</h1>
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

export default vps;
