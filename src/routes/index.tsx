import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowUpRight, Menu, X, Mail, Instagram, Linkedin, Twitter } from "lucide-react";

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
  name: string;
  tagline: string;
  year: string;
  discipline: string;
  image: { url: string };
};

const projects: Project[] = [
  {
    name: "Lamborghini Fenomeno",
    tagline:
      "Launch site for a limited-edition 820hp hybrid V12 hypercar, handcrafted in Sant'Agata for collectors of the rarest naturally aspirated machines.",
    year: "2025",
    discipline: "Brand · Web",
    image: lamborghini,
  },
  {
    name: "Nova Intelligence",
    tagline:
      "An agentic AI platform built for SAP teams to modernize, document, and operate complex systems up to 5× faster.",
    year: "2025",
    discipline: "Web · Identity",
    image: nova,
  },
  {
    name: "NEXO",
    tagline:
      "An Autonomous Customer Intelligence platform that turns customer signals into clear, role-based action plans for product and CX teams.",
    year: "2025",
    discipline: "Product · Web",
    image: nexo,
  },
  {
    name: "Cowboy",
    tagline:
      "A connected e-bike brand designed for city riders — adaptive motor assistance, built-in GPS, and theft protection out of the box.",
    year: "2024",
    discipline: "Brand · E-commerce",
    image: cowboy,
  },
  {
    name: "Davies",
    tagline:
      "An independent design studio crafting bold brands and modern websites for founders who want their identity to stand out and scale.",
    year: "2024",
    discipline: "Portfolio · Web",
    image: davies,
  },
  {
    name: "CarCaring",
    tagline:
      "A car service platform that lets drivers book certified mechanics online for transparent, warranty-backed maintenance and repairs.",
    year: "2024",
    discipline: "Product · Brand",
    image: carcaring,
  },
  {
    name: "Bloom",
    tagline:
      "A floral delivery service that connects customers with local artisan florists for fresh, hand-tied bouquets delivered the same day.",
    year: "2024",
    discipline: "E-commerce · Brand",
    image: bloom,
  },
];

const services = [
  {
    n: "01",
    title: "Brand Identity",
    body: "Logotypes, marks, and visual systems that carry weight — from first sketch to full guidelines.",
  },
  {
    n: "02",
    title: "Web Design",
    body: "Editorial, conversion-minded interfaces that make your product feel considered on every scroll.",
  },
  {
    n: "03",
    title: "Web Development",
    body: "Fast, modern, hand-built sites and applications. Performant on every device, easy to evolve.",
  },
  {
    n: "04",
    title: "Art Direction",
    body: "Photography, typography, and campaign direction that stitches every touchpoint together.",
  },
];

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#work", label: "Work" },
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-parchment/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo.url} alt="KEMET WSR" className="h-9 w-9 object-contain" />
          <span className="font-serif text-xl tracking-wide text-cocoa-deep">
            KEMET <span className="text-clay-deep">WSR</span>
          </span>
        </a>
        <nav className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm uppercase tracking-[0.18em] text-cocoa-deep/70 transition-colors hover:text-clay-deep"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-full bg-cocoa px-5 py-2.5 text-sm font-medium uppercase tracking-wider text-ivory shadow-sm transition-transform hover:-translate-y-0.5 md:inline-flex"
        >
          Contact us
          <ArrowUpRight className="h-4 w-4" />
        </a>
        <button
          className="md:hidden text-cocoa-deep"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border/60 bg-parchment md:hidden">
          <div className="flex flex-col gap-4 px-6 py-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-[0.18em] text-cocoa-deep/80"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-cocoa px-5 py-2.5 text-sm text-ivory"
            >
              Contact us <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="paper-grain absolute inset-0 opacity-70" aria-hidden />
      <div className="clay-wash absolute inset-x-0 bottom-0 h-1/2" aria-hidden />
      {/* Faint column silhouettes */}
      <svg
        className="absolute inset-x-0 bottom-0 mx-auto h-[70%] w-full max-w-6xl text-cocoa-deep/[0.06]"
        viewBox="0 0 1200 600"
        aria-hidden
      >
        {Array.from({ length: 7 }).map((_, i) => (
          <g key={i} transform={`translate(${120 + i * 140}, 60)`}>
            <rect x="-4" y="0" width="8" height="24" fill="currentColor" />
            <rect x="-16" y="24" width="32" height="12" fill="currentColor" />
            <rect x="-10" y="36" width="20" height="440" fill="currentColor" />
            <rect x="-20" y="476" width="40" height="16" fill="currentColor" />
          </g>
        ))}
      </svg>

      <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-40 text-center md:px-10 md:pt-32 md:pb-56">
        <div className="animate-rise mx-auto mb-8 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.3em] text-cocoa/70">
          <span className="h-px w-8 bg-cocoa/40" />
          Independent design studio
          <span className="h-px w-8 bg-cocoa/40" />
        </div>
        <h1 className="animate-rise font-serif text-5xl leading-[1.05] text-cocoa-deep md:text-7xl lg:text-8xl">
          Brands and websites,
          <br />
          <span className="italic text-clay-deep">built to endure.</span>
        </h1>
        <p className="animate-rise mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-cocoa/80 md:text-xl">
          We are KEMET WSR — a small studio pairing timeless craft with modern
          execution. We design identities and ship the websites they deserve.
        </p>
        <div className="animate-rise mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-cocoa px-7 py-3.5 text-sm font-medium uppercase tracking-wider text-ivory shadow-lg shadow-cocoa/20 transition-transform hover:-translate-y-0.5"
          >
            Start a project <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full border border-cocoa/30 px-7 py-3.5 text-sm font-medium uppercase tracking-wider text-cocoa-deep transition-colors hover:bg-cocoa/5"
          >
            See our work
          </a>
        </div>

        <div className="mt-24 grid grid-cols-3 gap-6 border-t border-cocoa/15 pt-8 text-left md:mt-32">
          <Stat k="07" v="Signature launches" />
          <Stat k="04" v="Continents served" />
          <Stat k="100%" v="Handcrafted" />
        </div>
      </div>
    </section>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <div className="font-serif text-3xl text-cocoa-deep md:text-5xl">{k}</div>
      <div className="mt-2 text-xs uppercase tracking-[0.2em] text-cocoa/70 md:text-sm">
        {v}
      </div>
    </div>
  );
}

function Work() {
  return (
    <section id="work" className="relative border-t border-cocoa/10 bg-ivory">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-4 text-xs uppercase tracking-[0.3em] text-clay-deep">
              Selected Work
            </div>
            <h2 className="max-w-2xl font-serif text-4xl leading-tight md:text-6xl">
              Recent projects, from
              <br />
              <span className="italic">idea to launch.</span>
            </h2>
          </div>
          <p className="max-w-sm text-base text-cocoa/70">
            A cross-section of what we've been building — hypercar campaigns,
            AI platforms, e-commerce, and studio identities.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 md:gap-14">
          {projects.map((p, i) => (
            <ProjectCard key={p.name} project={p} featured={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, featured }: { project: Project; featured?: boolean }) {
  return (
    <a
      href="#contact"
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-cocoa/10 bg-parchment transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-cocoa/10 ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-parchment md:aspect-[16/10]">
        <img
          src={project.image.url}
          alt={project.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          loading="lazy"
        />
      </div>
      <div className="flex items-start justify-between gap-6 p-6 md:p-8">
        <div>
          <div className="mb-2 flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-clay-deep">
            <span>{project.discipline}</span>
            <span className="h-px w-6 bg-clay-deep/40" />
            <span>{project.year}</span>
          </div>
          <h3 className="font-serif text-2xl leading-tight md:text-3xl">
            {project.name}
          </h3>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-cocoa/70 md:text-base">
            {project.tagline}
          </p>
        </div>
        <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-cocoa/20 text-cocoa transition-colors group-hover:border-clay-deep group-hover:bg-clay-deep group-hover:text-ivory">
          <ArrowUpRight className="h-5 w-5" />
        </div>
      </div>
    </a>
  );
}

function Services() {
  return (
    <section id="services" className="relative border-t border-cocoa/10">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="mb-16 grid gap-6 md:grid-cols-2 md:items-end">
          <div>
            <div className="mb-4 text-xs uppercase tracking-[0.3em] text-clay-deep">
              What we do
            </div>
            <h2 className="font-serif text-4xl leading-tight md:text-6xl">
              A small studio,
              <br />
              <span className="italic">a wide toolkit.</span>
            </h2>
          </div>
          <p className="text-base text-cocoa/70">
            We keep the team lean on purpose so every project is handled by
            senior craftspeople. From brand strategy to the final line of code,
            you work directly with the people making the work.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl bg-cocoa/10 md:grid-cols-2">
          {services.map((s) => (
            <div
              key={s.title}
              className="group flex flex-col justify-between gap-10 bg-parchment p-8 transition-colors hover:bg-ivory md:p-12"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-serif text-2xl text-clay-deep">{s.n}</span>
                <ArrowUpRight className="h-5 w-5 text-cocoa/40 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-clay-deep" />
              </div>
              <div>
                <h3 className="font-serif text-3xl md:text-4xl">{s.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-cocoa/70">
                  {s.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative overflow-hidden border-t border-cocoa/10 bg-ivory">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:grid-cols-[1fr_1.4fr] md:px-10 md:py-32">
        <div className="relative flex items-start justify-center">
          <img
            src={logo.url}
            alt="KEMET WSR mark"
            className="h-48 w-48 object-contain opacity-90 md:h-72 md:w-72"
          />
        </div>
        <div>
          <div className="mb-4 text-xs uppercase tracking-[0.3em] text-clay-deep">
            About the studio
          </div>
          <h2 className="font-serif text-4xl leading-tight md:text-6xl">
            Ancient craft.
            <br />
            <span className="italic">Modern execution.</span>
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-cocoa/80">
            KEMET WSR is an independent design and web studio. Our name is a
            nod to the oldest builders — the ones who worked in stone and knew
            proportion, patience, and permanence. We bring the same posture to
            digital work: fewer projects, deeper craft, work that ages well.
          </p>
          <blockquote className="mt-12 border-l-2 border-clay-deep pl-6 font-serif text-2xl italic leading-snug text-cocoa-deep md:text-3xl">
            &ldquo;We are not chasing trends. We build things that still look
            right in ten years.&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(
      `New project inquiry from ${data.get("name") || "someone"}`,
    );
    const body = encodeURIComponent(String(data.get("message") || ""));
    window.location.href = `mailto:hello@kemetwsr.com?subject=${subject}&body=${body}`;
    setSent(true);
  }
  return (
    <section id="contact" className="relative overflow-hidden border-t border-cocoa/10">
      <div className="clay-wash absolute inset-x-0 bottom-0 h-2/3" aria-hidden />
      <div className="relative mx-auto max-w-5xl px-6 py-24 text-center md:px-10 md:py-32">
        <div className="mb-4 text-xs uppercase tracking-[0.3em] text-clay-deep">
          Say hello
        </div>
        <h2 className="mx-auto max-w-3xl font-serif text-5xl leading-[1.05] md:text-7xl">
          Let's build something
          <br />
          <span className="italic">lasting.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base text-cocoa/80 md:text-lg">
          Tell us a little about your project. We reply to every serious inquiry
          within two business days.
        </p>

        <form
          onSubmit={onSubmit}
          className="mx-auto mt-12 grid max-w-2xl gap-4 rounded-2xl border border-cocoa/15 bg-parchment/80 p-6 text-left backdrop-blur md:p-8"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <Field name="name" label="Name" placeholder="Your name" />
            <Field name="email" label="Email" type="email" placeholder="you@studio.com" />
          </div>
          <div>
            <label className="mb-1.5 block text-xs uppercase tracking-[0.2em] text-cocoa/70">
              Project
            </label>
            <textarea
              name="message"
              required
              rows={4}
              placeholder="A few sentences about what you're building…"
              className="w-full rounded-lg border border-cocoa/20 bg-ivory px-4 py-3 text-cocoa-deep placeholder:text-cocoa/40 focus:border-clay-deep focus:outline-none focus:ring-2 focus:ring-clay/30"
            />
          </div>
          <div className="mt-2 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <a
              href="mailto:hello@kemetwsr.com"
              className="inline-flex items-center gap-2 text-sm text-cocoa/70 hover:text-clay-deep"
            >
              <Mail className="h-4 w-4" /> hello@kemetwsr.com
            </a>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-cocoa px-7 py-3.5 text-sm font-medium uppercase tracking-wider text-ivory shadow-lg shadow-cocoa/20 transition-transform hover:-translate-y-0.5"
            >
              {sent ? "Opening your mail…" : "Contact us"}
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  type = "text",
  placeholder,
}: {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs uppercase tracking-[0.2em] text-cocoa/70">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-lg border border-cocoa/20 bg-ivory px-4 py-3 text-cocoa-deep placeholder:text-cocoa/40 focus:border-clay-deep focus:outline-none focus:ring-2 focus:ring-clay/30"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-cocoa/20 bg-cocoa-deep text-ivory/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3 md:px-10">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo.url} alt="" className="h-8 w-8 invert" />
            <span className="font-serif text-lg tracking-wide text-ivory">
              KEMET WSR
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ivory/60">
            Independent design & web studio. Brands and sites built to endure.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 text-sm">
          <div>
            <div className="mb-3 text-xs uppercase tracking-[0.2em] text-ivory/50">
              Studio
            </div>
            <ul className="space-y-2">
              <li><a href="#work" className="hover:text-ivory">Work</a></li>
              <li><a href="#services" className="hover:text-ivory">Services</a></li>
              <li><a href="#about" className="hover:text-ivory">About</a></li>
              <li><a href="#contact" className="hover:text-ivory">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="mb-3 text-xs uppercase tracking-[0.2em] text-ivory/50">
              Elsewhere
            </div>
            <ul className="space-y-2">
              <li><a href="#" className="inline-flex items-center gap-2 hover:text-ivory"><Instagram className="h-4 w-4" /> Instagram</a></li>
              <li><a href="#" className="inline-flex items-center gap-2 hover:text-ivory"><Linkedin className="h-4 w-4" /> LinkedIn</a></li>
              <li><a href="#" className="inline-flex items-center gap-2 hover:text-ivory"><Twitter className="h-4 w-4" /> Twitter</a></li>
            </ul>
          </div>
        </div>
        <div className="md:text-right">
          <div className="mb-3 text-xs uppercase tracking-[0.2em] text-ivory/50">
            Contact
          </div>
          <a href="mailto:hello@kemetwsr.com" className="text-lg text-ivory hover:text-clay">
            hello@kemetwsr.com
          </a>
        </div>
      </div>
      <div className="border-t border-ivory/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs uppercase tracking-[0.2em] text-ivory/50 md:flex-row md:px-10">
          <span>© {new Date().getFullYear()} KEMET WSR</span>
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
