"use client";

import Image from "next/image";
import { motion } from "motion/react";

const certifications = [
  {
    title: "FSSAI",
    logo: "/logo/fssai.png",
    text: "India's food safety compliance.",
  },
  {
    title: "GMP",
    logo: "/logo/gmp.png",
    text: "Manufacturing discipline applied to every batch.",
  },
  {
    title: "HACCP",
    logo: "/logo/haccp.webp",
    text: "Hazard-control systems built into production.",
  },
  {
    title: "ISO 22000",
    logo: "/logo/iso22000.png",
    text: "International food safety management system.",
  },
  {
    title: "US FDA",
    logo: "/logo/usfda.png",
    text: "Registered for export into the US market.",
  },
  {
    title: "BRCGS",
    logo: "/logo/brcgs.png",
    text: "Recognised by UK & EU modern trade.",
  },
  {
    title: "Halal & Kosher",
    logo: "/logo/halal-kosher.png",
    text: "Accepted across global markets.",
  },
  {
    title: "Organic & Vegan",
    logo: "/logo/organic-vegan.jpg",
    text: "Where applicable for clean-label demand.",
  },
];

export default function CertificationWall() {
  return (
    <section className="bg-[#151812] px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-[1450px]">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mx-auto mb-20 max-w-[760px] text-center"
        >
          <p className="text-[12px] font-semibold uppercase tracking-[0.35em] text-[#789444]">
            Global Standards
          </p>

          <h2 className="mt-5 font-heading text-[54px] font-black uppercase leading-none text-[#fff9df]">
            Certifications &
            <br />
            Compliance
          </h2>

          <p className="mx-auto mt-6 max-w-[600px] text-[18px] leading-8 text-[#fff9df]/70">
            Verified by the standards the world's retailers already trust.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {certifications.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * .06,
                duration: .55,
              }}
              whileHover={{
                y: -8,
              }}
              className="group rounded-[28px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm transition"
            >
              <div className="flex h-24 items-center justify-center rounded-2xl bg-[#fffdf2]">
                <Image
                  src={item.logo}
                  alt={item.title}
                  width={90}
                  height={90}
                  className="max-h-14 w-auto object-contain transition duration-500 group-hover:scale-105"
                />
              </div>

              <h3 className="mt-8 font-heading text-[28px] font-bold text-[#fff9df]">
                {item.title}
              </h3>

              <p className="mt-4 text-[15px] leading-7 text-[#fff9df]/70">
                {item.text}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}