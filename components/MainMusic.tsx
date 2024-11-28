import { ChevronDown } from "lucide-react";
import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Image from "next/image";

export default function MainMusic() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const [currentBg, setCurrentBg] = useState(0);
  const bgImages = [
    "/img/Cover1.jpg",
    "/img/Cover2.jpeg",
    "/img/Cover3.jpg",
    "/img/Cover4.jpg",
    "/img/Cover5.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [bgImages.length]);

  return (
    <div className="h-screen overflow-y-scroll overflow-x-hidden scroll-smooth w-full">
      <div
        className={`relative bg-no-repeat bg-cover bg-center h-screen text-white transition-transform duration-700 ease-out ${
          isVisible ? "translate-y-0" : "translate-y-full"
        }`}
        style={{
          backgroundImage: `url(${bgImages[currentBg]})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50 filter contrast-50 z-0"></div>
        <div className="relative z-10">
          <p className="font-poppins text-base mx-auto max-w-max text-[16px] font-bold pt-24 tracking-[0.2em] text-center">
            WEDDING ANNOUNCEMENT
          </p>
          <div className="mx-auto max-w-max text-[36px] px-12 text-center pt-52 leading-10">
            <h2 className="font-butler uppercase">Tiffany & Jared</h2>
            <h2 className="font-newsreader italic">#TImetoshaRE</h2>
          </div>
        </div>

        <div className="absolute bottom-4 right-4 font-poppins font-bold">
          <button
            onClick={() => {
              document.getElementById("section-2")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="text-white hover:text-gray-300 focus:outline-none flex items-center"
          >
            <p className="mr-2">SCROLL TO BEGIN</p>
            <ChevronDown size={24} />
          </button>
        </div>
      </div>

      <div
        id="section-2"
        className="min-h-[70vh] flex flex-col justify-start text-black px:10 lg:px-20"
      >
        <p className="text-sm font-poppins font-bold text-center uppercase mt-11 slide-up">
          DEAR MR-MRS-MS, <br /> Family & Friends
        </p>
        <h1 className="font-butler text-[32px] italic text-center leading-10 mt-5 slide-up">
          Welcome to <br /> Tiffany & Jared’s <br /> Wedding Website
        </h1>
        <p className="font-newsreader text-base mt-5 text-center italic text-slate-600 slide-up">
          Together with joyful hearts and the grace of God, we <br /> joyfully
          announce the upcoming of our marriage.
        </p>
        <Carousel className="mt-10  w-2/3 md:h-full mx-auto">
          <CarouselContent>
            <CarouselItem className="h-[390px] w-[280px]">
              <Image src="/img/Cover1.jpg" alt="image" />
            </CarouselItem>
            <CarouselItem className="h-[390px] w-[280px]">
              <Image src="/img/Cover2.jpeg" alt="image" />
            </CarouselItem>
            <CarouselItem className="h-[390px] w-[280px]">
              <Image src="/img/Cover3.jpg" alt="image" />
            </CarouselItem>
            <CarouselItem className="h-[390px] w-[280px]">
              <Image src="/img/Cover4.jpg" alt="image" />
            </CarouselItem>
            <CarouselItem className="h-[390px] w-[280px]">
              <Image src="/img/Cover5.jpg" alt="image" />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
