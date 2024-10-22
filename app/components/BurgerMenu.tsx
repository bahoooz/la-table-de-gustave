"use client";

import { Minus } from "@phosphor-icons/react";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Burger menu icon */}
      <div
        className="cursor-pointer text-titleColor md:hidden z-20 absolute top-1/2 -translate-y-1/2 -translate-x-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
          className="origin-center"
        >
          <Minus size={36} className="-mb-5" />
        </motion.div>
        <motion.div
          animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
          className="origin-center"
        >
          <Minus size={36} />
        </motion.div>
      </div>
      <div
        className={`absolute top-0 w-full h-screen bg-bgColor bg-opacity-95 backdrop-blur-lg overflow-hidden ${
          isOpen ? "left-0" : "left-full"
        } transition-all duration-500 ease-in-out`}
      >
        <ul className="flex flex-col items-end pr-12 justify-center h-full gap-12 text-2xl font-cinzel text-titleColor">
          <li
            className="cursor-pointer hover:underline hover:underline-offset-4"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              setIsOpen(!isOpen);
            }}
          >
            Chez Gustave
          </li>
          <li className="cursor-pointer hover:underline hover:underline-offset-4">
            <Link href="#la-carte" onClick={() => setIsOpen(!isOpen)}>
              La Carte
            </Link>
          </li>
          <li className="cursor-pointer hover:underline hover:underline-offset-4">
            <Link href="#evenements" onClick={() => setIsOpen(!isOpen)}>
              Événements
            </Link>
          </li>
          <li className="cursor-pointer hover:underline hover:underline-offset-4">
            <Link
              href="#histoire-de-gustave"
              onClick={() => setIsOpen(!isOpen)}
            >
              L'histoire de Gustave
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
