import AboutCards from "../clientcomponents/AboutCards";
import TwoColumns from "./twoColumns";

export default function AboutMe() {
  return (
    <section className="relative bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-orange-500 via-orange-300 to-orange-100 px-10 md:px-16 2xl:px-48 3xl:px-72 pt-20 md:pt-40 pb-20">
      <div className="mb-10 text-center">

        <div className="inline bg-black py-1">
          <h1 className="inline bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] bg-black bg-clip-text from-orange-500 via-orange-300 to-orange-100 mt-0 mb-0 px-4 font-normal text-base text-transparent sm:text-lg md:text-lg">
            About Me
          </h1>
        </div>
        <h2 className="mt-0 mb-2 font-semibold text-2xl text-black md:text-4xl">
          Know Me More
        </h2>
      </div>
      <TwoColumns />
      <AboutCards />
    </section>
  );
}
