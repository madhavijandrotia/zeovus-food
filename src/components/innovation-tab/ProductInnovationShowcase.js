"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const products = [
  {
    id: 1,
    number: "01",
    title: "Chickpea & Soybean Spaghetti / Fettuccine",
    description:
      "Same 7-minute cook. Three times the protein, in one of the fastest-growing pasta categories.",
    image: "/products/chickpea-pasta1.webp",
    background: "#ead8b6",
    textColor: "#294526",
    tags: ["42g protein / 100g", "Gluten-free"],
    highlights: ["Fast cook", "Plant protein", "Retail-ready"],
    href: "/products/chickpea-soybean-spaghetti",
  },
  {
    id: 2,
    number: "02",
    title: "Green Dal & Edamame Spaghetti",
    description:
      "The highest-protein noodle in our range, built in the same legume-pasta format buyers already understand.",
    image: "/products/green-dal-pasta1.webp",
    background: "#294526",
    textColor: "#f5e8c9",
    tags: ["51g protein / 100g"],
    highlights: ["High protein", "Legume based", "Clean label"],
    href: "/products/green-dal-edamame-spaghetti",
  },
  {
    id: 3,
    number: "03",
    title: "High-Protein Pasta (Seed-Based)",
    description:
      "Pasta built from seeds, not refined flour, for the low-carb, clean-label shelf.",
    image: "/products/high-protein-pasta.webp",
    background: "#c9552f",
    textColor: "#fff4db",
    tags: ["31g protein / 100g", "Gluten-free"],
    highlights: ["Seed based", "Low carb", "Shelf ready"],
    href: "/products/high-protein-pasta",
  },
  {
    id: 4,
    number: "04",
    title: "Protein Whole Wheat Flour",
    description: "A wheat flour re-engineered for muscle, not just meals.",
    image: "/products/whole-wheat-flour1.webp",
    background: "#ead8b6",
    textColor: "#294526",
    tags: ["32g protein / 100g"],
    highlights: ["Everyday use", "Higher protein", "Familiar format"],
    href: "/products/protein-whole-wheat-flour",
  },
  {
    id: 5,
    number: "05",
    title: "Protein Flour Concentrate",
    description: "One scoop, any flour, no change in taste.",
    image: "/products/protein-concentrate1.webp",
    background: "#294526",
    textColor: "#f5e8c9",
    tags: ["54g protein / 100g"],
    highlights: ["Neutral taste", "Flexible dosage", "B2B ready"],
    href: "/products/protein-flour-concentrate",
  },
  {
    id: 6,
    number: "06",
    title: "Instant Smoothies",
    description: "Just add milk or yoghurt. No blender, no compromise.",
    image: "/products/instant-smoothie1.webp",
    background: "#c9552f",
    textColor: "#fff4db",
    tags: ["Zero prep equipment"],
    highlights: ["Single serve", "High protein", "Instant format"],
    href: "/products/instant-smoothies",
  },
];

export default function ProductInnovationShowcase() {
  return (
    <section className="bg-[#f7f5ef] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
      <motion.div
        initial={{
          opacity: 0,
          y: 28,
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
        className="mx-auto mb-14 max-w-[980px] text-center lg:mb-20"
      >
        <p className="font-heading text-[28px] font-bold leading-[1.25] tracking-[-0.02em] text-[#294526] sm:text-[36px] lg:text-[46px]">
          “Every one of these started as a formulation brief, not a recipe, a
          problem our research team was handed, and built the answer to, from
          the ground up.”
        </p>
      </motion.div>
      <div className="mx-auto max-w-[1500px] space-y-14 lg:space-y-20">
        {products.map((product, index) => {
          const imageOnLeft = index % 2 === 0;

          return (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{
                duration: 0.75,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:items-stretch"
            >
              {/* Image */}
              <div
                className={`relative min-h-[420px] overflow-hidden rounded-[30px] shadow-[0_24px_60px_rgba(34,40,28,0.12)] sm:min-h-[560px] lg:min-h-[680px] ${
                  imageOnLeft ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out hover:scale-[1.035]"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />

                <span className="absolute right-5 top-5 rounded-full border border-white/30 bg-black/20 px-3 py-1 text-[11px] font-bold tracking-[0.18em] text-white backdrop-blur-md">
                  {product.number}
                </span>
              </div>

              {/* Information panel */}
              <div
                className={`group relative flex min-h-[420px] flex-col overflow-hidden rounded-[30px] p-7 shadow-[0_24px_60px_rgba(34,40,28,0.1)] sm:min-h-[560px] sm:p-10 lg:min-h-[680px] lg:p-12 ${
                  imageOnLeft ? "lg:order-2" : "lg:order-1"
                }`}
                style={{
                  backgroundColor: product.background,
                  color: product.textColor,
                }}
              >
                {/* Background number */}
                <span className="pointer-events-none absolute -right-3 -top-10 font-heading text-[150px] font-black leading-none opacity-[0.045] sm:text-[210px]">
                  {product.number}
                </span>

                {/* Tags */}
                <div className="relative z-10 flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-current/25 px-3 py-1.5 text-[11px] font-bold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Main content */}
                <div className="relative z-10 mt-10 max-w-[650px]">
                  <p className="text-[11px] font-bold uppercase tracking-[0.28em] opacity-65">
                    Product Innovation
                  </p>

                  <h3 className="mt-4 max-w-[620px] font-heading text-[34px] font-bold uppercase leading-[0.96] tracking-[-0.025em] sm:text-[46px] lg:text-[54px]">
                    {product.title}
                  </h3>

                  <p className="mt-6 max-w-[560px] text-[16px] leading-8 opacity-78 sm:text-[18px]">
                    {product.description}
                  </p>
                </div>

                {/* Highlight chips */}
                <div className="relative z-10 mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {product.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="rounded-[18px] border border-current/15 bg-white/[0.06] px-4 py-4 backdrop-blur-sm"
                    >
                      <span className="text-[11px] font-bold uppercase tracking-[0.12em] opacity-75">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bottom CTA */}
                <div className="relative z-10 mt-auto flex items-end justify-between gap-5 pt-10">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.22em] opacity-55">
                      Built by Zeovus R&amp;D
                    </p>

                    <p className="mt-2 max-w-[360px] text-sm leading-6 opacity-72">
                      From formulation bench to production line.
                    </p>
                  </div>

                  <Link
                    href={product.href}
                    aria-label={`View ${product.title}`}
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-current/30 bg-current/10 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
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

                {/* Decorative glow */}
                <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-white/[0.08] blur-[70px] transition-transform duration-700 group-hover:scale-125" />
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
