
export default function TwoColumns() {
  return (
    <article className="lg:flex items-center my-16 lg:my-20">
      <div className="lg:flex justify-center items-center  2xl:pl-0 lg:w-8/12">
        <div className="w-full text-left">
          <h1 className="mt-0 mb-0 pb-2 font-normal text-black text-xl lg:text-3xl">

            Front-End&nbsp;
            <span className="font-bold text-primaryBackground">
              Landing Page Expert
            </span>
          </h1>

          <p className="font-normal text-base text-primaryBackground sm:text-lg">
            With 4 years of professional experience, I specialize in Front-End development as a highly skilled Full Stack developer. My expertise includes building responsive, pixel-perfect Front-End UI/UX and Full-Stack React Web Applications using modern frameworks like Next.js, with a strong focus on TypeScript implementation.
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
