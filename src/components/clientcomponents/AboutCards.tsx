"use client";
import { Fade } from "react-awesome-reveal";

export default function AboutCards() {
  return (
    <Fade direction="up" triggerOnce>
      <div className="lg:flex justify-around items-center lg:my-20 w-full animate-slideTop">
        <div className="place-items-center border-0 border-gray-700 grid py-6 lg:py-0 lg:border-r border-b lg:border-b-0 border-solid lg:w-1/4">
          <h2 className="mt-0 mb-0 font-semibold text-3xl text-primaryBackground lg:text-5xl">
            4+
          </h2>
          <h2 className="mt-0 mb-0 font-normal text-base text-primaryBackground sm:text-lg">
            Years of Experiance
          </h2>
        </div>
        <div className="place-items-center border-0 border-gray-700 grid py-6 lg:py-0 lg:border-r border-b lg:border-b-0 border-solid lg:w-1/4">
          <h2 className="mt-0 mb-0 font-semibold text-3xl text-primaryBackground lg:text-5xl">
            15+
          </h2>
          <h2 className="mt-0 mb-0 font-normal text-base text-primaryBackground sm:text-lg">
            Happy Clients
          </h2>
        </div>
        <div className="place-items-center border-0 border-gray-700 grid py-6 lg:py-0 lg:border-r border-b lg:border-b-0 border-none lg:w-1/4">
          <h2 className="mt-0 mb-0 font-semibold text-3xl text-primaryBackground lg:text-5xl">
            25+
          </h2>
          <h2 className="mt-0 mb-0 font-normal text-base text-primaryBackground sm:text-lg">
            Quality Projects Done
          </h2>
        </div>
      </div>
    </Fade>
  );
}
