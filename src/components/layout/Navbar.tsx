import React from "react";
import { GlitchText } from "@/components/ui/retro-effects";
import { Shield, Radio, Terminal } from "lucide-react";
export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-terminal-green/30 bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between font-mono text-xs md:text-sm">
        <div className="flex items-center gap-4">
          <Terminal className="text-terminal-green animate-pulse" size={20} />
          <GlitchText text="GBB_SYS_v2.0" className="font-bold tracking-tighter text-terminal-green" as="h1" />
        </div>
        <div className="hidden md:flex items-center gap-8 uppercase">
          <a href="#roster" className="hover:text-terminal-bright transition-colors">Squad</a>
          <a href="#commander" className="hover:text-terminal-bright transition-colors">Command</a>
          <a href="#ops" className="hover:text-terminal-bright transition-colors">Logs</a>
          <div className="flex items-center gap-2 px-3 py-1 border border-terminal-green/20 bg-terminal-dim/20 rounded">
            <Radio size={14} className="text-terminal-green" />
            <span className="text-terminal-green animate-blink">STATUS: ONLINE</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right hidden sm:block">
            <div className="text-2xs opacity-50 uppercase">Location</div>
            <div>35.6895° N, 139.6917° E</div>
          </div>
          <Shield size={24} className="text-terminal-green opacity-80" />
        </div>
      </div>
    </nav>
  );
}