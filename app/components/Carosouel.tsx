"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import venue from "./../../public/venue.svg";

interface CarouselProps {
  data: any;
}

const Carousel: React.FC<CarouselProps> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  console.log(carouselRef);

  useEffect(() => {
    setTimeout(() => {
      if (carouselRef.current && activeIndex === 0) {
        carouselRef.current.classList.remove("opacity-50");
        carouselRef.current.classList.add("opacity-100");
      }
    }, 400);

    const timeoutVar = setTimeout(() => {
      setActiveIndex((preveIndex) => {
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
         flex gap-4"
      style={{ transform: `translateX(${translateX}%)` }}
      ref={carouselRef}
    >
      {data.map((item: any, index: number) => {
        return (
          <div
            className={`h-[30rem] w-80 ${
              index === activeIndex ? "" : "brightness-75"
            } relative group cursor-pointer`}
          >
            <Image src={item.image} className="h-full w-full" alt="item" />

            {
              <div
                className={`text-white flex flex-col transition-all duration-75 gap-4 absolute bottom-6 ${
                  activeIndex !== index
                    ? "visible"
                    : "invisible group-hover:visible"
                }`}
              >
                <div className="text-3xl tracking-wider">{item?.eventName}</div>
                <div className="flex gap-2 items-center font-bold">
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
