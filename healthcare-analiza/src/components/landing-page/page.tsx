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
      <div className="py-20 px-6 flex justify-evenly items-center">
        <div className="w-[450px]">
          <Typography variant="h4" className="font-normal inline text-primary">
            {"Klinika"}
          </Typography>
          <Typography variant="h4" className="font-medium inline text-primary">
            {" e Parë dhe e Vetme"}
          </Typography>
          <Typography variant="h4" className="font-normal text-primary">
            {
              " në Kosovë që ofron shërbime të plota shëndetësore me qasje holistike në nutricion dhe mirëqenie."
            }
          </Typography>
        </div>
        <div>
          <video
            className="w-[600px] h-auto rounded-none"
            controls
            preload="none"
            autoPlay={true}
            muted={true}
            loop
            src="/videos/clinic.mp4"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="py-20 px-6 flex gap-12 justify-center items-center">
        <div className="flex flex-col gap-4 items-center h-[400px]">
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
              Klinika jonë ofron të gjitha shërbimet e nevojshme në një hapësire
              te vetme, për pune te shpejte dhe efikase.
            </Typography>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center h-[400px]">
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
              Na gjeni lehtësisht në Kosovë, një hapësirë e afërt dhe lehtësisht
              e çasshme përmes transportit.
            </Typography>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center h-[400px]">
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
