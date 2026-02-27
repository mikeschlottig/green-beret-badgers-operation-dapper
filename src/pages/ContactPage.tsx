import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TacticalButton, GlitchText } from "@/components/ui/retro-effects";
import { Terminal, Send, ShieldAlert } from "lucide-react";
export function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-terminal-green selection:bg-terminal-green selection:text-background crt-flicker">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-12">
            <header className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-display uppercase tracking-tighter italic">Secure Link</h1>
              <p className="font-mono text-terminal-green/60 uppercase tracking-widest leading-relaxed">
                Establish an encrypted channel for mission briefings or unit recruitment. All transmissions are end-to-end encrypted.
              </p>
            </header>
            <div className="relative border border-terminal-green/20 p-8 space-y-8 bg-terminal-dim/5 shadow-[0_0_20px_rgba(0,255,65,0.02)]">
              <div className="absolute -top-3 left-6 px-2 bg-background font-mono text-[10px] opacity-60">SATELLITE_FEED</div>
              <div className="aspect-video bg-black relative border border-terminal-green/10 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=800&auto=format&fit=crop" 
                  alt="Satellite Map"
                  className="w-full h-full object-cover opacity-30 grayscale contrast-150"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 border border-alert-red animate-ping rounded-full" />
                </div>
                <div className="absolute top-4 right-4 font-mono text-[10px] text-alert-red animate-pulse">
                  LOCATING_SIGNAL...
                </div>
                <div className="absolute bottom-4 left-4 font-mono text-[10px] opacity-40">
                  COORD: 35.6895N / 139.6917E
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8 font-mono text-[10px] opacity-40 uppercase">
                <div>
                  <div className="text-white border-b border-terminal-green/10 pb-1 mb-2">HQ Region</div>
                  <div>NEO-TOKYO // SECTOR 4</div>
                </div>
                <div>
                  <div className="text-white border-b border-terminal-green/10 pb-1 mb-2">Channel</div>
                  <div>BAND_W_77.9_GZ</div>
                </div>
              </div>
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-10 border-4 border-terminal-green bg-terminal-dim/10 relative"
          >
            <div className="flex items-center gap-2 mb-8 border-b border-terminal-green/30 pb-4">
              <Terminal size={20} />
              <h2 className="text-xl font-display uppercase tracking-widest">Input Transmission</h2>
            </div>
            <form className="space-y-6 font-mono text-sm" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-2xs uppercase opacity-60">Operative Identity</label>
                <Input className="bg-transparent border-terminal-green/30 rounded-none focus-visible:ring-1 focus-visible:ring-terminal-green" placeholder="NAME_REQUIRED_" />
              </div>
              <div className="space-y-2">
                <label className="text-2xs uppercase opacity-60">Return Frequency</label>
                <Input className="bg-transparent border-terminal-green/30 rounded-none focus-visible:ring-1 focus-visible:ring-terminal-green" placeholder="SECURE_EMAIL_REQUIRED_" />
              </div>
              <div className="space-y-2">
                <label className="text-2xs uppercase opacity-60">Mission Type</label>
                <Select>
                  <SelectTrigger className="bg-transparent border-terminal-green/30 rounded-none focus:ring-1 focus:ring-terminal-green uppercase text-xs">
                    <SelectValue placeholder="SELECT_TYPE_" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border-terminal-green/30 text-terminal-green font-mono uppercase text-xs">
                    <SelectItem value="recon">Reconnaissance</SelectItem>
                    <SelectItem value="extraction">Extraction</SelectItem>
                    <SelectItem value="cyber">Cyber Ops</SelectItem>
                    <SelectItem value="demo">Demolitions</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-2xs uppercase opacity-60">Briefing Details</label>
                <Textarea className="bg-transparent border-terminal-green/30 rounded-none min-h-[150px] focus-visible:ring-1 focus-visible:ring-terminal-green" placeholder="ENCRYPTED_MESSAGE_PAYLOAD_" />
              </div>
              <div className="pt-6">
                <TacticalButton className="w-full py-4 flex items-center justify-center gap-3">
                  <Send size={16} />
                  SEND TRANSMISSION_
                </TacticalButton>
              </div>
              <div className="flex items-center gap-2 opacity-30 justify-center">
                <ShieldAlert size={12} />
                <span className="text-[9px] uppercase">Unauthorized access is punishable by cyber-erasure.</span>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}