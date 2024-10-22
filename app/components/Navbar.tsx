"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useDisclosure } from "@nextui-org/react";

import Link from "next/link";
import BurgerMenu from "./BurgerMenu";
import LogoModal from "./LogoModal";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Effet pour gérer le défilement de la page
  useEffect(() => {
    // Fonction pour vérifier si la page a défilé
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    // Ajouter l'écouteur d'événement de défilement
    window.addEventListener("scroll", handleScroll);

    // Appeler handleScroll immédiatement pour définir l'état initial
    handleScroll();

    // Nettoyer l'écouteur d'événement lors du démontage du composant
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Supprimer la dépendance à 'scrolled'

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // Ajoutez cet effet pour gérer le flou de la page
  useEffect(() => {
    const body = document.body;
    if (isOpen) {
      body.classList.add("blur-bg");
    } else {
      body.classList.remove("blur-bg");
    }
  }, [isOpen]);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.5 }}
      className={`bg-bgColor bg-opacity-70 flex justify-between md:justify-center items-center px-8 fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? "h-[84px]" : "h-28"
      }`}
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 5, 0] }}
        transition={{ duration: 0.3 }}
        className={`rounded-full w-auto cursor-pointer md:hidden xl:block xl:absolute xl:left-16 ${
          scrolled ? "max-h-16" : "max-h-20"
        }`}
        onClick={onOpen}
      >
        <Image
          src={"/assets/logo.png"}
          alt="logo"
          width={1024}
          height={1024}
          className={`rounded-full w-auto transition-all duration-300 ${
            scrolled ? "h-16" : "h-20"
          }`}
        />
      </motion.div>
      <LogoModal isOpen={isOpen} onOpenChange={onOpenChange} />
      <ul className="hidden md:flex gap-7 xl:gap-14 font-cinzel text-titleColor text-xl">
        <li
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="cursor-pointer hover:underline hover:underline-offset-4"
        >
          Chez Gustave
        </li>
        <li>
          <Link
            href="#la-carte"
            className="cursor-pointer hover:underline hover:underline-offset-4"
          >
            La Carte
          </Link>
        </li>
        <li>
          <Link
            href="#evenements"
            className="cursor-pointer hover:underline hover:underline-offset-4"
          >
            Événements
          </Link>
        </li>
        <li>
          <Link
            href="#histoire-de-gustave"
            className="cursor-pointer hover:underline hover:underline-offset-4"
          >
            L'histoire de Gustave
          </Link>
        </li>
      </ul>
      <BurgerMenu />
    </motion.nav>
  );
};

export default Navbar;
