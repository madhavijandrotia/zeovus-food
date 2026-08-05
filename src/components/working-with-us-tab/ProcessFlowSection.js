"use client";

import Image from "next/image";
import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    label: "Consultation",
    title: "Goal, Format & Market Fit",
    image: "/images/consultation.png",
    description:
      "We start by understanding what the product needs to do, who it's for, and where it's going, a high-protein atta and an instant hummus sachet both start here, even though everything that follows looks completely different for each.",
    details:
      "This step decides the format, and the format decides a lot of what comes next: moisture content and shelf life for a flour blend, rehydration behaviour for an instant sachet, and retort stability for a ready-to-eat curry. Getting this right early means less rework later.",
  },
  {
    number: "02",
    label: "Formulation",
    title: "Nutrition First Product Development",
    image: "/images/formulation.png",
    description:
      "Once we know what we're building, our in-house R&D team turns it into a real formula, the right ingredients, in the right ratios, built around a nutritional target, not just a recipe.",
    details:
      "This covers everyday staples, such as reaching a specific protein-per-100g claim in an atta blend, and functional formats, such as balancing texture and cook time in a chickpea pasta. If an ingredient clumps, turns bitter or fails to perform, we adjust the blend until it works. Before production, the formula and taste return to the client for approval.",
  },
  {
    number: "03",
    label: "Ingredient Selection",
    title: "Choosing Where Goes In",
    image: "/images/ingredient-selection.png",
    description:
      "This step is about deciding what enters the formula, and who it comes from, before anything is ordered.",
    details:
      "That means choosing clean, functional ingredients over cheaper fillers: pea and rice protein isolates for absorption, psyllium husk for texture and fullness, and real fruits and vegetables over concentrates. No added sugar, no preservatives and no artificial flavours, decided here, not fixed later.",
  },
  {
    number: "04",
    label: "PO & Kickoff",
    title: "Production begins once the order is confirmed",
    image: "/images/kickoff.png",
    description:
      "Nothing moves until the brand owner confirms the order.",
    details:
      "Once confirmation is received, procurement, production scheduling and operational planning begin together, so no time is lost waiting on disconnected paperwork or approvals.",
  },
  {
    number: "05",
    label: "Procurement",
    title: "Sourcing The Approved Ingredients",
    image: "/images/procurement.png",
    description:
      "Once the order is confirmed, the selected ingredients are sourced, shipped and stored for production.",
    details:
      "We work with vetted suppliers across staples, pulses and speciality flours, helping brands avoid dependence on a single harvest or origin for every batch while maintaining the approved product specification.",
  },
  {
    number: "06",
    label: "Manufacturing",
    title: "From Formula To Production Line",
    image: "/images/manufacturing.png",
    description:
      "This is where the approved formula becomes a finished product.",
    details:
      "That means milling and blending for atta and flour products, extrusion for pasta and noodles, precision dosing for instant sachets, and retort processing for shelf-stable meals. Every line operates inside FSSAI-licensed, GMP and HACCP-certified, allergen-controlled facilities, with checks throughout the run.",
  },
  {
    number: "07",
    label: "QC & Testing",
    title: "Proof At Batch Level",
    image: "/images/testing.png",
    description:
      "Every batch is tested against the approved formula and evaluated for stability, safety and consistency.",
    details:
      "It also passes through Zeovus Quality Assurance: 12 steps and 825 verified testing parameters across incoming materials, in-process monitoring and finished goods. Independent laboratories verify it further. The final output includes a certificate of analysis and a documented batch record, proof, not a claim.",
  },
  {
    number: "08",
    label: "Packaging & Delivery",
    title: "Ready For Shelf, Ecommerce Or Export",
    image: "/images/delivery.png",
    description:
      "The final step is labelling, packaging and shipping the finished product, ready for shelf, ready for e-commerce, ready for export, wherever the brand needs it to go next.",
    details:
      "Each product leaves ready for the channel it was designed for retail shelf, e-commerce fulfilment, food service or finished product.",
  },
];

const stepVariants = {
  hidden: {
    opacity: 0,
    y: 44,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function ProcessFlowSection() {
  return (
    <section className="relative overflow-hidden bg-[#f3ead8] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-[-150px] top-[10%] h-[360px] w-[360px] rounded-full bg-[#c35531]/[0.07] blur-[125px]" />

      <div className="pointer-events-none absolute bottom-[8%] right-[-140px] h-[400px] w-[400px] rounded-full bg-[#789444]/10 blur-[135px]" />

      <div className="relative mx-auto max-w-[1440px]">
        {/* Heading */}
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
          className="mx-auto mb-16 max-w-[850px] text-center lg:mb-24"
        >
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.32em] text-[#c35531] sm:text-[12px]">
            How We Work
          </p>

          <h2 className="font-heading text-[42px] font-bold uppercase leading-[0.94] tracking-[-0.03em] text-[#294526] sm:text-[56px] lg:text-[68px]">
            From Brief To Shelf,
            <br />
            In Eight Steps.
          </h2>

          <p className="mx-auto mt-6 max-w-[700px] text-[16px] leading-8 text-[#34422e]/72 sm:text-[18px]">
            One connected process carries the product from its first commercial
            question to a tested, packed and market-ready batch.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop centre line */}
          <div className="absolute bottom-0 left-1/2 top-7 hidden w-px -translate-x-1/2 bg-[#294526]/15 lg:block" />

          <div className="space-y-14 lg:space-y-24">
            {steps.map((step, index) => {
              const imageOnLeft = index % 2 === 0;

              return (
                <motion.article
                  key={step.number}
                  variants={stepVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    amount: 0.12,
                  }}
                  className="relative grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1fr)_84px_minmax(0,1fr)] lg:items-stretch"
                >
                  {/* Mobile timeline */}
                  <div className="absolute bottom-0 left-[17px] top-7 w-px bg-[#294526]/15 lg:hidden" />

                  <div className="absolute left-0 top-7 z-20 flex h-9 w-9 items-center justify-center rounded-full border-[6px] border-[#f3ead8] bg-[#c35531] text-[9px] font-bold text-[#fff9df] lg:hidden">
                    {step.number}
                  </div>

                  {/* Image */}
                  <motion.div
                    whileHover={{
                      y: -5,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className={`group relative ml-12 min-h-[340px] overflow-hidden rounded-[28px] border border-[#294526]/10 shadow-[0_22px_55px_rgba(37,45,29,0.1)] sm:min-h-[440px] lg:ml-0 ${
                      imageOnLeft
                        ? "lg:col-start-1 lg:row-start-1"
                        : "lg:col-start-3 lg:row-start-1"
                    }`}
                  >
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 46vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                    <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/65">
                        Step {step.number}
                      </p>

                      <h3 className="mt-2 max-w-[500px] font-heading text-[28px] font-bold uppercase leading-[1.02] text-[#fff9df] sm:text-[36px]">
                        {step.label}
                      </h3>
                    </div>
                  </motion.div>

                  {/* Desktop timeline marker */}
                  <div className="relative hidden items-start justify-center lg:col-start-2 lg:row-start-1 lg:flex">
                    <div className="relative z-20 mt-7 flex h-14 w-14 items-center justify-center rounded-full border-[8px] border-[#f3ead8] bg-[#294526] shadow-[0_8px_24px_rgba(41,69,38,0.18)]">
                      <span className="text-[11px] font-bold tracking-[0.1em] text-[#fff9df]">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`ml-12 flex min-h-[340px] flex-col justify-start rounded-[28px] border border-[#294526]/10 bg-[#fffaf0] p-6 shadow-[0_22px_55px_rgba(37,45,29,0.07)] sm:min-h-[440px] sm:p-9 lg:ml-0 lg:p-11 ${
                      imageOnLeft
                        ? "lg:col-start-3 lg:row-start-1"
                        : "lg:col-start-1 lg:row-start-1"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="h-px w-10 shrink-0 bg-[#c35531]" />

                      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#c35531]">
                        {step.label}
                      </p>
                    </div>

                    <h3 className="mt-5 max-w-[620px] font-heading text-[30px] font-bold uppercase leading-[1] tracking-[-0.02em] text-[#294526] sm:text-[39px]">
                      {step.title}
                    </h3>

                    <p className="mt-6 text-[15px] font-medium leading-7 text-[#293522]/82 sm:text-[17px] sm:leading-8">
                      {step.description}
                    </p>

                    <div className="mt-6 border-t border-[#294526]/10 pt-6">
                      <p className="text-[14px] leading-7 text-[#34422e]/68 sm:text-[15px]">
                        {step.details}
                      </p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}