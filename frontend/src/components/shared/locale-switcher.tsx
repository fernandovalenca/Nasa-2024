"use client";

import { useTransition } from "react";
import { useLocale } from "next-intl";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { AVAILABLE_LOCALES, Locale, usePathname, useRouter } from "@/routing";

export function LocaleSwitcher() {
  const activeLocale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function onLocaleChange(locale: Locale): void {
    startTransition(() => {
      router.replace(pathname, { locale });
    });
  }

  return (
    <Select
      disabled={isPending}
      defaultValue={activeLocale}
      onValueChange={(e) => onLocaleChange(e as Locale)}
    >
      <SelectTrigger className="max-w-max border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground">
        <SelectValue placeholder="Idioma" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {AVAILABLE_LOCALES.map(({ flag, id, label }) => (
            <SelectItem key={id} value={id}>
              <div className="flex items-center gap-2">
                <div
                  aria-label="Flag"
                  className="w-4 h-4 rounded-full bg-no-repeat bg-center bg-cover"
                  style={{ backgroundImage: `url(/assets/flags/${flag}.svg)` }}
                ></div>

                <span>{label}</span>
              </div>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
