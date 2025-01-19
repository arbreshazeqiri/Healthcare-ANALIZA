import { Typography } from "@/components/ui/typography";
import Image from "next/image";

const LandingPage = () => {
  return (
    <div
      className="h-full"
      style={{
        background:
          "radial-gradient(50% 50% at 50% 50%, #E4FEFF 0%, #f5f6f7 100%)",
      }}
    >
      <div className="py-12 lg:py-20 px-6 flex flex-col-reverse gap-6 lg:gap-0 lg:flex-row justify-evenly items-center">
        <div className="w-full lg:w-[422px] text-justify">
          <Typography variant="h4" className="font-normal lg:text-3xl text-lg inline text-primary">
            {"Klinika"}
          </Typography>
          <Typography variant="h4" className="font-medium lg:text-3xl text-lg inline text-primary">
            {" e Parë dhe e Vetme"}
          </Typography>
          <Typography variant="h4" className="font-normal lg:text-3xl text-lg inline text-primary">
            {
              " në Kosovë e cila ofron shërbime të plota shëndetësore me qasje holistike në nutricion dhe mirëqenie."
            }
          </Typography>
        </div>
        <div>
          <video
            className="w-[600px] h-auto rounded-none"
            controls
            preload="none"
            autoPlay={true}
            loop={true}
            src="/videos/clinic-0.5vol.mp4"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="py-12 lg:py-20 px-6 flex flex-col lg:flex-row gap-6 lg:gap-12 justify-center items-center">
        <div className="flex flex-col gap-4 items-center h-full lg:h-[400px]">
          <Image
            src={"/media/space.png"}
            height={180}
            width={180}
            alt="Picture of clinic"
          />
          <div className="flex flex-col gap-2 items-center h-full">
            <Typography variant="h6" className="font-semibold text-md">
              Të gjitha në një vend.
            </Typography>
            <Typography
              variant="body-sm"
              className="w-[250px] text-center font-medium"
            >
              Klinika jonë ofron të gjitha shërbimet e nevojshme në një hapësirë të vetme, për punë të shpejtë e efikase.
            </Typography>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center h-full lg:h-[400px]">
          <Image
            src={"/media/location.png"}
            height={180}
            width={180}
            alt="Picture of clinic"
          />
          <div className="flex flex-col gap-2 items-center">
            <Typography variant="h6" className="font-semibold text-md">
              Lokacion i përshtatshëm.
            </Typography>
            <Typography
              variant="body-sm"
              className="w-[250px] text-center font-medium"
            >
              Na gjeni lehtësisht në Kosovë, një hapësirë e afërt dhe
              e çasshme përmes transportit.
            </Typography>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center h-full lg:h-[400px]">
          <Image
            src={"/media/tech.png"}
            height={180}
            width={180}
            alt="Picture of clinic"
          />
          <div className="flex flex-col gap-2 items-center">
            <Typography variant="h6" className="font-semibold text-md">
              Teknologji e avancuar.
            </Typography>
            <Typography
              variant="body-sm"
              className="w-[250px] text-center font-medium"
            >
              Qasje shkencore që integron faktorët fizikë, mendorë dhe
              emocionalë për një shëndet të plotë.
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
