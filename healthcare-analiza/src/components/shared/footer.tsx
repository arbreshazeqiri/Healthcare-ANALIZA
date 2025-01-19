import Image from "next/image";
import { Typography } from "../ui/typography";
import { Maps } from "./maps";
import SocialLinks from "./social-links";
import { Facebook, Instagram, Youtube } from "lucide-react";

const contactInfo = [
  {
    label: "Kontakti",
    details: ["healthcare.analiza@hotmail.com", "+383 48 256 990"],
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
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div>
            <Image
              height={200}
              width={170}
              src="/logos/logo-dark.png"
              alt="Healthcare Analiza Logo"
            />
          </div>
          <div className="flex-col">
            <Typography variant="h3" className="font-medium -mb-2">
              ANALIZA
            </Typography>
            <Typography variant="h5" className="text-xl -mt-2">
              HEALTH & NUTRITION
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
        <div>
          <Maps />
        </div>
      </div>
      <div className="flex justify-between px-6">
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
