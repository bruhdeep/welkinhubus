/* eslint-disable @next/next/no-img-element */
import Card from "@/components/Card";
import Navbar from "@/components/Navbar";

import cardata from "@/data/CardData.json";

import { FaStar } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

export default function Home() {
  return (
    <div className="">
      <Navbar
        navimg={"homebg.jpg"}
        navtext={"Connecting Technology to the needs of Business"}
        navdesc={""}
        learnmorelink={""}
      />
      <div className="lg:px-[20%] px-[10%]">
        <div className="text-3xl font-bold pt-5">Managed Services</div>
        <div className="flex flex-wrap gap-10 mt-5">
          {cardata.managedServices.map((data, index) => (
            <Card
              key={index}
              title={data.title}
              description={data.description}
              imageurl={data.imageurl}
              redirecturl={data.redirecturl}
            />
          ))}
        </div>

        <div className="text-3xl font-bold pt-5">
          Software Development and Consulting
        </div>
        <div className="flex flex-wrap gap-10 mt-5">
          {cardata.softwareServices.map((data, index) => (
            <Card
              key={index}
              title={data.title}
              description={data.description}
              imageurl={data.imageurl}
              redirecturl={data.redirecturl}
            />
          ))}
        </div>

        <div className="text-3xl font-bold pt-5">Education and Placement</div>
        <div className="flex flex-wrap gap-10 mt-5">
          {cardata.educationservices.map((data, index) => (
            <Card
              key={index}
              title={data.title}
              description={data.description}
              imageurl={data.imageurl}
              redirecturl={data.redirecturl}
            />
          ))}
        </div>

        <div className="text-3xl font-bold pt-5">Others</div>
        <div className="flex flex-wrap gap-10 mt-5">
          {cardata.otherservices.map((data, index) => (
            <Card
              key={index}
              title={data.title}
              description={data.description}
              imageurl={data.imageurl}
              redirecturl={data.redirecturl}
            />
          ))}
        </div>

        <div className="pt-32 text-center flex justify-center">
          <div className="w-full text-xl">
            We have experience in a wide range of platforms, technologies,
            frameworks and programming languages. We use the latest technologies
            available in the market and are tailored to your specific needs. No
            job is too big or too small, because we have the capability and
            appropriate resources to deliver both.
          </div>
        </div>

        <div className="flex justify-center gap-2 pt-20">
          {Array.from({ length: 5 }).map((_, i) => (
            <FaStar key={i} color="gold" size={30} />
          ))}
        </div>

        <div className="w-full lg:h-96 bg-[#262626] rounded-2xl lg:flex text-white mt-20">
          <div className="lg:w-[60%] flex justify-center items-center p-3  ">
            <div className="w-[90%] h-[90%] rounded-xl overflow-hidden bg-white">
              <img
                src="https://welkinhubus.com/wp-content/uploads/2023/08/col-img-5.jpg"
                alt="techtalkimg"
                className="w-full h-full "
              />
            </div>
          </div>
          <div className="flex items-center pr-4">
            <div className="p-5">
              <div className="text-3xl font-bold">Ready for a tech talk?</div>
              <br />
              <div className="text-sm">
                Talk to our Principal Consultant to share the business
                challenges you are currently facing and discuss how we can help
                you.
              </div>
              <br />
              <button className="flex gap-2 items-center bg-[#08ACF2] px-3 py-2 rounded-xl">
                <IoCall /> Call now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
