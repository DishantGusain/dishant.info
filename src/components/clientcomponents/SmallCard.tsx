"use client";
import React, { useState } from "react";

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
  const [isShown, setIsShown] = useState(false);

  return (
    <div className="relative sm:mx-6 mb-20 sm:mb-0 md:w-1/2">
      <div
        className="relative h-full"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        <a href={href} target="_blank" className="no-underline">
          <div className="relative h-[30rem]">
            <img
              src={imgSrc}
              
              alt={imgAlt}
              className="relative flex justify-center rounded-2xl w-full h-full object-cover"
            />
            {isShown === true ? (
              <div className="bottom-2 left-2 z-10 absolute flex sm:flex">
                <div className="bg-textprimary mx-2 px-3 rounded-2xl text-base text-black">
                  {tag1}
                </div>
                <div className="bg-textprimary mx-2 px-3 rounded-2xl text-base text-black">
                  {tag2}
                </div>
              </div>
            ) : (
              <div className="bottom-2 left-2 z-10 absolute flex sm:flex">
                <div className="bg-white mx-2 px-3 rounded-2xl text-base text-black">
                  {tag1}
                </div>
                <div className="bg-white mx-2 px-3 rounded-2xl text-base text-black">
                  {tag2}
                </div>
              </div>
            )}
          </div>

          {isShown === true ? (
            <h2 className="my-3 font-thin text-white text-xl underline">{title}</h2>
          ) : (
            <h2 className="my-3 font-thin text-white text-xl">{title}</h2>
          )}
        </a>
      </div>
    </div>
  );
}
