import React from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_ITEMS } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { TacticalMap } from "@/components/ui/TacticalMap";
import { TerminalRecruiter } from "@/components/ui/TerminalRecruiter";
import { TacticalButton } from "@/components/ui/retro-effects";
import { toast } from "@/components/ui/sonner";
export function Operations() {
  const handleEnlist = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("SIGNAL_SUCCESS: TRANSMISSION RECEIVED", {
      description: "Operative details logged in central database.",
      className: "font-mono uppercase text-xs border-2 border-terminal-green bg-background text-terminal-green",
    });
  };
  return (
    <section id="ops" className="py-12 md:py-24 border-t border-terminal-green/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-display uppercase tracking-tighter italic">Mission Logs</h2>
          <div className="text-terminal-green/40 font-mono text-xs uppercase">Decrypted Operations History</div>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          <div className="space-y-4">
          {PORTFOLIO_ITEMS.map((op, idx) => (
            <motion.div
              key={op.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group border border-terminal-green/20 p-6 flex flex-col md:flex-row gap-6 items-start md:items-center hover:bg-terminal-dim/10 transition-colors relative"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300">
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-terminal-green" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-terminal-green" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-terminal-green" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-terminal-green" />
              </div>
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
          <div className="hidden lg:block sticky top-32 h-fit">
            <TacticalMap />
          </div>
        </div>

        <div className="mt-24 space-y-8">
          <div className="text-center">
            <h3 className="text-3xl font-display uppercase mb-2">Recruitment Terminal</h3>
            <p className="text-terminal-green/60 text-xs font-mono uppercase tracking-widest">Authorized Personnel Command Line Interface</p>
          </div>
          <TerminalRecruiter />
        </div>
      </div>
    </section>
  );
}