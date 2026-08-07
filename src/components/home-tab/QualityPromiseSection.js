"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const certifications = [
  {
    name: "Organic",
    image: "/logo/organic.png",
  },
  {
    name: "Vegan",
    image: "/logo/vegan.webp",
  },
  {
    name: "FSSAI",
    image: "/logo/fssai.png",
  },
  {
    name: "HACCP",
    image: "/logo/haccp.webp",
  },
  {
    name: "ISO 22000",
    image: "/logo/iso22000.png",
  },
  {
    name: "BRCGS",
    image: "/logo/brcgs.png",
  },
  {
    name: "Halal",
    image: "/logo/halal.png",
  },
  {
    name: "Kosher",
    image: "/logo/kosher.webp",
  },
];

function CertificationItems({ duplicate = false }) {
  return (
    <div
      className="certification-marquee__group"
      aria-hidden={duplicate ? "true" : undefined}
    >
      {certifications.map((certification) => (
        <div
          key={`${duplicate ? "duplicate" : "primary"}-${certification.name}`}
          className="flex h-[66px] min-w-[190px] shrink-0 items-center gap-3 rounded-full border border-[#26331c]/45 bg-[#fffbe5] px-4 shadow-[0_8px_25px_rgba(43,45,24,0.08)] sm:h-[72px] sm:min-w-[220px] sm:px-5"
        >
          <span className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#edf1d3] sm:h-12 sm:w-12">
            <Image
              src={certification.image}
              alt={duplicate ? "" : `${certification.name} certification`}
              fill
              sizes="48px"
              className="object-contain p-2"
            />
          </span>

          <span className="font-heading text-[19px] font-bold uppercase tracking-[0.01em] text-[#1d2117] sm:text-[22px]">
            {certification.name}
          </span>
        </div>
      ))}
    </div>
  );
}

function ScrollContent({ scrollProgress }) {
  /*
   * Text stays fully visible first.
   * After a small scroll, the text fades out and the seal appears.
   */

  const frameworkOpacity = useTransform(
    scrollProgress,
    [0, 0.18, 0.32, 0.45],
    [1, 1, 1, 0],
  );

  const frameworkY = useTransform(scrollProgress, [0.28, 0.45], [0, -24]);

  const frameworkScale = useTransform(scrollProgress, [0.28, 0.45], [1, 0.97]);

  const sealOpacity = useTransform(
    scrollProgress,
    [0.3, 0.44, 0.58],
    [0, 1, 1],
  );

  const sealScale = useTransform(scrollProgress, [0.3, 0.46], [0.7, 1]);

  const sealY = useTransform(scrollProgress, [0.3, 0.46], [45, 0]);

  return (
    <>
      {/* Framework text */}
      <motion.div
        style={{
          opacity: frameworkOpacity,
          y: frameworkY,
          scale: frameworkScale,
        }}
        className="mt-4 max-w-[680px] sm:mt-6"
      >
        <p className="font-heading text-[18px] font-bold uppercase leading-[1.28] tracking-[0.02em] text-[#fff9df] sm:text-[22px] lg:text-[30px]">
          Every product is verified through our proprietary ZQA framework with
          12 steps, 825 tested parameters and triple-layer checks from raw
          material to finished goods.
        </p>
      </motion.div>

      {/* Center seal */}
      <motion.div
        style={{
          opacity: sealOpacity,
          scale: sealScale,
          y: sealY,
        }}
        className="pointer-events-none absolute left-1/2 top-[57%] z-20 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 sm:h-[250px] sm:w-[250px] lg:top-[59%] lg:h-[320px] lg:w-[320px]"
      >
        <Image
          src="/seal1.png"
          alt="Zeovus quality approved seal"
          fill
          priority
          sizes="(max-width: 639px) 200px, (max-width: 1023px) 250px, 320px"
          className="object-contain"
        />
      </motion.div>
    </>
  );
}

export default function QualityPromiseSection() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 30%"],
  });

  return (
    <section
      ref={sectionRef}
      className="relative -mt-px overflow-hidden bg-[#eeddbc]"
    >
      {/* Main circular area */}
      <div className="relative mx-auto flex min-h-[760px] max-w-[1600px] justify-center overflow-hidden px-5 sm:min-h-[820px] sm:px-8 lg:min-h-[900px]">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.92,
            y: 70,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute left-1/2 top-[-70px] h-[680px] w-[680px] -translate-x-1/2 rounded-full bg-black sm:top-[-100px] sm:h-[790px] sm:w-[790px] lg:top-[-130px] lg:h-[980px] lg:w-[980px]"
        >
          {/* Circle content */}
          <div className="relative flex h-full flex-col items-center px-8 pt-[145px] text-center sm:px-16 sm:pt-[190px] lg:px-24 lg:pt-[210px]">
            <motion.p
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
                delay: 0.1,
              }}
              className="font-heading text-[24px] font-bold text-[#fff9df] sm:text-[31px] lg:text-[38px]"
            >
              QUALITY IS NOT A DEPARTMENT AT ZEOVUS
            </motion.p>

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
              className="font-heading text-[27px] font-bold leading-none text-[#d5542e] sm:text-[34px] lg:text-[40px]"
            >
              IT&apos;S OUR DNA.
            </motion.p>

            <ScrollContent scrollProgress={scrollYProgress} />
          </div>
        </motion.div>
      </div>

      {/* Certification marquee */}
      <div className="relative z-10 -mt-[230px] overflow-hidden py-5 sm:-mt-[210px] lg:-mt-[190px]">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-20 bg-gradient-to-r from-[#eeddbc] to-transparent sm:w-32" />

        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-20 bg-gradient-to-l from-[#eeddbc] to-transparent sm:w-32" />

        <div className="certification-marquee">
          <div className="certification-marquee__track">
            <CertificationItems />
            <CertificationItems duplicate />
          </div>
        </div>
      </div>

      {/* Bottom content */}
      <motion.div
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.4,
        }}
        transition={{
          duration: 0.65,
        }}
        className="relative z-10 mx-auto flex max-w-[580px] flex-col items-center px-6 pb-16 pt-8 text-center sm:pb-20 sm:pt-10"
      >
        <p className="max-w-[430px] text-sm leading-6 tracking-[0.03em] text-[#4e5b41] sm:text-base">
          From flours and pulses to spices and ready-to-eat, every range carries
          the same standard.
        </p>

        <Link
          href="/products"
          className="mt-6 rounded-full bg-[#151812] px-9 py-4 font-heading text-sm font-semibold text-[#fff9df] transition duration-300 hover:-translate-y-1 hover:bg-[#2a3021]"
        >
          View our Products
        </Link>
      </motion.div>

      <style jsx global>{`
        .certification-marquee {
          position: relative;
          width: 100%;
          overflow: hidden;
        }

        .certification-marquee__track {
          --marquee-gap: 0.75rem;

          display: flex;
          width: max-content;
          min-width: max-content;
          animation: certification-marquee-scroll 28s linear infinite;
          transform: translate3d(0, 0, 0);
          backface-visibility: hidden;
          will-change: transform;
        }

        .certification-marquee__group {
          display: flex;
          flex-shrink: 0;
          gap: var(--marquee-gap);
          padding-right: var(--marquee-gap);
        }

        @keyframes certification-marquee-scroll {
          from {
            transform: translate3d(0, 0, 0);
          }

          to {
            transform: translate3d(-50%, 0, 0);
          }
        }

        @media (min-width: 640px) {
          .certification-marquee__track {
            --marquee-gap: 1rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .certification-marquee__track {
            animation-duration: 60s;
          }
        }
      `}</style>
    </section>
  );
}
