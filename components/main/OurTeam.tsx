"use client";

import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { slideInFromTop } from "@/utils/motion";
import { RxGithubLogo, RxInstagramLogo, RxLinkedinLogo } from "react-icons/rx";
import { BiLogoGmail } from "react-icons/bi";
import Image from 'next/image';

const teamMembers = [
  { name: "Chandra Prasetyo Utomo", role: "Department of Informatics Universitas YARSI", img: "/chandra.jpg" },
  { name: "Fani Muh Ardian Saputra", role: "Software Engineer", img: "/ardian.jpg" },
  { name: "Razi Rizzardi", role: "AI Engineer", img: "/razi.jpg" },
  { name: "Kohei Ichikawa", role: "Division of Information Science NAIST", img: "/Kohei.jpg" },
  { name: "Nashuha Insani", role: "Department of Informatics", img: "/profile.jpeg" },
  { name: "Kundjanasith Thonglek", role: "Cybermedia Center Osaka University", img: "/profile.jpeg" },
  { name: "Soratouch Pornmaneerattanatri", role: "Division of Information Science NAIST", img: "/profile.jpeg" },
  { name: "Ummi Azizah Rachmawati", role: "Department of Informatics Universitas YARSI", img: "/ummi.jpg" },
];

const OurTeam = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(teamMembers.length / 3));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center min-h-screen w-full py-20 text-center bg-transparent text-white gap-10">
      <motion.h2
        variants={slideInFromTop}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 0.5 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
      >
        Our Team
      </motion.h2>

      <div className="relative w-full max-w-6xl overflow-hidden px-4 sm:px-6 md:px-10">
        <div className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {Array.from({ length: Math.ceil(teamMembers.length / 3) }).map((_, i) => (
            <div key={i} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 flex-none w-full">
              {teamMembers.slice(i * 3, i * 3 + 3).map((member, index) => (
                <motion.div
                  key={index}
                  className="shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md px-4 py-6 rounded-2xl flex flex-col items-center gap-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-gray-600">
                    <Image src={member.img} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-400 mt-2">
                    {member.name}
                  </h3>
                  <p className="text-gray-500 text-sm md:text-base text-center">
                    {member.role}
                  </p>
                  <div className="flex space-x-3">
                    <a href="#" className="text-gray-500 hover:text-[#E4405F] transition-all duration-300 hover:scale-110">
                      <RxInstagramLogo size={24} />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-blue-500 transition-all duration-300 hover:scale-110">
                      <RxLinkedinLogo size={24} />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-white transition-all duration-300 hover:scale-110">
                      <RxGithubLogo size={24} />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-red-600 transition-all duration-300 hover:scale-110">
                      <BiLogoGmail size={24} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
