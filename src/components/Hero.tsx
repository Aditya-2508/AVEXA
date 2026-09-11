import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronDown,
  Code2,
  Database,
  GitBranch,
  Globe2,
  Layers3,
  Terminal,
} from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-74px)] overflow-hidden bg-[#f7f9fc]"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Developer grid */}
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(7,20,38,0.035) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(7,20,38,0.035) 1px, transparent 1px)
            `,
            backgroundSize: "72px 72px",
          }}
        />

        {/* Ambient blue */}
        <div className="absolute -right-[10%] top-[5%] h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle,rgba(22,119,255,.09),transparent_68%)]" />

        {/* Ambient cyan */}
        <div className="absolute -left-[10%] bottom-[-10%] h-[550px] w-[550px] rounded-full bg-[radial-gradient(circle,rgba(24,200,245,.07),transparent_68%)]" />
      </div>

      {/* =========================================================
          MAIN CONTAINER
      ========================================================== */}
      <div className="container-x relative flex min-h-[calc(100vh-74px)] items-center py-16 sm:py-20 lg:py-12">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.02fr_.98fr] xl:gap-20">
          {/* =====================================================
              LEFT — SOFTWARE ENGINEERING MESSAGE
          ====================================================== */}
          <div className="relative z-10">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="mb-7 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-blue" />

              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-blue">
                Software Engineering / AI / Automation
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-6xl text-[clamp(3.5rem,7vw,7.4rem)] font-black leading-[0.86] tracking-[-0.075em] text-navy"
            >
              WE BUILD
              <br />
              <span className="text-blue">SOFTWARE</span>
              <br />
              THAT
              <br />
              <span className="relative">
                WORKS.
                <span className="absolute -bottom-2 left-0 h-[3px] w-16 bg-cyan" />
              </span>
            </motion.h1>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.15 }}
              className="mt-9 max-w-2xl"
            >
              <p className="text-xl font-semibold leading-8 tracking-[-0.02em] text-navy sm:text-2xl">
                From backend architecture to intelligent interfaces, we engineer
                reliable digital products.
              </p>

              <p className="mt-5 max-w-xl text-[15px] leading-7 text-muted sm:text-base">
                We build scalable web applications, APIs, AI systems, automation
                platforms, data solutions, and custom software designed to solve
                real engineering and business problems.
              </p>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <a
                href="#contact"
                className="focus-ring group inline-flex h-14 items-center justify-center gap-3 bg-navy px-7 text-sm font-bold text-white transition-all duration-300 hover:bg-blue"
              >
                Start a Project
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#work"
                className="focus-ring group inline-flex h-14 items-center justify-center gap-3 border border-slate-300 bg-white px-7 text-sm font-bold text-navy transition-all duration-300 hover:border-navy"
              >
                View Our Work
                <ArrowUpRight
                  size={16}
                  className="opacity-50 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100"
                />
              </a>
            </motion.div>

            {/* Engineering stack */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2"
            ></motion.div>
          </div>

          {/* =====================================================
              RIGHT — SOFTWARE ARCHITECTURE VISUAL
          ====================================================== */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.15 }}
            className="relative hidden min-h-[610px] lg:block"
          >
            {/* =================================================
                LARGE CODE BACKGROUND
            ================================================== */}
            <div className="absolute right-0 top-1/2 w-[520px] -translate-y-1/2 select-none font-mono text-[11px] leading-7 text-navy/[0.045]">
              <div>const system = await buildApplication();</div>
              <div>system.scale();</div>
              <div>system.secure();</div>
              <div>system.deploy();</div>
              <div>system.monitor();</div>
              <div>system.optimize();</div>
            </div>

            {/* =================================================
                ARCHITECTURE AREA
            ================================================== */}
            <div className="absolute right-0 top-1/2 h-[500px] w-[560px] -translate-y-1/2">
              {/* Background technical grid */}
              <div
                className="absolute inset-0 opacity-60"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, rgba(7,20,38,0.06) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(7,20,38,0.06) 1px, transparent 1px)
                  `,
                  backgroundSize: "40px 40px",
                }}
              />

              {/* ---------------------------------------------
                  CONNECTION LINES
              ---------------------------------------------- */}

              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 560 500"
                fill="none"
              >
                <path
                  d="M80 105 C180 105 180 175 280 175"
                  stroke="rgba(22,119,255,.25)"
                />

                <path
                  d="M80 250 C180 250 180 250 280 250"
                  stroke="rgba(7,20,38,.12)"
                />

                <path
                  d="M80 395 C180 395 180 325 280 325"
                  stroke="rgba(24,200,245,.25)"
                />

                <path
                  d="M280 175 C370 175 370 130 475 130"
                  stroke="rgba(22,119,255,.22)"
                />

                <path
                  d="M280 250 C380 250 380 250 475 250"
                  stroke="rgba(7,20,38,.14)"
                />

                <path
                  d="M280 325 C370 325 370 370 475 370"
                  stroke="rgba(24,200,245,.22)"
                />

                {/* Animated path */}
                <motion.circle
                  r="4"
                  fill="#1677ff"
                  animate={{
                    cx: [80, 180, 280, 380, 475],
                    cy: [105, 105, 175, 130, 130],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </svg>

              {/* ---------------------------------------------
                  INPUT LAYER
              ---------------------------------------------- */}
              <div className="absolute left-0 top-[65px] w-[145px] space-y-3">
                <p className="mb-4 font-mono text-[9px] uppercase tracking-[0.2em] text-slate-400">
                  Input Layer
                </p>

                <TechNode
                  icon={<Globe2 size={15} />}
                  title="Web Apps"
                  subtitle="Frontend"
                />

                <TechNode
                  icon={<Code2 size={15} />}
                  title="API"
                  subtitle="Services"
                />

                <TechNode
                  icon={<Database size={15} />}
                  title="Data"
                  subtitle="Pipelines"
                />
              </div>

              {/* ---------------------------------------------
                  CORE ENGINE
              ---------------------------------------------- */}
              <motion.div
                animate={{
                  y: [0, -4, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-[210px] top-[185px] w-[145px]"
              >
                <div className="border border-blue/30 bg-white p-5 shadow-[0_20px_60px_rgba(7,20,38,.08)]">
                  <div className="flex items-center justify-between">
                    <div className="flex h-8 w-8 items-center justify-center bg-navy text-white">
                      <Layers3 size={16} />
                    </div>

                    <span className="font-mono text-[8px] text-blue">CORE</span>
                  </div>

                  <p className="mt-4 text-sm font-bold text-navy">
                    Application
                    <br />
                    Engine
                  </p>

                  <p className="mt-2 font-mono text-[8px] leading-4 text-slate-400">
                    logic / services
                    <br />
                    processing / AI
                  </p>

                  <div className="mt-4 flex gap-1">
                    <span className="h-1 flex-1 bg-blue" />
                    <span className="h-1 flex-1 bg-cyan" />
                    <span className="h-1 w-3 bg-slate-200" />
                  </div>
                </div>
              </motion.div>

              {/* ---------------------------------------------
                  OUTPUT LAYER
              ---------------------------------------------- */}
              <div className="absolute right-0 top-[90px] w-[145px] space-y-3">
                <p className="mb-4 text-right font-mono text-[9px] uppercase tracking-[0.2em] text-slate-400">
                  Output Layer
                </p>

                <TechNode
                  icon={<GitBranch size={15} />}
                  title="Automation"
                  subtitle="Workflows"
                  align="right"
                />

                <TechNode
                  icon={<Terminal size={15} />}
                  title="AI Systems"
                  subtitle="Intelligence"
                  align="right"
                />

                <TechNode
                  icon={<Database size={15} />}
                  title="Cloud"
                  subtitle="Infrastructure"
                  align="right"
                />
              </div>

              {/* ---------------------------------------------
                  DEPLOYMENT LABEL
              ---------------------------------------------- */}
            </div>

            {/* =================================================
                TERMINAL WINDOW
            ================================================== */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="absolute -bottom-1 left-0 w-[270px] border border-navy/10 bg-[#071426] shadow-[0_25px_70px_rgba(7,20,38,.15)]"
            >
              {/* Terminal header */}
              <div className="flex h-9 items-center justify-between border-b border-white/10 px-3">
                <div className="flex gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                </div>

                <span className="font-mono text-[8px] text-white/30">
                  avexa-terminal
                </span>
              </div>

              {/* Terminal content */}
              <div className="p-4 font-mono text-[9px] leading-5">
                <p className="text-white/40">$ avexa deploy --production</p>

                <p className="mt-1 text-cyan">✓ building application</p>

                <p className="text-cyan">✓ running tests</p>

                <p className="text-cyan">✓ optimizing services</p>

                <p className="text-blue">✓ deployment successful</p>

                <div className="mt-2 flex items-center gap-2">
                  <span className="text-white/30">status</span>

                  <span className="text-white">production</span>

                  <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* =========================================================
          SCROLL
      ========================================================== */}
      <a
        href="#capabilities"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[9px] font-bold uppercase tracking-[0.25em] text-slate-400 transition hover:text-navy sm:flex"
      >
        Explore Engineering
        <ChevronDown size={14} className="animate-bounce" />
      </a>
    </section>
  );
}

/* =============================================================
   TECH NODE COMPONENT
============================================================= */

function TechNode({
  icon,
  title,
  subtitle,
  align = "left",
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  align?: "left" | "right";
}) {
  const isRight = align === "right";

  return (
    <motion.div
      whileHover={{ x: isRight ? -4 : 4 }}
      transition={{ duration: 0.2 }}
      className={`group flex items-center gap-3 border border-navy/10 bg-white/90 p-3 shadow-[0_10px_30px_rgba(7,20,38,.04)] ${
        isRight ? "flex-row-reverse text-right" : ""
      }`}
    >
      <div className="flex h-8 w-8 shrink-0 items-center justify-center bg-[#f1f5f9] text-blue transition-colors duration-200 group-hover:bg-blue group-hover:text-white">
        {icon}
      </div>

      <div className="min-w-0">
        <p className="text-[10px] font-bold text-navy">{title}</p>

        <p className="mt-0.5 font-mono text-[8px] text-slate-400">{subtitle}</p>
      </div>
    </motion.div>
  );
}
