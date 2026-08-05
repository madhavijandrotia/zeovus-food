"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const benefits = [
  {
    number: "01",
    eyebrow: "One Connected Partner",
    title: "From Idea To Finished Product",
    description:
      "Formulation, manufacturing, testing, packaging and documentation managed by one partner.",
    image: "/images/product-development.png",
  },
  {
    number: "02",
    eyebrow: "Verified At Every Stage",
    title: "Quality You Can Trust",
    description:
      "Every batch is tested and supported with complete quality documentation, backed by Zeovus Quality Assurance (ZQA), our 12-step, 825-parameter quality architecture.",
    image: "/images/quality-system.webp",
  },
  {
    number: "03",
    eyebrow: "Built For International Markets",
    title: "Global Compliance Standards",
    description:
      "Manufactured in facilities compliant with US FDA, GMP, ISO 22000, HACCP, FSSC 22000, Halal and Kosher standards, the certifications trusted by global brands and buyers.",
    image: "/images/global-compliance.png",
  },
  {
    number: "04",
    eyebrow: "Innovation",
    title: "We Manufacture What We Innovate",
    description:
      "R&D and production are the same department, what we formulate, we scale. No third-party gaps, no lost-in-translation moments.",
    image: "/images/manufacture-innovate.png",
  },
  {
    number: "05",
    eyebrow: "Nutrition First",
    title: "Nutrition That Actually Moves The Needle",
    description:
      "Not marginal improvements, category-defining specs that give your brand a story worth telling on shelf.",
    image: "/images/nutrition.png",
  },
  {
    number: "06",
    eyebrow: "Clean Label",
    title: "Clean By Design, Not By Exception",
    description:
      "No preservatives, no artificial flavours, no refined flour, built into the formulation from day one, not added as an afterthought.",
    image: "/images/clean-design.png",
  },
  {
    number: "07",
    eyebrow: "Export Ready",
    title: "Global Trade, Handled",
    description:
      "BRCGS, Halal, Kosher, HACCP, batch-level traceability, the paperwork your buyers ask for is already done.",
    image: "/images/global-trade.png",
  },
  {
    number: "08",
    eyebrow: "Scalable Production",
    title: "Start Small. Scale Fast.",
    description:
      "Trial orders and retail contracts run on the same lines, we're built to flex with your demand, not against it.",
    image: "/images/scale-fast.png",
  },
  {
    number: "09",
    eyebrow: "Consumer Focus",
    title: "Flavours Global Palates Already Reach For",
    description:
      "Every product is benchmarked against what health-conscious consumers worldwide are actively buying familiar taste, credible nutrition, shelf-ready anywhere.",
    image: "/images/global-palates.png",
  },
];

const CARDS_PER_PAGE = 3;
const PAGE_COUNT = Math.ceil(benefits.length / CARDS_PER_PAGE);

const pageVariants = {
  enter: (direction) => ({
    opacity: 0,
    x: direction > 0 ? 70 : -70,
  }),
  center: {
    opacity: 1,
    x: 0,
  },
  exit: (direction) => ({
    opacity: 0,
    x: direction > 0 ? -70 : 70,
  }),
};

export default function WhyZeovusSection() {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);

  const visibleBenefits = benefits.slice(
    page * CARDS_PER_PAGE,
    page * CARDS_PER_PAGE + CARDS_PER_PAGE,
  );

  const goToPage = (nextPage) => {
    setDirection(nextPage > page ? 1 : -1);
    setPage(nextPage);
  };

  const showPrevious = () => {
    setDirection(-1);
    setPage((current) => (current === 0 ? PAGE_COUNT - 1 : current - 1));
  };

  const showNext = () => {
    setDirection(1);
    setPage((current) => (current === PAGE_COUNT - 1 ? 0 : current + 1));
  };

  return (
    <section className="relative overflow-hidden bg-[#efe0c3] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
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
          <h2 className="font-heading text-[42px] font-bold uppercase leading-[0.94] tracking-[-0.03em] text-[#294526] sm:text-[54px] lg:text-[64px]">
            Why Choose
            <br />
            Zeovus Food
          </h2>

          <p className="max-w-[760px] text-[16px] leading-8 text-[#34422e]/75 sm:text-[18px]">
            Tell us what you&apos;re building. Fill out the enquiry form below,
            and we&apos;ll come back with a clear, competitive quote for your
            project.
          </p>
        </motion.div>

        {/* Top navigation */}
        <div className="mb-7 flex items-center justify-between gap-5">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#294526]/55">
            {String(page + 1).padStart(2, "0")} /{" "}
            {String(PAGE_COUNT).padStart(2, "0")}
          </p>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={showPrevious}
              aria-label="Show previous benefits"
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-[#294526]/15 bg-[#fffaf0] text-[#294526] transition duration-300 hover:bg-[#294526] hover:text-[#fff9df]"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1"
                aria-hidden="true"
              >
                <path d="M19 12H5" />
                <path d="m11 19-7-7 7-7" />
              </svg>
            </button>

            <button
              type="button"
              onClick={showNext}
              aria-label="Show next benefits"
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-[#294526]/15 bg-[#fffaf0] text-[#294526] transition duration-300 hover:bg-[#294526] hover:text-[#fff9df]"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m13 5 7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={pageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
            >
              {visibleBenefits.map((benefit) => (
                <motion.article
                  key={benefit.number}
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
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/5" />
                  </div>

                  {/* Content */}
<div className="relative flex min-h-[360px] flex-col p-6 sm:p-8">
  <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#c35531]">
    {benefit.eyebrow}
  </p>

  <div className="mt-4 min-h-[104px]">
    <h3 className="font-heading text-[28px] font-bold uppercase leading-[1.02] tracking-[-0.02em] text-[#294526] sm:text-[32px]">
      {benefit.title}
    </h3>
  </div>

  {/* Border always immediately below title */}
  <div className="border-t border-[#294526]/10 pt-5">
    <div className="min-h-[130px]">
      <p className="text-[15px] leading-7 text-[#34422e]/72 sm:text-[16px]">
        {benefit.description}
      </p>
    </div>
  </div>

  {/* Arrow always at same position */}
  <div className="mt-auto pt-6">
    <span className="ml-auto flex h-11 w-11 items-center justify-center rounded-full border border-[#294526]/15 text-[#294526] transition duration-300 group-hover:translate-x-1 group-hover:bg-[#294526] group-hover:text-[#fff9df]">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <path d="M5 12h14" />
        <path d="m13 5 7 7-7 7" />
      </svg>
    </span>
  </div>
</div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Page indicators */}
        <div className="mt-9 flex justify-center gap-2">
          {Array.from({ length: PAGE_COUNT }).map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => goToPage(index)}
              aria-label={`Show benefits page ${index + 1}`}
              aria-current={page === index ? "true" : undefined}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                page === index
                  ? "w-9 bg-[#294526]"
                  : "w-2.5 bg-[#294526]/20 hover:bg-[#294526]/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
