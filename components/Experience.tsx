"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Founder",
    company: "Kyrosia AI",
    period: "2025 - Present",
    description: "Architecting and building an AI-powered recruitment ecosystem from the ground up, directing both deep-learning strategies and full-stack product development.",
  },
  {
    role: "Intern",
    company: "Treosoft IT Solutions",
    period: "2024 - 2025",
    description: "Contributed to engineering workflows, streamlined backend processes, and assisted in building scalable client applications.",
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 px-6 bg-[#020202] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
           className="mb-16 md:mb-24 text-center md:text-left"
        >
          <h2 className="text-sm font-semibold tracking-widest text-zinc-500 uppercase mb-4">Journey</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter text-white">
            Experience
          </h3>
        </motion.div>

        <div className="relative border-l border-zinc-900 ml-4 md:ml-0 md:pl-1">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 * idx, ease: [0.16, 1, 0.3, 1] }}
              className="mb-12 md:mb-16 pl-8 md:pl-12 relative group"
            >
              {/* Timeline Dot */}
              <div className="absolute top-2 -left-[5px] w-[9px] h-[9px] rounded-full bg-zinc-800 border-2 border-[#020202] group-hover:bg-blue-400 group-hover:shadow-[0_0_12px_rgba(96,165,250,0.8)] transition-all duration-300 pointer-events-none md:-left-[4px]" />
              
              <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-3 mb-2">
                <h4 className="text-2xl font-semibold text-white tracking-tight">
                  {exp.role}
                </h4>
                <div className="flex items-center gap-2">
                  <span className="text-zinc-600 font-light hidden md:inline">—</span>
                  <span className="text-lg text-zinc-300 font-medium group-hover:text-white transition-colors">
                    {exp.company}
                  </span>
                </div>
              </div>
              
              <div className="mb-4">
                <span className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">
                  {exp.period}
                </span>
              </div>
              
              <p className="text-zinc-400 font-light leading-relaxed max-w-2xl text-sm md:text-base">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
