"use client";

import { useEffect, useRef } from "react";

export default function ProductShowcase() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;

    if (!section || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch((error) => {
            console.log("Video autoplay was prevented:", error);
          });
        } else {
          video.pause();
        }
      },
      {
        // Start playing when around 20% of the section becomes visible.
        threshold: 0.2,
      },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      video.pause();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen min-h-[650px] overflow-hidden bg-[#edc99f]"
    >
      {/* Background video */}
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/product-showcase1.mp4" type="video/mp4" />
      </video>

      {/* Optional soft overlay */}
      <div className="pointer-events-none absolute inset-0 bg-black/[0.02]" />

      {/* Left text */}
      <div className="pointer-events-none absolute left-6 top-16 z-10 sm:left-10 sm:top-20 lg:left-16 lg:top-14">
        <h2 className="max-w-[360px] font-heading text-[54px] font-bold uppercase leading-[0.9] tracking-[-0.03em] text-[#AE445A] sm:text-[72px] lg:text-[88px]">
          <span className="block">Discover</span>
          <span className="block">The good</span>
        </h2>
      </div>

      {/* Right text */}
      <div className="pointer-events-none absolute bottom-12 right-6 z-10 sm:right-10 lg:right-16">
        <h2 className="font-heading text-[54px] font-bold uppercase leading-[0.9] tracking-[-0.03em] text-[#AE445A] sm:text-[68px] lg:text-[84px]">
          <span className="block">Side of</span>
          <span className="block">Produce</span>
        </h2>
      </div>
    </section>
  );
}
