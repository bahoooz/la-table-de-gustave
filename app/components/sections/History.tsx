import Image from "next/image";
import React from "react";

const History = () => {
  return (
    <section id="histoire-de-gustave" className="md:max-w-3xl xl:max-w-[1200px] md:mx-auto mb-20 lg:mb-28">
      <h2 className="capitalize mb-20 lg:mb-28 text-center text-titleColor font-dmserif-display text-3xl">
        L'histoire de Gustave
      </h2>
      <div className="flex flex-col xl:flex-row gap-10 xl:gap-24 xl:px-12 xl:justify-center">
        <Image
          src="/assets/histoire-de-gustave.png"
          alt="Histoire de Gustave"
          width={1024}
          height={1024}
          className="sm:px-16 xl:px-0 xl:w-[500px] 2xl:w-[600px] xl:h-[600px] xl:object-cover"
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
            <button className="font-dm-sans text-base border px-5 py-3 w-fit capitalize">
              Découvrir toute l'histoire
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
