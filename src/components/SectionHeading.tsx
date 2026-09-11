import { motion } from "framer-motion";

type SectionHeadingProps = {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* Eyebrow */}
      <div className="flex items-center gap-3">
        <span className={`h-px w-7 ${light ? "bg-cyan" : "bg-blue"}`} />

        <span
          className={`
            font-mono
            text-[9px]
            font-semibold
            uppercase
            tracking-[0.2em]
            ${light ? "text-cyan" : "text-blue"}
          `}
        >
          {eyebrow}
        </span>
      </div>

      {/* Title */}
      <h2
        className={`
          mt-5
          max-w-3xl
          text-4xl
          font-black
          leading-[0.96]
          tracking-[-0.055em]
          sm:text-5xl
          lg:text-[3.4rem]
          ${light ? "text-white" : "text-navy"}
        `}
      >
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p
          className={`
            mt-5
            max-w-2xl
            text-[15px]
            leading-7
            sm:text-base
            ${light ? "text-slate-300" : "text-slate-500"}
          `}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
