"use client";

import Image from "next/image";
import { motion } from "motion/react";

const STAGES = [
  {
    stage: "Stage One",
    title: "The Sourcing Instinct",
    description:
      "It began with a simple obsession: find the ingredient that's the best of its kind, wherever it comes from, and refuse to settle for a substitute.",
    image: "/images/sourcing.png",
    imageAlt: "Fresh ingredients being sourced at origin",
  },
  {
    stage: "Stage Two",
    title: "Building the Infrastructure",
    description:
      "Sourcing well wasn't enough. We built manufacturing capability around it, milling, extrusion, freeze-drying, retort, so the quality we found at origin didn't get lost on the way to a shelf.",
    image: "/images/infrastructure.png",
    imageAlt: "Modern food manufacturing infrastructure",
  },
  {
    stage: "Stage Three",
    title: "Engineering the Standard",
    description:
      'We formalised what "trust" actually means in practice: a quality architecture built to catch what a visual check never would, applied to everything we touch, without exception.',
    image: "/images/quality.png",
    imageAlt: "Quality testing and inspection process",
  },
  {
    stage: "Stage Four",
    title: "Becoming a Manufacturing Partner",
    description:
      "What started as sourcing raw material for ourselves became building finished products for others, private label, co-development, and formulations built from someone else's brief, not just our own.",
    image: "/images/partnership.png",
    imageAlt: "Manufacturing partners working together",
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
      ease: [0.22, 1, 0.36, 1] ,
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
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
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
          viewport={{ once: true, amount: 0.1 }}
          className="relative"
        >
          {/* Desktop timeline line */}
          <div className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-[#294526]/15 lg:block" />

          {/* Mobile timeline line */}
          <div className="absolute bottom-0 left-[7px] top-0 w-px bg-[#294526]/15 lg:hidden" />

          <div className="space-y-14 lg:space-y-24">
            {STAGES.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.article
                  key={item.stage}
                  variants={itemVariants}
                  className="relative pl-10 lg:grid lg:grid-cols-[minmax(0,1fr)_80px_minmax(0,1fr)] lg:items-start lg:pl-0"
                >
                  {/* Mobile marker */}
                  <span className="absolute left-0 top-2 z-10 h-4 w-4 rounded-full border-4 border-[#f5f1e7] bg-[#c35531] lg:hidden" />

                  {/* Content */}
                  <div
                    className={
                      isLeft
                        ? "lg:col-start-1 lg:row-start-1 lg:text-right"
                        : "lg:col-start-3 lg:row-start-1 lg:text-left"
                    }
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

                  {/* Center marker aligned with stage label */}
                  <div className="relative hidden lg:col-start-2 lg:row-start-1 lg:flex lg:justify-center">
                    <motion.span
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, amount: 0.7 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 18,
                        delay: index * 0.08,
                      }}
                      className="relative z-10 mt-[5px] h-7 w-7 rounded-full border-[6px] border-[#f5f1e7] bg-[#c35531] shadow-[0_0_0_1px_rgba(195,85,49,0.15)]"
                    />
                  </div>

                  {/* Image */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: isLeft ? 30 : -30,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.3,
                    }}
                    transition={{
                      duration: 0.75,
                      delay: 0.12,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={`mt-7 lg:row-start-1 lg:mt-0 ${
                      isLeft ? "lg:col-start-3" : "lg:col-start-1"
                    }`}
                  >
                    <div
                      className={`relative aspect-[4/3] max-w-[520px] overflow-hidden rounded-[28px] bg-[#e4ddcc] shadow-[0_20px_60px_rgba(41,69,38,0.12)] ${
                        isLeft ? "lg:mr-auto" : "lg:ml-auto"
                      }`}
                    >
                      <Image
                        src={item.image}
                        alt={item.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 42vw"
                        className="object-cover transition-transform duration-700 hover:scale-[1.04]"
                      />

                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#294526]/20 via-transparent to-transparent" />
                    </div>
                  </motion.div>
                </motion.article>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
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