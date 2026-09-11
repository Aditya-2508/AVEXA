import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function CTA() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-[#071426] py-24 sm:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:56px_56px]" />

        <div className="absolute -right-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[120px]" />

        <div className="absolute -left-40 bottom-0 h-[350px] w-[350px] rounded-full bg-blue-500/10 blur-[100px]" />

        <div className="absolute right-8 top-8 text-[12rem] font-black leading-none tracking-[-0.12em] text-white/[0.025] sm:text-[18rem]">
          AV
        </div>
      </div>

      <div className="container-x relative">
        {/* Top label */}
        <div className="flex items-center justify-between border-b border-white/10 pb-6">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-300">
              Start a Conversation
            </span>
          </div>

          <span className="hidden text-xs font-medium text-slate-500 sm:block">
            AVEXA · ENGINEERING & TECHNOLOGY
          </span>
        </div>

        {/* Main content */}
        <div className="grid gap-16 pt-14 lg:grid-cols-[1.4fr_.6fr] lg:items-end">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl text-5xl font-black leading-[0.94] tracking-[-0.065em] text-white sm:text-7xl lg:text-[5.5rem]"
            >
              Have an idea?
              <br />
              <span className="text-slate-500">Let's build it.</span>
            </motion.h2>

            <p className="mt-8 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              From MVPs and business applications to AI-powered systems and
              dedicated engineering teams, we help turn complex ideas into
              reliable products.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="focus-ring group inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-bold text-navy transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-300"
              >
                Start a Conversation
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-navy/10 transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight size={15} />
                </span>
              </a>

              <a
                href="#expertise"
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:border-white/40 hover:bg-white/[0.05]"
              >
                Explore Capabilities
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          {/* Side panel */}
          <div className="border-t border-white/10 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
                <Sparkles size={17} className="text-cyan-300" />
              </div>

              <p className="text-sm font-semibold text-white">
                What can we build together?
              </p>
            </div>

            <div className="mt-6 space-y-4">
              {[
                "Custom Software",
                "AI & Automation",
                "MVP Development",
                "Engineering Solutions",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-4 border-b border-white/10 pb-4"
                >
                  <span className="text-[10px] font-bold text-slate-600">
                    0{index + 1}
                  </span>

                  <span className="text-sm font-medium text-slate-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-20 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-slate-500">
            From concept to production
          </p>

          <p className="text-sm text-slate-500">
            Let's turn your next idea into something real.
          </p>
        </div>
      </div>
    </section>
  );
}
