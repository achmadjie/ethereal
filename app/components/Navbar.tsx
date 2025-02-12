"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { HyperText } from "@/components/magicui/hyper-text";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Features", href: "#features" },
    { name: "Contact", href: "#cta" },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        duration: 0.4,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="relative z-10">
            <HyperText
              className="text-2xl font-bold text-white"
              duration={2000}>
              Ethereal
            </HyperText>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}>
                <Link
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-gray-300 hover:text-white transition-colors">
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full text-white font-medium">
              Connect Wallet
            </motion.button>
          </div>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden bg-black/95 backdrop-blur-lg">
            <div className="px-6 py-4 space-y-3">
              {navLinks.map((link) => (
                <motion.div
                  key={link.name}
                  variants={itemVariants}
                  className="block">
                  <Link
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="block px-3 py-2 text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.button
                variants={itemVariants}
                className="w-full px-3 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg text-white font-medium">
                Connect Wallet
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
