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
  { n: "I", name: "Lamborghini Fenomeno", tagline: "Launch site for a limited-edition 820 hp hybrid V12 hypercar, handcrafted in Sant'Agata.", year: "2025", discipline: "Brand · Web", location: "Sant'Agata Bolognese", image: lamborghini },
  { n: "II", name: "Nova Intelligence", tagline: "An agentic AI platform helping SAP teams modernize and operate complex systems up to 5× faster.", year: "2025", discipline: "Identity · Web", location: "Berlin", image: nova },
  { n: "III", name: "NEXO", tagline: "An autonomous customer intelligence platform turning signals into role-based action plans.", year: "2025", discipline: "Product · Web", location: "Amsterdam", image: nexo },
  { n: "IV", name: "Cowboy", tagline: "A connected e-bike brand for city riders — adaptive motor, built-in GPS, theft protection.", year: "2024", discipline: "Brand · E-commerce", location: "Brussels", image: cowboy },
  { n: "V", name: "Davies", tagline: "An independent studio crafting bold brands and modern websites for founders.", year: "2024", discipline: "Portfolio · Web", location: "London", image: davies },
  { n: "VI", name: "CarCaring", tagline: "A car service platform for booking certified mechanics with transparent, warranty-backed repairs.", year: "2024", discipline: "Product · Brand", location: "Paris", image: carcaring },
  { n: "VII", name: "Bloom", tagline: "A floral delivery service connecting customers with local artisan florists for same-day bouquets.", year: "2024", discipline: "E-commerce · Brand", location: "Munich", image: bloom },
];

const services = [
  { n: "01", title: "Brand Identity", body: "Logotypes, marks and complete visual systems." },
  { n: "02", title: "Web Design", body: "Editorial, considered interfaces with intent." },
  { n: "03", title: "Web Development", body: "Fast, modern, hand-built with care." },
  { n: "04", title: "Art Direction", body: "Photography, type and campaign direction." },
];

/* ---------------- Nav ---------------- */

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#work", label: "Work", n: "01" },
    { href: "#services", label: "Services", n: "02" },
    { href: "#about", label: "About", n: "03" },
    { href: "#contact", label: "Contact", n: "04" },
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-cocoa/10 bg-parchment/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-12">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo.url} alt="KEMET WSR" className="h-8 w-8 object-contain" />
          <span className="font-serif text-lg tracking-wide text-cocoa-deep">
            Kemet <span className="text-clay-deep">Wsr</span>
          </span>
        </a>
        <nav className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="group flex items-baseline gap-2 text-[11px] uppercase tracking-[0.28em] text-cocoa-deep/60 transition-colors hover:text-clay-deep">
              <span className="text-clay-deep/50">{l.n}</span>
              <span>{l.label}</span>
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-6 md:flex">
          <span className="text-[11px] uppercase tracking-[0.28em] text-cocoa/50">Est. MMXXIV</span>
          <a href="#contact" className="text-[11px] uppercase tracking-[0.28em] text-cocoa-deep underline decoration-clay-deep/50 decoration-1 underline-offset-[6px] hover:text-clay-deep">
            Let's talk
          </a>
        </div>
        <button className="md:hidden text-cocoa-deep" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-cocoa/10 bg-parchment md:hidden">
          <div className="flex flex-col gap-4 px-6 py-6">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="flex items-baseline gap-3 text-sm uppercase tracking-[0.2em] text-cocoa-deep/80">
                <span className="text-clay-deep/60">{l.n}</span>{l.label}
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
      {/* Pyramid mark used as monumental background sigil */}
      <img
        src={logo.url}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -right-16 top-24 hidden w-[520px] opacity-[0.05] md:block"
      />
      <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-6 px-6 pt-20 pb-28 md:px-12 md:pt-32 md:pb-40">
        {/* Left running sidebar */}
        <aside className="col-span-12 mb-10 flex items-start gap-6 text-[11px] uppercase tracking-[0.28em] text-cocoa/60 md:col-span-2 md:mb-0 md:flex-col md:gap-8">
          <div>
            <div className="mb-1 text-clay-deep/60">N°</div>
            <div className="text-cocoa-deep">MMXXVI / 01</div>
          </div>
          <div className="hidden md:block">
            <div className="mb-1 text-clay-deep/60">Index</div>
            <div className="text-cocoa-deep">Studio</div>
          </div>
          <div className="hidden md:block">
            <div className="mb-1 text-clay-deep/60">Currently</div>
            <div className="text-cocoa-deep">Booking Q3</div>
          </div>
        </aside>

        {/* Main headline column */}
        <div className="col-span-12 md:col-span-8">
          <div className="mb-8 flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-clay-deep">
            <span className="h-px w-8 bg-clay-deep/60" />
            An independent studio for brand & web
          </div>
          <h1 className="font-serif text-[3.25rem] leading-[0.98] tracking-tight text-cocoa-deep md:text-[6.5rem] lg:text-[8rem]">
            Design that
            <br />
            <span className="italic text-clay-deep">outlives</span>
            <br />
            the brief.
          </h1>
        </div>

        {/* Right column meta / lede */}
        <div className="col-span-12 mt-8 md:col-span-2 md:mt-0">
          <p className="text-sm leading-relaxed text-cocoa/75">
            Kemet Wsr is a small studio for founders who want their identity and product to feel considered, permanent, and unmistakably theirs.
          </p>
          <a href="#contact" className="mt-8 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-cocoa-deep underline decoration-clay-deep/60 underline-offset-[6px] hover:text-clay-deep">
            Commission work <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      {/* Footer meta strip inside hero */}
      <div className="border-y border-cocoa/10">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 divide-x divide-cocoa/10 px-6 text-[11px] uppercase tracking-[0.28em] text-cocoa/70 md:grid-cols-4 md:px-12">
          <MetaCell label="Practice" value="Brand · Web" />
          <MetaCell label="Founded" value="MMXXIV" />
          <MetaCell label="Working from" value="Cairo · Remote" />
          <MetaCell label="Selected clients" value="VII shown" />
        </div>
      </div>
    </section>
  );
}

function MetaCell({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-2 px-4 py-5 md:px-6 md:py-6">
      <span className="text-clay-deep/60">{label}</span>
      <span className="text-cocoa-deep">{value}</span>
    </div>
  );
}

/* ---------------- Work ---------------- */

function Work() {
  return (
    <section id="work" className="relative">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-36">
        <div className="mb-20 grid grid-cols-12 items-end gap-6">
          <div className="col-span-12 md:col-span-2 text-[11px] uppercase tracking-[0.28em] text-clay-deep">
            Selected Work
          </div>
          <h2 className="col-span-12 font-serif text-4xl leading-[1.02] text-cocoa-deep md:col-span-8 md:text-6xl">
            Seven recent commissions — from hypercars in Sant'Agata to autonomous intelligence in Berlin.
          </h2>
          <div className="col-span-12 text-right text-[11px] uppercase tracking-[0.28em] text-cocoa/60 md:col-span-2">
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
    <li className="group grid grid-cols-12 gap-6 border-t border-cocoa/15 py-10 md:py-14">
      {/* Museum label */}
      <div className={`col-span-12 md:col-span-3 ${flip ? "md:order-3" : ""}`}>
        <div className="text-[11px] uppercase tracking-[0.28em] text-clay-deep/70">
          N° {project.n} — {project.year}
        </div>
        <h3 className="mt-4 font-serif text-3xl leading-[1.05] text-cocoa-deep md:text-4xl">
          {project.name}
        </h3>
        <div className="mt-4 space-y-1 text-[11px] uppercase tracking-[0.22em] text-cocoa/60">
          <div>{project.discipline}</div>
          <div>{project.location}</div>
        </div>
      </div>

      {/* Image */}
      <div className="col-span-12 md:col-span-6 md:order-2">
        <div className="overflow-hidden rounded-sm bg-ivory">
          <img
            src={project.image.url}
            alt={project.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.02]"
          />
        </div>
      </div>

      {/* Caption */}
      <div className={`col-span-12 flex flex-col justify-between gap-6 md:col-span-3 ${flip ? "md:order-1" : ""}`}>
        <p className="text-base leading-relaxed text-cocoa/75">
          {project.tagline}
        </p>
        <a href="#contact" className="inline-flex items-center gap-2 self-start border-b border-cocoa/30 pb-1 text-[11px] uppercase tracking-[0.28em] text-cocoa-deep transition-colors hover:border-clay-deep hover:text-clay-deep">
          View case <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </li>
  );
}

/* ---------------- Services ---------------- */

function Services() {
  return (
    <section id="services" className="relative border-y border-cocoa/15 bg-ivory">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-36">
        <div className="mb-16 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-2 text-[11px] uppercase tracking-[0.28em] text-clay-deep">
            Practice
          </div>
          <div className="col-span-12 md:col-span-6">
            <h2 className="font-serif text-4xl leading-[1.05] text-cocoa-deep md:text-6xl">
              A small studio.
              <br />
              <span className="italic">A wide toolkit.</span>
            </h2>
          </div>
          <p className="col-span-12 self-end text-base leading-relaxed text-cocoa/70 md:col-span-4">
            Every project is led end-to-end by a senior craftsperson. No account layers, no ceremony — direct contact from first call to final ship.
          </p>
        </div>

        <ol className="divide-y divide-cocoa/15 border-y border-cocoa/15">
          {services.map((s) => (
            <li key={s.title} className="group grid grid-cols-12 items-baseline gap-6 py-8 transition-colors hover:bg-parchment/60 md:py-10">
              <div className="col-span-2 text-[11px] uppercase tracking-[0.28em] text-clay-deep/70 md:col-span-1">
                {s.n}
              </div>
              <h3 className="col-span-10 font-serif text-3xl leading-none text-cocoa-deep md:col-span-6 md:text-5xl">
                {s.title}
              </h3>
              <p className="col-span-12 text-sm text-cocoa/70 md:col-span-4 md:text-base">
                {s.body}
              </p>
              <div className="col-span-12 flex justify-end md:col-span-1">
                <ArrowUpRight className="h-5 w-5 text-cocoa/30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-clay-deep" />
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
      <img src={logo.url} alt="" aria-hidden className="pointer-events-none absolute -left-24 bottom-0 hidden w-[560px] opacity-[0.04] md:block" />
      <div className="relative mx-auto grid max-w-[1400px] grid-cols-12 gap-6 px-6 py-24 md:px-12 md:py-36">
        <div className="col-span-12 md:col-span-2 text-[11px] uppercase tracking-[0.28em] text-clay-deep">
          Studio
        </div>
        <div className="col-span-12 md:col-span-8">
          <h2 className="font-serif text-4xl leading-[1.05] text-cocoa-deep md:text-6xl">
            Named for the oldest builders — the ones who worked in stone and understood <span className="italic text-clay-deep">proportion, patience, permanence.</span>
          </h2>
          <div className="mt-14 grid gap-10 md:grid-cols-2">
            <p className="text-base leading-relaxed text-cocoa/75">
              Kemet Wsr is an independent design and web studio. We take on a small number of projects each year so every one gets the depth it deserves: strategy, identity, editorial art direction, and the site to hold it all.
            </p>
            <p className="text-base leading-relaxed text-cocoa/75">
              We aren't chasing trends. We are building work that still reads clearly in ten years — quiet where it can be, precise everywhere else, and unmistakably yours.
            </p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-2 md:text-right">
          <div className="text-[11px] uppercase tracking-[0.28em] text-cocoa/60">Since MMXXIV</div>
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
    <section id="contact" className="relative overflow-hidden border-t border-cocoa/15 bg-ivory">
      <div className="clay-wash absolute inset-x-0 bottom-0 h-2/3" aria-hidden />
      <div className="relative mx-auto grid max-w-[1400px] grid-cols-12 gap-6 px-6 py-24 md:px-12 md:py-36">
        <div className="col-span-12 md:col-span-2 text-[11px] uppercase tracking-[0.28em] text-clay-deep">
          Enquire
        </div>
        <div className="col-span-12 md:col-span-6">
          <h2 className="font-serif text-5xl leading-[0.98] text-cocoa-deep md:text-8xl">
            Let's build
            <br />
            <span className="italic text-clay-deep">something lasting.</span>
          </h2>
          <p className="mt-8 max-w-md text-base leading-relaxed text-cocoa/75">
            Tell us a little about your project. We reply to every serious enquiry within two business days.
          </p>
          <a href="mailto:hello@kemetwsr.com" className="mt-6 inline-block font-serif text-2xl text-cocoa-deep underline decoration-clay-deep/50 decoration-1 underline-offset-[6px] hover:text-clay-deep md:text-3xl">
            hello@kemetwsr.com
          </a>
        </div>

        <form onSubmit={onSubmit} className="col-span-12 flex flex-col gap-6 md:col-span-4">
          <Field name="name" label="Name" placeholder="Your name" />
          <Field name="email" type="email" label="Email" placeholder="you@studio.com" />
          <div>
            <label className="mb-2 block text-[11px] uppercase tracking-[0.28em] text-clay-deep/70">The project</label>
            <textarea
              name="message"
              required
              rows={4}
              placeholder="A few sentences about what you're building…"
              className="w-full border-0 border-b border-cocoa/25 bg-transparent px-0 py-2 text-cocoa-deep placeholder:text-cocoa/35 focus:border-clay-deep focus:outline-none focus:ring-0"
            />
          </div>
          <button
            type="submit"
            className="mt-2 inline-flex items-center justify-between border-b border-cocoa-deep pb-3 text-left text-sm uppercase tracking-[0.28em] text-cocoa-deep transition-colors hover:border-clay-deep hover:text-clay-deep"
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
      <label className="mb-2 block text-[11px] uppercase tracking-[0.28em] text-clay-deep/70">{label}</label>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full border-0 border-b border-cocoa/25 bg-transparent px-0 py-2 text-cocoa-deep placeholder:text-cocoa/35 focus:border-clay-deep focus:outline-none focus:ring-0"
      />
    </div>
  );
}

/* ---------------- Footer ---------------- */

function Footer() {
  return (
    <footer className="bg-cocoa-deep text-ivory/70">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-12 md:py-20">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-5">
            <div className="flex items-center gap-3">
              <img src={logo.url} alt="" className="h-8 w-8 brightness-0 invert opacity-90" />
              <span className="font-serif text-xl tracking-wide text-ivory">Kemet Wsr</span>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ivory/55">
              An independent studio for brand and web. Designed and built to endure.
            </p>
          </div>
          <div className="col-span-6 md:col-span-2">
            <div className="mb-4 text-[11px] uppercase tracking-[0.28em] text-ivory/40">Index</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#work" className="hover:text-ivory">Work</a></li>
              <li><a href="#services" className="hover:text-ivory">Services</a></li>
              <li><a href="#about" className="hover:text-ivory">About</a></li>
              <li><a href="#contact" className="hover:text-ivory">Contact</a></li>
            </ul>
          </div>
          <div className="col-span-6 md:col-span-2">
            <div className="mb-4 text-[11px] uppercase tracking-[0.28em] text-ivory/40">Elsewhere</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-ivory">Instagram</a></li>
              <li><a href="#" className="hover:text-ivory">LinkedIn</a></li>
              <li><a href="#" className="hover:text-ivory">Twitter</a></li>
            </ul>
          </div>
          <div className="col-span-12 md:col-span-3 md:text-right">
            <div className="mb-4 text-[11px] uppercase tracking-[0.28em] text-ivory/40">Enquire</div>
            <a href="mailto:hello@kemetwsr.com" className="font-serif text-xl text-ivory hover:text-clay">
              hello@kemetwsr.com
            </a>
          </div>
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-ivory/10 pt-6 text-[11px] uppercase tracking-[0.28em] text-ivory/40 md:flex-row md:items-center">
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
