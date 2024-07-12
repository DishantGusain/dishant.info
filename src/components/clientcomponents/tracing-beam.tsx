"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import { cn } from "@/utils/cn";

const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);

  const updateSvgHeight = useCallback(() => {
    if (contentRef.current) {
      setSvgHeight(contentRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    updateSvgHeight();
    window.addEventListener("resize", updateSvgHeight);
    return () => {
      window.removeEventListener("resize", updateSvgHeight);
    };
  }, [updateSvgHeight]);

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.7], [50, svgHeight]),
    {
      stiffness: 300,
      damping: 90,
    }
  );
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]),
    {
      stiffness: 600,
      damping: 90,
    }
  );

  return (
    <motion.div
      ref={ref}
      className={cn("relative  w-full h-full", className)}
    >
      <div className="top-0 left-10 md:left-24 z-30 absolute">
        <svg
          viewBox={`0 0 20 ${svgHeight}`}
          width="20"
          height={svgHeight} // Set the SVG height
          className="md:block hidden ml-4"
          aria-hidden="true"
        >
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="#9091A0"
            strokeOpacity="0"
            transition={{
              duration: 10,
            }}
          ></motion.path>
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="2.25"
            className="motion-reduce:hidden"
            transition={{
              duration: 10,
            }}
          ></motion.path>
          <defs>
            <motion.linearGradient
              id="gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1} // set y1 for gradient
              y2={y2} // set y2 for gradient
            >
              <stop stopColor="#FECE9A" stopOpacity="0"></stop>
              <stop stopColor="#FECE9A"></stop>
              <stop offset="0.325" stopColor="#FECE9A"></stop>
              <stop offset="1" stopColor="#FECE9A" stopOpacity="0"></stop>
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
      <div ref={contentRef}>{children}</div>
    </motion.div>
  );
};

export default React.memo(TracingBeam);
