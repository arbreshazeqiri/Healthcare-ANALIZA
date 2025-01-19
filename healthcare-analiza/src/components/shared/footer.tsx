import Image from "next/image";
import { Typography } from "../ui/typography";
import { Maps } from "./maps";
import SocialLinks from "./social-links";
import { Facebook, Instagram, Youtube } from "lucide-react";

const contactInfo = [
  {
    label: "Kontakti",
    details: ["healthcare.analiza@gmail.com", "+383 48 256 990"],
  },
  {
    label: "Adresa",
    details: [
      "Rrethi, 1 Bulevardi Dëshmorët e Kombit",
      "10000 Pristina, Kosovo",
    ],
  },
  {
    label: "Orari i punës",
    details: [
      "E hënë - E premte: 08:00 - 20:00",
      "E shtune: 08:00 - 16:00",
      "E diel: Mbyllur",
    ],
  },
];

const socialLinks = [
  {
    href: "https://www.facebook.com/profile.php?id=61564318923609",
    label: "Facebook",
    icon: <Facebook />,
  },
  {
    href: "https://www.instagram.com/healthcare.analiza",
    label: "Instagram",
    icon: <Instagram />,
  },
  {
    href: "https://www.youtube.com/@HealthcareAnaliza",
    label: "Youtube",
    icon: <Youtube />,
  },
];

export const Footer = () => {
  return (
    <div className="flex flex-col p-12 gap-6">
      <div className="flex lg:flex-row flex-col gap-12 lg:justify-between items-center">
        <div className="flex items-center">
          <div>
            <Image
              height={180}
              width={140}
              src="/logos/logo-dark.png"
              alt="Healthcare Analiza Logo"
            />
          </div>
          <div className="flex-col w-full text-center">
            <Typography variant="h5" className="text-xl text-center -mb-2">
              HEALTHCARE
            </Typography>
            <Typography variant="h3" className="font-medium -mt-2">
              ANALIZA
            </Typography>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {contactInfo.map(({ label, details }) => (
            <div key={label} className="flex flex-col gap-2">
              <Typography variant="h6" className="font-semibold">
                {label}
              </Typography>
              {details.map((detail, index) => (
                <Typography key={index} variant="body-sm">
                  {detail}
                </Typography>
              ))}
            </div>
          ))}
        </div>
        <div className="lg:h-[350px] lg:w-[350px] w-full h-[300px]">
          <Maps />
        </div>
      </div>
      <div className="flex lg:flex-row flex-col-reverse text-center lg:text-left justify-between px-6">
        <Typography variant="body-sm">
          Copyright © 2025 Healthcare Analiza
        </Typography>
        <div>
          <SocialLinks links={socialLinks} />
        </div>
      </div>
    </div>
  );
};
