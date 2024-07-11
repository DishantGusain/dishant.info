"use client";

import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTopButton() {
  const [showArrowUp, setShowArrowUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowArrowUp(true);
      } else {
        setShowArrowUp(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <a
      href="#hero"
      className={`right-10 bottom-10 z-50 fixed bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-orange-500 via-orange-300 to-orange-100 p-4 border border-black border-solid rounded-full ${
        showArrowUp ? 'animate-fadeIn' : 'animate-fadeOut'
      }`}
    >
      <FaArrowUp />
    </a>
  );
}
