import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

export const homePage: PageContent = {
  id: "home",
  translationKey: "home",
  locale: "en-US",
  routeKind: "home",
  slug: "",
  url: "/",
  pageType: "home",
  presentation: { shell: "home" },
  h1: "Castlevania Belmont's Curse: 2026 Reboot, Arcana Tarot, and Launch Window",
  seoTitle:
    "Castlevania Belmont's Curse Guide | 2026 Reboot, Arcana Tarot, Oct 14 Launch",
  metaDescription:
    "Castlevania Belmont's Curse is Konami and Evil Empire's 2026 Belmont Clan reboot launching Oct 14, 2026 on PS5, Switch, Switch 2, PC (Steam AppID 4231820), and Xbox Series X/S.",
  summary:
    "Pre-launch search hub for Castlevania Belmont's Curse covering release window, platforms, editions, the Arcana Tarot boss mechanic, characters, weapons and gameplay.",
  hero: {
    eyebrow: "2026 Belmont Clan reboot",
    subtitle: site.tagline,
    ctas: [
      { label: "Preorder Guide", href: "/preorder" },
      { label: "Release Window", href: "/release" },
    ],
  },
  quickAnswer:
    "Castlevania Belmont's Curse is Konami and Evil Empire's 2026 reboot of the Belmont Clan arc, launching Oct 14, 2026 on PS5, Switch, Switch 2, PC (Steam AppID 4231820), and Xbox Series X/S. The flagship Arcana Tarot system absorbs defeated bosses into traveling allies with traversal abilities and spells.",
  keyFacts: [
    { label: "Release date", value: "October 14, 2026" },
    { label: "Platforms", value: "PS5, Switch, Switch 2, PC (Steam), Xbox Series X|S" },
    { label: "Publisher / Developer", value: "Konami / Evil Empire" },
    { label: "Flagship mechanic", value: "Arcana Tarot boss absorption" },
  ],
  modules: [
    {
      id: "launch-window",
      type: "callout",
      tone: "confirmed",
      title: "Launch locked for October 14, 2026",
      body: "Confirmed across the Konami EN press topic and the four storefronts (Steam AppID 4231820, PlayStation Store, Nintendo eShop, Xbox Store). One global window, not a staggered rollout.",
    },
    {
      id: "identity",
      type: "prose",
      heading: "What Castlevania Belmont's Curse is",
      body:
        "Castlevania Belmont's Curse is Evil Empire and Konami's 2026 reboot of the Belmont Clan arc, with Rose Belmont and Sonia Belmont as the new playable leads. The game's flagship mechanic, the Arcana Tarot system, lets defeated bosses become traveling allies rather than simple kill rewards. The reboot draws on the franchise's gothic-platforming identity from 1986 to 2025, with the dragon motif, whip-driven combat and a clan arc centered on a new generation of Belmonts.",
      links: [
        { label: "Identity overview", href: "/about", description: "Belmont Clan arc and the 2026 reboot" },
        { label: "Arcana Tarot mechanic", href: "/bosses", description: "Boss-to-ally absorption loop" },
      ],
    },
    {
      id: "platforms",
      type: "entity-grid",
      heading: "Confirmed platforms",
      items: [
        { title: "PS5", summary: "PlayStation Store listing, Oct 14, 2026.", href: "/platforms" },
        { title: "Nintendo Switch", summary: "Original Switch via Nintendo eShop.", href: "/platforms" },
        { title: "Nintendo Switch 2", summary: "Next-gen Switch on the same launch date.", href: "/platforms" },
        { title: "PC (Steam AppID 4231820)", summary: "Steam Deck supported, wishlist open.", href: "/steam" },
        { title: "Xbox Series X|S", summary: "Xbox Store listing, Oct 14, 2026.", href: "/platforms" },
      ],
    },
    {
      id: "arcanatarot",
      type: "prose",
      heading: "How the Arcana Tarot boss absorption works",
      body:
        "When Rose or Sonia topple a boss, the enemy soul is captured into an Arcanatarot card. That card summons the boss as a combat ally and unlocks a traversal ability tied to the source creature. Preview coverage names The Fallen, Corrupted Joan of Arc, and Medusa as the three previewed bosses; each absorbed card grants both a combat spell and a movement option that opens the next branch of the gothic map.",
    },
    {
      id: "characters",
      type: "entity-grid",
      heading: "Characters and bosses",
      items: [
        { title: "Rose Belmont", summary: "Lead playable protagonist, Arcanatarot whip combat.", href: "/characters" },
        { title: "Sonia Belmont", summary: "Second playable Belmont sister.", href: "/characters" },
        { title: "The Fallen", summary: "First named preview boss.", href: "/bosses" },
        { title: "Corrupted Joan of Arc", summary: "Broadsword + holy halo encounter.", href: "/bosses" },
        { title: "Medusa", summary: "Perseus-style sword + shield encounter.", href: "/bosses" },
      ],
    },
    {
      id: "hub-pages",
      type: "entity-grid",
      heading: "Browse the hub",
      items: [
        { title: "Release window", summary: "Oct 14, 2026 across five platforms.", href: "/release" },
        { title: "Editions & preorder", summary: "Standard, Midnight, Collector's, Steelbook.", href: "/editions" },
        { title: "Platforms", summary: "PS5, Switch, Switch 2, PC, Xbox.", href: "/platforms" },
        { title: "Steam AppID 4231820", summary: "PC store entry and Deck support.", href: "/steam" },
        { title: "Characters", summary: "Rose and Sonia Belmont plus allies.", href: "/characters" },
        { title: "Story", summary: "Belmont Clan arc and Dracula callbacks.", href: "/story" },
        { title: "Gameplay loop", summary: "Explore → fight → absorb → grow.", href: "/gameplay" },
        { title: "Walkthrough", summary: "Preview-scope progression order.", href: "/walkthrough" },
      ],
    },
  ],
  faqIds: [
    "cbc-overview-what",
    "cbc-release-when",
    "cbc-platforms-which",
    "cbc-arcanatarot-how",
  ],
  relatedPageIds: [
    "about",
    "release-status",
    "platforms",
    "characters",
    "bosses",
    "gameplay-loop",
    "editions",
    "preorder",
  ],
  schemaTypes: ["WebSite", "CollectionPage", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-26",
};