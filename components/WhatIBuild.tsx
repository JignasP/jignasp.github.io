"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "AI Systems",
    description: "Architecting end-to-end models alongside scalable, robust deployment infrastructure.",
    icon: (
      <svg className="w-6 h-6 mb-6 text-zinc-500 group-hover:text-emerald-400 transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: "Product Engineering",
    description: "Crafting seamless full-stack applications, taking them from UX conception to production deployment.",
    icon: (
      <svg className="w-6 h-6 mb-6 text-zinc-500 group-hover:text-blue-400 transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    title: "User-Driven Dev",
    description: "Translating deep user interviews and behaviors into powerful, highly intuitive software features.",
    icon: (
      <svg className="w-6 h-6 mb-6 text-zinc-500 group-hover:text-purple-400 transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  }
];

export const WhatIBuild = () => {
  return (
    <section id="work" className="py-32 px-6 bg-[#020202] border-t border-white/5 relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-zinc-800/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto z-10 relative">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm font-semibold tracking-widest text-zinc-500 uppercase mb-4">What I Build</h2>
          <p className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-500 mb-20 max-w-3xl leading-[1.1] text-balance">
            Delivering holistic solutions across the entire technical stack.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 * idx, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-8 rounded-3xl bg-zinc-900/20 border border-white/5 hover:bg-zinc-800/40 hover:border-white/10 transition-colors duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />
              {feature.icon}
              <h3 className="text-xl font-medium text-white mb-4 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-zinc-400 font-light leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
