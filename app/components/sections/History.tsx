"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/react";
import LogoModal from "../LogoModal";

const History = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenChange = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const body = document.body;
    if (isOpen) {
      body.classList.add("blur-bg");
    } else {
      body.classList.remove("blur-bg");
    }
  }, [isOpen]);

  return (
    <motion.section
      id="histoire-de-gustave"
      className="md:max-w-3xl xl:max-w-[1200px] md:mx-auto mb-20 lg:mb-28"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      <h2 className="capitalize mb-20 lg:mb-28 text-center text-titleColor font-dmserif-display text-3xl">
        L'histoire de Gustave
      </h2>
      <div className="flex flex-col xl:flex-row gap-10 xl:gap-24 xl:px-12 xl:justify-center">
        <Image
          src="/assets/histoire-de-gustave.webp"
          alt="Histoire de Gustave"
          width={1024}
          height={1024}
          className="sm:px-16 xl:px-0 xl:w-[500px] 2xl:w-[600px] xl:h-[600px] xl:object-cover"
          unoptimized={true}
        />
        <div className="xl:flex xl:flex-col xl:justify-center">
          <p className="px-12 sm:px-16 xl:px-0 xl:w-[400px] font-dm-sans text-base mb-10 xl:mb-16">
            Depuis sa création,{" "}
            <span className="text-titleColor">La Table de Gustave</span> incarne{" "}
            <span className="text-titleColor">
              l'élégance parisienne et l'amour de la cuisine française
            </span>
            . Fondé par <span className="text-titleColor">Gustave</span>,
            passionné de gastronomie, le restaurant est né d'une volonté de{" "}
            <span className="text-titleColor">
              partager des plats authentiques, inspirés par les traditions
              familiales
            </span>
            . Situé{" "}
            <span className="text-titleColor">
              à deux pas de la Tour Eiffel
            </span>
            , le restaurant est rapidement devenu{" "}
            <span className="text-titleColor">
              un lieu prisé, mêlant saveurs classiques et créativité moderne
            </span>
            . Aujourd'hui,{" "}
            <span className="text-titleColor">La Table de Gustave</span>{" "}
            continue{" "}
            <span className="text-titleColor">d'honorer son héritage</span> en
            offrant à chaque visite une{" "}
            <span className="text-titleColor">
              expérience culinaire raffinée
            </span>
            , dans{" "}
            <span className="text-titleColor">
              une atmosphère chaleureuse et accueillante
            </span>
            .
          </p>
          <div className="px-12 sm:px-16 xl:px-0">
            <Button
              className="font-dm-sans text-base outline-1 outline-white px-5 py-3 w-fit capitalize hover:bg-titleColor hover:text-bgColor hover:outline-none"
              onClick={handleOpenChange}
            >
              Découvrir toute l'histoire
            </Button>
          </div>
        </div>
      </div>
      <LogoModal isOpen={isOpen} onOpenChange={handleOpenChange} />
    </motion.section>
  );
};

export default History;
