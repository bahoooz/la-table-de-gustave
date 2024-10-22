"use client";

import React, { useState } from "react";
import MenuCard from "../MenuCard";
import firstFlavorsData from "../../data/menu/first_flavors.json";
import signatureDishesData from "../../data/menu/signature_dishes.json";
import finalSweetsData from "../../data/menu/final_sweets.json";
import cheesesData from "../../data/menu/cheeses.json";
import beveragesData from "../../data/menu/beverages.json";
import { motion } from "framer-motion";

const Menu = () => {
  const [activeTab, setActiveTab] = useState("entrees");

  const tabs = [
    {
      key: "entrees",
      title: "Premières Saveurs",
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 lg:gap-28">
          {firstFlavorsData.map((item, index) => (
            <MenuCard key={index} image={item.img} {...item} />
          ))}
        </div>
      ),
    },
    {
      key: "plats",
      title: "Plats Signature",
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 lg:gap-28">
          {signatureDishesData.map((item, index) => (
            <MenuCard key={index} image={item.img} {...item} />
          ))}
        </div>
      ),
    },
    {
      key: "desserts",
      title: "Douceurs Finales",
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 lg:gap-28">
          {finalSweetsData.map((item, index) => (
            <MenuCard key={index} image={item.img} {...item} />
          ))}
        </div>
      ),
    },
    {
      key: "boissons",
      title: "Les Fromages",
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 lg:gap-28">
          {cheesesData.map((item, index) => (
            <MenuCard key={index} image={item.img} {...item} />
          ))}
        </div>
      ),
    },
    {
      key: "vins",
      title: "Les Breuvages",
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 lg:gap-28">
          {beveragesData.map((item, index) => (
            <MenuCard key={index} image={item.img} {...item} />
          ))}
        </div>
      ),
    },
  ];

  return (
    <motion.section
      id="la-carte"
      className="px-12 lg:max-w-[1200px] lg:mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      <h2 className="font-dmserif-display text-3xl text-center mb-20 lg:mb-28 text-titleColor">
        La Carte
      </h2>
      <div className="flex flex-col gap-20 lg:gap-28">
        <div className="flex flex-col lg:flex-row gap-5 xl:gap-10">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              className={`w-full hover:border-titleColor transition-all duration-150 h-12 lg:h-16 xl:h-12 px-4 text-center font-dm-sans font-normal text-lg ${
                activeTab === tab.key
                  ? "bg-titleColor text-black"
                  : "text-white border"
              }`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <div>{tabs.find((tab) => tab.key === activeTab)?.content}</div>
      </div>
    </motion.section>
  );
};

export default Menu;
