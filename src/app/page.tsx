import AboutMe from "@/components/servercomponents/AboutMe";
import Hero from "@/components/servercomponents/Hero";
import Projects from "@/components/servercomponents/Projects";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <AboutMe />

      <Projects />
      {/*

      <MySkills />

      <Services />

      <a href="#hero" className="right-10 bottom-10 z-50 fixed bg-yellow-300 p-4 border border-black border-solid rounded-full">
        <FaArrowUp />
      </a>
      
      <ContactMe /> */}
    </main>
  );
}
