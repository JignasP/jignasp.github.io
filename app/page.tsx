import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import dynamic from "next/dynamic";

// Lazy loading below-the-fold sections via Code Splitting
const HowIThink = dynamic(() => import("@/components/HowIThink").then(m => m.HowIThink), { ssr: true });
const WhatIBuild = dynamic(() => import("@/components/WhatIBuild").then(m => m.WhatIBuild), { ssr: true });
const KyrosiaShowcase = dynamic(() => import("@/components/KyrosiaShowcase").then(m => m.KyrosiaShowcase), { ssr: true });
const Projects = dynamic(() => import("@/components/Projects").then(m => m.Projects), { ssr: true });
const Experience = dynamic(() => import("@/components/Experience").then(m => m.Experience), { ssr: true });
const Education = dynamic(() => import("@/components/Education").then(m => m.Education), { ssr: true });
const Contact = dynamic(() => import("@/components/Contact").then(m => m.Contact), { ssr: true });

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      <Hero />
      <HowIThink />
      <WhatIBuild />
      <KyrosiaShowcase />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      
      <footer className="py-12 text-center text-sm font-light tracking-wide text-zinc-600 border-t border-white/5 bg-[#020202]">
        <p>© {new Date().getFullYear()} Paturu Naga Jignas. All rights reserved.</p>
      </footer>
    </main>
  );
}
