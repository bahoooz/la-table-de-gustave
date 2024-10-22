"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
const MainImg = () => {
  return (
    <motion.section
      className="mb-20 lg:mb-28 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1}}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Image
        src={"/assets/img_main.webp"}
        alt="Image de Gustave"
        width={1792}
        height={1024}
        className="md:object-cover md:max-h-[500px] w-full"
      />
    </motion.section>
  );
};

export default MainImg;
