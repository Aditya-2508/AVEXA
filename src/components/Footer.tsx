import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { Logo } from "./Logo";

const navigation = [
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#solutions" },
  { label: "Expertise", href: "#expertise" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    icon: Linkedin,
    href: "#",
  },
  {
    label: "GitHub",
    icon: Github,
    href: "#",
  },
  {
    label: "Email",
    icon: Mail,
    href: "mailto:hello@avexa.com",
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#071426] text-white">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:64px_64px]" />

        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[120px]" />

        <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-cyan-400/5 blur-[100px]" />
      </div>

      <div className="container-x relative">
        {/* BRAND STATEMENT */}
        <div className="border-b border-white/10 py-16 sm:py-20">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <div className="mb-7">
                <Logo light />
              </div>

              <h2 className="max-w-3xl text-3xl font-black leading-tight tracking-[-0.045em] text-white sm:text-4xl">
                Engineering ideas into{" "}
                <span className="text-slate-500">real-world technology.</span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-6 text-slate-400">
                Software engineering, AI, and digital solutions built with
                clarity, precision, and long-term thinking.
              </p>
            </div>

            <div className="flex items-center gap-3 lg:pb-1">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                Software Engineering & AI
              </span>
            </div>
          </div>
        </div>

        {/* LINKS */}
        <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-[1fr_220px_220px]">
          {/* COMPANY */}
          <div>
            <p className="max-w-sm text-sm leading-7 text-slate-400">
              We work with startups, businesses, and technology teams to build
              reliable software and intelligent systems.
            </p>

            <a
              href="#contact"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-bold text-white"
            >
              Start a conversation
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 transition-all duration-300 group-hover:border-cyan-300 group-hover:bg-cyan-300 group-hover:text-navy">
                <ArrowUpRight size={14} />
              </span>
            </a>
          </div>

          {/* NAVIGATION */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
              Navigate
            </p>

            <nav className="mt-5 grid gap-3">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group flex w-fit items-center gap-2 text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-white"
                >
                  <span>{item.label}</span>

                  <ArrowUpRight
                    size={12}
                    className="opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </a>
              ))}
            </nav>
          </div>

          {/* CONNECT */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
              Connect
            </p>

            <div className="mt-5 grid gap-3">
              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="group flex w-fit items-center gap-3 text-sm font-medium text-slate-400 transition-colors duration-200 hover:text-white"
                  >
                    <Icon
                      size={15}
                      strokeWidth={1.8}
                      className="transition-colors duration-200 group-hover:text-cyan-300"
                    />

                    <span>{item.label}</span>

                    <ArrowUpRight
                      size={12}
                      className="opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col gap-5 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] font-medium text-slate-500">
            © 2026 AVEXA. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-[11px] font-medium text-slate-500">
            <span>Built in India</span>
            <span className="h-1 w-1 rounded-full bg-slate-700" />
            <span>Serving Global Markets</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
