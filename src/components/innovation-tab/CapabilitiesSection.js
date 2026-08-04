"use client";

import { motion } from "motion/react";

const capabilities = [
  {
    number: "01",
    category: "Formulation Design & Food Science",
    description:
      "Our in-house R&D team works from food science and nutrition literature to build products from first principles.",
    points: [
      "Process science across extrusion, freeze-drying and fermentation — chosen product by product.",
      "Nutrient bioavailability and functional-ingredient research, from protein complementation to prebiotic and postbiotic systems.",
      "Sensory and texture science to hold taste and mouthfeel constant, whatever is re-engineered underneath.",
    ],
    accent: "#c35531",
  },
  {
    number: "02",
    category: "Testing & Validation",
    description:
      "Every idea is tested before it becomes a commercial product, with performance checked at every meaningful stage.",
    points: [
      "Shelf-life and accelerated storage-stability studies before every commercial batch.",
      "Moisture content, water activity and texture testing throughout development.",
      "Pilot-batch trials before any scale-up.",
    ],
    accent: "#789444",
  },
  {
    number: "03",
    category: "Regulatory Science",
    description:
      "Products are designed for the markets they are intended to enter, not adjusted after the fact.",
    points: [
      "Formulated against global food safety and labelling frameworks.",
      "Every claim backed by measurable, label-ready nutritional data.",
      "Formulated to qualify the specific markets it is headed to.",
    ],
    accent: "#d89a2b",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function CapabilitiesSection() {
  return (
    <section className="relative overflow-hidden bg-[#f2e5cc] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
      <div className="pointer-events-none absolute left-[-100px] top-[80px] h-[320px] w-[320px] rounded-full bg-[#c35531]/10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-[-120px] right-[-80px] h-[380px] w-[380px] rounded-full bg-[#789444]/10 blur-[130px]" />

      <div className="relative mx-auto max-w-[1380px]">
        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 28,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="grid grid-cols-1 gap-8 border-b border-[#294526]/15 pb-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-end lg:gap-20 lg:pb-16"
        >
          <div>
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.32em] text-[#c35531] sm:text-[12px]">
              Capabilities
            </p>

            <h2 className="font-heading text-[46px] font-bold uppercase leading-[0.92] tracking-[-0.03em] text-[#294526] sm:text-[58px] lg:text-[72px]">
              Built To Solve
            </h2>
          </div>

          <p className="max-w-[760px] text-[17px] leading-8 text-[#34422e]/75 sm:text-[19px]">
            New formats. New functions. The kind of product that makes
            competitors ask how — because we didn&apos;t start from what already
            exists, we started from what should.
          </p>
        </motion.div>

        {/* Capability cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.12,
          }}
          className="mt-12 grid grid-cols-1 gap-5 lg:mt-16 lg:grid-cols-3"
        >
          {capabilities.map((item) => (
            <motion.article
              key={item.number}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: {
                  duration: 0.25,
                  ease: "easeOut",
                },
              }}
              className="group relative min-h-[520px] overflow-hidden rounded-[30px] border border-[#294526]/12 bg-[#fffaf0] p-6 shadow-[0_22px_60px_rgba(44,52,35,0.08)] sm:p-8"
            >
              {/* Accent bar */}
              <div
                className="absolute inset-x-0 top-0 h-1.5"
                style={{
                  backgroundColor: item.accent,
                }}
              />

              <div className="flex items-start justify-between gap-5">
                <span
                  className="text-[11px] font-bold tracking-[0.2em]"
                  style={{
                    color: item.accent,
                  }}
                >
                  {item.number}
                </span>

                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{
                    backgroundColor: item.accent,
                  }}
                />
              </div>

              <h3 className="mt-14 max-w-[320px] font-heading text-[31px] font-bold uppercase leading-[1.02] text-[#294526] sm:text-[36px]">
                {item.category}
              </h3>

              <p className="mt-5 text-[15px] leading-7 text-[#34422e]/72 sm:text-[16px]">
                {item.description}
              </p>

              <div className="mt-8 space-y-5">
                {item.points.map((point) => (
                  <div
                    key={point}
                    className="flex gap-4 border-t border-[#294526]/10 pt-5"
                  >
                    <span
                      className="mt-2 h-2 w-2 shrink-0 rounded-full"
                      style={{
                        backgroundColor: item.accent,
                      }}
                    />

                    <p className="text-[14px] leading-6 text-[#273321]/82 sm:text-[15px]">
                      {point}
                    </p>
                  </div>
                ))}
              </div>

              <div
                className="pointer-events-none absolute bottom-[-70px] right-[-40px] h-44 w-44 rounded-full blur-[60px] transition-transform duration-500 group-hover:scale-125"
                style={{
                  backgroundColor: `${item.accent}18`,
                }}
              />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}