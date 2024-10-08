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
      { threshold: 0.3 }
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
    <section className="relative bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-orange-500 via-orange-300 to-orange-100 pt-20 pb-28 w-full">
      <div className="mb-10 text-center">
        <div className="inline bg-black py-1">
          <h1 className="inline bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] bg-black bg-clip-text from-orange-500 via-orange-300 to-orange-100 mt-0 mb-0 px-4 font-normal text-base text-transparent sm:text-lg md:text-lg">
            My Skills
          </h1></div>
        <h2 className="mt-0 mb-2 font-semibold text-2xl md:text-4xl">
          Expertise
        </h2>
      </div>

      <div className="md:flex justify-between items-start lg:px-48 2xl:px-72">
        <div className="md:flex justify-center items-center px-10 md:w-1/2">
          <div className="w-full">
            <div className="my-10 w-full">
              <div className="flex justify-between mb-2 w-full">
                <h1 className="mt-0 mb-0 font-normal text-base md:text-lg">
                  HTML
                </h1>
                <p className="mt-0 mb-0 font-normal text-base md:text-lg">
                  100%
                </p>
              </div>
              <div className="bg-orange-300 rounded-3xl w-full h-1 md:h-2">
                <div
                  ref={elementRef}
                  className={`transition-opacity duration-1000 ${isVisible ? "animate-slideRight" : ""
                    } bg-black rounded-3xl h-full  w-full`}
                />
              </div>
            </div>

            <div className="my-10 w-full">
              <div className="flex justify-between mb-2 w-full">
                <h1 className="mt-0 mb-0 font-normal text-base md:text-lg">
                  CSS
                </h1>
                <p className="mt-0 mb-0 font-normal text-base md:text-lg">
                  100%
                </p>
              </div>
              <div className="bg-orange-300 rounded-3xl w-full h-1 md:h-2">
                <div
                  className={`transition-opacity duration-1000 ${isVisible ? "animate-slideRight" : ""
                    } bg-black rounded-3xl h-full  w-full`}
                />
              </div>
            </div>

            <div className="my-10 w-full">
              <div className="flex justify-between mb-2 w-full">
                <h1 className="mt-0 mb-0 font-normal text-base md:text-lg">
                  JavaScript
                </h1>
                <p className="mt-0 mb-0 font-normal text-base md:text-lg">
                  95%
                </p>
              </div>
              <div className="bg-orange-300 rounded-3xl w-full h-1 md:h-2">
                <div
                  className={`transition-opacity duration-1000 ${isVisible ? "animate-slideRight" : ""
                    } bg-black rounded-3xl h-full  w-[95%]`}
                />
              </div>
            </div>

            <div className="my-10 w-full">
              <div className="flex justify-between mb-2 w-full">
                <h1 className="mt-0 mb-0 font-normal text-base md:text-lg">
                  Tailwind CSS
                </h1>
                <p className="mt-0 mb-0 font-normal text-base md:text-lg">
                  100%
                </p>
              </div>
              <div className="bg-orange-300 rounded-3xl w-full h-1 md:h-2">
                <div
                  className={`transition-opacity duration-1000 ${isVisible ? "animate-slideRight" : ""
                    } bg-black rounded-3xl h-full  w-full`}
                />
              </div>
            </div>

            <div className="my-10 w-full">
              <div className="flex justify-between mb-2 w-full">
                <h1 className="mt-0 mb-0 font-normal text-base md:text-lg">
                  Redux Toolkit
                </h1>
                <p className="mt-0 mb-0 font-normal text-base md:text-lg">
                  90%
                </p>
              </div>
              <div className="bg-orange-300 rounded-3xl w-full h-1 md:h-2">
                <div
                  className={`transition-opacity duration-1000 ${isVisible ? "animate-slideRight" : ""
                    } bg-black rounded-3xl h-full  w-[90%]`}
                />
              </div>
            </div>

            <div className="my-10 w-full">
              <div className="flex justify-between mb-2 w-full">
                <h1 className="mt-0 mb-0 font-normal text-base md:text-lg">
                  Google Firebase Console
                </h1>
                <p className="mt-0 mb-0 font-normal text-base md:text-lg">
                  95%
                </p>
              </div>
              <div className="bg-orange-300 rounded-3xl w-full h-1 md:h-2">
                <div
                  className={`transition-opacity duration-1000 ${isVisible ? "animate-slideRight" : ""
                    } bg-black rounded-3xl h-full  w-[95%]`}
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
                <p className="mt-0 mb-0 font-normal text-base md:text-lg">
                  100%
                </p>
              </div>
              <div className="bg-orange-300 rounded-3xl w-full h-1 md:h-2">
                <div
                  className={`transition-opacity duration-1000 ${isVisible ? "animate-slideRight" : ""
                    } bg-black rounded-3xl h-full  w-full`}
                />
              </div>
            </div>

            <div className="my-10 w-full">
              <div className="flex justify-between mb-2 w-full">
                <h1 className="mt-0 mb-0 font-normal text-base md:text-lg">
                  Next Js
                </h1>
                <p className="mt-0 mb-0 font-normal text-base md:text-lg">
                  100%
                </p>
              </div>
              <div className="bg-orange-300 rounded-3xl w-full h-1 md:h-2">
                <div
                  className={`transition-opacity duration-1000 ${isVisible ? "animate-slideRight" : ""
                    } bg-black rounded-3xl h-full  w-full`}
                />
              </div>
            </div>

            <div className="my-10 w-full">
              <div className="flex justify-between mb-2 w-full">
                <h1 className="mt-0 mb-0 font-normal text-base md:text-lg">
                  Front-End Development
                </h1>
                <p className="mt-0 mb-0 font-normal text-base md:text-lg">
                  100%
                </p>
              </div>
              <div className="bg-orange-300 rounded-3xl w-full h-1 md:h-2">
                <div
                  className={`transition-opacity duration-1000 ${isVisible ? "animate-slideRight" : ""
                    } bg-black rounded-3xl h-full  w-full`}
                />
              </div>
            </div>

            <div className="my-10 w-full">
              <div className="flex justify-between mb-2 w-full">
                <h1 className="mt-0 mb-0 font-normal text-base md:text-lg">
                  Back-End Development
                </h1>
                <p className="mt-0 mb-0 font-normal text-base md:text-lg">
                  80%
                </p>
              </div>
              <div className="bg-orange-300 rounded-3xl w-full h-1 md:h-2">
                <div
                  className={`transition-opacity duration-1000 ${isVisible ? "animate-slideRight" : ""
                    } bg-black rounded-3xl h-full  w-[80%]`}
                />
              </div>
            </div>

            <div className="my-10 w-full">
              <div className="flex justify-between mb-2 w-full">
                <h1 className="mt-0 mb-0 font-normal text-base md:text-lg">
                  Twin Macro (React Library)
                </h1>
                <p className="mt-0 mb-0 font-normal text-base md:text-lg">
                  95%
                </p>
              </div>
              <div className="bg-orange-300 rounded-3xl w-full h-1 md:h-2">
                <div
                  className={`transition-opacity duration-1000 ${isVisible ? "animate-slideRight" : ""
                    } bg-black rounded-3xl h-full  w-[95%]`}
                />
              </div>
            </div>

            <div className="my-10 w-full">
              <div className="flex justify-between mb-2 w-full">
                <h1 className="mt-0 mb-0 font-normal text-base md:text-lg">
                  Adobe XD / FIGMA
                </h1>
                <p className="mt-0 mb-0 font-normal text-base md:text-lg">
                  90%
                </p>
              </div>
              <div className="bg-orange-300 rounded-3xl w-full h-1 md:h-2">
                <div
                  className={`transition-opacity duration-1000 ${isVisible ? "animate-slideRight" : ""
                    } bg-black rounded-3xl h-full  w-[90%]`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
