"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function FormulationBriefSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f5ef] px-5 py-24 sm:px-8 lg:px-14 lg:py-32">
      {/* Soft background glows */}
      <div className="pointer-events-none absolute left-1/2 top-12 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-[#789444]/10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-[-120px] right-[-80px] h-[320px] w-[320px] rounded-full bg-[#c35531]/[0.06] blur-[120px]" />

      <motion.div
        initial={{
          opacity: 0,
          y: 35,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.35,
        }}
        transition={{
          duration: 0.75,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative mx-auto flex max-w-[1080px] flex-col items-center text-center"
      >
        <blockquote className="max-w-[980px] font-heading text-[36px] font-bold leading-[1.12] tracking-[-0.025em] text-[#294526] sm:text-[48px] lg:text-[60px]">
          <span className="text-[#9aa66a]">“</span>
          Every one of these started as a{" "}
          <span className="text-[#718139]">
            formulation brief, not a recipe
          </span>{" "}
          — innovation and manufacturing sit in the same building here, so
          neither one is ever the side project.
          <span className="text-[#9aa66a]">”</span>
        </blockquote>

        <Link
          href="/working-together"
          className="group mt-10 inline-flex items-center gap-3 rounded-full border border-[#294526]/10 bg-[#ebeade] px-6 py-3.5 font-heading text-[14px] font-bold uppercase tracking-[0.08em] text-[#6f7d32] transition duration-300 hover:-translate-y-1 hover:border-[#6f7d32]/30 hover:bg-[#6f7d32] hover:text-[#fff9df] sm:px-8 sm:text-[16px]"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#718139] text-[#fff9df] transition duration-300 group-hover:bg-[#fff9df] group-hover:text-[#718139]">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="M9 3h6" />
              <path d="M10 3v5.5l-4.5 8A3 3 0 0 0 8.1 21h7.8a3 3 0 0 0 2.6-4.5l-4.5-8V3" />
              <path d="M8 15h8" />
            </svg>
          </span>

          Bring Us Your Formulation Brief
        </Link>
      </motion.div>
    </section>
  );
}