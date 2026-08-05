"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const move = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      animate={{
        x: position.x,
        y: position.y,
      }}
      transition={{
        type: "spring",
        stiffness: 800,
        damping: 40,
        mass: 0.2,
      }}
      className="pointer-events-none fixed left-0 top-0 z-[9999]"
      style={{
        width: 44,
        height: 44,
        backgroundImage: "url('/cursor.png')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        transform: "translate(-50%, -50%)",
      }}
    />
  );
}