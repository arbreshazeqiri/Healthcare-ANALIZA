"use client";
import Image from "next/image";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import { Typography } from "../ui/typography";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const staff = [
  { name: "Dr. Driton Sopa", image: "driton-sopa.png", title: "Biokimist" },
  {
    name: "Dr. Gëzim Murseli",
    image: "gezim-murseli.png",
    title: "Mjek Sportiv",
  },
  {
    name: "Diellon Bylykbashi",
    image: "diellon-bylykbashi.png",
    title: "Fizioterapeut",
  },
  {
    name: "Vesa Bislimi",
    image: "vesa-bislimi.png",
    title: "Nutricioniste",
  },
  {
    name: "Fatjona Zeneli",
    image: "fatjona-zeneli.png",
    title: "Infermiere",
  },
  {
    name: "Arisa Tmava",
    image: "arisa-tmava.png",
    title: "Infermiere",
  },
];

export default function Staff() {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const handleNext = () => api?.canScrollNext() && api.scrollNext();
  const handlePrev = () => api?.canScrollPrev() && api?.scrollPrev();

  return (
    <div
      id="staff"
      className="p-20 bg-white flex flex-col items-center justify-center gap-12 relative"
    >
      <div className="flex flex-col gap-2 items-center text-center">
        <Typography variant="h5" className="text-primary">
          Njihuni me stafin tonë
        </Typography>
        <Typography variant="h6">
          Stafi ynë i kualifikuar është i gatshëm të ju asistojë në secilin hap.
        </Typography>
      </div>

      <div className="relative w-full lg:w-[80%]">
        <Carousel
          className="flex w-full items-start justify-center overflow-x-auto carousel"
          setApi={setApi}
        >
          <CarouselContent className="flex items-start">
            {staff.map((member, index) => (
              <CarouselItem
                key={index}
                className="flex-shrink-0 basis-full sm:basis-1/3 md:basis-1/3 lg:basis-1/4"
              >
                <Card className="w-full border-none shadow-none">
                  <Image
                    src={`/media/${member.image}`}
                    width={650}
                    height={830}
                    alt={member.name}
                    className="rounded-3xl"
                  />
                  <CardContent className="p-4">
                    <Typography
                      variant="h5"
                      className="text-lg font-medium sm:text-xl lg:text-2xl"
                    >
                      {member.name}
                    </Typography>
                    <Typography
                      variant="h4"
                      className="text-sm font-medium sm:text-md lg:text-lg"
                    >
                      {member.title}
                    </Typography>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="absolute -top-12 right-2 gap-2 z-10 md:visible lg:visible lg:flex md:flex sm:flex hidden">
          <button
            onClick={handlePrev}
            className="bg-primary rounded-lg px-3 py-2 shadow-md hover:bg-gray-100 hover:text-black text-white"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="bg-primary rounded-lg px-3 py-2 shadow-md hover:bg-gray-100 hover:text-black text-white"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
