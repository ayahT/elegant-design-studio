import logo from "@/assets/logo-mark.png";
import aiChat from "@/assets/ai-chat.png";
import lamborghini from "@/assets/proj-1.png";
import cowboy from "@/assets/proj-2.png";
import nexo from "@/assets/nexo-new.png";
import nova from "@/assets/nova-new.png";
import davies from "@/assets/proj-4.png";
import ataa from "@/assets/ataa-new.png";
import movo from "@/assets/movo.png";
import zadna from "@/assets/zadna.png";

export type SiteProject = {
  n: string;
  name: string;
  tagline: string;
  year: string;
  discipline: string;
  location: string;
  image: string;
  link?: string;
};

export type SiteContent = {
  brand: { name: string; short: string; logoUrl: string };
  hero: {
    eyebrow: string;
    headline: string;
    description: string;
    specs: { label: string; value: string }[];
    ctaPrimary: string;
    ctaSecondary: string;
    featuredLabel: string;
    featuredImageUrl: string;
    featuredAlt: string;
  };
  work: { heading: string; italic: string; count: string };
  designProjects: SiteProject[];
  developmentProjects: SiteProject[];
  services: { n: string; title: string; body: string; filter: "all" | "uiux" | "development" }[];
  about: {
    note: string;
  };
  contact: {
    heading: string;
    italic: string;
    body: string;
    email: string;
    submitLabel: string;
    bookingUrl: string;
    bookingLabel: string;
  };
  footer: {
    tagline: string;
    instagramUrl: string;
    linkedinUrl: string;
  };
  availability: string;
};

export const defaultSite: SiteContent = {
  brand: { name: "Kemet Wsr", short: "A2E", logoUrl: logo },
  hero: {
    eyebrow: "",
    headline: "We build the future of your online presence.",
    description:
      "Kemet Wsr is a small studio for founders who want their identity and product to feel considered, permanent, and unmistakably theirs.",
    specs: [
      { label: "Region", value: "Alexandria · Remote" },
      { label: "Founded", value: "2025" },
      { label: "Focus", value: "UI/UX · Web" },
    ],
    ctaPrimary: "Contact us",
    ctaSecondary: "View Selected Work",
    featuredLabel: "",
    featuredImageUrl: aiChat,
    featuredAlt: "Ancient Egypt AI assistant interface",
  },
  work: {
    heading: "Eight finished projects",
    italic: "since the beginning of 2026.",
    count: "8 projects",
  },
  designProjects: [
    { n: "I", name: "Ataa Platform", tagline: "A specialized platform for providing Adhiyah (sacrificial) services inside and outside Egypt, with multiple safe options tailored to users' needs.", year: "2024", discipline: "Platform · Web", location: "Cairo", image: ataa, link: "https://www.behance.net/gallery/247841697/_" },
    { n: "II", name: "MOVO App", tagline: "A halal restaurant app designed to help Muslim communities living abroad easily find trusted, certified Islamic food.", year: "2024", discipline: "Product · Mobile", location: "London", image: movo, link: "https://www.behance.net/gallery/248654627/MOVO-App" },
    { n: "III", name: "Zadna", tagline: "A halal restaurant app designed to help Muslim communities living abroad easily find trusted, certified Islamic food.", year: "2024", discipline: "Product · Mobile", location: "Germany", image: zadna, link: "https://www.behance.net/gallery/243174961/ZADNA" },
  ],
  developmentProjects: [
    { n: "IV", name: "Lamborghini Fenomeno", tagline: "Launch site for a limited-edition 820 hp hybrid V12 hypercar, handcrafted in Sant'Agata.", year: "2025", discipline: "Brand · Web", location: "Sant'Agata Bolognese", image: lamborghini, link: "https://object-forge-zone.vercel.app/" },
    { n: "V", name: "Nova Intelligence", tagline: "An agentic AI platform helping SAP teams modernize and operate complex systems up to five times faster.", year: "2025", discipline: "Identity · Web", location: "Berlin", image: nova, link: "https://impact-glow-lead-cs4dktwpf-yos-projects-a37281b6.vercel.app/" },
    { n: "VI", name: "Nexo", tagline: "An autonomous customer intelligence platform turning signals into role-based action plans.", year: "2025", discipline: "Product · Web", location: "Amsterdam", image: nexo, link: "https://nexo-style-web.vercel.app/" },
    { n: "VII", name: "Cowboy", tagline: "A connected e-bike brand for city riders — adaptive motor, built-in GPS, theft protection.", year: "2024", discipline: "Brand · E-commerce", location: "Brussels", image: cowboy, link: "https://hero-font-haven-4hm8bcvyv-yos-projects-a37281b6.vercel.app/" },
    { n: "VIII", name: "Davies", tagline: "An independent studio crafting bold brands and modern websites for founders.", year: "2024", discipline: "Portfolio · Web", location: "London", image: davies, link: "https://pixel-perfect-replica-0827.vercel.app/" },
  ],
  services: [
    { n: "00", title: "All", body: "The complete archive — every interface and build.", filter: "all" },
    { n: "01", title: "UI/UX", body: "Research, wireframes and interfaces shaped around real user behavior.", filter: "uiux" },
    { n: "02", title: "Web Development", body: "Fast, modern, hand-built sites and products with clean architecture.", filter: "development" },
  ],
  about: {
    note:
      "Named for the oldest builders — those who understood proportion, patience, and permanence. We take on a small number of projects each year so every one gets the depth it deserves. We aren't chasing trends. We're building work that still reads clearly in ten years.",
  },
  contact: {
    heading: "Let's build",
    italic: "something lasting.",
    body: "Tell us a little about your project. We reply to every serious enquiry within two business days.",
    email: "kemetwsr@gmail.com",
    submitLabel: "send a message",
    bookingUrl: "https://cal.com/kemetwsr-qc6vjw",
    bookingLabel: "Book a 30-min call",
  },
  footer: {
    tagline: "Kemetwsr © 2026",
    instagramUrl: "https://www.instagram.com/kemet.wsr/",
    linkedinUrl: "https://www.linkedin.com/company/kemet-wsr/",
  },
  availability: "Available",
};

export function mergeContent(input: unknown): SiteContent {
  if (!input || typeof input !== "object") return defaultSite;
  const src = input as Partial<SiteContent>;
  return {
    ...defaultSite,
    ...src,
    brand: { ...defaultSite.brand, ...(src.brand ?? {}) },
    hero: { ...defaultSite.hero, ...(src.hero ?? {}) },
    work: { ...defaultSite.work, ...(src.work ?? {}) },
    about: { ...defaultSite.about, ...(src.about ?? {}) },
    contact: { ...defaultSite.contact, ...(src.contact ?? {}) },
    footer: { ...defaultSite.footer, ...(src.footer ?? {}) },
    designProjects: Array.isArray(src.designProjects) ? src.designProjects : defaultSite.designProjects,
    developmentProjects: Array.isArray(src.developmentProjects) ? src.developmentProjects : defaultSite.developmentProjects,
    services: Array.isArray(src.services) ? src.services : defaultSite.services,
  };
}
