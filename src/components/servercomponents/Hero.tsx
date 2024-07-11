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

      <div className="z-30 md:flex justify-center items-center bg-primaryBackground px-8 2xl:px-32 md:h-screen HeroContainer">
        <div className="flex justify-center items-center pt-6 sm:pt-32 md:pt-0 2xl:pl-20 w-full md:w-1/2 h-1/12 md:h-full text-center">
          <div className="relative w-80 md:w-96 2xl:w-100 h-80 md:h-96 2xl:h-100 animate-ProfileAnimate">
            <img
              src="/Images/hero.webp"
              alt="Freelance Developer Icon Art"
              className="rounded-full w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="z-30 flex justify-center items-center md:pt-0 pb-20 md:pb-0 w-full md:w-1/2 h-[45%] md:h-full text-left">
          <div className="">
            <TypingAnimationComponent />
            <h1 className="bg-clip-text bg-gradient-to-r from-orange-300 via-orange-100 to-orange-400 mt-0 mb-2 py-2 sm:py-0 font-bold text-5xl text-left text-textprimary text-transparent md:text-8xl 2xl:text-9xl">
              DISHANT
            </h1>
            <h1 className="bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] bg-clip-text from-orange-500 via-orange-300 to-orange-100 mt-0 mb-0 font-normal text-left text-lg text-transparent md:text-xl 2xl:text-2xl">
              Specializing in React / Next Js Front-End Development
            </h1>

            <div className="sm:flex justify-start items-center sm:my-10 mt-10 text-black text-sm no-underline">
              <button className="bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-orange-500 via-orange-300 to-orange-100 button button--pandora">
                <a
                  className="bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-orange-500 via-orange-300 to-orange-100 text-primaryBackground no-underline"
                  href="#portfolio"
                >
                  &lt; View My Work /&gt;
                </a>
              </button>
              <div className="flex items-center mt-4 sm:mt-0 text-base text-white hover:underline cursor-pointer">
                <a
                  href="#contactme"
                  className="bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] bg-clip-text from-orange-500 via-orange-300 to-orange-100 mr-2 ml-0 sm:ml-12 font-semibold text-transparent no-underline"
                >
                  Contact Me
                </a>

                <BsArrowDownCircle className="text-orange-200" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
