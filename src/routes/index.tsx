import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { useQuery } from "@tanstack/react-query";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useServerFn } from "@tanstack/react-start";

import { getContent, submitMessage } from "@/lib/content.functions";
import { defaultSite, mergeContent, type SiteContent, type SiteProject } from "@/lib/site-defaults";

export const Route = createFileRoute("/")({
  component: Home,
});

type Project = SiteProject;

const mono     = "font-mono text-[10px] uppercase tracking-[0.18em]";
const monoTiny = "font-mono text-[9px] uppercase tracking-[0.18em]";
const bd       = "border-cocoa-deep/25";

function Nav({ site }: { site: SiteContent }) {
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
        <img src={site.brand.logoUrl} alt={site.brand.name} className="h-5 w-5 object-contain" />
        <span className="font-bold italic tracking-[0.18em]">{site.brand.name}</span>
        <span className="ml-2 text-cocoa/50 hidden sm:inline">{site.brand.short}</span>
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
        <span>{site.availability}</span>
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

function Hero({ site }: { site: SiteContent }) {
  return (
    <section id="top" className="grid grid-cols-1 md:grid-cols-2">
      <div className={`flex flex-col gap-8 border-b md:border-b-0 md:border-r ${bd} p-8 md:p-14`}>
        <span className={`${mono} text-cocoa/70`}>{site.hero.eyebrow}</span>
        <h1 className="font-serif text-[38px] md:text-[68px] leading-[0.95] tracking-[-0.01em] text-cocoa-deep">
          {site.hero.headline}
        </h1>
        <p className="max-w-md text-[15px] leading-[1.75] text-cocoa/80">
          {site.hero.description}
        </p>
        <div className={`grid grid-cols-2 lg:grid-cols-3 border ${bd} bg-ivory`}>
          {site.hero.specs.map((s, i) => (
            <SpecCell key={s.label + i} label={s.label} value={s.value} last={i === site.hero.specs.length - 1} />
          ))}
        </div>
        <div className="flex flex-wrap gap-4">
          <a href="#work" className={`px-6 py-3 bg-cocoa-deep text-ivory ${mono} font-bold hover:opacity-90 transition-opacity`}>
            {site.hero.ctaPrimary}
          </a>
          <a href="#contact" className={`px-6 py-3 border ${bd} ${mono} font-bold hover:bg-ivory transition-colors inline-flex items-center gap-2`}>
            {site.hero.ctaSecondary} <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
      <div className="relative bg-ivory p-8 md:p-14 flex flex-col items-center justify-center min-h-[420px] md:min-h-0">
        <div className={`absolute top-6 left-6 ${mono} text-cocoa/55`}>
          {site.hero.featuredLabel}
        </div>
        <img
          src={site.hero.featuredImageUrl}
          alt={site.hero.featuredAlt}
          className="w-full max-w-[420px] h-auto object-contain"
        />
        <div className={`absolute top-[28%] right-6 ${monoTiny} border-l ${bd} pl-2 text-cocoa-deep`}>
          <span className="block font-bold">Product</span>
          <span className="opacity-60">Mobile · AI</span>
        </div>
        <div className={`absolute bottom-[34%] left-6 ${monoTiny} border-r ${bd} pr-2 text-right text-cocoa-deep`}>
          <span className="block font-bold">Interface</span>
          <span className="opacity-60">Chat · History</span>
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

function Work({ site }: { site: SiteContent }) {
  return (
    <section id="work" className={`border-t ${bd}`}>
      <div className={`grid grid-cols-12 border-b ${bd}`}>
        <div className={`col-span-12 md:col-span-3 border-r ${bd} p-6 ${mono} text-cocoa/60`}>
          Fig. 02 — Selected Work
        </div>
        <div className="col-span-12 md:col-span-6 p-6 md:p-8">
          <h2 className="font-serif text-[28px] md:text-[40px] leading-[1.05] text-cocoa-deep">
            {site.work.heading} <span className="italic">{site.work.italic}</span>
          </h2>
        </div>
        <div className={`col-span-12 md:col-span-3 border-l ${bd} p-6 flex items-end justify-end ${mono} text-cocoa/60`}>
          {site.work.count}
        </div>
      </div>
      <WorkGroup label="Design" projects={site.designProjects} />
      <WorkGroup label="Development" projects={site.developmentProjects} />
    </section>
  );
}

function WorkGroup({ label, projects }: { label: string; projects: Project[] }) {
  const count = `${projects.length}`.padStart(2, "0");
  return (
    <div className={`border-b ${bd}`}>
      <div className={`flex items-center gap-4 border-b ${bd} bg-ivory/50 px-6 py-4 ${mono} text-cocoa-deep`}>
        <span className="h-px w-8 bg-cocoa-deep/30" />
        {label}
        <span className="ml-auto text-cocoa/55">{count} / {count} units</span>
      </div>
      <ol className={`divide-y ${bd.replace("border-", "divide-")}`}>
        {projects.map((p, i) => (
          <ProjectRow key={p.name + i} project={p} group={label} />
        ))}
      </ol>
    </div>
  );
}

function ProjectRow({ project, group }: { project: Project; group: string }) {
  const ctaLabel = group === "Development" ? "View website" : "View case";
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
          <a
            href={project.link || "#contact"}
            target={project.link ? "_blank" : undefined}
            rel={project.link ? "noopener noreferrer" : undefined}
            className={`inline-flex items-center gap-2 border-b ${bd} pb-1 ${mono} text-cocoa-deep hover:border-cocoa-deep`}
          >
            {ctaLabel} <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
      <div className="col-span-12 md:col-span-7 bg-ivory overflow-hidden p-6 md:p-10">
        <img
          src={project.image}
          alt={project.name}
          loading="lazy"
          className="h-full w-full object-contain transition-transform duration-[1200ms] ease-out group-hover:scale-[1.02]"
        />
      </div>
    </li>
  );
}

function Services({ site }: { site: SiteContent }) {
  return (
    <section id="services" className={`border-t ${bd} bg-ivory`}>
      <div className={`grid grid-cols-12 border-b ${bd}`}>
        <div className={`col-span-12 md:col-span-3 border-r ${bd} p-6 ${mono} text-cocoa/60`}>
          Fig. 03 — Practice
        </div>
        <div className="col-span-12 md:col-span-6 p-6 md:p-8">
          <h2 className="font-serif text-[28px] md:text-[40px] leading-[1.05] text-cocoa-deep">
            What we do. <span className="italic">With focus.</span>
          </h2>
        </div>
        <div className={`col-span-12 md:col-span-3 border-l ${bd} p-6 flex items-end justify-end ${mono} text-cocoa/60`}>
          {`${site.services.length}`.padStart(2, "0")} disciplines
        </div>
      </div>
      <ol className={`divide-y ${bd.replace("border-", "divide-")}`}>
        {site.services.map((s) => (
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

function About({ site }: { site: SiteContent }) {
  return (
    <section id="about" className={`border-t ${bd} flex flex-col lg:flex-row`}>
      <div className={`flex-1 p-8 md:p-14 border-b lg:border-b-0 lg:border-r ${bd}`}>
        <h4 className={`${mono} text-cocoa-deep border-b ${bd} pb-3 mb-6 w-fit`}>Studio Note</h4>
        <p className="font-serif italic text-[18px] md:text-[22px] leading-[1.55] text-cocoa-deep/85 max-w-xl">
          {site.about.note}
        </p>
      </div>
      <div className="lg:w-[420px] bg-ivory flex flex-col">
        <table className={`w-full ${monoTiny} text-cocoa-deep flex-1 flex flex-col`}>
          <tbody className="flex flex-col flex-1">
            {site.about.ledger.map((r, i) => (
              <LedgerRow key={r.k + i} k={r.k} v={r.v} last={i === site.about.ledger.length - 1} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function LedgerRow({ k, v, last }: { k: string; v: string; last?: boolean }) {
  return (
    <tr className={`flex flex-1 items-center ${last ? "" : `border-b ${bd}`}`}>
      <td className={`p-4 font-bold bg-parchment/50 border-r ${bd} flex-1`}>{k}</td>
      <td className="p-4 text-right flex-1">{v}</td>
    </tr>
  );
}

function Contact({ site }: { site: SiteContent }) {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const sendMessage = useServerFn(submitMessage);
  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setState("sending");
    try {
      await sendMessage({
        data: {
          name: String(data.get("name") ?? ""),
          email: String(data.get("email") ?? ""),
          message: String(data.get("message") ?? ""),
        },
      });
      setState("sent");
      form.reset();
    } catch {
      setState("error");
    }
  }
  return (
    <section id="contact" className={`border-t ${bd} grid grid-cols-1 md:grid-cols-2`}>
      <div className={`p-8 md:p-14 border-b md:border-b-0 md:border-r ${bd}`}>
        <span className={`${mono} text-cocoa/60`}>Fig. 04 — Enquire</span>
        <h2 className="mt-6 font-serif text-[44px] md:text-[72px] leading-[0.98] text-cocoa-deep">
          {site.contact.heading} <span className="italic">{site.contact.italic}</span>
        </h2>
        <p className="mt-8 max-w-md text-[15px] leading-[1.75] text-cocoa/75">
          {site.contact.body}
        </p>
        <a href={`mailto:${site.contact.email}`} className="mt-10 inline-block font-serif italic text-[24px] md:text-[30px] text-cocoa-deep underline decoration-cocoa/30 underline-offset-[8px] hover:decoration-cocoa-deep">
          {site.contact.email}
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
          disabled={state === "sending"}
          className={`inline-flex items-center justify-between px-6 py-4 bg-cocoa-deep text-ivory ${mono} font-bold hover:opacity-90 transition-opacity disabled:opacity-60`}
        >
          {state === "sending" ? "Sending…" : state === "sent" ? "Message sent — thank you" : state === "error" ? "Something went wrong — retry" : site.contact.submitLabel}
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

function Footer({ site }: { site: SiteContent }) {
  return (
    <footer className={`border-t ${bd} grid grid-cols-12 ${mono} text-cocoa-deep`}>
      <div className={`col-span-12 md:col-span-5 border-r ${bd} p-6 flex items-center gap-3`}>
        <img src={site.brand.logoUrl} alt="" className="h-5 w-5 object-contain" />
        <span className="font-bold italic tracking-[0.18em]">{site.brand.name}</span>
      </div>
      <div className={`col-span-6 md:col-span-3 border-r ${bd} p-6`}>
        {site.footer.tagline}
      </div>
      <div className={`col-span-6 md:col-span-2 border-r ${bd} p-6 flex gap-4 text-cocoa/70`}>
        <a href={site.footer.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-cocoa-deep">IG</a>
        <a href={site.footer.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-cocoa-deep">LI</a>
      </div>
      <a href={`mailto:${site.contact.email}`} className="col-span-12 md:col-span-2 p-6 text-right hover:bg-ivory transition-colors">
        {site.contact.email} →
      </a>
    </footer>
  );
}

function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    if (typeof window === "undefined") return;
    const h = window.location.hash.replace(/[#/]/g, "");
    if (h === "kemetwsr2025") navigate({ to: "/kemetwsr2025" });
  }, [navigate]);

  const load = useServerFn(getContent);
  const { data } = useQuery({
    queryKey: ["site-content"],
    queryFn: () => load(),
    staleTime: 60_000,
  });
  const site: SiteContent = data?.value ? mergeContent(data.value) : defaultSite;

  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const imgs = Array.from(document.images);
    if (imgs.length === 0) { setLoaded(true); return; }
    let remaining = imgs.length;
    const done = () => { remaining -= 1; if (remaining <= 0) setLoaded(true); };
    imgs.forEach((img) => {
      if (img.complete && img.naturalWidth > 0) done();
      else {
        img.addEventListener("load", done, { once: true });
        img.addEventListener("error", done, { once: true });
      }
    });
    const t = setTimeout(() => setLoaded(true), 10000);
    return () => clearTimeout(t);
  }, [site]);

  return (
    <>
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-parchment transition-opacity duration-700 ${
          loaded ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
        aria-hidden={loaded}
      >
        <div className="flex flex-col items-center gap-4">
          <img src={site.brand.logoUrl} alt="" className="h-10 w-10 object-contain animate-pulse" />
          <span className={`${mono} text-cocoa/60`}>Loading</span>
        </div>
      </div>
    <div className="min-h-screen bg-parchment text-cocoa-deep p-3 md:p-6">
      <div className={`mx-auto max-w-[1360px] border ${bd} bg-parchment relative`}>
        <Nav site={site} />
        <main>
          <Hero site={site} />
          <Work site={site} />
          <Services site={site} />
          <About site={site} />
          <Contact site={site} />
        </main>
        <Footer site={site} />
      </div>
    </div>
    </>
  );
}
