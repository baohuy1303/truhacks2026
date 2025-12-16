import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

export const Navbar = () => {

  return (
    <motion.nav 
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-[60] py-8 px-6 md:px-12 flex justify-between items-center bg-gradient-to-b from-arcade-900/80 to-transparent backdrop-blur-[2px]"
    >
      <div className="font-display font-bold text-xl text-white tracking-wider cursor-pointer">
        TRU<span className="text-arcade-neon">HACKS</span>
      </div>

      <div className="hidden md:flex gap-12 items-center">
        <NavLink text="About"/>
        <NavLink text="Tracks"/>
        <NavLink text="Prizes"/>
        <NavLink text="Sponsors"/>
        <NavLink text="Team"/>
      </div>

      <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-2 rounded-full font-bold text-sm transition-all backdrop-blur-md">
        REGISTER NOW
      </button>
    </motion.nav>
  );
};

const NavLink = ({ text }) => (
  <a href="#" className="text-white/70 hover:text-white font-sans text-lg tracking-wide transition-colors relative group">
    {text}
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-arcade-neon transition-all group-hover:w-full"></span>
  </a>
);