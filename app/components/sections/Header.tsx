"use client";

import { Scroll, CaretDown } from "@phosphor-icons/react";
import React from "react";

const Header = () => {
  return (
    <header className="header h-[800px] pt-28" id="chez-gustave">
      <main className="flex flex-col gap-6 px-10 mb-32 sm:mb-56">
        <h1 className="text-5xl md:text-6xl xl:text-7xl font-cinzel text-titleColor mt-28 font-bold text-center capitalize">
          La table de Gustave
        </h1>
        <h2 className="text-2xl font-great-vibes font-normal text-center capitalize sm:tracking-wider">
          La &nbsp; quintessence &nbsp; de &nbsp; la &nbsp; gastronomie &nbsp; parisienne{" "}
        </h2>
      </main>
      <div className="flex gap-4 justify-center items-center">
        <Scroll size={30} className="text-titleColor" weight="regular" />
        <h3 className="text-lg font-cinzel text-titleColor font-normal">
          Découvrir la carte
        </h3>
      </div>
      <CaretDown
        size={32}
        className="text-titleColor mx-auto mt-12 sm:mt-20"
        weight="regular"
      />
    </header>
  );
};

export default Header;
