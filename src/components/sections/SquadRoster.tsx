import React from "react";
import { SQUAD_MEMBERS } from "@/lib/data";
import { BadgerCard } from "@/components/ui/BadgerCard";
import { motion } from "framer-motion";
export function SquadRoster() {
  // Only show first 6 on the homepage for visual balance
  const featuredMembers = SQUAD_MEMBERS.slice(0, 6);
  return (
    <section id="roster" className="py-24 bg-terminal-dim/5 relative overflow-hidden">
      {/* Background Decorative Lines */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-terminal-green/20 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-display uppercase tracking-tighter mb-2 italic">Active Roster</h2>
            <div className="h-1 w-24 bg-terminal-green mx-auto mb-4 shadow-terminal" />
            <p className="text-terminal-green/60 uppercase text-xs tracking-widest font-mono">
              Elite Operatives // Select Dossier to Decrypt Details
            </p>
          </motion.div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {featuredMembers.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <BadgerCard member={member} />
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-terminal-green/20 to-transparent" />
    </section>
  );
}