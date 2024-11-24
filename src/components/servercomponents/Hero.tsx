import { BsArrowDownCircle } from "react-icons/bs";
import TsParticles from "./../clientcomponents/TsParticles";
import TypingAnimationComponent from "../clientcomponents/TypingAnimationComponent";
import Image from "next/image";

export default function Hero() {
   return (
      <section
         id="hero"
         className="relative bg-secondaryBackground"
      >
         <TsParticles />

         <div className="sm:block top-10 2xl:top-12 left-8 2xl:left-12 z-40 sm:absolute hidden">
            <img
               src="/Images/thoughtbubblenew.webp"
               className="w-24 2xl:w-28"
               alt="coding icon"
            />
         </div>

         <div className="z-50 lg:flex justify-center items-center px-10 xl:px-32 2xl:px-56 lg:h-screen ">
            <div className="z-50 flex justify-center items-center lg:ml-[10%] lg:pt-0 pb-20 lg:pb-0 text-left w-full lg:w-[50%] h-[45%] lg:h-full ">
               <div className=" w-full bg-secondaryBackground">
                  {/* <h1 className="text-right mt-0 mb-2 py-2 sm:py-0 font-bold text-5xl text-textprimary text-transparent md:text-7xl lg:text-8xl 2xl:text-9xl bg-clip-text bg-gradient-to-r from-orange-300 via-orange-100 to-orange-400">
                     DISHANT
                  </h1> */}

                  <h1 className="bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] mt-0 mb-0 font-extralight text-2xl text-left text-transparent md:text-3xl lg:text-4xl 2xl:text-4xl bg-clip-text from-orange-500 via-orange-300 to-orange-100">
                     Hi, I'm a
                  </h1>

                  <TypingAnimationComponent />
                  <h1 className="bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] mt-0 mb-0 font-light text-left text-lg text-transparent md:text-lg lg:text-xl 2xl:text-2xl bg-clip-text from-orange-500 via-orange-300 to-orange-100 ">
                     Specializing in{" "}
                     <span className="bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] px-1 font-medium text-black from-orange-500 via-orange-300 to-orange-100 animate-gradientX   text-nowrap">
                        React & Next.js
                     </span>
                     &nbsp;Development.
                  </h1>

                  <div className="sm:flex justify-start items-center sm:my-10 mt-10 text-black text-sm no-underline">
                     <div className="bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-orange-500 via-orange-300 to-orange-100 button button--pandora">
                        <a
                           className="bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] text-primaryBackground no-underline from-orange-500 via-orange-300 to-orange-100"
                           href="#portfolio"
                        >
                           &lt; View My Work /&gt;
                        </a>
                     </div>
                     <div className="flex items-center mt-4 sm:mt-0 ml-0 sm:ml-12 text-base text-white hover:underline cursor-pointer">
                        <a
                           href="#contactme"
                           className="bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] pr-2 font-semibold text-transparent no-underline bg-clip-text from-orange-500 via-orange-300 to-orange-100"
                        >
                           Contact Me
                        </a>

                        <BsArrowDownCircle className="text-orange-200" />
                     </div>
                  </div>

                  <div className="flex justify-start items-center text-white">
                     <div className="border-[#1F57C3] border-2 w-8 rounded-full">
                        <svg
                           viewBox="0 0 500 500"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <g
                              id="SVGRepo_bgCarrier"
                              strokeWidth="0"
                              transform="matrix(12.472274780273438, 0, 0, 12.472274780273438, 62.24164581298831, 97.35135650634771)"
                           />
                           <g
                              id="SVGRepo_tracerCarrier"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              stroke="#CCCCCC"
                              strokeWidth="0.144"
                              transform="matrix(12.472274780273438, 0, 0, 12.472274780273438, 62.24164581298831, 97.35135650634771)"
                           />
                           <g
                              id="SVGRepo_iconCarrier"
                              transform="matrix(12.472274780273438, 0, 0, 12.472274780273438, 54.15633773803714, 103.23158264160162)"
                           >
                              <path
                                 d="M 23.51 21.64 L 7.53 21.64 C 7.439 21.977 7.607 20.52 7.53 19.532 L 23.51 19.532 C 23.506 19.772 23.431 21.783 23.51 21.64 Z"
                                 fill="#1F57C3"
                              />
                              <path
                                 d="M 28.006 7.525 C 30.218 6.606 21.665 9.928 21.665 9.928 C 23.332 11.596 16.212 2.737 15.559 2.699 C 15.085 2.671 8.297 11.063 9.445 9.915 C 9.445 9.915 0.898 6.622 3.075 7.525 C 2.855 6.118 7.493 17.113 7.519 18.281 C 14.796 18.281 18.557 18.281 23.564 18.281 C 23.811 16.203 28.051 7.306 28.006 7.525 Z"
                                 fill="#1F57C3"
                              />
                           </g>
                        </svg>
                     </div>
                     <h1 className="ml-2">100% Job Success on Upwork</h1>
                  </div>
               </div>
            </div>
            <div className="flex items-center pt-6 sm:pt-32 md:pt-0 text-center w-full lg:w-[50%] h-1/12 lg:h-full  ">
               <div className="relative  w-80 md:w-96 2xl:w-99 h-80 md:h-96 2xl:h-99  ml-[5%] animate-ProfileAnimate">
                  {/* <div className="flex justify-center items-center mt-4 sm:mt-0 ml-0 sm:ml-12 text-white">
                     <div className="border-[#1F57C3] border-2 w-8 rounded-full">
                        <svg
                           viewBox="0 0 500 500"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <g
                              id="SVGRepo_bgCarrier"
                              strokeWidth="0"
                              transform="matrix(12.472274780273438, 0, 0, 12.472274780273438, 62.24164581298831, 97.35135650634771)"
                           />
                           <g
                              id="SVGRepo_tracerCarrier"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              stroke="#CCCCCC"
                              strokeWidth="0.144"
                              transform="matrix(12.472274780273438, 0, 0, 12.472274780273438, 62.24164581298831, 97.35135650634771)"
                           />
                           <g
                              id="SVGRepo_iconCarrier"
                              transform="matrix(12.472274780273438, 0, 0, 12.472274780273438, 54.15633773803714, 103.23158264160162)"
                           >
                              <path
                                 d="M 23.51 21.64 L 7.53 21.64 C 7.439 21.977 7.607 20.52 7.53 19.532 L 23.51 19.532 C 23.506 19.772 23.431 21.783 23.51 21.64 Z"
                                 fill="#1F57C3"
                              />
                              <path
                                 d="M 28.006 7.525 C 30.218 6.606 21.665 9.928 21.665 9.928 C 23.332 11.596 16.212 2.737 15.559 2.699 C 15.085 2.671 8.297 11.063 9.445 9.915 C 9.445 9.915 0.898 6.622 3.075 7.525 C 2.855 6.118 7.493 17.113 7.519 18.281 C 14.796 18.281 18.557 18.281 23.564 18.281 C 23.811 16.203 28.051 7.306 28.006 7.525 Z"
                                 fill="#1F57C3"
                              />
                           </g>
                        </svg>
                     </div>
                     <h1 className="ml-2">100% Job Success on Upwork</h1>
                  </div> */}
                  <img
                     src="/Images/hero.webp"
                     alt="Freelance Developer Icon Art"
                     className=" w-full h-full bg-secondaryBackground rounded-full object-contain"
                  />
               </div>
            </div>
         </div>
      </section>
   );
}
