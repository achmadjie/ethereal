"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaDiscord,
} from "react-icons/fa";
import { HyperText } from "@/components/magicui/hyper-text";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const socialLinks = [
    { icon: FaFacebookF, href: "#" },
    { icon: FaInstagram, href: "#" },
    { icon: FaGithub, href: "#" },
    { icon: FaTwitter, href: "#" },
    { icon: FaDiscord, href: "#" },
    { icon: FaLinkedinIn, href: "#" },
  ];

  const footerLinks = {
    Product: ["Features", "Documentation", "Pricing", "API"],
    Company: ["About", "Blog", "Careers", "Contact"],
    Legal: ["Privacy", "Terms", "Security"],
  };

  return (
    <footer
      className="relative bg-black border-t border-white/10"
      id="footer">
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          background: [
            "radial-gradient(circle at 0% 0%, #4f46e5, transparent 50%)",
            "radial-gradient(circle at 100% 100%, #7e22ce, transparent 50%)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <motion.div
              variants={itemVariants}
              className="space-y-6">
              <HyperText
                className="text-2xl font-bold text-white"
                duration={2000}>
                Ethereal
              </HyperText>
              <p className="text-gray-400">
                Building the future of decentralized applications with elegance
                and innovation.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-400 hover:text-white transition-colors">
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {Object.entries(footerLinks).map(([title, links]) => (
              <motion.div
                key={title}
                variants={itemVariants}>
                <h3 className="text-white font-semibold mb-4">{title}</h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Ethereal. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="#"
                className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white text-sm">
                Terms of Service
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
