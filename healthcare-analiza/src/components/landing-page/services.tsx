import { Typography } from "../ui/typography";
import Image from "next/image";

const services = [
  {
    category: "Metabolizëm dhe Nutricion",
    icon: "metabolism-and-nutrition.gif",
    items: [
      "Matje trupore - Visbody",
      "Matje metabolike - QNRG",
      "Testime laboratorike",
      "Plan i personalizuar",
      "Konsulence",
    ],
  },
  {
    category: "Mjekësi Internistike",
    icon: "internal-medicine.gif",
    items: [
      "Kardiologji",
      "EKG, Ergometri, Echo-kardiologji",
      "EKG-Holter",
      "Gastroenterologji",
      "Echo-abdomeni, Hidokolonterapi",
      "Endokrinologji",
      "Echo e gjëndrës tiroide",
    ],
  },
  {
    category: "Mjekësi Sportive",
    icon: "sports-medicine.gif",
    items: [
      "Ekzaminimi i sistemit osteoartikular",
      "Stres testime",
      "Astrand test",
      "VO2 max Spirometry",
    ],
  },
  {
    category: "Fizioterapi",
    icon: "physiotherapy.gif",
    items: [
      "Tape terapi",
      "Kinesio terapi",
      "Elektro terapi",
      "Termo terapi",
      "Ultrazë terapi",
      "Manual terapi",
      "Kiropraktikë",
    ],
  },
];

export default function Services() {
  return (
    <div id="services" className="lg:px-40 px-0">
      <div className="flex bg-white justify-center items-start flex-wrap p-16 gap-12">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex lg:flex-row flex-col w-full md:w-1/3 lg:w-[450px] gap-6 p-4"
          >
            <div className="flex-shrink-0 justify-center flex lg:inline lg:justify-start">
              <Image
                src={`/media/${service.icon}`}
                width={100}
                height={100}
                alt={`${service.category} icon`}
              />
            </div>
            <div className="flex flex-col lg:text-start text-center">
              <Typography variant="h5" className="font-bold mb-2">
                {service.category}
              </Typography>
              {service.items.map((item, idx) => (
                <Typography key={item + idx} variant="h6">
                  {item}
                </Typography>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
