import Image from "next/image";
import { Typography } from "../ui/typography";

export const Map = () => {
  return (
    <div
      className="flex justify-around py-20 px-10 items-top"
      style={{
        background:
          "radial-gradient(50% 50% at 50% 50%, #E4FEFF 0%, #f5f6f7 100%)",
      }}
    >
      <div className="flex gap-4 items-start">
        <Image src="/media/pulse.svg" width={40} height={40} alt="pulse icon" />
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <Typography variant="h5" className="text-primary">
              Lokacioni
            </Typography>
            <Typography variant="h6">
              Rrethi 1, Bulevardi Dëshmorët e Kombit
            </Typography>
            <Typography variant="h6">10000 Pristina, Kosovo</Typography>
          </div>
          <div className="flex flex-col gap-1">
            <Typography variant="h6" className="text-primary">
              Orari i punës:
            </Typography>
            <Typography variant="h6">
              E hënë - E premte: 08:00 - 20:00
            </Typography>
            <Typography variant="h6">E shtune: 08:00 - 16:00</Typography>
          </div>
        </div>
      </div>
      <div className="flex">
        <Image
          src="/media/adresa.svg"
          width={600}
          height={300}
          alt="pulse icon"
        />
      </div>
    </div>
  );
};
