import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import { Typography } from "../ui/typography";

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
    name: "Fatjona Zeneli",
    image: "fatjona-zeneli.png",
    title: "Infermiere",
  },
  {
    name: "Arisa Tmava",
    image: "arisa-tmava.png",
    title: "Infermiere",
  },
  {
    name: "Vesa Bislimi",
    image: "vesa-bislimi.png",
    title: "Infermiere",
  },
];

export default function Staff() {
  return (
    <div id="staff" className="p-20 bg-white flex flex-col items-center justify-center gap-12">
      <div className="flex flex-col gap-2 items-center text-center">
        <Typography variant="h5" className="text-primary">
          Njihuni me stafin tonë
        </Typography>
        <Typography variant="h6">
          Stafi ynë i kualifikuar është i gatshëm të ju asistojë në secilin hap.
        </Typography>
      </div>
      <Carousel className="flex w-full lg:w-[75%] items-start">
        <CarouselContent className="w-fit flex items-center">
          {staff.map((member, index) => (
            <CarouselItem key={index} className="md:basis-1/4 lg:basis-1/4">
              <Card className="w-fit border-none shadow-none">
                <Image
                  src={`/media/${member.image}`}
                  width={300}
                  height={300}
                  alt={member.name}
                />
                <CardContent className="text-center p-4">
                  <Typography variant="h6" className="text-xl font-medium">
                    {member.name}
                  </Typography>
                  <Typography variant="h6">{member.title}</Typography>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/3 transform -translate-y-1/3" />
        <CarouselNext className="absolute top-1/3 transform -translate-y-1/3" />
      </Carousel>
    </div>
  );
}
