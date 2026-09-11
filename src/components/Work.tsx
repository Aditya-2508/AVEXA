import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    category: "AI / PRODUCT ENGINEERING",
    title: "AI-Powered Business Assistant",
    description:
      "An intelligent assistant concept designed to answer business questions, connect internal data, and automate repetitive workflows.",
    stack: ["LLMs", "Python", "APIs"],
  },
  {
    number: "02",
    category: "CUSTOM SOFTWARE",
    title: "Business Management Platform",
    description:
      "A scalable platform concept bringing operational workflows, business data, and real-time visibility into one system.",
    stack: ["Django", "PostgreSQL", "React"],
  },
  {
    number: "03",
    category: "AUTOMATION / DATA",
    title: "Intelligent Automation System",
    description:
      "An automation platform concept connecting business events, data processing, and automated actions through reliable workflows.",
    stack: ["Python", "Data", "Automation"],
  },
];

export function Work() {
  return (
    <section
      id="work"
      className="relative overflow-hidden bg-white py-24 lg:py-32"
    >
      <div className="container-x">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="grid gap-10 lg:grid-cols-[1fr_0.65fr] lg:items-end">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <span className="h-px w-10 bg-blue" />

              <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.22em] text-blue">
                Selected Work
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="
                mt-5
                max-w-3xl
                text-4xl
                font-black
                leading-[0.95]
                tracking-[-0.055em]
                text-navy
                sm:text-5xl
                lg:text-6xl
              "
            >
              Software built around
              <span className="text-blue"> real problems.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="border-l border-slate-200 pl-5"
          >
            <p className="text-sm leading-7 text-slate-500">
              A selection of product and engineering concepts demonstrating how
              we approach software, AI, data, and automation.
            </p>

            <p className="mt-4 font-mono text-[8px] uppercase tracking-[0.18em] text-slate-300">
              Portfolio / Engineering Concepts
            </p>
          </motion.div>
        </div>

        {/* =====================================================
            PROJECT LIST
        ====================================================== */}

        <div className="mt-16 border-t border-slate-200">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.07,
              }}
              className="
                group
                relative
                border-b
                border-slate-200
                transition-colors
                duration-300
                hover:bg-[#fbfcfe]
              "
            >
              {/* =================================================
                  PROJECT CONTENT
              ================================================== */}

              <div
                className="
                  grid
                  gap-7
                  px-1
                  py-8
                  sm:px-4
                  sm:py-10
                  lg:grid-cols-[90px_1fr_190px]
                  lg:items-center
                  lg:gap-10
                "
              >
                {/* -------------------------------------------------
                    NUMBER
                -------------------------------------------------- */}

                <div className="flex items-center gap-4 lg:block">
                  <span
                    className="
                      font-mono
                      text-[11px]
                      font-medium
                      text-slate-300
                      transition-colors
                      duration-300
                      group-hover:text-blue
                    "
                  >
                    {project.number}
                  </span>

                  <span
                    className="
                    hidden
                    h-px
                    w-8
                    bg-slate-200
                    transition-all
                    duration-300
                    group-hover:w-12
                    group-hover:bg-blue
                    lg:mt-4
                    lg:block
                  "
                  />
                </div>

                {/* -------------------------------------------------
                    PROJECT INFORMATION
                -------------------------------------------------- */}

                <div>
                  {/* Category */}
                  <p
                    className="
                      font-mono
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-slate-400
                      transition-colors
                      duration-300
                      group-hover:text-blue
                    "
                  >
                    {project.category}
                  </p>

                  {/* Title */}
                  <h3
                    className="
                      mt-3
                      text-2xl
                      font-bold
                      tracking-[-0.035em]
                      text-navy
                      transition-transform
                      duration-300
                      ease-out
                      group-hover:translate-x-1
                      sm:text-3xl
                    "
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      mt-3
                      max-w-2xl
                      text-sm
                      leading-7
                      text-slate-500
                    "
                  >
                    {project.description}
                  </p>

                  {/* Technology */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((technology) => (
                      <span
                        key={technology}
                        className="
                          border
                          border-slate-200
                          px-2.5
                          py-1
                          font-mono
                          text-[8px]
                          text-slate-500
                          transition-colors
                          duration-300
                          group-hover:border-blue/20
                          group-hover:text-navy
                        "
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                {/* -------------------------------------------------
                    ACTION
                -------------------------------------------------- */}

                <a
                  href="#contact"
                  className="
                    focus-ring
                    group/link
                    inline-flex
                    w-fit
                    items-center
                    gap-3
                    text-xs
                    font-bold
                    text-navy
                    transition-colors
                    duration-300
                    hover:text-blue
                    lg:justify-self-end
                  "
                >
                  <span>View Case Study</span>

                  <span
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      border
                      border-slate-200
                      transition-all
                      duration-300
                      group-hover/link:border-blue/30
                      group-hover/link:bg-blue
                      group-hover/link:text-white
                    "
                  >
                    <ArrowUpRight
                      size={15}
                      className="
                        transition-transform
                        duration-300
                        group-hover/link:-translate-y-0.5
                        group-hover/link:translate-x-0.5
                      "
                    />
                  </span>
                </a>
              </div>

              {/* =================================================
                  HOVER ACCENT
              ================================================== */}

              <span
                className="
                  absolute
                  bottom-0
                  left-0
                  h-[2px]
                  w-0
                  bg-blue
                  transition-all
                  duration-500
                  ease-out
                  group-hover:w-20
                "
              />
            </motion.article>
          ))}
        </div>

        {/* =====================================================
            FOOTER
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            mt-8
            flex
            flex-col
            gap-4
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p className="text-xs text-slate-400">
            Client case studies will be added as production projects launch.
          </p>

          <a
            href="#contact"
            className="
              group
              inline-flex
              items-center
              gap-2
              text-xs
              font-bold
              text-navy
              transition-colors
              duration-300
              hover:text-blue
            "
          >
            Discuss your project
            <ArrowUpRight
              size={14}
              className="
                transition-transform
                duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
