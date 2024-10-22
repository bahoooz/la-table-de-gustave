"use client";

import React from "react";
import FavoriteCard from "../FavoriteCard";
import gustaveFavoritesData from "../../data/gustave_favorites_data/gustave_favorites.json";
import { motion } from "framer-motion";

const Favorites = () => {
  return (
    <motion.section
      className="my-20 lg:my-28"
      id="favorites"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      // La propriété 'viewport' permet de configurer le comportement de l'animation en fonction de la visibilité de l'élément dans la fenêtre de visualisation.
      // 'once: true' signifie que l'animation ne se déclenchera qu'une seule fois lorsque l'élément entre dans la vue.
      // 'amount: 0.3' signifie que l'animation se déclenchera lorsque 30% de l'élément sera visible dans la fenêtre de visualisation.
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      <h2 className="capitalize mb-20 lg:mb-28 text-center text-titleColor font-dmserif-display text-3xl">
        Les favoris de Gustave
      </h2>
      <div className="flex flex-col lg:flex-row lg:flex-wrap lg:px-16 gap-20 lg:gap-28 items-center justify-center">
        {gustaveFavoritesData.map((favoriteDish, index) => (
          <FavoriteCard
            key={index}
            img={favoriteDish.img}
            title={favoriteDish.title}
            dishPerDay={favoriteDish.dishPerDay}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default Favorites;
