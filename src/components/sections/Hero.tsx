import React from "react";
import { motion } from "framer-motion";
import { GlitchText, TacticalButton, TypewriterText } from "@/components/ui/retro-effects";
import { toast } from "@/components/ui/sonner";
export function Hero() {
  const handleEnlist = () => {
    toast.info("BIOMETRIC_SIGNATURE_LOGGED", {
      description: "Processing clearance for Operative 00-GUEST. Stand by...",
      className: "font-mono uppercase text-xs border-2 border-terminal-green bg-background text-terminal-green",
    });
  };
  const handleMissionBrief = () => {
    const nextSection = document.getElementById("commander");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-20"
           style={{ backgroundImage: 'radial-gradient(circle at center, #00FF41 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <div className="relative z-10 text-center space-y-8 max-w-4xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block px-4 py-1 border border-terminal-green/40 text-terminal-green uppercase tracking-[0.3em] text-xs mb-4"
        >
          Declassified Dossier // Level 5
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-display font-extrabold uppercase leading-none tracking-tighter"
        >
          <GlitchText text="Green Beret" className="block text-terminal-green" />
          <GlitchText text="Badgers" className="block text-white" />
        </motion.h1>
        <div className="h-20 max-w-2xl mx-auto text-terminal-green/80 font-mono text-sm md:text-lg leading-relaxed">
          <TypewriterText text="ELITE PARAMILITARY UNIT // SPECIALIZING IN ASYMMETRIC WARFARE, HIGH-STAKES RECON, AND UNCONVENTIONAL EXTRACTION. NO MISSION TOO SMALL. NO COST TOO HIGH." />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex flex-wrap justify-center gap-6 pt-8"
        >
          <TacticalButton onClick={handleEnlist} className="w-48 h-12">Enlist Now</TacticalButton>
          <TacticalButton onClick={handleMissionBrief} variant="alert" className="w-48 h-12">Mission Brief</TacticalButton>
        </motion.div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-30 animate-bounce cursor-pointer" onClick={handleMissionBrief}>
        <span className="text-[8px] uppercase tracking-widest mb-2">Scroll to decrypt</span>
        <div className="w-px h-12 bg-terminal-green" />
      </div>
    </section>
  );
}