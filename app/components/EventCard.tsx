import React from "react";
import Image from "next/image";

export interface EventCardProps {
  title: string;
  img: string;
  desc: string;
  when: string;
}

const EventCard = ({ title, img, desc, when }: EventCardProps) => {
  return (
    <div>
      <h3 className="text-2xl lg:text-3xl text-center font-cinzel font-bold text-titleColor px-4 mb-8 lg:mb-10">
        {title}
      </h3>
      <div className="relative h-[300px] overflow-hidden">
        <Image
          src={img}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
          unoptimized={true}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>

        <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full z-20 text-center font-dm-sans font-bold text-xl lg:text-2xl text-textGrayColor px-5 sm:px-10">
          {desc}
        </p>
        <p className="absolute left-1/2 bottom-6 -translate-x-1/2 w-full text-center z-20 text-lg lg:text-2xl font-dm-sans text-titleColor font-semibold px-5">
          {when}
        </p>
      </div>
    </div>
  );
};

export default EventCard;
