/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

import { GoPersonFill } from "react-icons/go";
import { FaArrowRightLong } from "react-icons/fa6";

const Navbar = ({
  navimg,
  navtext,
  navdesc,
  learnmorelink,
}: {
  navimg: string;
  navtext: string;
  navdesc: string;
  learnmorelink: string;
}) => {
  const backgroundImageUrl = `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url(${navimg})`;

  return (
    <div
      className="h-[40rem] bg-cover rounded-br-[8rem] text-white"
      style={{ background: backgroundImageUrl, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="flex justify-between lg:px-[20%] px-[5%] pt-5">
        <div>
          <img src="welkinlogo.png" alt="" />
        </div>
        <div>
          <div className="hidden lg:flex lg:items-stretch  ">
            <ul className="menu menu-horizontal px-1 ">
              <li className="">
                <a href="/">Home</a>
              </li>
              <li>
                <details>
                  <summary>Services</summary>
                  <ul className="text-black w-64">
                    <li>
                      <details>
                        <summary>Managed Services</summary>
                        <ul>
                          <li>
                            <a href="/vps">Virtual Private Server</a>
                          </li>
                          <li>
                            <a href="/web-hosting">Web Hosting</a>
                          </li>
                          <li>
                            <a href="/email-hosting">Email Hosting</a>
                          </li>
                          <li>
                            <a href="/backup-and-replication">
                              Backup & Replication
                            </a>
                          </li>
                        </ul>
                      </details>
                    </li>
                    <li>
                      <details>
                        <summary>
                          IT Consulting and Services on Modern Technology
                        </summary>
                        <ul>
                          <li>
                            <a href="/planning-and-management">
                              Planning and Management
                            </a>
                          </li>
                          <li>
                            <a href="/cloud-computing">Cloud Computing</a>
                          </li>
                          <li>
                            <a href="/data-analytics-and-business-intelligence">
                              Data Analytics and Business Intelligence
                            </a>
                          </li>
                          <li>
                            <a href="/cyber-security">Cyber Security</a>
                          </li>
                        </ul>
                      </details>
                    </li>
                    <li>
                      <details>
                        <summary>Software Development and Consulting</summary>
                        <ul>
                          <li>
                            <a href="/software-development">
                              Software Development
                            </a>
                          </li>
                          <li>
                            <a href="/infrastructure-development">
                              Infrastructure Development
                            </a>
                          </li>
                          <li>
                            <a href="/system-integration">System Integration</a>
                          </li>
                        </ul>
                      </details>
                    </li>
                    <li>
                      <details>
                        <summary>Education and Placement</summary>
                        <ul>
                          <li>
                            <a href="/it-training-education-job-placement-solutions">
                              IT Training, Education, Job Placement Solutions
                            </a>
                          </li>
                        </ul>
                      </details>
                    </li>
                    <li>
                      <a href="/digital-marketing">Digital Marketing</a>
                    </li>
                    <li>
                      <a href="/e-commerce-solutions">E-commerce Solutions</a>
                    </li>
                    <li>
                      <a href="/trading">Trading</a>
                    </li>
                    <li>
                      <a href="/it-support-and-helpdesk">
                        IT Support and Helpdesk
                      </a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a href="/about-us">About Us</a>
              </li>
              <li>
                <a href="/contact-us">Contact Us</a>
              </li>
            </ul>
            <div className="flex gap-5 items-center">
              <Link href={"/contact-us#content"}>
                <button className="btn btn-sm bg-blue-500 border-none text-white">
                  Support
                </button>
              </Link>
              <Link href={"https://client.welkinhubus.com/index.php?rp=/login"}>
                <button>
                  <GoPersonFill size={25} className="mt-1"/>
                </button>
              </Link>
            </div>
          </div>
          <div className="flex justify-between items-center gap-1 lg:hidden">
            <button className="btn btn-sm bg-blue-500 border-none text-white">
              Support
            </button>

            <div className="dropdown dropdown-bottom dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black"
              >
                <li className="">
                  <a href="/">Home</a>
                </li>
                <li>
                  <details>
                    <summary>Services</summary>
                    <ul className="text-black">
                      <li>
                        <details>
                          <summary>Managed Services</summary>
                          <ul>
                            <li>
                              <a href="/vps">Virtual Private Server</a>
                            </li>
                            <li>
                              <a href="/web-hosting">Web Hosting</a>
                            </li>
                            <li>
                              <a href="/email-hosting">Email Hosting</a>
                            </li>
                            <li>
                              <a href="/backup-and-replication">
                                Backup & Replication
                              </a>
                            </li>
                          </ul>
                        </details>
                      </li>
                      <li>
                        <details>
                          <summary>
                            IT Consulting and Services on Modern Technology
                          </summary>
                          <ul>
                            <li>
                              <a href="/planning-and-management">
                                Planning and Management
                              </a>
                            </li>
                            <li>
                              <a href="/cloud-computing">Cloud Computing</a>
                            </li>
                            <li>
                              <a href="/data-analytics-and-business-intelligence">
                                Data Analytics and Business Intelligence
                              </a>
                            </li>
                            <li>
                              <a href="/cyber-security">Cyber Security</a>
                            </li>
                          </ul>
                        </details>
                      </li>
                      <li>
                        <details>
                          <summary>Software Development and Consulting</summary>
                          <ul>
                            <li>
                              <a href="/software-development">
                                Software Development
                              </a>
                            </li>
                            <li>
                              <a href="/infrastructure-development">
                                Infrastructure Development
                              </a>
                            </li>
                            <li>
                              <a href="/system-integration">
                                System Integration
                              </a>
                            </li>
                          </ul>
                        </details>
                      </li>
                      <li>
                        <details>
                          <summary>Education and Placement</summary>
                          <ul>
                            <li>
                              <a href="/it-training-education-job-placement-solutions">
                                IT Training, Education, Job Placement Solutions
                              </a>
                            </li>
                          </ul>
                        </details>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <a href="/about-us">About Us</a>
                </li>
                <li>
                  <a href="/contact-us">Contact Us</a>
                </li>
              </ul>
            </div>
            <button>
              <GoPersonFill size={25} />
            </button>
          </div>
        </div>
      </div>
      <div className="h-full flex items-center px-[5%] lg:px-[20%]">
        <div className="lg:w-[60%]">
          <p className="text-[2.5rem] font-extrabold">{navtext}</p>
          <p>{navdesc}</p>
          <br />
          <Link href={learnmorelink}>
            <button className="btn btn-neutral bg-[#08ACF2] text-white border-none rounded-2xl">
              Learn more
              <FaArrowRightLong />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
