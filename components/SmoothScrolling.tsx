"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import React from "react";

export function SmoothScrolling({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis 
      root 
      options={{ 
        lerp: 0.05,         // Lower value makes it smoother & slower
        duration: 1.5,      // Standard duration for smooth glide
        smoothWheel: true, 
      }}
    >
      {children}
    </ReactLenis>
  );
}
