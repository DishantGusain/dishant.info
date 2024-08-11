import React from "react";

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
   return (
      <div className="relative my-14">
         <div className="relative lg:mx-48 2xl:mx-24 group">
            <a
               href={href}
               target="_blank"
               className="no-underline"
            >
               <div className="relative">
                  <div className="relative group">
                     <div className="top-0 absolute -inset-y-2 inset-x-2 bg-orange-200 opacity-0 group-hover:opacity-50 blur rounded-lg w-full transition duration-700 group-hover:duration-600">
                        sadasd
                     </div>
                     <img
                        src={imgSrc}
                        alt={imgAlt}
                        className="relative flex justify-center border-orange-200 border border-solid rounded-2xl w-full h-full object-contain"
                     />
                  </div>

                  <div className="bottom-4 left-2 z-10 absolute flex sm:flex">
                     <div className="bg-white mx-2 px-2 md:px-3 rounded-lg text-black text-xs md:text-sm">
                        {tag1}
                     </div>
                     <div className="bg-white mx-2 px-2 md:px-3 rounded-lg text-black text-xs md:text-sm">
                        {tag2}
                     </div>
                     <div className="bg-white mx-2 px-2 md:px-3 rounded-lg text-black text-xs md:text-sm">
                        {tag3}
                     </div>
                  </div>
               </div>

               <h2 className="my-6 text-base text-white sm:text-2xl">
                  {title}
               </h2>
            </a>
         </div>
      </div>
   );
}
