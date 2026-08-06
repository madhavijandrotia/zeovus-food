"use client";

import Image from "next/image";
import { motion } from "motion/react";

const products = [
  {
    id: 1,
    title: "Chickpea & Soybean Spaghetti",
    image: "/products/chickpea-pasta1.png",
    background: "#d6dfa2",
    accent: "#f7ead0",
    description: "Protein-rich pasta made for balanced, everyday meals.",
  },
  {
    id: 2,
    title: "Green Dal & Edamame Spaghetti",
    image: "/products/green-dal-pasta.png",
    background: "#cb5a32",
    accent: "#fff2d2",
    description:
      "A vibrant blend of green dal and edamame with satisfying texture.",
  },
  {
    id: 3,
    title: "High-Protein Pasta",
    image: "/products/high-protein-pasta1.png",
    background: "#f69a20",
    accent: "#f7ead0",
    description:
      "Seed-based pasta designed to add more protein to every plate.",
  },
  {
    id: 4,
    title: "Protein Whole Wheat Flour",
    image: "/products/whole-wheat-flour.png",
    background: "#263f22",
    accent: "#f5e8c9",
    description:
      "Whole wheat flour with additional protein for everyday cooking.",
  },
  {
    id: 5,
    title: "Protein Flour Concentrate",
    image: "/products/protein-concentrate.png",
    background: "#bb9473",
    accent: "#f7ead0",
    description:
      "A versatile flour concentrate created for modern food applications.",
  },
  {
    id: 6,
    title: "Instant Smoothies",
    image: "/products/instant-smoothies.png",
    background: "#71963d",
    accent: "#f7ead0",
    description:
      "Convenient smoothie blends packed with flavour and nourishment.",
  },
];

const sectionVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.12,
    },
  },
};

const headingVariants = {
  hidden: {
    opacity: 0,
    y: 70,
    rotate: 2,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.94,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function QualitySection() {
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.08,
      }}
      className="relative overflow-hidden bg-[#efe0c3] px-4 py-16 sm:px-6 md:px-8 md:py-20 lg:px-12 lg:py-24 xl:py-28"
    >
      {/* Opening wipe */}
      <motion.div
        initial={{ scaleY: 1 }}
        whileInView={{ scaleY: 0 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{
          duration: 1.15,
          ease: [0.76, 0, 0.24, 1],
        }}
        style={{
          transformOrigin: "bottom",
        }}
        className="pointer-events-none absolute inset-0 z-50 bg-[#294526]"
      />

      {/* Background decorations */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.45,
          x: -140,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1.6,
          delay: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="pointer-events-none absolute left-[-100px] top-[180px] h-[320px] w-[320px] rounded-full bg-[#d2b98d]/35 blur-[110px]"
      />

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.45,
          x: 140,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1.7,
          delay: 0.45,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="pointer-events-none absolute bottom-[-100px] right-[-60px] h-[360px] w-[360px] rounded-full bg-[#789444]/20 blur-[120px]"
      />

      {/* Grain texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:radial-gradient(#294526_0.75px,transparent_0.75px)] [background-size:11px_11px]" />

      <div className="relative z-10 mx-auto max-w-[1380px]">
        {/* Heading */}
        <div className="mx-auto mb-10 max-w-[760px] overflow-hidden text-center md:mb-12 lg:mb-16">
          <motion.div variants={headingVariants}>
            <h2 className="font-heading text-[38px] font-bold uppercase leading-[0.92] tracking-[-0.03em] text-[#294526] sm:text-[46px] md:text-[52px] lg:text-[60px] xl:text-[68px]">
              Food That Does More
            </h2>
          </motion.div>
        </div>

        {/* Product grid */}
        <motion.div
          variants={gridVariants}
          className="mx-auto grid max-w-[1240px] grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4 md:gap-3 lg:gap-4 xl:gap-5"
        >
          {products.map((product, index) => {
            const isFeatured = index === 0 || index === 1;

            return (
              <motion.article
                key={product.id}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  scale: 1.01,
                  transition: {
                    duration: 0.3,
                    ease: "easeOut",
                  },
                }}
                className={`group relative isolate overflow-hidden rounded-[18px] shadow-[0_20px_55px_rgba(40,35,25,0.1)] transition-shadow duration-500 hover:shadow-[0_30px_90px_rgba(40,35,25,0.2)] lg:rounded-[22px] xl:rounded-[26px] ${
                  isFeatured
                    ? "h-[300px] sm:col-span-2 sm:h-[330px] md:col-span-2 md:h-[220px] lg:h-[260px] xl:h-[300px]"
                    : "h-[280px] sm:h-[300px] md:h-[175px] lg:h-[205px] xl:h-[235px]"
                }`}
                style={{
                  backgroundColor: product.background,
                }}
              >
                {/* Image */}
                <div className="absolute inset-0">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    priority={index < 2}
                    sizes={
                      isFeatured
                        ? "(max-width: 639px) 100vw, (max-width: 767px) 100vw, 50vw"
                        : "(max-width: 639px) 100vw, (max-width: 767px) 50vw, 25vw"
                    }
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  />
                </div>

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent opacity-60" />

                {/* Hover shine */}
                <div className="pointer-events-none absolute inset-y-0 left-[-65%] z-10 w-[38%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-all duration-1000 ease-out group-hover:left-[130%] group-hover:opacity-100" />

                {/* Text */}
                <div className="absolute inset-x-0 bottom-0 z-20 p-4 lg:p-5 xl:p-6">
                  <div className="mb-2 flex items-center gap-2 lg:mb-3 lg:gap-3">
                    <span
                      className="block text-[7px] font-semibold uppercase tracking-[0.18em] opacity-80 lg:text-[9px] xl:text-[10px] xl:tracking-[0.25em]"
                      style={{
                        color: product.accent,
                      }}
                    >
                      Zeovus Food
                    </span>

                    <span
                      className="h-px w-0 opacity-50 transition-all duration-500 group-hover:w-8"
                      style={{
                        backgroundColor: product.accent,
                      }}
                    />
                  </div>

                  <h3
                    className={`max-w-[480px] font-heading font-bold uppercase leading-[1] tracking-[-0.02em] ${
                      isFeatured
                        ? "text-[28px] sm:text-[32px] md:text-[23px] lg:text-[30px] xl:text-[36px]"
                        : "text-[22px] sm:text-[24px] md:text-[15px] lg:text-[19px] xl:text-[23px]"
                    }`}
                    style={{
                      color: product.accent,
                    }}
                  >
                    {product.title}
                  </h3>

                  {isFeatured && (
                    <p
                      className="mt-2 hidden max-w-[430px] text-[10px] leading-4 opacity-75 lg:block xl:text-sm xl:leading-6"
                      style={{
                        color: product.accent,
                      }}
                    >
                      {product.description}
                    </p>
                  )}
                </div>

                {/* Border */}
                <div className="pointer-events-none absolute inset-0 z-30 rounded-[18px] border border-white/15 transition-colors duration-500 group-hover:border-white/40 lg:rounded-[22px] xl:rounded-[26px]" />
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}
