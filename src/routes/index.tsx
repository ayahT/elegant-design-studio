import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

import logo from "@/assets/logo.png.asset.json";
import lamborghini from "@/assets/lamborghini.png.asset.json";
import cowboy from "@/assets/cowboy.png.asset.json";
import nexo from "@/assets/nexo.png.asset.json";
import nova from "@/assets/nova.png.asset.json";
import davies from "@/assets/davies.png.asset.json";
import carcaring from "@/assets/carcaring.png.asset.json";
import bloom from "@/assets/bloom.png.asset.json";

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
  image: { url: string };
};

const projects: Project[] = [
  { n: "I",   name: "Lamborghini Fenomeno", tagline: "Launch site for a limited-edition 820 hp hybrid V12 hypercar, handcrafted in Sant'Agata.", year: "2025", discipline: "Brand · Web", location: "Sant'Agata Bolognese", image: lamborghini },
  { n: "II",  name: "Nova Intelligence",    tagline: "An agentic AI platform helping SAP teams modernize and operate complex systems up to five times faster.", year: "2025", discipline: "Identity · Web", location: "Berlin", image: nova },
  { n: "III", name: "Nexo",                 tagline: "An autonomous customer intelligence platform turning signals into role-based action plans.", year: "2025", discipline: "Product · Web", location: "Amsterdam", image: nexo },
  { n: "IV",  name: "Cowboy",               tagline: "A connected e-bike brand for city riders — adaptive motor, built-in GPS, theft protection.", year: "2024", discipline: "Brand · E-commerce", location: "Brussels", image: cowboy },
  { n: "V",   name: "Davies",               tagline: "An independent studio crafting bold brands and modern websites for founders.", year: "2024", discipline: "Portfolio · Web", location: "London", image: davies },
  { n: "VI",  name: "CarCaring",            tagline: "A car service platform for booking certified mechanics with transparent, warranty-backed repairs.", year: "2024", discipline: "Product · Brand", location: "Paris", image: carcaring },
  { n: "VII", name: "Bloom",                tagline: "A floral delivery service connecting customers with local artisan florists for same-day bouquets.", year: "2024", discipline: "E-commerce · Brand", location: "Munich", image: bloom },
];

const services = [
  { n: "01", title: "Brand Identity",   body: "Logotypes, marks and complete visual systems." },
  { n: "02", title: "Web Design",       body: "Editorial, considered interfaces with intent." },
  { n: "03", title: "Web Development",  body: "Fast, modern, hand-built with care." },
  { n: "04", title: "Art Direction",    body: "Photography, typography and campaign direction." },
];

/* Utility classes we'll reuse */
const eyebrow = "text-[10.5px] uppercase tracking-[0.32em] text-cocoa/55";
const eyebrowInk = "text-[10.5px] uppercase tracking-[0.32em] text-cocoa-deep";

/* ---------------- Nav ---------------- */

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#work",     label: "Work",     n: "01" },
    { href: "#services", label: "Services", n: "02" },
    { href: "#about",    label: "About",    n: "03" },
    { href: "#contact",  label: "Contact",  n: "04" },
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-cocoa/10 bg-parchment/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1360px] items-center justify-between px-8 py-6 md:px-16">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo.url} alt="Kemet Wsr" className="h-7 w-7 object-contain" />
          <span className="font-serif text-[19px] tracking-wide text-cocoa-deep">
            Kemet Wsr
          </span>
        </a>
        <nav className="hidden items-center gap-12 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="group flex items-baseline gap-2 text-[10.5px] uppercase tracking-[0.32em] text-cocoa/60 transition-colors hover:text-cocoa-deep">
              <span className="text-cocoa/35">{l.n}</span>
              <span>{l.label}</span>
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-8 md:flex">
          <span className={eyebrow}>Est. MMXXIV</span>
          <a href="#contact" className="text-[10.5px] uppercase tracking-[0.32em] text-cocoa-deep underline decoration-cocoa/30 decoration-1 underline-offset-[6px] transition-colors hover:decoration-cocoa-deep">
            Enquire
          </a>
        </div>
        <button className="md:hidden text-cocoa-deep" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-cocoa/10 bg-parchment md:hidden">
          <div className="flex flex-col gap-5 px-8 py-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="flex items-baseline gap-3 text-[11px] uppercase tracking-[0.28em] text-cocoa-deep/80">
                <span className="text-cocoa/40">{l.n}</span>{l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------------- Hero ---------------- */

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <img src={logo.url} alt="" aria-hidden className="pointer-events-none absolute -right-20 top-32 hidden w-[480px] opacity-[0.045] md:block" />
      <div className="mx-auto grid max-w-[1360px] grid-cols-12 gap-8 px-8 pt-28 pb-40 md:px-16 md:pt-40 md:pb-56">
        {/* Sidebar meta */}
        <aside className="col-span-12 mb-12 flex items-start gap-10 md:col-span-2 md:mb-0 md:flex-col md:gap-10">
          <div className="space-y-1.5">
            <div className={eyebrow}>N°</div>
            <div className={eyebrowInk}>MMXXVI / 01</div>
          </div>
          <div className="hidden space-y-1.5 md:block">
            <div className={eyebrow}>Currently</div>
            <div className={eyebrowInk}>Booking Q3</div>
          </div>
        </aside>

        {/* Headline */}
        <div className="col-span-12 md:col-span-8">
          <div className={`mb-10 flex items-center gap-4 ${eyebrow}`}>
            <span className="h-px w-10 bg-cocoa/30" />
            An independent studio for brand & web
          </div>
          <h1 className="font-serif text-[40px] leading-[1.05] tracking-[-0.01em] text-cocoa-deep md:text-[72px] lg:text-[88px]">
            Design that <span className="italic font-normal">outlives</span> the brief.
          </h1>
        </div>

        {/* Lede */}
        <div className="col-span-12 mt-10 md:col-span-2 md:mt-0">
          <p className="max-w-[15rem] text-[14px] leading-[1.75] text-cocoa/75">
            Kemet Wsr is a small studio for founders who want their identity and product to feel considered, permanent, and unmistakably theirs.
          </p>
          <a href="#contact" className="mt-10 inline-flex items-center gap-2 text-[10.5px] uppercase tracking-[0.32em] text-cocoa-deep underline decoration-cocoa/30 underline-offset-[6px] hover:decoration-cocoa-deep">
            Commission work <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      {/* Meta strip */}
      <div className="border-y border-cocoa/10">
        <div className="mx-auto grid max-w-[1360px] grid-cols-2 divide-x divide-cocoa/10 md:grid-cols-4">
          <MetaCell label="Practice"        value="Brand · Web" />
          <MetaCell label="Founded"         value="MMXXIV" />
          <MetaCell label="Working from"    value="Cairo · Remote" />
          <MetaCell label="Selected"        value="VII commissions" />
        </div>
      </div>
    </section>
  );
}

function MetaCell({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-2.5 px-6 py-7 md:px-10 md:py-8">
      <span className={eyebrow}>{label}</span>
      <span className={eyebrowInk}>{value}</span>
    </div>
  );
}

/* ---------------- Work ---------------- */

function Work() {
  return (
    <section id="work" className="relative">
      <div className="mx-auto max-w-[1360px] px-8 py-32 md:px-16 md:py-48">
        <div className="mb-24 grid grid-cols-12 items-end gap-8">
          <div className={`col-span-12 md:col-span-2 ${eyebrow}`}>Selected Work</div>
          <h2 className="col-span-12 max-w-4xl font-serif text-[36px] leading-[1.08] text-cocoa-deep md:col-span-8 md:text-[54px]">
            Seven recent commissions — from hypercars in Sant'Agata to autonomous intelligence in Berlin.
          </h2>
          <div className={`col-span-12 text-right md:col-span-2 ${eyebrow}`}>
            MMXXIV — MMXXVI
          </div>
        </div>

        <ol className="flex flex-col">
          {projects.map((p, i) => (
            <ProjectRow key={p.name} project={p} flip={i % 2 === 1} />
          ))}
        </ol>
      </div>
    </section>
  );
}

function ProjectRow({ project, flip }: { project: Project; flip: boolean }) {
  return (
    <li className="group grid grid-cols-12 gap-8 border-t border-cocoa/12 py-16 md:py-20">
      <div className={`col-span-12 md:col-span-3 ${flip ? "md:order-3" : ""}`}>
        <div className={eyebrow}>N° {project.n} — {project.year}</div>
        <h3 className="mt-5 font-serif text-[32px] leading-[1.05] text-cocoa-deep md:text-[40px]">
          {project.name}
        </h3>
        <div className={`mt-6 space-y-1.5 ${eyebrow}`}>
          <div>{project.discipline}</div>
          <div>{project.location}</div>
        </div>
      </div>

      <div className="col-span-12 md:col-span-6 md:order-2">
        <div className="overflow-hidden bg-ivory">
          <img
            src={project.image.url}
            alt={project.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.02]"
          />
        </div>
      </div>

      <div className={`col-span-12 flex flex-col justify-between gap-8 md:col-span-3 ${flip ? "md:order-1" : ""}`}>
        <p className="max-w-xs text-[15px] leading-[1.75] text-cocoa/75">
          {project.tagline}
        </p>
        <a href="#contact" className="inline-flex items-center gap-2 self-start border-b border-cocoa/25 pb-1.5 text-[10.5px] uppercase tracking-[0.32em] text-cocoa-deep transition-colors hover:border-cocoa-deep">
          View case <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </li>
  );
}

/* ---------------- Services ---------------- */

function Services() {
  return (
    <section id="services" className="relative border-y border-cocoa/12 bg-ivory">
      <div className="mx-auto max-w-[1360px] px-8 py-32 md:px-16 md:py-48">
        <div className="mb-20 grid grid-cols-12 gap-8">
          <div className={`col-span-12 md:col-span-2 ${eyebrow}`}>Practice</div>
          <div className="col-span-12 md:col-span-6">
            <h2 className="font-serif text-[36px] leading-[1.08] text-cocoa-deep md:text-[54px]">
              A small studio.
              <br />
              <span className="italic font-normal">A wide toolkit.</span>
            </h2>
          </div>
          <p className="col-span-12 self-end max-w-sm text-[15px] leading-[1.75] text-cocoa/70 md:col-span-4">
            Every project is led end-to-end by a senior craftsperson. No account layers, no ceremony — direct contact from first call to final ship.
          </p>
        </div>

        <ol className="divide-y divide-cocoa/12 border-y border-cocoa/12">
          {services.map((s) => (
            <li key={s.title} className="group grid grid-cols-12 items-baseline gap-8 py-10 transition-colors hover:bg-parchment/50 md:py-12">
              <div className={`col-span-2 md:col-span-1 ${eyebrow}`}>{s.n}</div>
              <h3 className="col-span-10 font-serif text-[30px] leading-[1.05] text-cocoa-deep md:col-span-6 md:text-[44px]">
                {s.title}
              </h3>
              <p className="col-span-12 text-[14px] leading-[1.75] text-cocoa/70 md:col-span-4 md:text-[15px]">
                {s.body}
              </p>
              <div className="col-span-12 flex justify-end md:col-span-1">
                <ArrowUpRight className="h-5 w-5 text-cocoa/25 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cocoa-deep" />
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------------- About ---------------- */

function About() {
  return (
    <section id="about" className="relative overflow-hidden">
      <img src={logo.url} alt="" aria-hidden className="pointer-events-none absolute -left-28 bottom-0 hidden w-[520px] opacity-[0.035] md:block" />
      <div className="relative mx-auto grid max-w-[1360px] grid-cols-12 gap-8 px-8 py-32 md:px-16 md:py-48">
        <div className={`col-span-12 md:col-span-2 ${eyebrow}`}>Studio</div>
        <div className="col-span-12 md:col-span-8">
          <h2 className="font-serif text-[36px] leading-[1.1] text-cocoa-deep md:text-[54px]">
            Named for the oldest builders — the ones who worked in stone and understood <span className="italic font-normal">proportion, patience, permanence.</span>
          </h2>
          <div className="mt-16 grid gap-12 md:grid-cols-2">
            <p className="max-w-md text-[15px] leading-[1.85] text-cocoa/75">
              Kemet Wsr is an independent design and web studio. We take on a small number of projects each year so every one gets the depth it deserves: strategy, identity, editorial art direction, and the site to hold it all.
            </p>
            <p className="max-w-md text-[15px] leading-[1.85] text-cocoa/75">
              We aren't chasing trends. We're building work that still reads clearly in ten years — quiet where it can be, precise everywhere else, and unmistakably yours.
            </p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-2 md:text-right">
          <div className={eyebrow}>Since MMXXIV</div>
        </div>
      </div>
    </section>
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
    <section id="contact" className="relative overflow-hidden border-t border-cocoa/12 bg-ivory">
      <div className="relative mx-auto grid max-w-[1360px] grid-cols-12 gap-8 px-8 py-32 md:px-16 md:py-48">
        <div className={`col-span-12 md:col-span-2 ${eyebrow}`}>Enquire</div>
        <div className="col-span-12 md:col-span-6">
          <h2 className="font-serif text-[52px] leading-[1.02] text-cocoa-deep md:text-[104px]">
            Let's build
            <br />
            <span className="italic font-normal">something lasting.</span>
          </h2>
          <p className="mt-10 max-w-md text-[15px] leading-[1.8] text-cocoa/75">
            Tell us a little about your project. We reply to every serious enquiry within two business days.
          </p>
          <a href="mailto:hello@kemetwsr.com" className="mt-8 inline-block font-serif text-[26px] italic text-cocoa-deep underline decoration-cocoa/30 decoration-1 underline-offset-[8px] hover:decoration-cocoa-deep md:text-[32px]">
            hello@kemetwsr.com
          </a>
        </div>

        <form onSubmit={onSubmit} className="col-span-12 flex flex-col gap-8 md:col-span-4">
          <Field name="name"  label="Name"  placeholder="Your name" />
          <Field name="email" label="Email" type="email" placeholder="you@studio.com" />
          <div>
            <label className={`mb-3 block ${eyebrow}`}>The project</label>
            <textarea
              name="message"
              required
              rows={4}
              placeholder="A few sentences about what you're building…"
              className="w-full border-0 border-b border-cocoa/25 bg-transparent px-0 py-2 text-[15px] text-cocoa-deep placeholder:text-cocoa/35 focus:border-cocoa-deep focus:outline-none focus:ring-0"
            />
          </div>
          <button
            type="submit"
            className="mt-2 inline-flex items-center justify-between border-b border-cocoa-deep pb-3 text-left text-[10.5px] uppercase tracking-[0.32em] text-cocoa-deep transition-colors hover:opacity-70"
          >
            {sent ? "Opening your mail…" : "Send enquiry"}
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ name, label, type = "text", placeholder }: { name: string; label: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className={`mb-3 block ${eyebrow}`}>{label}</label>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full border-0 border-b border-cocoa/25 bg-transparent px-0 py-2 text-[15px] text-cocoa-deep placeholder:text-cocoa/35 focus:border-cocoa-deep focus:outline-none focus:ring-0"
      />
    </div>
  );
}

/* ---------------- Footer ---------------- */

function Footer() {
  return (
    <footer className="bg-cocoa-deep text-ivory/70">
      <div className="mx-auto max-w-[1360px] px-8 py-20 md:px-16 md:py-24">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-5">
            <div className="flex items-center gap-3">
              <img src={logo.url} alt="" className="h-7 w-7 brightness-0 invert opacity-90" />
              <span className="font-serif text-[20px] tracking-wide text-ivory">Kemet Wsr</span>
            </div>
            <p className="mt-6 max-w-sm text-[14px] leading-[1.75] text-ivory/55">
              An independent studio for brand and web. Designed and built to endure.
            </p>
          </div>
          <div className="col-span-6 md:col-span-2">
            <div className="mb-5 text-[10.5px] uppercase tracking-[0.32em] text-ivory/40">Index</div>
            <ul className="space-y-2.5 text-[14px]">
              <li><a href="#work"     className="hover:text-ivory">Work</a></li>
              <li><a href="#services" className="hover:text-ivory">Services</a></li>
              <li><a href="#about"    className="hover:text-ivory">About</a></li>
              <li><a href="#contact"  className="hover:text-ivory">Contact</a></li>
            </ul>
          </div>
          <div className="col-span-6 md:col-span-2">
            <div className="mb-5 text-[10.5px] uppercase tracking-[0.32em] text-ivory/40">Elsewhere</div>
            <ul className="space-y-2.5 text-[14px]">
              <li><a href="#" className="hover:text-ivory">Instagram</a></li>
              <li><a href="#" className="hover:text-ivory">LinkedIn</a></li>
              <li><a href="#" className="hover:text-ivory">Twitter</a></li>
            </ul>
          </div>
          <div className="col-span-12 md:col-span-3 md:text-right">
            <div className="mb-5 text-[10.5px] uppercase tracking-[0.32em] text-ivory/40">Enquire</div>
            <a href="mailto:hello@kemetwsr.com" className="font-serif text-[22px] italic text-ivory hover:text-ivory/80">
              hello@kemetwsr.com
            </a>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-ivory/10 pt-6 text-[10.5px] uppercase tracking-[0.32em] text-ivory/40 md:flex-row md:items-center">
          <span>© MMXXVI Kemet Wsr</span>
          <span>Handcrafted in the studio</span>
        </div>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-parchment text-cocoa-deep">
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
  );
}
