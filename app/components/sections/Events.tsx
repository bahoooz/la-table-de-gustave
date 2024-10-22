"use client";

import React from "react";
import EventCard, { EventCardProps } from "../EventCard";
import events from "@/app/data/events/events.json";
import { motion } from "framer-motion";

const Events = () => {
  return (
    <motion.section
      id="evenements"
      className="my-20 lg:my-28 lg:px-12 lg:max-w-[1200px] lg:mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      <h2 className="mb-20 lg:mb-28 text-center text-titleColor font-dmserif-display text-3xl">
        Événements
      </h2>
      <div className="flex flex-col gap-20 lg:gap-28">
        {events.map((event: EventCardProps) => (
          <EventCard key={event.title} {...event} />
        ))}
      </div>
    </motion.section>
  );
};

export default Events;
