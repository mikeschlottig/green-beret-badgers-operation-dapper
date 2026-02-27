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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 md:py-10 lg:py-12">
          <header className="mb-24 text-center pt-16 md:pt-24">
            <h1 className="text-6xl md:text-9xl font-display uppercase tracking-tighter italic mb-4">Capabilities</h1>
            <p className="font-mono text-terminal-green/60 uppercase tracking-widest text-sm">Available Tactical Solutions // Contract Ready</p>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-terminal-green/20 border border-terminal-green/20 mb-24">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-background p-12 space-y-8 group hover:bg-terminal-dim/10 transition-colors relative overflow-hidden border-r border-b border-terminal-green/10"
              >
                {/* Background Data Scrolling Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none font-mono text-[10px] break-all leading-none p-4">
                  {Array.from({ length: 15 }).map(() => (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')).join(' ')}
                </div>

                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity font-mono text-4xl font-bold">
                  0{idx + 1}
                </div>
                <div className="relative text-terminal-green group-hover:scale-110 transition-transform duration-300 w-fit aspect-square flex items-center justify-center p-4 border border-terminal-green/10">
                  <div className="absolute inset-0 bg-terminal-green/5 opacity-0 group-hover:opacity-100 group-hover:animate-spin-slow transition-opacity rounded-full [background:conic-gradient(from_0deg,rgba(0,255,65,0.2),transparent_90deg)]" />
                  {service.icon}
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-3xl font-display uppercase italic">{service.title}</h3>
                    <Badge variant="outline" className="border-terminal-green/40 text-terminal-green text-[10px] rounded-none">
                      RISK: {service.risk}
                    </Badge>
                  </div>
                  <p className="font-mono text-sm text-terminal-green/60 leading-relaxed uppercase">{service.desc}</p>
                  <div className="pt-6 flex justify-between items-center font-mono text-xs border-t border-terminal-green/10">
                    <span className="opacity-40 tracking-widest">{service.stats}</span>
                    <Link to="/contact" className="flex items-center gap-2 text-white hover:text-terminal-bright transition-colors group/link font-bold">
                      DEPLOY NOW <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
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