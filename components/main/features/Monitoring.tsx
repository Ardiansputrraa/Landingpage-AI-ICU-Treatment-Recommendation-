"use client";

import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";
import {
  slideInFromLeft,
  slideInFromRight,
} from "@/utils/motion";
import Image from 'next/image';

const Monitoring = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <div ref={ref} className="flex flex-col md:flex-row items-center justify-center min-h-screen w-full px-12 md:px-16 gap-16">
      <motion.div
        className="md:w-1/2 text-center md:text-left"
        variants={slideInFromLeft(0.5)}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <h2 className="text-2xl md:text-5xl font-bold text-gray-400 mb-4">
          Real Time ICU Monitoring Patient
        </h2>
        <p className="text-gray-500 text-lg">
        The Real-Time ICU Monitoring Patient system is designed to provide continuous, real-time tracking of critical patient parameters within the Intensive Care Unit (ICU). This system utilizes advanced technologies to monitor vital signs such as heart rate, blood pressure, oxygen saturation, respiratory rate, and other essential health indicators.
        </p>
      </motion.div>

      <motion.div
        className="w-full h-full "
        variants={slideInFromRight(0.5)}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
          <Image src="monitoring.png" className="w-full h-full object-cover" alt="Features Monitoring Patient" />
      </motion.div>
      
    </div>
  );
};

export default Monitoring;
