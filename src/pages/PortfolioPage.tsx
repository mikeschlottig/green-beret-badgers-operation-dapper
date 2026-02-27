import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { PORTFOLIO_ITEMS } from "@/lib/data";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
export function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background text-terminal-green selection:bg-terminal-green selection:text-background crt-flicker">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 md:py-10 lg:py-12">
          <header className="mb-24 pt-16 md:pt-24">
            <h1 className="text-5xl md:text-8xl font-display uppercase tracking-tighter italic mb-4">Operations Log</h1>
            <div className="flex flex-wrap gap-6 font-mono text-[10px] text-terminal-green/40 uppercase tracking-widest">
              <span className="border border-terminal-green/20 px-2 py-1">DECRYPTED: 100%</span>
              <span className="border border-terminal-green/20 px-2 py-1">ENCRYPTION: NONE</span>
              <span className="border border-terminal-green/20 px-2 py-1">AUTH: COMMANDER_KONG</span>
            </div>
          </header>
          <div className="grid gap-16 mb-24">
            {PORTFOLIO_ITEMS.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="grid lg:grid-cols-3 border border-terminal-green/20 group hover:border-terminal-green transition-all bg-terminal-dim/5"
              >
                <div className="p-8 lg:p-12 space-y-6 lg:col-span-2 border-b lg:border-b-0 lg:border-r border-terminal-green/20">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm opacity-40 font-bold">[{item.id}]</span>
                    <Badge className={item.result === 'SUCCESS' ? 'bg-terminal-green text-background' : 'bg-alert-red text-white'}>
                      {item.result}
                    </Badge>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-display uppercase italic">{item.title}</h2>
                  <div className="grid sm:grid-cols-2 gap-10 font-mono text-sm pt-4">
                    <div className="space-y-4">
                      <h4 className="text-white uppercase border-b border-terminal-green/10 pb-2 italic text-xs font-bold">AAR Summary</h4>
                      <p className="opacity-70 uppercase leading-relaxed text-xs">{item.summary}</p>
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-white uppercase border-b border-terminal-green/10 pb-2 italic text-xs font-bold">Objectives</h4>
                      <ul className="list-none space-y-2 opacity-70 uppercase text-[10px]">
                        {item.objectives.map((obj, i) => (
                          <li key={i} className="flex gap-2 items-center">
                            <span className="text-terminal-green font-bold text-[12px]">▶</span> {obj}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="p-8 lg:p-12 space-y-8 flex flex-col justify-center">
                  <h4 className="font-display text-xl uppercase italic">Tactical Metrics</h4>
                  <div className="grid gap-4 font-mono">
                    {Object.entries(item.metrics).map(([k, v]) => (
                      <div key={k} className="flex justify-between border-b border-terminal-green/10 pb-2">
                        <span className="text-[10px] opacity-40 uppercase font-bold">{k}</span>
                        <span className="text-xs font-bold text-white tracking-widest">{v}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4">
                    <div className="aspect-video bg-black border border-terminal-green/20 flex items-center justify-center relative overflow-hidden group-hover:border-terminal-green transition-colors">
                      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,65,0.05)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none" />
                      <div className="text-[9px] uppercase opacity-40 animate-pulse font-mono font-bold tracking-tighter text-glow">SATELLITE_FEED_OFFLINE // SIG_LOSS_04</div>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-terminal-green/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}