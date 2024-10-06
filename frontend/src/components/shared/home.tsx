"use client";

import { useState, useEffect, useRef } from "react";
import { ThemeModeToggle } from "./theme-mode-toggle";
import { LocaleSwitcher } from "./locale-switcher";
import { useTranslations } from "next-intl";
import Logo from "./logo";
import { Badge } from "../ui/badge";
import { ScrollArea } from "../ui/scroll-area";
import { Card } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Sprout,
  Globe,
  Handshake,
  Headset,
} from "lucide-react";
import Image from "next/image";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarFallback, AvatarImage } from "../ui/avatar";

type SocialMedia = {
  link: string;
  icon: "facebook" | "twitter" | "instagram" | "linkedin" | "github";
};

type Benefit = {
  icon: "sprout" | "handshake" | "headset" | "globe";
  title: string;
};

const BenefitIcon = ({ icon }: { icon: Benefit["icon"] }) => {
  switch (icon) {
    case "sprout":
      return <Sprout className="h-4 w-4" />;
    case "globe":
      return <Globe className="h-4 w-4" />;
    case "handshake":
      return <Handshake className="h-4 w-4" />;
    case "headset":
      return <Headset className="h-4 w-4" />;
  }
};

const SocialIcon = ({ icon }: { icon: SocialMedia["icon"] }) => {
  switch (icon) {
    case "facebook":
      return <Facebook className="h-4 w-4" />;
    case "twitter":
      return <Twitter className="h-4 w-4" />;
    case "instagram":
      return <Instagram className="h-4 w-4" />;
    case "linkedin":
      return <Linkedin className="h-4 w-4" />;
    case "github":
      return <Github className="h-4 w-4" />;
  }
};

type ProfileData = {
  name: string;
  image: string;
  about: string;
  area: string;
  medias: SocialMedia[];
};

export default function Home() {
  const t = useTranslations("home");
  const [activeSection, setActiveSection] = useState("about-us");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (!section) return;
    const yOffset = -60; // Adjust this value based on your header height
    const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const sections = [
    { id: "home", label: "Home" },
    { id: "our-challenge", label: t("nav.ourChallenge") },
    { id: "our-application", label: "Our Application" },
    { id: "about-us", label: t("nav.aboutUs") },
  ];

  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  const profiles: ProfileData[] = [
    {
      name: "Fernando Valença",
      area: "Dev Frontend",
      about: "",
      image: "https://github.com/fernandovalenca.png",
      medias: [
        {
          icon: "linkedin",
          link: "https://github.com/fernandovalenca",
        },
        {
          icon: "github",
          link: "https://github.com/fernandovalenca",
        },
        {
          icon: "instagram",
          link: "https://github.com/fernandovalenca",
        },
        {
          icon: "facebook",
          link: "https://github.com/fernandovalenca",
        },
        {
          icon: "twitter",
          link: "https://github.com/fernandovalenca",
        },
      ],
    },
    {
      name: "Luiz Fernando",
      area: "Dev Full-stack",
      about: "",
      image: "https://github.com/lz-fernando.png",
      medias: [
        {
          icon: "linkedin",
          link: "https://github.com/lz-fernando",
        },
        {
          icon: "github",
          link: "https://github.com/lz-fernando",
        },
        {
          icon: "instagram",
          link: "https://github.com/lz-fernando",
        },
        {
          icon: "facebook",
          link: "https://github.com/lz-fernando",
        },
        {
          icon: "twitter",
          link: "https://github.com/lz-fernando",
        },
      ],
    },
    {
      name: "Maria Fernanda",
      area: "Estudante de Física",
      about: "",
      image: "https://github.com/fukittyx.png",
      medias: [
        {
          icon: "linkedin",
          link: "https://github.com/fukittyx",
        },
        {
          icon: "github",
          link: "https://github.com/fukittyx",
        },
        {
          icon: "instagram",
          link: "https://github.com/fukittyx",
        },
        {
          icon: "facebook",
          link: "https://github.com/fukittyx",
        },
        {
          icon: "twitter",
          link: "https://github.com/fukittyx",
        },
      ],
    },
    {
      name: "José Abraão",
      area: "Dev Backend",
      about: "",
      image: "https://github.com/abraao2005.png",
      medias: [
        {
          icon: "linkedin",
          link: "https://github.com/fukittyx",
        },
        {
          icon: "github",
          link: "https://github.com/fukittyx",
        },
        {
          icon: "instagram",
          link: "https://github.com/fukittyx",
        },
        {
          icon: "facebook",
          link: "https://github.com/fukittyx",
        },
        {
          icon: "twitter",
          link: "https://github.com/fukittyx",
        },
      ],
    },
    {
      name: "Walmisson Cardoso",
      area: "Dev Full-stack",
      about: "",
      image: "https://github.com/walminho.png",
      medias: [
        {
          icon: "linkedin",
          link: "https://github.com/fukittyx",
        },
        {
          icon: "github",
          link: "https://github.com/fukittyx",
        },
        {
          icon: "instagram",
          link: "https://github.com/fukittyx",
        },
        {
          icon: "facebook",
          link: "https://github.com/fukittyx",
        },
        {
          icon: "twitter",
          link: "https://github.com/fukittyx",
        },
      ],
    },
  ];

  const benefits: Benefit[] = [
    {
      icon: "globe",
      title: "Data-Driven Mission",
    },
    {
      icon: "sprout",
      title: "Future Vision",
    },
    {
      icon: "handshake",
      title: "Trusted Partnership",
    },
    {
      icon: "headset",
      title: "Support Team",
    },
  ];

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 left-0 right-0 z-50 bg-background shadow-md backdrop-blur supports-[backdrop-filter]:bg-background/50">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Logo size={60} />
            </div>
            <nav className="hidden md:flex space-x-8">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 ${
                    activeSection === section.id ? "font-bold" : undefined
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </nav>
            <div className="flex items-center space-x-4">
              <LocaleSwitcher />
              <ThemeModeToggle />
            </div>
          </div>
        </div>
      </header>

      <ScrollArea className="select-none">
        <section
          id="home"
          className="min-h-screen h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800"
        >
          <div className="container flex flex-col-reverse lg:flex-row gap-4 justify-center items-center mx-auto px-4">
            {/* Texto e Input */}
            <div className="flex-1 max-w-2xl">
              <Badge className="text-[#244030] bg-[#D5EEC6] rounded-full">
                Support for agricultural decision-making
              </Badge>

              <h2 className="text-4xl lg:text-6xl font-bold mb-7 mt-5 text-gray-900 dark:text-white">
                Observation of weather data to assist your planting
              </h2>

              <p className="text-lg text-gray-700 dark:text-gray-300 mb-7 font-normal">
                We are a company dedicated to providing high-quality products
                and services to our customers. Our team of experts is committed
                to innovation and excellence in everything we do.
              </p>
            </div>

            {/* Imagem */}
            <div className="flex-1 flex items-center justify-center">
              <div className="flex-1 relative rounded-full aspect-square min-w-80 max-w-xl">
                <Image
                  priority
                  src="/assets/images/hero-image.png"
                  alt="Weather observation for agricultural decision-making"
                  fill
                  sizes="(max-width: 1024px) 100vw, 28rem" // Ajuste responsivo do tamanho da imagem
                  className="rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="our-challenge"
          className="min-h-screen flex items-start justify-center bg-white dark:bg-gray-900"
        >
          <div className="container mx-auto px-4 py-16">
            <h2 className="text-center text-6xl font-bold mb-20 text-gray-900 dark:text-white">
              Our <span className="text-green-700">Challenge</span>
            </h2>
            <div className="container flex justify-center gap-16">
              <Image
                priority
                src="/assets/images/our-challenge.png"
                alt="Weather observation for agricultural decision-making"
                height={638}
                width={472}
                className="object-cover"
              />
              <div className="max-w-2xl flex flex-col items-center justify-start">
                <h3 className="text-3xl font-bold text-center">
                  Leveraging{" "}
                  <span className="text-green-700">Earth Observation Data</span>{" "}
                  for Informed{" "}
                  <span className="text-green-700">
                    Agricultural Decision-Making
                  </span>
                </h3>
                <p className="text-lg mt-7 text-justify font-normal">
                  Currently, the agricultural sector faces several challenges,
                  such as climate change, resource scarcity, and the need for
                  sustainable production. To overcome these obstacles, it is
                  essential for farmers and decision-makers to utilize advanced
                  technologies to gain valuable insights into their land and
                  crops.
                </p>

                <div className="container grid grid-cols-2 gap-8 py-10">
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center gap-4"
                    >
                      <div className="bg-green-700 p-2 rounded-full">
                        {BenefitIcon({
                          icon: benefit.icon,
                        })}
                      </div>
                      <span className="text-lg font-bold">{benefit.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="container mt-28 mb-16">
              <h3 className="font-bold text-3xl mb-5">Description</h3>
              <p className="text-lg mt-7 text-justify font-normal">
                The goal of this challenge is to develop solutions that use
                Earth observation data — such as satellite imagery and remote
                sensing — to support more informed agricultural decisions.
                Participants must create tools or platforms that help farmers
                monitor the state of crops, predict environmental changes, and
                optimize the use of resources, such as water and fertilizers.
              </p>
            </div>
          </div>
        </section>

        <section
          id="our-application"
          className="min-h-screen flex items-start justify-center bg-gray-100 dark:bg-gray-800"
        >
          <div className="container mx-auto px-4 py-16">
            <div className="flex items-center justify-center gap-10">
              <h2 className="text-6xl font-bold text-gray-900 dark:text-white max-w-96">
                Our <span className="text-green-700">Application</span>
              </h2>

              <p className="text-lg mt-7 text-justify font-normal">
                Our application utilizes advanced climate, drought, and soil
                moisture data provided by NASA to transform the way agribusiness
                makes decisions.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-1 text-justify">
              <p className="text-lg mt-7 text-justify font-normal">
                With precise and real-time insights, we help farmers and
                managers identify the most promising crops, optimize resource
                use, and prevent crop losses. By anticipating risks and
                highlighting opportunities, our solution promotes smarter and
                more sustainable agricultural management, ensuring that every
                decision is backed by cutting-edge science and technology.
              </p>
              <p className="text-lg mt-7 text-justify font-normal">
                To achieve this goal, we employ Machine Learning techniques that
                analyze these data in depth, generating accurate predictions
                about crop behavior and identifying which plantations will yield
                the best results. This enables us to anticipate climate risks,
                optimize resource use, and reduce losses, promoting smarter
                agricultural management based on cutting-edge technology and
                data science.
              </p>
              <p className="text-lg mt-7 text-justify font-normal">
                Our application utilizes advanced climate, drought, and soil
                moisture data provided by NASA sources, such as CropCASMA and
                the US Drought Monitor, to transform decision-making in
                agribusiness.
              </p>
            </div>
            <div className="mt-20 flex gap-8">
              <Image
                priority
                src="/assets/images/us-drought-monitor.png"
                alt=""
                height={433}
                width={848}
                className="object-cover"
              />
              <div className="pt-10">
                <a
                  href="https://nassgeo.csiss.gmu.edu/CropCASMA/"
                  target="_blank"
                  className="text-2xl font-bold"
                >
                  <span className="text-green-700">
                    Crop Condition and Soil Moisture Analytics
                  </span>{" "}
                  (Crop-CASMA)
                </a>
                <p className="text-lg mt-7 text-justify font-normal">
                  Crop CASMA provides access to high-resolution data from NASA's
                  Soil Moisture Active Passive (SMAP) mission and the Moderate
                  Resolution Imaging Spectroradiometer (MODIS) instrument in an
                  easy-to-use format. Soil moisture data is essential for
                  professionals in agriculture and natural resources who use
                  soil moisture in conjunction with other data to plan planting,
                  predict yields, monitor droughts or floods, and enhance
                  weather forecasting. This application offers a suite of
                  services, including Web Map Service (WMS), Web Coverage
                  Service (WCS), and Web Processing Services (WPS).
                </p>
              </div>
            </div>

            <div className="mt-10 flex gap-8">
              <div className="pt-20">
                <a
                  href="https://droughtmonitor.unl.edu/"
                  target="_blank"
                  className="text-2xl font-bold"
                >
                  <span className="text-green-700">U.S.</span> Drought{" "}
                  <span className="text-green-700">Monitor</span>
                </a>
                <p className="text-lg mt-7 text-justify font-normal">
                  The US Drought Monitor is a weekly map of drought conditions
                  used by policymakers to help determine drought relief
                  allocations and drought declarations. NASA satellites provide
                  water availability data for the US Drought Monitor.
                </p>
              </div>

              <Image
                priority
                src="/assets/images/crop-casma.png"
                alt=""
                height={433}
                width={848}
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section
          id="about-us"
          className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900"
        >
          <div className="container h-full flex-1 flex flex-col mx-auto px-4 py-16">
            <h2 className="text-4xl font-bold mb-20 text-gray-900 dark:text-white">
              {t("nav.aboutUs")}
            </h2>

            <div className="flex-1 flex items-center justify-center">
              <Carousel className="w-full max-w-7xl" plugins={[plugin.current]}>
                <CarouselContent className="ml-2">
                  {profiles.map((profile, index) => (
                    <CarouselItem
                      key={index}
                      className="pl-1 md:basis-1/2 lg:basis-1/3"
                    >
                      <Card className="h-96 w-96 px-10 flex flex-col items-center justify-center">
                        <Avatar className="h-40 mb-8">
                          <AvatarImage
                            className="rounded-full"
                            src={profile.image}
                            alt={profile.name}
                          />
                          <AvatarFallback>{profile.name}</AvatarFallback>
                        </Avatar>
                        <h3 className="text-xl font-bold mb-1">
                          {profile.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          {profile.area}
                        </p>
                        <p className="text-sm text-center mb-4">
                          {profile.about}
                        </p>
                        <div className="flex space-x-2">
                          {profile.medias.map((media, mediaIndex) => (
                            <a
                              key={mediaIndex}
                              href={media.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-primary transition-colors"
                            >
                              <SocialIcon icon={media.icon} />
                            </a>
                          ))}
                        </div>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </section>
      </ScrollArea>
    </div>
  );
}
