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
            
            window.location.reload(); // Refresh the page after email is sent
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <section id="contactme" className="relative bg-primaryYellow py-20 w-full">
      <div className="mb-24 text-center">
        <h1 className="inline bg-black mt-0 mb-8 px-4 font-normal text-base text-primaryYellow md:text-xl">
          Contact Me
        </h1>
        <h3 className="mt-0 mb-2 font-semibold text-2xl md:text-4xl">
          Let&apos;s Work Together
        </h3>
      </div>
      <div className="md:flex justify-between items-start md:px-32 2xl:px-80">
        <div className="md:flex justify-center items-center px-4 md:px-0 md:w-5/12">
          <div className="w-full text-left">
            <h1 className="mt-0 mb-8 font-semibold text-2xl md:text-xl">
              Get in touch !
            </h1>
            <h3>
              I enjoy discussing new projects and design challenges. Please
              share as much info, as possible so we can get the most out of our
              first catch-up.
            </h3>
            <h3 className="mt-8 mb-2 font-semibold text-base md:text-xl">
              Living In:
            </h3>
            <h3 className="mt-0 mb-8 font-normal text-sm md:text-lg">
              Patiala, Punjab, INDIA.
            </h3>
            <h3 className="mt-0 mb-2 font-semibold text-base md:text-xl">
              Whatsapp:
            </h3>
            <h3 className="mt-0 mb-8 font-normal text-sm md:text-lg">
              (+91) 7889135892
            </h3>
            <h3 className="mt-0 mb-2 font-semibold text-base md:text-xl">
              Email:
            </h3>
            <h3 className="mt-0 mb-8 font-normal text-sm md:text-lg">
              dyno3ddd@gmail.com
            </h3>
          </div>
        </div>

        <div className="md:flex justify-center items-center mt-20 md:mt-0 px-4 md:px-0 md:w-6/12">
          <form ref={form} onSubmit={sendEmail} className="w-full">
            <h3 className="mt-0 mb-8 font-semibold text-2xl md:text-xl">
              Estimate your Project?
            </h3>
            <div className="my-4">
              <label htmlFor="name" className="text-base md:text-lg">
                What is Your Name:
              </label>
              <br />
              <input
                name="name"
                type="text"
                className="border-0 border-yellow-500 focus:border-yellow-700 bg-transparent pt-2 border-b-2 w-full text-xl outline-none"
              />
            </div>
            <div className="my-4">
              <label htmlFor="email" className="text-base md:text-lg">
                Your Email Address:
              </label>
              <br />
              <input
                name="email"
                type="email"
                className="border-0 border-yellow-500 focus:border-yellow-700 bg-transparent pt-2 border-b-2 w-full text-xl outline-none"
              />
            </div>
            <div className="my-4">
              <label htmlFor="message" className="text-base md:text-lg">
                How can I Help you?:
              </label>
              <br />
              <textarea
                name="message"
                className="border-0 border-yellow-500 focus:border-yellow-700 bg-transparent pt-2 border-b-2 w-full text-xl outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              value="submit"
              className="border-0 bg-gray-900 mt-6 px-6 md:px-10 py-2 md:py-4 font-semibold text-sm text-white md:text-base"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
