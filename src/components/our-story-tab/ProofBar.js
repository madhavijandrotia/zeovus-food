"use client";

import { motion } from "motion/react";

const PROOF_ITEMS = [
  "SOURCED AT ORIGIN",
  "MANUFACTURED IN-HOUSE",
  "TESTED AT EVERY STAGE",
  "BUILT FOR EXPORT",
];

const repeatedItems = [
  ...PROOF_ITEMS,
  ...PROOF_ITEMS,
  ...PROOF_ITEMS,
];

export default function ProofBar() {
  return (
    <section
      aria-label="Zeovus capabilities"
      className="relative overflow-hidden border-y border-[#2a3122]/15 bg-[#efe0c3] py-4"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#efe0c3] to-transparent sm:w-32" />

      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#efe0c3] to-transparent sm:w-32" />

      <motion.div
        animate={{
          x: ["0%", "-33.333%"],
        }}
        transition={{
          duration: 24,
          ease: "linear",
          repeat: Infinity,
        }}
        className="flex w-max items-center will-change-transform"
      >
        {repeatedItems.map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="flex shrink-0 items-center"
          >
            <span className="whitespace-nowrap px-6 font-heading text-[15px] font-bold uppercase tracking-[0.16em] text-[#294526] sm:px-9 sm:text-[17px] lg:text-[19px]">
              {item}
            </span>

            <span
              aria-hidden="true"
              className="h-2 w-2 shrink-0 rounded-full bg-[#c35531]"
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
}