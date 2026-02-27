import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { SquadRoster } from '@/components/sections/SquadRoster';
import { Commander } from '@/components/sections/Commander';
import { Operations } from '@/components/sections/Operations';
import { Testimonials } from '@/components/sections/Testimonials';
import { Toaster } from '@/components/ui/sonner';
import { TacticalButton } from '@/components/ui/retro-effects';
export function HomePage() {
  return (
    <div className="relative min-h-screen selection:bg-terminal-green selection:text-background crt-flicker">
      <Navbar />
      <main className="w-full overflow-hidden">
        <Hero />
        <Commander />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 mb-24 flex justify-center">
          <Link to="/about">
            <TacticalButton>View Authority Bio_</TacticalButton>
          </Link>
        </div>
        <SquadRoster />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 mb-24 flex justify-center">
          <Link to="/team">
            <TacticalButton>Full Personnel Roster_</TacticalButton>
          </Link>
        </div>
        <Testimonials />
        <Operations />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 mb-24 flex justify-center">
          <Link to="/portfolio">
            <TacticalButton variant="alert">Access Mission Reports_</TacticalButton>
          </Link>
        </div>
      </main>
      <footer className="py-24 border-t border-terminal-green/20 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-terminal-green/30 animate-pulse" />
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-16 text-center md:text-left">
          <div className="space-y-6">
            <div className="font-display text-2xl uppercase tracking-widest text-terminal-green italic">
              Green Beret Badgers
            </div>
            <div className="font-mono text-[10px] text-terminal-green/40 uppercase leading-relaxed max-w-xs mx-auto md:mx-0">
              Tactical agency R.O. // Established Secure Connection since 1994.
              Paramilitary solutions for a chaotic world. No footprint remains.
            </div>
          </div>
          <div className="space-y-4 font-mono text-xs uppercase tracking-wider">
            <div className="text-white mb-2 italic opacity-60">Quick Access</div>
            <Link to="/about" className="block hover:text-terminal-bright transition-colors">About Dossier</Link>
            <Link to="/services" className="block hover:text-terminal-bright transition-colors">Service Catalog</Link>
            <Link to="/portfolio" className="block hover:text-terminal-bright transition-colors">Ops Portfolio</Link>
            <Link to="/team" className="block hover:text-terminal-bright transition-colors">Operatives</Link>
          </div>
          <div className="space-y-6">
            <div className="font-mono text-xs text-white uppercase italic opacity-60">Secure Contact</div>
            <Link to="/contact">
              <TacticalButton className="w-full">Initiate Link_</TacticalButton>
            </Link>
            <div className="flex justify-center md:justify-start gap-6 text-[9px] uppercase font-mono tracking-tighter opacity-40">
              <a href="#" className="hover:text-terminal-green transition-colors underline underline-offset-2">Terms</a>
              <a href="#" className="hover:text-terminal-green transition-colors underline underline-offset-2">Privacy</a>
              <a href="#" className="hover:text-terminal-green transition-colors underline underline-offset-2">Logout</a>
            </div>
          </div>
        </div>
        <div className="text-center mt-16 opacity-20 font-mono text-[8px] uppercase tracking-[0.2em]">
          © 2025 Tactical Agency R.O. // SYSTEM_USER: GUEST // ALL RIGHTS RESERVED
        </div>
      </footer>
      <Toaster position="bottom-right" theme="dark" />
    </div>
  );
}