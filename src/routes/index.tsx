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

const mono = "font-mono text-[10px] uppercase tracking-[0.2em]";

function Nav({ site }: { site: SiteContent }) {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#work", label: "Work" },
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-parchment/90 backdrop-blur-sm">
      <div className="mx-auto max-w-[1360px] px-6 md:px-10">
        <div className="flex items-center justify-between py-5 border-b border-cocoa-deep/10">
          <a href="#top" className="flex items-center gap-3">
            <img src={site.brand.logoUrl} alt={site.brand.name} className="h-5 w-5 object-contain" />
            <span className="font-serif italic text-[15px] tracking-wide">{site.brand.name}</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} className={`${mono} text-cocoa/70 hover:text-cocoa-deep transition-colors`}>
                {l.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-clay-deep opacity-60 animate-ping" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-clay-deep" />
            </span>
            <span className={`${mono} text-cocoa/70`}>{site.availability}</span>
          </div>
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden absolute left-0 right-0 top-full bg-parchment border-b border-cocoa-deep/10 px-6 py-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className={`block py-3 ${mono} text-cocoa-deep`}>
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
    <section id="top" className="pt-32 md:pt-44 pb-20 md:pb-32">
      <div className="mx-auto max-w-[1360px] px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7 flex flex-col gap-8">
            <span className={`${mono} text-clay-deep`}>{site.hero.eyebrow}</span>
            <h1 className="font-serif text-[40px] md:text-[64px] lg:text-[76px] leading-[0.98] tracking-[-0.02em] text-cocoa-deep">
              {site.hero.headline}
            </h1>
            <p className="text-[15px] md:text-[16px] leading-[1.8] text-cocoa/80 max-w-xl">
              {site.hero.description}
            </p>
          </div>
          <div className="lg:col-span-5 flex flex-col gap-10">
            {site.hero.featuredImageUrl && (
              <div className="relative overflow-hidden rounded-sm bg-ivory">
                <img
                  src={site.hero.featuredImageUrl}
                  alt={site.hero.featuredAlt}
                  className="w-full h-auto object-cover"
                />
              </div>
            )}
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {site.hero.specs.map((s) => (
                <div key={s.label} className="flex flex-col gap-1">
                  <span className={`${mono} text-cocoa/50`}>{s.label}</span>
                  <span className="font-serif italic text-[17px] text-cocoa-deep">{s.value}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#contact" className="px-7 py-3.5 bg-cocoa-deep text-ivory font-serif italic text-[15px] hover:opacity-90 transition-opacity">
                {site.hero.ctaPrimary}
              </a>
              <a href="#work" className="px-7 py-3.5 border border-cocoa-deep/20 font-serif italic text-[15px] text-cocoa-deep hover:bg-ivory transition-colors inline-flex items-center gap-2">
                {site.hero.ctaSecondary} <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Work({ site, filter }: { site: SiteContent; filter: "all" | "uiux" | "development" }) {
  const showDesign = filter === "all" || filter === "uiux";
  const showDev = filter === "all" || filter === "development";
  return (
    <section id="work" className="py-20 md:pb-32 border-t border-cocoa-deep/10">
      <div className="mx-auto max-w-[1360px] px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <h2 className="font-serif text-[32px] md:text-[48px] leading-[1.05] text-cocoa-deep">
            {site.work.heading} <span className="italic">{site.work.italic}</span>
          </h2>
          <span className={`${mono} text-cocoa/55`}>{site.work.count}</span>
        </div>
        {showDesign && <WorkGroup label="Design" projects={site.designProjects} />}
        {showDev && <WorkGroup label="Development" projects={site.developmentProjects} />}
      </div>
    </section>
  );
}

function WorkGroup({ label, projects }: { label: string; projects: Project[] }) {
  return (
    <div className="mb-20 last:mb-0">
      <div className="flex items-center gap-4 mb-10">
        <span className="h-px w-10 bg-cocoa-deep/20" />
        <span className={`${mono} text-cocoa/60`}>{label}</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
        {projects.map((p) => (
          <ProjectCard key={p.name} project={p} group={label} />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project, group }: { project: Project; group: string }) {
  const ctaLabel = group === "Development" ? "View website" : "View case";
  return (
    <a
      href={project.link || "#contact"}
      target={project.link ? "_blank" : undefined}
      rel={project.link ? "noopener noreferrer" : undefined}
      className="group flex flex-col gap-6"
    >
      <div className="relative bg-ivory rounded-sm overflow-hidden aspect-[4/3] flex items-center justify-center p-8 md:p-12">
        <img
          src={project.image}
          alt={project.name}
          loading="lazy"
          className="max-h-full max-w-full object-contain transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span className={`${mono} text-cocoa/50`}>{project.year} · {project.discipline}</span>
          <span className="inline-flex items-center gap-1.5 font-serif italic text-[14px] text-cocoa-deep group-hover:text-clay-deep transition-colors">
            {ctaLabel} <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </div>
        <h3 className="font-serif text-[26px] md:text-[32px] leading-[1.05] text-cocoa-deep">
          {project.name}
        </h3>
        <p className="text-[14px] leading-[1.75] text-cocoa/70 max-w-sm">
          {project.tagline}
        </p>
      </div>
    </a>
  );
}

function Services({ site, filter, setFilter }: { site: SiteContent; filter: "all" | "uiux" | "development"; setFilter: (f: "all" | "uiux" | "development") => void }) {
  return (
    <section id="services" className="py-20 md:py-32 bg-ivory border-b border-cocoa-deep/10">
      <div className="mx-auto max-w-[1360px] px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="font-serif text-[32px] md:text-[48px] leading-[1.05] text-cocoa-deep">
              What we do. <span className="italic">With focus.</span>
            </h2>
          </div>
          <div className="lg:col-span-8">
            <ol className="flex flex-col divide-y divide-cocoa-deep/10" role="tablist" aria-label="Project filters">
              {site.services.map((s) => {
                const active = filter === s.filter;
                return (
                  <li key={s.title} className="group py-8 first:pt-0 last:pb-0">
                    <button
                      onClick={() => {
                        setFilter(s.filter);
                        const work = document.getElementById("work");
                        if (work) work.scrollIntoView({ behavior: "smooth", block: "start" });
                      }}
                      role="tab"
                      aria-selected={active}
                      className={`w-full flex items-start gap-6 text-left transition-colors ${active ? "text-cocoa-deep" : "text-cocoa/70 hover:text-cocoa-deep"}`}
                    >
                      <span className={`${mono} mt-2 ${active ? "text-clay-deep" : "text-cocoa/40"}`}>{s.n}</span>
                      <div className="flex-1">
                        <h3 className="font-serif text-[24px] md:text-[30px] leading-[1.1] mb-3">
                          {s.title}
                        </h3>
                        <p className={`text-[14px] leading-[1.75] max-w-xl ${active ? "text-cocoa/80" : "text-cocoa/60"}`}>
                          {s.body}
                        </p>
                      </div>
                      <ArrowUpRight className={`h-4 w-4 mt-3 transition-all ${active ? "text-cocoa-deep -translate-y-0.5 translate-x-0.5" : "text-cocoa/25 group-hover:text-cocoa-deep group-hover:-translate-y-0.5 group-hover:translate-x-0.5"}`} />
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

function About({ site }: { site: SiteContent }) {
  return (
    <section id="about" className="py-20 md:py-32 border-t border-cocoa-deep/10">
      <div className="mx-auto max-w-[1360px] px-6 md:px-10">
        <div className="max-w-3xl">
          <span className={`${mono} text-clay-deep mb-8 block`}>Studio Note</span>
          <p className="font-serif italic text-[22px] md:text-[32px] leading-[1.45] text-cocoa-deep/90">
            {site.about.note}
          </p>
        </div>
      </div>
    </section>
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
    <section id="contact" className="py-20 md:py-32 bg-cocoa-deep text-ivory">
      <div className="mx-auto max-w-[1360px] px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div className="flex flex-col gap-8">
            <span className={`${mono} text-ivory/50`}>Enquire</span>
            <h2 className="font-serif text-[40px] md:text-[64px] leading-[0.98] text-ivory">
              {site.contact.heading} <span className="italic">{site.contact.italic}</span>
            </h2>
            <p className="max-w-md text-[15px] leading-[1.8] text-ivory/70">
              {site.contact.body}
            </p>
            <a href={`mailto:${site.contact.email}`} className="font-serif italic text-[22px] md:text-[28px] text-ivory underline decoration-ivory/30 underline-offset-[8px] hover:decoration-ivory transition-colors">
              {site.contact.email}
            </a>
            <div className="flex flex-col gap-3 pt-2">
              <span className={`${mono} text-ivory/50`}>Or schedule directly</span>
              <a
                href={site.contact.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 self-start border border-ivory/20 px-5 py-3 font-serif italic text-[14px] text-ivory hover:bg-ivory/10 transition-colors"
              >
                {site.contact.bookingLabel} <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
          <form onSubmit={onSubmit} className="flex flex-col gap-8">
            <Field name="name" label="Name" placeholder="Your name" variant="dark" />
            <Field name="email" label="Email" type="email" placeholder="you@studio.com" variant="dark" />
            <div>
              <label className={`mb-3 block ${mono} text-ivory/50`}>The project</label>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="A few sentences about what you're building…"
                className="w-full border border-ivory/15 bg-ivory/5 px-4 py-3 text-[15px] text-ivory placeholder:text-ivory/30 focus:border-ivory/40 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              disabled={state === "sending"}
              className="inline-flex items-center justify-between px-6 py-4 bg-ivory text-cocoa-deep font-serif italic text-[15px] hover:opacity-90 transition-opacity disabled:opacity-60"
            >
              {state === "sending" ? "Sending…" : state === "sent" ? "Message sent — thank you" : state === "error" ? "Something went wrong — retry" : site.contact.submitLabel}
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ name, label, type = "text", placeholder, variant = "light" }: { name: string; label: string; type?: string; placeholder?: string; variant?: "light" | "dark" }) {
  const isDark = variant === "dark";
  return (
    <div>
      <label className={`mb-3 block ${mono} ${isDark ? "text-ivory/50" : "text-cocoa/60"}`}>{label}</label>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className={`w-full border px-4 py-3 text-[15px] focus:outline-none ${
          isDark
            ? "border-ivory/15 bg-ivory/5 text-ivory placeholder:text-ivory/30 focus:border-ivory/40"
            : "border-cocoa-deep/15 bg-parchment/40 text-cocoa-deep placeholder:text-cocoa/40 focus:border-cocoa-deep"
        }`}
      />
    </div>
  );
}

function Footer({ site }: { site: SiteContent }) {
  return (
    <footer className="py-10 border-t border-cocoa-deep/10">
      <div className="mx-auto max-w-[1360px] px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={site.brand.logoUrl} alt="" className="h-5 w-5 object-contain" />
          <span className="font-serif italic text-[15px]">{site.brand.name}</span>
        </div>
        <span className={`${mono} text-cocoa/50 text-center`}>{site.footer.tagline}</span>
        <div className="flex items-center gap-6">
          <a href={site.footer.instagramUrl} target="_blank" rel="noopener noreferrer" className={`${mono} text-cocoa/60 hover:text-cocoa-deep transition-colors`}>IG</a>
          <a href={site.footer.linkedinUrl} target="_blank" rel="noopener noreferrer" className={`${mono} text-cocoa/60 hover:text-cocoa-deep transition-colors`}>LI</a>
          <a href={`mailto:${site.contact.email}`} className={`${mono} text-cocoa/60 hover:text-cocoa-deep transition-colors`}>Email</a>
        </div>
      </div>
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

  const [filter, setFilter] = useState<"all" | "uiux" | "development">("all");

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
      <div className="min-h-screen bg-parchment text-cocoa-deep">
        <Nav site={site} />
        <main>
          <Hero site={site} />
          <Services site={site} filter={filter} setFilter={setFilter} />
          <Work site={site} filter={filter} />
          <About site={site} />
          <Contact site={site} />
        </main>
        <Footer site={site} />
      </div>
    </>
  );
}
