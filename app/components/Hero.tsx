"use client";

import React from "react";
import { motion } from "framer-motion";
import { HyperText } from "@/components/magicui/hyper-text";

const Hero = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
      id="hero">
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 30% 30%, rgba(121, 40, 202, 0.3), transparent 70%)",
            "radial-gradient(circle at 70% 70%, rgba(76, 29, 149, 0.3), transparent 70%)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
      />

      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl"
        animate={{
          y: [-20, 20],
          x: [-20, 20],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl"
        animate={{
          y: [20, -20],
          x: [20, -20],
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1,
        }}
      />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={fadeInUp.initial}
          animate={fadeInUp.animate}
          transition={{ duration: 0.8 }}>
          <HyperText
            className="text-7xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400"
            duration={2000}>
            Ethereal
          </HyperText>
          <motion.p
            className="mt-8 text-xl md:text-2xl text-gray-300"
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            transition={{ delay: 0.2 }}>
            Discover the future of decentralized art and finance with Ethereal.
          </motion.p>
          <motion.button
            className="mt-10 px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full text-white font-medium text-lg hover:opacity-90 transition-opacity"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>
            Explore Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
