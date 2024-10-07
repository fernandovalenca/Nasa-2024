import { Metadata } from "next";

import { Locale } from "@/routing";
import Home from "@/components/shared/home";

export const dynamic = "force-dynamic";

type Props = {
  params: {
    locale: Locale;
  };
};

const getTitleByLocale = (locale: Locale): string => {
  const titles: Record<Locale, string> = {
    en: "Farm IQ",
    pt: "Farm IQ",
  };

  return titles[locale] || titles["en"];
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params;

  return {
    title: getTitleByLocale(locale),
  };
}

export default function Page() {
  return (
    <main className="w-full">
      <Home />
    </main>
  );
}

