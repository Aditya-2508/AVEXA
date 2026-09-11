import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="section bg-white">
      <div className="container-x grid items-center gap-16 lg:grid-cols-2">
        {/* LEFT — ABOUT CONTENT */}
        <div>
          <SectionHeading
            eyebrow="ABOUT AVEXA"
            title={
              <>
                Technology built around{" "}
                <span className="text-blue">your business.</span>
              </>
            }
            subtitle="We engineer practical systems that solve real business problems and scale with the people using them."
          />

          <div className="mt-7 max-w-xl space-y-5 text-[15px] leading-7 text-muted">
            <p>At AVEXA, we don't believe in one-size-fits-all software.</p>

            <p>
              We understand the business problem first, then design and engineer
              the technology around it.
            </p>

            <p>
              From an early-stage MVP to a production-ready business platform,
              we combine software engineering, AI, automation, and data to
              create systems that are practical, scalable, and built for
              long-term value.
            </p>
          </div>

          {/* PRINCIPLES */}
          <div className="mt-10 grid grid-cols-3 border-y border-line">
            <div className="py-5">
              <p className="text-xl font-black text-navy">Build</p>
              <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.2em] text-blue">
                Solutions
              </p>
            </div>

            <div className="border-l border-line px-5 py-5">
              <p className="text-xl font-black text-navy">Solve</p>
              <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.2em] text-blue">
                Real Problems
              </p>
            </div>

            <div className="border-l border-line px-5 py-5">
              <p className="text-xl font-black text-navy">Create</p>
              <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.2em] text-blue">
                Lasting Impact
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT — ONLY AVEXA LOGO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center justify-center"
        >
          <motion.img
            src="/avexa-logo.png"
            alt="AVEXA — Engineering a Brighter Tomorrow"
            whileHover={{ scale: 1.025 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="
              block
              w-full
              max-w-[560px]
              object-contain
              mix-blend-multiply
              transition-all
              duration-500
              hover:drop-shadow-[0_18px_35px_rgba(21,87,214,0.10)]
            "
          />
        </motion.div>
      </div>
    </section>
  );
}
