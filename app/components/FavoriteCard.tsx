import Image from "next/image";
import React from "react";

interface FavoriteCardProps {
  img: string;
  title: string;
  dishPerDay: number;
}

export default function FavoriteCard({
  img,
  title,
  dishPerDay,
}: FavoriteCardProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src={img}
        alt={title}
        width={1024}
        height={1024}
        className="w-72 rounded-full mb-11"
      />
      <div className="text-center flex flex-col gap-2">
        <h3 className="font-cinzel text-2xl text-titleColor font-bold">
          {title}
        </h3>
        <p className="font-cinzel text-xl font-bold">
          <span className="text-2xl text-dishPerDayColor">{dishPerDay}</span>{" "}
          Plats par jour
        </p>
      </div>
    </div>
  );
}
