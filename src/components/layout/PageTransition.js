"use client";

import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.main
        key={pathname}
        initial={{
          opacity: 0,
          y: 18,
          filter: "blur(10px)",
        }}
        animate={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
        }}
        exit={{
          opacity: 0,
          y: -14,
          filter: "blur(10px)",
        }}
        transition={{
          duration: 0.42,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative"
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}
