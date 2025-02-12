"use client";

import React from "react";
import { motion } from "framer-motion";

const CTA = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <section
      className="relative py-24 px-6 bg-black"
      id="cta">
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            "linear-gradient(45deg, #4f46e5, #7e22ce)",
            "linear-gradient(45deg, #7e22ce, #ec4899)",
            "linear-gradient(45deg, #ec4899, #4f46e5)",
          ],
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <motion.div
        className="absolute top-20 left-20 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl"
        animate={{
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute bottom-20 right-20 w-72 h-72 bg-pink-500/30 rounded-full blur-3xl"
        animate={{
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1,
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          viewport={{ once: true }}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Begin?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Join us in shaping the future of digital experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg text-white font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
              Get Started
            </motion.button>
            <motion.button
              className="px-8 py-4 bg-white/10 border border-white/20 rounded-lg text-white font-medium backdrop-blur-sm"
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.15)",
              }}
              whileTap={{ scale: 0.95 }}>
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
