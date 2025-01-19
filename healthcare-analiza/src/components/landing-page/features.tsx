import { Typography } from "../ui/typography";
import Image from "next/image";

const features = [
    {
      imgSrc: "/media/space.svg",
      imgAlt: "Picture of clinic",
      title: "Të gjitha në një vend.",
      description:
        "Klinika jonë ofron të gjitha shërbimet e nevojshme në një hapësirë të vetme, për punë të shpejtë e efikase.",
    },
    {
      imgSrc: "/media/location.svg",
      imgAlt: "Picture of clinic",
      title: "Lokacion i përshtatshëm.",
      description:
        "Na gjeni lehtësisht në Kosovë, një hapësirë e afërt dhe e çasshme përmes transportit.",
    },
    {
      imgSrc: "/media/tech.svg",
      imgAlt: "Picture of clinic",
      title: "Teknologji e avancuar.",
      description:
        "Qasje shkencore që integron faktorët fizikë, mendorë dhe emocionalë për një shëndet të plotë.",
    },
  ];

export default function Functions() {
  return (
    <div id="about-us" className="py-12 lg:my-14 lg:py-10 px-6 flex flex-col lg:flex-row gap-6 lg:gap-12 justify-center items-center">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex flex-col gap-4 items-center h-full lg:h-[300px]"
        >
          <Image
            src={feature.imgSrc}
            height={140}
            width={140}
            alt={feature.imgAlt}
          />
          <div className="flex flex-col gap-2 items-center h-full">
            <Typography variant="h6" className="font-semibold text-md">
              {feature.title}
            </Typography>
            <Typography
              variant="body-sm"
              className="w-[250px] text-center font-medium"
            >
              {feature.description}
            </Typography>
          </div>
        </div>
      ))}
    </div>
  );
}
