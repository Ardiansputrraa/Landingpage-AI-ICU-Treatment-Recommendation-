"use client";

import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const [startTyping, setStartTyping] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (inView) {
      setStartTyping(true);
      setKey((prevKey) => prevKey + 1);
    }
  }, [inView]);

  return (
    <div className="relative flex items-center justify-center min-h-screen w-full h-full px-4 md:px-8 lg:px-16">
      {/* Container utama */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full h-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center w-full text-center"
        >
          <div className="max-w-4xl mx-auto flex flex-col gap-5 justify-center items-center">
            <motion.div className="font-bold text-3xl md:text-3xl lg:text-4xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {startTyping && (
                  <Typewriter
                    key={key}
                    words={[
                      "PRIMA is an AI-based solution for real-time ICU monitoring, providing personalized recommendations to improve the quality of patient care in emergency situations.",
                    ]}
                    loop={false}
                    cursor
                    cursorStyle="_"
                    typeSpeed={50}
                    deleteSpeed={0}
                    delaySpeed={500}
                  />
                )}
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-full object-cover"
          src="/encryption.webm"
        />
      </div>
    </div>
  );
};

export default About;
