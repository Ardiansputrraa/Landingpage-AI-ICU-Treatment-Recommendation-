"use client";

import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";
import { zoomIn, zoomOut } from "@/utils/motion";
import Image from "next/image";

const Notification = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <div 
      ref={ref} 
      className="flex flex-col md:flex-row items-center justify-center min-h-screen w-full px-6 md:px-12 lg:px-16 gap-12"
    >
      <motion.div
        className="w-full md:w-1/2 flex justify-center"
        variants={zoomOut}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <Image 
          src="/notification.png" 
          alt="Features Notifications Emergency" 
          width={500} 
          height={500} 
          className="max-w-full h-auto rounded-lg shadow-lg"
        />
      </motion.div>

      <motion.div
        className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left"
        variants={zoomIn}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-400 mb-4 leading-tight">
          Real-Time Patient Emergency Notification
        </h2>
        <p className="text-gray-500 text-base md:text-lg leading-relaxed">
          The system monitors patient vital signs in real-time and automatically sends alerts 
          to medical personnel if critical changes are detected, such as a sudden drop in blood pressure 
          or an abnormal heart rate increase. These notifications enable quick responses, improving patient 
          survival chances.
        </p>
      </motion.div>
    </div>
  );
};

export default Notification;
