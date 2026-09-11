import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X, Circle } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  ["01", "Services", "#services"],
  ["02", "Solutions", "#solutions"],
  ["03", "Expertise", "#expertise"],
  ["04", "Work", "#work"],
  ["05", "About", "#about"],
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  /* =========================================================
     SCROLL STATE
  ========================================================== */

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  /* =========================================================
     ACTIVE SECTION
  ========================================================== */

  useEffect(() => {
    const sections = links
      .map(([, , href]) => document.querySelector(href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActive(`#${visible[0].target.id}`);
        }
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5],
      },
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  /* =========================================================
     ESCAPE KEY
  ========================================================== */

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  /* =========================================================
     BODY LOCK ON MOBILE MENU
  ========================================================== */

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /* =========================================================
     NAVIGATION CLICK
  ========================================================== */

  const handleNavigation = (href: string) => {
    setOpen(false);
    setActive(href);
  };

  return (
    <header
      className={`
        fixed inset-x-0 top-0 z-50
        transition-all duration-300
        ${
          scrolled
            ? "border-b border-slate-200/80 bg-white/90 shadow-[0_8px_30px_rgba(7,20,38,.05)] backdrop-blur-xl"
            : "bg-white/75 backdrop-blur-md"
        }
      `}
    >
      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <nav
        className={`
          container-x relative flex items-center justify-between
          transition-all duration-300
          ${scrolled ? "h-[68px]" : "h-[76px]"}
        `}
        aria-label="Main navigation"
      >
        {/* ===================================================
            LOGO / BRAND
        ==================================================== */}

        <a
          href="#home"
          onClick={() => handleNavigation("#home")}
          className="group flex items-center gap-4"
          aria-label="AVEXA Home"
        >
          <Logo />

          {/* Vertical divider */}
          <span className="hidden h-7 w-px bg-slate-200 sm:block" />

          {/* Engineering label */}
          <div className="hidden sm:block">
            <p className="font-mono text-[8px] font-semibold uppercase tracking-[0.2em] text-slate-400">
              Software
            </p>

            <p className="mt-0.5 font-mono text-[8px] font-semibold uppercase tracking-[0.2em] text-navy">
              Engineering
            </p>
          </div>
        </a>

        {/* ===================================================
            DESKTOP NAVIGATION
        ==================================================== */}

        <div className="hidden items-center lg:flex">
          {/* Navigation */}
          <div className="flex items-center gap-1">
            {links.map(([number, label, href]) => {
              const isActive = active === href;

              return (
                <a
                  key={href}
                  href={href}
                  onClick={() => handleNavigation(href)}
                  className={`
                    group relative flex items-center gap-2
                    px-4 py-3
                    text-[13px] font-semibold
                    transition-colors duration-200
                    ${isActive ? "text-navy" : "text-slate-500 hover:text-navy"}
                  `}
                >
                  {/* Number */}
                  <span
                    className={`
                      font-mono text-[8px]
                      transition-colors duration-200
                      ${
                        isActive
                          ? "text-blue"
                          : "text-slate-300 group-hover:text-blue"
                      }
                    `}
                  >
                    {number}
                  </span>

                  {/* Label */}
                  <span>{label}</span>

                  {/* Active line */}
                  <span
                    className={`
                      absolute bottom-1 left-4 right-4 h-px
                      origin-left bg-blue
                      transition-transform duration-300
                      ${
                        isActive
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }
                    `}
                  />
                </a>
              );
            })}
          </div>

          {/* =================================================
              DIVIDER
          ================================================== */}

          <div className="mx-5 h-7 w-px bg-slate-200" />

          {/* =================================================
              AVAILABILITY
          ================================================== */}

          <div className="mr-5 hidden items-center gap-2 xl:flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-50" />

              <Circle
                size={8}
                fill="currentColor"
                className="relative text-cyan"
              />
            </span>

            <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.14em] text-slate-400">
              Available
            </span>
          </div>

          {/* =================================================
              CTA
          ================================================== */}

          <a
            href="#contact"
            onClick={() => handleNavigation("#contact")}
            className="
              group
              inline-flex h-11
              items-center justify-center
              gap-3
              bg-navy
              px-5
              text-[12px]
              font-bold
              text-white
              transition-all
              duration-300
              hover:bg-blue
            "
          >
            <span>Start a Project</span>

            <ArrowUpRight
              size={15}
              strokeWidth={2}
              className="
                transition-transform
                duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />
          </a>
        </div>

        {/* ===================================================
            MOBILE MENU BUTTON
        ==================================================== */}

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="
            focus-ring
            flex h-11 w-11
            items-center justify-center
            border border-slate-200
            bg-white
            text-navy
            transition
            hover:border-navy
            lg:hidden
          "
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? (
            <X size={20} strokeWidth={1.8} />
          ) : (
            <Menu size={20} strokeWidth={1.8} />
          )}
        </button>
      </nav>

      {/* =======================================================
          MOBILE NAVIGATION
      ======================================================== */}

      <div
        id="mobile-navigation"
        className={`
          overflow-hidden
          border-t border-slate-200
          bg-white
          transition-all duration-300
          lg:hidden
          ${open ? "max-h-[calc(100vh-68px)] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="container-x px-0 pb-6 pt-4">
          {/* Mobile header */}
          <div className="mb-3 flex items-center justify-between px-2">
            <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-slate-400">
              Navigation
            </span>

            <span className="font-mono text-[8px] text-slate-300">
              AV / 2026
            </span>
          </div>

          {/* Links */}
          <div className="space-y-1">
            {links.map(([number, label, href]) => {
              const isActive = active === href;

              return (
                <a
                  key={href}
                  href={href}
                  onClick={() => handleNavigation(href)}
                  className={`
                    group
                    flex items-center
                    justify-between
                    border-b border-slate-100
                    px-3 py-4
                    transition-colors
                    ${isActive ? "bg-[#f7f9fc]" : "hover:bg-[#f7f9fc]"}
                  `}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`
                        font-mono text-[9px]
                        ${isActive ? "text-blue" : "text-slate-300"}
                      `}
                    >
                      {number}
                    </span>

                    <span
                      className={`
                        text-base font-semibold
                        ${isActive ? "text-navy" : "text-slate-600"}
                      `}
                    >
                      {label}
                    </span>
                  </div>

                  <ArrowUpRight
                    size={15}
                    className={`
                      transition-all duration-200
                      ${
                        isActive
                          ? "text-blue"
                          : "text-slate-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-navy"
                      }
                    `}
                  />
                </a>
              );
            })}
          </div>

          {/* Mobile CTA */}
          <a
            href="#contact"
            onClick={() => handleNavigation("#contact")}
            className="
              mt-5
              flex h-14
              items-center
              justify-between
              bg-navy
              px-5
              text-sm
              font-bold
              text-white
              transition
              hover:bg-blue
            "
          >
            <span>Start a Project</span>

            <ArrowUpRight size={18} />
          </a>

          {/* Mobile availability */}
          <div className="mt-5 flex items-center justify-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan" />

            <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-slate-400">
              Currently accepting new projects
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
