import AboutCards from "./AboutCards";
import TwoColumns from "./twoColumns";

export default function AboutMe() {
  return (
    <section className="relative bg-textprimary px-6 2xl:px-80 pt-40 pb-20">
      <div className="mb-10 text-center">
        <h2 className="inline bg-black mt-0 mb-0 px-4 font-normal text-textprimary text-xl">
          About Me
        </h2>
        <h2 className="mt-0 mb-2 font-semibold text-3xl text-black md:text-4xl">
          Know Me More
        </h2>
      </div>
      <TwoColumns />
      <AboutCards />
    </section>
  );
}
