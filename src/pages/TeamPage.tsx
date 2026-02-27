import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { SQUAD_MEMBERS } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import { BadgerCard } from "@/components/ui/BadgerCard";
import { Input } from "@/components/ui/input";
import { Terminal, Search, ShieldAlert } from "lucide-react";
export function TeamPage() {
  const [search, setSearch] = useState("");
  const filtered = SQUAD_MEMBERS.filter(m =>
    m.name.toLowerCase().includes(search.toLowerCase()) ||
    m.callsign.toLowerCase().includes(search.toLowerCase()) ||
    m.role.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="min-h-screen bg-background text-terminal-green selection:bg-terminal-green selection:text-background crt-flicker">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 md:py-10 lg:py-12">
          <header className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8 pt-16 md:pt-24 border-b border-terminal-green/10 pb-8">
            <div className="space-y-4">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-[10px] uppercase tracking-[0.5em] text-terminal-green/40 font-mono"
              >
                Database_Query: Personnel_Roster
              </motion.div>
              <h1 className="text-6xl md:text-8xl font-display uppercase tracking-tighter italic">The Unit</h1>
              <p className="font-mono text-terminal-green/60 uppercase tracking-widest text-sm">
                Authorized Personnel Only // Accessing Clearance Level 5
              </p>
            </div>
            <div className="w-full md:w-96 relative group">
              <div className="absolute -inset-1 bg-terminal-green/10 blur group-focus-within:bg-terminal-green/20 transition-all" />
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 opacity-40 text-terminal-green" />
                <Input
                  placeholder="SEARCH_BY_CALLSIGN_OR_ROLE_"
                  className="pl-12 bg-black border-terminal-green/30 focus-visible:ring-1 focus-visible:ring-terminal-green border-2 rounded-none uppercase font-mono text-xs placeholder:text-terminal-green/20 h-14"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                {search && (
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-mono opacity-40">
                    {filtered.length}_RESULTS
                  </div>
                )}
              </div>
            </div>
          </header>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 mb-32">
            <AnimatePresence mode="popLayout">
              {filtered.map((member) => (
                <motion.div
                  key={member.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ duration: 0.4 }}
                >
                  <BadgerCard member={member} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          {filtered.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-40 text-center font-mono flex flex-col items-center gap-6"
            >
              <div className="p-6 border-2 border-dashed border-terminal-green/20 rounded-full animate-pulse">
                <ShieldAlert size={48} className="text-terminal-green/40" />
              </div>
              <div className="space-y-2">
                <div className="text-lg tracking-[0.3em] uppercase text-terminal-green">NO OPERATIVES MATCHING CRITERIA_</div>
                <div className="text-xs opacity-40 uppercase">Verify search parameters and clearance level.</div>
              </div>
              <button 
                onClick={() => setSearch("")}
                className="text-xs underline underline-offset-4 hover:text-white transition-colors uppercase"
              >
                Clear Filters_
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}