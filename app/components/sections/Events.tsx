import React from "react";
import EventCard, { EventCardProps } from "../EventCard";
import events from "@/app/data/events/events.json";
const Events = () => {
  return (
    <section
      id="evenements"
      className="my-20 lg:my-28 lg:px-12 lg:max-w-[1200px] lg:mx-auto"
    >
      <h2 className="mb-20 lg:mb-28 text-center text-titleColor font-dmserif-display text-3xl">
        Événements
      </h2>
      <div className="flex flex-col gap-20 lg:gap-28">
        {events.map((event: EventCardProps) => (
          <EventCard key={event.title} {...event} />
        ))}
      </div>
    </section>
  );
};

export default Events;
