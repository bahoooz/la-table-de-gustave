import Image from "next/image";
import React from "react";

interface MenuCardProps {
  title: string;
  ingredients: string;
  price: number | string;
  image: string;
}

export default function MenuCard({
  title,
  ingredients,
  price,
  image,
}: MenuCardProps) {
  return (
    <div>
      <Image
        src={image}
        alt={title}
        width={1024}
        height={1024}
        className="mb-5 hover:filter hover:blur-[2px] transition-all duration-150"
      />
      <div className="flex flex-col gap-5">
        <h3 className="font-cinzel text-2xl text-titleColor font-bold">
          {title}
        </h3>
        <p className="text-base font-dm-sans text-textGrayColor">
          Ingrédients : {ingredients}
        </p>
        <p className="text-2xl font-cinzel text-titleColor font-bold">
          {price}€
        </p>
      </div>
    </div>
  );
}
