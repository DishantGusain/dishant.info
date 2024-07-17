import ContactMe from "@/components/clientcomponents/ContactMe";
import MySkills from "@/components/clientcomponents/MySkills";
import ScrollToTopButton from "@/components/clientcomponents/ScrollToTopButton";
import Services from "@/components/servercomponents/Services";
import AboutMe from "@/components/servercomponents/AboutMe";
import Hero from "@/components/servercomponents/Hero";
import Projects from "@/components/clientcomponents/Projects";

export default function Home() {
  return (

    <main className="">

      <Hero />
      <AboutMe />
      <Projects />
      <MySkills />
      <Services />
      <ScrollToTopButton />
      <ContactMe />

    </main>
  );
}