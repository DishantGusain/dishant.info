export default function TwoColumns() {
   return (
      <article className="lg:flex items-center my-16 lg:my-20">
         <div className="lg:flex justify-center items-center  2xl:pl-0 lg:w-8/12">
            <div className="w-full text-left space-y-4">
               <h1 className=" font-normal text-black text-xl lg:text-3xl">
                  Meet your&nbsp;
                  <span className="font-semibold text-primaryBackground">
                     Next.js Full-Stack Expert
                  </span>
               </h1>

               <p className="font-normal text-base text-primaryBackground sm:text-lg leading-tight">
                  With 4 years of professional experience and 100% job success score on Wpwork, I specialize in
                  front-end development as a highly skilled full-stack
                  developer. My expertise includes building&nbsp;
                  <span className="font-semibold text-primaryBackground">
                     responsive, pixel-perfect, and visually appealing front-end
                     UIs,&nbsp;
                  </span>
                  as well as full-stack React web applications using Next.js,
                  with TailwindCSS and TypeScript. I also have extensive
                  experience working with NoSQL databases such as Firebase
                  Firestore and MongoDB, along with implementing and handling
                  third-party APIs.
               </p>
            </div>
         </div>

         <div className="lg:flex justify-center items-center pt-10 lg:pt-0  lg:pl-20 lg:w-4/12">
            <div className="w-full text-left">
               <div className="md:flex items-center py-2">
                  <h2 className="font-semibold text-base sm:text-lg">Name:</h2>
                  <h2 className="pl-2 font-semibold text-base text-primaryBackground sm:text-lg">
                     Dishant Gusain
                  </h2>
               </div>
               <div className="bg-gray-700 w-full h-[1px]" />
               <div className="md:flex items-center py-2">
                  <h2 className="font-semibold text-base sm:text-lg">Email:</h2>
                  <h2
                     className="pl-2 font-semibold text-base text-primaryBackground sm:text-lg"
                     tw=""
                  >
                     dyno3ddd@gmail.com
                  </h2>
               </div>
               <div className="bg-gray-700 w-full h-[1px]" />
               <div className="md:flex items-center py-2">
                  <h2 className="font-semibold text-base sm:text-lg">Age:</h2>
                  <h2 className="pl-2 font-semibold text-base text-primaryBackground sm:text-lg">
                     26
                  </h2>
               </div>
               <div className="bg-gray-700 w-full h-[1px]" />
               <div className="md:flex items-center py-2">
                  <h2 className="font-semibold text-base sm:text-lg">From:</h2>
                  <h2 className="pl-2 font-semibold text-base text-primaryBackground sm:text-lg">
                     Patiala, India
                  </h2>
               </div>
            </div>
         </div>
      </article>
   );
}
