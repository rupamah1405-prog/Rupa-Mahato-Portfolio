import React from 'react';
import { motion } from 'motion/react';

export const RMLogo = () => {
  return (
    <div className="relative flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-[#1D1842]/20 transition-all duration-500 ease-in-out group-hover:border-[#B85C38] group-hover:bg-[#B85C38]/[0.03] group-hover:shadow-[0_0_12px_rgba(184,92,56,0.25)] overflow-hidden">
      
      {/* Circle Boundary Inner Outline - slowly reveals fully */}
      <motion.div
        className="absolute inset-[1px] rounded-full border border-white/5 pointer-events-none"
        initial={{ opacity: 0.15 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.8 }}
      />
      
      {/* MAIN ANIMATION ELEMENT CONTAINERS */}
      
      {/* Particle Left: Begins at left boundary (-16px), travels smoothly to center (0px) */}
      <motion.div
        className="absolute w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.9)]"
        style={{ top: '50%', y: '-50%' }}
        initial={{ x: -16, opacity: 0, scale: 0.8 }}
        animate={{
          x: [-16, -16, 0, 0],
          opacity: [0, 1, 1, 0],
          scale: [0.8, 1.1, 1.2, 0]
        }}
        transition={{
          times: [0, 0.18, 0.55, 0.65],
          duration: 1.6,
          ease: [0.25, 0.8, 0.35, 1] // premium buttery smooth easing
        }}
      />

      {/* Particle Right: Begins at right boundary (16px), travels smoothly to center (0px) */}
      <motion.div
        className="absolute w-1.5 h-1.5 rounded-full bg-[#B85C38] shadow-[0_0_6px_rgba(184,92,56,0.9)]"
        style={{ top: '50%', y: '-50%' }}
        initial={{ x: 16, opacity: 0, scale: 0.8 }}
        animate={{
          x: [16, 16, 0, 0],
          opacity: [0, 1, 1, 0],
          scale: [0.8, 1.1, 1.2, 0]
        }}
        transition={{
          times: [0, 0.18, 0.55, 0.65],
          duration: 1.6,
          ease: [0.25, 0.8, 0.35, 1]
        }}
      />

      {/* Subtle collision spark: a soft center glow expansion upon merger */}
      <motion.div
        className="absolute w-5 h-5 rounded-full bg-gradient-to-r from-white to-[#B85C38] blur-xs opacity-0"
        style={{ left: '50%', top: '50%', x: '-50%', y: '-50%' }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: [0, 0, 1.4, 2.0, 0],
          opacity: [0, 0, 0.8, 0.3, 0]
        }}
        transition={{
          times: [0, 0.52, 0.58, 0.72, 0.9],
          duration: 1.6,
          ease: "easeOut"
        }}
      />

      {/* Elegant concentric energy ripple circle on collision */}
      <motion.div
        className="absolute rounded-full border border-[#B85C38]/40 pointer-events-none"
        style={{ left: '50%', top: '50%', x: '-50%', y: '-50%', width: '100%', height: '100%' }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: [0, 0, 1.1, 1.5],
          opacity: [0, 0, 0.7, 0]
        }}
        transition={{
          times: [0, 0.54, 0.60, 0.95],
          duration: 1.6,
          ease: "easeOut"
        }}
      />

      {/* Micro-spark visual needles (vertical & horizontal cinematic lines) */}
      <motion.div
        className="absolute w-[1px] h-6 bg-white/40"
        style={{ left: '50%', top: '50%', x: '-50%', y: '-50%' }}
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{
          scaleY: [0, 0, 1.5, 0],
          opacity: [0, 0, 0.7, 0]
        }}
        transition={{
          times: [0, 0.55, 0.62, 0.85],
          duration: 1.6,
          ease: "easeOut"
        }}
      />
      <motion.div
        className="absolute w-6 h-[1px] bg-[#B85C38]/40"
        style={{ left: '50%', top: '50%', x: '-50%', y: '-50%' }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{
          scaleX: [0, 0, 1.5, 0],
          opacity: [0, 0, 0.7, 0]
        }}
        transition={{
          times: [0, 0.55, 0.62, 0.85],
          duration: 1.6,
          ease: "easeOut"
        }}
      />
      
      {/* Premium RM Monogram Letters: Serif-style, fades in smoothly from the center upon collision */}
      <motion.span
        className="text-[12px] font-serif font-black italic tracking-widest pl-[1px] text-white transition-colors duration-400 ease-in-out group-hover:text-[#B85C38] select-none z-10"
        initial={{ opacity: 0, scale: 0.6, y: -0.5 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.70, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      >
        RM
      </motion.span>

    </div>
  );
};
