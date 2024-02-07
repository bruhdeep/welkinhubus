/* eslint-disable react/no-unescaped-entities */
import Navbar from "@/components/Navbar";
import React from "react";

const emailhosting = () => {
  return (
    <div>
      <Navbar
        navimg={"homebg.jpg"}
        navtext={"Infrastructure Development"}
        learnmorelink={"#content"}
        navdesc={
          "We help business by providing our team of experts to manage sourcing, operations and maintenance of its IT Infrastructure."
        }
      />
      <div id="content" className="lg:px-[20%] px-[2%] pt-16 flex gap-32">
        <div className="text-justify">
          <p className="text-3xl font-bold">Infrastructure Development</p>
          <br />
          <p>
            Managing IT infrastructure is gradually becoming a complex and
            resource intensive task. Keeping up with the evolving user
            requirements, business process, various needs and constantly
            changing technological offerings means you often need to plan ahead
            and procure workstation, server hardware, network, colocation,
            accessories etc. which many times does not yield the best result in
            terms of efficiency, speed and economic targets.
          </p>
          <br />
          <p>
            By providing IT infrastructure in contract terms, we can ensure
            speed and efficiency for fulfilling your needs as well as keeping
            the overall costs as low as possible. Our portfolio of various
            infrastructure products and services helps cater the infra-needs of
            your entire IT operations.
          </p>
          <br />
          <p>
            With team members having over 2 decades of experience in the fields,
            our experts can provide the best solutions to you in various areas
            of IT infrastructure like systems, network, data-center, cloud,
            security and operations.
          </p>
          <br />
          <p>Call us or request a call-back to learn more.</p>
        </div>
      </div>
    </div>
  );
};

export default emailhosting;
