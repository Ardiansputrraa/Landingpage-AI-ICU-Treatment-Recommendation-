"use client";

import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";
import { slideInFromBottom, slideInFromTop } from "@/utils/motion";
import Image from "next/image";

const Treatments = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <div
      ref={ref}
      className="flex flex-col md:flex-row items-center justify-center min-h-screen w-full px-6 md:px-12 lg:px-16 gap-12"
    >
      <motion.div
        className="w-full md:w-1/2 flex flex-col items-center md:items-end text-center md:text-left"
        variants={slideInFromBottom}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-400 mb-4 leading-tight">
          Result Treatments Recommendation
        </h2>
        <p className="text-gray-500 text-base md:text-lg leading-relaxed">
          The recommendation is generated based on the analysis of the patient's 
          vital data, including heart rate, blood pressure, oxygen saturation, and other 
          medical parameters. AI processes this data to provide accurate treatment suggestions, 
          such as fluid administration, infusion medications, and antibiotics. 
          This helps medical professionals make faster, well-informed decisions 
          for critical patient care.
        </p>
      </motion.div>

      <motion.div
        className="w-full md:w-1/2 flex justify-center"
        variants={slideInFromTop}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <Image
          src="/treatment.png"
          alt="Mockup HP"
          width={500}
          height={500}
          className="max-w-full h-auto rounded-lg shadow-lg"
        />
      </motion.div>
    </div>
  );
};

export default Treatments;
