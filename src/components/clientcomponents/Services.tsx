"use client";

import React, { useState } from "react";
import { TbWorldWww } from "react-icons/tb";
import { Fade } from "react-awesome-reveal";

export default function Services() {
  const [isHoverCard1, setIsHoverCard1] = useState(false);
  const [isHoverCard2, setIsHoverCard2] = useState(false);
  const [isHoverCard3, setIsHoverCard3] = useState(false);

  return (
    <section className="relative bg-primaryBackground px-0 md:px-20 2xl:px-56 pt-20 pb-28">
      <div className="mb-10 text-center">
        <h1 className="inline bg-textprimary mt-0 mb-0 px-4 font-normal text-black text-xl">
          What I Do
        </h1>
        <h1 className="mt-0 mb-2 font-semibold text-3xl text-white md:text-4xl">
          How I can help your next project
        </h1>
      </div>

      <Fade direction="up" triggerOnce>
        <div className="md:flex justify-around my-20 w-full animate-slideTop">
          <article
            onMouseEnter={() => setIsHoverCard1(true)}
            onMouseLeave={() => setIsHoverCard1(false)}
            className="border-gray-800 mx-6 my-4 md:my-0 p-4 border md:hover:border-textprimary border-solid rounded-xl md:w-5/12 2xl:w-4/12 duration-500"
          >
            <div className="flex justify-center mt-4 mb-8 w-full">
              <img
                src="/Images/card4.webp"
                className="w-9/12"
                alt="React Js Developer"
              />
            </div>
            <div
              className={`mr-2 ml-4 ${
                isHoverCard1 ? "md:text-textprimary text-gray-400" : " text-gray-400"
              }`}
            >
              <h1 className="mt-0 mb-0 font-semibold text-2xl text-center">
                REACT JS
              </h1>
              <p className="my-4 font-normal text-base">
                Elevate Your Web Apps with ReactJS Excellence! Want to build
                interactive and dynamic web applications that engage your users?
                I have experience creating high-performance and feature-rich
                applications that leave a lasting impression.
              </p>

              <div className="flex items-center my-2">
                <div className="text-textprimary">
                  <TbWorldWww />
                </div>
                <h1 className="mt-0 mb-0 px-4 font-semibold text-sm">
                  React Component Development
                </h1>
              </div>

              <div className="flex items-center my-2">
                <div className="text-textprimary">
                  <TbWorldWww />
                </div>
                <h1 className="mt-0 mb-0 px-4 font-semibold text-sm">
                  State Management
                </h1>
              </div>

              <div className="flex items-center my-2">
                <div className="text-textprimary">
                  <TbWorldWww />
                </div>
                <h1 className="mt-0 mb-0 px-4 font-semibold text-sm">
                  Third-Party Integrations
                </h1>
              </div>

              <div className="flex items-center my-2">
                <div className="text-textprimary">
                  <TbWorldWww />
                </div>
                <h1 className="mt-0 mb-0 px-4 font-semibold text-sm">
                  Performance Optimization
                </h1>
              </div>

              <div className="flex items-center my-2">
                <div className="text-textprimary">
                  <TbWorldWww />
                </div>
                <h1 className="mt-0 mb-0 px-4 font-semibold text-sm">
                  Responsive React Apps
                </h1>
              </div>
            </div>
          </article>
          <article
            onMouseEnter={() => setIsHoverCard2(true)}
            onMouseLeave={() => setIsHoverCard2(false)}
            className="border-gray-800 mx-6 my-4 md:my-0 p-4 border md:hover:border-textprimary border-solid rounded-xl md:w-5/12 2xl:w-4/12 duration-500"
          >
            <div className="flex justify-center mt-4 mb-8 w-full">
              <img
                src="/Images/card5.webp"
                className="w-9/12"
                alt="HTML CSS JAVSCRIPT FRONT-END Developer"
              />
            </div>
            <div
              className={`mr-2 ml-4 ${
                isHoverCard2
                  ? "md:text-textprimary text-gray-400"
                  : " text-gray-400 [>h1]:text-white"
              }`}
            >
              <h1 className="mt-0 mb-0 font-semibold text-2xl text-center">
                HTML | CSS | JAVASCRIPT
              </h1>
              <p className="my-4 font-normal text-base">
                Your Gateway to Visually Stunning and Interactive Web Solutions!
                Looking to enchant your audience with visually captivating
                websites that come to life with seamless interactivity? I can be
                your one-stop destination for exceptional HTML/CSS and
                JavaScript services, crafting web experiences that leave a
                lasting impression.
              </p>
              <div className="flex items-center my-2">
                <div className="text-textprimary">
                  <TbWorldWww />
                </div>
                <h1 className="mt-0 mb-0 px-4 font-semibold text-sm">
                  Pixel-Perfect HTML
                </h1>
              </div>
              <div className="flex items-center my-2">
                <div className="text-textprimary">
                  <TbWorldWww />
                </div>
                <h1 className="mt-0 mb-0 px-4 font-semibold text-sm">
                  CSS Styling
                </h1>
              </div>
              <div className="flex items-center my-2">
                <div className="text-textprimary">
                  <TbWorldWww />
                </div>
                <h1 className="mt-0 mb-0 px-4 font-semibold text-sm">
                  Interactive JavaScript
                </h1>
              </div>
              <div className="flex items-center my-2">
                <div className="text-textprimary">
                  <TbWorldWww />
                </div>
                <h1 className="mt-0 mb-0 px-4 font-semibold text-sm">
                  Responsive Web Design
                </h1>
              </div>
              <div className="flex items-center my-2">
                <div className="text-textprimary">
                  <TbWorldWww />
                </div>
                <h1 className="mt-0 mb-0 px-4 font-semibold text-sm">
                  Cross-Browser Compatibility
                </h1>
              </div>
              <div className="flex items-center my-2">
                <div className="text-textprimary">
                  <TbWorldWww />
                </div>
                <h1 className="mt-0 mb-0 px-4 font-semibold text-sm">
                  Code Optimization
                </h1>
              </div>
            </div>
          </article>
          <article
            onMouseEnter={() => setIsHoverCard3(true)}
            onMouseLeave={() => setIsHoverCard3(false)}
            className="border-gray-800 mx-6 my-4 md:my-0 p-4 border md:hover:border-textprimary border-solid rounded-xl md:w-5/12 2xl:w-4/12 duration-500"
          >
            <div className="flex justify-center mt-4 mb-8 w-full">
              <img
                src="/Images/card6.webp"
                className="w-9/12"
                alt="Next Js Developer"
              />
            </div>
            <div
              className={`mr-2 ml-4 ${
                isHoverCard3
                  ? "md:text-textprimary text-gray-400"
                  : " text-gray-400 [>h1]:text-white"
              }`}
            >
              <h1 className="mt-0 mb-0 font-semibold text-2xl text-center">
                NEXT JS
              </h1>
              <p className="my-4 font-normal text-base">
                Empowering the Future of Server-Side Rendering! Do you crave the
                advantages of server-side rendering and seamless page
                transitions? Lets partner up to harness the power of this
                remarkable framework and elevate your web projects.
              </p>
              <div className="flex items-center my-2">
                <div className="text-textprimary">
                  <TbWorldWww />
                </div>
                <h1 className="mt-0 mb-0 px-4 font-semibold text-sm">
                  Server-Side Rendering (SSR)
                </h1>
              </div>

              <div className="flex items-center my-2">
                <div className="text-textprimary">
                  <TbWorldWww />
                </div>
                <h1 className="mt-0 mb-0 px-4 font-semibold text-sm">
                  Custom API Routes
                </h1>
              </div>

              <div className="flex items-center my-2">
                <div className="text-textprimary">
                  <TbWorldWww />
                </div>
                <h1 className="mt-0 mb-0 px-4 font-semibold text-sm">
                  Enhanced User Experience
                </h1>
              </div>

              <div className="flex items-center my-2">
                <div className="text-textprimary">
                  <TbWorldWww />
                </div>
                <h1 className="mt-0 mb-0 px-4 font-semibold text-sm">
                  Scalable and Secure
                </h1>
              </div>
            </div>
          </article>
        </div>
      </Fade>
    </section>
  );
}
