export default function TwoColumns() {
   return (
      <article className="lg:flex items-center my-16 lg:my-20 lg:px-16 2xl:px-0 text-sm lg:text-base 2xl:text-lg">
         <div className="lg:flex justify-center items-center  2xl:pl-0 lg:w-8/12">
            <div className="w-full text-left space-y-4">
               <h1 className=" font-normal text-black text-xl lg:text-3xl">
                  Meet your&nbsp;
                  <span className="font-semibold text-primaryBackground">
                     Next.js Full-Stack Expert
                  </span>
               </h1>

               <p className="font-normal  text-primaryBackground ">
                  With 4 years of professional experience and&nbsp;
                  <span className="font-semibold hover:text-[#1F57C3] group  duration-300 ">
                     <a
                        href="https://www.upwork.com/freelancers/dishantgusain"
                        target="_blank"
                     >
                        <svg
                           viewBox="0 0 500 500"
                           xmlns="http://www.w3.org/2000/svg"
                           className=" group-hover:border-[#1F57C3] duration-300  border-black border-2 w-4 lg:w-5 2xl:w-6 rounded-full inline-flex"
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
                                 fill=""
                                 className="group-hover:fill-[#1F57C3]  duration-300 "
                              />
                              <path
                                 d="M 28.006 7.525 C 30.218 6.606 21.665 9.928 21.665 9.928 C 23.332 11.596 16.212 2.737 15.559 2.699 C 15.085 2.671 8.297 11.063 9.445 9.915 C 9.445 9.915 0.898 6.622 3.075 7.525 C 2.855 6.118 7.493 17.113 7.519 18.281 C 14.796 18.281 18.557 18.281 23.564 18.281 C 23.811 16.203 28.051 7.306 28.006 7.525 Z"
                                 fill=""
                                 className="group-hover:fill-[#1F57C3] duration-300 "
                              />
                           </g>
                        </svg>{" "}
                        100% job success score on Upwork,
                     </a>
                  </span>
                  &nbsp; I specialize in front-end development as a highly
                  skilled full-stack developer. My expertise includes
                  building&nbsp;
                  <span className="font-semibold text-primaryBackground">
                     responsive, pixel-perfect, and visually appealing front-end
                     UIs,&nbsp;
                  </span>
                  as well as full-stack React web applications using Next.js,
                  with TailwindCSS and TypeScript. I also have extensive
                  experience working with NoSQL databases such as Firebase
                  Firestore and MongoDB, along with implementation and handling
                  of third-party APIs.
               </p>
            </div>
         </div>

         <div className="lg:flex justify-center items-center pt-10 lg:pt-0  lg:pl-20 lg:w-4/12">
            <div className="w-full text-left">
               <div className="md:flex items-center py-2">
                  <h2 className="font-medium text-base sm:text-lg">Name:</h2>
                  <h2 className="lg:pl-2   text-primaryBackground  ">
                     Dishant Gusain
                  </h2>
               </div>
               <div className="bg-gray-700 w-full h-[1px]" />
               <div className="md:flex items-center py-2">
                  <h2 className="font-medium text-base sm:text-lg">Email:</h2>
                  <h2
                     className="lg:pl-2   text-primaryBackground  "
                     tw=""
                  >
                     dyno3ddd@gmail.com
                  </h2>
               </div>
               <div className="bg-gray-700 w-full h-[1px]" />
               <div className="md:flex items-center py-2">
                  <h2 className="font-medium text-base sm:text-lg">Age:</h2>
                  <h2 className="lg:pl-2   text-primaryBackground  ">26</h2>
               </div>
               <div className="bg-gray-700 w-full h-[1px]" />
               <div className="md:flex items-center py-2">
                  <h2 className="font-medium text-base sm:text-lg">From:</h2>
                  <h2 className="lg:pl-2   text-primaryBackground  ">
                     Patiala, India
                  </h2>
               </div>
            </div>
         </div>
      </article>
   );
}
