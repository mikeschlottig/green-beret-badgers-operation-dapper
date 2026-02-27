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
      <main>
        <Hero />
        {/* Commander Intro */}
        <Commander />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 mb-24 flex justify-center">
          <Link to="/about">
            <TacticalButton>View Authority Bio_</TacticalButton>
          </Link>
        </div>
        {/* Squad Preview */}
        <SquadRoster />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 mb-24 flex justify-center">
          <Link to="/team">
            <TacticalButton>Full Personnel Roster_</TacticalButton>
          </Link>
        </div>
        {/* Testimonials */}
        <Testimonials />
        {/* Mission Preview */}
        <Operations />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 mb-24 flex justify-center">
          <Link to="/portfolio">
            <TacticalButton variant="alert">Access Mission Reports_</TacticalButton>
          </Link>
        </div>
      </main>
      <footer className="py-24 border-t border-terminal-green/20 bg-background">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <div className="space-y-6">
            <div className="font-display text-2xl uppercase tracking-widest text-terminal-green italic">
              Green Beret Badgers
            </div>
            <div className="font-mono text-2xs text-terminal-green/40 uppercase leading-relaxed">
              Tactical agency R.O. // Established Secure Connection since 1994. 
              Paramilitary solutions for a chaotic world.
            </div>
          </div>
          <div className="space-y-4 font-mono text-xs uppercase">
            <div className="text-white mb-2 italic">Quick Access</div>
            <Link to="/about" className="block hover:text-terminal-bright">About Dossier</Link>
            <Link to="/services" className="block hover:text-terminal-bright">Service Catalog</Link>
            <Link to="/portfolio" className="block hover:text-terminal-bright">Ops Portfolio</Link>
            <Link to="/team" className="block hover:text-terminal-bright">Operatives</Link>
          </div>
          <div className="space-y-6">
            <div className="font-mono text-xs text-white uppercase italic">Secure Contact</div>
            <Link to="/contact">
              <TacticalButton className="w-full">Initiate Link_</TacticalButton>
            </Link>
            <div className="flex justify-center md:justify-start gap-6 text-[10px] uppercase opacity-40">
              <a href="#" className="hover:text-terminal-green">Terms</a>
              <a href="#" className="hover:text-terminal-green">Privacy</a>
              <a href="#" className="hover:text-terminal-green">Logout</a>
            </div>
          </div>
        </div>
        <div className="text-center mt-12 opacity-20 font-mono text-[8px] uppercase">
          © 2025 Tactical Agency R.O. // SYSTEM_USER: GUEST // ALL RIGHTS RESERVED
        </div>
      </footer>
      <Toaster position="bottom-right" theme="dark" />
    </div>
  );
}