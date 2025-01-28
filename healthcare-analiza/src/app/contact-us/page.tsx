"use client";

import { ContactForm } from "@/components/about-us/contact-form";
import { Map } from "@/components/about-us/map";
import { ActiveLayout } from "@/components/shared/active-layout";

export default function AboutUs() {
  return (
    <ActiveLayout>
      <Map />
      <ContactForm />
    </ActiveLayout>
  );
}
