import {
  ArrowUpRight,
  Bot,
  BrainCircuit,
  Code2,
  Database,
  Layers3,
  Workflow,
} from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const services = [
  {
    number: "01",
    title: "CUSTOM SOFTWARE",
    description:
      "Tailored web applications and business platforms designed around your workflows, users, and operational requirements.",
    icon: Layers3,
  },
  {
    number: "02",
    title: "AI & MACHINE LEARNING",
    description:
      "Intelligent applications, predictive systems, machine learning solutions, and automation designed around real business use cases.",
    icon: BrainCircuit,
  },
  {
    number: "03",
    title: "AI & LLM INTEGRATION",
    description:
      "Integrate modern language models into applications, internal tools, assistants, and workflows to make software more intelligent.",
    icon: Bot,
  },
  {
    number: "04",
    title: "BACKEND & API ENGINEERING",
    description:
      "Scalable Python and Django backends, REST APIs, database architecture, authentication, integrations, and reliable infrastructure.",
    icon: Code2,
  },
  {
    number: "05",
    title: "AUTOMATION & DATA",
    description:
      "Eliminate repetitive work and turn operational data into useful workflows, dashboards, and decision-making systems.",
    icon: Workflow,
  },
  {
    number: "06",
    title: "MVP & PRODUCT DEVELOPMENT",
    description:
      "Transform product concepts into functional MVPs with the architecture and engineering foundation needed to scale.",
    icon: Database,
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#f7f9fc] py-24 sm:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-slate-200" />

        <div className="absolute -left-40 top-40 h-[500px] w-[500px] rounded-full bg-blue-100/40 blur-3xl" />

        <div className="absolute right-0 top-0 text-[16rem] font-black leading-none tracking-[-0.12em] text-slate-200/60"></div>
      </div>

      <div className="container-x relative">
        {/* HEADER */}
        <div className="grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-blue" />

              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue">
                What We Build
              </p>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="mt-6 max-w-3xl text-5xl font-black leading-[0.95] tracking-[-0.06em] text-navy sm:text-6xl"
            >
              Technology that
              <br />
              <span className="text-slate-400">solves real problems.</span>
            </motion.h2>
          </div>
        </div>

        {/* SERVICES */}
        <div className="mt-16 grid border-l border-t border-slate-200 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
                className="group relative min-h-[390px] overflow-hidden border-b border-r border-slate-200 bg-white p-7 transition-all duration-300 hover:bg-[#fbfdff] sm:p-9"
              >
                {/* Top */}
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center border border-slate-200 bg-slate-50 transition-all duration-300 group-hover:border-blue group-hover:bg-blue">
                    <Icon
                      size={20}
                      strokeWidth={1.7}
                      className="text-blue transition-colors duration-300 group-hover:text-white"
                    />
                  </div>

                  <span className="text-xs font-black tracking-[0.16em] text-slate-300">
                    {service.number}
                  </span>
                </div>

                {/* Content */}
                <div className="mt-16">
                  <h3 className="max-w-sm text-xl font-black tracking-[-0.025em] text-navy">
                    {service.title}
                  </h3>

                  <p className="mt-5 max-w-sm text-sm leading-7 text-slate-500">
                    {service.description}
                  </p>
                </div>

                {/* Bottom */}
                <div className="absolute bottom-8 left-7 right-7 flex items-center justify-between border-t border-slate-100 pt-5 sm:left-9 sm:right-9">
                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                    AVEXA Engineering
                  </span>

                  <a
                    href="#contact"
                    aria-label={`Explore ${service.title}`}
                    className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 transition-all duration-300 group-hover:border-blue group-hover:bg-blue"
                  >
                    <ArrowUpRight
                      size={16}
                      className="text-slate-500 transition-colors duration-300 group-hover:text-white"
                    />
                  </a>
                </div>

                {/* Hover accent */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue transition-all duration-500 group-hover:w-full" />
              </motion.article>
            );
          })}
        </div>

        {/* FOOTER STATEMENT */}
        <div className="mt-12 flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm leading-6 text-slate-500">
            We don't build technology for the sake of technology. Every solution
            starts with a problem worth solving.
          </p>

          <a
            href="#contact"
            className="group inline-flex w-fit items-center gap-2 text-sm font-bold text-navy"
          >
            Discuss your project
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 transition-all duration-300 group-hover:border-blue group-hover:bg-blue">
              <ArrowUpRight
                size={14}
                className="transition-colors group-hover:text-white"
              />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
