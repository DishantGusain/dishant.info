import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dishant Gusain | React/Next Js Website Application Developer",

  description:
    "I'm a React web developer with 3 years of commercial development experience. I enjoy developing Dynamic & Responsive UI/UX, Front-End React Website Applications using modern frameworks like Next.js that provide real value to the end user. Currently working as a full time Freelancer in UPWORK.",

  keywords:
    "Dishant Gusain, React, Next, Front End, Developer, Front-End, Freelancer, Upwork, Talent, Responsive, HTML, Tailwind, CSS, JavaScript, Web Application, India, Expertise, Upwork, TypeScript, NodeJS, Figma, Figma to React, SPA, Single page application, Top Rated",

  authors: [{ name: "Dishant Gusain", url: "https://dishant.info/" }],

  creator: "Dishant Gusain",

  openGraph: {
    type: "website",
    title: "Dishant Gusain | React/Next Js Website Application Developer",
    url: "https://dishant.info/",
    description:
      "I'm a React web developer with 3 years of commercial development experience. I enjoy developing Dynamic & Responsive UI/UX, Front-End React Website Applications using modern frameworks like Next.js that provide real value to the end user. Currently working as a full time Freelancer in UPWORK.",
    images: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/dishant-portfolio-nextjs.appspot.com/o/Dishant%20Gusain%20React%20Next%20Js%20Responsive%20Front%20End.png?alt=media&token=9d7246ab-c949-4c4b-8a09-4b31778e9e3d",
        alt: "Dishant Gusain's portfolio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Dishant Gusain | React/Next Js Website Application Developer</title>
        <meta
          name="description"
          content="I'm a React web developer with 3 years of commercial development experience. I enjoy developing Dynamic & Responsive UI/UX, Front-End React Website Applications using modern frameworks like Next.js that provide real value to the end user. Currently working as a full time Freelancer in UPWORK."
        />

        <meta
          name="keywords"
          content="Dishant Gusain, React, Next.js, freelance,  Front End, Developer, Front-End, Freelancer, Upwork, Talent, Responsive, HTML, Tailwind, CSS, JavaScript, Web Application, India, Expertise, Upwork, TypeScript, NodeJS, Figma, Figma to React, SPA, Single page application, Top Rated"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dishant.info/" />
        <meta
          property="og:title"
          content="Dishant Gusain | React/Next Js Website Application Developer"
        />
        <meta
          property="og:description"
          content="I'm a React web developer with 3 years of commercial development experience. I enjoy developing Dynamic & Responsive UI/UX, Front-End React Website Applications using modern frameworks like Next.js that provide real value to the end user. Currently working as a full time Freelancer in UPWORK."
        />

        <meta
          property="og:image"
          itemProp="image"
          content="https://firebasestorage.googleapis.com/v0/b/dishant-portfolio-nextjs.appspot.com/o/Dishant%20Gusain%20React%20Next%20Js%20Responsive%20Front%20End.png?alt=media&token=9d7246ab-c949-4c4b-8a09-4b31778e9e3d"
        />
        <meta property="og:image:type" content="image/png" />

        {/* --------------------- Twitter ----------------- */}

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="dishant.info" />
        <meta property="twitter:url" content="https://dishant.info" />
        <meta
          name="twitter:title"
          content="Dishant Gusain | React/Next Js Website Application Developer"
        />
        <meta
          name="twitter:description"
          content="I'm a React web developer with 3 years of commercial development experience. I enjoy developing Dynamic & Responsive UI/UX, Front-End React Website Applications using modern frameworks like Next.js that provide real value to the end user. Currently working as a full time Freelancer in UPWORK."
        />
        <meta
          name="twitter:image"
          content="https://firebasestorage.googleapis.com/v0/b/dishant-portfolio-nextjs.appspot.com/o/Dishant%20Gusain%20React%20Next%20Js%20Responsive%20Front%20End.png?alt=media&token=9d7246ab-c949-4c4b-8a09-4b31778e9e3d"
        />
      </Head>
      
      <body className={inter.className}>
      
        {children}

        <span
          itemProp="thumbnail"
          itemScope
          itemType="http://schema.org/ImageObject"
        >
          <link
            itemProp="url"
            href="https://firebasestorage.googleapis.com/v0/b/dishant-portfolio-nextjs.appspot.com/o/Dishant%20Gusain%20React%20Next%20Js%20Responsive%20Front%20End.png?alt=media&token=9d7246ab-c949-4c4b-8a09-4b31778e9e3d"
          />
        </span>
      </body>
    </html>
  );
}
