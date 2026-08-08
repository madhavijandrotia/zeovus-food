"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const MANUFACTURING_VIDEOS = [
  {
    src: "/videos/manufacturing1.mp4",
    duration: 5,
  },
  {
    src: "/videos/manufacturing2.mp4",
    duration: 5,
  },
  {
    src: "/videos/manufacturing3.mp4",
    duration: 5,
  },
  {
    src: "/videos/manufacturing4.mp4",
    duration: 5,
  },
];

export default function HeroManufacturing() {
  const [currentVideo, setCurrentVideo] = useState(0);

  useEffect(() => {
    const activeVideo = MANUFACTURING_VIDEOS[currentVideo];

    const timer = window.setTimeout(() => {
      setCurrentVideo((current) => (current + 1) % MANUFACTURING_VIDEOS.length);
    }, activeVideo.duration * 1000);

    return () => {
      window.clearTimeout(timer);
    };
  }, [currentVideo]);

  return (
    <section className="relative flex min-h-screen items-end overflow-hidden px-5 pb-16 pt-32 sm:px-8 lg:px-12 lg:pb-20">
      {/* Background Videos */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence mode="sync">
          <motion.video
            key={MANUFACTURING_VIDEOS[currentVideo].src}
            src={MANUFACTURING_VIDEOS[currentVideo].src}
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
      <div className="absolute inset-0 z-[2] bg-gradient-to-t from-black/75 via-transparent to-black/20" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1800px]">
        <div className="max-w-[900px]">
          <h1 className="font-heading text-[42px] font-black uppercase leading-[0.9] tracking-[-2px] text-[#FDFFDE] sm:text-[58px] md:text-[72px] lg:text-[88px]">
            <span
              className="block text-[#FDFFDE]"
              style={{
                textShadow: "0 2px 4px rgba(0, 0, 0, 0.38)",
              }}
            >
              CAPABILITY
            </span>

            <span
              className="block"
              style={{
                textShadow: "0 2px 4px rgba(0, 0, 0, 0.38)",
              }}
            >
              BUILT FOR{" "}
              <span
                className="text-[#F69520]"
                style={{
                  textShadow: "0 2px 4px rgba(0, 0, 0, 0.35)",
                }}
              >
                SCALE
              </span>
            </span>
          </h1>

          <p
            className="mt-8 max-w-[760px] text-justify text-[17px] leading-8 text-[#fffde6]/82 sm:text-[19px] lg:text-[20px]"
            style={{
              textShadow: "0 1px 3px rgba(0, 0, 0, 0.42)",
            }}
          >
            Zeovus Food manufactures plant-based staples and functional foods
            across every major format on the market today, from atta and protein
            flour blends to high-protein pasta, spaghetti and fettuccine; from
            instant sachets and retort-packed ready-to-eat meals to gourmet
            hummus and wholesome soups, inside FSSAI-licensed, GMP and
            HACCP-certified, allergen-controlled facilities, with flexible MOQs,
            custom formulation R&amp;D, and capacity that scales from first
            sample to full commercial and export-ready volume without ever
            changing partners.
          </p>
        </div>
      </div>
    </section>
  );
}
