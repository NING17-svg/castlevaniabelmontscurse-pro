import type { SiteLocaleConfig } from "@/types/localization";

export interface SiteOfficialSource {
  label: string;
  href: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  brandMark?: string;
  gameName: string;
  domain: string;
  baseUrl: string;
  description: string;
  tagline: string;
  primaryLocale: string;
  locales: SiteLocaleConfig[];
  author: string;
  gaMeasurementId: string;
  bingSiteAuthCode: string;
  officialSources: SiteOfficialSource[];
  disclaimer: string;
}

export const site: SiteConfig = {
  name: "Castlevania Belmont's Curse Guide",
  brandMark: "CBC",
  gameName: "Castlevania Belmont's Curse",
  domain: "castlevaniabelmontscurse.pro",
  baseUrl: (process.env.NEXT_PUBLIC_SITE_URL || "https://castlevaniabelmontscurse.pro").replace(/\/$/, ""),
  description:
    "Unofficial pre-launch search hub for Castlevania Belmont's Curse (2026) — release window, platforms, editions, Arcana Tarot mechanic, characters, bosses, and gameplay reference.",
  tagline:
    "Release window, platforms, Arcana Tarot boss absorption, characters, weapons and the Belmont Clan reboot hub.",
  primaryLocale: "en-US",
  locales: [
    {
      code: "en-US",
      label: "English",
      pathPrefix: "",
      htmlLang: "en-US",
      openGraphLocale: "en_US",
      ui: {
        searchOpen: "Search",
          searchClose: "Close search",
          searchPlaceholder: "Search this guide",
          searchSubmit: "Search",
          searchLoading: "Loading search…",
          searchError: "Search is unavailable right now.",
          searchNoResults: "No matching pages found.",
          recentUpdates: "Recent updates",
          lastReviewed: "Last reviewed",
        },
    },
  ],
  author: "Castlevania Belmont's Curse Guide",
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
  bingSiteAuthCode: process.env.NEXT_PUBLIC_BING_SITE_AUTH_CODE || "",
  officialSources: [
    {
      label: "Konami EN press topic",
      href: "https://www.konami.com/games/eu/en/topics/18995/",
      description: "Konami publisher topic for the 2026 Belmont's Curse reboot.",
    },
    {
      label: "Steam store page (AppID 4231820)",
      href: "https://store.steampowered.com/app/4231820",
      description: "Official Steam listing — PC platform, release date, system requirements.",
    },
    {
      label: "Nintendo.com US title entry",
      href: "https://www.nintendo.com/us/store/products/castlevania-belmonts-curse-switch/",
      description: "Switch and Switch 2 listing on Nintendo.com US.",
    },
    {
      label: "PlayStation Store entry",
      href: "https://store.playstation.com/en-us/product/UPxxxx-CastlevaniaBelmontsCurse",
      description: "PS5 listing on the PlayStation Store.",
    },
    {
      label: "Xbox Store entry",
      href: "https://www.xbox.com/en-US/games/store/castlevania-belmonts-curse/9NH6N2DNQ0H0",
      description: "Xbox Series X|S listing on the Xbox Store.",
    },
  ],
  disclaimer:
    "Unofficial fan guide hub. Verified against the Konami EN press topic and major storefronts as of 2026-09-26.",
};