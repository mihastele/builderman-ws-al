"use client";

import { motion } from "framer-motion";
import { Building2, Hammer, Home, Paintbrush, HardHat, Wrench, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    icon: Home,
    title: "Gradnja Hiš",
    description: "Celovita gradnja stanovanjskih hiš od temeljev do ključa. Individualne rešitve po vaših željah.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop",
    features: ["Enodružinske hiše", "Dvojčki", "Vrstne hiše", "Nizkoenergijske gradnje"],
  },
  {
    icon: Building2,
    title: "Zidarska Dela",
    description: "Profesionalna zidarska dela vseh vrst - od temeljnih zidov do dimnikov in prezračevalnih jaškov.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2076&auto=format&fit=crop",
    features: ["Opečni zidovi", "Betonski bloki", "Predelne stene", "Obloge"],
  },
  {
    icon: Hammer,
    title: "Adaptacije",
    description: "Prenove obstoječih prostorov in objektov. Povečave, dozidave in preureditve po vaših potrebah.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop",
    features: ["Prenove stanovanj", "Dozidave", "Mansarde", "Kleti"],
  },
  {
    icon: Paintbrush,
    title: "Obnove Fasad",
    description: "Sanacije in obnove fasad z uporabo sodobnih materialov in tehnik za dolgotrajno zaščito.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    features: ["Toplotne izolacije", "Zaključni ometi", "Barvanja", "Sanacije"],
  },
  {
    icon: HardHat,
    title: "Betonska Dela",
    description: "Izvedba vseh vrst betonskih del - od temeljev, plošč do armiranobetonskih konstrukcij.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
    features: ["Temelji", "AB plošče", "Stebri in nosilci", "Stopnice"],
  },
  {
    icon: Wrench,
    title: "Ostala Dela",
    description: "Širok spekter gradbenih storitev za zaokrožitev vaših projektov.",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2069&auto=format&fit=crop",
    features: ["Rušitvena dela", "Kanalizacija", "Tlakovanje", "Ograje"],
  },
];

export default function Services() {
  return (
    <section id="storitve" className="section-padding bg-stone-100">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-6">
            Naše Storitve
          </span>
          <h2 className="heading-lg text-stone-900 mb-6">
            Celovite <span className="text-gradient">Gradbene Rešitve</span>
          </h2>
          <p className="text-lg text-stone-600 leading-relaxed">
            Od ideje do realizacije - nudimo širok spekter gradbenih storitev, 
            prilagojenih vašim potrebam in željam. Vsak projekt obravnavamo 
            individualno in strokovno.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg card-hover"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display font-bold text-xl text-stone-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-stone-600 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-stone-500"
                    >
                      <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href="#kontakt"
                  className="inline-flex items-center gap-2 text-primary-600 font-semibold group/link"
                >
                  <span>Povpraševanje</span>
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover/link:translate-x-1"
                  />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-primary-600 to-brick-600 rounded-3xl p-8 md:p-12 text-center"
        >
          <h3 className="heading-md text-white mb-4">
            Potrebujete Individualno Rešitev?
          </h3>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Vsak projekt je edinstven. Kontaktirajte nas za brezplačen ogled in 
            svetovanje. Skupaj bomo našli najboljšo rešitev za vaše potrebe.
          </p>
          <Link href="#kontakt" className="btn-secondary">
            Kontaktirajte Nas
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
