import { ArrowUpRight, Code2 } from "lucide-react";
import { motion } from "framer-motion";

const founders = [
  {
    number: "01",
    name: "Vikas Amale",
    role: "Co-Founder · Software Engineer",
    description:
      "Focused on backend architecture, intelligent systems, and scalable software products.",
    focus: [
      "Python",
      "Django",
      "Backend Engineering",
      "AI / ML",
      "REST APIs",
      "Database Systems",
    ],
  },
  {
    number: "02",
    name: "Aditya Satpute",
    role: "Co-Founder · Software Engineer",
    description:
      "Focused on application engineering, automation, and building reliable end-to-end solutions.",
    focus: [
      "Software Engineering",
      "Application Development",
      "AI / Automation",
      "System Development",
      "Full-Stack Solutions",
    ],
  },
];

export function Founders() {
  return (
    <section
      id="founders"
      className="relative overflow-hidden bg-[#f7f9fc] py-24 sm:py-32"
    >
      {/* Subtle background detail */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-px w-full -translate-x-1/2 bg-slate-200" />
        <div className="absolute -right-40 top-20 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl" />
      </div>

      <div className="container-x relative">
        {/* HEADER */}
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-blue" />
              <p className="text-[11px] font-bold tracking-[0.2em] text-blue">
                THE PEOPLE BEHIND THE WORK
              </p>
            </div>

            <h2 className="mt-6 max-w-xl text-4xl font-black tracking-[-0.055em] text-navy sm:text-5xl lg:text-6xl">
              Built by engineers.
              <br />
              <span className="text-slate-400">Driven by vision.</span>
            </h2>
          </div>
        </div>

        {/* FOUNDERS */}
        <div className="mt-16 grid gap-5 lg:grid-cols-2">
          {founders.map((founder, index) => (
            <motion.article
              key={founder.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              className="group relative overflow-hidden border border-slate-200 bg-white"
            >
              {/* Top line */}
              <div className="h-1 w-full bg-navy transition-all duration-500 group-hover:bg-blue" />

              <div className="p-7 sm:p-9 lg:p-10">
                {/* NUMBER + ICON */}
                <div className="flex items-start justify-between">
                  <span className="text-sm font-bold tracking-widest text-slate-300">
                    {founder.number}
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center border border-slate-200 bg-slate-50 transition-all duration-300 group-hover:border-blue group-hover:bg-blue">
                    <Code2
                      size={19}
                      strokeWidth={1.8}
                      className="text-slate-500 transition-colors duration-300 group-hover:text-white"
                    />
                  </div>
                </div>

                {/* NAME */}
                <div className="mt-12">
                  <h3 className="text-3xl font-black tracking-[-0.04em] text-navy sm:text-4xl">
                    {founder.name}
                  </h3>

                  <p className="mt-2 text-sm font-semibold text-blue">
                    {founder.role}
                  </p>

                  <p className="mt-6 max-w-lg text-[15px] leading-7 text-slate-500">
                    {founder.description}
                  </p>
                </div>

                {/* DIVIDER */}
                <div className="my-8 h-px bg-slate-100" />

                {/* EXPERTISE */}
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                    Core Expertise
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {founder.focus.map((skill) => (
                      <span
                        key={skill}
                        className="border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600 transition-colors duration-200 group-hover:border-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* FOOTER STATEMENT */}
        <div className="mt-16 border-l-2 border-blue pl-6">
          <p className="max-w-3xl text-xl font-medium leading-8 tracking-[-0.02em] text-navy sm:text-2xl">
            “Good technology should not just work. It should create an
            advantage.”
          </p>
        </div>
      </div>
    </section>
  );
}
