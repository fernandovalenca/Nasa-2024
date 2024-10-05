"use client";

import { useState, useEffect, useRef } from "react";
import { ThemeModeToggle } from "./theme-mode-toggle";
import { LocaleSwitcher } from "./locale-switcher";
import { useTranslations } from "next-intl";
import Logo from "./logo";
import { Badge } from "../ui/badge";
import { ScrollArea } from "../ui/scroll-area";
import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";
import Image from "next/image";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarFallback, AvatarImage } from "../ui/avatar";

type SocialMedia = {
  link: string;
  icon: "facebook" | "twitter" | "instagram" | "linkedin" | "github";
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
    { id: "our-challenge", label: t("nav.ourChallenge") },
    { id: "contact-us", label: t("nav.contactUs") },
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
      area: "Dev Frontend",
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
      name: "Maria Fernanda1",
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
      name: "Maria Fernanda2",
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
          id="our-challenge"
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

              <p className="text-lg text-gray-700 dark:text-gray-300 mb-7">
                We are a company dedicated to providing high-quality products
                and services to our customers. Our team of experts is committed
                to innovation and excellence in everything we do.
              </p>

              <input
                type="text"
                className="w-full h-16 rounded-full px-8 border border-gray-300 dark:border-gray-600 dark:bg-gray-900"
                placeholder="Enter your city's name"
                aria-label="Enter your city's name"
                autoComplete="off"
                autoCapitalize="off"
              />
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
          id="contact-us"
          className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900"
        >
          <div className="container mx-auto px-4 py-16">
            <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
              {t("nav.contactUs")}
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              Discover our range of cutting-edge products designed to meet your
              needs. From sustainable solutions to innovative technologies, we
              have something for everyone.
            </p>
          </div>
        </section>

        <section
          id="about-us"
          className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800"
        >
          <div className="container mx-auto px-4 py-16">
            <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
              {t("nav.aboutUs")}
            </h2>

            <div className="flex items-center justify-center">
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
