import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { TypewriterText, GlitchText } from "@/components/ui/retro-effects";
import { motion } from "framer-motion";
const HISTORY = [
  { year: "1994", event: "Project 'Burrow' initiated in high-altitude research facility." },
  { year: "2001", event: "First successful deployment: Operation Glass Ceiling." },
  { year: "2012", event: "Commander G. Kong takes oversight of global operations." },
  { year: "2024", event: "Unit rebranded to Green Beret Badgers after Neo-Tokyo Incident." },
];
export function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-terminal-green selection:bg-terminal-green selection:text-background crt-flicker">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <header className="mb-24">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-2xs uppercase tracking-[0.5em] mb-4 opacity-50">
            Dossier // Agency Profile
          </motion.div>
          <h1 className="text-6xl md:text-8xl font-display uppercase tracking-tighter mb-8 italic">
            <GlitchText text="Declassified" />
          </h1>
          <div className="max-w-3xl font-mono text-lg leading-relaxed border-l-2 border-terminal-green pl-6">
            <TypewriterText text="THE GREEN BERET BADGERS ARE A NEXT-LEVEL PARAMILITARY OPERATION TO SAVE THE WORLD FROM UNCONVENTIONAL THREATS. WE OPERATE WHERE GOVERNMENTS CANNOT." />
          </div>
        </header>
        <section className="grid md:grid-cols-2 gap-24 items-start mb-32">
          <div className="space-y-12">
            <h2 className="text-3xl font-display uppercase tracking-widest italic border-b border-terminal-green/30 pb-4">Our Core Values</h2>
            <div className="grid gap-6">
              {[
                { title: "ABSOLUTE STEALTH", desc: "No footprint, no witnesses, no failure." },
                { title: "LETHAL PRECISION", desc: "Surgical strikes executed with mechanical accuracy." },
                { title: "GLOBAL REACH", desc: "Deployed anywhere on the planet within 4 hours." },
              ].map((val, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ x: 10 }}
                  className="p-6 border border-terminal-green/20 bg-terminal-dim/5 hover:bg-terminal-dim/10 transition-colors"
                >
                  <h3 className="font-bold text-xl mb-2">[{idx + 1}] {val.title}</h3>
                  <p className="text-sm text-terminal-green/60 uppercase">{val.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="space-y-12">
            <h2 className="text-3xl font-display uppercase tracking-widest italic border-b border-terminal-green/30 pb-4">Tactical History</h2>
            <div className="relative pl-8 space-y-12 before:absolute before:left-0 before:top-0 before:w-[2px] before:h-full before:bg-terminal-green/20">
              {HISTORY.map((item, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[35px] top-1 w-4 h-4 bg-background border-2 border-terminal-green rotate-45" />
                  <div className="text-2xl font-display mb-2 text-white italic">{item.year}</div>
                  <p className="font-mono text-sm opacity-80 uppercase leading-relaxed">{item.event}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}