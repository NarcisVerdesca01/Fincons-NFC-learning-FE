"use client";
import React from "react";
import { PinContainer } from "../ui/3d-pin";
import { LampContainer } from "../ui/Lamp";
import { motion } from "framer-motion";
import './prova1.css'

function AnimatedPinDemo() {
  return (
    <div className={`background`}>
      <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Build lamps <br /> the right way
      </motion.h1>
    </LampContainer>
    </div>
  );
}

export default AnimatedPinDemo;