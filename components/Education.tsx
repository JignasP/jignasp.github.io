"use client";

import { motion } from "framer-motion";

const educationDetails = [
  {
    institution: "Indian Institute of Management Bangalore",
    degree: "Bachelor of Business Administration",
    period: "Sep 2025 – May 2028",
  },
  {
    institution: "PES University",
    degree: "B.Tech in Computer Science and Engineering (AI/ML)",
    period: "Sep 2024 – May 2028",
  }
];

export const Education = () => {
  return (
    <section id="education" className="py-24 px-6 bg-[#050505] relative overflow-hidden border-t border-white/5 flex flex-col items-center">
      <div className="w-full max-w-4xl relative z-10">
        
        <motion.div
           initial={{ opacity: 0, y: 15 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-50px" }}
           transition={{ duration: 0.6 }}
           className="mb-10"
        >
          <h2 className="text-sm font-semibold tracking-[0.15em] text-zinc-500 uppercase">Education</h2>
        </motion.div>

        <div className="flex flex-col gap-4">
          {educationDetails.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.15 * idx, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col md:flex-row md:items-center justify-between p-8 rounded-3xl bg-zinc-900/10 border border-white/5 hover:bg-zinc-800/30 hover:border-white/10 transition-all duration-500"
            >
              <div className="flex-1 pr-6 mb-4 md:mb-0">
                <h3 className="text-xl md:text-2xl font-medium text-white mb-1.5 tracking-tight group-hover:text-amber-100/90 transition-colors duration-300 shadow-amber-500/20">
                  {edu.institution}
                </h3>
                <p className="text-zinc-400 font-light text-sm md:text-base">
                  {edu.degree}
                </p>
              </div>
              <div className="pt-4 md:pt-0 border-t md:border-None border-zinc-800 md:border-transparent md:text-right flex-shrink-0">
                <span className="text-xs font-semibold text-zinc-600 tracking-widest uppercase md:bg-zinc-900 md:border md:border-white/5 md:px-4 md:py-1.5 md:rounded-full md:group-hover:border-white/10 md:group-hover:text-zinc-400 transition-colors">
                  {edu.period}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
