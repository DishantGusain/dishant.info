"use client";
import WideCard from "../clientcomponents/WideCard";
import SmallCard from "../clientcomponents/SmallCard";
import { Fade } from "react-awesome-reveal";
import TracingBeam from "../clientcomponents/tracing-beam";

const FirstProject = {
  imgSrc: "/Images/SinghDrywallShowcaseBanner.webp",
  title: "SinghDrywall Business Website",
  tag1: "Next js",
  tag2: "Tailwind",
  tag3: "twin.Macro",
  imgAlt: "SinghDrywall Business Website",
};
const SecondProject = {
  imgSrc: "/Images/portfolio2.webp",
  title: "Job Portal Website",
  tag1: "Database Integration",
  tag2: "Dynamic URL",
  imgAlt: "Job Portal Website",
};
const ThirdProject = {
  imgSrc: "/Images/portfolio33.webp",
  title: "Admin Dashboard for Vending Machine Distributors",
  tag1: "Single Page Application",
  tag2: "Redux-toolkit",
  imgAlt: "Admin Dashboard for Vending Machine Distributors",
};

const FourProject = {
  imgSrc: "/Images/portfolio555.webp",
  title:
    "A Strategic Sourcing software for procurement teams to stay organized.",
  tag1: "React js",
  tag2: "Next.js",
  tag3: "TailwindCSS",
  imgAlt:
    "A Strategic Sourcing software for procurement teams to stay organized",
};

const FiveProject = {
  imgSrc: "/Images/VIVIANlShowcaseBanner.webp",
  title:
    "Modern UI/UX Landing Page built for upcoming AI product web application.",
  tag1: "React js",
  tag2: "Framer",
  tag3: "Figma",
  imgAlt:
    "Modern UI/UX Landing Page built for upcoming AI product web application.",
};

export default function Projects() {
  return (
    <section id="portfolio" className="relative bg-primaryBackground">

      {/* px-6 2xl:px-80 */}

      <TracingBeam className=" ">
        <div className="px-6 2xl:px-80 pt-32 pb-10 text-center">
          <h1 className="inline bg-primaryYellow mt-0 mb-0 px-4 font-normal text-base text-black md:text-xl">
            Portfolio
          </h1>
          <h1 className="mt-0 mb-2 font-semibold text-2xl text-white md:text-4xl">
            Some of my most recent projects
          </h1>
        </div>

        <Fade triggerOnce className="px-6 2xl:px-80">
          <WideCard

            href="https://www.airflip.com/"
            imgSrc={FourProject.imgSrc}
            imgAlt={FourProject.imgAlt}
            title={FourProject.title}
            tag1={FourProject.tag1}
            tag2={FourProject.tag2}
            tag3={FourProject.tag3}

          />

          <div className="my-28 md:my-36">
            <WideCard

              href="https://copilot.vivian.com/"
              imgSrc={FiveProject.imgSrc}
              imgAlt={FiveProject.imgAlt}
              title={FiveProject.title}
              tag1={FiveProject.tag1}
              tag2={FiveProject.tag2}
              tag3={FiveProject.tag3}

            />
          </div>



          <div className="lg:flex justify-center md:my-36 md:mb-0 lg:px-48 2xl:px-20">

            <SmallCard

              href="https://job-portal-dishant.web.app/"
              imgSrc={SecondProject.imgSrc}
              imgAlt={SecondProject.imgAlt}
              title={SecondProject.title}
              tag1={SecondProject.tag1}
              tag2={SecondProject.tag2}

            />

            <SmallCard
              href="https://vendingmachine-b7b4b.web.app/"
              imgSrc={ThirdProject.imgSrc}
              imgAlt={ThirdProject.imgAlt}
              title={ThirdProject.title}
              tag1={ThirdProject.tag1}
              tag2={ThirdProject.tag2}
            />
          </div>
        </Fade>

        <Fade direction="up" triggerOnce className="md:mt-36 px-6 2xl:px-80 pb-10">


          <WideCard
            href="https://singhdrywall-435ca.web.app/"
            imgSrc={FirstProject.imgSrc}
            imgAlt={FirstProject.imgAlt}
            title={FirstProject.title}
            tag1={FirstProject.tag1}
            tag2={FirstProject.tag2}
            tag3={FirstProject.tag3}
          />
        </Fade>
      </TracingBeam>
    </section>
  );
};
