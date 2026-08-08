"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const HERO_VIDEOS = [
  {
    src: "/videos/home1.mp4",
    duration: 3,
  },
  {
    src: "/videos/home2.mp4",
    duration: 3,
  },
  {
    src: "/videos/home3.mp4",
    duration: 3,
  },
  {
    src: "/videos/home4.mp4",
    duration: 2,
  },
  {
    src: "/videos/home5.mp4",
    duration: 2,
  },
];

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
  const [currentVideo, setCurrentVideo] = useState(0);

  useEffect(() => {
    const activeVideo = HERO_VIDEOS[currentVideo];

    const timer = window.setTimeout(() => {
      setCurrentVideo((current) => (current + 1) % HERO_VIDEOS.length);
    }, activeVideo.duration * 1000);

    return () => {
      window.clearTimeout(timer);
    };
  }, [currentVideo]);

  return (
    <section className="relative flex min-h-screen items-end overflow-hidden px-5 pb-16 pt-32 sm:px-8 lg:px-12 lg:pb-20">
      {/* Background Videos */}
      {/* Background Videos */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence mode="sync">
          <motion.video
            key={HERO_VIDEOS[currentVideo].src}
            src={HERO_VIDEOS[currentVideo].src}
            autoPlay
            muted
            playsInline
            preload="auto"
            initial={{
              opacity: 0,
              scale: 1.01,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              opacity: {
                duration: 1.5,
                ease: [0.4, 0, 0.2, 1],
              },
              scale: {
                duration: 2.5,
                ease: [0.22, 1, 0.36, 1],
              },
            }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>
      </div>

      {/* Overlay */}
      {/* <div className="absolute inset-0 z-[2] bg-gradient-to-t from-black/75 via-transparent to-black/20" /> */}

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1800px]">
        <motion.div
          className="max-w-[900px]"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <h1 className="font-heading text-[42px] font-black uppercase leading-[0.9] tracking-[-2px] sm:text-[58px] md:text-[72px] lg:text-[88px]">
            <motion.span
              variants={item}
              className="block text-[#255F38]"
              style={{
                textShadow: "0 1px 3px rgba(255, 244, 183, 0.35)",
              }}
            >
              Bringing
            </motion.span>

            <motion.span
              variants={item}
              className="block text-[#f89b21]"
              style={{
                textShadow: "0 2px 4px rgba(0, 0, 0, 0.38)",
              }}
            >
              The World's Finest
            </motion.span>

            <motion.span
              variants={item}
              className="block text-[#255F38]"
              style={{
                textShadow: "0 1px 3px rgba(255, 244, 183, 0.35)",
              }}
            >
              Into Every{" "}
              <span
                className="text-[#f89b21]"
                style={{
                  textShadow: "0 2px 4px rgba(0, 0, 0, 0.38)",
                }}
              >
                Home
              </span>
            </motion.span>
          </h1>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <Link href="/products">
              <motion.span
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="inline-block cursor-pointer rounded-full bg-[#f4f2d3] px-6 py-3 text-xs font-semibold tracking-widest text-[#191512] sm:px-8 sm:py-4 sm:text-sm"
              >
                EXPLORE PRODUCTS
              </motion.span>
            </Link>

            <Link href="/our-story">
              <motion.span
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="inline-block cursor-pointer rounded-full border border-white/30 bg-white/10 px-6 py-3 text-xs font-semibold tracking-widest text-white backdrop-blur-md sm:px-8 sm:py-4 sm:text-sm"
              >
                OUR STORY
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
