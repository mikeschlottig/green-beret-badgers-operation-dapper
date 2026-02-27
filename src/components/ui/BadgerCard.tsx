import React, { useState } from "react";
import { motion } from "framer-motion";
import { SquadMember } from "@/lib/data";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { Volume2, ShieldCheck, Zap } from "lucide-react";
interface BadgerCardProps {
  member: SquadMember;
  className?: string;
}
export function BadgerCard({ member, className }: BadgerCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleFlip = () => setIsFlipped(!isFlipped);
  const speakQuote = (e: React.MouseEvent) => {
    e.stopPropagation();
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(member.quote);
      utterance.rate = 0.85;
      utterance.pitch = 0.7; // Tactical deep voice
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utterance);
    }
  };
  return (
    <div 
      className={cn("perspective-1000 w-full aspect-[4/6] cursor-pointer group", className)}
      onClick={handleFlip}
    >
      <motion.div
        className="relative w-full h-full transition-all duration-500 preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        {/* Front Side */}
        <div className="absolute inset-0 backface-hidden rounded-none border-2 border-terminal-green/30 bg-background overflow-hidden flex flex-col">
          <div className="flex-1 relative overflow-hidden">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6 right-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <div className="text-[10px] uppercase text-terminal-green font-bold tracking-[0.3em] opacity-60 font-mono mb-1">
                Operative Status: Active
              </div>
              <div className="text-3xl font-display tracking-widest italic text-white uppercase">
                {member.callsign}
              </div>
            </div>
            <div className="absolute top-4 right-4 flex gap-2">
              <ShieldCheck className="w-5 h-5 text-terminal-green opacity-40" />
              <Zap className="w-5 h-5 text-terminal-green opacity-40 animate-pulse" />
            </div>
          </div>
          <div className="p-6 bg-terminal-dim/10 border-t border-terminal-green/20">
            <h3 className="text-lg font-bold uppercase font-mono text-terminal-green truncate">{member.name}</h3>
            <p className="text-[10px] text-terminal-green/60 uppercase tracking-widest font-mono font-bold">
              {member.role}
            </p>
          </div>
        </div>
        {/* Back Side (Holographic Dossier) */}
        <div 
          className="absolute inset-0 backface-hidden rounded-none border-2 border-terminal-green bg-black/95 overflow-hidden flex flex-col p-8 hologram-overlay"
          style={{ transform: "rotateY(180deg)" }}
        >
          <div className="mb-6 border-b border-terminal-green/30 pb-4">
            <div className="flex justify-between items-start mb-2">
              <span className="font-mono text-[10px] text-terminal-green/40 uppercase font-bold tracking-widest">
                Dossier_ID: {member.id}
              </span>
              <button 
                onClick={speakQuote}
                className="p-2 border border-terminal-green/30 hover:bg-terminal-green hover:text-black transition-colors"
              >
                <Volume2 size={16} />
              </button>
            </div>
            <h2 className="text-2xl font-display uppercase italic text-terminal-green">{member.callsign}</h2>
          </div>
          <div className="flex-1 space-y-6 overflow-y-auto no-scrollbar">
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-bold text-terminal-green/50 tracking-widest">Backstory</label>
              <p className="text-xs font-mono text-terminal-green/80 leading-relaxed uppercase">
                {member.backstory}
              </p>
            </div>
            <div className="space-y-4 pt-4 border-t border-terminal-green/10">
              <label className="text-[10px] uppercase font-bold text-terminal-green/50 tracking-widest">Tactical Stats</label>
              {Object.entries(member.stats).map(([key, val]) => (
                <div key={key} className="space-y-2">
                  <div className="flex justify-between text-[10px] uppercase font-mono tracking-widest">
                    <span className="opacity-50">{key}</span>
                    <span className="text-terminal-green font-bold">{val}%</span>
                  </div>
                  <Progress value={val} className="h-1 bg-terminal-dim rounded-none border-none" />
                </div>
              ))}
            </div>
            <div className="pt-4 italic font-mono text-[10px] text-terminal-green/40 text-center">
              " {member.quote} "
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-terminal-green/20 text-[9px] font-mono uppercase opacity-30 text-center tracking-[0.2em]">
            Biometric Scan Verified // Auth Required
          </div>
        </div>
      </motion.div>
    </div>
  );
}