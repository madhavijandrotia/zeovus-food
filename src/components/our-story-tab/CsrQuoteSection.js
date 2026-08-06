"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function CsrQuoteSection() {
  return (
    <section className="relative overflow-hidden bg-[#f5f1e7] px-6 py-20 sm:px-8 lg:px-14 lg:py-28">
      <div className="pointer-events-none absolute left-[-80px] top-20 h-[320px] w-[320px] rounded-full bg-[#789444]/10 blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.75,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative mx-auto max-w-[1320px]"
      >
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          {/* Image */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[32px] shadow-[0_35px_70px_rgba(0,0,0,0.12)]">
              <Image
                src="/csr-community.png"
                alt="Supporting child nutrition and communities"
                width={900}
                height={700}
                className="aspect-[4/5] w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

          </motion.div>

          {/* Content */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.32em] text-[#c35531]">
              Beyond Manufacturing
            </p>

            <blockquote className="mt-6 font-heading text-[30px] font-bold leading-[1.15] tracking-[-0.02em] text-[#294526] sm:text-[36px] lg:text-[42px]">
              We commit{" "}
              <span className="text-[#789444]">1% of our profits</span> to
              programs supporting{" "}
              <span className="text-[#789444]">
                child nutrition, education,
                and stronger communities <span className="text-[#294526]">because the places we source from and the world we manufacture for have always been the same world.</span>
              </span>
            </blockquote>

            {/* <div className="mt-8 h-px w-20 bg-[#c35531]/25" /> */}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}