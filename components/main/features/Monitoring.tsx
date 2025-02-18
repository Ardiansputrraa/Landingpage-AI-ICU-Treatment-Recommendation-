"use client";

import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
import Image from "next/image";

const Monitoring = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <div 
      ref={ref} 
      className="flex flex-col md:flex-row items-center justify-center min-h-screen w-full px-6 md:px-12 lg:px-16 gap-12"
    >
      <motion.div
        className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start"
        variants={slideInFromLeft(0.5)}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-400 mb-4 leading-tight">
          Real-Time ICU Monitoring Patient
        </h2>
        <p className="text-gray-500 text-base md:text-lg leading-relaxed">
          The Real-Time ICU Monitoring Patient system provides continuous tracking of critical patient parameters 
          within the Intensive Care Unit (ICU). This system monitors vital signs such as heart rate, blood pressure, 
          oxygen saturation, respiratory rate, and other essential health indicators.
        </p>
      </motion.div>

      <motion.div
        className="w-full md:w-1/2 flex justify-center"
        variants={slideInFromRight(0.5)}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <Image 
          src="/monitoring.png" 
          alt="Features Monitoring Patient" 
          width={500} 
          height={500} 
          className="max-w-full h-auto rounded-lg shadow-lg"
        />
      </motion.div>
    </div>
  );
};

export default Monitoring;
