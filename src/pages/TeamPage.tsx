import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { SQUAD_MEMBERS } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Terminal, Search } from "lucide-react";
export function TeamPage() {
  const [search, setSearch] = useState("");
  const filtered = SQUAD_MEMBERS.filter(m =>
    m.name.toLowerCase().includes(search.toLowerCase()) ||
    m.callsign.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="min-h-screen bg-background text-terminal-green selection:bg-terminal-green selection:text-background crt-flicker">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 md:py-10 lg:py-12">
          <header className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8 pt-16 md:pt-24">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-display uppercase tracking-tighter italic">The Unit</h1>
              <p className="font-mono text-terminal-green/60 uppercase tracking-widest text-sm">Active Personnel Database // Clearance Level 5</p>
            </div>
            <div className="w-full md:w-80 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 opacity-40 text-terminal-green" />
              <Input
                placeholder="SEARCH CALLSIGN_"
                className="pl-10 bg-terminal-dim/10 border-terminal-green/30 focus-visible:ring-1 focus-visible:ring-terminal-green border-2 rounded-none uppercase font-mono text-xs placeholder:text-terminal-green/20 h-12"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </header>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
            <AnimatePresence mode="popLayout">
              {filtered.map((member) => (
                <motion.div
                  key={member.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="rounded-none border-2 border-terminal-green/20 bg-background hover:border-terminal-green group overflow-hidden transition-all shadow-[0_0_15px_rgba(0,255,65,0.05)] hover:shadow-[0_0_30px_rgba(0,255,65,0.2)]">
                    <div className="aspect-[4/5] relative overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 scale-110 group-hover:scale-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                      <div className="absolute bottom-6 left-6 right-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <div className="text-[10px] uppercase text-terminal-green font-bold tracking-[0.3em] opacity-60 font-mono mb-1">Callsign</div>
                        <div className="text-3xl font-display tracking-widest italic text-white uppercase">{member.callsign}</div>
                      </div>
                    </div>
                    <CardContent className="p-8 space-y-6">
                      <div className="border-l-4 border-terminal-green/40 pl-4 space-y-1">
                        <h3 className="text-xl font-bold uppercase font-mono text-white tracking-tighter">{member.name}</h3>
                        <p className="text-[10px] text-terminal-green/60 uppercase tracking-widest font-mono font-bold">{member.role} // {member.specialty}</p>
                      </div>
                      <div className="space-y-4 pt-2">
                        {Object.entries(member.stats).map(([key, val]) => (
                          <div key={key} className="space-y-2">
                            <div className="flex justify-between text-[10px] uppercase font-mono tracking-widest">
                              <span className="opacity-50">{key}</span>
                              <span className="text-white font-bold">{val}%</span>
                            </div>
                            <Progress value={val} className="h-1 bg-terminal-dim rounded-none border-none" />
                          </div>
                        ))}
                      </div>
                      <div className="pt-6 border-t border-terminal-green/10">
                        <div className="text-[9px] font-mono uppercase opacity-30 text-center tracking-[0.2em]">Biometric Scan Verified // Alpha Clearance Required</div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          {filtered.length === 0 && (
            <div className="py-40 text-center font-mono opacity-40 animate-pulse flex flex-col items-center gap-4">
              <Terminal size={32} />
              <div className="text-sm tracking-[0.3em] uppercase">NO OPERATIVES MATCHING CRITERIA_</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}