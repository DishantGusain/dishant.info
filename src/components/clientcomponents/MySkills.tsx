"use client";

import React, { useEffect, useRef, useState } from "react";

export default function MySkills() {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 } // Adjust the threshold as needed
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <section className="relative bg-primaryYellow pt-20 pb-28 w-full">
      <div className="mb-10 text-center">
        <h3 className="inline bg-black mt-0 mb-0 px-4 font-normal text-base text-primaryYellow sm:text-lg md:text-lg">
          My Skills
        </h3>
        <h3 className="mt-0 mb-2 font-semibold text-2xl md:text-4xl">
          Expertise
        </h3>
      </div>

      <div className="md:flex justify-between items-start lg:px-48 2xl:px-72">
        <div className="md:flex justify-center items-center px-10 md:w-1/2">
          <div className="w-full">
            <div className="my-10 w-full">
              <div className="flex justify-between mb-2 w-full">
                <h1 className="mt-0 mb-0 font-normal text-base md:text-lg">
                  HTML
                </h1>
                <h3 className="mt-0 mb-0 font-normal text-base md:text-lg">
                  100%
                </h3>
              </div>
              <div className="bg-yellow-400 rounded-3xl w-full h-1 md:h-2">
                <div
                  ref={elementRef}
                  className={`transition-opacity duration-1000 ${
                    isVisible ? "animate-slideRight" : ""
                  } bg-gray-700 rounded-3xl h-full  w-full`}
                />
              </div>
            </div>

            <div className="my-10 w-full">
              <div className="flex justify-between mb-2 w-full">
                <h1 className="mt-0 mb-0 font-normal text-base md:text-lg">
                  CSS
                </h1>
                <h3 className="mt-0 mb-0 font-normal text-base md:text-lg">
                  100%
                </h3>
              </div>
              <div className="bg-yellow-400 rounded-3xl w-full h-1 md:h-2">
                <div
                  className={`transition-opacity duration-1000 ${
                    isVisible ? "animate-slideRight" : ""
                  } bg-gray-700 rounded-3xl h-full  w-full`}
                />
              </div>
            </div>

            <div className="my-10 w-full">
              <div className="flex justify-between mb-2 w-full">
                <h1 className="mt-0 mb-0 font-normal text-base md:text-lg">
                  JavaScript
                </h1>
                <h3 className="mt-0 mb-0 font-normal text-base md:text-lg">
                  95%
                </h3>
              </div>
              <div  className="bg-yellow-400 rounded-3xl w-full h-1 md:h-2">
                <div
                  className={`transition-opacity duration-1000 ${
                    isVisible ? "animate-slideRight" : ""
                  } bg-gray-700 rounded-3xl h-full  w-[95%]`}
                />
              </div>
            </div>

            <div className="my-10 w-full">
              <div className="flex justify-between mb-2 w-full">
                <h1 className="mt-0 mb-0 font-normal text-base md:text-lg">
                  Tailwind CSS
                </h1>
                <h3 className="mt-0 mb-0 font-normal text-base md:text-lg">
                  100%
                </h3>
              </div>
              <div className="bg-yellow-400 rounded-3xl w-full h-1 md:h-2">
                <div
                  className={`transition-opacity duration-1000 ${
                    isVisible ? "animate-slideRight" : ""
                  } bg-gray-700 rounded-3xl h-full  w-full`}
                />
              </div>
            </div>

            <div className="my-10 w-full">
              <div className="flex justify-between mb-2 w-full">
                <h1 className="mt-0 mb-0 font-normal text-base md:text-lg">
                  Redux Toolkit
                </h1>
                <h3 className="mt-0 mb-0 font-normal text-base md:text-lg">
                  90%
                </h3>
              </div>
              <div className="bg-yellow-400 rounded-3xl w-full h-1 md:h-2">
                <div
                  className={`transition-opacity duration-1000 ${
                    isVisible ? "animate-slideRight" : ""
                  } bg-gray-700 rounded-3xl h-full  w-[90%]`}
                />
              </div>
            </div>

            <div className="my-10 w-full">
              <div className="flex justify-between mb-2 w-full">
                <h1 className="mt-0 mb-0 font-normal text-base md:text-lg">
                  Google Firebase Console
                </h1>
                <h3 className="mt-0 mb-0 font-normal text-base md:text-lg">
                  95%
                </h3>
              </div>
              <div className="bg-yellow-400 rounded-3xl w-full h-1 md:h-2">
                <div
                  className={`transition-opacity duration-1000 ${
                    isVisible ? "animate-slideRight" : ""
                  } bg-gray-700 rounded-3xl h-full  w-[95%]`}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex justify-center items-center px-10 md:w-1/2">
          <div className="w-full">
            <div className="my-10 w-full">
              <div className="flex justify-between mb-2 w-full">
                <h1 className="mt-0 mb-0 font-normal text-base md:text-lg">
                  React Js
                </h1>
                <h3 className="mt-0 mb-0 font-normal text-base md:text-lg">
                  100%
                </h3>
              </div>
              <div className="bg-yellow-400 rounded-3xl w-full h-1 md:h-2">
                <div
                  className={`transition-opacity duration-1000 ${
                    isVisible ? "animate-slideRight" : ""
                  } bg-gray-700 rounded-3xl h-full  w-full`}
                />
              </div>
            </div>

            <div className="my-10 w-full">
              <div className="flex justify-between mb-2 w-full">
                <h1 className="mt-0 mb-0 font-normal text-base md:text-lg">
                  Next Js
                </h1>
                <h3 className="mt-0 mb-0 font-normal text-base md:text-lg">
                  100%
                </h3>
              </div>
              <div className="bg-yellow-400 rounded-3xl w-full h-1 md:h-2">
                <div
                  className={`transition-opacity duration-1000 ${
                    isVisible ? "animate-slideRight" : ""
                  } bg-gray-700 rounded-3xl h-full  w-full`}
                />
              </div>
            </div>

            <div className="my-10 w-full">
              <div className="flex justify-between mb-2 w-full">
                <h1 className="mt-0 mb-0 font-normal text-base md:text-lg">
                  Front-End Development
                </h1>
                <h3 className="mt-0 mb-0 font-normal text-base md:text-lg">
                  100%
                </h3>
              </div>
              <div className="bg-yellow-400 rounded-3xl w-full h-1 md:h-2">
                <div
                  className={`transition-opacity duration-1000 ${
                    isVisible ? "animate-slideRight" : ""
                  } bg-gray-700 rounded-3xl h-full  w-full`}
                />
              </div>
            </div>

            <div className="my-10 w-full">
              <div className="flex justify-between mb-2 w-full">
                <h1 className="mt-0 mb-0 font-normal text-base md:text-lg">
                  Back-End Development
                </h1>
                <h3 className="mt-0 mb-0 font-normal text-base md:text-lg">
                  80%
                </h3>
              </div>
              <div className="bg-yellow-400 rounded-3xl w-full h-1 md:h-2">
                <div
                  className={`transition-opacity duration-1000 ${
                    isVisible ? "animate-slideRight" : ""
                  } bg-gray-700 rounded-3xl h-full  w-[80%]`}
                />
              </div>
            </div>

            <div className="my-10 w-full">
              <div className="flex justify-between mb-2 w-full">
                <h1 className="mt-0 mb-0 font-normal text-base md:text-lg">
                  Twin Macro (React Library)
                </h1>
                <h3 className="mt-0 mb-0 font-normal text-base md:text-lg">
                  95%
                </h3>
              </div>
              <div className="bg-yellow-400 rounded-3xl w-full h-1 md:h-2">
                <div
                  className={`transition-opacity duration-1000 ${
                    isVisible ? "animate-slideRight" : ""
                  } bg-gray-700 rounded-3xl h-full  w-[95%]`}
                />
              </div>
            </div>

            <div className="my-10 w-full">
              <div className="flex justify-between mb-2 w-full">
                <h1 className="mt-0 mb-0 font-normal text-base md:text-lg">
                  Adobe XD / FIGMA
                </h1>
                <h3 className="mt-0 mb-0 font-normal text-base md:text-lg">
                  90%
                </h3>
              </div>
              <div className="bg-yellow-400 rounded-3xl w-full h-1 md:h-2">
                <div
                  className={`transition-opacity duration-1000 ${
                    isVisible ? "animate-slideRight" : ""
                  } bg-gray-700 rounded-3xl h-full  w-[90%]`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
