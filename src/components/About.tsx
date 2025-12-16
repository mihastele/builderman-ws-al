import { motion } from "framer-motion";
import { CheckCircle2, Heart, Shield, Wrench } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Družinska Tradicija",
    description: "Gradbeništvo je naša strast, ki se prenaša iz generacije v generacijo.",
  },
  {
    icon: Shield,
    title: "Zanesljivost",
    description: "Držimo se dogovorov, rokov in zagotavljamo vrhunsko kvaliteto.",
  },
  {
    icon: Wrench,
    title: "Strokovno Znanje",
    description: "Desetletja izkušenj in nenehno izpopolnjevanje znanja.",
  },
];

const features = [
  "Brezplačen ogled in svetovanje",
  "Realni roki izvedbe",
  "Transparentne cene brez skritih stroškov",
  "Garancija na vsa opravljena dela",
  "Uporaba kvalitetnih materialov",
  "Prilagodljivost željam strank",
];

export default function About() {
  return (
    <section id="o-nas" className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop"
                alt="Zidarstvo Lavrič - Profesionalno zidarsko delo"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent" />
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-2xl p-6 max-w-xs"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center">
                  <span className="text-3xl font-display font-bold text-primary-600">30+</span>
                </div>
                <div>
                  <div className="font-display font-bold text-stone-900">Let Izkušenj</div>
                  <div className="text-stone-500 text-sm">v gradbeništvu</div>
                </div>
              </div>
              <p className="text-stone-600 text-sm leading-relaxed">
                Naša zgodba se je začela pred več kot tremi desetletji z vizijo 
                kakovostnega gradbeništva.
              </p>
            </motion.div>

            {/* Decorative Element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-500/10 rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-brick-500/10 rounded-full -z-10" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-6">
              O Nas
            </span>
            <h2 className="heading-lg text-stone-900 mb-6">
              Družinsko Podjetje z <span className="text-gradient">Dušo in Srcem</span>
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed mb-8">
              Zidarstvo Lavrič je družinsko podjetje, ki že več kot 30 let gradi 
              zaupanje med strankami in izvajalci. Naše poslanstvo je preprosto: 
              vsak projekt obravnavamo, kot da bi gradili za svojo lastno družino.
            </p>
            <p className="text-stone-600 leading-relaxed mb-8">
              Združujemo tradicionalne zidarske veščine s sodobnimi tehnikami in 
              materiali. Naša ekipa izkušenih strokovnjakov skrbi, da je vsak 
              detajl izveden do popolnosti.
            </p>

            {/* Values */}
            <div className="grid sm:grid-cols-3 gap-6 mb-10">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <value.icon className="w-7 h-7 text-primary-600" />
                  </div>
                  <h3 className="font-semibold text-stone-900 mb-1">{value.title}</h3>
                  <p className="text-sm text-stone-500">{value.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary-500 flex-shrink-0" />
                  <span className="text-stone-700">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
