"use client";

import { motion } from "framer-motion";
import { ArrowRight, Award, Users, Calendar } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="domov"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2076&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/95 via-stone-900/80 to-stone-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 to-transparent" />
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-10 w-20 h-20 bg-primary-500/20 rounded-full blur-2xl hidden lg:block"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 left-10 w-32 h-32 bg-brick-500/20 rounded-full blur-3xl hidden lg:block"
      />

      {/* Content */}
      <div className="container-custom relative z-10 pt-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8"
          >
            <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">
              Več kot 30 let izkušenj v gradbeništvu
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="heading-xl text-white mb-6"
          >
            Gradimo{" "}
            <span className="text-gradient">Zaupanje</span>,<br />
            Zidamo{" "}
            <span className="relative inline-block">
              Prihodnost
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute -bottom-2 left-0 right-0 h-1 bg-primary-500 origin-left"
              />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/80 leading-relaxed mb-10 max-w-2xl"
          >
            Družinsko podjetje s tradicijo, ki združuje strokovno znanje, 
            izkušnje in predanost kvaliteti. Vsak projekt gradimo, kot da bi 
            gradili za svojo družino.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <Link href="#kontakt" className="btn-primary group">
              <span>Začnite Projekt</span>
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="#galerija" className="btn-secondary">
              Oglejte si Naše Delo
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-primary-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <Calendar className="w-7 h-7 text-primary-400" />
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-white">30+</div>
                <div className="text-white/60 text-sm">Let izkušenj</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-primary-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <Award className="w-7 h-7 text-primary-400" />
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-white">500+</div>
                <div className="text-white/60 text-sm">Projektov</div>
              </div>
            </div>
            <div className="flex items-center gap-4 col-span-2 md:col-span-1">
              <div className="w-14 h-14 bg-primary-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <Users className="w-7 h-7 text-primary-400" />
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-white">100%</div>
                <div className="text-white/60 text-sm">Zadovoljnih strank</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-white rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
