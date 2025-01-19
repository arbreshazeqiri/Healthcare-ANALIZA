import { useState } from "react";
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
            label: "Matjet trupore",
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
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex lg:justify-evenly justify-between p-4 items-center">
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
            <Typography variant="h5" className="text-[#3C454C] lg:text-xl text-sm -mb-2">
              HEALTHCARE
            </Typography>
            <Typography
              variant="h3"
              className="text-[#02A6AB] text-2xl lg:text-5xl font-medium -mt-2"
            >
              ANALIZA
            </Typography>
          </div>
        </div>
      </Link>
      <div className="hidden lg:flex lg:gap-12 items-center">
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
      <div className="hidden lg:flex items-center">
        <Button>CAKTO TERMININ</Button>
      </div>
      <div className="lg:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <div className="space-y-2">
            <span className="block w-8 h-1 bg-gray-600"></span>
            <span className="block w-8 h-1 bg-gray-600"></span>
            <span className="block w-8 h-1 bg-gray-600"></span>
          </div>
        </button>
      </div>
      {menuOpen && (
        <div className="h-full absolute top-28 left-0 w-full bg-white shadow-lg z-50 lg:hidden">
          <div className="flex flex-col p-4">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} passHref>
                <Typography
                  variant="nav"
                  className="py-2 px-4 text-gray-700 hover:bg-gray-100 cursor-pointer"
                >
                  {link.label}
                </Typography>
              </Link>
            ))}
            <div className="mt-4">
              <Button>CAKTO TERMININ</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
