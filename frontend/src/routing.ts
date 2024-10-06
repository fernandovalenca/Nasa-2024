import { defineRouting, LocalePrefix } from "next-intl/routing";
import { createSharedPathnamesNavigation } from "next-intl/navigation";

export type Locale = "en" | "pt";

export const LOCALES: Locale[] = ["en", "pt"];

export const DEFAULT_LOCALE: Locale = "en";

export const DEFAULT_LOCALE_PREFIX: LocalePrefix = "always";

export const ROUTING = defineRouting({
  locales: LOCALES,
  defaultLocale: DEFAULT_LOCALE,
  localePrefix: DEFAULT_LOCALE_PREFIX,
});

type AvailableLocale = {
  id: string;
  flag: string;
  label: string;
};

export const AVAILABLE_LOCALES: AvailableLocale[] = [
  {
    id: "en",
    flag: "US",
    label: "en-US",
  },
  {
    id: "pt",
    flag: "BR",
    label: "pt-BR",
  },
];

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({
    locales: ROUTING.locales,
    localePrefix: ROUTING.localePrefix,
  });
