"use client";

import React from "react";

import { BsArrowDownCircle } from "react-icons/bs";

import { TypeAnimation } from "react-type-animation";
import TsParticles from "./../clientcomponents/TsParticles";

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
      <div className="sm:block top-0 2xl:top-8 right-4 2xl:right-12 z-40 sm:absolute hidden">
        <img
          src="/Images/thoughtbubble5.webp"
          className="w-36 2xl:w-44"
          alt="blob icon"
        />
      </div>
      <div className="sm:block bottom-4 2xl:bottom-8 left-8 2xl:left-12 z-40 sm:absolute hidden">
        <img
          src="/Images/thoughtbubble6.webp"
          className="w-10 2xl:w-14"
          alt="star icon"
        />
      </div>
      <div className="sm:block right-4 2xl:right-12 bottom-4 2xl:bottom-8 z-40 sm:absolute hidden">
        <img
          src="/Images/thoughtbubble2.webp"
          className="w-10 2xl:w-14"
          alt="blob icon"
        />
      </div>
      <div className="z-30 md:flex justify-center items-center bg-primaryBackground px-6 2xl:px-32 h-screen HeroContainer">
        <div className="flex justify-center items-center pt-16 sm:pt-32 md:pt-0 2xl:pl-20 w-full md:w-1/2 text-center">
          <div className="relative w-80 md:w-96 2xl:w-100 h-80 md:h-96 2xl:h-100 animate-ProfileAnimate">
            <img
              src="/Images/hero.webp"
              alt="Freelance Developer Icon Art"
              className="rounded-full w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="flex justify-center items-center pt-8 md:pt-0 w-full md:w-1/2 text-left">
          <div>
            <h2 className="mt-0 mb-0 font-extralight text-left text-textprimary text-xl md:text-4xl 2xl:text-5xl animate-slideBottom">
              <TypeAnimation
                className=""
                preRenderFirstString={true}
                sequence={[
                  700,
                  "HI, I'M",
                  1500,
                  "HI, I'M A DEVELOPER",
                  1000,
                  "HI, I'M A DESIGNER",
                  1000,
                  "HI, I'M A FREELANCER",
                  1000,
                ]}
                speed={10}
              />
            </h2>

            <h1 className="mt-0 mb-2 py-2 sm:py-0 font-bold text-left text-textprimary text-xl md:text-8xl 2xl:text-9xl">
              DISHANT
            </h1>
            <h1 className="mt-0 mb-0 font-normal text-left text-textprimary text-xl md:text-xl 2xl:text-2xl">
              Specializing in React / Next Js Front-End Development
            </h1>

            <div className="sm:flex justify-start items-center my-6 sm:my-10 text-black text-xs sm:text-sm no-underline">
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
                  Contact Me{" "}
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
