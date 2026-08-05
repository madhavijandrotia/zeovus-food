"use client";

import Image from "next/image";
import { motion } from "motion/react";

const products = [
  {
    id: 1,
    title: "Chickpea & Soybean Spaghetti",
    image: "/products/chickpea-pasta1.png",
    background: "#d6dfa2",
    accent: "#f7ead0    ",
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
    y: 50,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function QualitySection() {
  return (
    <section className="relative overflow-hidden bg-[#efe0c3] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-[-100px] top-[180px] h-[320px] w-[320px] rounded-full bg-[#d2b98d]/25 blur-[110px]" />

      <div className="pointer-events-none absolute bottom-[-100px] right-[-60px] h-[360px] w-[360px] rounded-full bg-[#789444]/15 blur-[120px]" />

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
          className="mx-auto mb-12 max-w-[760px] text-center lg:mb-16"
        >

          <h2 className="font-heading text-[44px] font-bold uppercase leading-[0.92] tracking-[-0.03em] text-[#294526] sm:text-[54px] lg:text-[68px]">
            Food That Does More
          </h2>
        </motion.div>

        {/* Editorial product layout */}
        <motion.div
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{
    once: true,
    amount: 0.12,
  }}
  className="mx-auto grid max-w-[1240px] grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4"
>
  {products.map((product, index) => {
    const isFeatured = index === 0 || index === 1;

    return (
      <motion.article
        key={product.id}
        variants={cardVariants}
        whileHover={{
          y: -8,
          transition: {
            duration: 0.28,
            ease: "easeOut",
          },
        }}
        className={`group relative overflow-hidden rounded-[26px] shadow-[0_20px_55px_rgba(40,35,25,0.1)] ${
          isFeatured
            ? "min-h-[380px] sm:col-span-2 xl:min-h-[430px]"
            : "min-h-[310px] sm:min-h-[340px]"
        }`}
        style={{
          backgroundColor: product.background,
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
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

        <span
          className="absolute right-5 top-5 z-10 text-[11px] font-semibold tracking-[0.2em]"
          style={{
            color: product.accent,
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-6">
          <span
            className="block text-[10px] font-semibold uppercase tracking-[0.25em] opacity-80"
            style={{
              color: product.accent,
            }}
          >
            Zeovus Food
          </span>

          <h3
            className={`mt-2 max-w-[480px] font-heading font-bold leading-[1.02] ${
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
            <p
              className="mt-3 hidden max-w-[430px] translate-y-3 text-sm leading-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-80 sm:block"
              style={{
                color: product.accent,
              }}
            >
              {product.description}
            </p>
          )}
        </div>

        <div className="pointer-events-none absolute inset-0 rounded-[26px] border border-white/15 transition-colors duration-300 group-hover:border-white/35" />
      </motion.article>
    );
  })}
</motion.div>
      </div>
    </section>
  );
}
