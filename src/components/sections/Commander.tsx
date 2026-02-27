import React from "react";
import { motion } from "framer-motion";
import { COMMANDER_PROFILE } from "@/lib/data";
import { TypewriterText } from "@/components/ui/retro-effects";
export function Commander() {
  return (
    <section id="commander" className="py-24 border-t border-terminal-green/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-2xl font-display text-terminal-green uppercase tracking-widest flex items-center gap-4">
            <span className="h-px flex-1 bg-terminal-green/20" />
            Commanding Officer
            <span className="h-px flex-1 bg-terminal-green/20" />
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="relative border-4 border-terminal-green p-2 bg-terminal-dim/10"
          >
            <div className="absolute -top-4 -left-4 bg-alert-red text-white px-4 py-1 font-bold transform -rotate-12 z-20 shadow-lg">
              CLASSIFIED
            </div>
            <img 
              src={COMMANDER_PROFILE.image} 
              alt="Commander Kong"
              className="w-full grayscale contrast-125 brightness-75 hover:grayscale-0 transition-all duration-700 aspect-[3/4] object-cover"
            />
            <div className="mt-4 p-4 border-t border-terminal-green/40 font-mono text-xs flex justify-between">
              <span>DNA_MATCH: 99.8%</span>
              <span>BIO_SCAN: VERIFIED</span>
            </div>
          </motion.div>
          <div className="space-y-6 font-mono">
            <div className="space-y-1">
              <label className="text-2xs uppercase text-terminal-green/50">Name</label>
              <div className="text-2xl text-terminal-green border-b border-terminal-green/20 pb-2">{COMMANDER_PROFILE.name}</div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-2xs uppercase text-terminal-green/50">Rank</label>
                <div className="text-lg border-b border-terminal-green/20 pb-2">{COMMANDER_PROFILE.rank}</div>
              </div>
              <div className="space-y-1">
                <label className="text-2xs uppercase text-terminal-green/50">Callsign</label>
                <div className="text-lg border-b border-terminal-green/20 pb-2">{COMMANDER_PROFILE.callsign}</div>
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-2xs uppercase text-terminal-green/50">Service Bio</label>
              <div className="text-sm leading-relaxed text-terminal-green/80 h-32">
                <TypewriterText text={COMMANDER_PROFILE.bio} speed={30} />
              </div>
            </div>
            <div className="pt-8 flex gap-4">
              <div className="h-12 w-12 border border-terminal-green/40 flex items-center justify-center">
                <div className="w-8 h-8 bg-terminal-green/20" />
              </div>
              <div className="flex-1 border border-terminal-green/40 p-2 text-2xs flex items-center">
                SIGNATURE REQUIRED TO VIEW FULL DOSSIER_
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}