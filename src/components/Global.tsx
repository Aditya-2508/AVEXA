import { ArrowUpRight, Globe2, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const markets = [
  {
    number: "01",
    name: "INDIA",
    description: "Engineering base",
  },
  {
    number: "02",
    name: "UK",
    description: "Client collaboration",
  },
  {
    number: "03",
    name: "EUROPE",
    description: "Technology partnerships",
  },
  {
    number: "04",
    name: "GLOBAL",
    description: "Remote delivery",
  },
];

export function Global() {
  return (
    <section
      id="global"
      className="relative overflow-hidden bg-white py-24 sm:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-slate-200" />

        <div className="absolute -right-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-blue-50 blur-3xl" />

        <div className="absolute right-0 top-0 text-[16rem] font-black leading-none tracking-[-0.12em] text-slate-100/70"></div>
      </div>

      <div className="container-x relative">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-6">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-blue" />
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue">
              Global Reach
            </p>
          </div>
        </div>

        {/* Main */}
        <div className="grid gap-16 pt-14 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:gap-20">
          {/* LEFT */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl text-5xl font-black leading-[0.94] tracking-[-0.06em] text-navy sm:text-6xl lg:text-7xl"
            >
              Built in India.
              <br />
              <span className="text-slate-400">Ready for the world.</span>
            </motion.h2>

            <p className="mt-8 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
              AVEXA works remotely with startups, businesses, and technology
              teams across geographies. We combine clear communication,
              engineering discipline, and dependable delivery to build products
              without borders.
            </p>

            {/* Location */}
            <div className="mt-8 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-slate-50">
                <MapPin size={15} className="text-blue" />
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                  Engineering Base
                </p>
                <p className="mt-0.5 text-sm font-bold text-navy">
                  India · Serving Global Markets
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT — MARKET PANEL */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="overflow-hidden border border-slate-200 bg-[#f8fafc]">
              {/* Panel heading */}
              <div className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-5">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                    Market Coverage
                  </p>
                  <p className="mt-1 text-sm font-bold text-navy">
                    Where we collaborate
                  </p>
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200">
                  <ArrowUpRight size={15} className="text-slate-500" />
                </div>
              </div>

              {/* Markets */}
              <div className="grid grid-cols-2">
                {markets.map((market, index) => (
                  <div
                    key={market.name}
                    className={`group relative min-h-[145px] border-slate-200 p-6 transition-colors duration-300 hover:bg-white ${
                      index < 2 ? "border-b" : ""
                    } ${index % 2 === 0 ? "border-r" : ""}`}
                  >
                    <div className="flex items-start justify-between">
                      <span className="text-[10px] font-bold tracking-widest text-slate-300">
                        {market.number}
                      </span>

                      <span className="h-1.5 w-1.5 rounded-full bg-slate-300 transition-colors duration-300 group-hover:bg-blue" />
                    </div>

                    <div className="mt-8">
                      <p className="text-lg font-black tracking-[0.04em] text-navy">
                        {market.name}
                      </p>

                      <p className="mt-1 text-xs text-slate-400">
                        {market.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom statement */}
        <div className="mt-20 border-t border-slate-200 pt-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-sm leading-6 text-slate-500">
              Strong engineering doesn't need a physical border. We work with
              teams wherever great products are being built.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
