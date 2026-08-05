"use client";

import { motion } from "motion/react";

export default function LeadershipNoteSection() {
  return (
    <section className="bg-[#efe6d3] px-5 py-24 sm:px-8 lg:px-14 lg:py-32">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mx-auto max-w-5xl rounded-[36px] border border-[#d8ccb5] bg-[#fffaf0] px-8 py-14 shadow-[0_30px_80px_rgba(35,45,25,0.08)] sm:px-14 lg:px-20 lg:py-20"
      >
        <p className="text-center text-[12px] font-bold uppercase tracking-[0.3em] text-[#c35531]">
          A Note From The People Behind Zeovus
        </p>

        <h2 className="mt-6 text-center font-heading text-[42px] font-bold uppercase leading-none text-[#294526] sm:text-[56px]">
          Built To Protect
        </h2>

        <div className="mx-auto mt-12 max-w-3xl">
          <p className="text-center text-[22px] italic leading-10 text-[#30402a] sm:text-[26px]">
            “Every business says quality matters. Ours was built by people who
            couldn't stop chasing it, first in a single sack of grain from the
            right region, now in every batch that leaves our lines.
          </p>

          <p className="mt-8 text-center text-[18px] leading-9 text-[#30402a]/85">
            We didn't set out to become manufacturers. We set out to protect
            what we sourced, and manufacturing was simply the only way to
            guarantee it stayed protected all the way to someone else's shelf.
            That's still the whole point.”
          </p>
        </div>

        <div className="mx-auto mt-14 h-px w-28 bg-[#c35531]/40" />

        <p className="mt-8 text-center font-heading text-[30px] font-bold text-[#294526]">
          — The Zeovus Food Team
        </p>

        <p className="mt-2 text-center text-sm uppercase tracking-[0.25em] text-[#789444]">
          Quality. By Design.
        </p>
      </motion.div>
    </section>
  );
}