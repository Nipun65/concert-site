"use client";

import Image, { StaticImageData } from "next/image";
import React, { useEffect, useRef, useState } from "react";
import venue from "@/public/venue.svg";

type CarouselImage = {
  image: StaticImageData;
  venue: string;
  eventName: string;
  id: number;
};

interface CarouselProps {
  data: CarouselImage[];
}

const Carousel: React.FC<CarouselProps> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setTimeout(() => {
      if (carouselRef.current && activeIndex === 0) {
        carouselRef.current.classList.remove("opacity-50");
        carouselRef.current.classList.add("opacity-100");
      }
    }, 400);

    const timeoutVar = setTimeout(() => {
      setActiveIndex(() => {
        const newIndex = activeIndex === data.length - 1 ? 0 : activeIndex + 1;
        if (carouselRef.current) {
          if (activeIndex === data.length - 1) {
            carouselRef.current.classList.remove("opacity-100");
            carouselRef.current.classList.add("opacity-50");
          } else {
            carouselRef.current.classList.remove("opacity-50");
            carouselRef.current.classList.add("opacity-100");
          }
        }
        setTranslateX(-newIndex * 20);
        return newIndex;
      });
    }, 2000);
    () => clearTimeout(timeoutVar);
  }, [activeIndex]);

  return (
    <div
      className="transition-all duration-500
         flex xs:gap-2 sm:gap-3 lg:gap-4"
      style={{ transform: `translateX(${translateX}%)` }}
      ref={carouselRef}
    >
      {data.map((item: CarouselImage, index: number) => {
        return (
          <div
            className={`xs:h-[20rem] xs:w-52 md:h-[24rem] md:w-56 lg:h-[30rem] lg:w-80 ${
              index === activeIndex ? "" : "brightness-75"
            } relative group cursor-pointer`}
            key={item?.id}
          >
            <Image src={item.image} className="h-full w-full" alt="item" />
            {
              <div
                className={`text-white flex flex-col transition-all mx-4 duration-75 gap-4 absolute bottom-6 font-semibold ${
                  activeIndex !== index
                    ? "visible"
                    : "invisible group-hover:visible"
                }`}
              >
                <div className="xs:text-lg md:text-xl lg:text-3xl tracking-wider ">
                  {item?.eventName}
                </div>
                <div className="flex gap-2 items-center font-semibold xs:text-sm md:text-base">
                  <Image src={venue} alt="venue" className="h-4 w-4" />
                  {item?.venue}
                </div>
              </div>
            }
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;
