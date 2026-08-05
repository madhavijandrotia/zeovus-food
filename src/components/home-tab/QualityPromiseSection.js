"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const certifications = [
  {
    name: "Organic",
    image: "/logo/organic.jpg",
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
    image: "/logo/halal.jpg",
  },
  {
    name: "Kosher",
    image: "/logo/kosher.webp",
  },
];

const repeatedCertifications = [...certifications, ...certifications];

export default function QualityPromiseSection() {
  return (
    <section className="relative -mt-px overflow-hidden bg-[#eeddbc]">
      {/* Main circular area */}
      <div className="relative mx-auto flex min-h-[670px] max-w-[1600px] justify-center overflow-hidden px-5 sm:px-8 lg:min-h-[740px]">
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
          className="absolute left-1/2 top-[-100px] h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-[#151812] sm:h-[720px] sm:w-[720px] lg:top-[-150px] lg:h-[880px] lg:w-[880px]"
        >
          {/* Circle content */}
          <div className="relative flex h-full flex-col items-center px-8 pt-[145px] text-center sm:px-16 sm:pt-[180px] lg:px-24 lg:pt-[195px]">
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
              className="font-heading text-[24px] font-bold uppercase leading-tight tracking-[0.02em] text-[#fff9df] sm:text-[31px] lg:text-[38px]"
            >
              Quality is not a department at Zeovus
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
              className="mt-2 font-heading text-[27px] font-bold uppercase leading-none text-[#d5542e] sm:text-[34px] lg:text-[40px]"
            >
              It&apos;s our DNA.
            </motion.p>

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                delay: 0.3,
              }}
              className="mt-8 max-w-[680px] sm:mt-12"
            >
              <p className="font-heading text-[18px] font-bold uppercase leading-[1.28] tracking-[0.02em] text-[#fff9df] sm:text-[22px] lg:text-[30px]">
                Every product is verified through our proprietary ZQA framework
                with 12 steps, 825 tested parameters, and triple-layer checks from
                raw material to finished goods.
              </p>
            </motion.div>

            {/* Stamp */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 2.2,
                rotate: -28,
                y: -60,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                rotate: -8,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.8,
              }}
              transition={{
                type: "spring",
                stiffness: 240,
                damping: 15,
                mass: 0.8,
                delay: 0.55,
              }}
              className="absolute bottom-[100px] right-[70px] hidden h-[125px] w-[125px] sm:block lg:bottom-[170px] lg:right-[120px] lg:h-[160px] lg:w-[160px]"
            >
              <Image
                src="/seal1.png"
                alt="Zeovus quality approved seal"
                fill
                sizes="120px"
                className="object-contain opacity-90"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Certification marquee */}
      <div className="relative z-10 -mt-[210px] overflow-hidden py-5 sm:-mt-[185px] lg:-mt-[155px]">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-20 bg-gradient-to-r from-[#eeddbc] to-transparent sm:w-32" />

        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-20 bg-gradient-to-l from-[#eeddbc] to-transparent sm:w-32" />

        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 28,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex w-max gap-3 will-change-transform sm:gap-4"
        >
          {repeatedCertifications.map((certification, index) => (
            <div
              key={`${certification.name}-${index}`}
              className="flex h-[66px] min-w-[190px] shrink-0 items-center gap-3 rounded-full border border-[#26331c]/45 bg-[#fffbe5] px-4 shadow-[0_8px_25px_rgba(43,45,24,0.08)] sm:h-[72px] sm:min-w-[220px] sm:px-5"
            >
              <span className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#edf1d3] sm:h-12 sm:w-12">
                <Image
                  src={certification.image}
                  alt=""
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
        </motion.div>
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
          From flours and pulses to spices and ready-to-eat, every range
          carries the same standard.
        </p>

        <Link
          href="/products"
          className="mt-6 rounded-full bg-[#151812] px-9 py-4 font-heading text-sm font-semibold text-[#fff9df] transition duration-300 hover:-translate-y-1 hover:bg-[#2a3021]"
        >
          View our Products
        </Link>
      </motion.div>
    </section>
  );
}
