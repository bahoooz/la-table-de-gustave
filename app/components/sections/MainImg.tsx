import React from "react";
import Image from "next/image";
const MainImg = () => {
  return (
    <section className="mb-20 lg:mb-28">
      <Image
        src={"/assets/img_main.png"}
        alt="Image de Gustave"
        width={1792}
        height={1024}
        className="md:object-cover md:max-h-[500px] w-full"
      />
    </section>
  );
};

export default MainImg;
