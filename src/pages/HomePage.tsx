import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { SquadRoster } from '@/components/sections/SquadRoster';
import { Commander } from '@/components/sections/Commander';
import { Operations } from '@/components/sections/Operations';
import { Toaster } from '@/components/ui/sonner';
export function HomePage() {
  return (
    <div className="relative min-h-screen selection:bg-terminal-green selection:text-background crt-flicker">
      {/* Global Overlay Components */}
      <Navbar />
      {/* Scrollable Content */}
      <main>
        <Hero />
        <Commander />
        <SquadRoster />
        <Operations />
      </main>
      <footer className="py-12 border-t border-terminal-green/20 bg-background">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-4">
          <div className="font-display text-xl uppercase tracking-widest text-terminal-green">
            Green Beret Badgers
          </div>
          <div className="font-mono text-2xs text-terminal-green/40 uppercase">
            © 1994-2025 Tactical Agency R.O. // Established Secure Connection 
          </div>
          <div className="flex justify-center gap-6 text-2xs uppercase tracking-tighter opacity-50">
            <a href="#" className="hover:text-terminal-green">Terms of Service</a>
            <a href="#" className="hover:text-terminal-green">Privacy Policy</a>
            <a href="#" className="hover:text-terminal-green">Secure Logout</a>
          </div>
        </div>
      </footer>
      {/* Utilities */}
      <Toaster position="bottom-right" theme="dark" />
    </div>
  );
}