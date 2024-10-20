import React from "react";
import FavoriteCard from "../FavoriteCard";
import gustaveFavoritesData from "../../data/gustave_favorites_data/gustave_favorites.json";

const Favorites = () => {
  return (
    <section className="my-20 lg:my-28">
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
    </section>
  );
};

export default Favorites;
