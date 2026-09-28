import { site } from "@/data/site";

export interface LocalizedNavigationItem {
  href: string;
  labels: Record<string, string>;
  group?: string;
}

export const primaryNavigation: LocalizedNavigationItem[] = [
  { href: "/about", labels: { "en-US": "About" }, group: "identity" },
  { href: "/release", labels: { "en-US": "Release" }, group: "release" },
  { href: "/platforms", labels: { "en-US": "Platforms" }, group: "release" },
  { href: "/steam", labels: { "en-US": "Steam" }, group: "release" },
  { href: "/demo", labels: { "en-US": "Demo" }, group: "release" },
  { href: "/age-rating", labels: { "en-US": "Age Rating" }, group: "release" },
  { href: "/price", labels: { "en-US": "Price" }, group: "buy" },
  { href: "/editions", labels: { "en-US": "Editions" }, group: "buy" },
  { href: "/preorder", labels: { "en-US": "Preorder" }, group: "buy" },
  { href: "/characters", labels: { "en-US": "Characters" }, group: "story" },
  { href: "/story", labels: { "en-US": "Story" }, group: "story" },
  { href: "/bosses", labels: { "en-US": "Bosses" }, group: "gameplay" },
  { href: "/gameplay", labels: { "en-US": "Gameplay" }, group: "gameplay" },
  { href: "/walkthrough", labels: { "en-US": "Walkthrough" }, group: "gameplay" },
  { href: "/weapons", labels: { "en-US": "Weapons" }, group: "gameplay" },
  { href: "/system-requirements", labels: { "en-US": "PC Specs" }, group: "reference" },
  { href: "/languages", labels: { "en-US": "Languages" }, group: "reference" },
  { href: "/music", labels: { "en-US": "Music" }, group: "reference" },
  { href: "/reviews", labels: { "en-US": "Reviews" }, group: "reference" },
];

export const footerNavigation: LocalizedNavigationItem[] = [
  { href: "/about", labels: { "en-US": "About" } },
  { href: "/contact", labels: { "en-US": "Contact" } },
  { href: "/privacy-policy", labels: { "en-US": "Privacy" } },
  { href: "/terms", labels: { "en-US": "Terms" } },
];

export function navigationLabel(
  item: LocalizedNavigationItem,
  locale: string,
): string {
  return (
    item.labels[locale] ||
    item.labels[site.primaryLocale] ||
    Object.values(item.labels)[0]
  );
}