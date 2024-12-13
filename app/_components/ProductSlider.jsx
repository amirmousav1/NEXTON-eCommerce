"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProductSlider({ data }) {
  const [activeImage, setCurrentImage] = useState(0);
  return (
    <div className="col-span-3 gap-4 md:gap-6 flex flex-col-reverse md:grid grid-cols-5">
      <div className="grid grid-cols-3 md:flex flex-col gap-[10px] md:gap-4">
        {data.images.map((image, i) => (
          <div key={i} className="relative aspect-[9/10]">
            <Image
              fill
              className={`rounded-2xl duration-300 object-cover ${
                activeImage === i
                  ? "grayscale"
                  : "hover:contrast-150 cursor-pointer"
              }`}
              onClick={() => setCurrentImage(i)}
              src={image}
              alt={data.title}
            />
          </div>
        ))}
      </div>
      <div className="col-span-4 relative aspect-[9/10]">
        <Image
          fill
          className="rounded-2xl"
          src={data.images[activeImage]}
          alt={data.title}
        />
      </div>
    </div>
  );
}
