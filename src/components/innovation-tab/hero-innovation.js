"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const FORMULATION_VIDEOS = [
  { src: "/videos/formulation1.mp4", duration: 3 },
  { src: "/videos/formulation2.mp4", duration: 3 },
  { src: "/videos/formulation3.mp4", duration: 3 },
  { src: "/videos/formulation4.mp4", duration: 3 },
];

export default function HeroInnovation() {
  const [currentVideo, setCurrentVideo] = useState(0);
  // Blob-URL cache: index -> object URL. Empty until each is preloaded.
  const [cachedSrcs, setCachedSrcs] = useState([]);

  // Fetch every video exactly ONCE on mount, convert to an in-memory blob URL.
  // After this, rotating videos never triggers another network request, and
  // since the src is already fully in memory the crossfade below never has
  // to wait on the network mid-transition (which is what caused stutter).
  // (No ref-based "already loaded" guard here on purpose — it breaks under
  // React Strict Mode's mount->cleanup->mount cycle. The `cancelled` flag
  // alone is enough to prevent races.)
  useEffect(() => {
    let cancelled = false;
    const objectUrls = [];

    (async () => {
      const results = await Promise.all(
        FORMULATION_VIDEOS.map(async (video) => {
          const res = await fetch(video.src);
          const blob = await res.blob();
          return URL.createObjectURL(blob);
        })
      );

      if (cancelled) {
        results.forEach((url) => URL.revokeObjectURL(url));
        return;
      }

      objectUrls.push(...results);
      setCachedSrcs(results);
    })();

    return () => {
      cancelled = true;
      objectUrls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, []);

  // Rotation only starts once videos are cached, and never re-fetches.
  useEffect(() => {
    if (cachedSrcs.length === 0) return;

    const activeVideo = FORMULATION_VIDEOS[currentVideo];
    const timer = window.setTimeout(() => {
      setCurrentVideo((current) => (current + 1) % FORMULATION_VIDEOS.length);
    }, activeVideo.duration * 1000);

    return () => window.clearTimeout(timer);
  }, [currentVideo, cachedSrcs]);

  const activeSrc = cachedSrcs[currentVideo];

  return (
    <section className="relative flex min-h-screen items-end overflow-hidden px-5 pb-16 pt-32 sm:px-8 lg:px-12 lg:pb-20">
      {/* Background Videos */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence mode="sync">
          {activeSrc && (
            <motion.video
              key={activeSrc}
              src={activeSrc}
              autoPlay
              muted
              playsInline
              initial={{ opacity: 0, scale: 1.01 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                opacity: { duration: 1.5, ease: [0.4, 0, 0.2, 1] },
                scale: { duration: 2.5, ease: [0.22, 1, 0.36, 1] },
              }}
              className="absolute inset-0 h-full w-full object-cover"
            />
          )}
        </AnimatePresence>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-t from-black/75 via-transparent to-black/20" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1800px]">
        <div className="max-w-[980px]">
          {/* Headline */}
          <h1 className="font-heading text-[42px] font-black uppercase leading-[0.92] tracking-[-2px] text-[#fffde6] sm:text-[58px] md:text-[72px] lg:text-[88px]">
            <span
              style={{ textShadow: "0 2px 4px rgba(0, 0, 0, 0.38)" }}
            >
              The Unthinkable,
            </span>

            <br />

            <span
              className="text-[#f89b21]"
              style={{ textShadow: "0 2px 4px rgba(0, 0, 0, 0.35)" }}
            >
              Made Edible.
            </span>
          </h1>

          {/* Description */}
          <p
            className="mt-8 max-w-[760px] text-justify text-[17px] leading-8 text-[#fffde6]/82 sm:text-[19px] lg:text-[20px]"
            style={{ textShadow: "0 1px 3px rgba(0, 0, 0, 0.42)" }}
          >
            Zeovus Food doesn&apos;t start by asking what format you want, it
            starts by asking what problem you&apos;re solving, then builds
            toward that goal in whatever format it takes. Flour or freeze-dried,
            liquid concentrate or shelf-stable pouch, a single sachet or a bulk
            ingredient drum: if it&apos;s food, our in-house R&amp;D team can
            formulate it, test it, and put it on a production line.
          </p>
        </div>
      </div>
    </section>
  );
}