"use client";

import { motion } from "motion/react";

const audiences = [
  {
    number: "01",
    title: "Retailers",
    description:
      "Need a supply partner as reliable as their own shelf promise.",
  },
  {
    number: "02",
    title: "Distributors",
    description:
      "Need consistency across every batch, every market.",
  },
  {
    number: "03",
    title: "Private Label Brands",
    description:
      "Need a manufacturer that disappears into their name, not competes with it.",
  },
  {
    number: "04",
    title: "Emerging & D2C Brands",
    description:
      "Need a partner willing to build small, then build big.",
  },
  {
    number: "05",
    title: "Purpose-Led Founders",
    description:
      "Turned a personal problem into a brand because the product they needed didn't exist yet, and they weren't willing to wait for someone else to build it.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function WhoWeServeSection() {
  return (
    <section className="relative overflow-hidden bg-[#f5f1e7] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
      <div className="pointer-events-none absolute left-[-100px] top-[120px] h-[300px] w-[300px] rounded-full bg-[#d2b98d]/20 blur-[110px]" />

      <div className="pointer-events-none absolute bottom-[-120px] right-[-80px] h-[360px] w-[360px] rounded-full bg-[#789444]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-[1280px]">
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
          className="mb-12 max-w-[900px] lg:mb-16"
        >
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.3em] text-[#c35531] sm:text-[12px]">
            Who We Serve
          </p>

          <h2 className="font-heading text-[44px] font-bold uppercase leading-[0.94] tracking-[-0.03em] text-[#294526] sm:text-[56px] lg:text-[68px]">
            Who We Build For
          </h2>

          <p className="mt-6 max-w-[820px] text-[16px] leading-8 text-[#34422e]/78 sm:text-[18px]">
            We don&apos;t manufacture for one kind of customer. We manufacture
            for anyone with a standard they refuse to compromise on.
          </p>
        </motion.div>

        {/* Full-width bars */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          className="space-y-4"
        >
          {audiences.map((audience) => (
            <motion.article
              key={audience.number}
              variants={itemVariants}
              whileHover={{
                x: 8,
                transition: {
                  duration: 0.25,
                  ease: "easeOut",
                },
              }}
              className="group relative overflow-hidden rounded-[24px] border border-[#294526]/15 border-l-[8px] border-l-[#789444] bg-[#fffaf0] transition-all duration-300 hover:border-l-[#c35531 px-6 py-8 shadow-[0_14px_38px_rgba(45,55,34,0.055)] sm:px-10 sm:py-9 lg:grid lg:grid-cols-[320px_1fr] lg:items-center lg:gap-8 lg:px-12 lg:py-10"
            >

              <h3 className="mt-3 font-heading text-[24px] font-bold uppercase leading-tight text-[#627333] sm:text-[28px] lg:mt-0">
                {audience.title}
              </h3>

              <p className="mt-4 text-[15px] font-medium leading-7 text-[#273321] sm:text-[17px] lg:mt-0">
                {audience.description}
              </p>

              <div className="pointer-events-none absolute bottom-[-70px] right-[-45px] h-40 w-40 rounded-full bg-[#789444]/[0.06] blur-[45px] transition-transform duration-500 group-hover:scale-125" />
            </motion.article>
          ))}
        </motion.div>

        {/* Closing statement */}
        <motion.div
          initial={{
            opacity: 0,
            y: 24,
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
            delay: 0.15,
          }}
          className="mt-12 border-t border-[#294526]/15 pt-10 text-center lg:mt-16"
        >
          <p className="font-heading text-[26px] font-bold uppercase leading-tight text-[#294526] sm:text-[34px]">
            If your business runs on trust,
          </p>

          <p className="mt-1 font-heading text-[26px] font-bold uppercase leading-tight text-[#c35531] sm:text-[34px]">
            we&apos;re already built for it.
          </p>
        </motion.div>
      </div>
    </section>
  );
}