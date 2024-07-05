import ContactMe from "@/components/clientcomponents/ContactMe";
import MySkills from "@/components/clientcomponents/MySkills";
import ScrollToTopButton from "@/components/clientcomponents/ScrollToTopButton";
import Services from "@/components/clientcomponents/Services";
import AboutMe from "@/components/servercomponents/AboutMe";
import Hero from "@/components/servercomponents/Hero";
import Projects from "@/components/servercomponents/Projects";
import { FaArrowUp } from "react-icons/fa";

export default function Home() {
  return (

    <main className="">

    
      
      <Hero />
      


      <AboutMe />
      <Projects />
      <MySkills />

      <Services />
<ScrollToTopButton/>

      <ContactMe />

    </main>
  );
}
