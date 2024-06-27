"use client";
import { Fade } from "react-awesome-reveal";

export default function AboutCards() {
  return (
    <Fade direction="up" triggerOnce>
      <div className="md:flex justify-around items-center my-20 w-full animate-slideTop">
        <div className="place-items-center border-0 border-gray-700 grid py-6 md:py-0 md:border-r border-b md:border-b-0 border-solid md:w-1/4">
          <h2 className="mt-0 mb-0 font-semibold text-5xl text-primaryBackground">
            3
          </h2>
          <h2 className="mt-0 mb-0 font-normal text-lg text-primaryBackground">
            Years of Experiance
          </h2>
        </div>
        <div className="place-items-center border-0 border-gray-700 grid py-6 md:py-0 md:border-r border-b md:border-b-0 border-solid md:w-1/4">
          <h2 className="mt-0 mb-0 font-semibold text-5xl text-primaryBackground">
            15+
          </h2>
          <h2 className="mt-0 mb-0 font-normal text-lg text-primaryBackground">
            Happy Clients
          </h2>
        </div>
        <div className="place-items-center border-0 border-gray-700 grid py-6 md:py-0 md:border-r border-b md:border-b-0 border-none md:w-1/4">
          <h2 className="mt-0 mb-0 font-semibold text-5xl text-primaryBackground">
            25+
          </h2>
          <h2 className="mt-0 mb-0 font-normal text-lg text-primaryBackground">
            Quality Projects Done
          </h2>
        </div>
      </div>
    </Fade>
  );
}
