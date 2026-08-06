"use client";

import Image from "next/image";
import { motion } from "motion/react";

const sections = [
  {
    key: "sourcing",
    eyebrow: "Sourcing",
    title: "Sourcing",
    description:
      "The system starts long before a product reaches the manufacturing line. We verify where ingredients come from, how they perform and whether they can hold up to the standard the final product requires.",
    image: "/images/sourcing-system.png",
    theme: "cream",
    items: [
      {
        title: "Sourcing & Origin Audits",
        text: "We audit the source before we audit the product. Suppliers are vetted for authenticity, ethics, and consistency before a single batch is bought.",
      },
      {
        title: "Direct & Origin-Based Sourcing",
        text: "Grains, pulses and speciality flours are sourced from the regions known for them, not the cheapest available lot, but the right one for the job.",
      },
      {
        title: "Ingredient Traceability",
        text: "Every raw material is tracked back to its source, so a batch can be traced to the farm or supplier it came from, not just the warehouse it shipped from.",
      },
      {
        title: "Functional Ingredient Vetting",
        text: "Protein isolates, fibres and actives are tested for potency and purity before approval, so a formula's nutritional grounds hold up in the lab, not just on paper.",
      },
    ],
  },
  {
    key: "processing",
    eyebrow: "Processing Capabilities",
    title: "Built Around The Product",
    description:
      "Every process is selected around what the product needs to preserve, improve or become, from stone milling and extrusion to freeze-drying, retort and cryogenic freezing.",
    image: "/images/processing-system.png",
    theme: "dark",
    items: [
      {
        title: "Stone Milling & Cold-Grind",
        text: "Traditional stone milling and cold-grind processing preserve nutrients and flavour that high-heat processing destroys.",
      },
      {
        title: "Extrusion Processing",
        text: "High-protein pasta, spaghetti and fettuccine are formed through precision extrusion, giving legume and seed-based doughs their shape and bite without refined flour.",
      },
      {
        title: "Freeze-Drying",
        text: "Fruit, functional ingredients, instant smoothies, hummus and soups are freeze-dried to lock in nutrition and flavour without preservatives.",
      },
      {
        title: "Roasting & Puffing",
        text: "Chana, foxnuts, peanuts and namkeen snacks are roasted and puffed in-house, building crunch and flavour through heat and pressure alone.",
      },
      {
        title: "IQF & Cryogenic Freezing",
        text: "Products are individually quick frozen at cryogenic temperatures, locking in texture and nutrition the moment they are harvested or prepared.",
      },
      {
        title: "Precision Dosing & Sachet Filling",
        text: "Instant smoothies, hummus and soup sachets are filled and sealed to an exact gram count for consistent nutrition and portioning.",
      },
      {
        title: "Retort & Shelf-Stable Processing",
        text: "Ready-to-eat curries, rice and combos are processed for ambient shelf life, no refrigeration, no compromise.",
      },
    ],
  },
  {
    key: "packaging",
    eyebrow: "Packaging Capabilities",
    title: "Protection After Production",
    description:
      "The final product is only as good as the system protecting it after it leaves the line. Every packaging format is chosen to defend against moisture, oxygen, light and tampering.",
    image: "/images/packaging-system.png",
    theme: "cream",
    items: [
      {
        title: "Multi-Layer Laminate Packaging",
        text: "Flours, pasta and snacks are packed in multi-layer barrier laminates built to block moisture, oxygen and light.",
      },
      {
        title: "Retort Pouch Packaging",
        text: "Ready-to-eat meals are sealed in high-barrier retort pouches engineered for high-pressure sterilisation and ambient shelf life.",
      },
      {
        title: "High-Barrier Sachet Packaging",
        text: "Instant smoothies, hummus and soup sachets use laminated barrier films to preserve freeze-dried quality until opening.",
      },
      {
        title: "Nitrogen Flushing & MAP",
        text: "Oxygen-sensitive products are packed under nitrogen flush or modified atmosphere to slow oxidation and extend freshness.",
      },
      {
        title: "Food-Grade, Tamper-Evident Sealing",
        text: "Every pack is heat-sealed to a tamper-evident standard so it reaches the shelf exactly as it left the facility.",
      },
    ],
  },
  {
    key: "quality",
    eyebrow: "Quality & Trust",
    title: "Verified At Every Stage",
    description:
      "Quality is not a final inspection. It is a system applied from raw material approval through production, packaging and release.",
    image: "/images/quality-system.png",
    theme: "dark",
    items: [
      {
        title: "Packaging & Quality Assurance",
        text: "Every product earns the ZQA seal only after our 12-step quality architecture and 825 verified testing parameters.",
      },
      {
        title: "Global Regulatory Compliance",
        text: "Manufactured in facilities compliant with FSSAI, HACCP, ISO 22000, US FDA and BRCGS standards, with Halal, Kosher, Organic and Vegan certifications available where required.",
      },
      {
        title: "Batch-Level Traceability",
        text: "Every batch is tracked from source to shipment, the lot-level visibility global retailers and distributors expect as standard.",
      },
      {
        title: "Allergen-Controlled Production",
        text: "Chickpea and soybean pasta run on lines separate from wheat products, with dedicated cleaning protocols between production cycles.",
      },
    ],
  },
  {
    key: "scale",
    eyebrow: "Scale & Export",
    title: "Ready To Grow With You",
    description:
      "The same system supports trial orders, commercial scale-up and international retail, without forcing brands to change partners as they grow.",
    image: "/images/export-system.png",
    theme: "cream",
    items: [
      {
        title: "Flexible Capacity",
        text: "Start small and scale when ready. Our lines support trial orders and full retail volumes without changing your manufacturing partner.",
      },
      {
        title: "Multi-Format Production",
        text: "Flour, pasta, instant sachets and retort meals are made in-house, so one brand does not need multiple manufacturers for multiple formats.",
      },
      {
        title: "Export & Logistics",
        text: "Full export documentation, CIF and FOB terms, and logistics built for international retail.",
      },
    ],
  },
];

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 22,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function ManufacturingSystemSection() {
  return (
    <section className="relative overflow-hidden bg-[#5a3624] px-4 py-16 sm:px-6 sm:py-20 md:px-8 lg:px-10 xl:px-12 xl:py-24 2xl:px-14 2xl:py-28">
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-[-180px] top-[180px] h-[420px] w-[420px] rounded-full bg-[#d28b55]/10 blur-[130px]" />

      <div className="pointer-events-none absolute bottom-[12%] right-[-180px] h-[460px] w-[460px] rounded-full bg-[#d6b47a]/10 blur-[140px]" />

      <div className="relative mx-auto max-w-[1540px]">
        {/* Section heading */}
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
            amount: 0.4,
          }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-14 border-b border-[#fff5df]/15 pb-10 sm:mb-16 sm:pb-12 xl:mb-20 xl:pb-14 2xl:mb-24 2xl:pb-16"
        >
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-[#e4ad79] sm:text-[11px]">
            How It&apos;s Built
          </p>

          <h2 className="max-w-[900px] font-heading text-[38px] font-bold uppercase leading-[0.92] tracking-[-0.035em] text-[#fff5df] sm:text-[48px] md:text-[56px] xl:text-[64px] 2xl:text-[76px]">
            Sourcing To
            <br />
            Shipment, One System.
          </h2>
        </motion.div>

        <div className="space-y-16 sm:space-y-20 xl:space-y-24 2xl:space-y-32">
          {sections.map((section, sectionIndex) => {
            const imageOnLeft = sectionIndex % 2 === 0;
            const dark = section.theme === "dark";
            const sectionNumber = String(sectionIndex + 1).padStart(2, "0");

            return (
              <motion.article
                key={section.key}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.08,
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  relative grid min-w-0 grid-cols-1 gap-5
                  xl:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)]
                  xl:items-stretch
                  2xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]
                "
              >
                {/* Image panel */}
                <motion.div
                  whileHover={{
                    y: -5,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className={`
                    group relative min-h-[340px] min-w-0 overflow-hidden
                    rounded-[24px] border border-white/10
                    shadow-[0_24px_60px_rgba(22,10,4,0.26)]
                    sm:min-h-[440px] sm:rounded-[30px]
                    md:min-h-[520px]
                    xl:min-h-full xl:rounded-[34px]
                    ${imageOnLeft ? "xl:order-1" : "xl:order-2"}
                  `}
                >
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    sizes="(max-width: 1279px) 100vw, 43vw"
                    className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.045]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-black/10" />

                  <div className="absolute inset-x-0 top-0 z-10 p-5 sm:p-7 xl:p-6 2xl:p-8">
                    <div className="max-w-[480px]">
                      <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-white/70 sm:text-[10px]">
                        Phase {sectionNumber}
                      </p>

                      <h3 className="mt-2 font-heading text-[26px] font-bold uppercase leading-[0.98] text-[#fff5df] sm:text-[34px] 2xl:text-[38px]">
                        {section.eyebrow}
                      </h3>
                    </div>
                  </div>
                </motion.div>

                {/* Information panel */}
                <div
                  className={`
                    relative min-w-0 overflow-hidden rounded-[24px] border
                    p-5 shadow-[0_24px_60px_rgba(22,10,4,0.18)]
                    sm:rounded-[30px] sm:p-7
                    md:p-9
                    xl:rounded-[34px] xl:p-7
                    2xl:p-11
                    ${imageOnLeft ? "xl:order-2" : "xl:order-1"}
                    ${
                      dark
                        ? "border-[#fff5df]/10 bg-[#182015] text-[#fff5df]"
                        : "border-[#704229]/10 bg-[#f0ddba] text-[#294526]"
                    }
                  `}
                >
                  <div className="relative z-10">
                    <p
                      className={`mt-5 text-justify max-w-[720px] text-[14px] leading-7 sm:text-[16px] 2xl:mt-6 2xl:text-[17px] ${
                        dark ? "text-[#fff5df]/68" : "text-[#294526]/70"
                      }`}
                    >
                      {section.description}
                    </p>

                    {/* Capability items */}
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{
                        once: true,
                        amount: 0.08,
                      }}
                      transition={{
                        staggerChildren: 0.06,
                      }}
                      className="mt-7 grid grid-cols-1 gap-3 2xl:mt-9"
                    >
                      {section.items.map((item, itemIndex) => (
                        <motion.div
                          key={item.title}
                          variants={itemVariants}
                          whileHover={{
                            x: 4,
                          }}
                          transition={{
                            duration: 0.22,
                          }}
                          className={`
                            group/item relative grid min-w-0 grid-cols-[32px_minmax(0,1fr)]
                            gap-x-3 gap-y-2 overflow-hidden rounded-[18px] border
                            px-4 py-4
                            sm:grid-cols-[36px_minmax(180px,0.8fr)_minmax(0,1.2fr)]
                            sm:items-start sm:gap-4 sm:px-5 sm:py-5
                            xl:grid-cols-[32px_minmax(145px,0.75fr)_minmax(0,1.25fr)]
                            xl:gap-3 xl:px-4
                            2xl:grid-cols-[44px_minmax(190px,0.85fr)_minmax(0,1.15fr)]
                            2xl:gap-5 2xl:px-5
                            ${
                              dark
                                ? "border-[#fff5df]/10 bg-[#fff5df]/[0.035]"
                                : "border-[#294526]/10 bg-white/25"
                            }
                          `}
                        >
                          <span
                            className={`pt-0.5 text-[9px] font-bold tracking-[0.16em] sm:text-[10px] ${
                              dark ? "text-[#d7ad78]" : "text-[#985a35]"
                            }`}
                          >
                            {String(itemIndex + 1).padStart(2, "0")}
                          </span>

                          <h4 className="min-w-0 font-heading text-[17px] font-bold leading-[1.2] sm:text-[18px] xl:text-[16px] 2xl:text-[20px]">
                            {item.title}
                          </h4>

                          <p
                            className={`col-start-2 text-justify min-w-0 text-[13px] leading-6 sm:col-start-3 sm:text-[14px] xl:text-[13px] xl:leading-[1.65] 2xl:text-[15px] 2xl:leading-6 ${
                              dark ? "text-[#fff5df]/62" : "text-[#294526]/66"
                            }`}
                          >
                            {item.text}
                          </p>

                          <div
                            className={`absolute inset-y-0 left-0 w-[3px] origin-bottom scale-y-0 transition-transform duration-300 group-hover/item:scale-y-100 ${
                              dark ? "bg-[#d7ad78]" : "bg-[#985a35]"
                            }`}
                          />
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>

                  <div
                    className={`pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full blur-[90px] ${
                      dark ? "bg-[#c35531]/10" : "bg-[#789444]/10"
                    }`}
                  />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
