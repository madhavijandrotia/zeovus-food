"use client";

import { motion } from "motion/react";

const STAGES = [
  {
    stage: "Stage One",
    title: "The Sourcing Instinct",
    description:
      "It began with a simple obsession: find the ingredient that's genuinely the best of its kind, wherever it comes from, and refuse to settle for a substitute.",
  },
  {
    stage: "Stage Two",
    title: "Building the Infrastructure",
    description:
      "Sourcing well wasn't enough. We built manufacturing capability around it — milling, extrusion, freeze-drying, retort — so the quality we found at origin didn't get lost on the way to a shelf.",
  },
  {
    stage: "Stage Three",
    title: "Engineering the Standard",
    description:
      'We formalised what "trust" actually means in practice: a quality architecture built to catch what a visual check never would, applied to everything we touch, without exception.',
  },
  {
    stage: "Stage Four",
    title: "Becoming a Manufacturing Partner",
    description:
      "What started as sourcing raw material for ourselves became building finished products for others — private label, co-development, and formulations built from someone else's brief, not just our own.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 38,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function GrowthTimeline() {
  return (
    <section className="relative overflow-hidden bg-[#f5f1e7] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
      <div className="pointer-events-none absolute left-[-100px] top-[100px] h-[300px] w-[300px] rounded-full bg-[#d3b78a]/15 blur-[110px]" />

      <div className="pointer-events-none absolute bottom-[-120px] right-[-70px] h-[360px] w-[360px] rounded-full bg-[#789444]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-[1280px]">
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
            amount: 0.45,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mb-16 max-w-[780px] text-center lg:mb-24"
        >
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.3em] text-[#c35531] sm:text-[12px]">
            How We Got Here
          </p>

          <h2 className="font-heading text-[44px] font-bold uppercase leading-[0.94] tracking-[-0.03em] text-[#294526] sm:text-[56px] lg:text-[68px]">
            The Shape of Our Growth
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          className="relative"
        >
          {/* Desktop center line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-[#294526]/15 lg:block" />

          <div className="space-y-12 lg:space-y-20">
            {STAGES.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.article
                  key={item.stage}
                  variants={itemVariants}
                  className="relative grid grid-cols-1 gap-6 lg:grid-cols-[1fr_80px_1fr] lg:items-center"
                >
                  {/* Left side */}
                  <div
                    className={`${
                      isLeft
                        ? "lg:col-start-1 lg:text-right"
                        : "lg:col-start-3 lg:text-left"
                    }`}
                  >
                    <div
                      className={`max-w-[520px] ${
                        isLeft ? "lg:ml-auto" : "lg:mr-auto"
                      }`}
                    >
                      <span className="inline-flex rounded-full border border-[#c35531]/25 bg-[#fffaf0] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#c35531]">
                        {item.stage}
                      </span>

                      <h3 className="mt-4 font-heading text-[30px] font-bold leading-[1.05] text-[#294526] sm:text-[36px]">
                        {item.title}
                      </h3>

                      <p className="mt-4 text-[15px] leading-7 text-[#3a4634]/78 sm:text-[17px]">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Center marker */}
                  <div className="relative hidden h-full items-center justify-center lg:col-start-2 lg:flex">
                    <motion.span
                      initial={{
                        scale: 0,
                      }}
                      whileInView={{
                        scale: 1,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.7,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 18,
                        delay: index * 0.08,
                      }}
                      className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full border-[6px] border-[#f5f1e7] bg-[#c35531] shadow-[0_0_0_1px_rgba(195,85,49,0.15)]"
                    />
                  </div>

                  {/* Empty opposite side on desktop */}
                  <div
                    className={`hidden lg:block ${
                      isLeft ? "lg:col-start-3" : "lg:col-start-1"
                    }`}
                  />

                  {/* Mobile timeline marker */}
                  <div className="absolute left-0 top-0 h-full w-px bg-[#294526]/15 lg:hidden" />

                  <span className="absolute left-[-7px] top-2 h-4 w-4 rounded-full border-4 border-[#f5f1e7] bg-[#c35531] lg:hidden" />
                </motion.article>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: 22,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.65,
            delay: 0.2,
          }}
          className="mx-auto mt-16 max-w-[700px] border-t border-[#294526]/15 pt-10 text-center lg:mt-24"
        >
          <p className="font-heading text-[24px] font-bold uppercase leading-tight text-[#294526] sm:text-[30px]">
            This is where we are.
          </p>

          <p className="mt-2 font-heading text-[24px] font-bold uppercase leading-tight text-[#c35531] sm:text-[30px]">
            It&apos;s not where we stop.
          </p>
        </motion.div>
      </div>
    </section>
  );
}