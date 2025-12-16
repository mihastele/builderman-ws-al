"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Enodružinska Hiša Ljubljana",
    category: "Gradnja hiš",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop",
    description: "Moderna enodružinska hiša z nizkoenergijsko zasnovo.",
  },
  {
    id: 2,
    title: "Adaptacija Starega Jedra",
    category: "Adaptacije",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    description: "Celovita prenova stare mestne hiše s sodobnimi elementi.",
  },
  {
    id: 3,
    title: "Obnova Fasade",
    category: "Fasade",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    description: "Energetska sanacija in obnova fasade večstanovanjskega objekta.",
  },
  {
    id: 4,
    title: "Gradnja Dvojčka",
    category: "Gradnja hiš",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
    description: "Sodobna dvojček zasnova z ločenimi vhodi in vrtovi.",
  },
  {
    id: 5,
    title: "Zidarska Dela - Poslovni Objekt",
    category: "Zidarska dela",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2076&auto=format&fit=crop",
    description: "Kompleksna zidarska dela pri gradnji poslovnega objekta.",
  },
  {
    id: 6,
    title: "Prenova Stanovanjske Hiše",
    category: "Adaptacije",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
    description: "Popolna prenova starejše stanovanjske hiše.",
  },
  {
    id: 7,
    title: "Betonska Konstrukcija",
    category: "Betonska dela",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
    description: "Izvedba armiranobetonske konstrukcije za industrijsko halo.",
  },
  {
    id: 8,
    title: "Sodobna Vila",
    category: "Gradnja hiš",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop",
    description: "Luksuzna vila z bazenom in urejeno okolico.",
  },
];

const categories = ["Vse", "Gradnja hiš", "Adaptacije", "Fasade", "Zidarska dela", "Betonska dela"];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("Vse");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredProjects = selectedCategory === "Vse"
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  const currentProject = selectedImage !== null
    ? projects.find((p) => p.id === selectedImage)
    : null;

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return;
    const currentIndex = filteredProjects.findIndex((p) => p.id === selectedImage);
    if (direction === "prev") {
      const newIndex = currentIndex > 0 ? currentIndex - 1 : filteredProjects.length - 1;
      setSelectedImage(filteredProjects[newIndex].id);
    } else {
      const newIndex = currentIndex < filteredProjects.length - 1 ? currentIndex + 1 : 0;
      setSelectedImage(filteredProjects[newIndex].id);
    }
  };

  return (
    <section id="galerija" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-6">
            Naše Delo
          </span>
          <h2 className="heading-lg text-stone-900 mb-6">
            Galerija <span className="text-gradient">Projektov</span>
          </h2>
          <p className="text-lg text-stone-600 leading-relaxed">
            Oglejte si izbor naših uspešno zaključenih projektov. Vsak projekt 
            je zgodba o predanosti, strokovnosti in zadovoljnih strankah.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-primary-600 text-white shadow-lg"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => setSelectedImage(project.id)}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-primary-400 text-sm font-medium mb-1">
                    {project.category}
                  </span>
                  <h3 className="text-white font-semibold">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage !== null && currentProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-stone-900/95 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 p-2 text-white/70 hover:text-white transition-colors"
              >
                <X size={32} />
              </button>

              {/* Navigation */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage("prev");
                }}
                className="absolute left-4 md:left-8 p-2 text-white/70 hover:text-white transition-colors"
              >
                <ChevronLeft size={40} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage("next");
                }}
                className="absolute right-4 md:right-8 p-2 text-white/70 hover:text-white transition-colors"
              >
                <ChevronRight size={40} />
              </button>

              {/* Image */}
              <motion.div
                key={selectedImage}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-5xl w-full"
              >
                <div className="relative aspect-video rounded-2xl overflow-hidden">
                  <Image
                    src={currentProject.image}
                    alt={currentProject.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-6 text-center">
                  <span className="text-primary-400 text-sm font-medium">
                    {currentProject.category}
                  </span>
                  <h3 className="text-white text-2xl font-display font-bold mt-1">
                    {currentProject.title}
                  </h3>
                  <p className="text-white/70 mt-2">{currentProject.description}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
