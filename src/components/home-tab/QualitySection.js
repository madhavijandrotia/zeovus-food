"use client";

import Image from "next/image";
import { motion} from "motion/react";

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
    y: 100,
    scale: 0.92,
    rotateX: 10,
    clipPath: "inset(16% 0% 16% 0% round 26px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    clipPath: "inset(0% 0% 0% 0% round 26px)",
    transition: {
      duration: 0.95,
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
      className="relative overflow-hidden bg-[#efe0c3] px-5 py-20 sm:px-8 lg:px-14 lg:py-28"
    >
      {/* Large opening wipe */}
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

      {/* Animated background glow */}
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

      {/* Fine grain texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:radial-gradient(#294526_0.75px,transparent_0.75px)] [background-size:11px_11px]" />

      <div className="relative z-10 mx-auto max-w-[1380px]">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-[760px] overflow-hidden text-center lg:mb-16">
          <motion.div variants={headingVariants}>
            <motion.span
              initial={{ opacity: 0, letterSpacing: "0.7em" }}
              whileInView={{ opacity: 0.65, letterSpacing: "0.35em" }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mb-4 block text-[10px] font-semibold uppercase text-[#52643a] sm:text-xs"
            >
              Better nutrition, beautifully made
            </motion.span>

            <h2 className="font-heading text-[44px] font-bold uppercase leading-[0.92] tracking-[-0.03em] text-[#294526] sm:text-[54px] lg:text-[68px]">
              Food That Does More
            </h2>
          </motion.div>
        </div>

        {/* Same card arrangement */}
        <motion.div
          variants={gridVariants}
          className="mx-auto grid max-w-[1240px] grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4"
          style={{
            perspective: "1200px",
          }}
        >
          {products.map((product, index) => {
            const isFeatured = index === 0 || index === 1;

            return (
              <motion.article
                key={product.id}
                variants={cardVariants}
                whileHover={{
                  y: -12,
                  scale: 1.012,
                  rotateX: 1.2,
                  transition: {
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  },
                }}
                className={`group relative isolate overflow-hidden rounded-[26px] shadow-[0_20px_55px_rgba(40,35,25,0.1)] transition-shadow duration-500 hover:shadow-[0_30px_90px_rgba(40,35,25,0.2)] ${
                  isFeatured
                    ? "min-h-[380px] sm:col-span-2 xl:min-h-[430px]"
                    : "min-h-[310px] sm:min-h-[340px]"
                }`}
                style={{
                  backgroundColor: product.background,
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Image reveal and hover zoom */}
                <motion.div
                  className="absolute inset-0"
                  initial={{
                    scale: 1.16,
                    filter: "blur(8px)",
                  }}
                  whileInView={{
                    scale: 1,
                    filter: "blur(0px)",
                  }}
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
                  transition={{
                    duration: 1.15,
                    delay: 0.12 + index * 0.07,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes={
                      isFeatured
                        ? "(max-width: 640px) 100vw, 50vw"
                        : "(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    }
                    className="object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08]"
                  />
                </motion.div>

                {/* Cinematic overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-black/5" />

                <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent opacity-50" />

                {/* Moving glow on hover */}
                <div className="pointer-events-none absolute inset-y-0 left-[-65%] z-10 w-[38%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-all duration-1000 ease-out group-hover:left-[130%] group-hover:opacity-100" />

                {/* Content */}
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 35,
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
                    duration: 0.8,
                    delay: 0.42 + index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute inset-x-0 bottom-0 z-20 p-5 sm:p-6"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <span
                      className="block text-[10px] font-semibold uppercase tracking-[0.25em] opacity-80"
                      style={{
                        color: product.accent,
                      }}
                    >
                      Zeovus Food
                    </span>

                    <span
                      className="h-px w-0 opacity-50 transition-all duration-500 group-hover:w-10"
                      style={{
                        backgroundColor: product.accent,
                      }}
                    />
                  </div>

                  <h3
                    className={`max-w-[480px] font-heading font-bold leading-[1.02] tracking-[-0.02em] ${
                      isFeatured
                        ? "text-[30px] sm:text-[36px] lg:text-[42px]"
                        : "text-[23px] sm:text-[26px]"
                    }`}
                    style={{
                      color: product.accent,
                    }}
                  >
                    {product.title}
                  </h3>

                  {isFeatured && (
                    <div className="grid grid-rows-[0fr] transition-all duration-500 ease-out group-hover:mt-3 group-hover:grid-rows-[1fr]">
                      <div className="overflow-hidden">
                        <p
                          className="max-w-[430px] translate-y-4 text-sm leading-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-80"
                          style={{
                            color: product.accent,
                          }}
                        >
                          {product.description}
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>

                {/* Premium border */}
                <div className="pointer-events-none absolute inset-0 z-30 rounded-[26px] border border-white/15 transition-colors duration-500 group-hover:border-white/40" />

                <div className="pointer-events-none absolute inset-[1px] z-30 rounded-[25px] shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]" />
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}