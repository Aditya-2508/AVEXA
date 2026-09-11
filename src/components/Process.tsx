import { motion } from "framer-motion";
import {
  Search,
  Target,
  PenTool,
  Code2,
  ShieldCheck,
  Rocket,
  ArrowDownRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "DISCOVER",
    description:
      "Understand your business, users, goals, constraints, and technical requirements before writing a single line of code.",
    icon: Search,
  },
  {
    number: "02",
    title: "DEFINE",
    description:
      "Translate requirements into a clear product scope, technical strategy, architecture, and actionable roadmap.",
    icon: Target,
  },
  {
    number: "03",
    title: "DESIGN",
    description:
      "Create intuitive experiences and robust system architecture designed around usability, scalability, and performance.",
    icon: PenTool,
  },
  {
    number: "04",
    title: "DEVELOP",
    description:
      "Build clean, maintainable, scalable, and production-ready software using modern engineering practices.",
    icon: Code2,
  },
  {
    number: "05",
    title: "TEST",
    description:
      "Validate functionality, reliability, performance, security, and edge cases before the product reaches users.",
    icon: ShieldCheck,
  },
  {
    number: "06",
    title: "LAUNCH & EVOLVE",
    description:
      "Deploy, monitor, optimize, and continuously improve the product as your business and users evolve.",
    icon: Rocket,
  },
];

export function Process() {
  return (
    <section
      id="solutions"
      className="relative overflow-hidden bg-[#f7f9fc] py-24 sm:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-slate-200" />

        <div className="absolute -left-40 top-40 h-[450px] w-[450px] rounded-full bg-blue-100/40 blur-3xl" />

        <div className="absolute right-0 top-0 text-[15rem] font-black leading-none tracking-[-0.12em] text-slate-200/50"></div>
      </div>

      <div className="container-x relative">
        {/* HEADER */}
        <div className="grid gap-8 border-b border-slate-200 pb-12 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-blue" />

              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue">
                Development Process
              </p>
            </div>

            <h2 className="mt-6 max-w-3xl text-5xl font-black leading-[0.95] tracking-[-0.06em] text-navy sm:text-6xl">
              From idea
              <br />
              <span className="text-slate-400">to impact.</span>
            </h2>
          </div>
        </div>

        {/* PROCESS GRID */}
        <div className="mt-14 grid border-l border-t border-slate-200 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                }}
                className="group relative min-h-[290px] border-b border-r border-slate-200 bg-white p-7 transition-colors duration-300 hover:bg-[#fbfdff] sm:p-8 lg:p-9"
              >
                {/* Number */}
                <div className="flex items-start justify-between">
                  <span className="text-xs font-black tracking-[0.12em] text-blue">
                    {step.number}
                  </span>

                  <div className="flex h-10 w-10 items-center justify-center border border-slate-200 bg-slate-50 transition-all duration-300 group-hover:border-blue group-hover:bg-blue">
                    <Icon
                      size={17}
                      strokeWidth={1.7}
                      className="text-slate-500 transition-colors duration-300 group-hover:text-white"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="mt-14">
                  <h3 className="text-xl font-black tracking-[-0.025em] text-navy">
                    {step.title}
                  </h3>

                  <p className="mt-4 max-w-sm text-sm leading-7 text-slate-500">
                    {step.description}
                  </p>
                </div>

                {/* Hover indicator */}
                <div className="absolute bottom-7 right-7 flex h-7 w-7 items-center justify-center opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                  <ArrowDownRight size={16} className="text-blue" />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
