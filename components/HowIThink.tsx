"use client";

import { motion } from "framer-motion";

export const HowIThink = () => {
  return (
    <section id="about" className="py-32 px-6 bg-[#000000] border-t border-white/5 relative overflow-hidden flex items-center justify-center min-h-[50vh]">
      {/* Background Subtle Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-zinc-800/10 blur-[150px] rounded-full -z-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10 w-full">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
           className="mb-16"
        >
          <h2 className="text-xs font-semibold tracking-[0.2em] text-zinc-500 uppercase">Philosophy</h2>
        </motion.div>

        <div className="flex flex-col gap-6 md:gap-10">
          {[
            { text: "Start with users.", delay: 0 },
            { text: "Build fast.", delay: 0.15 },
            { text: "Iterate with feedback.", delay: 0.3 }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: item.delay, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-600 leading-[1.1]">
                {item.text}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
