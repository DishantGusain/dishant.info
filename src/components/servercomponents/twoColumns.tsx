"use client";
import { Fade } from "react-awesome-reveal";

export default function TwoColumns() {
  return (
    <article className="md:flex items-center my-20">
      <div className="md:flex justify-center items-center sm:pl-20 2xl:pl-0 md:w-8/12">
        <Fade direction="left" triggerOnce>
          <div className="w-full text-left">
            <h1 className="mt-0 mb-0 pb-2 font-normal text-black text-xl md:text-3xl">
              I&apos;m a seasoned&nbsp;
              <span className="font-bold text-primaryBackground underline">
                React Developer,
              </span>
            </h1>

            <p className="font-normal text-lg text-primaryBackground">
              With 3 years of commercial development experience. I enjoy
              developing Dynamic & Responsive React Web Applications using
              modern frameworks like Next.js that provide real value to the end
              user. Delivering quality work within time and budget which meets
              client&apos;s requirements is my moto.
            </p>
          </div>
        </Fade>
      </div>

      <div className="md:flex justify-center items-center pt-10 md:pt-0 2xl:pl-20 md:w-4/12">
        <Fade direction="right" triggerOnce>
          <div className="w-full text-left">
            <div className="md:flex items-center py-2">
              <h2 className="font-semibold text-lg">Name:</h2>
              <h2 className="pl-2 font-semibold text-lg text-primaryBackground">
                Dishant Gusain
              </h2>
            </div>
            <div className="bg-gray-700 w-full h-[1px]" />
            <div className="md:flex items-center py-2">
              <h2 className="font-semibold text-lg">Email:</h2>
              <h2
                className="pl-2 font-semibold text-lg text-primaryBackground"
                tw=""
              >
                dyno3ddd@gmail.com
              </h2>
            </div>
            <div className="bg-gray-700 w-full h-[1px]" />
            <div className="md:flex items-center py-2">
              <h2 className="font-semibold text-lg">Age:</h2>
              <h2 className="pl-2 font-semibold text-lg text-primaryBackground">
                25
              </h2>
            </div>
            <div className="bg-gray-700 w-full h-[1px]" />
            <div className="md:flex items-center py-2">
              <h2 className="font-semibold text-lg">From:</h2>
              <h2 className="pl-2 font-semibold text-lg text-primaryBackground">
                Patiala, India
              </h2>
            </div>
          </div>
        </Fade>
      </div>
    </article>
  );
}
