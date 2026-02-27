import React from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_ITEMS } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
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
        <div className="space-y-4">
          {PORTFOLIO_ITEMS.map((op, idx) => (
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
        <div className="mt-24 p-8 md:p-12 border-4 border-dashed border-terminal-green/20 text-center space-y-8 bg-terminal-dim/5">
          <div className="space-y-4">
            <h3 className="text-2xl font-display uppercase">Recruitment Terminal</h3>
            <p className="max-w-md mx-auto text-terminal-green/60 text-sm font-mono">
              ARE YOU CAPABLE OF MAINTAINING ABSOLUTE STEALTH UNDER FIRE?
              THE BADGERS ARE ALWAYS LOOKING FOR FRESH BLOOD.
            </p>
          </div>
          <form onSubmit={handleEnlist} className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
            <div className="relative w-full flex items-center gap-2">
              <span className="text-terminal-green animate-blink font-mono">_</span>
              <Input
                type="email"
                required
                placeholder="_ENTER SECURE EMAIL"
                className="bg-transparent border-0 border-b-2 border-terminal-green rounded-none px-2 py-6 focus-visible:ring-0 placeholder:text-terminal-green/20 uppercase font-mono h-12"
              />
            </div>
            <TacticalButton type="submit" className="w-full sm:w-auto h-12 px-8">ENLIST_</TacticalButton>
          </form>
        </div>
      </div>
    </section>
  );
}