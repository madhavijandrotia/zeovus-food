"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const principles = [
  {
    number: "01",
    title: "Vision",
    text: 'A world where "sourced well" and "made well" are never separate claims, where the best of nature and the best of manufacturing are simply the same standard.',
  },
  {
    number: "02",
    title: "Mission",
    text: "To manufacture and export food the world can rely on, built on ingredients we know by origin, and processes we control end to end.",
  },
  {
    number: "03",
    title: "Values",
    text: "Trust isn't a value we state. It's a value we manufacture into every batch, every certification, every decision that happens where nobody's watching.",
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
    y: 38,
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

export default function GlobalStandardsSection() {
  return (
    <section className="relative overflow-hidden bg-[#151812] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
      <div className="pointer-events-none absolute left-[-120px] top-[-80px] h-[340px] w-[340px] rounded-full bg-[#c35531]/10 blur-[110px]" />

      <div className="pointer-events-none absolute bottom-[-140px] right-[-80px] h-[380px] w-[380px] rounded-full bg-[#789444]/10 blur-[130px]" />

      <div className="relative mx-auto max-w-[1380px]">
        {/* Global standards */}
        <div className="relative grid grid-cols-1 gap-10 border-b border-[#fff9df]/15 pb-16 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20 lg:pb-24">
          {/* Stamped ZQA seal */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 2.5,
              rotate: -30,
              y: -45,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              rotate: -10,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 16,
              mass: 0.75,
              delay: 0.45,
            }}
            className="pointer-events-none absolute right-0 top-[-20px] z-20 hidden h-[130px] w-[130px] sm:block lg:right-4 lg:top-[-34px] lg:h-[170px] lg:w-[170px]"
          >
            <motion.div
              animate={{
                scale: [1, 0.92, 1],
              }}
              transition={{
                duration: 0.28,
                delay: 0.9,
                ease: "easeOut",
              }}
              className="relative h-full w-full"
            >
              <Image
                src="/seal1.png"
                alt="Zeovus Quality Assurance approved seal"
                fill
                priority
                sizes="170px"
                className="object-contain opacity-90 drop-shadow-[0_12px_30px_rgba(0,0,0,0.3)]"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.35,
            }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h2 className="max-w-[560px] font-heading text-[48px] font-bold uppercase leading-[0.92] tracking-[-0.03em] text-[#fff9df] sm:text-[60px] lg:text-[72px]">
              Global Standards
            </h2>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 38,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:pt-8 lg:pr-40"
          >
            <p className="max-w-[820px] text-[16px] leading-[1.9] text-[#fff9df]/78 sm:text-[18px]">
              We manufacture and export FMCG-grade staples, spices, and
              ready-to-eat foods built to meet the standards of the world&apos;s
              most demanding retailers, distributors, and kitchens. Every batch
              is manufactured in facilities compliant with FSSAI, GMP, HACCP,
              ISO 22000, US FDA and BRCGS standards, and verified against Zeovus
              Quality Assurance (ZQA) — our 12-step, 825-parameter quality
              architecture. Backed by an active in-house R&amp;D pipeline, we
              continuously re-engineer our offering — so the same trust that
              defines what we source extends to what we invent.
            </p>

            <Link
              href="/manufacturing#zqa"
              className="group mt-8 inline-flex items-center gap-4 rounded-full border border-[#fff9df]/30 px-6 py-3.5 font-heading text-sm font-semibold uppercase tracking-[0.08em] text-[#fff9df] transition duration-300 hover:border-[#fff9df] hover:bg-[#fff9df] hover:text-[#151812]"
            >
              View Our Standards
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Vision, Mission, Values */}
        <div className="pt-16 lg:pt-24">
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
              amount: 0.5,
            }}
            transition={{
              duration: 0.65,
            }}
            className="mb-10 max-w-[760px] lg:mb-14"
          >
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.3em] text-[#c35531] sm:text-[12px]">
              What Guides Us
            </p>

            <h3 className="font-heading text-[38px] font-bold uppercase leading-[0.95] tracking-[-0.025em] text-[#fff9df] sm:text-[48px] lg:text-[58px]">
              Vision, Mission &amp; Values
            </h3>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            className="grid grid-cols-1 gap-5 lg:grid-cols-3"
          >
            {principles.map((item) => (
              <motion.article
                key={item.title}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  transition: {
                    duration: 0.25,
                    ease: "easeOut",
                  },
                }}
                className="group relative min-h-[330px] overflow-hidden rounded-[28px] border border-[#fff9df]/15 bg-[#fff9df]/[0.045] p-6 sm:p-8"
              >
                <div className="flex items-start justify-between gap-5">
                  <span className="text-[11px] font-bold tracking-[0.18em] text-[#c35531]">
                    {item.number}
                  </span>

                  <span className="h-2.5 w-2.5 rounded-full bg-[#c35531]" />
                </div>

                <div className="mt-16">
                  <h4 className="font-heading text-[34px] font-bold uppercase leading-none text-[#fff9df]">
                    {item.title}
                  </h4>

                  <p className="mt-6 text-[15px] leading-7 text-[#fff9df]/72 sm:text-[16px]">
                    {item.text}
                  </p>
                </div>

                <div className="pointer-events-none absolute bottom-0 right-0 h-36 w-36 rounded-full bg-[#789444]/10 blur-[55px] transition-transform duration-500 group-hover:scale-125" />
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
