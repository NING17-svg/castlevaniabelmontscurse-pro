import type { ThemeConfig } from "@/types/theme";

export const theme = {
  mode: "dark",
  tokens: {
    pageBg: "#0E111A",
    surface1: "#161A26",
    surface2: "#1C2230",
    surface3: "#222938",
    surfaceInverse: "#ECE2C9",
    textPrimary: "#ECE2C9",
    textMuted: "#9A9384",
    textInverse: "#0E111A",
    textOnAccentPrimary: "#0E111A",
    textLink: "#C9A24F",
    focusRing: "#C9A24F",
    line: "#2A2F3D",
    lineStrong: "#4A4F5D",
    accentPrimary: "#B8323D",
    accentSecondary: "#C9A24F",
    accentBright: "#C9A24F",
    statusConfirmed: "#3D8C5A",
    statusCaution: "#C9A24F",
    statusUnknown: "#6A6F7D",
  },
  typography: {
    headingFamily:
      '"Cormorant Garamond", "Playfair Display", Georgia, serif',
    bodyFamily:
      '"Inter", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    headingWeight: 800,
  },
  shape: {
    radius: "10px",
    borderWidth: "1px",
    shadow: "0 18px 50px rgba(0, 0, 0, 0.6)",
    hoverLift: "-2px",
  },
  density: "comfortable",
  background: { mode: "solid", overlay: 0, position: "center" },
  variants: {
    home: "media-hero",
    hub: "card-grid",
    content: "reading-right-rail",
    workspace: "panelled",
  },
  decoration: { motif: "lines", intensity: "low" },
} satisfies ThemeConfig;