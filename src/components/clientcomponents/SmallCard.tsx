
import React from "react";

interface TestProps {
  title: string;
  tag1: string;
  tag2: string;
  imgSrc: string;
  href: string;
  imgAlt: string;
}

export default function SmallCard({
  tag1,
  tag2,
  title,
  imgSrc,
  href,
  imgAlt,
}: TestProps) {

  return (
    <div className="relative sm:mx-6 mb-20 sm:mb-0 md:w-1/2">
      <div
        className="relative h-full"
      >
        <a href={href} target="_blank" className="no-underline">
          <div className="relative">
          <div className="relative md:h-[30rem] group">
            <div className="top-0 absolute -inset-y-1 inset-x-2 bg-yellow-100 opacity-0 group-hover:opacity-50 blur rounded-lg w-full transition duration-700 group-hover:duration-600">sadasd</div>
          
            <img
              src={imgSrc}

              alt={imgAlt}
              className="relative flex justify-center rounded-2xl w-full h-full object-cover"
            /></div>
            <div className="bottom-2 left-2 z-10 absolute flex sm:flex">
              <div className="bg-white mx-2 px-2 md:px-3 rounded-2xl text-black text-sm md:text-base">
                {tag1}
              </div>
              <div className="bg-white mx-2 px-2 md:px-3 rounded-2xl text-black text-sm md:text-base">
                {tag2}
              </div>
            </div>
          </div>

          <h2 className="my-6 text-base text-white sm:text-2xl">{title}</h2>
        </a>
      </div>
    </div>
  );
}
