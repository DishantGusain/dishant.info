"use client";
import React, { useState } from "react";

interface TestProps {
  title: string;
  tag1: string;
  tag2: string;
  tag3: string;
  imgSrc: string;
  href: string;
  imgAlt: string;
}

export default function WideCard({
  tag1,
  tag2,
  tag3,
  title,
  imgSrc,
  href,
  imgAlt,
}: TestProps) {
  const [isShown, setIsShown] = useState(false);

  return (
    <div className="relative my-14">
      <div
        className="relative lg:mx-48 2xl:mx-24"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        <a href={href} target="_blank" className="no-underline">
          <div className="relative">
            <img
              src={imgSrc}
              alt={imgAlt}
              className="relative flex justify-center rounded-2xl w-full h-full object-contain"
            />
            {isShown === true ? (
              <div className="bottom-2 left-2 z-10 absolute flex sm:flex">
                <div className="bg-textprimary mx-2 px-3 rounded-2xl text-base text-black">
                  {tag1}
                </div>
                <div className="bg-textprimary mx-2 px-3 rounded-2xl text-base text-black">
                  {tag2}
                </div>
                <div className="bg-textprimary mx-2 px-3 rounded-2xl text-base text-black">
                  {tag3}
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
                <div className="bg-white mx-2 px-3 rounded-2xl text-base text-black">
                  {tag3}
                </div>
              </div>
            )}
          </div>
          <h2
            className="my-3 font-thin text-white text-xl"
            // css={[
            //   isShown === true ? className="underline" : className=""
            // ]}
          >
            {title}
          </h2>
        </a>
      </div>
    </div>
  );
}
