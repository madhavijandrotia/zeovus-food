"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function CsrQuoteSection() {
  return (
    <section className="relative overflow-hidden bg-[#f5f1e7] px-6 py-24 sm:px-8 lg:px-14 lg:py-32">
      <div className="pointer-events-none absolute left-1/2 top-16 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-[#789444]/10 blur-[120px]" />

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
          amount: 0.35,
        }}
        transition={{
          duration: 0.75,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative mx-auto max-w-[1050px] text-center"
      >
        <p className="text-[11px] font-bold uppercase tracking-[0.32em] text-[#c35531] sm:text-[12px]">
          Beyond Manufacturing
        </p>

        <blockquote className="mx-auto mt-8 max-w-[980px] font-heading text-[38px] font-bold leading-[1.1] tracking-[-0.025em] text-[#294526] sm:text-[50px] lg:text-[62px]">
          “We commit <span className="text-[#789444]">1%</span> of our profits
          to programs that support{" "}
          <span className="text-[#789444]">child nutrition</span>,{" "}
          <span className="text-[#789444]">education</span>, and{" "}
          <span className="text-[#789444]">stronger communities</span> —
          because the places we source from and the world we manufacture for
          have always been the same world.”
        </blockquote>

        {/* <div className="mx-auto mt-10 h-px w-24 bg-[#c35531]/35" /> */}

        <p className="mx-auto mt-7 max-w-[650px] text-[16px] leading-8 text-[#294526]/68 sm:text-[18px]">
          The best ingredients deserve stronger communities. We believe both
          should grow together.
        </p>

        <Link
          href="/manufacturing"
          className="group mt-9 inline-flex items-center gap-3 rounded-full border border-[#294526]/15 bg-[#fff9df] px-7 py-4 font-heading text-sm font-bold uppercase tracking-[0.08em] text-[#294526] transition duration-300 hover:-translate-y-1 hover:bg-[#789444] hover:text-[#fff9df]"
        >
          See How We Built It

          <svg
            className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14" />
            <path d="m13 5 7 7-7 7" />
          </svg>
        </Link>
      </motion.div>
    </section>
  );
}