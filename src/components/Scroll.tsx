"use client"
import { motion, useScroll, useSpring } from "framer-motion"
import React from "react";

export default function ScrollAnimate() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="relative w-full  ">
      <motion.div
        className="h-[2px] bg-myGreen origin-left"
        style={{ scaleX }}
      />
    </div>
  )
}
