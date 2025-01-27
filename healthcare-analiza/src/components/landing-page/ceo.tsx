import { Typography } from "../ui/typography";
import Image from 'next/image';

export default function CEO() {
  return (
    <div className="flex lg:flex-row flex-col-reverse justify-center lg:gap-6 items-center">
      <Image
        src={"/media/driton-sopa.svg"}
        width={392}
        height={545}
        alt="Picture of Dr. Driton Sopa"
      />
      <div className="flex flex-col gap-4 lg:pt-0 pt-12 w-full lg:w-[450px] lg:px-0 px-6 text-center lg:text-start">
        <Typography variant="h4" className="italic text-[#222222]text-primary  font-serif">
          {'"Nutricioni dhe parandalimi i sëmundjeve janë esenca e shëndetit."'}
        </Typography>
        <div className="flex flex-col px-4">
          <Typography variant="h5" className="text-primary">
            {"Dr. Sci. Driton SOPA"}
          </Typography>
          <Typography variant="h6" className="text-[#222222]">
            {"Specialist i Biokimisë Klinike dhe Themelues i Klinikës"}
          </Typography>
        </div>
      </div>
    </div>
  );
}
