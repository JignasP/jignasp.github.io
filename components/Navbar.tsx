import React from 'react';

export const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 transition-all duration-300 glass border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/" className="text-xl font-bold tracking-tighter text-white">
          Portfolio.
        </a>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
        <a href="#contact" className="px-5 py-2 rounded-full bg-white text-black text-sm font-semibold hover:bg-gray-200 transition-colors">
          Let's Talk
        </a>
      </div>
    </nav>
  );
};
