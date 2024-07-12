
export default function TwoColumns() {
  return (
    <article className="md:flex items-center my-16 md:my-20">
      <div className="md:flex justify-center items-center sm:pl-20 2xl:pl-0 md:w-8/12">
        <div className="w-full text-left">
          <h1 className="mt-0 mb-0 pb-2 font-normal text-black text-xl md:text-3xl">
           
            Front-End&nbsp;
            <span className="font-bold text-primaryBackground">
            Landing Page Expert
            </span>
          </h1>

          <p className="font-normal text-base text-primaryBackground sm:text-lg">
            I&apos;m a highly skilled  Full Stack developer with 3 years of professional experience specializing in Front-End development. I have a proven track record of successfully building Pixel-Perfect Responsive Front-End UI/UX and Full-Stack React Web Applications using modern frameworks like Next.js with implementation of TailwindCSS & TypeScript.
          </p>
        </div>
      </div>

      <div className="md:flex justify-center items-center pt-10 md:pt-0 2xl:pl-20 md:w-4/12">
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
              25
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
