import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { PORTFOLIO_ITEMS } from "@/lib/data";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
export function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background text-terminal-green selection:bg-terminal-green selection:text-background crt-flicker">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <header className="mb-24">
          <h1 className="text-5xl md:text-8xl font-display uppercase tracking-tighter italic mb-4">Operations Log</h1>
          <div className="flex gap-4 font-mono text-xs text-terminal-green/40">
            <span>DECRYPTED: 100%</span>
            <span>ENCRYPTION: NONE</span>
            <span>AUTH: COMMANDER_KONG</span>
          </div>
        </header>
        <div className="grid gap-12">
          {PORTFOLIO_ITEMS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="grid lg:grid-cols-3 border border-terminal-green/20 group hover:border-terminal-green transition-all"
            >
              {/* Mission Hero */}
              <div className="p-8 lg:p-12 space-y-6 lg:col-span-2 border-b lg:border-b-0 lg:border-r border-terminal-green/20">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm opacity-40">[{item.id}]</span>
                  <Badge className={item.result === 'SUCCESS' ? 'bg-terminal-green text-background' : 'bg-alert-red text-white'}>
                    {item.result}
                  </Badge>
                </div>
                <h2 className="text-4xl md:text-5xl font-display uppercase italic">{item.title}</h2>
                <div className="grid sm:grid-cols-2 gap-8 font-mono text-sm pt-4">
                  <div className="space-y-4">
                    <h4 className="text-white uppercase border-b border-terminal-green/10 pb-2 italic">AAR Summary</h4>
                    <p className="opacity-70 uppercase leading-relaxed">{item.summary}</p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-white uppercase border-b border-terminal-green/10 pb-2 italic">Objectives</h4>
                    <ul className="list-disc list-inside space-y-1 opacity-70 uppercase text-xs">
                      {item.objectives.map((obj, i) => <li key={i}>{obj}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
              {/* Tactical Metrics */}
              <div className="p-8 lg:p-12 bg-terminal-dim/5 space-y-8 flex flex-col justify-center">
                <h4 className="font-display text-xl uppercase italic">Mission Metrics</h4>
                <div className="grid gap-6 font-mono">
                  {Object.entries(item.metrics).map(([k, v]) => (
                    <div key={k} className="flex justify-between border-b border-terminal-green/10 pb-1">
                      <span className="text-2xs opacity-40 uppercase">{k}</span>
                      <span className="text-sm font-bold">{v}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-8">
                  <div className="aspect-video bg-terminal-green/5 border border-terminal-green/10 flex items-center justify-center relative overflow-hidden group-hover:bg-terminal-green/10 transition-colors">
                    <div className="text-[10px] uppercase opacity-20 animate-pulse">SATELLITE_FEED_OFFLINE</div>
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-terminal-green/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}