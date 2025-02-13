"use client";

import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";
import { slideInFromBottom, slideInFromTop } from "@/utils/motion";
import Image from 'next/image';

const Treatments = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <div
      ref={ref}
      className="flex flex-col md:flex-row items-center justify-center min-h-screen w-full px-6 md:px-16 gap-16"
    >
      <motion.div
        className="w-full h-full "
        variants={slideInFromTop}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      ><Image
            src="treatment.png"
            className="w-full h-full object-cover"
            alt="Mockup HP"
          />
      </motion.div>

      <motion.div
        className="md:w-1/2 text-right"
        variants={slideInFromBottom}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <h2 className="text-2xl md:text-5xl font-bold text-gray-400 mb-4">
          Result Treatments Recommendation
        </h2>
        <p className="text-gray-500 text-lg">
          Nikmati pengalaman terbaik dengan aplikasi kami yang dilengkapi fitur
          canggih dan tampilan menarik. Dengan antarmuka intuitif, semua fitur
          mudah diakses kapan saja dan di mana saja.
        </p>
      </motion.div>
    </div>
  );
};

export default Treatments;
