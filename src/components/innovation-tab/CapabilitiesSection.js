"use client";

import { motion } from "motion/react";

const capabilities = [
  {
    category: "Formulation Design & Food Science",
    description:
      "Our in-house R&D team works from food science and nutrition literature to build products from first principles.",
    points: [
      "Process science across extrusion, freeze-drying and fermentation, chosen product by product.",
      "Nutrient bioavailability and functional-ingredient research, from protein complementation to prebiotic and postbiotic systems.",
      "Sensory and texture science to hold taste and mouthfeel constant, whatever is re-engineered underneath.",
    ],
    accent: "#c35531",
  },
  {
    category: "Testing & Validation",
    description:
      "Every idea is tested before it becomes a commercial product, with performance checked at every stage.",
    points: [
      "Shelf-life and accelerated storage-stability studies before every commercial batch.",
      "Moisture content, water activity and texture testing throughout development.",
      "Pilot-batch trials before any scale-up.",
    ],
    accent: "#789444",
  },
  {
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
      {/* Decorative background glows */}
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
          className="pb-12 lg:pb-16"
        >
          <div className="max-w-[980px]">
            <h2 className="font-heading text-[36px] font-bold uppercase leading-[0.9] tracking-[-0.035em] text-[#c35531] sm:text-[48px] lg:text-[62px]">
              Built To Serve
            </h2>

            <h2 className="mt-1 font-heading text-[46px] font-bold uppercase leading-[0.9] tracking-[-0.035em] text-[#294526] sm:text-[58px] lg:text-[72px]">
              Capabilities
            </h2>
          </div>
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
          className="grid grid-cols-1 items-stretch gap-5 lg:grid-cols-3"
        >
          {capabilities.map((item) => (
            <motion.article
              key={item.category}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: {
                  duration: 0.25,
                  ease: "easeOut",
                },
              }}
              className="
                group relative grid min-h-[560px]
                grid-rows-[auto_auto_1fr]
                overflow-hidden rounded-[30px]
                border border-[#294526]/12
                bg-[#fffaf0]
                p-6
                shadow-[0_22px_60px_rgba(44,52,35,0.08)]
                sm:p-8
                lg:grid-rows-[150px_128px_1fr]
              "
            >
              {/* Top accent */}
              <div
                className="absolute inset-x-0 top-0 h-1.5"
                style={{
                  backgroundColor: item.accent,
                }}
              />

              {/* Fixed title row on desktop */}
              <h3 className="max-w-[360px] pt-7 font-heading text-[31px] font-bold uppercase leading-[1.02] text-[#294526] sm:text-[36px]">
                {item.category}
              </h3>

              {/* Fixed description row on desktop */}
              <p className="pt-5 text-[15px] leading-7 text-[#34422e]/72 sm:text-[16px]">
                {item.description}
              </p>

              {/* Points always begin at the same height */}
              <div className="self-start border-t border-[#294526]/12">
                {item.points.map((point) => (
                  <div
                    key={point}
                    className="border-b border-[#294526]/12 py-5 last:border-b-0"
                  >
                    <p className="text-[14px] leading-6 text-[#273321]/82 sm:text-[15px]">
                      {point}
                    </p>
                  </div>
                ))}
              </div>

              {/* Card glow */}
              <div
                className="pointer-events-none absolute bottom-[-70px] right-[-40px] h-44 w-44 rounded-full blur-[60px] transition-transform duration-500 group-hover:scale-125"
                style={{
                  backgroundColor: `${item.accent}18`,
                }}
              />
            </motion.article>
          ))}
        </motion.div>

        {/* Closing statement */}
        <motion.div
          initial={{
            opacity: 0,
            y: 26,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.45,
          }}
          transition={{
            duration: 0.7,
            delay: 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-12 border-t border-[#294526]/15 pt-10 lg:mt-16 lg:pt-14"
        >
          <p className="max-w-[1050px] font-heading text-[20px] font-bold uppercase leading-[1.15] tracking-[-0.02em] text-[#294526] sm:text-[30px] lg:text-[36px]">
            New formats. New functions.
          </p>

          <p className="mt-2 max-w-[980px] text-[16px] leading-8 text-[#34422e]/75 sm:text-[18px]">
            The kind of product that makes competitors ask how, because we
            didn&apos;t start from what already exists. We started from what
            should.
          </p>
        </motion.div>
      </div>
    </section>
  );
}