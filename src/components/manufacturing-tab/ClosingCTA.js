"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Download } from "lucide-react";

export default function ClosingCTA() {
  return (
    <section className="relative overflow-hidden bg-[#fffdf6] px-6 py-28 sm:px-10 lg:px-16">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-24 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#789444]/8 blur-[130px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,148,68,0.04),transparent_70%)]" />
      </div>

      <div className="relative mx-auto flex max-w-[1100px] flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[70px] leading-none text-[#789444]/55">
            “
          </span>

          <h2 className="mx-auto max-w-[900px] font-heading text-[30px] font-black uppercase leading-[1.15] tracking-[-0.02em] text-[#294526] sm:text-[40px] lg:text-[52px]">
            Every batch that leaves our lines
            answers to the same standard,
            the{" "}
            <span className="text-[#789444]">
              ZQA standard
            </span>{" "}
            , whether it's ten kilos or ten
            thousand, because{" "}
            <span className="text-[#789444]">
              consistency at scale
            </span>{" "}
            isn't a promise we make,
            it's a system we built,
            so that{" "}
            <span className="text-[#789444]">
              precision never gets diluted
              by volume.
            </span>
          </h2>

          <span className="mt-2 block text-[70px] leading-none text-[#789444]/55">
            ”
          </span>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="my-10 h-px w-40 origin-center bg-[#789444]/25"
        />

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: .2 }}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <Link
            href="/working-together"
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#294526] px-8 py-4 font-heading text-[18px] font-bold uppercase tracking-[0.08em] text-[#fff9df] transition hover:bg-[#3b5b33]"
          >
            Partner With Us

            <ArrowRight
              size={18}
              className="transition group-hover:translate-x-1"
            />
          </Link>

          <a
            href="/Capability-Overview.pdf"
            download
            className="group inline-flex items-center justify-center gap-3 rounded-full border border-[#294526]/12 bg-[#ebe6d8] px-8 py-4 font-heading text-[18px] font-bold uppercase tracking-[0.08em] text-[#6b742d] transition hover:bg-[#e3ddcd]"
          >
            <Download size={18} />

            Download Capability Overview
          </a>
        </motion.div>
      </div>
    </section>
  );
}