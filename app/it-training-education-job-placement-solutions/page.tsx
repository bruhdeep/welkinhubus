/* eslint-disable react/no-unescaped-entities */
import Navbar from "@/components/Navbar";
import React from "react";

const emailhosting = () => {
  return (
    <div>
      <Navbar
        navimg={"homebg.jpg"}
        navtext={"IT Training, Education, Job Placement Solutions"}
        learnmorelink={"#content"}
        navdesc={
          "Nurturing IT Excellence, Guiding Careers: Welkin Hub's Pathway to Digital Success."
        }
      />
      <div id="content" className="lg:px-[20%] px-[2%] pt-16 flex gap-32">
        <div className="text-justify">
          <p>
            Welkin Hub is your gateway to a world of IT training, education, and
            job placement solutions designed to empower individuals and
            organizations with the skills needed to thrive in the digital age.
            Through dynamic workshops, enlightening seminars, and comprehensive
            certification programs, we elevate IT proficiency, ensuring that
            professionals are equipped with the latest tools and insights.
          </p>
          <br />
          <p>
            Our commitment goes beyond training. We bridge the gap between
            skilled individuals and businesses seeking IT expertise through our
            job placement solutions. Welkin Hub connects talent with
            opportunities, fostering a synergy that fuels innovation and growth
            across industries. With us, learning becomes a journey of
            transformation, and career advancement becomes a tangible reality in
            the ever-evolving realm of technology.
          </p>
          <br />
          <div className="w-full flex mx-auto">
            <button className="btn btn-neutral bg-[#08ACF2] text-white border-none rounded-2xl mx-auto">
              Apply now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default emailhosting;
