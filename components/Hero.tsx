"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Track scroll progress of the hero section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Apply a spring physics model to gracefully smooth the scroll values
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001
  });

  // Scrub the video timeline based on smoothed scroll percentage
  useEffect(() => {
    if (!videoRef.current) return;
    
    const unsubscribe = smoothProgress.on("change", (latest) => {
      if (videoRef.current && !Number.isNaN(videoRef.current.duration)) {
        // Reduced multiplier slightly (2.0x) to give the spring animation breathing room to render smoothly
        const speedMultiplier = 2.0;
        const targetTime = latest * speedMultiplier * videoRef.current.duration;
        
        // Ensure we don't scrub past the actual end of the video
        videoRef.current.currentTime = Math.min(targetTime, videoRef.current.duration);
      }
    });

    return () => unsubscribe();
  }, [smoothProgress]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020202]">
      
      {/* Background Video (Stationary/Paused/Shifted Down) */}
      <video
        ref={videoRef}
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 mt-[8vh] w-full h-full object-contain opacity-30 z-0 mix-blend-screen pointer-events-none scale-[1.02]"
      >
        <source src="/hero-bg.mov" type="video/quicktime" />
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Vignette & Gradients to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#020202]/40 to-[#020202]/80 z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-30%,rgba(30,41,59,0.3),transparent)] z-0 pointer-events-none" />
      
      {/* Glowing Orb */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-500/10 rounded-[100%] blur-[120px] z-0 pointer-events-none" 
      />

      <div className="relative z-10 text-center px-6 w-full max-w-5xl mx-auto flex flex-col items-center pt-20">
        
        {/* Availability / Name Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md cursor-pointer hover:bg-white/10 transition-colors"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-sm font-medium text-zinc-300 tracking-wide">
            Paturu Naga Jignas <span className="text-zinc-600 mx-2">|</span> AI Systems Engineer
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-7xl md:text-8xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-600 mb-6 pb-4 max-w-4xl leading-[1.1] sm:leading-[1.05]"
        >
          Building AI systems <br className="hidden md:block" />
          from idea to deployment.
        </motion.h1>

        {/* Sub-tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 text-balance font-light"
        >
          Specializing in crafting scalable, highly-performant artificial intelligence 
          solutions with an obsessive attention to aesthetic and architectural detail.
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative w-full sm:w-auto h-12 px-8 rounded-full bg-white text-black font-semibold text-sm overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-200 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative">View Selected Work</span>
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group w-full sm:w-auto h-12 px-8 rounded-full bg-transparent text-white font-medium text-sm border border-white/20 hover:border-white/40 hover:bg-white/5 transition-colors flex items-center justify-center gap-2"
          >
            Explore Kyrosia
            <svg 
              className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors group-hover:translate-x-0.5 duration-200" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
