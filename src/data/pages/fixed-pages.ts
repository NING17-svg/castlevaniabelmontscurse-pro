import type { PageContent } from "@/types/content";

export const fixedPages: PageContent[] = [
  {
    id: "about",
    translationKey: "overview",
    locale: "en-US",
    routeKind: "fixed",
    slug: "about",
    url: "/about",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Castlevania Belmont's Curse: Identity, Arcana Tarot, and the 2026 Reboot",
    seoTitle:
      "Castlevania Belmont's Curse | Identity, Arcana Tarot, 2026 Reboot",
    metaDescription:
      "Castlevania Belmont's Curse is Konami and Evil Empire's 2026 reboot of the Belmont Clan arc, built around the Arcana Tarot boss absorption mechanic.",
    summary:
      "Identity page for the 2026 Belmont Clan reboot: developer/publisher, Belmont Clan arc context, and the Arcana Tarot mechanic.",
    hero: {
      eyebrow: "Identity",
      subtitle: "Belmont Clan reboot for 2026 — what the game is and what the Arcana Tarot changes.",
      ctas: [
        { label: "Release window", href: "/release" },
        { label: "Arcana Tarot mechanic", href: "/bosses" },
      ],
    },
    quickAnswer:
      "Castlevania Belmont's Curse is a 2026 2D action platformer from publisher Konami and developer Evil Empire, reviving the Belmont Clan arc with Rose Belmont and Sonia Belmont as the new playable leads. Its signature Arcana Tarot system lets defeated bosses become tarot-empowered allies with traversal abilities and spells instead of just giving a single drop reward. The game launches October 14, 2026 on PS5, Switch, Switch 2, PC via Steam (AppID 4231820), and Xbox Series X/S.",
    keyFacts: [
      { label: "Title", value: "Castlevania Belmont's Curse" },
      { label: "Year", value: "2026" },
      { label: "Developer", value: "Evil Empire" },
      { label: "Publisher", value: "Konami" },
      { label: "Flagship mechanic", value: "Arcana Tarot boss absorption" },
    ],
    modules: [
      {
        id: "reboot-framing",
        type: "prose",
        heading: "The 2026 Castlevania reboot",
        body:
          "The reboot is Evil Empire's first console-level contribution to the franchise and Konami's return as publisher after a stretch where the IP sat on the shelf. It is part of the modern Belmont Clan arc, not the 1989 NES Castlevania: Dracula's Curse of the same era, so the lore path follows from the later clan continuity rather than the early console catalog.",
        links: [
          { label: "Story & Belmont Clan", href: "/story" },
          { label: "Characters", href: "/characters" },
        ],
      },
      {
        id: "dev-publisher",
        type: "prose",
        heading: "Who develops and publishes Belmont's Curse",
        body:
          "Evil Empire is the developer and Konami is the publisher. Evil Empire's history with the franchise's modern direction informed the studio's approach to the reboot, and Konami's return as publisher confirms that the title sits inside the official franchise lineage rather than as a licensed offshoot. Both roles are reflected in the Konami EN press topic and the four storefronts.",
      },
      {
        id: "belmont-clan-arc",
        type: "prose",
        heading: "Belmont Clan arc context",
        body:
          "The Belmont Clan arc is the through-line that makes the 2026 reboot feel like a Castlevania game rather than a new IP. Rose Belmont and Sonia Belmont continue the clan lineage established by earlier franchise entries, including the 1986, 1989, 1997, 2003, and 2005 Castlevania titles. The reboot draws on that lineage for character identity and the dragon / Dracula premise without inheriting mechanics wholesale.",
      },
      {
        id: "arcanatarot",
        type: "callout",
        tone: "tip",
        title: "Arcana Tarot mechanic at a glance",
        body: "Defeated bosses drop tarot cards that Rose or Sonia can absorb, granting traversal abilities and combat spells. Preview examples: The Fallen, Corrupted Joan of Arc, Medusa.",
      },
      {
        id: "exploration",
        type: "prose",
        heading: "How exploration plays in 2026",
        body:
          "The exploration loop blends metroidvania traversal with Arcana Tarot progression. New tarot cards unlock new movement paths, while weapons, sub-weapons, and spells tie into the same card-driven upgrade tree. The map grows as the Belmont sisters absorb more bosses, which keeps exploration and progression tied together.",
      },
      {
        id: "status",
        type: "callout",
        tone: "confirmed",
        title: "Status note for October 14, 2026",
        body: "Confirmed across the Konami EN press topic, the Steam AppID 4231820 entry, Nintendo.com US, the PlayStation Store, and the Xbox Store. Steam Deck supported. Pre-release scope means the full boss roster, complete Arcana card set, and post-launch roadmap are not announced as of 2026-09-26.",
      },
    ],
    faqIds: ["cbc-overview-what", "cbc-arcanatarot-how", "cbc-trevor-not-playable"],
    relatedPageIds: ["release-status", "platforms", "characters", "bosses", "gameplay-loop"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-26",
  },
  {
    id: "release-status",
    translationKey: "release-status",
    locale: "en-US",
    routeKind: "fixed",
    slug: "release",
    url: "/release",
    pageType: "release",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Castlevania Belmont's Curse Release Date and Launch Window",
    seoTitle:
      "Castlevania Belmont's Curse Release Date | Oct 14, 2026 Launch Window",
    metaDescription:
      "Castlevania Belmont's Curse release date is October 14, 2026 on PS5, Switch, Switch 2, PC and Xbox Series X|S, confirmed by Konami and the four major storefronts.",
    summary:
      "Release date page for Castlevania Belmont's Curse: October 14, 2026 across all five platforms.",
    hero: {
      eyebrow: "Release info",
      subtitle: "October 14, 2026 worldwide launch — no staggered window per platform.",
      ctas: [
        { label: "Preorder Guide", href: "/preorder" },
        { label: "Steam AppID", href: "/steam" },
      ],
    },
    quickAnswer:
      "The Castlevania Belmont's Curse release date is October 14, 2026, confirmed by the Konami EN press topic and reflected on Steam (AppID 4231820), the PlayStation Store, the Nintendo eShop, and the Xbox Store. The launch is a single global window, not a staggered rollout per platform.",
    keyFacts: [
      { label: "Release date", value: "October 14, 2026" },
      { label: "Window type", value: "Single global, not staggered" },
      { label: "Platforms", value: "PS5, Switch, Switch 2, PC, Xbox Series X|S" },
      { label: "Sources", value: "Konami EN topic + 4 storefronts" },
    ],
    modules: [
      {
        id: "release-by-platform",
        type: "data-table",
        heading: "Release date by platform",
        columns: [
          { key: "platform", label: "Platform" },
          { key: "release", label: "Release date" },
          { key: "source", label: "Source" },
          { key: "status", label: "Status" },
        ],
        rows: [
          { platform: "PS5", release: "October 14, 2026", source: "PlayStation Store, Konami topic", status: "Confirmed" },
          { platform: "Nintendo Switch", release: "October 14, 2026", source: "Nintendo.com, Konami topic", status: "Confirmed" },
          { platform: "Nintendo Switch 2", release: "October 14, 2026", source: "Nintendo.com, Konami topic", status: "Confirmed" },
          { platform: "PC (Steam)", release: "October 14, 2026", source: "Steam AppID 4231820, Konami topic", status: "Confirmed" },
          { platform: "Xbox Series X|S", release: "October 14, 2026", source: "Xbox Store, Konami topic", status: "Confirmed" },
        ],
      },
      {
        id: "region-window",
        type: "prose",
        heading: "Region window and timezone notes",
        body:
          "Castlevania Belmont's Curse launches as a worldwide window on October 14, 2026. The Konami topic and the four storefronts list October 14 as the canonical date; storefront locale pages reflect their own regional timezone for unlocks, but the calendar date itself is shared across all five platform families. For US players, the date is October 14, 2026 in local time on each platform.",
      },
      {
        id: "preorder-window",
        type: "prose",
        heading: "Preorder window pointer",
        body:
          "Preorder windows are open now on PS5, Nintendo Switch, Nintendo Switch 2, and Xbox Series X|S. The Steam entry is available for wishlist and is not a pre-purchase storefront in the same sense; the store page lists October 14, 2026 as the release date. Preorder bonuses and physical-copy notes are tracked on the preorder page.",
        links: [
          { label: "Preorder bonuses and physical copy", href: "/preorder" },
        ],
      },
      {
        id: "countdown",
        type: "callout",
        tone: "caution",
        title: "Countdown to launch",
        body: "As of 2026-09-26, the launch is 18 days out. Any third-party blog claiming a December 2026 or 2027 slip is not supported by the Konami topic or any of the four storefronts and should be treated as unconfirmed.",
      },
    ],
    faqIds: ["cbc-release-when", "cbc-platforms-which"],
    relatedPageIds: ["platforms", "preorder", "steam-availability"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-26",
  },
  {
    id: "steam-availability",
    translationKey: "steam-availability",
    locale: "en-US",
    routeKind: "fixed",
    slug: "steam",
    url: "/steam",
    pageType: "release",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Castlevania Belmont's Curse Steam — AppID 4231820, Deck, Wishlist",
    seoTitle:
      "Castlevania Belmont's Curse Steam | AppID 4231820, Deck, Wishlist",
    metaDescription:
      "Castlevania Belmont's Curse Steam page is the official PC storefront with AppID 4231820, Steam Deck support, wishlist open, and release date October 14, 2026.",
    summary:
      "Steam page status for Castlevania Belmont's Curse — AppID 4231820, Steam Deck compatibility, wishlist.",
    hero: {
      eyebrow: "Steam",
      subtitle: "Official PC store entry for Castlevania Belmont's Curse — AppID 4231820.",
      ctas: [
        { label: "PC system requirements", href: "/system-requirements" },
        { label: "Price per platform", href: "/price" },
      ],
    },
    quickAnswer:
      "Castlevania Belmont's Curse Steam page lists AppID 4231820 with an October 14, 2026 release date. Steam Deck is part of the Steam target and wishlist is open. The Steam page is the canonical source for the PC system requirements block, the supported languages list, and launch updates.",
    keyFacts: [
      { label: "AppID", value: "4231820" },
      { label: "Release date", value: "October 14, 2026" },
      { label: "Steam Deck", value: "Supported" },
      { label: "Wishlist", value: "Open" },
    ],
    modules: [
      {
        id: "store-link",
        type: "callout",
        tone: "tip",
        title: "Official Steam link",
        body: "https://store.steampowered.com/app/4231820 — Konami's press topic mirrors the October 14, 2026 release date.",
      },
      {
        id: "appid",
        type: "prose",
        heading: "AppID 4231820",
        body:
          "The AppID is the only public Steam identifier needed to reach the listing, so any third-party redirect or shortened URL should be checked against the AppID before being used as a primary link. The store page itself is the source of truth for the launch date, the supported languages block, and the system requirements table.",
      },
      {
        id: "deck",
        type: "prose",
        heading: "Steam Deck compatibility",
        body:
          "Steam Deck is part of the Steam target thanks to the AppID 4231820 listing. The Steam store entry treats the game as a Steam Deck-verified or Steam Deck-playable title based on the storefront's compatibility marker; the canonical reference for the exact marker is the Steam store page itself.",
      },
      {
        id: "wishlist",
        type: "prose",
        heading: "Wishlist status",
        body:
          "Wishlist is open on Steam as of 2026-09-26. Steam does not use a pre-purchase reservation model in the same way console storefronts do, so wishlist is the right pre-launch signal for PC players who want a notification when the game unlocks on October 14, 2026.",
      },
      {
        id: "region",
        type: "prose",
        heading: "Regional availability",
        body:
          "The Steam entry lists October 14, 2026 as the global release date, with regional availability matching the storefront's locale. US players see the standard US Steam store entry; regional Steam stores carry the same launch date unless the storefront itself lists an alternative, which the Konami topic does not support as of 2026-09-26.",
      },
    ],
    faqIds: ["cbc-steam-appid"],
    relatedPageIds: ["release-status", "system-requirements", "price"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-26",
  },
  {
    id: "platforms",
    translationKey: "platforms",
    locale: "en-US",
    routeKind: "fixed",
    slug: "platforms",
    url: "/platforms",
    pageType: "release",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Castlevania Belmont's Curse Platforms — PS5, Switch, Switch 2, PC, Xbox",
    seoTitle:
      "Castlevania Belmont's Curse Platforms | PS5, Switch, Switch 2, PC, Xbox",
    metaDescription:
      "Castlevania Belmont's Curse platforms — confirmed on PS5, Nintendo Switch, Switch 2, PC via Steam (AppID 4231820), and Xbox Series X|S, launching worldwide Oct 14, 2026.",
    summary:
      "Confirmed platforms for Castlevania Belmont's Curse — five-platform launch window on October 14, 2026.",
    hero: {
      eyebrow: "Platforms",
      subtitle: "Five-platform launch — PS5, Switch, Switch 2, PC (Steam), Xbox Series X|S.",
      ctas: [
        { label: "Preorder", href: "/preorder" },
        { label: "Editions", href: "/editions" },
      ],
    },
    quickAnswer:
      "Castlevania Belmont's Curse platforms are confirmed across five families: PS5, Nintendo Switch, Nintendo Switch 2, PC via Steam (AppID 4231820), and Xbox Series X|S. The October 14, 2026 launch window applies to all five, matching the Konami EN press topic and the four storefronts.",
    keyFacts: [
      { label: "Platforms", value: "PS5, Switch, Switch 2, PC (Steam), Xbox Series X|S" },
      { label: "Launch window", value: "October 14, 2026" },
      { label: "Steam Deck", value: "Supported" },
    ],
    modules: [
      {
        id: "platforms-confirmed",
        type: "data-table",
        heading: "Confirmed platforms",
        columns: [
          { key: "platform", label: "Platform" },
          { key: "listing", label: "Listing" },
          { key: "release", label: "Release date" },
          { key: "tier", label: "Tier" },
        ],
        rows: [
          { platform: "PS5", listing: "PlayStation Store", release: "October 14, 2026", tier: "Current-gen console" },
          { platform: "Nintendo Switch", listing: "Nintendo.com US", release: "October 14, 2026", tier: "Hybrid console (original)" },
          { platform: "Nintendo Switch 2", listing: "Nintendo.com US", release: "October 14, 2026", tier: "Hybrid console (next gen)" },
          { platform: "PC (Steam)", listing: "Steam AppID 4231820", release: "October 14, 2026", tier: "PC, Steam Deck supported" },
          { platform: "Xbox Series X|S", listing: "Xbox Store", release: "October 14, 2026", tier: "Current-gen console" },
        ],
      },
      {
        id: "switch-timing",
        type: "prose",
        heading: "Switch and Switch 2 timing",
        body:
          "The Switch and Switch 2 listings both list October 14, 2026 as the release date on Nintendo.com. There is no announced staggered launch between the two consoles, so players on either Switch family get the game on the same calendar day. Switch 2 owners get the game through Nintendo.com alongside Switch owners.",
      },
      {
        id: "ps-xbox-timing",
        type: "prose",
        heading: "PS5 and Xbox timing",
        body:
          "The PS5 entry on the PlayStation Store lists October 14, 2026. The Xbox Store entry for Xbox Series X|S lists the same date. There is no announced PS5 Pro or Xbox Series X-only performance target; current-gen consoles are the supported tier.",
      },
      {
        id: "pc-steam",
        type: "prose",
        heading: "PC, Steam, and Steam Deck",
        body:
          "The PC release lives on Steam with AppID 4231820. The Steam store page lists October 14, 2026 as the release date and is the canonical reference for the Steam target. Steam Deck is supported as part of the Steam target thanks to the store entry.",
        links: [{ label: "Steam AppID 4231820", href: "/steam" }],
      },
      {
        id: "confirmed-vs-unannounced",
        type: "callout",
        tone: "caution",
        title: "Confirmed vs unannounced",
        body: "Not announced as of 2026-09-26: PC Game Pass availability, cloud-streaming availability, Stadia-class services, PS5 Pro or Xbox Series X-only performance modes, and any post-launch platform additions.",
      },
    ],
    faqIds: ["cbc-platforms-which"],
    relatedPageIds: ["release-status", "preorder", "editions", "steam-availability"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-26",
  },
  {
    id: "editions",
    translationKey: "editions",
    locale: "en-US",
    routeKind: "fixed",
    slug: "editions",
    url: "/editions",
    pageType: "wiki",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Castlevania Belmont's Curse Editions Explained",
    seoTitle:
      "Castlevania Belmont's Curse Editions | Standard, Midnight, Collector's, Steelbook",
    metaDescription:
      "Castlevania Belmont's Curse editions: Standard, Midnight, Collector's, and Steelbook physical release, with region and retailer notes as of 2026-09-26.",
    summary:
      "Editions ladder for Castlevania Belmont's Curse — Standard, Midnight, Collector's, Steelbook.",
    hero: {
      eyebrow: "Editions",
      subtitle: "Four SKUs at launch — Standard, Midnight, Collector's, and Steelbook physical.",
      ctas: [
        { label: "Preorder bonuses", href: "/preorder" },
        { label: "Price per platform", href: "/price" },
      ],
    },
    quickAnswer:
      "Castlevania Belmont's Curse editions include four SKUs at the 2026 launch window: a standard release, a Midnight Edition, a Collector's Edition, and a Steelbook physical variant. The standard edition is the base game across all five confirmed platforms. The Midnight and Collector's Editions add physical collectibles and bonus themes per the Konami EN press topic.",
    keyFacts: [
      { label: "Standard", value: "Base game, all five platforms" },
      { label: "Midnight Edition", value: "Physical, bonus themes confirmed" },
      { label: "Collector's Edition", value: "Physical, collectible items" },
      { label: "Steelbook", value: "Physical case variant" },
    ],
    modules: [
      {
        id: "standard",
        type: "prose",
        heading: "Standard edition",
        body:
          "The standard edition covers the base game on PlayStation 5, Xbox Series, Nintendo Switch, Nintendo Switch 2, and PC. It is the default SKU on the Steam store page, the Nintendo eShop listing, the PlayStation Store entry, and the Xbox Store entry, and it carries no announced bonus content beyond the launch game itself.",
      },
      {
        id: "midnight",
        type: "prose",
        heading: "Midnight Edition",
        body:
          "The Midnight Edition is announced in the Konami EN press topic as a limited physical edition with collectible items specific to the Belmont lineage. Konami describes bonus themes for the Midnight Edition in the topic, but the full itemized contents — figurine dimensions, art-book size, soundtrack specifics — are not itemized publicly. Treat the Midnight Edition as a premium bundle without assuming which concrete items are inside until the retailer page lists them.",
      },
      {
        id: "collectors",
        type: "prose",
        heading: "Collector's Edition",
        body:
          "The Collector's Edition is the top-tier bundle for Belmont's Curse and is announced in the Konami topic alongside the Midnight Edition. Konami frames the Collector's Edition as a physical edition with collectible items intended for franchise collectors, but the full contents list is not itemized in the public Konami statement as of 2026-09-26. Specific items beyond the existence of a physical edition should be confirmed at the retailer of choice before purchase.",
      },
      {
        id: "steelbook",
        type: "prose",
        heading: "Steelbook variant",
        body:
          "A Steelbook variant for Belmont's Curse is part of the announced physical-edition roster for the 2026 launch. The Steelbook is typically a premium-case alternative to the standard plastic case, and Konami lists it alongside the Midnight and Collector's Editions in the topic. Steelbook-specific contents beyond the case itself are not itemized publicly as of 2026-09-26.",
      },
      {
        id: "region-retailer",
        type: "prose",
        heading: "Region and retailer notes",
        body:
          "Edition availability often varies by region. The Konami topic confirms the existence of the Midnight, Collector's, and Steelbook variants globally, but retailer-specific stocking varies by country and storefront. North American, European, and Japanese retailers will typically list their own bundle contents once allocations are confirmed.",
        links: [
          { label: "Preorder bonuses and physical copy", href: "/preorder" },
          { label: "Price per platform", href: "/price" },
        ],
      },
      {
        id: "confirmed-vs-unannounced",
        type: "callout",
        tone: "caution",
        title: "What is confirmed vs unannounced",
        body: "Confirmed: standard, Midnight, Collector's, and Steelbook editions exist per the Konami EN press topic; Midnight Edition includes bonus themes. Unannounced as of 2026-09-26: full contents of Midnight, Collector's, and Steelbook editions beyond the case; per-region retailer allocations.",
      },
    ],
    faqIds: ["cbc-editions-which"],
    relatedPageIds: ["price", "preorder", "platforms"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-26",
  },
  {
    id: "price",
    translationKey: "price",
    locale: "en-US",
    routeKind: "fixed",
    slug: "price",
    url: "/price",
    pageType: "release",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Castlevania Belmont's Curse Price Per Platform",
    seoTitle:
      "Castlevania Belmont's Curse Price | Launch Ladder Per Platform",
    metaDescription:
      "Castlevania Belmont's Curse price per platform is not announced as of 2026-09-26. Here's how the launch ladder works and where to verify the final price per store.",
    summary:
      "Price ladder page for Castlevania Belmont's Curse — not yet announced per platform.",
    hero: {
      eyebrow: "Price",
      subtitle: "Standard, Midnight, Collector's, Steelbook — MSRPs not announced as of 2026-09-26.",
      ctas: [
        { label: "Editions", href: "/editions" },
        { label: "Preorder", href: "/preorder" },
      ],
    },
    quickAnswer:
      "Castlevania Belmont's Curse price per platform is not announced as of 2026-09-26. The Steam store page, Nintendo eShop, PlayStation Store, and Xbox Store all list the title without a finalized price chip. Konami's EN press topic confirms the 2026 release window and multi-platform launch without publishing MSRPs.",
    keyFacts: [
      { label: "Standard price", value: "Not announced" },
      { label: "Midnight price", value: "Not announced" },
      { label: "Collector's price", value: "Not announced" },
      { label: "Steam listing", value: "Wishlist-only" },
    ],
    modules: [
      {
        id: "current-status",
        type: "data-table",
        heading: "Current price status by storefront",
        columns: [
          { key: "platform", label: "Platform" },
          { key: "storefront", label: "Storefront" },
          { key: "status", label: "Price status as of 2026-09-26" },
        ],
        rows: [
          { platform: "PC", storefront: "Steam", status: "Not announced (wishlist only)" },
          { platform: "PlayStation 5", storefront: "PlayStation Store", status: "Not announced" },
          { platform: "Xbox Series", storefront: "Xbox Store", status: "Not announced" },
          { platform: "Nintendo Switch", storefront: "Nintendo eShop", status: "Not announced" },
          { platform: "Nintendo Switch 2", storefront: "Nintendo eShop", status: "Not announced" },
        ],
      },
      {
        id: "why-not-final",
        type: "prose",
        heading: "Why the price is not final",
        body:
          "Konami historically prices flagship Castlevania platformers in the standard $59.99 / €59.99 / ¥7,700 tier at launch, but Belmont's Curse has not published MSRPs on any storefront as of 2026-09-26. The Konami EN press topic announces the launch and the platform roster without attaching a price tag, and Gematsu's 2026-07-17 platform summary does the same.",
      },
      {
        id: "edition-ladder",
        type: "prose",
        heading: "Edition price ladder context",
        body:
          "Editions shape the price ladder for any platform release. The standard edition is the base SKU, and the Midnight, Collector's, and Steelbook editions add a physical-bundle premium. Konami confirms all four editions in the topic but does not publish per-edition pricing in the topic itself.",
        links: [{ label: "Editions", href: "/editions" }],
      },
      {
        id: "currency-region",
        type: "prose",
        heading: "Currency and region notes",
        body:
          "Final prices will be published in each storefront's regional currency: USD on the US Nintendo, PlayStation, and Xbox storefronts, EUR on the European Nintendo and Xbox storefronts, GBP in the UK, JPY on the Japanese storefront, and CAD/AUD on their respective stores. Steam typically displays the store's auto-detected currency with the user's tax settings.",
      },
      {
        id: "verify",
        type: "prose",
        heading: "Where to verify the final price",
        body:
          "The authoritative sources are the Steam, Nintendo, PlayStation, and Xbox storefronts themselves once MSRPs are published, plus the editions page for edition-level scope and the preorder guide for retailer-specific pricing on physical copies.",
        links: [{ label: "Platforms", href: "/platforms" }],
      },
    ],
    faqIds: ["cbc-price-status"],
    relatedPageIds: ["editions", "preorder", "platforms"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-26",
  },
  {
    id: "preorder",
    translationKey: "preorder",
    locale: "en-US",
    routeKind: "fixed",
    slug: "preorder",
    url: "/preorder",
    pageType: "release",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Castlevania Belmont's Curse Preorder Guide",
    seoTitle:
      "Castlevania Belmont's Curse Preorder | Bonuses, Physical, Steelbook",
    metaDescription:
      "Castlevania Belmont's Curse preorder info: physical vs digital, Steelbook preorder, confirmed editions, and what bonuses are public as of 2026-09-26.",
    summary:
      "Preorder status page — wishlist-only on Steam, no storefront preorders opened publicly.",
    hero: {
      eyebrow: "Preorder",
      subtitle: "Storefront preorders not yet open; Steam wishlist-only as of 2026-09-26.",
      ctas: [
        { label: "Editions", href: "/editions" },
        { label: "Price per platform", href: "/price" },
      ],
    },
    quickAnswer:
      "Castlevania Belmont's Curse preorder channel will run through the Steam, Nintendo, PlayStation, and Xbox storefronts once Konami opens them, alongside physical retailer preorders for the Midnight, Collector's, and Steelbook editions. As of 2026-09-26, Steam is wishlist-only and physical retailer bonus rosters are not public. The Konami EN press topic confirms the Midnight bonus themes; full preorder bonus contents are not itemized yet.",
    keyFacts: [
      { label: "Digital preorders", value: "Not open as of 2026-09-26" },
      { label: "Steam status", value: "Wishlist-only" },
      { label: "Confirmed bonus", value: "Midnight Edition bonus themes" },
    ],
    modules: [
      {
        id: "step-by-step",
        type: "steps",
        heading: "Preorder step by step",
        items: [
          { title: "Pick a platform", body: "PS5, Switch, Switch 2, Xbox Series, or PC (Steam)." },
          { title: "Pick an edition", body: "Standard, Midnight, Collector's, or Steelbook physical." },
          { title: "Pick a retailer", body: "Use the storefront or a physical retailer carrying the edition." },
          { title: "Confirm bonus roster", body: "Midnight bonus themes are confirmed; Collector's and Steelbook contents are not yet itemized publicly." },
        ],
      },
      {
        id: "confirmed-bonuses",
        type: "prose",
        heading: "Confirmed preorder bonuses",
        body:
          "The only preorder bonus specifically named in the Konami EN press topic is the Midnight Edition's bonus themes. Any other physical-bundle bonus — such as art prints, soundtracks, figurines, or digital in-game items tied to a specific retailer — is not itemized publicly as of 2026-09-26. Treat any extra bonus roster circulating outside the Konami topic as unverified until the retailer pages go live.",
      },
      {
        id: "physical-vs-digital",
        type: "prose",
        heading: "Physical vs digital",
        body:
          "The confirmed platform list supports both physical and digital SKUs. Physical copies of the standard edition are expected on Switch, Switch 2, PS5, and Xbox Series, with physical Midnight, Collector's, and Steelbook editions available through major retailers. Digital SKUs mirror those editions on each storefront.",
      },
      {
        id: "bonus-roster",
        type: "data-table",
        heading: "Bonus roster status",
        columns: [
          { key: "edition", label: "Edition" },
          { key: "bonuses", label: "Confirmed bonuses" },
          { key: "status", label: "Status as of 2026-09-26" },
        ],
        rows: [
          { edition: "Standard", bonuses: "Base game only", status: "Confirmed" },
          { edition: "Midnight", bonuses: "Bonus themes", status: "Confirmed; full contents not itemized" },
          { edition: "Collector's", bonuses: "Physical edition with collectible items", status: "Full contents not itemized" },
          { edition: "Steelbook", bonuses: "Physical case variant", status: "Steelbook-only bonus contents not itemized" },
        ],
      },
    ],
    faqIds: ["cbc-preorder-when"],
    relatedPageIds: ["platforms", "editions", "price", "release-status"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-26",
  },
  {
    id: "demo",
    translationKey: "demo",
    locale: "en-US",
    routeKind: "fixed",
    slug: "demo",
    url: "/demo",
    pageType: "wiki",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Castlevania Belmont's Curse Demo Status",
    seoTitle:
      "Castlevania Belmont's Curse Demo | Availability and Contents",
    metaDescription:
      "Castlevania Belmont's Curse demo: not announced as of 2026-09-26. Konami and Evil Empire have not confirmed a demo build for Belmont's Curse on any platform.",
    summary:
      "Demo status page — no public demo, beta, or timed trial announced as of 2026-09-26.",
    hero: {
      eyebrow: "Demo",
      subtitle: "No public demo, beta, or timed trial has been announced.",
      ctas: [
        { label: "Release window", href: "/release" },
        { label: "Platforms", href: "/platforms" },
      ],
    },
    quickAnswer:
      "Castlevania Belmont's Curse demo: not announced as of 2026-09-26. Konami has not confirmed a demo build; Steam, Nintendo eShop, PlayStation Store, and Xbox Store all list the game without a demo download. The same goes for a timed trial or platform-specific early-access window.",
    keyFacts: [
      { label: "Demo status", value: "Not announced" },
      { label: "Timed trial", value: "Not announced" },
      { label: "Beta waves", value: "Not announced" },
    ],
    modules: [
      {
        id: "current-status",
        type: "prose",
        heading: "Current status",
        body:
          "No public demo, timed trial, or platform-specific early-access build has been announced for Belmont's Curse as of 2026-09-26. The Konami EN press topic confirms a 2026 release window and the multi-platform launch, but the topic is silent on demos, beta waves, or festival builds.",
      },
      {
        id: "why-useful",
        type: "prose",
        heading: "Why a demo would be useful",
        body:
          "Demonstrating a difficult gothic platformer in a short build is a common way to teach players the new card-and-combat loop before launch. GameSpot's mechanic preview explains how Belmont's Curse turns tough bosses into powerful Arcanatarot allies, while games.gg previews the same tarot-card ally system and the boss-fight structure.",
      },
      {
        id: "platforms",
        type: "prose",
        heading: "Which platforms a demo would cover",
        body:
          "If a demo surfaces, it would most likely match the confirmed platform list: PlayStation 5, Xbox Series, Nintendo Switch, Nintendo Switch 2, and PC. The Switch and Switch 2 hardware divergence is the most relevant variable, because the original Switch has to run the same gothic-platforming combat at a lower frame profile.",
      },
      {
        id: "timing",
        type: "prose",
        heading: "When demo news could land",
        body:
          "Konami's launch-window cadence has historically placed demo or trial announcements roughly two to four weeks ahead of release for flagship platformers. With a 2026 launch window already public, any demo would most plausibly surface during a major gaming showcase or a Konami Direct segment in the weeks ahead of release.",
        links: [{ label: "Release window", href: "/release" }],
      },
    ],
    faqIds: ["cbc-demo-status"],
    relatedPageIds: ["release-status", "platforms"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-26",
  },
  {
    id: "system-requirements",
    translationKey: "system-requirements",
    locale: "en-US",
    routeKind: "fixed",
    slug: "system-requirements",
    url: "/system-requirements",
    pageType: "wiki",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Castlevania Belmont's Curse System Requirements and Steam Specs",
    seoTitle:
      "Castlevania Belmont's Curse PC Specs | Steam System Requirements",
    metaDescription:
      "Castlevania Belmont's Curse system requirements are not fully published yet. Steam AppID 4231820 is the authority; full PC specs arrive closer to launch.",
    summary:
      "PC system requirements — Steam AppID 4231820 is the canonical source; spec block not yet published.",
    hero: {
      eyebrow: "PC specs",
      subtitle: "Steam is the source of record — full spec block not yet published.",
      ctas: [
        { label: "Steam AppID 4231820", href: "/steam" },
      ],
    },
    quickAnswer:
      "Castlevania Belmont's Curse system requirements are not fully published as of 2026-09-26. The Steam AppID 4231820 store page is the authority for PC specs and currently shows the title in wishlist status ahead of the Oct 14, 2026 launch. Detailed minimum and recommended blocks typically land in the weeks before release.",
    keyFacts: [
      { label: "Spec source", value: "Steam AppID 4231820" },
      { label: "Spec block", value: "Not published" },
      { label: "Steam Deck", value: "Compatibility pending Valve certification" },
    ],
    modules: [
      {
        id: "steam-spec",
        type: "prose",
        heading: "Steam is the authority for PC specs",
        body:
          "Steam is the source of record for PC system requirements. Konami and developer Evil Empire typically publish the full minimum and recommended block on the store page itself, not on press topics or third-party listings. The store URL https://store.steampowered.com/app/4231820 is the canonical reference: the page lists genres, features, languages and the spec block side-by-side.",
      },
      {
        id: "what-block-covers",
        type: "prose",
        heading: "What the spec block usually covers",
        body:
          "When the publisher adds the system requirements section on Steam, players can expect four families of detail: operating system and service pack level, CPU model and clock floor, GPU model and VRAM, and system RAM plus storage footprint. Each line lists both the minimum tier needed to boot the title and a recommended tier tuned for stable frame rates at the target resolution.",
      },
      {
        id: "hardware-planning",
        type: "prose",
        heading: "Hardware planning in the meantime",
        body:
          "A standard gaming PC from the last several years is likely to clear the recommended bar for a 2.5D Konami platformer; older office hardware should still meet the minimum tier for the title's lower-resolution options. Steam Deck owners can generally expect a Verified or Playable rating once the game is in reviewers' hands.",
      },
      {
        id: "recheck",
        type: "prose",
        heading: "When to recheck the spec block",
        body:
          "A practical rhythm is to check the Steam AppID 4231820 page at three milestones: when pre-orders go live on the storefront, when the launch trailer drops in the final pre-release push, and the day before release.",
      },
    ],
    faqIds: ["cbc-system-reqs-status"],
    relatedPageIds: ["steam-availability"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-26",
  },
  {
    id: "languages",
    translationKey: "languages",
    locale: "en-US",
    routeKind: "fixed",
    slug: "languages",
    url: "/languages",
    pageType: "wiki",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Castlevania Belmont's Curse Languages and Localization",
    seoTitle:
      "Castlevania Belmont's Curse Languages | Interface and Audio",
    metaDescription:
      "Castlevania Belmont's Curse languages: English plus Konami EU press topics in French, Italian, German, and Spanish. Japanese audio follows franchise convention.",
    summary:
      "Interface and audio languages — English confirmed, EU press topics confirm FR/IT/DE/ES.",
    hero: {
      eyebrow: "Languages",
      subtitle: "English interface confirmed; EU press topics cover FR, IT, DE, ES.",
      ctas: [
        { label: "Platforms", href: "/platforms" },
      ],
    },
    quickAnswer:
      "Castlevania Belmont's Curse languages: full list not yet detailed publicly. The Steam AppID 4231820 page lists English as the interface language, while Konami's regional press topics confirm French, Italian, German, and Spanish coverage. Japanese audio follows franchise convention and is widely expected at launch.",
    keyFacts: [
      { label: "Interface languages", value: "English confirmed; FR/IT/DE/ES via EU topics" },
      { label: "Audio languages", value: "English confirmed" },
      { label: "Japanese audio", value: "Widely expected, not formally listed" },
    ],
    modules: [
      {
        id: "steam-store",
        type: "prose",
        heading: "Languages on the Steam store",
        body:
          "Steam AppID 4231820 is the authoritative list for interface localization at launch. At the research date the store page shows English as the primary interface language, with the rest of the language block still being filled in ahead of the Oct 14, 2026 launch. Konami typically updates the Steam language block in the same window as the system requirements block.",
      },
      {
        id: "audio-languages",
        type: "prose",
        heading: "Audio languages confirmed for the launch region",
        body:
          "Audio localization for the 2026 reboot is confirmed in English via the Konami EN press topic and the Nintendo.com US entry. Konami's EU regional press topics on the same announcement day are published in French, Italian, German and Spanish, which is a clear signal that the publisher is supporting press and marketing in those languages.",
      },
      {
        id: "konami-eu-topics",
        type: "prose",
        heading: "Why Konami EU press topics matter",
        body:
          "Konami publishes its launch announcements through region-specific press topics in addition to the global EN-US topic. The EU topic family for the 2026 reboot includes the Italian page at https://www.konami.com/games/eu/it/topics/18998/, the Spanish page at https://www.konami.com/games/eu/es/topics/19000/, and the German and French counterparts in the same topic family.",
      },
      {
        id: "region-note",
        type: "prose",
        heading: "Region note for North American stores",
        body:
          "The Nintendo.com US entry, the PlayStation Store US entry and the Xbox Store US entry all carry the same English-first interface baseline. Each storefront will independently update its own language block when the publisher submits final values, so a player who buys the game on Switch in the US region will see English text by default.",
      },
    ],
    faqIds: ["cbc-languages-supported"],
    relatedPageIds: ["platforms"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-26",
  },
  {
    id: "age-rating",
    translationKey: "age-rating",
    locale: "en-US",
    routeKind: "fixed",
    slug: "age-rating",
    url: "/age-rating",
    pageType: "release",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Castlevania Belmont's Curse Age Rating Status",
    seoTitle:
      "Castlevania Belmont's Curse Age Rating | ESRB, PEGI, CERO, USK",
    metaDescription:
      "Castlevania Belmont's Curse age ratings from ESRB, PEGI, CERO, and USK are not published as of 2026-09-26. Here's what is known and what to check closer to launch.",
    summary:
      "Age rating status — ESRB, PEGI, CERO, USK not yet published.",
    hero: {
      eyebrow: "Age rating",
      subtitle: "ESRB, PEGI, CERO, USK classifications not yet published.",
      ctas: [
        { label: "Platforms", href: "/platforms" },
      ],
    },
    quickAnswer:
      "Castlevania Belmont's Curse age rating from ESRB, PEGI, CERO, and USK has not been published as of 2026-09-26. The Konami EN press topic, Steam store page, Nintendo eShop, PlayStation Store, and Xbox Store list the game without a final classification. Ratings are typically submitted weeks or months before launch.",
    keyFacts: [
      { label: "ESRB", value: "Not announced" },
      { label: "PEGI", value: "Not announced" },
      { label: "CERO", value: "Not announced" },
      { label: "USK", value: "Not announced" },
    ],
    modules: [
      {
        id: "not-published",
        type: "prose",
        heading: "Age rating not yet published",
        body:
          "ESRB, PEGI, CERO, and USK each receive publisher submissions weeks or months ahead of launch and then run their own classification review on gameplay, language, and content descriptors. The Konami EN press topic and the four storefronts currently list Belmont's Curse for the 2026 launch window without attaching a classification.",
      },
      {
        id: "region-board",
        type: "data-table",
        heading: "Expected rating status by region",
        columns: [
          { key: "region", label: "Region" },
          { key: "board", label: "Board" },
          { key: "status", label: "Status as of 2026-09-26" },
        ],
        rows: [
          { region: "North America", board: "ESRB", status: "Not announced" },
          { region: "Europe", board: "PEGI", status: "Not announced" },
          { region: "Japan", board: "CERO", status: "Not announced" },
          { region: "Germany", board: "USK", status: "Not announced" },
        ],
      },
      {
        id: "content-descriptors",
        type: "prose",
        heading: "Content descriptors to watch",
        body:
          "Even without a final classification, the franchise's gothic-platformer framing and the Arcanatarot boss-combat system shape which descriptors are plausible. GameSpot's mechanic preview and games.gg's tarot-card preview both describe blood, fantasy violence, and supernatural themes consistent with prior Castlevania ratings.",
      },
      {
        id: "verify",
        type: "prose",
        heading: "Where to verify the final rating",
        body:
          "The authoritative sources are the ESRB, PEGI, CERO, and USK databases themselves, plus the ratings displayed inside each storefront after submission. The Konami topic and the Steam, Nintendo, PlayStation, and Xbox store pages will begin displaying the badge automatically once the publisher submission is approved.",
      },
    ],
    faqIds: ["cbc-age-rating-status"],
    relatedPageIds: ["platforms"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-26",
  },
  {
    id: "characters",
    translationKey: "characters",
    locale: "en-US",
    routeKind: "fixed",
    slug: "characters",
    url: "/characters",
    pageType: "wiki",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Castlevania Belmont's Curse Characters and Cast",
    seoTitle:
      "Castlevania Belmont's Curse Characters | Rose, Sonia Belmont and Cast",
    metaDescription:
      "Castlevania Belmont's Curse characters include playable Belmont sisters Rose and Sonia. Trevor Belmont is a legacy franchise reference, not in the current cast.",
    summary:
      "Playable characters — Rose Belmont and Sonia Belmont are the protagonist pair for 2026.",
    hero: {
      eyebrow: "Characters",
      subtitle: "Rose Belmont leads, Sonia Belmont supports — Trevor is a franchise reference.",
      ctas: [
        { label: "Story & Belmont Clan", href: "/story" },
        { label: "Bosses", href: "/bosses" },
      ],
    },
    quickAnswer:
      "Castlevania Belmont's Curse characters include two confirmed playable Belmont sisters: Rose Belmont and Sonia Belmont. Trevor Belmont is a recurring franchise reference from earlier Castlevania titles, not in the current-game roster. The Konami EN topic and GameSpot preview name Rose and Sonia as the protagonist pair, with Trevor referenced only as Belmont Clan legacy.",
    keyFacts: [
      { label: "Lead", value: "Rose Belmont" },
      { label: "Second playable", value: "Sonia Belmont" },
      { label: "Legacy reference", value: "Trevor Belmont (1989, 2003)" },
    ],
    modules: [
      {
        id: "rose",
        type: "prose",
        heading: "Rose Belmont — protagonist",
        body:
          "Rose Belmont is the lead playable character for the 2026 reboot and the central figure of the new Belmont Clan arc. Konami's EN press topic introduces the protagonist pair through Rose's perspective, and the GameSpot preview frames her gameplay around Arcana Tarot boss absorption, where defeated bosses grant tarot cards, traversal abilities and Blessings upgrade trees.",
      },
      {
        id: "sonia",
        type: "prose",
        heading: "Sonia Belmont — second playable sister",
        body:
          "Sonia Belmont is the second playable character and Rose's sister in the new Belmont Clan arc. The games.gg Arcanatarot preview and the Konami EN topic both name Sonia alongside Rose as the protagonist pair. Sonia's combat style diverges from Rose's in pre-release coverage: she carries a different melee baseline and a different sub-weapon set, with the same Arcana Tarot system layered on top.",
      },
      {
        id: "trevor",
        type: "prose",
        heading: "Trevor Belmont — legacy franchise reference",
        body:
          "Trevor Belmont is a recurring Belmont Clan reference in the 2026 reboot's narrative framing, but he is not a playable character for the launch title. Trevor Belmont's canonical debut is Castlevania: Dracula's Curse (1989, NES), where he leads the original trilogy's Belmont arc; he returned as an older figure in Castlevania: Lament of Innocence (2003, PlayStation 2) and recurs across the Netflix Castlevania animated series.",
      },
      {
        id: "companions",
        type: "prose",
        heading: "Companions, NPCs, and confirmed allies",
        body:
          "Beyond Rose and Sonia, the 2026 reboot's companion and NPC roster is not publicly enumerated at the research date. Pre-release previews reference defeated bosses as future allies via the Arcana Tarot absorption mechanic, but those boss-characters are absorbed into the player's card pool rather than joining the player's party as walk-around NPCs.",
      },
    ],
    faqIds: ["cbc-characters-who", "cbc-trevor-not-playable"],
    relatedPageIds: ["story", "bosses", "gameplay-loop"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-26",
  },
  {
    id: "bosses",
    translationKey: "bosses",
    locale: "en-US",
    routeKind: "fixed",
    slug: "bosses",
    url: "/bosses",
    pageType: "wiki",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Castlevania Belmont's Curse Bosses and the Arcanatarot Mechanic",
    seoTitle:
      "Castlevania Belmont's Curse Bosses | Arcanatarot Mechanic",
    metaDescription:
      "Preview coverage of Castlevania Belmont's Curse bosses — The Fallen, Corrupted Joan of Arc, and Medusa — and how each grants an Arcanatarot ally.",
    summary:
      "Bosses preview — three named encounters that absorb into Arcanatarot cards with combat spells and traversal abilities.",
    hero: {
      eyebrow: "Bosses",
      subtitle: "Defeated bosses become Arcanatarot allies with spells and traversal.",
      ctas: [
        { label: "Gameplay loop", href: "/gameplay" },
        { label: "Weapons", href: "/weapons" },
      ],
    },
    quickAnswer:
      "Castlevania Belmont's Curse bosses preview three named encounters: The Fallen, Corrupted Joan of Arc, and Medusa. Each defeated boss is absorbed into an Arcanatarot card that becomes a permanent ally, granting a unique spell and traversal ability tied to the enemy that dropped it. The mechanic turns the toughest fights into the strongest party members.",
    keyFacts: [
      { label: "The Fallen", value: "First named preview boss" },
      { label: "Corrupted Joan of Arc", value: "Broadsword + holy halo encounter" },
      { label: "Medusa", value: "Perseus-style sword + shield encounter" },
    ],
    modules: [
      {
        id: "confirmed-bosses",
        type: "data-table",
        heading: "Confirmed preview bosses",
        columns: [
          { key: "boss", label: "Boss" },
          { key: "source", label: "Source coverage" },
          { key: "date", label: "Date in coverage" },
        ],
        rows: [
          { boss: "The Fallen", source: "GameSpot mechanic preview, games.gg tarot preview", date: "2026-07-17" },
          { boss: "Corrupted Joan of Arc", source: "games.gg tarot preview, GameSpot preview", date: "2026-07-17" },
          { boss: "Medusa", source: "games.gg tarot preview", date: "2026-07-17" },
        ],
      },
      {
        id: "mechanic",
        type: "prose",
        heading: "How the Arcanatarot absorption mechanic works",
        body:
          "The signature mechanic in Castlevania Belmont's Curse is that bosses are not just roadblocks — they become party members. After Rose Belmont topples a boss, the enemy soul is captured into an Arcanatarot card, and that card unlocks both a combat spell and a traversal ability tied to the source creature.",
        links: [{ label: "Gameplay loop", href: "/gameplay" }],
      },
      {
        id: "spell-vs-traversal",
        type: "prose",
        heading: "Granted spell and traversal per card",
        body:
          "Each absorbed boss unlocks two things: a signature combat spell usable in combat, scaling with Rose's progress; and a traversal ability that doubles as map access. GameSpot's preview highlights that boss-ally spells behave more like summoned assists than generic projectiles.",
      },
      {
        id: "story-role",
        type: "prose",
        heading: "Story role of the named bosses",
        body:
          "The Fallen introduces the new Belmonts to the curse driving the campaign. Corrupted Joan of Arc signals that historical and mythological figures are being twisted into enemies, framing the Belmont sisters' mission as a rescue-and-restoration arc rather than pure extermination. Medusa reinforces the gothic-monster-mythos identity the franchise has carried since 1986.",
      },
    ],
    faqIds: ["cbc-bosses-list"],
    relatedPageIds: ["gameplay-loop", "characters", "weapons"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-26",
  },
  {
    id: "weapons",
    translationKey: "weapons",
    locale: "en-US",
    routeKind: "fixed",
    slug: "weapons",
    url: "/weapons",
    pageType: "wiki",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Castlevania Belmont's Curse Weapons, Whips and Arcanatarot Spells",
    seoTitle:
      "Castlevania Belmont's Curse Weapons | Whip, Sword, Spells",
    metaDescription:
      "Castlevania Belmont's Curse weapons: the Arcanatarot Whip, Perseus sword and shield, Joan of Arc broadsword and halo, plus Arcanatarot spells.",
    summary:
      "Weapons preview — Arcanatarot Whip plus boss-tied melee loadouts and Arcanatarot spells.",
    hero: {
      eyebrow: "Weapons",
      subtitle: "Arcanatarot Whip plus boss-tied sword + shield / broadsword + halo loadouts.",
      ctas: [
        { label: "Bosses", href: "/bosses" },
        { label: "Gameplay loop", href: "/gameplay" },
      ],
    },
    quickAnswer:
      "Castlevania Belmont's Curse weapons preview centers on the Arcanatarot Whip, the signature melee weapon tied to the new tarot card system. Preview coverage also names two boss-tied melee loadouts: a Perseus-style sword and shield for the Medusa encounter, and a broadsword with holy light halo for Corrupted Joan of Arc.",
    keyFacts: [
      { label: "Primary melee", value: "Arcanatarot Whip" },
      { label: "Medusa loadout", value: "Perseus-style sword + shield" },
      { label: "Joan loadout", value: "Broadsword + holy light halo" },
      { label: "Sub-weapons", value: "Not announced" },
    ],
    modules: [
      {
        id: "whip-melee",
        type: "data-table",
        heading: "Whip and melee weapons preview",
        columns: [
          { key: "weapon", label: "Weapon" },
          { key: "type", label: "Type" },
          { key: "role", label: "Role preview" },
          { key: "source", label: "Source coverage" },
        ],
        rows: [
          { weapon: "Arcanatarot Whip", type: "Primary melee", role: "Default Belmont weapon, reacts to absorbed tarot cards", source: "Konami EN topic, GameSpot preview" },
          { weapon: "Perseus-style sword", type: "Boss-tied melee", role: "Mirrors Perseus loadout, paired with shield for Medusa", source: "games.gg Arcanatarot preview" },
          { weapon: "Perseus-style shield", type: "Boss-tied off-hand", role: "Blocks and supports the Perseus sword during Medusa", source: "games.gg Arcanatarot preview" },
          { weapon: "Holy broadsword", type: "Boss-tied melee", role: "Corrupted Joan of Arc-specific weapon", source: "games.gg Arcanatarot preview" },
          { weapon: "Holy light halo", type: "Boss-tied aura", role: "Defensive ring around Rose during Joan fight", source: "games.gg Arcanatarot preview" },
        ],
      },
      {
        id: "sub-weapons",
        type: "data-table",
        heading: "Sub-weapons status",
        columns: [
          { key: "slot", label: "Slot" },
          { key: "status", label: "Confirmed before launch" },
          { key: "source", label: "Source" },
        ],
        rows: [
          { slot: "Primary melee", status: "Arcanatarot Whip", source: "Konami EN topic, GameSpot preview" },
          { slot: "Sub-weapons", status: "Not announced as of 2026-09-26", source: "—" },
          { slot: "Boss-tied melee loadouts", status: "Perseus sword + shield (Medusa), broadsword + halo (Joan)", source: "games.gg Arcanatarot preview" },
        ],
      },
      {
        id: "spells",
        type: "prose",
        heading: "Spells tied to Arcanatarot cards",
        body:
          "Spells in Castlevania Belmont's Curse are bound to the same Arcanatarot cards that summon boss allies. Each absorbed boss unlocks one combat spell and one traversal ability, as described in the GameSpot and games.gg previews. Spell names per card beyond the broad mechanic description are not announced as of 2026-09-26.",
      },
    ],
    faqIds: ["cbc-weapons-whip"],
    relatedPageIds: ["bosses", "gameplay-loop"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-26",
  },
  {
    id: "story",
    translationKey: "story",
    locale: "en-US",
    routeKind: "fixed",
    slug: "story",
    url: "/story",
    pageType: "wiki",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Castlevania Belmont's Curse Story and Belmont Clan",
    seoTitle:
      "Castlevania Belmont's Curse Story | Belmont Clan Arc, Dracula",
    metaDescription:
      "Castlevania Belmont's Curse story centers on the Belmont Clan arc. Rose Belmont anchors the new chapter, with Dracula and dragon motif callbacks to the franchise.",
    summary:
      "Story page — Belmont Clan arc, Rose Belmont, Dracula and dragon motif callbacks.",
    hero: {
      eyebrow: "Story",
      subtitle: "Belmont Clan arc for the 2026 reboot — gothic-platforming roots.",
      ctas: [
        { label: "Characters", href: "/characters" },
        { label: "Gameplay loop", href: "/gameplay" },
      ],
    },
    quickAnswer:
      "Castlevania Belmont's Curse story centers on the Belmont Clan arc for the 2026 reboot. Rose Belmont anchors the new chapter, with recurring Dracula and dragon motif callbacks to earlier franchise entries. The Konami topic, GameSpot preview and the bozokmedia gothic-platforming piece agree on a Belmont-led narrative.",
    keyFacts: [
      { label: "Lead", value: "Rose Belmont" },
      { label: "Arc", value: "Belmont Clan (1986–2025 lineage)" },
      { label: "Late-game anchor", value: "Dracula confrontation" },
      { label: "Motif", value: "Dragon — gothic architecture and boss design" },
    ],
    modules: [
      {
        id: "setting-tone",
        type: "prose",
        heading: "Setting and tone",
        body:
          "The 2026 reboot sits in a gothic European castle environment shaped by the same vampire-hunting approach that has run through the franchise since Castlevania (1986, NES). Konami's EN press topic frames the new entry as a return to the series' gothic-platforming roots, with the Belmont sisters working through a sprawling castle environment layered with metroidvania exploration and Arcana Tarot boss absorption.",
      },
      {
        id: "belmont-arc",
        type: "prose",
        heading: "The Belmont Clan arc for the new generation",
        body:
          "The Belmont Clan arc is the spine of the 2026 reboot. Rose and Sonia Belmont are descendants of the same family line that produced Trevor Belmont in Castlevania: Dracula's Curse (1989, NES), Richter Belmont in Rondo of Blood (1993) and Symphony of the Night (1997), and the broader Belmont lineage in Castlevania: Lament of Innocence (2003, PS2) and Curse of Darkness (2005, PS2).",
      },
      {
        id: "rose-role",
        type: "prose",
        heading: "Rose's role and narrative stakes",
        body:
          "Rose Belmont anchors the new chapter. Her role is the lead playable protagonist and the face of the marketing campaign, with her combat style built around the Arcana Tarot boss absorption loop. Within the narrative, Rose carries the burden of restarting the Belmont vampire-hunting tradition after a generational gap.",
      },
      {
        id: "dracula-dragon",
        type: "prose",
        heading: "Dracula and dragon motif callbacks",
        body:
          "Dracula is the franchise's signature antagonist, and the dragon motif has recurred across the series since the original NES trilogy. The 2026 reboot carries both forward as recurring narrative callbacks rather than as fresh invention: the Dracula confrontation anchors the late-game arc, and the dragon motif appears in the castle's gothic architecture and boss design.",
      },
    ],
    faqIds: ["cbc-story-arc", "cbc-trevor-not-playable"],
    relatedPageIds: ["characters", "bosses", "gameplay-loop"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-26",
  },
  {
    id: "gameplay-loop",
    translationKey: "gameplay-loop",
    locale: "en-US",
    routeKind: "fixed",
    slug: "gameplay",
    url: "/gameplay",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Castlevania Belmont's Curse Gameplay Loop and Arcanatarot Cards",
    seoTitle:
      "Castlevania Belmont's Curse Gameplay Loop | Arcanatarot Cards",
    metaDescription:
      "Castlevania Belmont's Curse gameplay: explore, fight, absorb bosses into Arcanatarot cards, and unlock traversal. Built from pre-launch preview coverage.",
    summary:
      "Gameplay loop — explore, fight, absorb, grow. Pre-release preview scope only.",
    hero: {
      eyebrow: "Gameplay",
      subtitle: "Four-step loop: explore, fight, absorb, grow.",
      ctas: [
        { label: "Walkthrough", href: "/walkthrough" },
        { label: "Bosses", href: "/bosses" },
      ],
    },
    quickAnswer:
      "Castlevania Belmont's Curse gameplay runs on a four-step loop built around the Arcanatarot card system: explore a gothic region, fight the boss blocking the next area, absorb that boss into an Arcanatarot card, and use the card's spell and traversal ability to reach the next region.",
    keyFacts: [
      { label: "Loop", value: "Explore → fight → absorb → grow" },
      { label: "Primary weapon", value: "Arcanatarot Whip" },
      { label: "Traversal gating", value: "Arcanatarot card abilities" },
    ],
    modules: [
      {
        id: "four-step-loop",
        type: "steps",
        heading: "The four-step loop",
        items: [
          { title: "Explore", body: "The Belmont sisters move through a gothic region packed with branching paths. The exploration layer is metroidvania-shaped with locked passages and vertical layers." },
          { title: "Fight", body: "Each region gates itself behind a named boss encounter. The first three previewed bosses are The Fallen, Corrupted Joan of Arc, and Medusa." },
          { title: "Absorb", body: "When a boss is defeated, the enemy soul is captured into an Arcanatarot card. The card becomes a permanent entry in Rose's kit." },
          { title: "Grow", body: "The new card unlocks two things: a combat spell that scales with progress, and a traversal ability that opens the next branch of the map." },
        ],
      },
      {
        id: "combat-whip",
        type: "prose",
        heading: "Combat and the Arcanatarot Whip",
        body:
          "Combat in the 2026 Castlevania reboot centers on the Arcanatarot Whip, with boss-tied melee loadouts layered on top for specific encounters. The whip is Rose's default melee weapon and the only weapon previewed as a permanent part of her kit. Preview coverage suggests the whip's appearance or behavior changes when an Arcanatarot card is bound to Rose.",
        links: [{ label: "Weapons", href: "/weapons" }],
      },
      {
        id: "boss-tied-loadouts",
        type: "comparison",
        heading: "Boss-tied melee loadouts",
        options: [
          {
            name: "Medusa — Perseus-style sword + shield",
            summary: "Mirrors the Perseus loadout from Greek myth; appears in the Medusa fight.",
            bestFor: "Defensive play, blocking the gaze",
          },
          {
            name: "Corrupted Joan of Arc — broadsword + holy halo",
            summary: "Broadsword paired with a defensive holy halo aura around Rose.",
            bestFor: "Offensive play against corrupted knight",
          },
        ],
      },
      {
        id: "cards-progression",
        type: "prose",
        heading: "Arcanatarot cards as progression currency",
        body:
          "The Arcanatarot card is the unit of progression. There is no separate currency, XP track, or skill tree previewed in the coverage. The card is the reward, the spell, and the traversal unlock — all three in one slot.",
      },
    ],
    faqIds: ["cbc-arcanatarot-how"],
    relatedPageIds: ["walkthrough", "bosses", "characters"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-26",
  },
  {
    id: "walkthrough",
    translationKey: "walkthrough",
    locale: "en-US",
    routeKind: "fixed",
    slug: "walkthrough",
    url: "/walkthrough",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Castlevania Belmont's Curse Walkthrough and Progression Order",
    seoTitle:
      "Castlevania Belmont's Curse Walkthrough | Preview Progression Order",
    metaDescription:
      "Castlevania Belmont's Curse walkthrough: pre-release preview coverage with The Fallen, Corrupted Joan of Arc, and Medusa as preview checkpoints, dated scope.",
    summary:
      "Walkthrough — pre-release preview scope only with The Fallen, Corrupted Joan of Arc, Medusa as preview checkpoints.",
    hero: {
      eyebrow: "Walkthrough",
      subtitle: "Preview-checkpoint order: The Fallen → Joan of Arc → Medusa.",
      ctas: [
        { label: "Gameplay loop", href: "/gameplay" },
        { label: "Bosses", href: "/bosses" },
      ],
    },
    quickAnswer:
      "Castlevania Belmont's Curse walkthrough is built on pre-release preview coverage only. As of 2026-09-26, three bosses are named as preview checkpoints: The Fallen, Corrupted Joan of Arc, and Medusa. Each absorbed boss unlocks an Arcanatarot card that gates the next region.",
    keyFacts: [
      { label: "Preview scope", value: "Three preview bosses" },
      { label: "Order", value: "The Fallen → Joan of Arc → Medusa" },
      { label: "Released-game walkthrough", value: "Available after Oct 14, 2026" },
    ],
    modules: [
      {
        id: "opening",
        type: "prose",
        heading: "Opening chapter",
        body:
          "Pre-release hands-on coverage from the games.gg Arcanatarot breakdown places The Fallen at the start of the campaign. The opening chapter is where the Belmont sisters establish themselves, the Arcanatarot mechanic is introduced, and the first absorption gate locks the rest of the run.",
      },
      {
        id: "mid-game",
        type: "prose",
        heading: "Mid-game boss order",
        body:
          "The mid-game is the most documented section of the preview coverage, because it carries both the Perseus-style and the broadsword-with-halo boss-tied loadouts. The Fallen functions as the absorption tutorial: defeating the boss and pulling its soul into an Arcanatarot card is the move that opens the rest of the map. Preview coverage then moves on to Corrupted Joan of Arc, themed around the holy light halo and the broadsword boss-tied loadout.",
      },
      {
        id: "late-game",
        type: "prose",
        heading: "Late-game and beyond",
        body:
          "Medusa is the third and final preview-checkpoint boss named in pre-release coverage. games.gg frames the encounter around the Perseus-style sword and shield, which fits the mythological framing of the fight. After Medusa, the full late-game roster, hidden bosses, secret regions, multiple endings, and any post-game content are not announced as of 2026-09-26.",
      },
      {
        id: "scope",
        type: "callout",
        tone: "caution",
        title: "Pre-release scope note",
        body: "This walkthrough is built from coverage dated 2026-07-17 and rechecked on 2026-09-26. A full release-game walkthrough will only be possible after the Oct 14, 2026 launch.",
      },
    ],
    faqIds: ["cbc-bosses-list"],
    relatedPageIds: ["gameplay-loop", "bosses"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-26",
  },
  {
    id: "music",
    translationKey: "music",
    locale: "en-US",
    routeKind: "fixed",
    slug: "music",
    url: "/music",
    pageType: "wiki",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Castlevania Belmont's Curse Music and Soundtrack",
    seoTitle:
      "Castlevania Belmont's Curse Music | Bloody Tears and Themes",
    metaDescription:
      "Castlevania Belmont's Curse music uses a Bloody Tears reprise; 2026 composer credit is not announced as of 2026-09-26. Original 1989 theme was by Kinuyo Yamashita.",
    summary:
      "Music page — Bloody Tears reprise, Kinuyo Yamashita original credit, 2026 composer TBA.",
    hero: {
      eyebrow: "Music",
      subtitle: "Bloody Tears reprise confirmed; new soundtrack composer not yet announced.",
      ctas: [
        { label: "Identity overview", href: "/about" },
      ],
    },
    quickAnswer:
      "Castlevania Belmont's Curse music features a Bloody Tears reprise from the announcement and Switch trailer, anchored in the franchise's signature leitmotif. Kinuyo Yamashita composed the original 1989 Bloody Tears theme; the 2026 soundtrack's composer credit is not announced as of 2026-09-26.",
    keyFacts: [
      { label: "Bloody Tears reprise", value: "Confirmed" },
      { label: "Original composer", value: "Kinuyo Yamashita (1987)" },
      { label: "2026 composer", value: "Not announced" },
    ],
    modules: [
      {
        id: "bloody-tears",
        type: "prose",
        heading: "Bloody Tears reprise",
        body:
          "Bloody Tears is one of the franchise's most recognizable themes, originally composed by Kinuyo Yamashita for Castlevania II: Simon's Quest (1987, NES) and reused as a leitmotif across nearly every subsequent entry. The announcement and Switch trailer for the 2026 reboot includes a Bloody Tears reprise that signals the new chapter's return to the series' gothic-platforming roots.",
      },
      {
        id: "original-composer",
        type: "prose",
        heading: "Composer credit for the original Bloody Tears",
        body:
          "The original Bloody Tears theme was composed by Kinuyo Yamashita as part of her work on Castlevania II: Simon's Quest (1987, NES), where she and Michiru Yamada jointly composed the score. Yamashita's credit has been confirmed across multiple sources and is widely cited as franchise legacy.",
      },
      {
        id: "new-composer",
        type: "prose",
        heading: "Composer credit for the 2026 soundtrack",
        body:
          "The composer credit for the 2026 reboot's new score has not been announced as of 2026-09-26. The Konami EN press topic frames the new chapter through the Belmont Clan arc and the gothic-platforming approach but does not name a composer.",
      },
      {
        id: "new-themes",
        type: "prose",
        heading: "New themes expected for the Belmont sisters",
        body:
          "Beyond the Bloody Tears reprise, the 2026 reboot is expected to feature new themes tailored to Rose and Sonia Belmont's arcs. The franchise tradition is to pair each protagonist with a signature theme that recurs across key story moments.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: "2026-09-26",
  },
  {
    id: "reviews-and-reception",
    translationKey: "reviews-and-reception",
    locale: "en-US",
    routeKind: "fixed",
    slug: "reviews",
    url: "/reviews",
    pageType: "wiki",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "Castlevania Belmont's Curse Reviews and Early Reception",
    seoTitle:
      "Castlevania Belmont's Curse Reviews | Early Reception and Previews",
    metaDescription:
      "Castlevania Belmont's Curse reviews summary: as of 2026-09-26 only preview coverage exists from GameSpot, Gematsu, games.gg, bozokmedia. Reviews arrive at launch.",
    summary:
      "Reception page — pre-launch preview coverage only, no scored reviews yet.",
    hero: {
      eyebrow: "Reviews",
      subtitle: "Pre-launch preview coverage from GameSpot, Gematsu, games.gg, bozokmedia.",
      ctas: [
        { label: "Identity overview", href: "/about" },
        { label: "Gameplay loop", href: "/gameplay" },
      ],
    },
    quickAnswer:
      "Castlevania Belmont's Curse reviews do not exist as of 2026-09-26, eight days before the Oct 14, 2026 launch. What exists is pre-launch preview coverage from GameSpot, Gematsu, games.gg, and bozokmedia, dated 2026-07-17. Full reviews with score quotes will appear at or after launch.",
    keyFacts: [
      { label: "Scored reviews", value: "None published" },
      { label: "Preview outlets", value: "GameSpot, Gematsu, games.gg, bozokmedia" },
      { label: "Preview date", value: "2026-07-17" },
    ],
    modules: [
      {
        id: "outlet-summary",
        type: "data-table",
        heading: "Outlet coverage summary",
        columns: [
          { key: "outlet", label: "Outlet" },
          { key: "type", label: "Type" },
          { key: "angle", label: "Coverage angle" },
          { key: "date", label: "Coverage date" },
        ],
        rows: [
          { outlet: "GameSpot", type: "media/interview", angle: "Mechanic preview — boss-to-ally system", date: "2026-07-17" },
          { outlet: "Gematsu", type: "media/interview", angle: "Platform and release summary", date: "2026-07-17" },
          { outlet: "games.gg", type: "media/interview", angle: "Arcanatarot card breakdown and exploration layer", date: "2026-07-17" },
          { outlet: "bozokmedia", type: "media/interview", angle: "Gothic-platforming retrospective and Belmont DNA", date: "2026-07-17" },
        ],
      },
      {
        id: "gamespot",
        type: "prose",
        heading: "GameSpot preview excerpt",
        body:
          "GameSpot's preview is the cleanest read on the new mechanic. The headline frames the system as turning tough bosses into powerful friends, and the body of the article describes the absorption loop as the heart of the campaign. GameSpot does not assign a score, but the preview language is positive and emphasizes how the boss-to-ally system differentiates Castlevania Belmont's Curse from prior Castlevania titles.",
      },
      {
        id: "gematsu",
        type: "prose",
        heading: "Gematsu summary excerpt",
        body:
          "Gematsu's coverage reads as a launch-info summary rather than a hands-on preview. It catalogs the platform list (PS5, Xbox Series, Switch, Switch 2, and PC) and the Oct 14, 2026 release date, then summarizes the announcement without offering an opinion on quality.",
      },
      {
        id: "gamesgg-bozok",
        type: "prose",
        heading: "games.gg and bozokmedia excerpts",
        body:
          "games.gg goes deepest on the Arcanatarot mechanic. The article names The Fallen, Corrupted Joan of Arc, and Medusa as preview bosses, describes each absorbed boss as both a combat ally and a traversal unlock, and ties the cards to a Major Arcana-style identity system. bozokmedia frames the game as a masterful return to gothic-platforming roots, positioning Belmont's Curse against the broader Castlevania lineage.",
      },
    ],
    faqIds: ["cbc-reviews-status"],
    relatedPageIds: ["about", "gameplay-loop"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-26",
  },
  {
    id: "guides",
    translationKey: "guides",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides",
    url: "/guides",
    pageType: "guides",
    presentation: { shell: "hub", variant: "card-grid" },
    h1: "Castlevania Belmont's Curse Guides Hub",
    seoTitle:
      "Castlevania Belmont's Curse Guides | Gameplay and Walkthrough",
    metaDescription:
      "Guides hub for Castlevania Belmont's Curse — gameplay loop, walkthrough, weapons reference, and Arcana Tarot card progression.",
    summary:
      "Index of gameplay guides and reference material for Castlevania Belmont's Curse.",
    hero: {
      eyebrow: "Guides",
      subtitle: "Gameplay, walkthrough, weapons and progression references.",
      ctas: [
        { label: "Gameplay loop", href: "/gameplay" },
        { label: "Walkthrough", href: "/walkthrough" },
      ],
    },
    quickAnswer:
      "The Guides hub links the gameplay loop, walkthrough, and weapons reference for Castlevania Belmont's Curse. Use it as the starting point for progression order and combat reference.",
    keyFacts: [
      { label: "Guide depth", value: "Pre-release preview scope" },
      { label: "Source", value: "GameSpot, games.gg, Konami topic" },
    ],
    modules: [
      {
        id: "guides-grid",
        type: "entity-grid",
        heading: "Browse guides",
        items: [
          { title: "Gameplay loop", summary: "Explore, fight, absorb, grow.", href: "/gameplay" },
          { title: "Walkthrough", summary: "Preview-scope progression order.", href: "/walkthrough" },
          { title: "Weapons", summary: "Whip, sword, and shield loadouts.", href: "/weapons" },
          { title: "Bosses", summary: "Arcana Tarot absorption mechanic.", href: "/bosses" },
          { title: "Characters", summary: "Rose and Sonia Belmont.", href: "/characters" },
          { title: "Story", summary: "Belmont Clan arc for the reboot.", href: "/story" },
        ],
      },
    ],
    faqIds: ["cbc-arcanatarot-how"],
    relatedPageIds: ["about", "walkthrough"],
    schemaTypes: ["CollectionPage", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-26",
  },
  {
    id: "wiki",
    translationKey: "wiki",
    locale: "en-US",
    routeKind: "fixed",
    slug: "wiki",
    url: "/wiki",
    pageType: "wiki",
    presentation: { shell: "hub", variant: "card-grid" },
    h1: "Castlevania Belmont's Curse Wiki Hub",
    seoTitle:
      "Castlevania Belmont's Curse Wiki | Characters, Story and Reference",
    metaDescription:
      "Wiki hub for Castlevania Belmont's Curse — characters, story, weapons, music, and reference material.",
    summary:
      "Reference wiki hub for verified Castlevania Belmont's Curse facts.",
    hero: {
      eyebrow: "Wiki",
      subtitle: "Characters, story, weapons, music, and reference.",
      ctas: [
        { label: "Characters", href: "/characters" },
        { label: "Story", href: "/story" },
      ],
    },
    quickAnswer:
      "The Wiki hub links characters, story, weapons, music, and reviews reference for Castlevania Belmont's Curse. Use it for verified franchise facts and Belmont Clan reference.",
    keyFacts: [
      { label: "Fact source", value: "Konami topic + media coverage" },
      { label: "Update rule", value: "Verified before publication" },
    ],
    modules: [
      {
        id: "wiki-grid",
        type: "entity-grid",
        heading: "Browse the wiki",
        items: [
          { title: "Characters", summary: "Rose Belmont and Sonia Belmont.", href: "/characters" },
          { title: "Story", summary: "Belmont Clan arc for 2026.", href: "/story" },
          { title: "Bosses", summary: "Arcana Tarot preview bosses.", href: "/bosses" },
          { title: "Weapons", summary: "Whip, sword, shield, broadsword.", href: "/weapons" },
          { title: "Music", summary: "Bloody Tears reprise.", href: "/music" },
          { title: "Reviews", summary: "Preview outlets only.", href: "/reviews" },
        ],
      },
    ],
    faqIds: ["cbc-overview-what"],
    relatedPageIds: ["about", "characters"],
    schemaTypes: ["CollectionPage", "BreadcrumbList", "FAQPage"],
    sourceStatus: "official",
    lastReviewed: "2026-09-26",
  },
  {
    id: "faq",
    translationKey: "faq",
    locale: "en-US",
    routeKind: "fixed",
    slug: "faq",
    url: "/faq",
    pageType: "faq",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Castlevania Belmont's Curse FAQ",
    seoTitle:
      "Castlevania Belmont's Curse FAQ | Common Questions",
    metaDescription:
      "Frequently asked questions about Castlevania Belmont's Curse — release date, platforms, editions, characters, and gameplay mechanics.",
    summary:
      "Common questions about Castlevania Belmont's Curse release, platforms, characters, and mechanics.",
    hero: {
      eyebrow: "FAQ",
      subtitle: "Common questions about release, platforms, characters, and gameplay.",
      ctas: [
        { label: "Release info", href: "/release" },
        { label: "Platforms", href: "/platforms" },
      ],
    },
    quickAnswer:
      "The FAQ collects the most common questions about Castlevania Belmont's Curse release date, platforms, characters, and gameplay mechanics. Each answer is sourced from the Konami EN topic or the four storefronts.",
    keyFacts: [
      { label: "FAQ count", value: "18 entries" },
      { label: "Source", value: "Konami topic + storefronts" },
    ],
    modules: [
      {
        id: "faq-policy",
        type: "prose",
        heading: "FAQ scope and policy",
        body:
          "Answers are sourced from the Konami EN press topic (18995), Steam AppID 4231820, Nintendo.com US, PlayStation Store, Xbox Store, and preview coverage from GameSpot, Gematsu, games.gg, and bozokmedia. Unannounced facts are written as dated 'not announced' statements.",
      },
      {
        id: "faq-shortcut",
        type: "prose",
        heading: "Quick links",
        body:
          "Use the release date, platforms, and Arcana Tarot mechanic pages for the most common questions. The Characters and Story pages cover franchise questions.",
      },
    ],
    faqIds: [
      "cbc-overview-what",
      "cbc-release-when",
      "cbc-platforms-which",
      "cbc-arcanatarot-how",
      "cbc-characters-who",
      "cbc-steam-appid",
      "cbc-demo-status",
      "cbc-price-status",
      "cbc-preorder-when",
      "cbc-editions-which",
      "cbc-bosses-list",
      "cbc-weapons-whip",
      "cbc-story-arc",
      "cbc-languages-supported",
      "cbc-age-rating-status",
      "cbc-system-reqs-status",
      "cbc-reviews-status",
      "cbc-trevor-not-playable",
    ],
    relatedPageIds: ["about", "release-status", "platforms"],
    schemaTypes: ["FAQPage", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: "2026-09-26",
  },
];