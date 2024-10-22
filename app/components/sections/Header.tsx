"use client";

import { Scroll, CaretDown } from "@phosphor-icons/react";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Header = () => {
  return (
    <header className="header h-[800px] pt-28" id="chez-gustave">
      <main className="flex flex-col gap-6 px-4 mb-32 sm:mb-56">
        <h1 className="text-5xl md:text-6xl xl:text-7xl font-cinzel text-titleColor mt-28 font-bold text-center capitalize">
          {["La", "table", "de", "Gustave"].map((word, wordIndex) => (
            <span
              key={wordIndex}
              style={{ display: "inline-block", marginRight: "0.3em" }}
            >
              {Array.from(word).map((letter, letterIndex) => (
                <motion.span
                  key={letterIndex}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: wordIndex * 0.3 + letterIndex * 0.03,
                  }}
                  style={{ display: "inline-block" }}
                >
                  {letter}
                </motion.span>
              ))}
            </span>
          ))}
        </h1>
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1 }}
          className="text-2xl font-great-vibes font-normal text-center capitalize sm:tracking-wider px-4"
        >
          La &nbsp; quintessence &nbsp; de &nbsp; la &nbsp; gastronomie &nbsp;
          parisienne{" "}
        </motion.h2>
      </main>
      <Link
        href={"#la-carte"}
        className="flex gap-4 justify-center items-center hover:scale-105 transition-all duration-300 cursor-pointer w-fit mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1.4 }}
          className="flex gap-4 items-center"
        >
          <Scroll size={30} className="text-titleColor" weight="regular" />
          <h3 className="text-lg font-cinzel text-titleColor font-normal">
            Découvrir la carte
          </h3>
        </motion.div>
      </Link>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 1.7 }}
        className="flex justify-center mt-12 sm:mt-20"
      >
        <Link href={"#favorites"}>
          <CaretDown
            size={32}
            className="text-titleColor hover:scale-105 transition-all duration-300"
            weight="regular"
          />
        </Link>
      </motion.div>
    </header>
  );
};

export default Header;
