/* eslint-disable react/no-unescaped-entities */
import Navbar from "@/components/Navbar";
import React from "react";

import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const emailhosting = () => {
  return (
    <div>
      <Navbar
        navimg={"backgrounds/pawel-czerwinski--0xCCPIbl3M-unsplash.jpg"}
        navtext={"Contact Us"}
        learnmorelink={"#content"}
        navdesc={
          "Let us know about your company and the problems you're having, and we'll get in touch with you."
        }
      />
      <div id="content" className="lg:px-[20%] px-[2%] pt-16 gap-32">
        <div className="text-center w-full">
          <p className="text-3xl font-bold">Book A Free Consultation</p>
          <br />
          <p>
            We are available to answer any queries you may have. We eagerly
            forward hearing from you.
          </p>
        </div>
        <div className="divider "></div>
        <div className="text-center">
          <p className="text-3xl font-bold">Get in Touch</p>
          <br />
          <div className="flex selection:flex-wrap justify-between">
            <div className="w-[25%]">
              <div className="flex justify-center">
                <div className="bg-slate-100 p-3 rounded-full">
                  <FaLocationDot color="#08ACF2" size={25} />
                </div>
              </div>
              <br />
              <p className="text-2xl font-bold">Our Location</p>
              <br />
              <p>12279 SAWGRASS PRAIRIE LOOP,</p>
              <p>Orlando, FL 32824</p>
            </div>
            <div className="w-[25%]">
              <div className="flex justify-center">
                <div className="bg-slate-100 p-3 rounded-full">
                  <FaPhone color="#08ACF2" size={25} />
                </div>
              </div>
              <br />
              <p className="text-2xl font-bold">Call Us On</p>
              <br />
              <p>+1 405-406-0804</p>
            </div>
            <div className="w-[25%]">
              <div className="flex justify-center">
                <div className="bg-slate-100 p-3 rounded-full">
                  <MdEmail color="#08ACF2" size={25} />
                </div>
              </div>
              <br />
              <p className="text-2xl font-bold">Email us</p>
              <br />
              <p>info@welkinhubus.com</p>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="flex flex-wrap">
          <div className="w-[50%]">
            <p className="text-3xl font-bold">Support</p>
            <br />
            <p>
              For Services related issues,{" "}
              <span className="text-[#08ACF2]">
                <a href="#content">click here</a>
              </span>
            </p>
            <br />
            <p>
              For Job Placement & IT Training related issues,{" "}
              <span className="text-[#08ACF2]">
                <a href="#content">click here</a>
              </span>
            </p>
          </div>
          <div className="w-[50%]">
            <p className="text-3xl font-bold">Send Us a Message</p>
            <br />
            <p>We would love to hear from you!</p>
            <form action="">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Name</span>
                </div>
                <input
                  type="text"
                  placeholder=""
                  className="input input-bordered w-full"
                />
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Email</span>
                </div>
                <input
                  type="text"
                  placeholder=""
                  className="input input-bordered w-full"
                />
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Contact</span>
                </div>
                <input
                  type="text"
                  placeholder=""
                  className="input input-bordered w-full"
                />
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Contact</span>
                </div>
                <textarea className="textarea textarea-bordered" placeholder=""></textarea>
              </label>
              <br />
              <button className="btn">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default emailhosting;
