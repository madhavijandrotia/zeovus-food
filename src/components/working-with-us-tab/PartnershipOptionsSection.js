"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const options = [
  {
    number: "01",
    title: "Co-Development & Formulation Innovation",
    description:
      "Bring us a brief. Or bring us a problem nobody's solved yet. Either way, our formulation team builds it with you.",
    image: "/images/CustomFormulationLong.webp",
    accent: "#c9552f",
  },
  {
    number: "02",
    title: "Private Label & White Label",
    description:
      "Launch under your name, built on our formulation and manufacturing standard from the first batch to the last.",
    image: "/images/PrivateLabelling.png",
    accent: "#789444",
  },
  {
    number: "03",
    title: "Distribution & Regional Partnership",
    description:
      "Take Zeovus Food formulations into markets we haven't reached yet, together.",
    image: "/images/DistributionPartnershipsLong.png",
    accent: "#294526",
  },
  {
    number: "04",
    title: "Bulk Ingredient & Raw Material Supply",
    description:
      "Staples, flours, proteins and functional ingredients, sourced and supplied at the volume your production line needs.",
    image: "/images/NewCategoryLong.png",
    accent: "#f39a22",
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

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function PartnershipOptionsSection() {
  return (
    <section className="relative overflow-hidden bg-[#efe0c3] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
      <div className="pointer-events-none absolute left-[-120px] top-[120px] h-[340px] w-[340px] rounded-full bg-[#c9552f]/10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-[-130px] right-[-80px] h-[380px] w-[380px] rounded-full bg-[#789444]/10 blur-[130px]" />

      <div className="relative mx-auto max-w-[1380px]">
        {/* Heading */}
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
            amount: 0.45,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mb-12 max-w-[820px] text-center lg:mb-16"
        >
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.32em] text-[#c35531] sm:text-[12px]">
            Partnership Options
          </p>

          <h2 className="font-heading text-[44px] font-bold uppercase leading-[0.94] tracking-[-0.03em] text-[#294526] sm:text-[56px] lg:text-[66px]">
            Four Ways To Work With Us
          </h2>

          <p className="mx-auto mt-6 max-w-[680px] text-[16px] leading-8 text-[#34422e]/72 sm:text-[18px]">
            Choose the model that fits your product, your market and the stage
            your business is at.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.12,
          }}
          className="grid grid-cols-1 gap-5 md:grid-cols-2"
        >
          {options.map((option) => (
            <motion.article
              key={option.number}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: {
                  duration: 0.25,
                  ease: "easeOut",
                },
              }}
              className="group relative min-h-[440px] overflow-hidden rounded-[28px] border border-[#294526]/10 bg-[#fff9df] shadow-[0_22px_60px_rgba(44,52,35,0.08)]"
            >
              {/* Image */}
              <div className="absolute inset-0">
                <Image
                  src={option.image}
                  alt={option.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                />

                {/* <div className="absolute inset-0 bg-gradient-to-t from-[#151812]/95 via-[#151812]/65 via-45% to-[#151812]/20" /> */}
              </div>

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-8">
                <span
                  className="mb-4 block h-1 w-12 rounded-full"
                  style={{
                    backgroundColor: option.accent,
                  }}
                />

                <h3
                  className="max-w-[560px] font-heading text-[28px] font-bold uppercase leading-[1.02] text-[#FFF4D6] sm:text-[34px]"
                  style={{
                    textShadow:
                      "0 2px 3px rgba(0, 0, 0, 0.85), 0 4px 10px rgba(0, 0, 0, 0.35)",
                  }}
                >
                  {option.title}
                </h3>

                <p
                  className="mt-4 max-w-[580px] text-[15px] font-medium leading-7 text-[#FFF4D6] sm:text-[16px]"
                  style={{
                    textShadow:
                      "0 1px 2px rgba(0, 0, 0, 0.9), 0 3px 8px rgba(0, 0, 0, 0.4)",
                  }}
                >
                  {option.description}
                </p>

                <Link
                  href="/working-together#enquiry"
                  aria-label={`Learn more about ${option.title}`}
                  className="mt-6 inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#FFF4D6]/70 text-[#FFF4D6] transition duration-300 group-hover:translate-x-1 group-hover:bg-[#FFF4D6] group-hover:text-[#151812]"
                  style={{
                    filter: "drop-shadow(0 2px 3px rgba(0, 0, 0, 0.55))",
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14" />
                    <path d="m13 5 7 7-7 7" />
                  </svg>
                </Link>
              </div>

              <div className="pointer-events-none absolute inset-0 rounded-[28px] border border-white/10 transition duration-300 group-hover:border-white/30" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
