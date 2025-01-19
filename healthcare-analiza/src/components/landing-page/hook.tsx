import { Typography } from "../ui/typography";

export default function Hook() {
  return (
    <div className="pt-12 pb-6 lg:py-20 lg:mb-10 px-6 flex flex-col-reverse gap-6 lg:gap-0 lg:flex-row justify-evenly items-center">
      <div className="w-full lg:w-1/4 text-justify lg:pt-0 pt-6">
        <Typography
          variant="h4"
          className="font-medium lg:text-2xl text-lg inline"
        >
          {"Klinika"}
        </Typography>
        <Typography
          variant="h4"
          className="font-semibold lg:text-2xl text-lg inline text-primary"
        >
          {" e Parë dhe e Vetme"}
        </Typography>
        <Typography
          variant="h4"
          className="font-medium lg:text-2xl text-lg inline"
        >
          {
            " në Kosovë e cila ofron shërbime të plota shëndetësore me qasje holistike në mirëqenie."
          }
        </Typography>
      </div>
      <div>
        <video
          className="w-[600px] h-auto rounded-xl"
          controls
          preload="none"
          autoPlay={true}
          loop={true}
          muted={true}
          src="/videos/clinic-0.5vol.mp4"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
