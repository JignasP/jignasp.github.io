"use client";

import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-[#020202] border-t border-white/5 relative overflow-hidden flex flex-col items-center justify-center text-center">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full -z-10 pointer-events-none" />

      <motion.div
         initial={{ opacity: 0, scale: 0.95, y: 30 }}
         whileInView={{ opacity: 1, scale: 1, y: 0 }}
         viewport={{ once: true, margin: "-100px" }}
         transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
         className="w-full max-w-2xl px-4"
      >
        <span className="text-sm font-semibold tracking-[0.15em] text-zinc-500 uppercase mb-6 block">Ready to start?</span>
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-500 mb-12 pb-4 leading-[1.1]">
          Let&apos;s build something.
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          {/* Main Action - Email */}
          <a 
            href="mailto:jignas.paturu@hotmail.com" 
            className="w-full sm:w-auto h-14 px-8 rounded-full bg-white text-black font-semibold text-sm hover:bg-zinc-200 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            jignas.paturu@hotmail.com
          </a>
          
          {/* GitHub Links */}
          <a 
            href="https://github.com/jignasp" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto h-14 px-8 rounded-full bg-transparent text-white font-medium text-sm border border-white/20 hover:border-white/50 hover:bg-white/5 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3"
          >
            <svg className="w-5 h-5 text-zinc-400" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
            GitHub
          </a>
          
          {/* LinkedIn Link */}
          <a 
            href="https://linkedin.com/in/jignaspaturu" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto h-14 px-8 rounded-full bg-transparent text-white font-medium text-sm border border-white/20 hover:border-white/50 hover:bg-white/5 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3"
          >
            <svg className="w-5 h-5 text-zinc-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
};
