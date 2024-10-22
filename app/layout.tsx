import type { Metadata } from "next";
import {
  Cinzel,
  Great_Vibes,
  DM_Sans,
  DM_Serif_Display,
} from "next/font/google";
import "./globals.css";
import Footer from "./components/sections/Footer";
import Navbar from "./components/Navbar";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-cinzel",
});

const great_vibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-great-vibes",
});

const dmsans = DM_Sans({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-dmsans",
});

const dmserifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-dmserif-display",
});

export const metadata: Metadata = {
  title: "La Table de Gustave",
  description: "La Table de Gustave",
  icons: {
    icon: "/assets/icon.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cinzel.variable} ${great_vibes.variable} ${dmsans.variable} ${dmserifDisplay.variable} antialiased bg-bgColor text-white overflow-x-hidden`}
      >
        <div className="transition-all duration-300">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
