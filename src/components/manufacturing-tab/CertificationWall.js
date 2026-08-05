"use client";

import Image from "next/image";
import { motion } from "motion/react";

const certifications = [
  {
    title: "FSSAI",
    logo: "/logo/fssai.png",
  },
  {
    title: "GMP",
    logo: "/logo/gmp.png",
  },
  {
    title: "HACCP",
    logo: "/logo/haccp.webp",
  },
  {
    title: "ISO 22000",
    logo: "/logo/iso22000.png",
  },
  {
    title: "US FDA",
    logo: "/logo/usfda.png",
  },
  {
    title: "BRCGS",
    logo: "/logo/brcgs.png",
  },
  {
    title: "Halal & Kosher",
    logo: "/logo/halal-kosher.png",
  },
  {
    title: "Organic & Vegan",
    logo: "/logo/organic-vegan.jpg",
  },
];

export default function CertificationWall() {
  return (
    <section className="relative overflow-hidden bg-[#151812] px-5 py-20 sm:px-8 lg:px-14 lg:py-24">
      <div className="pointer-events-none absolute left-[-100px] top-[-80px] h-[300px] w-[300px] rounded-full bg-[#789444]/10 blur-[110px]" />

      <div className="pointer-events-none absolute bottom-[-120px] right-[-80px] h-[340px] w-[340px] rounded-full bg-[#c35531]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-[1250px]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mb-12 max-w-[760px] text-center lg:mb-16"
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.32em] text-[#789444] sm:text-[12px]">
            Global Standards
          </p>

          <h2 className="mt-4 font-heading text-[40px] font-bold uppercase leading-[0.95] tracking-[-0.03em] text-[#fff9df] sm:text-[52px] lg:text-[60px]">
            Certifications &amp;
            <br />
            Compliance
          </h2>

          <p className="mx-auto mt-5 max-w-[620px] text-[15px] leading-7 text-[#fff9df]/68 sm:text-[17px]">
            Verified against recognised food-safety, manufacturing, and export
            standards.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          transition={{
            staggerChildren: 0.07,
          }}
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4"
        >
          {certifications.map((item) => (
            <motion.article
              key={item.title}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 24,
                  scale: 0.96,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
              whileHover={{
                y: -5,
                transition: {
                  duration: 0.22,
                  ease: "easeOut",
                },
              }}
              className="group flex min-h-[150px] flex-col items-center justify-center rounded-[24px] border border-white/10 bg-white/[0.045] px-4 py-5 text-center transition duration-300 hover:border-white/20 hover:bg-white/[0.07] sm:min-h-[165px]"
            >
              <div className="flex h-[82px] w-[82px] items-center justify-center rounded-full bg-[#fffdf2] p-3 shadow-[0_12px_30px_rgba(0,0,0,0.18)] sm:h-[92px] sm:w-[92px]">
                <Image
                  src={item.logo}
                  alt={`${item.title} certification`}
                  width={72}
                  height={72}
                  sizes="92px"
                  className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <h3 className="mt-4 font-heading text-[14px] font-bold uppercase leading-tight tracking-[0.05em] text-[#fff9df] sm:text-[15px]">
                {item.title}
              </h3>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
