import {
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Database,
  GitBranch,
  Workflow,
} from "lucide-react";
import { motion } from "framer-motion";

const capabilities = [
  {
    number: "01",
    icon: Code2,
    title: "Backend Engineering",
    description:
      "Scalable APIs, backend systems, and application architecture.",
    stack: "Python · Django · REST",
  },
  {
    number: "02",
    icon: BrainCircuit,
    title: "AI & Machine Learning",
    description:
      "Intelligent systems, prediction, automation, and LLM solutions.",
    stack: "ML · AI · LLMs",
  },
  {
    number: "03",
    icon: Database,
    title: "Data Engineering",
    description:
      "Reliable databases, pipelines, transformation, and analytics.",
    stack: "PostgreSQL · MySQL · Data",
  },
  {
    number: "04",
    icon: Workflow,
    title: "Automation",
    description: "Connected workflows that reduce repetitive operational work.",
    stack: "APIs · Integrations · Workflows",
  },
  {
    number: "05",
    icon: GitBranch,
    title: "Software Delivery",
    description: "Structured development, testing, deployment, and iteration.",
    stack: "Git · GitHub · CI/CD",
  },
];

const technologies = [
  "Python",
  "Django",
  "REST APIs",
  "PostgreSQL",
  "MySQL",
  "JavaScript",
  "Machine Learning",
  "AI / LLMs",
  "Automation",
  "Git / GitHub",
  "Cloud",
];

export function Expertise() {
  return (
    <section
      id="expertise"
      className="relative overflow-hidden bg-white py-24 sm:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute right-0 top-0 text-[15rem] font-black leading-none tracking-[-0.12em] text-slate-100/70"></div>

      <div className="container-x relative">
        {/* HEADER */}
        <div className="grid gap-10 border-b border-slate-200 pb-12 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-blue" />

              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue">
                Technical Expertise
              </p>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-6 max-w-2xl text-5xl font-black leading-[0.95] tracking-[-0.06em] text-navy sm:text-6xl"
            >
              Engineering built
              <br />
              <span className="text-slate-400">for real systems.</span>
            </motion.h2>
          </div>
        </div>

        {/* TECHNOLOGY STACK */}
        <div className="flex flex-col gap-5 border-b border-slate-200 py-7 sm:flex-row sm:items-start sm:justify-between">
          <div className="shrink-0">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
              Technology Stack
            </p>
          </div>

          <div className="flex max-w-4xl flex-wrap gap-2 sm:justify-end">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="border border-slate-200 px-3 py-1.5 text-[10px] font-semibold text-slate-500 transition-colors duration-200 hover:border-blue/30 hover:text-blue"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        {/* CAPABILITIES */}
        <div className="mt-14">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
              Core Capabilities
            </p>

            <span className="text-[10px] font-bold text-slate-300"></span>
          </div>

          <div className="grid border-l border-t border-slate-200 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.06,
                  }}
                  className="group relative min-h-[245px] border-b border-r border-slate-200 bg-white p-7 transition-all duration-300 hover:bg-[#fafcff] sm:p-8"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-slate-300 transition-colors group-hover:text-blue">
                      {item.number}
                    </span>

                    <div className="flex h-9 w-9 items-center justify-center border border-slate-200 transition-all duration-300 group-hover:border-blue group-hover:bg-blue">
                      <Icon
                        size={16}
                        strokeWidth={1.7}
                        className="text-navy transition-colors group-hover:text-white"
                      />
                    </div>
                  </div>

                  <div className="mt-10">
                    <h3 className="text-lg font-bold tracking-tight text-navy">
                      {item.title}
                    </h3>

                    <p className="mt-3 max-w-xs text-sm leading-6 text-slate-500">
                      {item.description}
                    </p>
                  </div>

                  <div className="absolute bottom-6 left-7 right-7 flex items-center justify-between border-t border-slate-100 pt-4 sm:left-8 sm:right-8">
                    <span className="text-[9px] font-medium uppercase tracking-wider text-slate-400">
                      {item.stack}
                    </span>

                    <ArrowUpRight
                      size={14}
                      className="text-slate-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue"
                    />
                  </div>

                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue transition-all duration-300 group-hover:w-10" />
                </motion.article>
              );
            })}

            {/* CTA */}
            <a
              href="#contact"
              className="group relative flex min-h-[245px] flex-col justify-between border-b border-r border-slate-200 bg-[#071426] p-7 transition-all duration-300 hover:bg-[#0b1d33] sm:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-white/30">06</span>

                <ArrowUpRight
                  size={18}
                  className="text-cyan-300 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </div>

              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/40">
                  Have a problem to solve?
                </p>

                <h3 className="mt-3 max-w-[210px] text-2xl font-bold leading-tight tracking-[-0.04em] text-white">
                  Let's engineer the solution.
                </h3>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
