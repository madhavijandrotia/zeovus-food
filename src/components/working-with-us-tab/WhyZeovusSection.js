"use client";

import Image from "next/image";
import { motion } from "motion/react";

const benefits = [
  {
    number: "01",
    eyebrow: "One Connected Partner",
    title: "From Idea To Finished Product",
    description:
      "Formulation, manufacturing, testing, packaging and documentation managed by one partner.",
    image: "/images/product-development.png",
    tags: ["Formulation", "Manufacturing", "Testing", "Packaging"],
  },
  {
    number: "02",
    eyebrow: "Verified At Every Stage",
    title: "Quality You Can Trust",
    description:
      "Every batch is tested and supported with complete quality documentation, backed by Zeovus Quality Assurance (ZQA), our 12-step, 825-parameter quality architecture.",
    image: "/images/quality-system.webp",
    tags: ["12-Step ZQA", "825 Parameters", "Batch Records", "COA"],
  },
  {
    number: "03",
    eyebrow: "Built For International Markets",
    title: "Global Compliance Standards",
    description:
      "Manufactured in facilities compliant with US FDA, GMP, ISO 22000, HACCP, FSSC 22000, Halal and Kosher standards, the certifications trusted by global brands and buyers.",
    image: "/images/global-compliance.png",
    tags: ["US FDA", "GMP", "ISO 22000", "HACCP"],
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
    y: 42,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.72,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function WhyZeovusSection() {
  return (
    <section className="relative overflow-hidden bg-[#efe0c3] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-[-120px] top-[80px] h-[340px] w-[340px] rounded-full bg-[#c35531]/[0.08] blur-[120px]" />

      <div className="pointer-events-none absolute bottom-[-120px] right-[-80px] h-[380px] w-[380px] rounded-full bg-[#789444]/10 blur-[130px]" />

      <div className="relative mx-auto max-w-[1400px]">
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
            amount: 0.45,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-12 grid grid-cols-1 gap-7 border-b border-[#294526]/15 pb-12 lg:mb-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-20"
        >
          <div>
            <h2 className="font-heading text-[42px] font-bold uppercase leading-[0.94] tracking-[-0.03em] text-[#294526] sm:text-[54px] lg:text-[64px]">
              Why Choose 
              <br />
              Zeovus Food
            </h2>
          </div>

          <p className="max-w-[760px] text-[16px] leading-8 text-[#34422e]/75 sm:text-[18px]">
            Tell us what you&apos;re building. Fill out the enquiry form below,
            and we&apos;ll come back with a clear, competitive quote for your
            project.
          </p>
        </motion.div>

        {/* Feature cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.12,
          }}
          className="grid grid-cols-1 gap-5 lg:grid-cols-3"
        >
          {benefits.map((benefit) => (
            <motion.article
              key={benefit.number}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: {
                  duration: 0.25,
                  ease: "easeOut",
                },
              }}
              className="group relative overflow-hidden rounded-[30px] border border-[#294526]/10 bg-[#fffaf0] shadow-[0_22px_60px_rgba(44,52,35,0.08)]"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={benefit.image}
                  alt={benefit.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/5" />
              </div>

              {/* Content */}
              <div className="relative flex min-h-[360px] flex-col p-6 sm:p-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#c35531]">
                  {benefit.eyebrow}
                </p>

                <h3 className="mt-4 font-heading text-[28px] font-bold uppercase leading-[1.02] tracking-[-0.02em] text-[#294526] sm:text-[34px]">
                  {benefit.title}
                </h3>

                <p className="mt-5 text-[15px] leading-7 text-[#34422e]/72 sm:text-[16px]">
                  {benefit.description}
                </p>

                {/* Tags */}
                {/* <div className="mt-7 flex flex-wrap gap-2">
                  {benefit.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#294526]/12 bg-[#789444]/[0.06] px-3 py-2 text-[9px] font-bold uppercase tracking-[0.12em] text-[#52622d]"
                    >
                      {tag}
                    </span>
                  ))}
                </div> */}

                {/* Bottom detail */}
                <div className="mt-auto flex items-end justify-end gap-5 border-t border-[#294526]/10 pt-7">

                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#294526]/15 text-[#294526] transition duration-300 group-hover:translate-x-1 group-hover:bg-[#294526] group-hover:text-[#fff9df]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4.5 w-4.5"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14" />
                      <path d="m13 5 7 7-7 7" />
                    </svg>
                  </span>
                </div>

                <div className="pointer-events-none absolute -bottom-20 -right-16 h-52 w-52 rounded-full bg-[#789444]/[0.06] blur-[65px] transition-transform duration-700 group-hover:scale-125" />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
