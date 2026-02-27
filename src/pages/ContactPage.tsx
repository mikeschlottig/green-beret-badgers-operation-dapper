import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TacticalButton } from "@/components/ui/retro-effects";
import { Terminal, Send, ShieldAlert } from "lucide-react";
import { toast } from "@/components/ui/sonner";
export function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("ENCRYPTION_LINK_ESTABLISHED", {
      description: "DATA_UPLOAD_COMPLETE // STATUS: SECURE",
      className: "font-mono uppercase text-xs border-2 border-terminal-green bg-background text-terminal-green",
    });
  };
  return (
    <div className="min-h-screen bg-background text-terminal-green selection:bg-terminal-green selection:text-background crt-flicker">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 md:py-10 lg:py-12">
          <div className="grid lg:grid-cols-2 gap-24 items-start pt-16 md:pt-24 mb-24">
            <div className="space-y-12">
              <header className="space-y-6">
                <h1 className="text-6xl md:text-8xl font-display uppercase tracking-tighter italic">Secure Link</h1>
                <p className="font-mono text-terminal-green/60 uppercase tracking-widest leading-relaxed text-sm">
                  Establish an encrypted channel for mission briefings or unit recruitment. All transmissions are end-to-end encrypted. Standard protocols apply.
                </p>
              </header>
              <div className="relative border border-terminal-green/20 p-8 space-y-8 bg-terminal-dim/5 shadow-[0_0_20px_rgba(0,255,65,0.02)]">
                <div className="absolute -top-3 left-6 px-2 bg-background font-mono text-[10px] opacity-60 font-bold">SATELLITE_FEED</div>
                <div className="aspect-video bg-black relative border border-terminal-green/10 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=800&auto=format&fit=crop"
                    alt="Satellite Map"
                    className="w-full h-full object-cover opacity-20 grayscale contrast-150"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 border-2 border-alert-red animate-ping rounded-full" />
                    <div className="absolute w-2 h-2 bg-alert-red rounded-full" />
                  </div>
                  <div className="absolute top-4 right-4 font-mono text-[10px] text-alert-red animate-pulse font-bold">
                    LOCATING_SIGNAL...
                  </div>
                  <div className="absolute bottom-4 left-4 font-mono text-[10px] opacity-40 font-bold bg-black/40 px-2 py-1">
                    COORD: 35.6895N / 139.6917E
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-8 font-mono text-[10px] opacity-40 uppercase font-bold">
                  <div className="space-y-1">
                    <div className="text-white border-b border-terminal-green/10 pb-1 mb-2 italic">HQ Region</div>
                    <div>NEO-TOKYO // SECTOR 4</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-white border-b border-terminal-green/10 pb-1 mb-2 italic">Channel</div>
                    <div>BAND_W_77.9_GZ</div>
                  </div>
                </div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="p-10 border-4 border-terminal-green bg-terminal-dim/10 relative shadow-[0_0_40px_rgba(0,255,65,0.05)]"
            >
              <div className="flex items-center gap-3 mb-8 border-b border-terminal-green/30 pb-6">
                <Terminal size={24} />
                <h2 className="text-2xl font-display uppercase tracking-widest">Input Transmission</h2>
              </div>
              <form className="space-y-6 font-mono text-sm" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Operative Identity</label>
                  <Input required className="bg-terminal-dim/20 border-terminal-green/30 rounded-none focus-visible:ring-1 focus-visible:ring-terminal-green border-2 py-6 text-white placeholder:opacity-20" placeholder="NAME_REQUIRED_" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Return Frequency</label>
                  <Input required type="email" className="bg-terminal-dim/20 border-terminal-green/30 rounded-none focus-visible:ring-1 focus-visible:ring-terminal-green border-2 py-6 text-white placeholder:opacity-20" placeholder="SECURE_EMAIL_REQUIRED_" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Mission Type</label>
                  <Select required>
                    <SelectTrigger className="bg-terminal-dim/20 border-terminal-green/30 rounded-none focus:ring-1 focus:ring-terminal-green border-2 h-12 uppercase text-xs text-white">
                      <SelectValue placeholder="SELECT_TYPE_" />
                    </SelectTrigger>
                    <SelectContent className="bg-black border-terminal-green/30 text-terminal-green font-mono uppercase text-xs rounded-none">
                      <SelectItem value="recon">Reconnaissance</SelectItem>
                      <SelectItem value="extraction">Extraction</SelectItem>
                      <SelectItem value="cyber">Cyber Ops</SelectItem>
                      <SelectItem value="demo">Demolitions</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Briefing Details</label>
                  <Textarea required className="bg-terminal-dim/20 border-terminal-green/30 rounded-none min-h-[150px] focus-visible:ring-1 focus-visible:ring-terminal-green border-2 text-white p-4 placeholder:opacity-20" placeholder="ENCRYPTED_MESSAGE_PAYLOAD_" />
                </div>
                <div className="pt-6">
                  <TacticalButton type="submit" className="w-full py-4 flex items-center justify-center gap-3 text-lg h-16">
                    <Send size={20} />
                    SEND TRANSMISSION_
                  </TacticalButton>
                </div>
                <div className="flex items-center gap-2 opacity-40 justify-center pt-2">
                  <ShieldAlert size={14} className="text-alert-red" />
                  <span className="text-[9px] uppercase font-bold tracking-tighter">Unauthorized access is punishable by cyber-erasure. System logging active.</span>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}