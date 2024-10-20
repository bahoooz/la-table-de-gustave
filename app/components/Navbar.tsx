"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Minus } from "@phosphor-icons/react";
import Link from "next/link";

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

  return (
    <nav
      className={`bg-bgColor bg-opacity-70 flex justify-between md:justify-center items-center px-8 fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? "h-[84px]" : "h-28"
      }`}
    >
      <Image
        src={"/assets/logo.png"}
        alt="logo"
        width={1024}
        height={1024}
        className={`rounded-full w-auto cursor-pointer transition-all duration-300 md:hidden xl:block xl:absolute xl:left-16 ${
          scrolled ? "h-16" : "h-20"
        }`}
      />
      <ul className="hidden md:flex gap-7 xl:gap-14 font-cinzel text-titleColor text-xl">
        <li
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="cursor-pointer"
        >
          Chez Gustave
        </li>
        <li>
          <Link href="#la-carte" className="cursor-pointer">
            La Carte
          </Link>
        </li>
        <li>
          <Link href="#evenements" className="cursor-pointer">
            Événements
          </Link>
        </li>
        <li>
          <Link href="#histoire-de-gustave" className="cursor-pointer">
            L'histoire de Gustave
          </Link>
        </li>
      </ul>
      <div className="cursor-pointer text-titleColor md:hidden">
        <Minus size={36} className="-mb-5" />
        <Minus size={36} />
      </div>
    </nav>
  );
};

export default Navbar;
