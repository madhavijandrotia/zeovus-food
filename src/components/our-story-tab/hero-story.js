"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const STORY_VIDEOS = [
  {
    src: "/videos/story1.mp4",
    duration: 5,
  },
  {
    src: "/videos/story2.mp4",
    duration: 5,
  },
  {
    src: "/videos/story3.mp4",
    duration: 5,
  },
  {
    src: "/videos/story4.mp4",
    duration: 5,
  },
  {
    src: "/videos/story5.mp4",
    duration: 5,
  },
];

export default function HeroStory() {
  const [currentVideo, setCurrentVideo] = useState(0);

  useEffect(() => {
    const activeVideo = STORY_VIDEOS[currentVideo];

    const timer = window.setTimeout(() => {
      setCurrentVideo((current) => (current + 1) % STORY_VIDEOS.length);
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
            key={STORY_VIDEOS[currentVideo].src}
            src={STORY_VIDEOS[currentVideo].src}
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
          <h1 className="font-heading text-[42px] font-black uppercase leading-[0.9] tracking-[-2px] sm:text-[58px] md:text-[72px] lg:text-[88px]">
            <span
              className="block text-[#fffde6]"
              style={{
                textShadow: "0 2px 4px rgba(0, 0, 0, 0.38)",
              }}
            >
              Delivering
            </span>

            <span
              className="block text-[#b8c77d]"
              style={{
                textShadow: "0 2px 4px rgba(0, 0, 0, 0.32)",
              }}
            >
              Natures best
            </span>

            <span
              className="block text-[#fffde6]"
              style={{
                textShadow: "0 2px 4px rgba(0, 0, 0, 0.38)",
              }}
            >
              With Absolute{" "}
              <span
                className="text-[#f89b21]"
                style={{
                  textShadow: "0 2px 4px rgba(0, 0, 0, 0.35)",
                }}
              >
                Trust
              </span>
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
}
