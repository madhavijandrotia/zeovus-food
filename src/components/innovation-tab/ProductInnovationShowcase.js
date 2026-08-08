"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const products = [
  {
    id: 1,
    number: "01",
    title: "Chickpea & Soybean Spaghetti / Fettuccine",
    description:
      "Made with 100% chickpea and soybean. Delivers 42g protein per 100g and 18g dietary fibre per 100g. Gluten free, made with no wheat or maida and easy to cook.",
    image: "/products/chickpea-pasta2.png",
    background: "#ead8b6",
    textColor: "#294526",
    tags: ["42g Protein / 100g", "18g Fibre / 100g", "Gluten Free"],
    href: "/products/chickpea-soybean-spaghetti",
    nutrition: {
      serving: "Amount Per 100g",
      values: [
        { label: "Calories", value: "365 kcal" },
        { label: "Total Carbohydrate", value: "42g" },
        { label: "Dietary Fiber", value: "18g" },
        { label: "Protein", value: "42g" },
        { label: "Total Fat", value: "4g" },
        { label: "Cholesterol", value: "0mg" },
        { label: "Sodium", value: "2mg" },
      ],
    },
  },
  {
    id: 2,
    number: "02",
    title: "Green Dal & Edamame Spaghetti",
    description:
      "Made with 100% green dal and edamame. Delivers 51g protein per 100g and 16g dietary fibre per 100g. Gluten free, made with no wheat or maida and easy to cook.",
    image: "/products/green-dal-pasta2.png",
    background: "#294526",
    textColor: "#f5e8c9",
    tags: ["51g Protein / 100g", "16g Fibre / 100g", "Gluten Free"],
    href: "/products/green-dal-edamame-spaghetti",

    nutrition: {
      serving: "Amount Per 100g",
      values: [
        { label: "Calories", value: "369 kcal" },
        { label: "Total Carbohydrate", value: "33g" },
        { label: "Dietary Fiber", value: "16g" },
        { label: "Protein", value: "51g" },
        { label: "Total Fat", value: "4g" },
        { label: "Cholesterol", value: "0mg" },
        { label: "Sodium", value: "392mg" },
      ],
    },
  },
  {
    id: 3,
    number: "03",
    title: "High-Protein Pasta (Seed-Based)",
    description:
      "High-protein pasta made with real ingredients including almond flour, psyllium husk, flaxseeds, sunflower seeds, coconut flour, sesame seeds, pumpkin seeds and watermelon seeds. Made with no maida, gluten free and delivers 32g protein per 100g.",
    image: "/products/high-protein-pasta1.png",
    background: "#c9552f",
    textColor: "#fff4db",
    tags: ["31g Protein / 100g", "Gluten Free", "No Maida"],
    href: "/products/high-protein-pasta",
    nutrition: {
      serving: "Amount Per 100 gms",
      values: [
        { label: "Calories", value: "364.10kcal" },
        { label: "Total Carbohydrates", value: "57.65g" },
        { label: "Dietary Fiber", value: "44.71g" },
        { label: "Protein", value: "31.23g" },
        { label: "Total Fats", value: "0.96g" },
        { label: "Total Sugar", value: "3.50g" },
      ],
    },
  },
  {
    id: 4,
    number: "04",
    title: "Protein Whole Wheat Flour",
    description:
      "Made with whole wheat and brown rice protein, delivering complete protein (all amino acids) with 32g protein per 100g. High in fibre, naturally sourced and designed to support muscle health while remaining light and easy to digest.",
    image: "/products/whole-wheat-flour11.png",
    background: "#ead8b6",
    textColor: "#294526",
    tags: ["32g Protein / 100g", "Complete Protein", "High Fibre"],
    href: "/products/protein-whole-wheat-flour",

    nutrition: {
      serving: "Amount Per 100g",
      values: [
        { label: "Calories", value: "378 kcal" },
        { label: "Total Carbohydrate", value: "62.12g" },
        { label: "Dietary Fiber", value: "7.98g" },
        { label: "Protein", value: "32g" },
        { label: "Total Fat", value: "2.28g" },
        { label: "Cholesterol", value: "0mg" },
        { label: "Sodium", value: "15.50mg" },
      ],
    },
  },
  {
    id: 5,
    number: "05",
    title: "Protein Flour Concentrate",
    description:
      "A carefully formulated plant-based, high-protein + high-fibre blend designed to upgrade your favourite food. Simply mix it with any flour of your choice to add protein and fibre with no change in taste, texture or cooking method.",
    image: "/products/protein-concentrate1.png",
    background: "#294526",
    textColor: "#f5e8c9",
    tags: ["54g Protein / 100g", "12g Fibre / 100g", "Plant Based"],
    href: "/products/protein-flour-concentrate",

    ingredients: [
      "Pea Protein Isolate",
      "Rice Protein Isolate",
      "Chana Sattu",
      "Psyllium Husk",
      "Inulin",
      "Oat Flour",
      "Methi Powder",
      "Ajwain Powder",
      "Himalayan Pink Salt",
      "Ascorbic Acid (Vit C)",
    ],
  },
  {
    id: 6,
    number: "06",
    title: "High-Protein Smoothies",
    description:
      "High-Protein Smoothies made with real fruit. Delivers 10g protein and 5–8g fibre per serving. Just add 1 sachet (35g) to 150ml milk, shake well—no blender needed and enjoy in under 30 seconds.",
    image: "/products/instant-smoothie1.png",
    background: "#c9552f",
    textColor: "#fff4db",
    tags: ["10g Protein", "5–8g Fibre", "Ready in 30 seconds"],
    href: "/products?category=beverages",

    flavours: [
      "Alphonso Mango",
      "Strawberry",
      "Apple Cinnamon",
      "Banana Choco",
      "Chickoo",
    ],
  },
];

export default function ProductInnovationShowcase() {
  return (
    <section className="bg-[#f7f5ef] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
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
                  <h3 className="mt-4 max-w-[620px] font-heading text-[34px] font-bold uppercase leading-[0.96] tracking-[-0.025em] sm:text-[46px] lg:text-[54px]">
                    {product.title}
                  </h3>

                  <p className="mt-6 max-w-[560px] text-[16px] leading-8 opacity-78 sm:text-[18px]">
                    {product.description}
                  </p>

                  {/* Ingredients / Contains */}
                  {product.ingredients && (
                    <div className="mt-8 max-w-[560px]">
                      <div className="border-b-[4px] border-current pb-3">
                        <h4 className="font-heading text-[30px] font-bold leading-none sm:text-[36px]">
                          Contains
                        </h4>
                      </div>

                      <div className="mt-5 flex flex-wrap gap-2.5">
                        {product.ingredients.map((ingredient) => (
                          <span
                            key={ingredient}
                            className="rounded-full border border-current/30 px-4 py-2 text-[14px] font-medium leading-tight sm:text-[16px]"
                          >
                            {ingredient}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Nutrition Facts */}
                  {!product.ingredients && product.nutrition && (
                    <div className="mt-8 max-w-[520px]">
                      <div className="border-b-[4px] border-current pb-3">
                        <h4 className="font-heading text-[30px] font-bold leading-none sm:text-[36px]">
                          Nutrition Facts
                        </h4>

                        <p className="mt-2 text-[15px] font-medium sm:text-[17px]">
                          {product.nutrition.serving}
                        </p>
                      </div>

                      <div className="mt-1">
                        {product.nutrition.values.map((item) => (
                          <div
                            key={item.label}
                            className="flex items-center justify-between gap-6 border-b border-current/50 py-2.5 text-[15px] sm:text-[17px]"
                          >
                            <span>{item.label}</span>

                            <span className="font-medium tabular-nums">
                              {item.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Smoothie Flavours */}
                  {product.flavours && (
                    <div className="mt-8 max-w-[560px]">
                      {/* Heading + Arrow */}
                      <div className="flex items-center justify-between border-b-[4px] border-current pb-3">
                        <h4 className="font-heading text-[30px] font-bold leading-none sm:text-[36px]">
                          Flavours
                        </h4>

                        <Link
                          href={product.href}
                          aria-label={`View ${product.title}`}
                          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-current/40 transition hover:translate-x-1"
                        >
                          <ArrowRight size={20} />
                        </Link>
                      </div>

                      {/* Flavours */}
                      <div className="mt-5 flex flex-wrap gap-2.5">
                        {product.flavours.map((flavour) => (
                          <span
                            key={flavour}
                            className="rounded-full border border-current/30 px-4 py-2 text-[14px] font-medium leading-tight sm:text-[16px]"
                          >
                            {flavour}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Decorative glow */}
                <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-white/[0.08] blur-[70px] transition-transform duration-700 group-hover:scale-125" />
              </div>
            </motion.article>
          );
        })}

        {/* Quote */}
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
            “Every one of these started as a formulation brief, not a recipe — a
            problem our research team was handed, and built the answer to, from
            the ground up.”
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center"
        >
          <Link
            href="/working-together#enquiry"
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#294526] px-8 py-4 font-heading text-[18px] font-bold uppercase tracking-[0.08em] text-[#fff9df] transition hover:bg-[#3b5b33]"
          >
            Bring Us Your Next Brief
            <ArrowRight
              size={18}
              className="transition group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
