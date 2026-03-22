"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "CalculusOCR",
    description: "An AI-powered optical character recognition tool specializing in complex calculus equations.",
    image: "/calculus_ocr_thumbnail.png"
  },
  {
    title: "Pandemic Modeling System",
    description: "Architectural simulations and prediction models for monitoring viral spread scenarios.",
    image: "/pandemic_modeling_thumbnail.png"
  },
  {
    title: "Weather App",
    description: "Real-time meteorological tracker with deeply integrated localized forecast models.",
    image: "/weather-app.png"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6 bg-[#050505] relative border-t border-white/5 overflow-hidden">
      {/* Aesthetic Background Element */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[800px] h-[500px] bg-purple-500/5 blur-[150px] rounded-full -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
           className="mb-16 md:mb-24"
        >
          <h2 className="text-sm font-semibold tracking-widest text-zinc-500 uppercase mb-4">Selected Works</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-500 max-w-2xl pb-4 leading-[1.1]">
            Featured Projects
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.1 * idx, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group flex flex-col bg-zinc-900/30 rounded-3xl border border-white/5 overflow-hidden hover:shadow-[0_20px_40px_-20px_rgba(255,255,255,0.1)] hover:bg-[#0a0a0a] hover:border-white/10 transition-all duration-500 cursor-pointer"
            >
              {/* Image / Placeholder */}
              <div className="w-full aspect-video bg-zinc-800/50 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
                
                {project.image ? (
                  <Image 
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out z-10"
                  />
                ) : (
                  <svg className="w-10 h-10 text-zinc-600 group-hover:scale-110 transition-transform duration-700 ease-out z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                )}
              </div>

              {/* Text Content */}
              <div className="p-8 flex-1 flex flex-col relative z-20">
                <h4 className="text-xl font-medium text-white mb-3 tracking-tight">
                  {project.title}
                </h4>
                <p className="text-zinc-400 font-light text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-2 text-xs font-semibold text-zinc-500 group-hover:text-white transition-colors uppercase tracking-widest mt-auto">
                  View Case Study <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
