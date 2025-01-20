"use client";

import React, { useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";

export default function ContactMe() {
   const form = useRef<HTMLFormElement | null>(null);

   const sendEmail = (e: FormEvent) => {
      e.preventDefault();
      alert("Email Sent");
      if (form.current) {
         emailjs
            .sendForm(
               "service_0k0j9xb",
               "template_gx99p3q",
               form.current,
               "LPQqxrAw5NkUVSZei"
            )
            .then(
               (result) => {
                  console.log(result.text);

                  window.location.reload();
               },
               (error) => {
                  console.log(error.text);
               }
            );
      }
   };

   return (
      <section
         id="contactme"
         className="relative bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-orange-500 via-orange-300 to-orange-100 py-20 w-full"
      >
         <div className="mb-24 text-center">
            <div className="inline bg-black py-1">
               <h1 className="inline bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] bg-black bg-clip-text from-orange-500 via-orange-300 to-orange-100 mt-0 mb-0 px-4 font-normal text-base text-transparent sm:text-lg md:text-lg">
                  Contact Me
               </h1>
            </div>

            <h1 className="mt-0 mb-2 font-semibold text-2xl md:text-4xl">
               Let&apos;s Work Together
            </h1>
         </div>
         <div className="md:flex justify-between items-start md:px-32 2xl:px-80">
            <div className="md:flex justify-center items-center px-4 md:px-0 md:w-5/12">
               <div className="w-full text-left space-y-8">
                <div className="space-y-2 ">
                  <h1 className=" font-semibold text-2xl md:text-xl">
                     Get in touch !
                  </h1>
                  <p>
                     I would love to discuss and work on new projects and design challenges with you.
                     Please share as much info, as possible so we can get the
                     most out of our first catch-up.
                  </p> </div>
                  <div className="space-y-2 lg:space-y-0">
                  <h2 className="  font-semibold text-base md:text-xl">
                     Hire me on Upwork:
                  </h2>
                  <div className="">
                  <a
                     href="https://www.upwork.com/freelancers/dishantgusain"
                     target="_blank"
                  >
                     <h3 className="font-normal text-sm md:text-lg">
                        https://www.upwork.com/freelancers/dishantgusain
                     </h3>
                  </a></div>
                  </div>
                  <div className="space-y-2 lg:space-y-0">
                  <h2 className="  font-semibold text-base md:text-xl">
                     WhatsApp:
                  </h2>
                  <h3 className="  font-normal text-sm md:text-lg">
                     (+91) 7889135892
                  </h3></div>
                  <div className="space-y-2 lg:space-y-0">
                  <h2 className="  font-semibold text-base md:text-xl">
                     Email:
                  </h2>
                  <h3 className=" font-normal text-sm md:text-lg">
                  email@dishant.info
                  </h3></div> 
               </div>
            </div>

            <div className="md:flex justify-center items-center mt-20 md:mt-0 px-4 md:px-0 md:w-6/12">
               <form
                  ref={form}
                  onSubmit={sendEmail}
                  className="w-full"
               >
                  <h1 className="mt-0 mb-8 font-semibold text-2xl md:text-xl">
                     Estimate your Project?
                  </h1>
                  <div className="my-4">
                     <label
                        htmlFor="name"
                        className="text-base md:text-lg"
                     >
                        What is Your Name:
                     </label>
                     <br />
                     <input
                        id="name"
                        name="name"
                        type="text"
                        className="border-0 border-yellow-500 focus:border-orange-500 bg-transparent pt-2 border-b-2 w-full text-xl outline-none"
                     />
                  </div>
                  <div className="my-4">
                     <label
                        htmlFor="email"
                        className="text-base md:text-lg"
                     >
                        Your Email Address:
                     </label>
                     <br />
                     <input
                        id="email"
                        name="email"
                        type="email"
                        className="border-0 border-yellow-500 focus:border-orange-500 bg-transparent pt-2 border-b-2 w-full text-xl outline-none"
                     />
                  </div>
                  <div className="my-4">
                     <label
                        htmlFor="message"
                        className="text-base md:text-lg"
                     >
                        How can I Help you?:
                     </label>
                     <br />
                     <textarea
                        id="message"
                        name="message"
                        className="border-0 border-yellow-500 focus:border-orange-500 bg-transparent pt-2 border-b-2 w-full text-xl outline-none"
                     ></textarea>
                  </div>
                  <button
                     type="submit"
                     value="submit"
                     className="border-0 bg-gray-900 mt-6 px-6 md:px-8 py-2 md:py-2 font-semibold text-sm text-white md:text-base hover:text-[#FECA93] transition duration-600"
                  >
                     Send
                  </button>
               </form>
            </div>
         </div>
      </section>
   );
}
