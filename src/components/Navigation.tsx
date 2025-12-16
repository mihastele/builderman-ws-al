"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { href: "#domov", label: "Domov" },
  { href: "#o-nas", label: "O nas" },
  { href: "#storitve", label: "Storitve" },
  { href: "#galerija", label: "Galerija" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="container-custom flex items-center justify-between">
        <Link href="#domov" className="flex items-center gap-3 group">
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-300 ${
            scrolled ? "bg-primary-600" : "bg-white/20 backdrop-blur-sm"
          }`}>
            <span className="text-white font-display font-bold text-xl">ZL</span>
          </div>
          <div className="hidden sm:block">
            <span className={`font-display font-bold text-xl transition-colors duration-300 ${
              scrolled ? "text-stone-900" : "text-white"
            }`}>
              Zidarstvo Lavrič
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-medium transition-colors duration-300 hover:text-primary-500 ${
                scrolled ? "text-stone-700" : "text-white/90 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+38640123456"
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold transition-all duration-300 ${
              scrolled
                ? "bg-primary-600 text-white hover:bg-primary-700"
                : "bg-white text-stone-900 hover:bg-primary-50"
            }`}
          >
            <Phone size={18} />
            <span>Pokličite nas</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            scrolled ? "text-stone-900" : "text-white"
          }`}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t shadow-xl"
          >
            <div className="container-custom py-6 flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 text-lg font-medium text-stone-700 hover:text-primary-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                href="tel:+38640123456"
                className="flex items-center justify-center gap-2 mt-4 px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                <Phone size={20} />
                <span>+386 40 123 456</span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
