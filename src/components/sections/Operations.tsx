import React from "react";
import { motion } from "framer-motion";
import { OPERATIONS_LOG } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
export function Operations() {
  return (
    <section id="ops" className="py-24 border-t border-terminal-green/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-display uppercase tracking-tighter italic">Mission Logs</h2>
          <div className="text-terminal-green/40 font-mono text-xs uppercase">Decrypted Operations History</div>
        </div>
        <div className="space-y-4">
          {OPERATIONS_LOG.map((op, idx) => (
            <motion.div
              key={op.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group border border-terminal-green/20 p-6 flex flex-col md:flex-row gap-6 items-start md:items-center hover:bg-terminal-dim/10 transition-colors"
            >
              <div className="w-24 shrink-0 font-mono text-xs text-terminal-green font-bold">
                [{op.id}]
              </div>
              <div className="flex-1 space-y-1">
                <h3 className="text-xl font-display uppercase">{op.title}</h3>
                <p className="text-sm text-terminal-green/60">{op.location} // {op.summary}</p>
              </div>
              <div className="flex items-center gap-4">
                <Badge className={op.result === 'SUCCESS' ? 'bg-terminal-green/20 text-terminal-green border-terminal-green/40' : 'bg-alert-red/20 text-alert-red border-alert-red/40'}>
                  {op.result}
                </Badge>
                <div className="hidden group-hover:block text-2xs animate-pulse underline cursor-pointer uppercase">Decrypt Details</div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-24 p-12 border-4 border-dashed border-terminal-green/20 text-center space-y-6">
          <h3 className="text-2xl font-display uppercase">Recruitment Terminal</h3>
          <p className="max-w-md mx-auto text-terminal-green/60 text-sm">
            ARE YOU CAPABLE OF MAINTAINING ABSOLUTE STEALTH UNDER FIRE? 
            THE BADGERS ARE ALWAYS LOOKING FOR FRESH BLOOD.
          </p>
          <div className="flex items-center justify-center gap-4">
            <span className="text-terminal-green animate-blink">_</span>
            <input 
              type="email" 
              placeholder="ENTER SECURE EMAIL" 
              className="bg-transparent border-b-2 border-terminal-green p-2 focus:outline-none placeholder:text-terminal-green/20 uppercase"
            />
          </div>
        </div>
      </div>
    </section>
  );
}