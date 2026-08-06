"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden px-5 pb-12 pt-28 sm:px-8 sm:pb-16 sm:pt-32 lg:px-14 lg:pb-14 lg:pt-36">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/30 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1800px]">
        <motion.div
          className="max-w-[900px]"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <h1 className="font-heading text-[42px] font-black uppercase leading-[0.9] tracking-[-2px] text-[#fffde6] sm:text-[58px] md:text-[72px] lg:text-[88px]">
            <motion.span variants={item} className="block">
              Bringing
            </motion.span>

            <motion.span variants={item} className="block text-[#b8c77d]">
              The World's Finest
            </motion.span>

            <motion.span variants={item} className="block">
              Into Every <span className="text-[#f89b21]">Home</span>
            </motion.span>
          </h1>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full bg-[#f4f2d3] px-6 py-3 text-xs font-semibold tracking-widest text-[#191512] sm:px-8 sm:py-4 sm:text-sm"
            >
              EXPLORE PRODUCTS
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-xs font-semibold tracking-widest text-white backdrop-blur-md sm:px-8 sm:py-4 sm:text-sm"
            >
              OUR STORY
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
