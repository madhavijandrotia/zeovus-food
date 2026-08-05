"use client";

import Image from "next/image";
import { motion } from "motion/react";

const checks = [
  "Supplier qualification and audit",
  "Raw material identity testing",
  "Microbial contamination screening",
  "Heavy metal analysis",
  "Pesticide residue testing",
  "In-process quality checks",
  "Stability and shelf-life studies",
  "Final product verification",
  "Packaging integrity testing",
  "Storage condition monitoring",
];

const stats = [
  {
    value: "12",
    label: "Step quality architecture",
  },
  {
    value: "825",
    label: "Verified testing parameters",
  },
  {
    value: "3",
    label: "Layer testing protocol",
  },
];

const itemVariants = {
  hidden: {
    opacity: 0,
    x: -16,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function QualityCertificationSection() {
  return (
    <section
      id="zqa"
      className="relative overflow-hidden bg-[#ead7b4] px-5 py-20 sm:px-8 lg:px-14 lg:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-[-120px] top-[-100px] h-[340px] w-[340px] rounded-full bg-[#fff9df]/35 blur-[110px]" />

      <div className="pointer-events-none absolute bottom-[-130px] right-[-100px] h-[380px] w-[380px] rounded-full bg-[#789444]/10 blur-[130px]" />

      <div className="relative mx-auto max-w-[1380px]">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          {/* Quality checklist card */}
          <motion.article
            initial={{
              opacity: 0,
              x: -42,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative overflow-hidden rounded-[32px] border border-[#294526]/10 bg-[#fffce8] p-6 shadow-[0_24px_65px_rgba(49,55,37,0.08)] sm:p-9 lg:p-11"
          >
            <span className="pointer-events-none absolute right-7 top-5 font-heading text-[110px] font-black leading-none text-[#789444]/[0.055] sm:text-[150px]">
              ZQA
            </span>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-3 rounded-full border border-[#789444]/20 bg-[#789444]/[0.08] px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-[#789444]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#667637]">
                  Quality Assurance
                </span>
              </div>

              <h2 className="mt-6 max-w-[520px] font-heading text-[34px] font-bold uppercase leading-[0.98] tracking-[-0.02em] text-[#294526] sm:text-[44px]">
                Our Promise,
                <br />
                Made Tangible
              </h2>

              <p className="mt-5 max-w-[540px] text-[15px] leading-7 text-[#34422e]/72 sm:text-[16px]">
                Every Zeovus product undergoes a rigorous quality-control
                process before it is approved for release.
              </p>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  staggerChildren: 0.055,
                }}
                className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2"
              >
                {checks.map((check) => (
                  <motion.div
                    key={check}
                    variants={itemVariants}
                    className="group flex items-start gap-3 rounded-[18px] border border-[#294526]/[0.08] bg-white/45 px-4 py-3.5 transition duration-300 hover:-translate-y-0.5 hover:border-[#789444]/25 hover:bg-white/70"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#789444]/12 text-[#6e7e38]">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-3.5 w-3.5"
                        aria-hidden="true"
                      >
                        <path d="m5 12 4 4L19 6" />
                      </svg>
                    </span>

                    <span className="text-[14px] font-medium leading-6 text-[#293522] sm:text-[15px]">
                      {check}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.article>

          {/* Main certification content */}
          <motion.article
            initial={{
              opacity: 0,
              x: 42,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.75,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative overflow-hidden rounded-[32px] border border-[#294526]/10 bg-[#e5cfa7] p-6 shadow-[0_24px_65px_rgba(49,55,37,0.07)] sm:p-9 lg:p-11"
          >
            <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-[#fff9df]/20 blur-[75px]" />

            {/* Stamped seal */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 2.8,
                rotate: -28,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                rotate: -10,
              }}
              viewport={{
                once: true,
                amount: 0.1,
              }}
              transition={{
                type: "spring",
                stiffness: 320,
                damping: 14,
                mass: 0.7,
                delay: 0.45,
              }}
              className="pointer-events-none absolute right-5 top-5 z-30 h-[110px] w-[110px] sm:right-7 sm:top-7 sm:h-[140px] sm:w-[140px] lg:right-8 lg:top-8 lg:h-[155px] lg:w-[155px]"
            >
              <motion.div
                animate={{
                  scale: [1, 0.94, 1],
                }}
                transition={{
                  duration: 0.28,
                  delay: 0.85,
                  ease: "easeOut",
                }}
                className="relative h-full w-full"
              >
                <Image
                  src="/seal1.png"
                  alt="Zeovus Quality Assurance approved seal"
                  fill
                  priority
                  sizes="155px"
                  className="object-contain opacity-100 drop-shadow-[0_8px_16px_rgba(41,69,38,0.18)]"
                />
              </motion.div>
            </motion.div>

            <div className="relative z-10 pt-28 sm:pt-32 lg:pt-0 lg:pr-40">
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#c35531]">
                Excellence Through Verification
              </p>

              <h2 className="mt-4 max-w-[720px] font-heading text-[42px] font-bold uppercase leading-[0.93] tracking-[-0.03em] text-[#294526] sm:text-[54px] lg:text-[64px]">
                Quality &amp;
                <br />
                Certifications
              </h2>

              <div className="mt-7 max-w-[780px] space-y-5 text-[15px] leading-7 text-[#34422e]/76 sm:text-[17px] sm:leading-8">
                <p>
                  Every product we create earns the Zeovus Quality Assurance
                  Seal only after passing our proprietary 12-step quality
                  architecture built on 825 verified and validated testing
                  parameters. From supplier audits to raw-material
                  authentication, every stage is verified, validated and proven.
                </p>

                <p>
                  Our triple-layer testing protocol, covering incoming
                  materials, in-process monitoring and in-house certified
                  finished goods, ensures unmatched safety, purity and
                  consistency.
                </p>
              </div>

              {/* Stats */}
              <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:mr-[-160px]">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.value}
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
                    }}
                    transition={{
                      duration: 0.55,
                      delay: 0.15 + index * 0.08,
                    }}
                    className="relative overflow-hidden rounded-[22px] border border-[#294526]/10 bg-[#fff9df]/45 px-5 py-5"
                  >
                    <span className="font-heading text-[48px] font-bold leading-none text-[#c9552f] sm:text-[54px]">
                      {stat.value}
                    </span>

                    <p className="mt-3 max-w-[150px] text-[11px] font-bold uppercase leading-5 tracking-[0.12em] text-[#294526]/68">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* ZQA statement */}
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
                  duration: 0.6,
                  delay: 0.25,
                }}
                className="relative mt-8 overflow-hidden rounded-[24px] border border-[#789444]/20 bg-[#fff9df]/50 px-6 py-6 sm:px-7 lg:mr-[-160px]"
              >
                <div className="absolute inset-y-0 left-0 w-[6px] bg-[#789444]" />

                <p className="pl-2 font-heading text-[20px] font-semibold leading-8 text-[#294526] sm:text-[23px]">
                  When you see the{" "}
                  <span className="font-bold text-[#c35531]">ZQA mark</span>,
                  you&apos;re not just holding a product that meets global
                  standards, you&apos;re holding one that defines them.
                </p>
              </motion.div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}