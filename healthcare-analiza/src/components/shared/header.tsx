import Image from "next/image";
import { Typography } from "../ui/typography";
import { Button } from "../ui/button";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "../ui/hover-card";
import Link from "next/link";

const navLinks = [
  {
    href: "/services",
    label: "SHËRBIMET",
    submenu: [
      {
        href: "/services/metabolizmi_dhe_nutricioni",
        label: "Metabolizmi dhe Nutricioni",
        subsubmenu: [
          {
            href: "/services/metabolizmi_dhe_nutricioni/nutricioni",
            label: "Majtet trupore",
          },
          {
            href: "/services/metabolizmi_dhe_nutricioni/metabolizmi",
            label: "Matjet metabolike",
          },
          {
            href: "/services/metabolizmi_dhe_nutricioni/metabolizmi",
            label: "Matjet laboratorike",
          },
          {
            href: "/services/metabolizmi_dhe_nutricioni/metabolizmi",
            label: "Matjet sipas rastit",
          },
          {
            href: "/services/metabolizmi_dhe_nutricioni/metabolizmi",
            label: "Konsultimet klinike",
          },
          {
            href: "/services/metabolizmi_dhe_nutricioni/metabolizmi",
            label: "Konsultimet Gastro/Kardio/Endo",
          },
        ],
      },
      {
        href: "/services/internistike",
        label: "Internistike",
        subsubmenu: [
          {
            href: "/services/metabolizmi_dhe_nutricioni/nutricioni",
            label: "Gastroenterlogji",
          },
          {
            href: "/services/metabolizmi_dhe_nutricioni/metabolizmi",
            label: "Endokrinologji",
          },
          {
            href: "/services/metabolizmi_dhe_nutricioni/metabolizmi",
            label: "Kardiologji",
          },
        ],
      },
      { href: "/services/mjekesi_sportive", label: "Mjekësi Sportive" },
      { href: "/services/fizioterapi", label: "Fizioterapi" },
    ],
  },
  { href: "/staff", label: "STAFI" },
  { href: "/about-us", label: "RRETH NESH" },
  { href: "/blog", label: "BLOG" },
  { href: "/contact-us", label: "KONTAKTI" },
];

export const Header = () => {
  return (
    <div className="flex justify-evenly p-4">
      <Link href={"/"} passHref>
        <div className="flex items-center gap-4">
          <div>
            <Image
              src="/favicon.png"
              width={80}
              height={80}
              alt="Healthcare Analiza Logo"
            />
          </div>
          <div className="flex-col place-items-center">
            <Typography
              variant="h3"
              className="text-[#02A6AB] font-medium -mb-2"
            >
              ANALIZA
            </Typography>
            <Typography variant="h5" className="text-[#3C454C] text-xl -mt-2">
              HEALTH & NUTRITION
            </Typography>
          </div>
        </div>
      </Link>
      <div className="flex gap-12 items-center">
        {navLinks.map((link) => (
          <HoverCard key={link.label} openDelay={0} closeDelay={0}>
            <HoverCardTrigger href={link.href}>
              <Typography
                variant="nav"
                className="cursor-pointer hover:text-primary"
              >
                {link.label}
              </Typography>
            </HoverCardTrigger>
            {link.submenu && (
              <HoverCardContent className="rounded-none flex flex-col gap-4 -mr-40">
                {link.submenu.map((sublink) => (
                  <div key={sublink.label}>
                    <HoverCard openDelay={0} closeDelay={0}>
                      <HoverCardTrigger href={sublink.href}>
                        <Typography
                          variant="body-sm"
                          className="cursor-pointer hover:text-primary"
                        >
                          {sublink.label}
                        </Typography>
                      </HoverCardTrigger>
                      {sublink.subsubmenu && (
                        <HoverCardContent
                          side="right"
                          className="ml-3 rounded-none flex flex-col gap-4"
                          style={{
                            position: "absolute",
                            top: "100%",
                            left: 0,
                            zIndex: 10,
                            marginTop: 0,
                          }}
                        >
                          {sublink.subsubmenu.map((subsubLink, i) => (
                            <div key={i}>
                              <Typography
                                variant="body-sm"
                                className="hover:text-primary"
                              >
                                {subsubLink.label}
                              </Typography>
                            </div>
                          ))}
                        </HoverCardContent>
                      )}
                    </HoverCard>
                  </div>
                ))}
              </HoverCardContent>
            )}
          </HoverCard>
        ))}
      </div>
      <div className="flex items-center">
        <Button>CAKTO TERMININ</Button>
      </div>
    </div>
  );
};
