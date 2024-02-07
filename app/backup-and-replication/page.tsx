/* eslint-disable react/no-unescaped-entities */
import Navbar from "@/components/Navbar";
import React from "react";

const emailhosting = () => {
  return (
    <div>
      <Navbar
        navimg={"homebg.jpg"}
        navtext={"Backup & Replication"}
        learnmorelink={"#content"}
        navdesc={
          "Safeguarding Tomorrow, Today - WelkinHubUS Backup and Replication, Your Digital Fortress!"
        }
      />
      <div id="content" className="lg:px-[20%] px-[2%] pt-5">
        <p className="text-[3rem] font-semibold">
          Our services and strategies in Digital World.
        </p>
        <br />
        <ul className="px-5 list-disc text-justify">
          <li>
            <span className="font-bold">
              Robust Data Protection Through Backup:
            </span>{" "}
            WelkinHubUS employs cutting-edge backup solutions to safeguard your
            data against accidental deletions, hardware failures, or unforeseen
            disasters. With automated and regular backups, your data remains
            secure and recoverable at all times.
          </li>
          <li>
            <span className="font-bold">
              Efficient Replication for Business Continuity:
            </span>{" "}
            Business continuity is non-negotiable. WelkinHubUS offers efficient
            replication services, ensuring that critical systems and data are
            duplicated in real-time. In the event of an unexpected outage,
            switch seamlessly to replicated systems to minimize downtime.
          </li>
          <li>
            <span className="font-bold">
              Tailored Data Retention Policies: Accessible:
            </span>{" "}
            One size does not fit all. WelkinHubUS allows you to customize data
            retention policies based on your specific needs. Retain data for the
            required duration, ensuring compliance with industry standards and
            regulations.
          </li>
          <li>
            <span className="font-bold">
              Reliable Disaster Recovery Planning:
            </span>{" "}
            Prepare for the unexpected with WelkinHubUS Disaster Recovery
            solutions. Our comprehensive approach includes backup, replication,
            and strategic planning to ensure that your business can swiftly
            recover from any unforeseen events.
          </li>
          <li>
            <span className="font-bold">Secure Cloud Infrastructure:</span>{" "}
            Leverage the power of a secure cloud infrastructure for your backup
            and replication needs. WelkinHubUS ensures scalability, reliability,
            and global accessibility without compromising the security of your
            critical data.
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
    </div>
  );
};

export default emailhosting;
