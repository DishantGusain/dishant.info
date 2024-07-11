import React from "react";
import { BsArrowDownCircle } from "react-icons/bs";
import TsParticles from "./../clientcomponents/TsParticles";
import TypingAnimationComponent from "../clientcomponents/TypingAnimationComponent";

export default function Hero() {
  return (
    <section id="hero" className="relative bg-gray-900">
      <TsParticles />

      <div className="sm:block top-10 2xl:top-12 left-8 2xl:left-12 z-40 sm:absolute hidden">
        <img
          src="/Images/thoughtbubblenew.webp"
          className="w-24 2xl:w-28"
          alt="coding icon"
        />
      </div>

      <div className="z-30 md:flex justify-center items-center bg-primaryBackground px-8 2xl:px-32 h-screen HeroContainer">
        <div className="flex justify-center items-center pt-16 sm:pt-32 md:pt-0 2xl:pl-20 w-full md:w-1/2 h-1/12 md:h-full text-center">
          <div className="relative w-80 md:w-96 2xl:w-100 h-80 md:h-96 2xl:h-100 animate-ProfileAnimate">
            <img
              src="/Images/hero.webp"
              alt="Freelance Developer Icon Art"
              className="rounded-full w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="flex justify-center items-center pt-0 md:pt-0 w-full md:w-1/2 h-1/2 md:h-full text-left">
          <div className="">
            <TypingAnimationComponent />
            <h1 className="bg-clip-text bg-gradient-to-r from-green-500 via-primaryYellow to-blue-500 mt-0 mb-2 py-2 sm:py-0 font-bold text-5xl text-left text-textprimary text-transparent md:text-8xl 2xl:text-9xl">
              DISHANT
            </h1>
            <h1 className="mt-0 mb-0 font-normal text-left text-lg text-textprimary md:text-xl 2xl:text-2xl">
              Specializing in React / Next Js Front-End Development
            </h1>

            <div className="sm:flex justify-start items-center sm:my-10 mt-10 text-black text-sm no-underline">
              <button className="button button--pandora">
                <a
                  className="text-primaryBackground no-underline"
                  href="#portfolio"
                >
                  &lt; View My Work /&gt;
                </a>
              </button>
              <div className="flex items-center mt-4 sm:mt-0 text-base text-white hover:underline cursor-pointer">
                <a
                  href="#contactme"
                  className="mr-2 ml-0 sm:ml-12 font-semibold text-white no-underline"
                >
                  Contact Me
                </a>

                <BsArrowDownCircle />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
