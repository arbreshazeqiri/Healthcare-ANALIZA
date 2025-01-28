import Image from "next/image";
import { Typography } from "../ui/typography";
import Form from "./form";

export const ContactForm = () => {
  return (
    <div className="flex justify-around py-20 px-10 items-top">
      <div className="flex gap-4 items-start">
        <Image src="/media/pulse.svg" width={40} height={40} alt="pulse icon" />
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <Typography variant="h5" className="text-primary">
              Kontakti
            </Typography>
            <Typography variant="h6">Na shkruani në:</Typography>
            <Typography variant="h6" className="text-primary">
              healthcare.analiza@gmail.com
            </Typography>
          </div>
          <div className="flex flex-col gap-1">
            <Typography variant="h6">Na thirrni në:</Typography>
            <Typography variant="h6" className="text-primary">
              +383 12 345 678
            </Typography>
          </div>
          <Typography variant="h6">Ose plotësoni formën:</Typography>
        </div>
      </div>
      <div className="flex w-[700px] gap-2 items-start">
       <Form />
      </div>
    </div>
  );
};
