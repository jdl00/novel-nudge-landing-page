"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../ui/lamp";

export function About() {
  return (
    <LampContainer className="bg-transparent">
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
          duration: 0.4,
          ease: "easeInOut",
        }}
        className="mb-4 bg-gradient-to-br from-slate-300 to-slate-500  bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-5xl"
      >
        About Us <br />
        <br />
      </motion.h1>
    </LampContainer>
  );
}
