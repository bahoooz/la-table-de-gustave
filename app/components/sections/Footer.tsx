"use client";

import { Phone, MapPin, CreditCard, Globe } from "@phosphor-icons/react";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="px-12 xl:px-24 mx-auto py-20 lg:py-28">
      <div className="xl:flex xl:justify-center xl:gap-16 2xl:gap-24">
        <div className="xl:w-[400px] 2xl:w-[500px]">
          <h2 className="capitalize mb-8 text-titleColor font-dmserif-display text-3xl">
            Nous retrouver
          </h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5250.163820076796!2d2.2910665999542394!3d48.856648435327344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fe05b907173%3A0x81f0feb8607bb19a!2sCaf%C3%A9%20Gustave!5e0!3m2!1sfr!2sfr!4v1729443617903!5m2!1sfr!2sfr"
            width="100%"
            height="400"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="La Table de Gustave"
          ></iframe>
        </div>
        <div className="md:flex md:justify-between xl:justify-center xl:gap-16 2xl:justify-between md:items-center 2xl:w-1/2">
          <ul className="font-dm-sans text-lg mt-20 flex flex-col gap-4">
            <li className="flex items-center gap-3">
              <Phone size={32} className="min-w-[32px]" weight="light" />
              <Link
                className="hover:underline hover:underline-offset-4"
                href="tel:+33147050457"
              >
                01 47 05 04 57
              </Link>
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={34} className="min-w-[34px]" weight="light" />
              <Link
                className="hover:underline hover:underline-offset-4"
                target="_blank"
                href="https://www.google.com/maps?ll=48.859169,2.298058&z=15&t=m&hl=fr&gl=FR&mapclient=embed&cid=9363263693149417882"
              >
                23 Av. de la Bourdonnais, 75007 Paris
              </Link>
            </li>
            <li className="flex items-center gap-3">
              <CreditCard size={32} className="min-w-[32px]" weight="light" />
              Cartes bancaires, espèces et Apple pay acceptés
            </li>
            <li className="flex items-center gap-3">
              <Globe size={32} className="min-w-[32px]" weight="light" />
              <Link
                className="hover:underline hover:underline-offset-4"
                href="/"
              >
                table-gustave.vercel.app
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col gap-8 mt-20 text-lg font-cinzel text-titleColor md:text-end">
            <li
              className="cursor-pointer hover:underline hover:underline-offset-4"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Chez Gustave
            </li>
            <li className="cursor-pointer hover:underline hover:underline-offset-4">
              <Link href="#la-carte">La Carte</Link>
            </li>
            <li className="cursor-pointer hover:underline hover:underline-offset-4">
              <Link href="#evenements">Événements</Link>
            </li>
            <li className="cursor-pointer hover:underline hover:underline-offset-4">
              <Link href="#histoire-de-gustave">L'histoire de Gustave</Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="mt-20 font-dm-sans font-light md:text-center">
        Tous droits réservés à “La Table de Gustave” © 2024 - Site concept I.A.
        restauration designé et développé par{" "}
        <Link
          target="_blank"
          href="https://bahoz-dev.com"
          className="text-titleColor hover:underline hover:underline-offset-4"
        >
          Bahoz
        </Link>
      </p>
    </footer>
  );
}
