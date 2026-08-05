"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function JourneySection() {
  return (
    <section className="overflow-hidden bg-[#f4f1e8]">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
        {/* Left content */}
        <motion.div
          initial={{
            opacity: 0,
            x: -60,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex items-center px-6 py-20 sm:px-10 lg:px-16 lg:py-24 xl:px-20"
        >
          <div className="mx-auto w-full max-w-[760px]">
            <motion.p
              initial={{
                opacity: 0,
                y: 18,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: 0.15,
              }}
              className="mb-6 text-[11px] font-bold uppercase tracking-[0.28em] text-[#c6532d] sm:text-[12px]"
            >
              Our Journey
            </motion.p>

            <motion.h2
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-[700px] font-heading text-[46px] font-bold uppercase leading-[0.98] tracking-[-0.025em] text-[#294526] sm:text-[58px] lg:text-[64px] xl:text-[72px]"
            >
              An undated story, still being written.
            </motion.h2>

            <motion.div
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.75,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-8 max-w-[720px] text-justify space-y-6 text-[16px] leading-[1.85] text-[#34422e]/90 sm:text-[18px]"
            >
              <p>
                We started as sourcing specialists, chasing the raw materials
                that define a region, the heat in a chilli, the fragrance in a
                grain, the character a place gives an ingredient that nowhere
                else can copy. That instinct hasn&apos;t changed. What&apos;s
                grown around it has.
              </p>

              <p>
                Behind that instinct now sits a full manufacturing ecosystem,
                stone mills, cold-grind lines, IQF tunnels and retort kitchens
                built not to replace the sourcing, but to protect it. Because
                the best ingredient in the world is only as good as what happens
                to it next.
              </p>

              <p>
                Today, Zeovus Food is as much a master producer as it is a
                premium source. We know true trust in this industry isn&apos;t
                won at the point of origin. It&apos;s forged in everything
                between the field and the finished product.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right image */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 1.06,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative min-h-[520px] overflow-hidden lg:min-h-screen"
        >
          <Image
            src="/images/our-journey.png"
            alt="Zeovus Food manufacturing journey"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-[1400ms] ease-out hover:scale-[1.025]"
          />

          {/* Slight overlays */}
          <div className="pointer-events-none absolute inset-0 bg-black/[0.04]" />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-transparent lg:from-black/[0.03]" />

          {/* Vertical divider */}
          <div className="pointer-events-none absolute left-0 top-0 hidden h-full w-px bg-black/10 lg:block" />
        </motion.div>
      </div>
    </section>
  );
}