import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, Bomb, Cpu, Crosshair, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
const SERVICES = [
  {
    icon: <Search className="w-12 h-12" />,
    title: "Deep Reconnaissance",
    desc: "Infiltrating hostile environments to gather high-value intelligence without leaving a trace.",
    risk: "LOW-HIGH",
    stats: "STEALTH: 99%"
  },
  {
    icon: <Bomb className="w-12 h-12" />,
    title: "Precision Demolitions",
    desc: "Neutralizing infrastructure or specialized targets with minimal collateral damage.",
    risk: "CRITICAL",
    stats: "POWER: 100%"
  },
  {
    icon: <Cpu className="w-12 h-12" />,
    title: "Cyber Warfare",
    desc: "Infiltrating hardened networks and remapping global data flows under fire.",
    risk: "MEDIUM",
    stats: "SPEED: 95%"
  },
  {
    icon: <Crosshair className="w-12 h-12" />,
    title: "Extraction Ops",
    desc: "Recovering high-value assets or personnel from denied territories or warzones.",
    risk: "EXTREME",
    stats: "EVAC: 100%"
  }
];
export function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-terminal-green selection:bg-terminal-green selection:text-background crt-flicker">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <header className="mb-24 text-center">
          <h1 className="text-6xl md:text-9xl font-display uppercase tracking-tighter italic mb-4">Capabilities</h1>
          <p className="font-mono text-terminal-green/60 uppercase tracking-widest">Available Tactical Solutions // Contract Ready</p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1px bg-terminal-green/10 border border-terminal-green/10">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-background p-12 space-y-8 group hover:bg-terminal-dim/5 transition-colors"
            >
              <div className="text-terminal-green group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-3xl font-display uppercase italic">{service.title}</h3>
                  <Badge variant="outline" className="border-terminal-green/40 text-terminal-green text-[10px]">
                    RISK: {service.risk}
                  </Badge>
                </div>
                <p className="font-mono text-sm text-terminal-green/60 leading-relaxed uppercase">{service.desc}</p>
                <div className="pt-4 flex justify-between items-center font-mono text-xs border-t border-terminal-green/10">
                  <span className="opacity-40">{service.stats}</span>
                  <Link to="/contact" className="flex items-center gap-2 hover:text-white transition-colors group/link">
                    DEPLOY NOW <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}