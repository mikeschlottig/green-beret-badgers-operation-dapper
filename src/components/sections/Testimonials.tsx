import React from "react";
import { TESTIMONIALS } from "@/lib/data";
import { motion } from "framer-motion";
import { Radio, Wifi } from "lucide-react";
export function Testimonials() {
  return (
    <section className="py-24 border-t border-terminal-green/20 bg-terminal-dim/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-display uppercase tracking-tighter italic">Intercepted Signals</h2>
          <div className="text-terminal-green/40 font-mono text-xs uppercase">Encrypted Client Validation Logs</div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="p-8 border border-terminal-green/20 relative group hover:bg-terminal-dim/10 transition-colors"
            >
              <div className="absolute top-4 right-4 flex items-center gap-2 opacity-30 group-hover:opacity-100 transition-opacity">
                <Wifi size={14} className="animate-pulse" />
                <span className="font-mono text-[10px]">SIGNAL_{t.signal}%</span>
              </div>
              <div className="flex items-center gap-2 mb-6 text-white font-mono text-[10px] tracking-[0.2em]">
                <Radio size={12} className="text-terminal-green" />
                SOURCE: {t.source}
              </div>
              <blockquote className="text-xl font-display italic leading-snug mb-4 uppercase">
                "{t.text}"
              </blockquote>
              <div className="h-px w-full bg-terminal-green/10" />
              <div className="pt-4 font-mono text-[9px] opacity-20 uppercase tracking-widest">
                Timestamp: 0x{Math.random().toString(16).slice(2, 10).toUpperCase()} // Checksum: VALID
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}