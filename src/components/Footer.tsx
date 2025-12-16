import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-display font-bold text-xl">ZL</span>
              </div>
              <span className="font-display font-bold text-xl">Zidarstvo Lavrič</span>
            </div>
            <p className="text-stone-400 leading-relaxed mb-6">
              Družinsko podjetje z več kot 30-letno tradicijo v gradbeništvu. 
              Gradimo zaupanje, zidamo prihodnost.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-display font-bold text-lg mb-6">Hitri Dostop</h3>
            <ul className="space-y-3">
              {[
                { href: "#domov", label: "Domov" },
                { href: "#o-nas", label: "O nas" },
                { href: "#storitve", label: "Storitve" },
                { href: "#galerija", label: "Galerija" },
                { href: "#kontakt", label: "Kontakt" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-stone-400 hover:text-primary-500 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-display font-bold text-lg mb-6">Naše Storitve</h3>
            <ul className="space-y-3">
              {[
                "Gradnja hiš",
                "Zidarska dela",
                "Adaptacije",
                "Obnove fasad",
                "Betonska dela",
              ].map((service) => (
                <li key={service} className="text-stone-400">
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-display font-bold text-lg mb-6">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-primary-500 mt-1 flex-shrink-0" />
                <span className="text-stone-400">Vzorčna ulica 123, 1000 Ljubljana, Slovenija</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-primary-500 flex-shrink-0" />
                <a href="tel:+38640123456" className="text-stone-400 hover:text-primary-500 transition-colors">
                  +386 40 123 456
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-primary-500 flex-shrink-0" />
                <a href="mailto:info@zidarstvo-lavric.si" className="text-stone-400 hover:text-primary-500 transition-colors">
                  info@zidarstvo-lavric.si
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={20} className="text-primary-500 mt-1 flex-shrink-0" />
                <span className="text-stone-400">
                  Pon - Pet: 7:00 - 17:00<br />
                  Sob: 8:00 - 12:00
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-stone-500 text-sm">
              © {currentYear} Zidarstvo Lavrič. Vse pravice pridržane.
            </p>
            <p className="text-stone-500 text-sm">
              Profesionalna gradbena dela z dušo in srcem.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
