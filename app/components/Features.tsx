"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Link, Shield, Smile } from "lucide-react";

const features = [
  {
    title: "Innovative Design",
    description:
      "Experience a visually stunning interface with seamless animations.",
    Icon: Sparkles,
    color: "from-violet-500 to-purple-500",
  },
  {
    title: "Seamless Integration",
    description: "Connect effortlessly with top blockchain platforms.",
    Icon: Link,
    color: "from-blue-500 to-violet-500",
  },
  {
    title: "Enhanced Security",
    description: "Advanced security protocols to protect your assets.",
    Icon: Shield,
    color: "from-indigo-500 to-blue-500",
  },
  {
    title: "User Experience",
    description: "Intuitive interface for smooth navigation.",
    Icon: Smile,
    color: "from-purple-500 to-pink-500",
  },
];

const Features = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <section
      className="py-24 px-6 bg-black"
      id="features">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          viewport={{ once: true }}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Cutting-Edge Features
          </h2>
          <p className="text-gray-300 text-lg">
            Experience the future of digital innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative p-6 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}>
              <motion.div
                className={`w-12 h-12 mb-4 rounded-lg flex items-center justify-center bg-gradient-to-r ${feature.color}`}
                whileHover={{ scale: 1.1 }}>
                <feature.Icon className="w-6 h-6 text-white" />
              </motion.div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
              <motion.div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                style={{
                  background: `linear-gradient(45deg, ${
                    feature.color.split(" ")[1]
                  }, ${feature.color.split(" ")[3]})`,
                  opacity: 0.1,
                  zIndex: -1,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
