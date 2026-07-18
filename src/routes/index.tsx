import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

import logo from "@/assets/logo-mark.png.asset.json";
import lamborghini from "@/assets/proj-1.png";
import cowboy from "@/assets/proj-2.png";
import nexoAsset from "@/assets/nexo-new.png.asset.json";
import novaAsset from "@/assets/nova-new.png.asset.json";
import davies from "@/assets/proj-4.png";
import ataaAsset from "@/assets/ataa.png.asset.json";
import movoAsset from "@/assets/movo.png.asset.json";
import zadnaAsset from "@/assets/zadna.png.asset.json";

const nexo = nexoAsset.url;
const nova = novaAsset.url;
const ataa = ataaAsset.url;
const movo = movoAsset.url;
const zadna = zadnaAsset.url;

export const Route = createFileRoute("/")({
  component: Home,
});

type Project = {
  n: string;
  name: string;
  tagline: string;
  year: string;
  discipline: string;
  location: string;
  image: string;
};

const projects: Project[] = [
  { n: "I",   name: "Lamborghini Fenomeno", tagline: "Launch site for a limited-edition 820 hp hybrid V12 hypercar, handcrafted in Sant'Agata.", year: "2025", discipline: "Brand · Web", location: "Sant'Agata Bolognese", image: lamborghini },
  { n: "II",  name: "Nova Intelligence",    tagline: "An agentic AI platform helping SAP teams modernize and operate complex systems up to five times faster.", year: "2025", discipline: "Identity · Web", location: "Berlin", image: nova },
  { n: "III", name: "Nexo",                 tagline: "An autonomous customer intelligence platform turning signals into role-based action plans.", year: "2025", discipline: "Product · Web", location: "Amsterdam", image: nexo },
  { n: "IV",  name: "Cowboy",               tagline: "A connected e-bike brand for city riders — adaptive motor, built-in GPS, theft protection.", year: "2024", discipline: "Brand · E-commerce", location: "Brussels", image: cowboy },
  { n: "V",   name: "Davies",               tagline: "An independent studio crafting bold brands and modern websites for founders.", year: "2024", discipline: "Portfolio · Web", location: "London", image: davies },
  { n: "VI",  name: "Ataa Platform",        tagline: "A specialized platform for providing Adhiyah (sacrificial) services inside and outside Egypt, with multiple safe options tailored to users' needs.", year: "2024", discipline: "Platform · Web", location: "Cairo", image: ataa },
  { n: "VII", name: "MOVO App",             tagline: "A mobility app helping riders navigate the city with live traffic, routing and multi-modal transport options.", year: "2024", discipline: "Product · Mobile", location: "London", image: movo },
  { n: "VIII",name: "Zadna",                tagline: "A halal restaurant app designed to help Muslim communities living abroad easily find trusted, certified Islamic food.", year: "2024", discipline: "Product · Mobile", location: "Global", image: zadna },
];

const services = [
  { n: "01", title: "Brand Identity",   body: "Logotypes, marks and complete visual systems." },
  { n: "02", title: "Web Design",       body: "Editorial, considered interfaces with intent." },
  { n: "03", title: "Web Development",  body: "Fast, modern, hand-built with care." },
  { n: "04", title: "Art Direction",    body: "Photography, typography and campaign direction." },
];

/* Technical archive utility classes */
const mono     = "font-mono text-[10px] uppercase tracking-[0.18em]";
const monoTiny = "font-mono text-[9px] uppercase tracking-[0.18em]";
const bd       = "border-cocoa-deep/25";

/* ---------------- Nav ---------------- */
function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#work",     label: "Work"     },
    { href: "#services", label: "Services" },
    { href: "#about",    label: "About"    },
    { href: "#contact",  label: "Contact"  },
  ];
  return (
    <header className={`flex border-b ${bd} ${mono} text-cocoa-deep`}>
      <a href="#top" className={`flex flex-1 items-center gap-2.5 border-r ${bd} px-5 py-4`}>
        <img src={logo.url} alt="Kemet Wsr" className="h-5 w-5 object-contain" />
        <span className="font-bold italic tracking-[0.18em]">Kemet Wsr</span>
        <span className="ml-2 text-cocoa/50 hidden sm:inline">A2E</span>
      </a>
      <nav className={`hidden md:flex border-r ${bd}`}>
        {links.map((l) => (
          <a key={l.href} href={l.href} className={`border-r ${bd} px-5 py-4 hover:bg-ivory transition-colors last:border-r-0`}>
            {l.label}
          </a>
        ))}
      </nav>
      <div className="hidden md:flex items-center gap-2 px-5 py-4">
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full rounded-full bg-cocoa-deep opacity-60 animate-ping" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cocoa-deep" />
        </span>
        <span>Available Q3</span>
      </div>
      <button className={`md:hidden px-5 py-4 border-l ${bd}`} onClick={() => setOpen(!open)} aria-label="Toggle menu">
        {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </button>
      {open && (
        <div className={`absolute left-0 right-0 top-full z-30 border-t ${bd} bg-parchment md:hidden`}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className={`block border-b ${bd} px-5 py-4 ${mono}`}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section id="top" className="grid grid-cols-1 md:grid-cols-2">
      {/* Left: narrative + specs */}
      <div className={`flex flex-col gap-8 border-b md:border-b-0 md:border-r ${bd} p-8 md:p-14`}>
        <span className={`${mono} text-cocoa/70`}>Independent Design Studio / MMXXVI / Unit 01</span>
        <h1 className="font-serif text-[44px] md:text-[80px] leading-[0.95] tracking-[-0.01em] text-cocoa-deep">
          Design that <span className="italic">outlives</span> the brief.
        </h1>
        <p className="max-w-md text-[15px] leading-[1.75] text-cocoa/80">
          Kemet Wsr is a small studio for founders who want their identity and product to feel considered, permanent, and unmistakably theirs.
        </p>

        {/* Spec Grid */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 border ${bd} bg-ivory`}>
          <SpecCell label="Region"  value="Cairo · Remote" />
          <SpecCell label="Founded" value="MMXXIV" />
          <SpecCell label="Focus"   value="Brand · Web" />
          <SpecCell label="Booking" value="Q3 · MMXXVI" last />
        </div>

        <div className="flex flex-wrap gap-4">
          <a href="#work" className={`px-6 py-3 bg-cocoa-deep text-ivory ${mono} font-bold hover:opacity-90 transition-opacity`}>
            View Selected Work
          </a>
          <a href="#contact" className={`px-6 py-3 border ${bd} ${mono} font-bold hover:bg-ivory transition-colors inline-flex items-center gap-2`}>
            Commission Studio <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      {/* Right: schematic panel */}
      <div className="relative bg-ivory p-8 md:p-14 flex flex-col items-center justify-center min-h-[420px] md:min-h-0">
        <div className={`absolute top-6 left-6 ${mono} text-cocoa/55`}>
          MK. IV — Isometric Schematic
        </div>

        <svg viewBox="0 0 400 400" fill="none" className="w-3/4 max-w-[360px] h-auto opacity-90">
          <rect x="80"  y="90"  width="240" height="220" stroke="currentColor" strokeWidth="1.5" className="text-cocoa-deep" />
          <rect x="100" y="110" width="200" height="130" stroke="currentColor" strokeWidth="1" strokeDasharray="4 3" className="text-cocoa-deep/60" />
          <circle cx="140" cy="275" r="10" stroke="currentColor" strokeWidth="1" className="text-cocoa-deep" />
          <circle cx="170" cy="275" r="10" stroke="currentColor" strokeWidth="1" className="text-cocoa-deep" />
          <rect x="220" y="265" width="80" height="20" stroke="currentColor" strokeWidth="1" className="text-cocoa-deep" />
          <path d="M320 150 H370" stroke="currentColor" strokeWidth="0.75" className="text-cocoa-deep/60" />
          <path d="M80  200 H30"  stroke="currentColor" strokeWidth="0.75" className="text-cocoa-deep/60" />
          <path d="M200 90  V40"  stroke="currentColor" strokeWidth="0.75" className="text-cocoa-deep/60" />
        </svg>

        <div className={`absolute top-[28%] right-6 ${monoTiny} border-l ${bd} pl-2 text-cocoa-deep`}>
          <span className="block font-bold">Display Panel</span>
          <span className="opacity-60">Editorial · 120hz</span>
        </div>
        <div className={`absolute bottom-[34%] left-6 ${monoTiny} border-r ${bd} pr-2 text-right text-cocoa-deep`}>
          <span className="block font-bold">Input Matrix</span>
          <span className="opacity-60">Handcrafted</span>
        </div>

        <div className={`absolute bottom-6 right-6 ${monoTiny} text-right leading-tight text-cocoa/45`}>
          Rev D / 2026.03<br />
          Parchment finish / cocoa ink
        </div>
      </div>
    </section>
  );
}

function SpecCell({ label, value, last }: { label: string; value: string; last?: boolean }) {
  return (
    <div className={`p-3 border-b lg:border-b-0 ${bd} ${last ? "" : `border-r ${bd}`}`}>
      <span className={`block ${monoTiny} text-cocoa/55 mb-1`}>{label}</span>
      <span className={`${mono} text-cocoa-deep`}>{value}</span>
    </div>
  );
}

/* ---------------- Work ---------------- */
function Work() {
  return (
    <section id="work" className={`border-t ${bd}`}>
      <div className={`grid grid-cols-12 border-b ${bd}`}>
        <div className={`col-span-12 md:col-span-3 border-r ${bd} p-6 ${mono} text-cocoa/60`}>
          Fig. 02 — Selected Work
        </div>
        <div className="col-span-12 md:col-span-6 p-6 md:p-8">
          <h2 className="font-serif text-[28px] md:text-[40px] leading-[1.05] text-cocoa-deep">
            Eight commissions — <span className="italic">MMXXIV → MMXXVI.</span>
          </h2>
        </div>
        <div className={`col-span-12 md:col-span-3 border-l ${bd} p-6 flex items-end justify-end ${mono} text-cocoa/60`}>
          08 / 08 units
        </div>
      </div>

      <ol className={`divide-y ${bd.replace("border-", "divide-")}`}>
        {projects.map((p) => (
          <ProjectRow key={p.name} project={p} />
        ))}
      </ol>
    </section>
  );
}

function ProjectRow({ project }: { project: Project }) {
  return (
    <li className="group grid grid-cols-12 items-stretch">
      <div className={`col-span-12 md:col-span-1 border-r ${bd} p-6 flex md:flex-col items-start gap-2`}>
        <span className={`${mono} text-cocoa/55`}>N°</span>
        <span className={`${mono} text-cocoa-deep`}>{project.n}</span>
      </div>
      <div className={`col-span-12 md:col-span-4 border-r ${bd} p-6 md:p-8 flex flex-col justify-between gap-6`}>
        <div>
          <span className={`${mono} text-cocoa/55`}>{project.year} · {project.discipline}</span>
          <h3 className="mt-3 font-serif text-[28px] md:text-[36px] leading-[1.05] text-cocoa-deep">
            {project.name}
          </h3>
          <p className="mt-4 text-[14px] leading-[1.75] text-cocoa/75 max-w-sm">
            {project.tagline}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <span className={`${mono} text-cocoa/55`}>{project.location}</span>
          <a href="#contact" className={`inline-flex items-center gap-2 border-b ${bd} pb-1 ${mono} text-cocoa-deep hover:border-cocoa-deep`}>
            View case <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
      <div className="col-span-12 md:col-span-7 bg-ivory overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.02]"
        />
      </div>
    </li>
  );
}

/* ---------------- Services ---------------- */
function Services() {
  return (
    <section id="services" className={`border-t ${bd} bg-ivory`}>
      <div className={`grid grid-cols-12 border-b ${bd}`}>
        <div className={`col-span-12 md:col-span-3 border-r ${bd} p-6 ${mono} text-cocoa/60`}>
          Fig. 03 — Practice
        </div>
        <div className="col-span-12 md:col-span-6 p-6 md:p-8">
          <h2 className="font-serif text-[28px] md:text-[40px] leading-[1.05] text-cocoa-deep">
            A small studio. <span className="italic">A wide toolkit.</span>
          </h2>
        </div>
        <div className={`col-span-12 md:col-span-3 border-l ${bd} p-6 flex items-end justify-end ${mono} text-cocoa/60`}>
          04 disciplines
        </div>
      </div>

      <ol className={`divide-y ${bd.replace("border-", "divide-")}`}>
        {services.map((s) => (
          <li key={s.title} className="group grid grid-cols-12 items-center hover:bg-parchment/60 transition-colors">
            <div className={`col-span-2 md:col-span-1 border-r ${bd} p-6 ${mono} text-cocoa/55`}>
              {s.n}
            </div>
            <h3 className={`col-span-10 md:col-span-5 border-r ${bd} p-6 font-serif text-[24px] md:text-[32px] leading-[1.05] text-cocoa-deep`}>
              {s.title}
            </h3>
            <p className={`col-span-12 md:col-span-5 border-t md:border-t-0 md:border-r ${bd} p-6 text-[14px] leading-[1.7] text-cocoa/75`}>
              {s.body}
            </p>
            <div className="col-span-12 md:col-span-1 p-6 flex justify-end">
              <ArrowUpRight className="h-4 w-4 text-cocoa/35 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cocoa-deep" />
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

/* ---------------- About / Designer's note ---------------- */
function About() {
  return (
    <section id="about" className={`border-t ${bd} flex flex-col lg:flex-row`}>
      <div className={`flex-1 p-8 md:p-14 border-b lg:border-b-0 lg:border-r ${bd}`}>
        <h4 className={`${mono} text-cocoa-deep border-b ${bd} pb-3 mb-6 w-fit`}>Studio Note</h4>
        <p className="font-serif italic text-[18px] md:text-[22px] leading-[1.55] text-cocoa-deep/85 max-w-xl">
          Named for the oldest builders — the ones who worked in stone and understood proportion, patience, permanence. We take on a small number of projects each year so every one gets the depth it deserves: strategy, identity, editorial art direction, and the site to hold it all. We aren't chasing trends. We're building work that still reads clearly in ten years.
        </p>
      </div>
      <div className="lg:w-[420px] bg-ivory">
        <table className={`w-full ${monoTiny} text-cocoa-deep`}>
          <tbody>
            <LedgerRow k="Stage"        v="Booking Q3 · MMXXVI" />
            <LedgerRow k="Practice"     v="Brand · Web" />
            <LedgerRow k="Founded"      v="MMXXIV / Cairo" />
            <LedgerRow k="Selected"     v="VIII commissions" />
            <LedgerRow k="Availability" v="94% nominal" last />
          </tbody>
        </table>
      </div>
    </section>
  );
}

function LedgerRow({ k, v, last }: { k: string; v: string; last?: boolean }) {
  return (
    <tr className={last ? "" : `border-b ${bd}`}>
      <td className={`p-4 font-bold bg-parchment/50 border-r ${bd}`}>{k}</td>
      <td className="p-4 text-right">{v}</td>
    </tr>
  );
}

/* ---------------- Contact ---------------- */
function Contact() {
  const [sent, setSent] = useState(false);
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`New project inquiry — ${data.get("name") || "friend"}`);
    const body = encodeURIComponent(String(data.get("message") || ""));
    window.location.href = `mailto:hello@kemetwsr.com?subject=${subject}&body=${body}`;
    setSent(true);
  }
  return (
    <section id="contact" className={`border-t ${bd} grid grid-cols-1 md:grid-cols-2`}>
      <div className={`p-8 md:p-14 border-b md:border-b-0 md:border-r ${bd}`}>
        <span className={`${mono} text-cocoa/60`}>Fig. 04 — Enquire</span>
        <h2 className="mt-6 font-serif text-[44px] md:text-[72px] leading-[0.98] text-cocoa-deep">
          Let's build <span className="italic">something lasting.</span>
        </h2>
        <p className="mt-8 max-w-md text-[15px] leading-[1.75] text-cocoa/75">
          Tell us a little about your project. We reply to every serious enquiry within two business days.
        </p>
        <a href="mailto:hello@kemetwsr.com" className="mt-10 inline-block font-serif italic text-[24px] md:text-[30px] text-cocoa-deep underline decoration-cocoa/30 underline-offset-[8px] hover:decoration-cocoa-deep">
          hello@kemetwsr.com
        </a>
      </div>

      <form onSubmit={onSubmit} className={`bg-ivory p-8 md:p-14 flex flex-col gap-8`}>
        <Field name="name"  label="Name"  placeholder="Your name" />
        <Field name="email" label="Email" type="email" placeholder="you@studio.com" />
        <div>
          <label className={`mb-3 block ${mono} text-cocoa/60`}>The project</label>
          <textarea
            name="message"
            required
            rows={4}
            placeholder="A few sentences about what you're building…"
            className={`w-full border ${bd} bg-parchment/40 px-4 py-3 text-[15px] text-cocoa-deep placeholder:text-cocoa/40 focus:border-cocoa-deep focus:outline-none`}
          />
        </div>
        <button
          type="submit"
          className={`inline-flex items-center justify-between px-6 py-4 bg-cocoa-deep text-ivory ${mono} font-bold hover:opacity-90 transition-opacity`}
        >
          {sent ? "Opening your mail…" : "Send Enquiry"}
          <ArrowUpRight className="h-4 w-4" />
        </button>
      </form>
    </section>
  );
}

function Field({ name, label, type = "text", placeholder }: { name: string; label: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className={`mb-3 block ${mono} text-cocoa/60`}>{label}</label>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className={`w-full border ${bd} bg-parchment/40 px-4 py-3 text-[15px] text-cocoa-deep placeholder:text-cocoa/40 focus:border-cocoa-deep focus:outline-none`}
      />
    </div>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className={`border-t ${bd} grid grid-cols-12 ${mono} text-cocoa-deep`}>
      <div className={`col-span-12 md:col-span-5 border-r ${bd} p-6 flex items-center gap-3`}>
        <img src={logo.url} alt="" className="h-5 w-5 object-contain" />
        <span className="font-bold italic tracking-[0.18em]">Kemet Wsr</span>
        <span className="text-cocoa/50">© MMXXVI</span>
      </div>
      <div className={`col-span-6 md:col-span-3 border-r ${bd} p-6`}>
        Handcrafted in the studio
      </div>
      <div className={`col-span-6 md:col-span-2 border-r ${bd} p-6 flex gap-4 text-cocoa/70`}>
        <a href="#" className="hover:text-cocoa-deep">IG</a>
        <a href="#" className="hover:text-cocoa-deep">LI</a>
        <a href="#" className="hover:text-cocoa-deep">TW</a>
      </div>
      <a href="mailto:hello@kemetwsr.com" className="col-span-12 md:col-span-2 p-6 text-right hover:bg-ivory transition-colors">
        hello@kemetwsr.com →
      </a>
    </footer>
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-parchment text-cocoa-deep p-3 md:p-6">
      <div className={`mx-auto max-w-[1360px] border ${bd} bg-parchment relative`}>
        <Nav />
        <main>
          <Hero />
          <Work />
          <Services />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}