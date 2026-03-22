"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const KyrosiaShowcase = () => {
  return (
    <section id="kyrosia" className="py-32 px-6 bg-[#000000] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10 w-full">

        {/* Left Side: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 w-full lg:max-w-xl"
        >
          {/* Branded Purple Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/40 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]"></span>
            <span className="text-xs font-semibold tracking-widest text-zinc-300 uppercase">Featured Startup</span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white mb-8 leading-[1.05]">
            Rethinking how <br className="hidden md:block" />
            companies hire.
          </h2>

          <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed mb-12 max-w-lg">
            Kyrosia is an advanced, AI-powered recruitment ecosystem.
            By leveraging deep learning models to analyze candidates beyond
            just resumes, it matches top talent with the right opportunities
            at unprecedented scale and accuracy.
          </p>

          <button className="group flex items-center gap-4 text-white font-medium hover:text-purple-400 transition-colors">
            <span className="text-sm uppercase tracking-wider">Explore Kyrosia AI</span>
            <span className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center group-hover:border-purple-500/50 group-hover:bg-purple-500/10 transition-all duration-300">
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </button>
        </motion.div>

        {/* Right Side: Visual App Interface */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="flex-1 w-full relative"
        >
          {/* Aesthetic purple background glow behind the image to match UI */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-purple-600/15 blur-[120px] rounded-[100%] -z-10 pointer-events-none" />

          {/* The device/container frame locked to exactly 16:9 so it never clips the desktop dashboard aspect ratio */}
          <div className="relative aspect-video w-full rounded-2xl md:rounded-3xl bg-[#0a0510] border border-white/10 overflow-hidden shadow-[0_0_50px_rgba(107,33,168,0.15)] group ring-1 ring-purple-500/20 flex items-center justify-center">

            {/* Inner shimmer effect for premium feel */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-purple-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-20 pointer-events-none" />

            {/* Connected Next/Image switched to object-contain so it never zooms or cuts */}
            <Image
              src="/kyrosia-dashboard.jpeg"
              alt="Kyrosia Dashboard Interface"
              fill
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain p-2 md:p-3 opacity-90 group-hover:opacity-100 transition-opacity duration-700"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
